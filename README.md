# Forja · Trilha do Acionista — Grupo Cedisa

Plataforma de formação da família acionista do Grupo Cedisa (Cedisa Central de Aço S.A. e
Valorização Administração e Participação S.A.). Cada membro cria um perfil rápido e recebe a
trilha da sua faixa etária, com conteúdos, quizzes, simuladores de DRE, missões em família e
mapa de aptidões.

## Etapas da trilha (faixas etárias)

| Etapa | Idade | Tom |
|---|---|---|
| Minério | 0–3 | Para fazer no colo de um adulto (cores, caminhões, "forte como o aço") |
| Faísca | 4–6 | Lúdico: onde mora o aço, cofrinho, valores em situações do dia a dia |
| Lingote | 7–9 | História da família, do minério à viga, mapa, "quanto sobra de R$ 100" |
| Chapa | 10–12 | As duas empresas, produtos, números de 2026, banca de brigadeiro |
| Perfil | 13–17 | Três círculos, margem de 4%, primeira DRE, mercado, Qual aço é você? |
| Viga | 18–24 | Papéis do acionista, leitura da DRE, indicadores, SPE, caminhos de carreira |
| Estrutura | 25+ | Governança, alavancas e riscos, estratégia 2030, sucessão |

## Governança (Cambridge Family Enterprise Group e IBGC)

Módulos adaptados por idade: escutar e conversar (crianças), riqueza como pomar e os três
chapéus (7–12), regra das três gerações, conversas difíceis e tipos de sócio (13–17),
decisões indelegáveis, alocação de capital (simulador), acordo de sócios e protocolo,
regime de bens (18–24), Regimento do Conselho de Família, quatro pilares da riqueza entre
gerações, harmonia x alinhamento e sucessão como parceria (25+). O resumo do Regimento
Interno do Conselho de Família fica na página Governança.

## Seções

Início · Trilha · Desafio do Aço (quiz com placar) · O Grupo (missão, visão, valores, números,
mapa, linha do tempo) · Família (perfis, hobbies em comum) · Mural/newsletter · Cursos ·
Governança · Painel do Conselho (admin).

## Como testar

Abra `index.html` por um servidor estático (ex.: `python3 -m http.server` nesta pasta) ou
publique via GitHub Pages. Crie um perfil; para virar admin, abra "Sou do Conselho de Família"
no último passo e use o código definido em `js/content.js` (`brand.adminCode`).
No painel, "Carregar exemplos" cria 4 perfis fictícios (PIN 0000) para testar.

## Dados

- **GitHub Pages / navegador**: os perfis ficam no `localStorage` de cada aparelho. O painel
  tem Exportar/Importar JSON para consolidar.
- **Artifact do Claude**: usa um banco compartilhado; toda a família vê os mesmos dados.
- Para produção multiusuário fora do Claude, troque o backend em `js/store.js`
  (Supabase/Firebase) mantendo a mesma interface.

O PIN é uma trava de conveniência, não segurança real. Não guarde dados sensíveis.

## Replicar para outras empresas

Todo o conteúdo (marca, números, trilhas, perguntas, cursos, notícias) está em
`js/content.js`. Troque esse arquivo para usar a mesma estrutura em outra família empresária.

## Atualizar números

Edite `numbers` em `js/content.js` a cada fechamento (toneladas, caminhões, dias úteis).
