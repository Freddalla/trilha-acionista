/* Forja · Trilha do Acionista — aplicação */
(function () {
  const C = window.FORJA;
  const $app = document.getElementById("app");

  /* ================= utilidades ================= */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n, d = 0) => Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  function hash(str) { // cyrb53 — só para não guardar o PIN em texto puro
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  const pinHash = (pin) => hash("forja-cedisa:" + pin);
  const AV = ["#13306B", "#F36F21", "#23845A", "#7A4CC2", "#C23B6A", "#1F8FA6", "#9A6A12", "#44546F"];
  const avColor = (s) => AV[parseInt(hash(s || "x"), 36) % AV.length];
  const initials = (n) => ((n || "?").replace(/\(.*?\)/g, "").trim().split(/\s+/).filter((w) => /^\p{L}/u.test(w)).slice(0, 2).map((w) => w[0]).join("") || "?").toUpperCase();
  const avatar = (m, cls = "") => `<span class="avatar ${cls}" style="background:${m.color || avColor(m.name)}" aria-hidden="true">${esc(initials(m.nick || m.name))}</span>`;
  const firstName = (m) => (m.nick || (m.name || "").split(" ")[0] || "");

  function ageOf(m) {
    if (!m || !m.birth) return null;
    const b = new Date(m.birth + "T12:00:00"); if (isNaN(b)) return null;
    const n = new Date(); let a = n.getFullYear() - b.getFullYear();
    if (n.getMonth() < b.getMonth() || (n.getMonth() === b.getMonth() && n.getDate() < b.getDate())) a--;
    return Math.max(0, a);
  }
  const bandByAge = (a) => C.bands.find((b) => a != null && a >= b.min && a <= b.max) || C.bands[C.bands.length - 1];
  const bandOf = (m) => (m && m.bandOverride && C.bands.find((b) => b.id === m.bandOverride)) || bandByAge(ageOf(m));
  const ageBand = (m) => bandByAge(ageOf(m));
  const levelOf = (xp) => { let l = C.levels[0], next = null; C.levels.forEach((x, i) => { if (xp >= x.xp) { l = x; next = C.levels[i + 1] || null; } }); return { l, next }; };
  function bandProgress(m, band) {
    const done = band.modules.filter((id) => m.progress && m.progress[id] && m.progress[id].done).length;
    return { done, total: band.modules.length, pct: Math.round((done / band.modules.length) * 100) };
  }
  const quizLevelOf = (band) => (band.mode === "kid" ? "kid" : band.mode === "teen" ? "teen" : "adult");

  /* ================= ícones ================= */
  const P = {
    truck: '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.6-.8 1.6-1.6 0-1.2-1-1.4-1-2.4 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10.5" cy="7.5" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/>',
    coil: '<ellipse cx="12" cy="12" rx="9" ry="9"/><ellipse cx="12" cy="12" rx="5.5" ry="5.5"/><ellipse cx="12" cy="12" rx="2" ry="2"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    people: '<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M2.5 19c.6-3.2 3-5 5.5-5s4.9 1.8 5.5 5"/><path d="M14 14.5c2.8-.6 6 .9 7 4.5"/>',
    coin: '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-5a2 2 0 0 0-2 2"/><path d="M20 4v14h-6"/>',
    process: '<circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><path d="M7.5 12h9"/><path d="M13 9l3 3-3 3"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    building: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><path d="M8 10h2M14 10h2"/>',
    chart: '<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16v-4M12 16V9M16 16v-7"/><path d="M8 9l4-3 4 1 3-3"/>',
    circles: '<circle cx="12" cy="8" r="5"/><circle cx="8" cy="15" r="5"/><circle cx="16" cy="15" r="5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/><path d="M15 9l5-5M17 4h3v3"/>',
    flame: '<path d="M12 21c-4 0-7-2.8-7-6.6 0-3.3 2.2-5 3.5-7.4.4 1.6 1.2 2.6 2.3 3C10.5 6.6 12 4.4 14 3c0 3 5 5.4 5 11.4C19 18.2 16 21 12 21z"/>',
    handshake: '<path d="M2 12l4-4 4 2 3-2 4 1 5 3"/><path d="M6 8v6l5 5 2-1 1 1 2-1 1 1 3-4"/>',
    scale: '<path d="M12 4v16M6 20h12"/><path d="M5 8h14"/><path d="M5 8l-3 6h6zM19 8l-3 6h6z"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    sound: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    grad: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>'
  };
  const ico = (n, s = 24) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.star}</svg>`;
  const truckSvg = () => `<svg viewBox="0 0 76 56" aria-hidden="true"><path d="M4 12h40v28H4z" fill="currentColor" opacity=".9"/><path d="M44 22h14l10 10v8H44z" fill="currentColor"/><path d="M50 25h7l6 7H50z" fill="#fff" opacity=".85"/><rect x="8" y="17" width="32" height="4" rx="2" fill="#fff" opacity=".35"/><circle cx="16" cy="44" r="6" fill="#0E1A33"/><circle cx="16" cy="44" r="2.4" fill="#fff"/><circle cx="56" cy="44" r="6" fill="#0E1A33"/><circle cx="56" cy="44" r="2.4" fill="#fff"/></svg>`;
  const brandMark = () => `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="9" fill="#F36F21"/><path d="M29 13.5A10 10 0 1 0 29 26.5" fill="none" stroke="#fff" stroke-width="4.2" stroke-linecap="round"/><path d="M24 17a4.8 4.8 0 1 0 0 6" fill="none" stroke="#0B1E45" stroke-width="3" stroke-linecap="round"/></svg>`;

  /* ================= estado ================= */
  let store = null;
  const S = { me: null, view: "welcome", p: {}, wiz: null, lesson: null, quiz: null, apt: null, flash: null };
  let pendingRender = false;

  const members = () => store.all("members").filter(Boolean).sort((a, b) => (a.name || "").localeCompare(b.name || "", "pt-BR"));
  const posts = () => store.all("posts").sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  const memberById = (id) => store.all("members").find((m) => m.id === id);

  async function saveMe(patch) {
    if (!S.me) return;
    Object.assign(S.me, patch || {}, { lastSeen: Date.now() });
    try { await store.set("members", S.me.id, S.me); } catch (e) { toast("Não consegui salvar agora. Confira sua conexão e tente de novo."); }
  }
  async function saveMember(m) { try { await store.set("members", m.id, m); } catch (e) { toast("Não consegui salvar. Você pode não ter permissão de edição."); } }

  let toastT;
  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg; el.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (el.hidden = true), 2600);
  }
  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) return toast("Seu navegador não lê textos em voz alta.");
      speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = "pt-BR"; u.rate = .95; speechSynthesis.speak(u);
    } catch (e) {}
  }

  function go(view, p = {}) { S.view = view; S.p = p; render(); window.scrollTo({ top: 0 }); }

  /* ================= layout ================= */
  function navItems() {
    const b = bandOf(S.me);
    const items = [["home", "Início"], ["trail", "Trilha"], ["quiz", "Desafio"], ["group", "O Grupo"], ["family", "Família"], ["mural", "Mural"]];
    if (b.mode !== "kid") items.push(["courses", "Cursos"], ["gov", "Governança"]);
    if (S.me.isAdmin) items.push(["admin", "Conselho"]);
    return items;
  }
  function shell(inner) {
    const cur = S.view === "module" ? "trail" : S.view;
    return `<header class="topbar"><div class="topbar-in">
      <button class="brand" data-act="nav" data-v="home" aria-label="Início">${brandMark()}<span class="brand-txt"><b>${esc(C.brand.appName.toUpperCase())}</b><span>${esc(C.brand.tagline)} · ${esc(C.brand.group)}</span></span></button>
      <nav class="nav" aria-label="Seções">${navItems().map(([v, t]) => `<button data-act="nav" data-v="${v}" ${cur === v ? 'aria-current="page"' : ""}>${t}</button>`).join("")}</nav>
      <button class="me-chip" data-act="nav" data-v="profile" aria-label="Meu perfil">${avatar(S.me)}<span>${esc(firstName(S.me))}</span></button>
    </div></header><main id="main">${inner}</main>`;
  }

  function render() {
    const ae = document.activeElement;
    if (S.me && ae && /INPUT|TEXTAREA|SELECT/.test(ae.tagName) && S._fromStore) { pendingRender = true; S._fromStore = false; return; }
    S._fromStore = false;
    if (S.me) { const fresh = memberById(S.me.id); if (fresh && fresh !== S.me) S.me = Object.assign({}, fresh); }
    document.body.classList.toggle("kid", !!(S.me && bandOf(S.me).mode === "kid"));
    let html;
    if (!S.me) html = S.view === "onboard" ? viewOnboard() : S.view === "login" ? viewLogin() : viewWelcome();
    else {
      const V = { home: viewHome, trail: viewTrail, module: viewModule, quiz: viewQuiz, group: viewGroup, family: viewFamily, mural: viewMural, courses: viewCourses, gov: viewGov, admin: viewAdmin, profile: viewProfile, onboard: viewOnboard };
      html = shell((V[S.view] || viewHome)());
    }
    $app.innerHTML = html;
    afterRender();
  }
  let lastKey = "";
  function afterRender() {
    const key = [S.view, S.wiz && S.wiz.step, S.lesson && S.lesson.step, S.lesson && S.lesson.act && S.lesson.act.i, S.quiz && S.quiz.i, S.p && S.p.id].join("|");
    const el = document.querySelector("[data-autofocus]");
    if (el && (key !== lastKey || el.tagName === "BUTTON")) el.focus({ preventScroll: true });
    lastKey = key;
  }

  /* ================= boas-vindas / login ================= */
  function viewWelcome() {
    const ms = members();
    return `<div class="welcome">
      <section class="hero-card">
        <div class="hero-glow"></div>
        <div class="row">${brandMark()}<span class="eyebrow" style="color:rgba(255,255,255,.75)">${esc(C.brand.group)} · ${esc(C.brand.tagline)}</span></div>
        <h1>Forjados no mesmo <em>aço</em>.</h1>
        <p>${esc(C.brand.manifesto)}</p>
        ${forgeLine(null, true)}
        <div class="row">
          <button class="btn btn-hot" data-act="start-onboard">Criar meu perfil ${ico("arrow", 18)}</button>
          ${ms.length ? `<button class="btn btn-ghost" data-act="goto-login">Já tenho perfil</button>` : ""}
        </div>
      </section>
      <div class="grid-2">
        <section class="panel flat stack-s"><span class="eyebrow">Como funciona</span>
          <p>1. Crie seu perfil em 2 minutos: nome, idade, família e hobbies.<br>2. Receba a trilha da sua etapa do aço, de Minério (0 a 3 anos) a Estrutura (25+).<br>3. Aprenda com cartões, quizzes e missões em família.</p></section>
        <section class="panel flat stack-s"><span class="eyebrow">Onde ficam os dados</span>
          <p>${store.mode === "nuvem" ? "Os perfis ficam num banco compartilhado desta página: toda a família vê o mesmo mural e o Conselho acompanha a evolução de cada um." : "Nesta versão, os perfis ficam salvos neste navegador. O Conselho pode exportar e importar os dados pelo painel de administração."}</p></section>
      </div>
    </div>`;
  }
  function viewLogin() {
    const ms = members(); const sel = S.p.id && memberById(S.p.id);
    if (sel) {
      return `<div class="welcome" style="max-width:520px"><section class="panel stack">
        <button class="link" data-act="goto-login">${ico("back", 16)} Trocar de perfil</button>
        <div class="row">${avatar(sel, "l")}<div><h2>Olá, ${esc(firstName(sel))}</h2><p class="muted">Digite seu PIN de 4 números.</p></div></div>
        <form class="stack" data-form="login"><label class="field" for="login-pin">PIN
          <input id="login-pin" class="pin" type="password" inputmode="numeric" maxlength="4" autocomplete="off" data-autofocus></label>
          ${S.flash ? `<div class="feedback no">${esc(S.flash)}</div>` : ""}
          <button class="btn btn-hot" type="submit">Entrar</button>
          <p class="muted" style="font-size:.88rem">Esqueceu o PIN? Peça para alguém do Conselho de Família redefinir no painel.</p></form>
      </section></div>`;
    }
    return `<div class="welcome"><section class="stack">
      <div class="section-head"><div class="stack-s"><span class="eyebrow">Entrar</span><h2>Quem está usando?</h2></div>
        <button class="btn btn-ghost btn-s" data-act="nav-out" data-v="welcome">${ico("back", 16)} Voltar</button></div>
      <div class="profile-pick">${ms.map((m) => `<button data-act="pick-login" data-id="${m.id}">${avatar(m)}<span><b>${esc(m.nick || m.name)}</b><small>${esc(m.generation || "")} · ${esc(bandOf(m).name)}</small></span></button>`).join("")}</div>
      <div><button class="btn btn-hot" data-act="start-onboard">Criar novo perfil</button></div>
    </section></div>`;
  }

  /* ================= cadastro ================= */
  const WIZ_STEPS = ["Quem é você", "Sua família", "Seu dia a dia", "Seus hobbies", "Sua senha de acesso"];
  function viewOnboard() {
    const w = S.wiz; const d = w.data; const step = w.step;
    const editing = !!w.editing;
    const seg = (field, opts) => `<div class="seg">${opts.map(([v, t, sub]) => `<button type="button" data-act="wiz-set" data-f="${field}" data-val="${esc(v)}" aria-pressed="${d[field] === v}">${esc(t)}${sub ? `<small>${esc(sub)}</small>` : ""}</button>`).join("")}</div>`;
    let body = "";
    if (w.done) {
      const b = bandOf(d);
      return `<div class="welcome" style="max-width:760px"><section class="hero-card">
        <div class="hero-glow"></div>
        <span class="eyebrow" style="color:rgba(255,255,255,.75)">Sua etapa na forja</span>
        <h1>${esc(firstName(d))}, você é <em>${esc(b.name)}</em>.</h1>
        <p>${esc(b.line)} Trilha ${esc(b.age)} com ${b.modules.length} módulos. ${b.guide ? esc(b.guide) : ""}</p>
        ${forgeLine(b.id, true)}
        <div class="row"><button class="btn btn-hot" data-act="nav" data-v="trail">Começar minha trilha ${ico("arrow", 18)}</button><button class="btn btn-ghost" data-act="nav" data-v="home">Ir para o início</button></div>
      </section></div>`;
    }
    if (step === 0) body = `
      <label class="field" for="w-name">Nome completo<input id="w-name" type="text" data-bind="name" value="${esc(d.name || "")}" autocomplete="name" data-autofocus></label>
      <label class="field" for="w-nick">Como gosta de ser chamado(a)? <small>Opcional</small><input id="w-nick" type="text" data-bind="nick" value="${esc(d.nick || "")}"></label>
      <label class="field" for="w-birth">Data de nascimento <small>Define a sua trilha</small><input id="w-birth" type="date" data-bind="birth" value="${esc(d.birth || "")}" max="${new Date().toISOString().slice(0, 10)}"></label>
      <label class="row" for="w-guard" style="font-weight:600"><input id="w-guard" type="checkbox" data-bind="byGuardian" ${d.byGuardian ? "checked" : ""}> Sou pai, mãe ou responsável e estou criando o perfil de uma criança</label>
      ${d.byGuardian ? `<label class="field" for="w-gname">Nome do responsável<input id="w-gname" type="text" data-bind="guardian" value="${esc(d.guardian || "")}"></label>` : ""}`;
    if (step === 1) body = `
      <div class="stack-s"><b>De qual ramo da família?</b>${seg("branch", C.family.branches.map((b) => [b, b]).concat([["Outro", "Outro", "Cônjuge ou agregado(a)"]]))}</div>
      <div class="stack-s"><b>Qual geração?</b>${seg("generation", [["2ª geração", "2ª geração", "Filhos dos fundadores"], ["3ª geração", "3ª geração", "Netos"], ["4ª geração", "4ª geração", "Bisnetos"], ["Cônjuge", "Cônjuge / agregado(a)", "Casado(a) com alguém da família"]])}</div>`;
    if (step === 2) body = `
      <label class="field" for="w-occ">${ageOf(d) != null && ageOf(d) < 18 ? "Escola e série (ou 'ainda não vai à escola')" : "Profissão ou ocupação"}<input id="w-occ" type="text" data-bind="occupation" value="${esc(d.occupation || "")}" placeholder="${ageOf(d) != null && ageOf(d) < 18 ? "Ex.: 5º ano" : "Ex.: Engenheira civil"}"></label>
      ${ageOf(d) == null || ageOf(d) >= 16 ? `<div class="stack-s"><b>Você trabalha no Grupo Cedisa?</b>${seg("works", [["sim", "Sim"], ["nao", "Não"]])}</div>
      ${d.works === "sim" ? `<label class="field" for="w-role">Empresa e cargo<input id="w-role" type="text" data-bind="role" value="${esc(d.role || "")}" placeholder="Ex.: Cedisa · Analista comercial"></label>` : ""}` : ""}`;
    if (step === 3) {
      const hs = d.hobbies || [];
      const all = Array.from(new Set(C.hobbySuggestions.concat(hs)));
      body = `
      <p class="muted">Toque nos hobbies que combinam com você. Esta etapa é opcional: se quiser, pule direto para "Continuar".</p>
      <div class="stack-s"><b>Hobbies e coisas que você ama</b><div class="chips">${all.map((h) => `<button type="button" class="chip" data-act="wiz-hobby" data-h="${esc(h)}" aria-pressed="${hs.includes(h)}">${esc(h)}</button>`).join("")}</div>
      <label class="field" for="w-hobby">Outro hobby <small>Escreva e toque em Adicionar (ou só continue: o que estiver escrito entra também)</small>
        <span class="row"><input id="w-hobby" type="text" placeholder="Ex.: Vôlei" style="flex:1"><button class="btn btn-ghost btn-s" type="button" data-act="wiz-add-hobby">Adicionar</button></span></label></div>
      <label class="field" for="w-talent">Um talento seu <small>Opcional. Algo que você faz bem</small><input id="w-talent" type="text" data-bind="talent" value="${esc(d.talent || "")}"></label>`;
    }
    if (step === 4) body = editing ? `
      <label class="field" for="w-pin">Nova senha de 4 números <small>Deixe em branco para manter a atual</small><input id="w-pin" class="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="new-password" data-bind="pin" data-digits value="${esc(d.pin || "")}"></label>
      <label class="field" for="w-pin2">Repita a nova senha<input id="w-pin2" class="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="new-password" data-bind="pin2" data-digits value="${esc(d.pin2 || "")}"></label>` : `
      <p class="notice">Crie uma senha de <b>4 números</b> (por exemplo, 2580). Você vai usá-la para entrar na trilha. Guarde bem: se esquecer, alguém do Conselho de Família pode redefinir.</p>
      <label class="field" for="w-pin">Senha de 4 números<input id="w-pin" class="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="new-password" data-bind="pin" data-digits value="${esc(d.pin || "")}" data-autofocus></label>
      <label class="field" for="w-pin2">Digite a senha de novo, para confirmar<input id="w-pin2" class="pin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4" autocomplete="new-password" data-bind="pin2" data-digits value="${esc(d.pin2 || "")}"></label>
      <details><summary>Sou do Conselho de Família</summary><label class="field" for="w-admin" style="margin-top:10px">Código de administrador<input id="w-admin" type="text" data-bind="adminCode" value="${esc(d.adminCode || "")}" autocomplete="off"></label></details>`;
    return `<div class="welcome" style="max-width:720px"><section class="panel stack">
      <div class="row between"><span class="eyebrow">Passo ${step + 1} de ${WIZ_STEPS.length}</span>
        <button class="link" data-act="${editing ? "nav" : "nav-out"}" data-v="${editing ? "profile" : "welcome"}">Cancelar</button></div>
      <div class="steps-dots">${WIZ_STEPS.map((_, i) => `<i class="${i <= step ? "on" : ""}"></i>`).join("")}</div>
      <h2>${WIZ_STEPS[step]}</h2>
      <form class="stack" data-form="wiz" novalidate>${body}
        ${S.flash ? `<div class="feedback no" role="alert">${esc(S.flash)}</div>` : ""}
        <div class="row between">${step > 0 ? `<button type="button" class="btn btn-ghost" data-act="wiz-back">${ico("back", 18)} Voltar</button>` : "<span></span>"}
          <button type="submit" class="btn btn-hot">${step === WIZ_STEPS.length - 1 ? (editing ? "Salvar" : "Criar perfil e entrar") : step === 3 ? "Continuar para a senha" : "Continuar"} ${ico("arrow", 18)}</button></div>
      </form>
    </section></div>`;
  }
  function wizValidate() {
    const d = S.wiz.data, s = S.wiz.step;
    if (s === 0) { if (!d.name || d.name.trim().length < 2) return "Escreva o nome completo."; if (!d.birth) return "Informe a data de nascimento. É ela que define a trilha."; }
    if (s === 1) { if (!d.branch) return "Escolha o ramo da família."; if (!d.generation) return "Escolha a geração."; }
    if (s === 4) {
      if (S.wiz.editing && !d.pin && !d.pin2) return null;
      if (!/^\d{4}$/.test(d.pin || "")) return "A senha precisa ter exatamente 4 números.";
      if (d.pin !== d.pin2) return "As duas senhas não são iguais. Digite de novo.";
      if (d.adminCode && d.adminCode.trim() !== C.brand.adminCode) return "Código de administrador incorreto. Deixe em branco se você não é do Conselho.";
    }
    return null;
  }
  async function wizFinish() {
    const d = S.wiz.data;
    if (S.wiz.editing) {
      const patch = { name: d.name.trim(), nick: (d.nick || "").trim(), birth: d.birth, byGuardian: !!d.byGuardian, guardian: d.guardian || "", branch: d.branch, generation: d.generation, occupation: d.occupation || "", works: d.works || "", role: d.role || "", hobbies: d.hobbies || [], talent: d.talent || "" };
      if (d.pin) patch.pinHash = pinHash(d.pin);
      await saveMe(patch); S.wiz = null; toast("Perfil atualizado."); return go("profile");
    }
    const id = uid();
    const m = { id, name: d.name.trim(), nick: (d.nick || "").trim(), birth: d.birth, byGuardian: !!d.byGuardian, guardian: d.guardian || "", branch: d.branch, generation: d.generation, occupation: d.occupation || "", works: d.works || "", role: d.role || "", hobbies: d.hobbies || [], talent: d.talent || "",
      pinHash: pinHash(d.pin), isAdmin: !!(d.adminCode && d.adminCode.trim() === C.brand.adminCode), color: avColor(d.name + id), createdAt: Date.now(), lastSeen: Date.now(), progress: {}, xp: 0, answers: {}, missions: {}, courses: [], quizBest: {} };
    S.me = m; ForjaStore.session.set(id);
    await saveMember(m);
    S.wiz.done = true; render();
  }

  /* ================= linha da forja ================= */
  function forgeLine(currentId, dark) {
    const idx = C.bands.findIndex((b) => b.id === currentId);
    return `<div class="forge" role="list" aria-label="Etapas da trilha">${C.bands.map((b, i) => `<div role="listitem" class="forge-step ${i < idx ? "done" : ""} ${i === idx ? "current" : ""}" ${dark ? "" : 'style="background:var(--surface-2);border-color:var(--line)"'}><span class="bar"></span><b>${esc(b.name)}</b><small>${esc(b.age.replace(" anos", "").replace(" ou mais", "+"))}</small></div>`).join("")}</div>`;
  }

  /* ================= início ================= */
  function viewHome() {
    const m = S.me, b = bandOf(m), pr = bandProgress(m, b), lv = levelOf(m.xp || 0);
    const next = b.modules.find((id) => !(m.progress[id] && m.progress[id].done));
    const N = C.numbers; const pct = Math.round((N.toneladasRealizadas / N.toneladasMeta) * 100);
    const commons = hobbyCommons(m);
    const lastPosts = posts().slice(0, 2);
    return `
    <section class="panel panel-navy home-hero">
      <div class="row between"><div class="stack-s"><span class="eyebrow">${esc(m.generation || "")} · ${esc(b.age)}</span>
        <h1>Olá, ${esc(firstName(m))}. Sua etapa é <span style="color:var(--hot)">${esc(b.name)}</span>.</h1>
        <p class="muted">${esc(b.line)} ${b.guide ? esc(b.guide) : ""}</p></div>
      </div>
      ${forgeLine(b.id, true)}
      <div class="grid-2">
        <div class="stack-s"><div class="row between"><b>${pr.done} de ${pr.total} módulos</b><span class="mono num">${pr.pct}%</span></div><div class="progress"><i style="width:${pr.pct}%"></i></div>
          <div class="row" style="margin-top:6px">${next ? `<button class="btn btn-hot" data-act="open-mod" data-id="${next}">Continuar: ${esc(C.modules[next].title)} ${ico("arrow", 18)}</button>` : `<span class="pill ok">${ico("check", 14)} Trilha concluída</span><button class="btn btn-ghost btn-s" data-act="nav" data-v="quiz">Fazer o Desafio do Aço</button>`}</div></div>
        <div class="stack-s"><div class="row between"><b>${esc(lv.l.t)}</b><span class="mono num">${fmt(m.xp || 0)} XP</span></div>
          <div class="progress"><i style="width:${lv.next ? Math.min(100, Math.round(((m.xp || 0) - lv.l.xp) / (lv.next.xp - lv.l.xp) * 100)) : 100}%"></i></div>
          <span class="muted" style="font-size:.88rem">${lv.next ? `Faltam ${fmt(lv.next.xp - (m.xp || 0))} XP para ${esc(lv.next.t)}` : "Nível máximo. Agora é ajudar os mais novos!"}</span></div>
      </div>
    </section>

    <section class="stack">
      <div class="section-head"><div class="stack-s"><span class="eyebrow">Cedisa · ${esc(N.periodo)}</span><h2>O Grupo em movimento</h2></div><button class="btn btn-ghost btn-s" data-act="nav" data-v="group">Ver tudo sobre o Grupo</button></div>
      <div class="stats">
        <div class="panel stat"><span class="eyebrow">Média diária</span><b>${fmt(N.mediaDiaria, 2)} t</b><span>${fmt(N.diasUteis)} dias úteis</span></div>
        <div class="panel stat"><span class="eyebrow">Caminhões</span><b>${fmt(N.caminhoes)}</b><span>${N.caminhoesDia} por dia</span></div>
        <div class="panel stat"><span class="eyebrow">Meta do ano</span><b>${pct}%</b><span>${fmt(N.toneladasRealizadas)} de ${fmt(N.toneladasMeta)} t</span></div>
        <div class="panel stat"><span class="eyebrow">Beneficiamento</span><b>${N.beneficiamentoPct}%</b><span>do volume faturado</span></div>
      </div>
    </section>

    <div class="grid-2">
      <section class="panel stack"><div class="row between"><h3>Mural da família</h3><button class="link" data-act="nav" data-v="mural">Abrir mural</button></div>
        ${lastPosts.length ? lastPosts.map(postHtml).join('<hr class="sep">') : `<p class="muted">Nada publicado ainda. Conte uma iniciativa, uma conquista ou uma foto de família.</p><div><button class="btn btn-ghost btn-s" data-act="nav" data-v="mural">Escrever a primeira publicação</button></div>`}
      </section>
      <section class="panel stack"><h3>Você tem em comum</h3>
        ${commons.length ? `<div class="stack-s">${commons.slice(0, 4).map(([h, ps]) => `<div><b>${esc(h)}</b> <span class="muted">com ${ps.map((p) => esc(firstName(p))).join(", ")}</span></div>`).join("")}</div>` : `<p class="muted">Quando mais pessoas da família entrarem, mostramos aqui os hobbies em comum para puxar assunto no próximo almoço de domingo.</p>`}
        <button class="link" style="justify-self:start" data-act="nav" data-v="family">Conhecer a família</button>
      </section>
    </div>`;
  }
  function hobbyCommons(m) {
    const out = [];
    (m.hobbies || []).forEach((h) => { const ps = members().filter((o) => o.id !== m.id && (o.hobbies || []).includes(h)); if (ps.length) out.push([h, ps]); });
    return out.sort((a, b) => b[1].length - a[1].length);
  }

  /* ================= trilha ================= */
  function viewTrail() {
    const m = S.me, b = bandOf(m), pr = bandProgress(m, b), real = ageBand(m);
    return `
    <section class="stack">
      <div class="section-head"><div class="stack-s"><span class="eyebrow">Trilha ${esc(b.age)}</span><h1>${esc(b.name)}</h1><p class="muted">${esc(b.line)} ${b.guide ? esc(b.guide) : ""}</p></div>
        <div class="stack-s" style="min-width:200px"><div class="row between"><b>${pr.done}/${pr.total}</b><span class="mono num">${pr.pct}%</span></div><div class="progress"><i style="width:${pr.pct}%"></i></div></div></div>
      <div class="panel flat">${forgeLine(b.id, false)}</div>
      ${b.id !== real.id ? `<div class="notice">Você está vendo a trilha ${esc(b.name)}. A sua, pela idade, é ${esc(real.name)}. <button class="link" data-act="set-band" data-id="">Voltar para a minha</button></div>` : ""}
      <div class="modules">${b.modules.map((id, i) => modTag(id, i)).join("")}</div>
    </section>
    <section class="panel flat stack-s"><h3>Explorar outras etapas</h3><p class="muted">Pais podem abrir a trilha dos filhos para fazer junto. Todos podem revisitar etapas anteriores.</p>
      <div class="chips">${C.bands.map((x) => `<button class="chip" data-act="set-band" data-id="${x.id === real.id ? "" : x.id}" aria-pressed="${x.id === b.id}">${esc(x.name)} · ${esc(x.age)}</button>`).join("")}</div></section>`;
  }
  function modTag(id, i) {
    const mod = C.modules[id]; const done = S.me.progress[id] && S.me.progress[id].done;
    const kind = { quiz: "Quiz", sort: "Classificar", count: "Contar", sim: "Simulador", reflect: "Reflexão", mission: "Missão em família", aptitude: "Mapa de aptidões", allocate: "Simulador de sócio" }[mod.activity.type];
    return `<button class="tag ${done ? "done" : ""}" data-act="open-mod" data-id="${id}">
      <span class="tag-ico">${ico(mod.icon)}</span>
      <span class="stack-s"><span class="meta">Módulo ${String(i + 1).padStart(2, "0")} · ${mod.minutes} min · ${kind}</span><h3>${esc(mod.title)}</h3>
      <span class="muted" style="font-size:.88rem">${done ? "Concluído" + (mod.activity.type === "quiz" && S.me.progress[id].score != null ? ` · ${S.me.progress[id].score}/${mod.activity.questions.length} acertos` : "") : `${mod.cards.length} cartões + atividade`}</span></span>
    </button>`;
  }

  /* ================= módulo ================= */
  function viewModule() {
    const L = S.lesson; const mod = C.modules[L.id]; const kid = bandOf(S.me).mode === "kid";
    const total = mod.cards.length + 1;
    const bar = `<div class="row between"><button class="link" data-act="nav" data-v="trail">${ico("back", 16)} Trilha</button><span class="eyebrow">${esc(mod.title)}</span></div>
      <div class="steps-dots">${Array.from({ length: total }, (_, i) => `<i class="${i <= L.step ? "on" : ""}"></i>`).join("")}</div>`;
    if (L.step < mod.cards.length) {
      const c = mod.cards[L.step];
      return `<section class="lesson">${bar}<article class="card-lesson">
        <span class="eyebrow">Cartão ${L.step + 1} de ${mod.cards.length}</span>
        <h2>${esc(c.t)}</h2><p class="body">${esc(c.b)}</p>
        ${kid ? `<button class="btn btn-ghost btn-s listen" data-act="speak" data-text="${esc(c.t + ". " + c.b)}">${ico("sound", 18)} Ouvir</button>` : ""}
        ${c.visual ? `<div class="vis">${visual(c.visual)}</div>` : ""}
      </article>
      <div class="row between">${L.step > 0 ? `<button class="btn btn-ghost" data-act="les-prev">${ico("back", 18)} Anterior</button>` : "<span></span>"}
        <button class="btn btn-hot" data-act="les-next">${L.step === mod.cards.length - 1 ? "Ir para a atividade" : "Próximo"} ${ico("arrow", 18)}</button></div></section>`;
    }
    if (L.step === mod.cards.length) return `<section class="lesson">${bar}<article class="card-lesson">${activity(mod, kid)}</article></section>`;
    // celebração
    const b = bandOf(S.me); const idx = b.modules.indexOf(L.id);
    const next = b.modules.slice(idx + 1).concat(b.modules.slice(0, idx)).find((id) => !(S.me.progress[id] && S.me.progress[id].done));
    return `<section class="lesson">${bar}<article class="card-lesson celebrate">
      <div class="medal">${ico("star", 48)}</div><h2>Módulo concluído!</h2>
      <p class="body">${L.gained ? `Você ganhou <b>${L.gained} XP</b>. ` : ""}${L.scoreTxt || ""}</p>
      <div class="row" style="justify-content:center">${next ? `<button class="btn btn-hot" data-act="open-mod" data-id="${next}">Próximo: ${esc(C.modules[next].title)} ${ico("arrow", 18)}</button>` : `<button class="btn btn-hot" data-act="nav" data-v="quiz">Fazer o Desafio do Aço</button>`}
      <button class="btn btn-ghost" data-act="nav" data-v="trail">Voltar à trilha</button></div>
    </article></section>`;
  }

  function activity(mod, kid) {
    const a = mod.activity, L = S.lesson, st = L.act;
    const say = (t) => (kid ? `<button class="btn btn-ghost btn-s listen" data-act="speak" data-text="${esc(t)}">${ico("sound", 18)} Ouvir</button>` : "");
    if (a.type === "quiz" || (a.type === "sim" && st.phase === "after")) {
      const qs = a.type === "quiz" ? a.questions : a.after;
      const q = qs[st.i];
      return `<span class="eyebrow">Pergunta ${st.i + 1} de ${qs.length}</span><div class="q"><h3>${esc(q.q)}</h3>${say(q.q)}
        <div class="opts">${q.options.map((o, i) => {
          const label = typeof o === "string" ? o : o.label;
          const cls = st.picked == null ? "" : i === q.answer ? "right" : i === st.picked ? "wrong" : "";
          return `<button class="opt ${cls}" data-act="q-pick" data-i="${i}" ${st.picked != null ? "disabled" : ""}>${o.color ? `<span class="swatch" style="background:${o.color}"></span>` : ""}${esc(label)}</button>`;
        }).join("")}</div>
        ${st.picked != null ? `<div class="feedback ${st.picked === q.answer ? "ok" : "no"}">${st.picked === q.answer ? "Isso! " : "Quase. "}${esc(q.explain || "")}</div>
          <div class="row" style="justify-content:flex-end"><button class="btn btn-hot" data-act="q-next" data-autofocus>${st.i === qs.length - 1 ? "Concluir" : "Próxima"} ${ico("arrow", 18)}</button></div>` : ""}</div>`;
    }
    if (a.type === "sort") {
      const left = a.items.map((it, i) => [it, i]).filter(([, i]) => st.placed[i] == null);
      return `<span class="eyebrow">Atividade</span><h3>${esc(a.prompt)}</h3>${say(a.prompt)}
        <p class="muted">${st.sel == null ? "Toque num item e depois na caixa certa." : "Agora toque na caixa certa."}</p>
        <div class="sort-items">${left.map(([it, i]) => `<button class="sort-item" data-act="s-sel" data-i="${i}" aria-pressed="${st.sel === i}">${esc(it.t)}</button>`).join("") || `<span class="pill ok">${ico("check", 14)} Tudo no lugar!</span>`}</div>
        <div class="bins">${a.bins.map((bn, bi) => `<button class="bin ${st.sel != null ? "armed" : ""}" data-act="s-put" data-b="${bi}"><b>${esc(bn)}</b>${a.items.map((it, i) => (st.placed[i] === bi ? `<span class="placed right">${esc(it.t)}</span>` : "")).join("")}</button>`).join("")}</div>
        ${st.msg ? `<div class="feedback no" role="status">${esc(st.msg)}</div>` : ""}
        ${!left.length ? `<div class="row" style="justify-content:flex-end"><button class="btn btn-hot" data-act="finish" data-autofocus>Concluir ${ico("arrow", 18)}</button></div>` : ""}`;
    }
    if (a.type === "count") {
      return `<span class="eyebrow">Atividade</span><h3>${esc(a.prompt)}</h3>${say(a.prompt)}
        <div class="count-field">${Array.from({ length: a.n }, (_, i) => `<button data-act="c-tap" data-i="${i}" class="${st.tapped.includes(i) ? "tapped" : ""}" aria-label="Caminhão ${i + 1}">${truckSvg()}</button>`).join("")}</div>
        <p class="muted" style="text-align:center">Toque em cada caminhão para contar: <b class="mono">${st.tapped.length}</b></p>
        <div class="big-opts">${a.options.map((o) => `<button class="opt ${st.picked === o ? (o === a.n ? "right" : "wrong") : ""}" data-act="c-pick" data-o="${o}">${o}</button>`).join("")}</div>
        ${st.picked != null ? (st.picked === a.n ? `<div class="feedback ok">Isso! São ${a.n} caminhões.</div><div class="row" style="justify-content:flex-end"><button class="btn btn-hot" data-act="finish">Concluir ${ico("arrow", 18)}</button></div>` : `<div class="feedback no">Vamos contar de novo, apontando um por um.</div>`) : ""}`;
    }
    if (a.type === "sim") return simHtml(a.preset, st) + `<div class="row" style="justify-content:flex-end">${a.after ? `<button class="btn btn-hot" data-act="sim-after">Responder perguntas ${ico("arrow", 18)}</button>` : `<button class="btn btn-hot" data-act="finish">Concluir ${ico("arrow", 18)}</button>`}</div>`;
    if (a.type === "reflect") {
      const prev = (S.me.answers || {})[L.id] || "";
      return `<span class="eyebrow">Reflexão</span><h3>${esc(a.prompt)}</h3>${say(a.prompt)}
        <form class="stack" data-form="reflect"><textarea id="reflect-${L.id}" placeholder="${esc(a.placeholder || "")}">${esc(prev)}</textarea>
        <p class="muted" style="font-size:.86rem">Sua resposta fica no seu perfil e pode ser lida pelo Conselho de Família.</p>
        <div class="row" style="justify-content:flex-end"><button class="btn btn-hot" type="submit">Salvar e concluir ${ico("arrow", 18)}</button></div></form>`;
    }
    if (a.type === "mission") {
      const got = (S.me.missions || {})[L.id] || [];
      const all = a.tasks.every((_, i) => got[i]);
      return `<span class="eyebrow">Missão em família</span><h3>${esc(a.prompt)}</h3>${say(a.prompt + " " + a.tasks.join(". "))}
        <div class="opts">${a.tasks.map((t, i) => `<button class="opt ${got[i] ? "right" : ""}" data-act="m-tog" data-i="${i}" aria-pressed="${!!got[i]}">${got[i] ? ico("check", 20) : `<span style="width:20px;height:20px;border:2px solid var(--line);border-radius:5px;display:inline-block"></span>`} ${esc(t)}</button>`).join("")}</div>
        <p class="muted">As missões ficam salvas. Marque cada uma quando fizer.</p>
        <div class="row" style="justify-content:flex-end"><button class="btn btn-hot" data-act="finish" ${all ? "" : "disabled"}>Concluir missão ${ico("arrow", 18)}</button></div>`;
    }
    if (a.type === "aptitude") return aptitudeHtml(st, true);
    if (a.type === "allocate") return allocHtml(a.preset, st);
    return "";
  }

  /* ---------- simulador ---------- */
  function simHtml(preset, st) {
    const cfg = C.sims[preset]; st.vals = st.vals || Object.fromEntries(cfg.lines.map((l) => [l.id, l.v]));
    const base = 100 - cfg.lines.reduce((s, l) => s + l.v, 0);
    const res = 100 - cfg.lines.reduce((s, l) => s + st.vals[l.id], 0);
    const colors = ["#13306B", "#3A5BA0", "#7F93BF", "#A9B7D6", "#C9D2E6"];
    const delta = base ? Math.round(((res - base) / base) * 100) : 0;
    return `<span class="eyebrow">Simulador</span><h3>${esc(cfg.title)}</h3><p class="muted">${esc(cfg.note)}</p>
      <div class="sim">
        <div class="bar100" role="img" aria-label="Divisão de cada 100 reais">${cfg.lines.map((l, i) => `<i style="width:${st.vals[l.id]}%;background:${colors[i % colors.length]}"></i>`).join("")}<i style="width:${Math.max(0, res)}%;background:var(--orange)"></i></div>
        <div class="legend">${cfg.lines.map((l, i) => `<span><i style="background:${colors[i % colors.length]}"></i>${esc(l.t)}</span>`).join("")}<span><i style="background:var(--orange)"></i>${esc(cfg.resultLabel)}</span></div>
        <div class="sim-row"><b>${esc(cfg.revenueLabel)}</b><span class="v">R$ 100</span></div>
        ${cfg.lines.map((l) => `<div class="sim-row"><label for="sim-${l.id}">(–) ${esc(l.t)}</label><span class="v">R$ ${st.vals[l.id]}</span>
          ${l.adj ? `<input id="sim-${l.id}" type="range" min="${l.min}" max="${l.max}" step="1" value="${st.vals[l.id]}" data-sim="${l.id}">` : ""}</div>`).join("")}
        <div class="sim-result ${res < 0 ? "neg" : ""}"><span>${esc(cfg.resultLabel)}</span><b>R$ ${res}</b></div>
        <p class="muted" aria-live="polite">${res === base ? "Este é o cenário base. Mexa nos controles." : res < 0 ? "Prejuízo: os custos passaram das vendas." : `${delta > 0 ? "+" : ""}${delta}% de ${esc(cfg.resultLabel.toLowerCase())} em relação ao cenário base (R$ ${base}).`}</p>
      </div>`;
  }

  /* ---------- alocação de capital ---------- */
  function allocHtml(preset, st) {
    const cfg = C.allocs[preset];
    st.alloc = st.alloc || Object.fromEntries(cfg.buckets.map((b) => [b.id, b.v]));
    const sum = cfg.buckets.reduce((t, b) => t + st.alloc[b.id], 0);
    const ax = { growth: 0, liquidity: 0, control: 0 }; cfg.buckets.forEach((b) => (ax[b.axis] += st.alloc[b.id]));
    const colors = { growth: "var(--orange)", liquidity: "#3A5BA0", control: "#7F93BF" };
    const div = st.alloc.div || 0;
    const tips = [];
    if (sum !== cfg.total) tips.push(sum < cfg.total ? `Ainda faltam R$ ${cfg.total - sum} milhões para distribuir.` : `Você passou R$ ${sum - cfg.total} milhões do lucro disponível.`);
    else {
      if (div < cfg.minDiv) tips.push(`A família precisa de pelo menos R$ ${cfg.minDiv} milhões de dividendos para despesas essenciais. Com menos, cresce o risco de conflito entre sócios.`);
      if (ax.growth >= 70) tips.push("Aposta forte em crescimento: ótimo para o longo prazo, mas deixa pouca liquidez e reserva para imprevistos.");
      if (ax.liquidity >= 50) tips.push("Muita distribuição: agrada no curto prazo, mas pode faltar reinvestimento. Lembre da regra das três gerações.");
      if (ax.control >= 40) tips.push("Muito na reserva: reduz risco, mas o dinheiro parado cria pouco valor se não houver uma política de investimento clara.");
      if (!tips.length) tips.push("Distribuição equilibrada entre crescimento, liquidez e controle. Numa assembleia real, o que desempata é a visão estratégica que a família definiu.");
    }
    return `<span class="eyebrow">Simulador de sócio</span><h3>${esc(cfg.title)}</h3><p class="muted">${esc(cfg.note)}</p>
      <div class="sim">
        <div class="bar100" role="img" aria-label="Divisão entre crescimento, liquidez e controle">${Object.keys(ax).map((k) => `<i style="width:${Math.min(100, ax[k])}%;background:${colors[k]}"></i>`).join("")}</div>
        <div class="legend">${Object.keys(ax).map((k) => `<span><i style="background:${colors[k]}"></i>${cfg.axes[k]}: R$ ${ax[k]} mi</span>`).join("")}</div>
        ${cfg.buckets.map((b) => `<div class="sim-row"><label for="al-${b.id}">${esc(b.t)} <span class="muted" style="font-size:.8rem">· ${cfg.axes[b.axis]}</span></label><span class="v">R$ ${st.alloc[b.id]} mi</span>
          <input id="al-${b.id}" type="range" min="0" max="${cfg.total}" step="5" value="${st.alloc[b.id]}" data-alloc="${b.id}"></div>`).join("")}
        <div class="sim-result ${sum !== cfg.total ? "neg" : ""}"><span>Total distribuído</span><b>R$ ${sum} mi</b></div>
        <div class="stack-s" aria-live="polite">${tips.map((t) => `<p class="notice">${esc(t)}</p>`).join("")}</div>
      </div>
      <div class="row" style="justify-content:flex-end"><button class="btn btn-hot" data-act="alloc-done" ${sum !== cfg.total ? "disabled" : ""}>Registrar minha decisão ${ico("arrow", 18)}</button></div>`;
  }

  /* ---------- aptidão ---------- */
  function aptitudeHtml(st, inModule) {
    const A = C.aptitude;
    if (st.i < A.questions.length) {
      const q = A.questions[st.i];
      return `<span class="eyebrow">Qual aço é você? · ${st.i + 1} de ${A.questions.length}</span><div class="q"><h3>${esc(q.q)}</h3>
        <div class="opts">${q.options.map(([t, k]) => `<button class="opt" data-act="apt-pick" data-k="${k}" data-in="${inModule ? 1 : 0}">${esc(t)}</button>`).join("")}</div></div>`;
    }
    const top = Object.entries(st.scores).sort((a, b) => b[1] - a[1]);
    const p = A.profiles[top[0][0]]; const second = top[1] && A.profiles[top[1][0]];
    return `<div class="celebrate"><div class="medal">${ico("spark", 48)}</div><span class="eyebrow">Seu aço</span><h2>${esc(p.name)} · ${esc(p.area)}</h2>
      <p class="body">${esc(p.d)}</p>${second ? `<p class="muted">Seu segundo traço: ${esc(second.name)} (${esc(second.area)}).</p>` : ""}
      ${inModule ? `<button class="btn btn-hot" data-act="finish">Concluir ${ico("arrow", 18)}</button>` : `<button class="btn btn-hot" data-act="nav" data-v="profile">Ver no meu perfil</button>`}</div>`;
  }

  async function finishModule(score) {
    const L = S.lesson, mod = C.modules[L.id];
    const prev = S.me.progress[L.id];
    let gained = 0;
    if (!prev || !prev.done) gained = 20 + (score || 0) * 5;
    const progress = Object.assign({}, S.me.progress, { [L.id]: { done: true, score: score == null ? null : score, at: Date.now() } });
    await saveMe({ progress, xp: (S.me.xp || 0) + gained });
    L.gained = gained; L.step = mod.cards.length + 1;
    const qn = mod.activity.type === "quiz" ? mod.activity.questions.length : mod.activity.after ? mod.activity.after.length : 0;
    L.scoreTxt = qn && score != null ? `Você acertou ${score} de ${qn}.` : "";
    render();
  }

  /* ================= visuais ================= */
  function visual(v) {
    const N = C.numbers;
    switch (v) {
      case "trucks": return `<div class="count-field" style="background:none">${truckSvg()}${truckSvg()}${truckSvg()}</div>`;
      case "trucksBig": return `<div class="stats"><div class="stat"><span class="eyebrow">Caminhões</span><b>${fmt(N.caminhoes)}</b><span>em ${fmt(N.diasUteis)} dias úteis</span></div><div class="stat"><span class="eyebrow">Por dia</span><b>${N.caminhoesDia}</b><span>caminhões</span></div><div class="stat"><span class="eyebrow">Por caminhão</span><b>${fmt(N.toneladasRealizadas / N.caminhoes, 1)} t</b><span>carga média</span></div></div>`;
      case "colors": return `<div class="row" style="justify-content:center;gap:24px"><div style="width:120px;height:120px;border-radius:24px;background:#0B1E45"></div><div style="width:120px;height:120px;border-radius:24px;background:#F36F21"></div></div>`;
      case "values": return `<div class="values-list">${C.values.map((x) => `<div><span class="vi">${ico(x.icon)}</span><span>${esc(x.t)}</span></div>`).join("")}</div>`;
      case "valuesKid": return `<div class="values-list">${C.values.map((x) => `<div><span class="vi">${ico(x.icon)}</span><span style="font-size:1.1rem">${esc(x.kid)}</span></div>`).join("")}</div>`;
      case "timelineFull": return timelineHtml(true);
      case "regimento": return `<div class="stats">${[["Até 4", "membros por holding"], ["2 anos", "de mandato, 1 reeleição"], ["4+", "reuniões por ano"], ["15 dias", "de antecedência na convocação"]].map(([b, t]) => `<div class="stat"><b>${b}</b><span>${t}</span></div>`).join("")}</div>`;
      case "timelineMini": return `<div class="proc">${[["1958", "Ferragens em Colatina"], ["1975", "Nasce a Cedisa"], ["1982", "Planta na Serra"], ["2025", "50 anos e Calogi"]].map(([y, t], i) => `<div class="${i === 3 ? "us" : ""}"><small class="mono">${y}</small><b>${t}</b></div>`).join("")}</div>`;
      case "process": return `<div class="proc">${[["Mina", "Minério de ferro"], ["Usina", "Forno e laminação"], ["Bobinas e chapas", "Aço bruto"], ["Cedisa", "Corta, dobra, perfila"], ["Cliente", "Obra, fábrica, galpão"]].map(([t, s], i) => `<div class="${i === 3 ? "us" : ""}"><b>${t}</b><small>${s}</small></div>`).join("")}</div>`;
      case "coins": return `<div class="coins" role="img" aria-label="100 moedas, 4 são lucro">${Array.from({ length: 100 }, (_, i) => `<i class="${i >= 96 ? "hot" : ""}"></i>`).join("")}</div><p class="muted" style="text-align:center;margin-top:10px">96 moedas pagam as contas · <b style="color:var(--orange-ink)">4 viram lucro</b></p>`;
      case "map": return mapHtml();
      case "gauge": return gaugeHtml();
      case "venn": return vennHtml();
      case "circles3": return circles3Html();
      case "governance": return govHtml();
      case "products": return `<div class="chips">${C.companies[0].products.map((p) => `<span class="pill">${esc(p)}</span>`).join("")}</div>`;
      case "evolucao": return `<div class="proc">${C.companies[1].evolucao.map((t, i, a) => `<div class="${i === a.length - 1 ? "us" : ""}"><small class="mono">Fase ${i + 1}</small><b>${esc(t)}</b></div>`).join("")}</div>`;
      case "generations": return `<div class="stack-s">${C.family.generations.map((g) => `<div class="row" style="align-items:baseline"><span class="pill navy">${esc(g.g)}</span><span>${esc(g.d)}</span></div>`).join("")}</div>`;
    }
    return "";
  }
  function timelineHtml(compact) {
    return `<div class="timeline">${C.timeline.map((t) => `<div class="tl ${t.y === "2030" ? "future" : ""}"><span class="y">${esc(t.y)}</span><span class="dot"></span><div><b>${esc(t.t)}</b> ${t.co && !compact ? `<span class="pill" style="font-size:.7rem;padding:1px 8px">${esc(t.co)}</span>` : ""}<p class="muted" style="${compact ? "font-size:.9rem" : ""}">${esc(t.d)}</p></div></div>`).join("")}</div>`;
  }
  function mapHtml() {
    const tm = C.tileMap, top = C.topStates;
    const byUf = {}; C.branchesList.forEach((f) => { if (f.uf) (byUf[f.uf] = byUf[f.uf] || []).push(f); });
    const cells = Object.entries(tm).map(([uf, [c, r]]) => {
      const fs = byUf[uf] || []; const ind = fs.some((f) => f.kind === "industrial");
      return `<div class="t ${uf === "ES" ? "home" : top.includes(uf) ? "top" : ""}" style="grid-column:${c + 1};grid-row:${r + 1}" title="${uf}${fs.length ? ": " + fs.map((f) => f.city).join(", ") : ""}">${uf}${fs.length && uf !== "ES" ? `<span class="dot ${ind ? "ind" : ""}"></span>` : ""}</div>`;
    }).join("");
    return `<div class="grid-2" style="align-items:center"><div class="tilemap" role="img" aria-label="Mapa do Brasil com estados de atuação da Cedisa">${cells}</div>
      <div class="stack-s" style="font-size:.9rem">
        <div class="row"><span class="t" style="width:18px;height:18px;border-radius:4px;background:var(--orange)"></span> Matriz · Serra (ES)</div>
        <div class="row"><span style="width:18px;height:18px;border-radius:4px;background:var(--navy-2)"></span> Top 5 estados em vendas</div>
        <div class="row"><span style="width:10px;height:10px;border-radius:50%;background:var(--hot)"></span> Filial / ponto de venda</div>
        <div class="row"><span style="width:10px;height:10px;border-radius:50%;background:#fff;border:2px solid var(--orange)"></span> Filial com atividade industrial</div>
        <p class="muted" style="margin-top:6px">Filiais: ${C.branchesList.filter((f) => f.kind !== "matriz").map((f) => esc(f.city) + (f.uf ? "/" + f.uf : "")).join(", ")}.</p></div></div>`;
  }
  function gaugeHtml() {
    const N = C.numbers; const p = N.toneladasRealizadas / N.toneladasMeta; const falta = N.toneladasMeta - N.toneladasRealizadas;
    const ang = Math.PI * p; const x = 120 - 95 * Math.cos(ang), y = 120 - 95 * Math.sin(ang);
    return `<div class="gauge-wrap"><svg viewBox="0 0 240 140" role="img" aria-label="${Math.round(p * 100)}% da meta de toneladas">
      <path d="M25 120 A95 95 0 0 1 215 120" fill="none" style="stroke:var(--line)" stroke-width="22" stroke-linecap="round"/>
      <path d="M25 120 A95 95 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)}" fill="none" style="stroke:var(--orange)" stroke-width="22" stroke-linecap="round"/>
      <text x="120" y="112" text-anchor="middle" style="fill:var(--ink);font:800 40px var(--f-display)">${Math.round(p * 100)}%</text>
      <text x="120" y="136" text-anchor="middle" style="fill:var(--muted);font:500 11px var(--f-mono)">da meta de ${fmt(N.toneladasMeta)} t</text></svg>
      <div class="stack-s"><div class="stat"><span class="eyebrow">Quanto fizemos</span><b style="color:var(--orange-ink)">${fmt(N.toneladasRealizadas)} t</b></div>
      <div class="stat"><span class="eyebrow">Quanto falta</span><b>${fmt(falta)} t</b></div><span class="muted" style="font-size:.85rem">${esc(N.periodo)} · média de ${fmt(N.mediaDiaria, 2)} t por dia útil</span></div></div>`;
  }
  function vennHtml() {
    const A = C.companies[1].areas;
    return `<svg viewBox="0 0 360 260" role="img" aria-label="As três áreas da Valorização">
      <circle cx="180" cy="90" r="78" fill="#9DB2C6" opacity=".85"/><circle cx="130" cy="170" r="78" fill="#3AA0D8" opacity=".8"/><circle cx="230" cy="170" r="78" fill="#0F8A55" opacity=".8"/>
      <text x="180" y="60" text-anchor="middle" style="fill:#0B1E45;font:700 12px var(--f-body)"><tspan x="180">Ativos para</tspan><tspan x="180" dy="15">locação</tspan></text>
      <text x="95" y="185" text-anchor="middle" style="fill:#fff;font:700 12px var(--f-body)"><tspan x="95">Parcerias em</tspan><tspan x="95" dy="15">loteamentos</tspan></text>
      <text x="268" y="178" text-anchor="middle" style="fill:#fff;font:700 12px var(--f-body)"><tspan x="268">Áreas com</tspan><tspan x="268" dy="15">potencial</tspan><tspan x="268" dy="15">futuro</tspan></text>
      <text x="180" y="150" text-anchor="middle" style="fill:#fff;font:800 18px var(--f-display)">VA</text></svg>
      <div class="stack-s" style="margin-top:8px">${A.map((a) => `<div><b>${esc(a.t)}.</b> <span class="muted">${esc(a.d)}</span></div>`).join("")}</div>`;
  }
  function circles3Html() {
    return `<svg viewBox="0 0 360 270" role="img" aria-label="Modelo dos três círculos: família, propriedade e gestão">
      <circle cx="180" cy="95" r="80" fill="#F36F21" opacity=".75"/><circle cx="128" cy="180" r="80" fill="#13306B" opacity=".75"/><circle cx="232" cy="180" r="80" fill="#7F93BF" opacity=".8"/>
      <text x="180" y="62" text-anchor="middle" style="fill:#fff;font:800 15px var(--f-display)">Família</text>
      <text x="92" y="205" text-anchor="middle" style="fill:#fff;font:800 15px var(--f-display)">Propriedade</text>
      <text x="270" y="205" text-anchor="middle" style="fill:#fff;font:800 15px var(--f-display)">Gestão</text>
      <text x="180" y="160" text-anchor="middle" style="fill:#fff;font:700 10px var(--f-body)"><tspan x="180">acionista da família</tspan><tspan x="180" dy="13">que trabalha</tspan><tspan x="180" dy="13">na empresa</tspan></text></svg>`;
  }
  function govHtml() {
    const box = (x, y, w, t, s, hot) => `<rect x="${x}" y="${y}" width="${w}" height="52" rx="10" style="fill:${hot ? "var(--orange)" : "var(--surface)"};stroke:${hot ? "var(--orange)" : "var(--navy-2)"}" stroke-width="1.5"/><text x="${x + w / 2}" y="${y + 23}" text-anchor="middle" style="fill:${hot ? "#fff" : "var(--ink)"};font:700 13px var(--f-body)">${t}</text><text x="${x + w / 2}" y="${y + 40}" text-anchor="middle" style="fill:${hot ? "#fff" : "var(--muted)"};font:500 10px var(--f-mono)">${s}</text>`;
    const line = (x1, y1, x2, y2, dash) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:var(--muted)" stroke-width="1.5" ${dash ? 'stroke-dasharray="4 4"' : ""}/>`;
    return `<svg viewBox="0 0 440 270" role="img" aria-label="Estrutura de governança">
      ${line(120, 62, 120, 100)}${line(120, 152, 120, 190)}${line(210, 126, 250, 126, true)}${line(330, 62, 330, 100)}
      ${box(20, 10, 200, "Assembleia de acionistas", "PROPRIEDADE")}
      ${box(20, 100, 200, "Conselho de Administração", "ESTRATÉGIA")}
      ${box(20, 190, 200, "Diretoria", "GESTÃO")}
      ${box(250, 10, 170, "Família empresária", "TODAS AS GERAÇÕES")}
      ${box(250, 100, 170, "Conselho de Família", "UNIÃO E FORMAÇÃO", true)}
      <text x="335" y="178" text-anchor="middle" style="fill:var(--muted);font:500 11px var(--f-body)"><tspan x="335">Esta trilha é uma</tspan><tspan x="335" dy="14">ferramenta do Conselho</tspan><tspan x="335" dy="14">de Família</tspan></text></svg>`;
  }

  /* ================= desafio ================= */
  function viewQuiz() {
    const Q = S.quiz; const band = bandOf(S.me);
    const lvl = (Q && Q.level) || quizLevelOf(band);
    const names = { kid: "Faísca (crianças)", teen: "Chapa (adolescentes)", adult: "Estrutura (adultos)" };
    const board = members().slice().sort((a, b) => (b.xp || 0) - (a.xp || 0)).slice(0, 8);
    let main;
    if (!Q || Q.over) {
      main = `<section class="panel stack"><span class="eyebrow">Desafio do Aço</span><h2>${Q && Q.over ? `Você fez ${Q.right} de ${Q.qs.length}!` : "Quanto você sabe do Grupo?"}</h2>
        <p class="muted">${Q && Q.over ? (Q.gained ? `Novo recorde: +${Q.gained} XP.` : "Tente de novo para bater seu recorde.") : "Perguntas sorteadas sobre história, números, produtos, valores e governança. Seu melhor resultado vira XP."}</p>
        <div class="stack-s"><b>Nível</b><div class="chips">${Object.entries(names).map(([k, t]) => `<button class="chip" data-act="qz-level" data-l="${k}" aria-pressed="${lvl === k}">${t}${S.me.quizBest && S.me.quizBest[k] != null ? ` · recorde ${S.me.quizBest[k]}` : ""}</button>`).join("")}</div></div>
        <div><button class="btn btn-hot" data-act="qz-start" data-l="${lvl}">${Q && Q.over ? "Jogar de novo" : "Começar"} ${ico("arrow", 18)}</button></div></section>`;
    } else {
      const q = Q.qs[Q.i];
      main = `<section class="panel stack"><div class="row between"><span class="eyebrow">Pergunta ${Q.i + 1} de ${Q.qs.length}</span><span class="pill hot num">${Q.right} acertos</span></div>
        <div class="progress"><i style="width:${(Q.i / Q.qs.length) * 100}%"></i></div>
        <div class="q"><h3>${esc(q.q)}</h3>${band.mode === "kid" ? `<button class="btn btn-ghost btn-s listen" data-act="speak" data-text="${esc(q.q + ". " + q.opts.map((o) => o.t).join(". "))}">${ico("sound", 18)} Ouvir</button>` : ""}
        <div class="opts">${q.opts.map((o, i) => `<button class="opt ${Q.picked == null ? "" : o.ok ? "right" : i === Q.picked ? "wrong" : ""}" data-act="qz-pick" data-i="${i}" ${Q.picked != null ? "disabled" : ""}>${esc(o.t)}</button>`).join("")}</div>
        ${Q.picked != null ? `<div class="row" style="justify-content:flex-end"><button class="btn btn-hot" data-act="qz-next" data-autofocus>${Q.i === Q.qs.length - 1 ? "Ver resultado" : "Próxima"} ${ico("arrow", 18)}</button></div>` : ""}</div></section>`;
    }
    return `<div class="grid-2" style="align-items:start">${main}
      <section class="panel stack"><h3>Placar da família</h3><p class="muted" style="font-size:.9rem">Por XP acumulado na trilha e no Desafio.</p>
        ${board.map((m, i) => `<div class="row between"><div class="row">${avatar(m)}<div><b>${esc(m.nick || m.name)}</b><div class="muted" style="font-size:.82rem">${esc(bandOf(m).name)} · ${esc(levelOf(m.xp || 0).l.t)}</div></div></div><span class="mono num">${i === 0 ? "🥇 " : i === 1 ? "🥈 " : i === 2 ? "🥉 " : ""}${fmt(m.xp || 0)}</span></div>`).join("") || `<p class="muted">Ainda sem participantes.</p>`}
      </section></div>`;
  }

  /* ================= o grupo ================= */
  function viewGroup() {
    const [ced, val] = C.companies;
    return `
    <section class="stack"><div class="section-head"><div class="stack-s"><span class="eyebrow">${esc(C.brand.group)}</span><h1>Duas empresas, uma família</h1>
      <p class="muted">${esc(C.origin)}</p></div></div></section>
    <section class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))">${C.sides.map((s) => `<div class="panel stack-s"><div class="row"><span class="tag-ico">${ico(s.icon)}</span><div><span class="eyebrow">${esc(s.label)}</span><h3>${esc(s.t)}</h3></div></div>
      ${s.label === "Valores" ? `<ul style="margin:0;padding-left:18px">${C.values.map((v) => `<li>${esc(v.t)}</li>`).join("")}</ul>` : `<p>${esc(s.d)}</p>`}</div>`).join("")}</section>
    <section class="panel stack"><div class="section-head"><div class="stack-s"><span class="eyebrow">Cedisa · ${esc(C.numbers.periodo)}</span><h2>Quantas toneladas faturamos</h2></div></div>${gaugeHtml()}<hr class="sep">${visual("trucksBig")}</section>
    <section class="grid-2" style="align-items:start">
      <div class="panel stack"><span class="eyebrow">${esc(ced.what)}</span><h2>${esc(ced.name)}</h2><p>${esc(ced.summary)}</p>
        <div class="stack-s"><b>Produtos</b>${visual("products")}</div>
        <div class="stack-s"><b>Do minério ao cliente</b>${visual("process")}</div></div>
      <div class="panel stack"><span class="eyebrow">${esc(val.what)}</span><h2>${esc(val.name)}</h2><p>${esc(val.summary)}</p>
        <div class="vis">${vennHtml()}</div>
        <details><summary>O papel da Valorização nas parcerias</summary><ul style="margin:10px 0 0;padding-left:18px">${val.papel.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></details>
        <div class="stack-s"><b>Evolução</b>${visual("evolucao")}<p class="muted">${esc(val.objetivo)}</p></div></div>
    </section>
    <section class="panel stack"><div class="stack-s"><span class="eyebrow">Atuação nacional</span><h2>Onde a Cedisa está</h2></div>${mapHtml()}</section>
    <section class="panel stack"><div class="stack-s"><span class="eyebrow">Linha do tempo</span><h2>Nossa história</h2><p class="muted" style="max-width:62ch">De Dionísio e da loja de ferragens em Colatina à Central de Aço com operação industrial em quatro estados.</p></div>
      ${timelineHtml(false)}</section>
    <section class="stack"><h2>A Cedisa hoje</h2><div class="grid">
      <div class="panel stack-s"><span class="eyebrow">Matriz</span><h3>Calogi, Serra (ES)</h3><p class="muted">Inaugurada em 2025. R$ 120 milhões de investimento, área de operação de 29 mil m² num complexo de 200 mil m².</p></div>
      <div class="panel stack-s"><span class="eyebrow">Unidades industriais</span><h3>5 unidades com estoque</h3><p class="muted">Calogi e Cercado da Pedra (Serra/ES), Recife (PE), Salvador (BA) e Volta Redonda (RJ).</p></div>
      <div class="panel stack-s"><span class="eyebrow">Pontos de venda e escritórios</span><h3>Do Centro-Oeste ao Nordeste</h3><p class="muted">Rio de Janeiro, Macaé, Luís Eduardo Magalhães, Fortaleza, Campo Grande e Cuiabá.</p></div>
      <div class="panel stack-s"><span class="eyebrow">Qualidade</span><h3>ISO 9001 desde 2004</h3><p class="muted">Gestão da qualidade implantada junto com a expansão de galpões e máquinas. Nova marca lançada em 2022.</p></div>
    </div></section>`;
  }

  /* ================= família ================= */
  function viewFamily() {
    const ms = members(); const f = S.p.gen || "";
    const list = ms.filter((m) => !f || m.generation === f);
    const counts = {}; ms.forEach((m) => (m.hobbies || []).forEach((h) => (counts[h] = (counts[h] || 0) + 1)));
    const cloud = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 24);
    const gens = ["2ª geração", "3ª geração", "4ª geração", "Cônjuge"];
    return `
    <section class="section-head"><div class="stack-s"><span class="eyebrow">Família empresária</span><h1>Quem é quem</h1><p class="muted">Conheça os primos, tios e sobrinhos além do almoço de domingo: o que cada um faz, o que gosta e em que etapa da trilha está.</p></div></section>
    <section class="stats">${gens.map((g) => `<div class="panel stat"><span class="eyebrow">${esc(g === "Cônjuge" ? "Cônjuges" : g)}</span><b>${ms.filter((m) => m.generation === g).length}</b><span>cadastrados</span></div>`).join("")}</section>
    ${cloud.length ? `<section class="panel stack-s"><h3>O que a família gosta de fazer</h3><div class="cloud">${cloud.map(([h, n]) => `<span style="font-size:${(0.9 + Math.min(n, 6) * 0.18).toFixed(2)}rem">${esc(h)}<sup class="mono muted" style="font-size:.65rem"> ${n}</sup></span>`).join("")}</div></section>` : ""}
    <section class="stack"><div class="chips"><button class="chip" data-act="fam-filter" data-g="" aria-pressed="${!f}">Todos</button>${gens.map((g) => `<button class="chip" data-act="fam-filter" data-g="${g}" aria-pressed="${f === g}">${g}</button>`).join("")}</div>
      <div class="grid">${list.map(memberCard).join("") || `<p class="muted">Ninguém nesta geração ainda.</p>`}</div></section>`;
  }
  function memberCard(m) {
    const b = bandOf(m), pr = bandProgress(m, b); const apt = m.aptitude && C.aptitude.profiles[m.aptitude.top];
    return `<article class="panel member"><div class="top">${avatar(m, "l")}<div class="stack-s" style="gap:2px;min-width:0"><h3>${esc(m.nick || m.name)}</h3><span class="muted" style="font-size:.86rem">${esc(m.occupation || "")}${m.works === "sim" && m.role ? " · " + esc(m.role) : ""}</span></div></div>
      <div class="chips"><span class="pill navy">${esc(m.generation || "—")}</span><span class="pill">${esc(m.branch || "")}</span><span class="pill hot">${esc(b.name)}</span>${apt ? `<span class="pill">Aço: ${esc(apt.name)}</span>` : ""}${m.demo ? `<span class="pill">exemplo</span>` : ""}</div>
      ${(m.hobbies || []).length ? `<p style="font-size:.92rem"><b>Curte:</b> ${m.hobbies.map(esc).join(", ")}</p>` : ""}
      <div class="stack-s"><div class="row between" style="font-size:.84rem"><span class="muted">Trilha ${esc(b.name)}</span><span class="mono">${pr.pct}%</span></div><div class="progress"><i style="width:${pr.pct}%"></i></div></div></article>`;
  }

  /* ================= mural ================= */
  const POST_TYPES = { iniciativa: "Iniciativa", conquista: "Conquista", familia: "Família", newsletter: "Newsletter do Conselho" };
  function postHtml(p) {
    const a = memberById(p.authorId) || { name: p.authorName || "Alguém" };
    const liked = (p.likes || []).includes(S.me.id);
    const canDel = S.me.isAdmin || p.authorId === S.me.id;
    return `<article class="post"><div class="head">${avatar(a)}<div style="min-width:0"><b>${esc(a.nick || a.name)}</b><div class="muted" style="font-size:.8rem">${new Date(p.createdAt).toLocaleDateString("pt-BR")} · ${esc(POST_TYPES[p.type] || "")}</div></div></div>
      <h3>${esc(p.title)}</h3><p style="white-space:pre-line">${esc(p.body)}</p>
      <div class="row"><button class="btn btn-ghost btn-s" data-act="like" data-id="${p.id}" aria-pressed="${liked}" style="${liked ? "border-color:var(--orange);color:var(--orange-ink)" : ""}">${ico("heart", 16)} ${(p.likes || []).length || ""}</button>
      ${canDel ? (S.p.confirmDel === p.id ? `<span class="muted">Apagar?</span><button class="btn btn-ghost btn-s" data-act="del-post" data-id="${p.id}">Sim, apagar</button><button class="link" data-act="del-post-cancel">Cancelar</button>` : `<button class="link" data-act="del-post-ask" data-id="${p.id}">Apagar</button>`) : ""}</div></article>`;
  }
  function viewMural() {
    const ps = posts(); const f = S.p.type || "";
    const list = ps.filter((p) => !f || p.type === f);
    const news = ps.filter((p) => p.type === "newsletter");
    return `
    <section class="section-head"><div class="stack-s"><span class="eyebrow">Mural e newsletter</span><h1>O que está acontecendo</h1><p class="muted">Compartilhe iniciativas da empresa, conquistas e momentos da família. O Conselho publica aqui a newsletter do Grupo.</p></div></section>
    <div class="grid-2" style="align-items:start">
      <section class="stack">
        <form class="panel stack" data-form="post"><h3>Nova publicação</h3>
          <label class="field" for="post-type">Tipo<select id="post-type">${Object.entries(POST_TYPES).filter(([k]) => k !== "newsletter" || S.me.isAdmin).map(([k, t]) => `<option value="${k}">${t}</option>`).join("")}</select></label>
          <label class="field" for="post-title">Título<input id="post-title" type="text" maxlength="120" placeholder="Ex.: Nova linha de telhas em Calogi"></label>
          <label class="field" for="post-body">Texto<textarea id="post-body" maxlength="3000" placeholder="Conte para a família..."></textarea></label>
          <div><button class="btn btn-hot" type="submit">Publicar</button></div></form>
        <div class="chips"><button class="chip" data-act="post-filter" data-t="" aria-pressed="${!f}">Tudo</button>${Object.entries(POST_TYPES).map(([k, t]) => `<button class="chip" data-act="post-filter" data-t="${k}" aria-pressed="${f === k}">${t}</button>`).join("")}</div>
        ${list.map((p) => `<div class="panel">${postHtml(p)}</div>`).join("") || `<p class="muted panel flat">Nenhuma publicação ${f ? "deste tipo " : ""}ainda.</p>`}
      </section>
      <aside class="stack">
        <section class="panel panel-navy stack"><span class="eyebrow">Notícias do Grupo</span>
          ${C.news.map((n) => `<div class="stack-s"><span class="mono" style="font-size:.75rem;opacity:.75">${esc(n.date)} · ${esc(n.tag)}</span><b>${esc(n.t)}</b><p class="muted" style="font-size:.92rem">${esc(n.b)}</p></div>`).join('<hr class="sep" style="border-color:rgba(255,255,255,.15)">')}</section>
        ${news.length ? `<section class="panel stack-s"><h3>Edições da newsletter</h3>${news.map((p) => `<div><b>${esc(p.title)}</b> <span class="muted">${new Date(p.createdAt).toLocaleDateString("pt-BR")}</span></div>`).join("")}</section>` : ""}
      </aside></div>`;
  }

  /* ================= cursos ================= */
  function viewCourses() {
    const b = bandOf(S.me); const mine = S.me.courses || [];
    const rec = C.courses.filter((c) => c.bands.includes(b.id)); const other = C.courses.filter((c) => !c.bands.includes(b.id));
    const card = (c) => `<article class="panel stack-s"><div class="row between"><span class="pill">${esc(c.kind)}</span><span class="mono muted" style="font-size:.78rem">${esc(c.org)}</span></div>
      <h3>${esc(c.t)}</h3><p class="muted" style="font-size:.92rem">${esc(c.d)}</p>
      <div class="row">${c.url ? `<a class="btn btn-ghost btn-s" href="${esc(c.url)}" target="_blank" rel="noopener">Ver site</a>` : ""}
      <button class="btn btn-s ${mine.includes(c.id) ? "btn-navy" : "btn-ghost"}" data-act="course" data-id="${c.id}" aria-pressed="${mine.includes(c.id)}">${mine.includes(c.id) ? ico("check", 16) + " Tenho interesse" : "Tenho interesse"}</button></div></article>`;
    return `<section class="section-head"><div class="stack-s"><span class="eyebrow">Formação</span><h1>Cursos e oportunidades</h1><p class="muted">Marque o que te interessa. O Conselho de Família vê os interesses e organiza turmas, visitas e mentorias.</p></div></section>
      <section class="stack"><h2>Para a etapa ${esc(b.name)}</h2><div class="grid">${rec.map(card).join("") || `<p class="muted">Sem sugestões para esta etapa.</p>`}</div></section>
      <section class="stack"><h2>Outras oportunidades</h2><div class="grid">${other.map(card).join("")}</div></section>`;
  }

  /* ================= governança ================= */
  function viewGov() {
    const G = C.governance;
    return `<section class="panel panel-navy stack"><span class="eyebrow">Conselho de Família</span><h1>Por que esta trilha existe</h1><p style="max-width:62ch;color:rgba(255,255,255,.86)">${esc(C.brand.manifesto)}</p>
      <div class="grid">${G.why.map((w) => `<div class="stack-s"><b style="color:var(--hot)">${esc(w.t)}</b><span class="muted">${esc(w.d)}</span></div>`).join("")}</div></section>
    <section class="grid-2" style="align-items:start">
      <div class="panel stack"><h2>Família, propriedade e gestão</h2><p class="muted">O modelo dos três círculos mostra que ser da família, ser dono e trabalhar na empresa são papéis diferentes, cada um com seus fóruns.</p><div class="vis">${circles3Html()}</div></div>
      <div class="panel stack"><h2>Os fóruns de decisão</h2><p class="muted">Cada assunto tem o seu lugar. A família fala no Conselho de Família; o dono vota na Assembleia; a estratégia é do Conselho de Administração.</p><div class="vis">${govHtml()}</div></div>
    </section>
    <section class="panel stack"><h2>O papel do Conselho de Família</h2><ul style="margin:0;padding-left:18px;columns:2 280px;column-gap:32px">${G.council.map((c) => `<li style="margin-bottom:6px">${esc(c)}</li>`).join("")}</ul></section>
    <section class="stack"><div class="section-head"><div class="stack-s"><span class="eyebrow">Resumo simples</span><h2>Regimento Interno do Conselho de Família</h2><p class="muted">As regras que organizam o nosso Conselho, capítulo por capítulo.</p></div></div>
      <div class="panel flat">${visual("regimento")}</div>
      <div class="grid-2" style="align-items:start">${C.regimento.map((r) => `<details class="panel flat stack-s"><summary><span class="eyebrow" style="display:block">${esc(r.cap)}</span>${esc(r.t)}</summary><ul style="margin:10px 0 0;padding-left:18px">${r.items.map((i) => `<li style="margin-bottom:4px">${esc(i)}</li>`).join("")}</ul></details>`).join("")}</div></section>
    <section class="stack"><h2>Boas práticas que inspiram</h2><div class="grid">${G.inspirations.map((i) => `<div class="panel stack-s"><h3>${esc(i.t)}</h3><p class="muted">${esc(i.d)}</p></div>`).join("")}</div>
      <p class="notice">As regras do Grupo Cedisa são definidas pelo próprio Conselho de Família. As referências acima servem para inspirar a conversa.</p></section>
    <section class="panel flat stack-s"><span class="eyebrow">Sobre a plataforma</span><h3>Um modelo replicável</h3><p class="muted" style="font-size:.88rem">Referências: ${C.references.map(esc).join(" · ")}.</p><p class="muted">A Forja foi desenhada para servir a outras famílias empresárias: marca, números, trilhas, perguntas e cursos ficam num único arquivo de conteúdo. Troque o conteúdo e a mesma estrutura atende outro grupo.</p></section>`;
  }

  /* ================= perfil ================= */
  function viewProfile() {
    const m = S.me, b = bandOf(m), lv = levelOf(m.xp || 0); const apt = m.aptitude && C.aptitude.profiles[m.aptitude.top];
    const badges = [
      ["Primeira faísca", "Concluiu o primeiro módulo", Object.values(m.progress || {}).some((p) => p.done)],
      ["Trilha forjada", "Concluiu toda a trilha " + b.name, bandProgress(m, b).pct === 100],
      ["Nota 10", "Gabaritou o Desafio do Aço", Object.values(m.quizBest || {}).some((v) => v === 8)],
      ["Qual aço é você?", "Fez o mapa de aptidões", !!apt],
      ["Voz da família", "Publicou no mural", posts().some((p) => p.authorId === m.id)],
      ["Repórter", "Respondeu uma reflexão", Object.values(m.answers || {}).some(Boolean)]
    ];
    const theme = document.documentElement.getAttribute("data-theme") || "";
    return `<section class="grid-2" style="align-items:start">
      <div class="panel stack"><div class="row">${avatar(m, "l")}<div><h2>${esc(m.name)}</h2><p class="muted">${esc(m.generation || "")} · ${esc(m.branch || "")}${ageOf(m) != null ? " · " + ageOf(m) + " anos" : ""}</p></div></div>
        <div class="chips"><span class="pill hot">Trilha ${esc(b.name)}</span><span class="pill">${esc(lv.l.t)} · ${fmt(m.xp || 0)} XP</span>${m.isAdmin ? `<span class="pill navy">Conselho de Família</span>` : ""}</div>
        <dl class="stack-s" style="margin:0">
          ${[["Ocupação", m.occupation], ["No Grupo", m.works === "sim" ? m.role || "Sim" : m.works === "nao" ? "Não trabalha no Grupo" : ""], ["Hobbies", (m.hobbies || []).join(", ")], ["Talento", m.talent], ["Responsável", m.byGuardian ? m.guardian : ""]].filter(([, v]) => v).map(([k, v]) => `<div><dt class="eyebrow">${k}</dt><dd style="margin:2px 0 0">${esc(v)}</dd></div>`).join("")}
        </dl>
        <div class="row"><button class="btn btn-ghost btn-s" data-act="edit-profile">Editar perfil</button><button class="btn btn-ghost btn-s" data-act="theme">${ico("moon", 16)} Tema: ${theme === "dark" ? "escuro" : theme === "light" ? "claro" : "automático"}</button><button class="btn btn-ghost btn-s" data-act="logout">Sair</button></div>
      </div>
      <div class="stack">
        <section class="panel stack"><h3>Qual aço é você?</h3>
          ${S.apt ? aptitudeHtml(S.apt, false) : apt ? `<div class="row"><span class="tag-ico">${ico("spark")}</span><div><b>${esc(apt.name)} · ${esc(apt.area)}</b><p class="muted">${esc(apt.d)}</p></div></div><button class="link" style="justify-self:start" data-act="apt-start">Refazer</button>` : `<p class="muted">Descubra seus talentos em 6 perguntas.</p><div><button class="btn btn-hot btn-s" data-act="apt-start">Fazer agora</button></div>`}
        </section>
        <section class="panel stack"><h3>Conquistas</h3><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(min(100%,150px),1fr))">${badges.map(([t, d, on]) => `<div class="stack-s" style="opacity:${on ? 1 : .45}"><span class="tag-ico" style="${on ? "background:var(--orange);color:#fff;border-color:var(--orange)" : ""}">${ico(on ? "star" : "lock")}</span><b style="font-size:.92rem">${t}</b><span class="muted" style="font-size:.8rem">${d}</span></div>`).join("")}</div></section>
      </div></section>`;
  }

  /* ================= painel do conselho ================= */
  function viewAdmin() {
    if (!S.me.isAdmin) return `<p>Área restrita ao Conselho de Família.</p>`;
    const ms = members(); const n = ms.length || 1;
    const avg = Math.round(ms.reduce((s, m) => s + bandProgress(m, bandOf(m)).pct, 0) / n);
    const doneMods = ms.reduce((s, m) => s + Object.values(m.progress || {}).filter((p) => p.done).length, 0);
    const apts = ms.filter((m) => m.aptitude).length;
    const byBand = C.bands.map((b) => [b.name, ms.filter((m) => bandOf(m).id === b.id).length]);
    const byApt = Object.entries(C.aptitude.profiles).map(([k, p]) => [p.name, ms.filter((m) => m.aptitude && m.aptitude.top === k).length]);
    const byCourse = C.courses.map((c) => [c.t, ms.filter((m) => (m.courses || []).includes(c.id)).length]).filter(([, v]) => v).sort((a, b) => b[1] - a[1]);
    const max = (arr) => Math.max(1, ...arr.map(([, v]) => v));
    const hb = (arr) => { const mx = max(arr); return `<div class="hbars">${arr.map(([t, v]) => `<div class="hbar"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(t)}">${esc(t)}</span><span class="track"><i style="width:${(v / mx) * 100}%"></i></span><span class="n">${v}</span></div>`).join("")}</div>`; };
    const sel = S.p.member && memberById(S.p.member);
    return `
    <section class="section-head"><div class="stack-s"><span class="eyebrow">Painel do Conselho de Família</span><h1>Evolução da família</h1><p class="muted">${store.mode === "nuvem" ? "Dados compartilhados em tempo real entre todos que acessam esta página." : "Modo local: você vê os perfis criados neste navegador. Use Exportar/Importar para consolidar dados de outros aparelhos."}</p></div></section>
    <section class="stats">
      <div class="panel stat"><span class="eyebrow">Membros</span><b>${ms.length}</b><span>perfis criados</span></div>
      <div class="panel stat"><span class="eyebrow">Progresso médio</span><b>${avg}%</b><span>na própria trilha</span></div>
      <div class="panel stat"><span class="eyebrow">Módulos</span><b>${doneMods}</b><span>concluídos no total</span></div>
      <div class="panel stat"><span class="eyebrow">Aptidões</span><b>${apts}</b><span>mapas feitos</span></div>
    </section>
    <section class="grid">
      <div class="panel stack-s"><h3>Por etapa da trilha</h3>${hb(byBand)}</div>
      <div class="panel stack-s"><h3>Mapa de aptidões</h3>${hb(byApt)}</div>
      <div class="panel stack-s"><h3>Interesse em cursos</h3>${byCourse.length ? hb(byCourse) : `<p class="muted">Ninguém marcou interesse ainda.</p>`}</div>
    </section>
    <section class="stack"><h2>Membros</h2><div class="table-wrap"><table>
      <thead><tr><th>Nome</th><th>Geração</th><th class="num">Idade</th><th>Trilha</th><th>Progresso</th><th class="num">XP</th><th>Aptidão</th><th>Último acesso</th><th></th></tr></thead>
      <tbody>${ms.map((m) => { const b = bandOf(m), pr = bandProgress(m, b), apt = m.aptitude && C.aptitude.profiles[m.aptitude.top];
        return `<tr><td><div class="row" style="flex-wrap:nowrap">${avatar(m)}<div><b>${esc(m.name)}</b>${m.isAdmin ? ' <span class="pill navy">admin</span>' : ""}${m.demo ? ' <span class="pill">exemplo</span>' : ""}<div class="muted" style="font-size:.8rem">${esc(m.occupation || "")}</div></div></div></td>
        <td>${esc(m.generation || "")}<div class="muted" style="font-size:.8rem">${esc(m.branch || "")}</div></td><td class="num">${ageOf(m) ?? "—"}</td><td>${esc(b.name)}</td>
        <td><div class="mini-bar"><i style="width:${pr.pct}%"></i></div><span class="mono muted" style="font-size:.78rem">${pr.done}/${pr.total}</span></td>
        <td class="num">${fmt(m.xp || 0)}</td><td>${apt ? esc(apt.name) : "—"}</td><td class="muted" style="font-size:.85rem">${m.lastSeen ? new Date(m.lastSeen).toLocaleDateString("pt-BR") : "—"}</td>
        <td><button class="link" data-act="adm-open" data-id="${m.id}">Detalhes</button></td></tr>`; }).join("")}</tbody></table></div></section>
    ${sel ? adminMember(sel) : ""}
    <section class="grid-2" style="align-items:start">
      <div class="panel stack"><h3>Exportar dados</h3><p class="muted">Copie o JSON para guardar um backup ou levar para outro aparelho.</p>
        <textarea id="adm-export" readonly style="min-height:120px;font-family:var(--f-mono);font-size:.78rem">${esc(JSON.stringify(store.dump()))}</textarea>
        <div><button class="btn btn-ghost btn-s" data-act="copy-export">Copiar JSON</button></div></div>
      <div class="panel stack"><h3>Importar dados</h3><p class="muted">Cole um JSON exportado. Perfis com o mesmo código são atualizados; os outros são somados.</p>
        <textarea id="adm-import" style="min-height:120px;font-family:var(--f-mono);font-size:.78rem" placeholder='{"members":{...},"posts":{...}}'></textarea>
        <div><button class="btn btn-ghost btn-s" data-act="import">Importar</button></div></div>
    </section>
    <section class="panel flat stack-s"><h3>Perfis de exemplo</h3><p class="muted">Para testar o painel, carregue quatro perfis fictícios marcados como "exemplo". Remova quando a família começar a usar.</p>
      <div class="row"><button class="btn btn-ghost btn-s" data-act="demo-add">Carregar exemplos</button><button class="btn btn-ghost btn-s" data-act="demo-del">Remover exemplos</button></div></section>`;
  }
  function adminMember(m) {
    const answers = Object.entries(m.answers || {}).filter(([, v]) => v);
    return `<section class="panel stack" id="adm-detail"><div class="row between"><div class="row">${avatar(m, "l")}<div><h2>${esc(m.name)}</h2><p class="muted">${esc(m.generation || "")} · ${esc(m.branch || "")} · criado em ${new Date(m.createdAt || Date.now()).toLocaleDateString("pt-BR")}</p></div></div><button class="link" data-act="adm-close">Fechar</button></div>
      <div class="grid-2"><div class="stack-s"><h3>Reflexões</h3>${answers.length ? answers.map(([id, v]) => `<div><span class="eyebrow">${esc((C.modules[id] || {}).title || id)}</span><p style="white-space:pre-line">${esc(v)}</p></div>`).join("") : `<p class="muted">Sem reflexões ainda.</p>`}</div>
      <div class="stack-s"><h3>Cursos de interesse</h3><p>${(m.courses || []).map((id) => esc((C.courses.find((c) => c.id === id) || {}).t || id)).join(", ") || '<span class="muted">Nenhum</span>'}</p>
        <h3>Desafio do Aço</h3><p>${Object.entries(m.quizBest || {}).map(([k, v]) => `${k === "kid" ? "Crianças" : k === "teen" ? "Adolescentes" : "Adultos"}: ${v}/8`).join(" · ") || '<span class="muted">Ainda não jogou</span>'}</p></div></div>
      <div class="row">
        <button class="btn btn-ghost btn-s" data-act="adm-admin" data-id="${m.id}">${m.isAdmin ? "Remover do Conselho (admin)" : "Tornar admin"}</button>
        <form class="row" data-form="adm-pin" data-id="${m.id}"><input id="adm-pin-${m.id}" class="pin" style="max-width:130px;font-size:1rem!important" type="text" inputmode="numeric" maxlength="4" placeholder="novo PIN"><button class="btn btn-ghost btn-s" type="submit">Redefinir PIN</button></form>
        ${m.id !== S.me.id ? (S.p.confirmMem === m.id ? `<span class="muted">Excluir o perfil de ${esc(firstName(m))}?</span><button class="btn btn-s" style="background:var(--bad);color:#fff" data-act="adm-del" data-id="${m.id}">Sim, excluir</button><button class="link" data-act="adm-del-cancel">Cancelar</button>` : `<button class="link" data-act="adm-del-ask" data-id="${m.id}">Excluir perfil</button>`) : ""}
      </div></section>`;
  }

  /* ================= ações ================= */
  const A = {
    nav: (el) => { S.lesson = null; S.apt = null; if (S.wiz && S.wiz.done) S.wiz = null; go(el.dataset.v); },
    "nav-out": (el) => { S.flash = null; S.wiz = null; go(el.dataset.v); },
    "start-onboard": () => { S.flash = null; S.wiz = { step: 0, data: { hobbies: [] } }; go("onboard"); },
    "goto-login": () => { S.flash = null; go("login"); },
    "pick-login": (el) => { S.flash = null; go("login", { id: el.dataset.id }); },
    "wiz-back": () => { S.flash = null; S.wiz.step--; render(); },
    "wiz-set": (el) => { S.wiz.data[el.dataset.f] = el.dataset.val; render(); },
    "wiz-add-hobby": () => { document.querySelectorAll("[data-bind]").forEach((x) => { S.wiz.data[x.dataset.bind] = x.type === "checkbox" ? x.checked : x.value; }); if (addTypedHobby()) render(); else toast("Escreva o hobby no campo antes de adicionar."); },
    "wiz-hobby": (el) => { const h = el.dataset.h, hs = S.wiz.data.hobbies || (S.wiz.data.hobbies = []); const i = hs.indexOf(h); i >= 0 ? hs.splice(i, 1) : hs.push(h); render(); },
    "edit-profile": () => { const m = S.me; S.flash = null; S.wiz = { step: 0, editing: true, data: { name: m.name, nick: m.nick, birth: m.birth, byGuardian: m.byGuardian, guardian: m.guardian, branch: m.branch, generation: m.generation, occupation: m.occupation, works: m.works, role: m.role, hobbies: (m.hobbies || []).slice(), talent: m.talent } }; go("onboard"); },
    logout: () => { ForjaStore.session.set(""); S.me = null; S.lesson = null; go("welcome"); },
    theme: () => { const r = document.documentElement; const cur = r.getAttribute("data-theme"); const next = cur === "dark" ? "light" : cur === "light" ? "" : "dark"; next ? r.setAttribute("data-theme", next) : r.removeAttribute("data-theme"); try { localStorage.setItem("forja-theme", next); } catch (e) {} render(); },
    "set-band": (el) => { saveMe({ bandOverride: el.dataset.id || "" }).then(render); },
    "open-mod": (el) => { S.lesson = { id: el.dataset.id, step: 0, act: newAct(el.dataset.id) }; S.view = "module"; render(); window.scrollTo({ top: 0 }); },
    "les-next": () => { S.lesson.step++; render(); window.scrollTo({ top: 0 }); },
    "les-prev": () => { S.lesson.step--; render(); },
    speak: (el) => speak(el.dataset.text),
    "q-pick": (el) => { const st = S.lesson.act, mod = C.modules[S.lesson.id]; const qs = mod.activity.type === "quiz" ? mod.activity.questions : mod.activity.after; const i = +el.dataset.i; st.picked = i; if (i === qs[st.i].answer) st.right++; render(); },
    "q-next": () => { const st = S.lesson.act, mod = C.modules[S.lesson.id]; const qs = mod.activity.type === "quiz" ? mod.activity.questions : mod.activity.after; if (st.i < qs.length - 1) { st.i++; st.picked = null; render(); } else finishModule(st.right); },
    "s-sel": (el) => { const st = S.lesson.act; st.sel = +el.dataset.i; st.msg = null; render(); },
    "s-put": (el) => {
      const st = S.lesson.act, a = C.modules[S.lesson.id].activity; if (st.sel == null) return;
      const bi = +el.dataset.b; const it = a.items[st.sel];
      if (it.bin === bi) { st.placed[st.sel] = bi; st.sel = null; st.msg = null; } else { st.msg = `"${it.t}" não vai em "${a.bins[bi]}". Tente outra caixa.`; st.miss++; }
      render();
    },
    "c-tap": (el) => { const st = S.lesson.act; const i = +el.dataset.i; if (!st.tapped.includes(i)) { st.tapped.push(i); if (bandOf(S.me).mode === "kid") speak(String(st.tapped.length)); } render(); },
    "c-pick": (el) => { S.lesson.act.picked = +el.dataset.o; render(); },
    "alloc-done": () => {
      const L = S.lesson, cfg = C.allocs[C.modules[L.id].activity.preset]; const al = L.act.alloc;
      const txt = cfg.buckets.map((b) => `${b.t}: R$ ${al[b.id]} mi`).join("\n");
      saveMe({ answers: Object.assign({}, S.me.answers, { [L.id]: "Minha alocação:\n" + txt }) }).then(() => finishModule(null));
    },
    "sim-after": () => { const st = S.lesson.act; st.phase = "after"; st.i = 0; st.picked = null; st.right = 0; render(); },
    finish: () => { const a = C.modules[S.lesson.id].activity; finishModule(a.type === "sim" && a.after ? S.lesson.act.right : null); },
    "m-tog": (el) => { const id = S.lesson.id, i = +el.dataset.i; const ms = Object.assign({}, S.me.missions); const arr = (ms[id] || []).slice(); arr[i] = !arr[i]; ms[id] = arr; saveMe({ missions: ms }).then(render); },
    "apt-start": () => { S.apt = { i: 0, scores: {} }; render(); },
    "apt-pick": async (el) => {
      const inMod = el.dataset.in === "1"; const st = inMod ? S.lesson.act : S.apt; const k = el.dataset.k;
      st.scores[k] = (st.scores[k] || 0) + 1; st.i++;
      if (st.i >= C.aptitude.questions.length) { const top = Object.entries(st.scores).sort((a, b) => b[1] - a[1])[0][0]; await saveMe({ aptitude: { top, scores: st.scores, at: Date.now() } }); }
      render();
    },
    "qz-level": (el) => { S.quiz = { level: el.dataset.l }; render(); },
    "qz-start": (el) => {
      const lvl = el.dataset.l; const pool = shuffle(C.quizPool[lvl]).slice(0, 8);
      S.quiz = { level: lvl, i: 0, right: 0, picked: null, qs: pool.map((q) => ({ q: q.q, opts: shuffle(q.options.map((t, i) => ({ t, ok: i === q.answer }))) })) };
      render();
    },
    "qz-pick": (el) => { const Q = S.quiz; Q.picked = +el.dataset.i; if (Q.qs[Q.i].opts[Q.picked].ok) Q.right++; render(); },
    "qz-next": async () => {
      const Q = S.quiz; if (Q.i < Q.qs.length - 1) { Q.i++; Q.picked = null; return render(); }
      Q.over = true; const best = (S.me.quizBest || {})[Q.level] || 0; Q.gained = 0;
      if (Q.right > best) { Q.gained = (Q.right - best) * 5; await saveMe({ quizBest: Object.assign({}, S.me.quizBest, { [Q.level]: Q.right }), xp: (S.me.xp || 0) + Q.gained }); }
      render();
    },
    "fam-filter": (el) => go("family", { gen: el.dataset.g }),
    "post-filter": (el) => { S.p = { type: el.dataset.t }; render(); },
    like: async (el) => { const p = posts().find((x) => x.id === el.dataset.id); if (!p) return; const likes = (p.likes || []).slice(); const i = likes.indexOf(S.me.id); i >= 0 ? likes.splice(i, 1) : likes.push(S.me.id); try { await store.set("posts", p.id, Object.assign({}, p, { likes })); } catch (e) { toast("Não consegui salvar a curtida."); } },
    "del-post-ask": (el) => { S.p.confirmDel = el.dataset.id; render(); },
    "del-post-cancel": () => { S.p.confirmDel = null; render(); },
    "del-post": async (el) => { S.p.confirmDel = null; try { await store.remove("posts", el.dataset.id); toast("Publicação apagada."); } catch (e) { toast("Não consegui apagar."); } render(); },
    course: (el) => { const id = el.dataset.id; const cs = (S.me.courses || []).slice(); const i = cs.indexOf(id); i >= 0 ? cs.splice(i, 1) : cs.push(id); saveMe({ courses: cs }).then(() => { toast(i >= 0 ? "Interesse removido." : "Interesse registrado para o Conselho."); render(); }); },
    "adm-open": (el) => { S.p = { member: el.dataset.id }; render(); const d = document.getElementById("adm-detail"); if (d) d.scrollIntoView({ behavior: "smooth", block: "start" }); },
    "adm-close": () => { S.p = {}; render(); },
    "adm-admin": async (el) => { const m = memberById(el.dataset.id); if (!m) return; if (m.id === S.me.id && m.isAdmin) return toast("Você não pode remover o seu próprio acesso de admin."); await saveMember(Object.assign({}, m, { isAdmin: !m.isAdmin })); toast(m.isAdmin ? "Acesso de admin removido." : "Agora é admin."); render(); },
    "adm-del-ask": (el) => { S.p.confirmMem = el.dataset.id; render(); },
    "adm-del-cancel": () => { S.p.confirmMem = null; render(); },
    "adm-del": async (el) => { try { await store.remove("members", el.dataset.id); toast("Perfil excluído."); } catch (e) { toast("Não consegui excluir."); } S.p = {}; render(); },
    "copy-export": () => { const ta = document.getElementById("adm-export"); const txt = ta.value; const done = () => toast("JSON copiado."); try { navigator.clipboard.writeText(txt).then(done, () => { ta.select(); toast("Selecionei o texto: use Ctrl+C para copiar."); }); } catch (e) { ta.select(); toast("Selecionei o texto: use Ctrl+C para copiar."); } },
    import: async () => {
      const raw = document.getElementById("adm-import").value.trim(); if (!raw) return toast("Cole o JSON exportado primeiro.");
      let obj; try { obj = JSON.parse(raw); } catch (e) { return toast("Esse texto não é um JSON válido. Copie de novo o conteúdo exportado."); }
      if (!obj.members && !obj.posts) return toast("O JSON não tem 'members' nem 'posts'.");
      await store.load(obj); toast(`Importado: ${Object.keys(obj.members || {}).length} perfis e ${Object.keys(obj.posts || {}).length} publicações.`); render();
    },
    "demo-add": async () => {
      const y = new Date().getFullYear();
      const demo = [
        ["Ana (exemplo)", `${y - 38}-03-10`, "3ª geração", "Família Claudionor", "Arquiteta", "nao", ["Viajar", "Fotografia", "Praia"], "solda", { "l-historia": 1, "e-porque": 1, "e-governanca": 1 }, 160],
        ["Bruno (exemplo)", `${y - 29}-07-22`, "3ª geração", "Família José", "Cedisa · Coordenador de logística", "sim", ["Futebol", "Pescar", "Churrasco"], "bobina", { "e-porque": 1, "e-dre": 1, "e-estrategia": 1, "e-valorizacao": 1 }, 240],
        ["Lia (exemplo)", `${y - 8}-01-15`, "4ª geração", "Família Claudionor", "3º ano", "", ["Desenhar", "Lego", "Praia"], null, { "l-historia": 1, "l-processo": 1 }, 70],
        ["Theo (exemplo)", `${y - 2}-11-02`, "4ª geração", "Família José", "Ainda não vai à escola", "", ["Bichos"], null, { "m-caminhao": 1 }, 25]
      ];
      for (const [name, birth, generation, branch, occ, works, hobbies, apt, prog, xp] of demo) {
        const id = "demo-" + hash(name);
        const progress = {}; Object.keys(prog).forEach((k) => (progress[k] = { done: true, score: null, at: Date.now() }));
        await store.set("members", id, { id, demo: true, name, birth, generation, branch, occupation: occ, works, role: works === "sim" ? occ : "", hobbies, pinHash: pinHash("0000"), color: avColor(name), createdAt: Date.now(), lastSeen: Date.now() - Math.floor(Math.random() * 9) * 864e5, progress, xp, answers: apt === "solda" ? { "e-porque": "Integridade. Foi o que o vovô sempre repetiu nos almoços de domingo." } : {}, missions: {}, courses: apt ? ["visita", "ibgc-familia"] : ["livro-familia"], quizBest: {}, aptitude: apt ? { top: apt, scores: { [apt]: 4 } } : null, isAdmin: false });
      }
      toast("Exemplos carregados (PIN 0000)."); render();
    },
    "demo-del": async () => { for (const m of store.all("members").filter((m) => m.demo)) await store.remove("members", m.id); toast("Exemplos removidos."); render(); }
  };
  function newAct(id) {
    const a = C.modules[id].activity;
    if (a.type === "quiz") return { i: 0, picked: null, right: 0 };
    if (a.type === "sort") return { sel: null, placed: {}, miss: 0 };
    if (a.type === "count") return { tapped: [], picked: null };
    if (a.type === "aptitude") return { i: 0, scores: {} };
    return {};
  }

  function addTypedHobby() {
    const el = document.getElementById("w-hobby"); if (!el || !S.wiz) return false;
    const vals = el.value.split(",").map((v) => v.trim()).filter(Boolean); if (!vals.length) return false;
    const hs = S.wiz.data.hobbies || (S.wiz.data.hobbies = []);
    vals.forEach((v) => { if (!hs.includes(v)) hs.push(v); }); el.value = ""; return true;
  }

  /* ================= formulários ================= */
  const F = {
    wiz: () => {
      document.querySelectorAll("[data-bind]").forEach((el) => { S.wiz.data[el.dataset.bind] = el.type === "checkbox" ? el.checked : el.value; });
      addTypedHobby();
      const err = wizValidate(); S.flash = err;
      if (err) return render();
      if (S.wiz.step < WIZ_STEPS.length - 1) { S.wiz.step++; render(); window.scrollTo({ top: 0 }); } else wizFinish();
    },
    login: () => {
      const pin = document.getElementById("login-pin").value; const m = memberById(S.p.id);
      if (!m) return go("login");
      if (pinHash(pin) !== m.pinHash) { S.flash = "PIN incorreto. Tente de novo."; return render(); }
      S.flash = null; S.me = Object.assign({}, m); ForjaStore.session.set(m.id); saveMe({}); go("home");
    },
    reflect: () => {
      const v = document.getElementById("reflect-" + S.lesson.id).value.trim();
      if (!v) return toast("Escreva pelo menos uma frase antes de concluir.");
      saveMe({ answers: Object.assign({}, S.me.answers, { [S.lesson.id]: v }) }).then(() => finishModule(null));
    },
    post: async () => {
      const title = document.getElementById("post-title").value.trim(), body = document.getElementById("post-body").value.trim(), type = document.getElementById("post-type").value;
      if (!title || !body) return toast("Preencha título e texto.");
      const id = uid();
      try { await store.set("posts", id, { id, title, body, type, authorId: S.me.id, authorName: S.me.name, createdAt: Date.now(), likes: [] }); toast("Publicado no mural."); } catch (e) { toast("Não consegui publicar. Você pode não ter permissão de edição."); }
      render();
    },
    "adm-pin": async (form) => {
      const id = form.dataset.id; const v = document.getElementById("adm-pin-" + id).value;
      if (!/^\d{4}$/.test(v)) return toast("O PIN precisa ter 4 números.");
      const m = memberById(id); await saveMember(Object.assign({}, m, { pinHash: pinHash(v) })); toast("PIN redefinido. Avise a pessoa."); render();
    }
  };

  /* ================= eventos ================= */
  document.addEventListener("click", (ev) => {
    const el = ev.target.closest("[data-act]"); if (!el) return;
    const fn = A[el.dataset.act]; if (fn) { ev.preventDefault(); fn(el, ev); }
  });
  document.addEventListener("submit", (ev) => {
    const f = ev.target.closest("[data-form]"); if (!f) return; ev.preventDefault();
    const fn = F[f.dataset.form]; if (fn) fn(f);
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && ev.target && ev.target.id === "w-hobby" && ev.target.value.trim()) { ev.preventDefault(); A["wiz-add-hobby"](); }
  });
  document.addEventListener("input", (ev) => {
    const el = ev.target;
    if (el.dataset && el.dataset.digits !== undefined) { const v = el.value.replace(/\D/g, "").slice(0, 4); if (v !== el.value) el.value = v; }
    if (el.dataset && el.dataset.alloc && S.lesson) {
      S.lesson.act.alloc[el.dataset.alloc] = +el.value;
      const id = el.id; render(); const again = document.getElementById(id); if (again) again.focus();
      return;
    }
    if (el.dataset && el.dataset.sim && S.lesson) {
      S.lesson.act.vals[el.dataset.sim] = +el.value;
      const id = el.id; render(); const again = document.getElementById(id); if (again) again.focus();
    }
    if (el.dataset && el.dataset.bind && S.wiz) {
      S.wiz.data[el.dataset.bind] = el.type === "checkbox" ? el.checked : el.value;
      if (el.type === "checkbox") render();
    }
  });
  document.addEventListener("focusout", () => { if (pendingRender) setTimeout(() => { const ae = document.activeElement; if (!ae || !/INPUT|TEXTAREA|SELECT/.test(ae.tagName)) { pendingRender = false; render(); } }, 0); });

  /* ================= início ================= */
  (async function boot() {
    try { const t = localStorage.getItem("forja-theme"); if (t) document.documentElement.setAttribute("data-theme", t); } catch (e) {}
    $app.innerHTML = `<div class="welcome"><p class="muted">Aquecendo a forja…</p></div>`;
    store = await ForjaStore.init();
    const resume = () => { const sid = ForjaStore.session.get(); const m = sid && memberById(sid); if (m && !S.me && S.view === "welcome") { S.me = Object.assign({}, m); S.view = "home"; } };
    // no modo nuvem o banco responde depois do boot: retoma a sessão quando o perfil chegar
    store.onChange(() => { resume(); S._fromStore = true; render(); });
    resume();
    render();
  })();
})();
