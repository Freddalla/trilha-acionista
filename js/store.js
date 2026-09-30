/*
 * Armazenamento da Forja.
 * - "nuvem": quando a página roda como Artifact do Claude com banco compartilhado (db),
 *   todos os membros veem os mesmos perfis e o admin enxerga todo mundo.
 * - "local": no GitHub Pages ou aberto direto no navegador, os dados ficam neste
 *   navegador (localStorage). O admin pode exportar/importar os dados em JSON.
 * Para produção multiusuário fora do Claude, troque o LocalBackend por um backend
 * (Supabase, Firebase etc.) mantendo a mesma interface.
 */
(function () {
  const KEY = "forja-cedisa-v1";
  const COLLECTIONS = ["members", "posts"];

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }

  function LocalBackend() {
    let data = { members: {}, posts: {} };
    try { const raw = safeGet(KEY); if (raw) data = Object.assign(data, JSON.parse(raw)); } catch (e) {}
    const listeners = [];
    const persist = () => safeSet(KEY, JSON.stringify(data));
    try {
      window.addEventListener("storage", (ev) => {
        if (ev.key !== KEY || !ev.newValue) return;
        try { data = Object.assign({ members: {}, posts: {} }, JSON.parse(ev.newValue)); listeners.forEach((f) => f()); } catch (e) {}
      });
    } catch (e) {}
    return {
      mode: "local",
      all: (c) => Object.values(data[c] || {}),
      async set(c, id, doc) { data[c][id] = doc; persist(); listeners.forEach((f) => f()); },
      async remove(c, id) { delete data[c][id]; persist(); listeners.forEach((f) => f()); },
      onChange: (f) => listeners.push(f),
      dump: () => JSON.parse(JSON.stringify(data)),
      async load(obj) {
        COLLECTIONS.forEach((c) => { if (obj && obj[c]) Object.assign(data[c], obj[c]); });
        persist(); listeners.forEach((f) => f());
      }
    };
  }

  function CloudBackend(db) {
    const cache = { members: {}, posts: {} };
    const listeners = [];
    const notify = () => listeners.forEach((f) => f());
    COLLECTIONS.forEach((c) => {
      db.collection(c).onSnapshot((snap) => {
        const next = {};
        snap.docs.forEach((d) => { if (d.exists) next[d.id] = Object.assign({}, d.data(), { id: d.id }); });
        cache[c] = next; notify();
      }, (err) => console.warn("Forja db:", err && err.code));
    });
    return {
      mode: "nuvem",
      all: (c) => Object.values(cache[c] || {}),
      async set(c, id, doc) { cache[c][id] = doc; notify(); await db.collection(c).doc(id).set(JSON.parse(JSON.stringify(doc))); },
      async remove(c, id) { delete cache[c][id]; notify(); await db.collection(c).doc(id).delete(); },
      onChange: (f) => listeners.push(f),
      dump: () => JSON.parse(JSON.stringify(cache)),
      async load(obj) {
        for (const c of COLLECTIONS) {
          for (const [id, doc] of Object.entries((obj && obj[c]) || {})) await this.set(c, id, doc);
        }
      }
    };
  }

  async function init() {
    if (window.claude && typeof window.claude.use === "function") {
      try {
        const db = await Promise.race([
          window.claude.use("db"),
          new Promise((r) => setTimeout(() => r(null), 6000))
        ]);
        if (db) return CloudBackend(db);
      } catch (e) {}
    }
    return LocalBackend();
  }

  window.ForjaStore = {
    init,
    session: {
      get: () => safeGet("forja-session"),
      set: (id) => safeSet("forja-session", id || "")
    }
  };
})();
