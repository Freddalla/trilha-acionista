/*
 * Forja · Trilha do Acionista — conteúdo e configuração
 * ------------------------------------------------------
 * Tudo o que é específico do Grupo Cedisa mora neste arquivo.
 * Para usar a plataforma em outra empresa familiar, basta trocar
 * este arquivo (marca, números, trilhas, perguntas e cursos).
 */
window.FORJA = {

  brand: {
    appName: "Forja",
    group: "Grupo Cedisa",
    tagline: "Trilha do Acionista",
    // Código que transforma um perfil em administrador (Conselho de Família).
    // Troque antes de divulgar para a família.
    adminCode: "CEDISA-CONSELHO",
    manifesto: "O aço nasce do mesmo minério e ganha formas diferentes: chapa, tubo, viga, telha. Cada um de nós também é moldado de um jeito, com seu talento e sua função. A essência é a mesma: os valores que recebemos de quem começou tudo."
  },

  /* ---------- Números do Grupo (atualize a cada fechamento) ---------- */
  numbers: {
    periodo: "2026 até agosto",
    toneladasRealizadas: 89746,
    toneladasMeta: 141141,
    mediaDiaria: 547.23,
    diasUteis: 164,
    caminhoes: 5119,
    caminhoesDia: 31,
    beneficiamentoPct: 70,
    margemLiquidaPct: 4,
    faturamento2025: "perto de R$ 1 bilhão",
    investimentoFabrica: "R$ 120 milhões",
    areaOperacaoAntes: "16 mil m²",
    areaOperacaoDepois: "29 mil m²",
    areaComplexo: "200 mil m²",
    metaEstrategica: "Dobrar o faturamento até 2030"
  },

  companies: [
    {
      id: "cedisa",
      name: "Cedisa Central de Aço S.A.",
      short: "Cedisa",
      what: "Distribuição e beneficiamento de aço",
      summary: "A Cedisa começou como distribuidora de aço. Hoje a maior parte da operação é o beneficiamento: cortar, dobrar e transformar o aço que vem das usinas em produtos prontos para o cliente. O beneficiamento já responde por 70% do volume faturado.",
      negocio: "Transformar aço em solução.",
      missao: "Atender o mercado oferecendo amplo mix de produtos com qualidade e excelência em distribuição e beneficiamento de aço.",
      visao: "Ser referência na distribuição e beneficiamento de aço atuando em todo território nacional.",
      products: ["Chapas laminadas", "Cortes especiais em várias espessuras", "Perfis", "Vigas", "Tubos", "Telhas trapézio e onduladas"]
    },
    {
      id: "valorizacao",
      name: "Valorização Administração e Participação S.A.",
      short: "Valorização",
      what: "Desenvolvimento e gestão de ativos imobiliários",
      summary: "Fundada nos anos 1970, foi a primeira loteadora do Espírito Santo, com atuação forte na Serra e em Aracruz. Hoje atua em modelo de parceria, mantendo o DNA desenvolvedor: seleciona bons terrenos, estrutura negócios e faz a gestão dos ativos com olhar de longo prazo.",
      areas: [
        { t: "Desenvolvimento de ativos para locação", d: "Criar imóveis (como galpões e condomínios industriais e logísticos) que geram renda com aluguel." },
        { t: "Parcerias em loteamentos", d: "Entrar com a terra e a governança; o parceiro loteador executa. A Valorização escolhe o parceiro com critério e acompanha tudo." },
        { t: "Gestão estratégica de áreas com potencial futuro", d: "Cuidar de terrenos que ainda vão ganhar valor, protegendo e preparando o patrimônio." }
      ],
      papel: [
        "Escolher criteriosamente o loteador parceiro",
        "Avaliação técnica das áreas",
        "Estruturação jurídica e societária",
        "Segurança regulatória e ambiental",
        "Controle e transparência financeira",
        "Governança da SPE ou do contrato de parceria",
        "Segurança na execução da obra",
        "Rentabilizar o que já existe: aluguéis e renda",
        "Proteger o patrimônio nos aspectos jurídico, tributário e societário"
      ],
      evolucao: ["Loteadora", "Gestora", "Desenvolvedora de ativos"],
      objetivo: "Evoluir de empresa patrimonial para empresa de criação de valor."
    }
  ],

  values: [
    { t: "Valorizamos clientes e ganhamos juntos.", kid: "A gente cuida bem de quem compra com a gente.", icon: "handshake" },
    { t: "Segurança das pessoas é nossa prioridade.", kid: "Primeiro a segurança: capacete, cuidado e atenção.", icon: "shield" },
    { t: "Cuidamos das pessoas e temos compromisso com os resultados.", kid: "Cuidar de todo mundo e fazer bem-feito.", icon: "people" },
    { t: "Agimos com integridade e transparência e respeitamos regras e leis.", kid: "Falar a verdade e seguir as regras.", icon: "scale" },
    { t: "O que queremos, fazemos!", kid: "Quando a gente decide, a gente faz!", icon: "flame" }
  ],

  sides: [
    { t: "Nosso lado transformador", label: "Negócio", d: "Transformar aço em solução.", icon: "bulb" },
    { t: "Nosso lado eficiente", label: "Missão", d: "Atender o mercado oferecendo amplo mix de produtos com qualidade e excelência em distribuição e beneficiamento de aço.", icon: "chart" },
    { t: "Nosso lado desafiador", label: "Visão", d: "Ser referência na distribuição e beneficiamento de aço atuando em todo território nacional.", icon: "target" },
    { t: "Nosso lado responsável", label: "Valores", d: "Cinco valores que guiam cada decisão.", icon: "people" }
  ],

  origin: "A história da Cedisa começou com Dionísio Dalla Bernardina, que iniciou uma trajetória de empreendedorismo ao lado de seus filhos. Em 1958 surge a Irmãos Dalla Bernardina S/A Ferragens, em Colatina (ES), sob a administração dos filhos mais velhos, José e Claudionor. Esse legado familiar foi o ponto de partida para uma jornada que atravessa gerações.",

  timeline: [
    { y: "1958", co: "Cedisa", t: "Irmãos Dalla Bernardina", d: "Inauguração da Irmãos Dalla Bernardina S/A Ferragens, em Colatina (ES), administrada por José e Claudionor, filhos de Dionísio." },
    { y: "Anos 1970", co: "Valorização", t: "Nasce a Valorização", d: "A primeira loteadora do Espírito Santo, com atuação forte na Serra e em Aracruz." },
    { y: "1975", co: "Cedisa", t: "Fundação da Cedisa", d: "A Cedisa – Central de Aço nasce sucedendo a Irmãos Dalla Bernardina." },
    { y: "1982", co: "Cedisa", t: "Planta na Serra", d: "Inauguração da planta em Serra (ES)." },
    { y: "1984", co: "Cedisa", t: "Primeiras filiais", d: "Filiais em Itabuna (BA) e Colatina (ES), e escritório em Macaé (RJ)." },
    { y: "1994", co: "Cedisa", t: "Salvador", d: "Início da filial de Salvador (BA)." },
    { y: "2004", co: "Cedisa", t: "Mais máquinas e ISO 9001", d: "Expansão dos galpões, instalação de novas máquinas e início da implantação da ISO 9001." },
    { y: "2007", co: "Cedisa", t: "Macaé", d: "Abertura da filial em Macaé (RJ)." },
    { y: "2010", co: "Cedisa", t: "Virada industrial", d: "Início do fortalecimento do processo industrial: a Cedisa passa a transformar cada vez mais o aço." },
    { y: "2012", co: "Cedisa", t: "Recife", d: "Início da filial em Recife (PE)." },
    { y: "2013", co: "Cedisa", t: "Rio de Janeiro", d: "Início do escritório no Rio de Janeiro (RJ)." },
    { y: "2020", co: "Grupo", t: "Estocagem e novo ciclo", d: "Ampliação da área de estocagem da Matriz. A Valorização inicia o foco em condomínios industriais, comerciais e logísticos." },
    { y: "2022", co: "Cedisa", t: "Cercado da Pedra, Cuiabá e nova marca", d: "Filial industrial em Cercado da Pedra – Serra (ES), escritório de vendas em Cuiabá (MT) e lançamento da nova marca da Cedisa Central de Aço S.A." },
    { y: "2023", co: "Cedisa", t: "Volta Redonda", d: "Início das operações da filial industrial em Volta Redonda (RJ)." },
    { y: "2024", co: "Grupo", t: "Fortaleza e Aracruz", d: "Inauguração do ponto de venda de Fortaleza (CE). O Grupo compra uma grande área em Aracruz, de olho em novas expansões." },
    { y: "2025", co: "Cedisa", t: "50 anos e nova Matriz", d: "Inauguração da nova planta da Matriz em Calogi – Serra (ES), com investimento de R$ 120 milhões, e novos pontos de venda. Meio século de Cedisa, com faturamento perto de R$ 1 bilhão." },
    { y: "2026", co: "Cedisa", t: "Calogi a pleno vapor", d: "100% das atividades transferidas para Calogi. A área de operação sai de 16 mil para 29 mil m², num complexo de 200 mil m²." },
    { y: "2030", co: "Cedisa", t: "Meta: dobrar", d: "Dobrar o faturamento e consolidar a Cedisa como referência nacional." }
  ],

  family: {
    founders: "José e Claudionor Dalla Bernardina",
    generations: [
      { g: "1ª geração", d: "Os fundadores José e Claudionor, filhos de Dionísio. Duas famílias que começaram tudo." },
      { g: "2ª geração", d: "11 membros. Alguns fazem parte do Conselho de Administração." },
      { g: "3ª geração", d: "5 pessoas já atuam na empresa, em cargos diferentes." },
      { g: "4ª geração", d: "Está chegando. É para ela que esta trilha começa no Minério." }
    ],
    branches: ["Família Claudionor", "Família José"],
    holdings: ["Santa Lucia Participação e Agropecuária S/A", "Ultrapar Participação e Agropecuária S/A"],
    traditions: ["Almoço de domingo", "Natal em família"]
  },

  /* ---------- Mapa ---------- */
  topStates: ["ES", "BA", "PE", "RJ", "SP"],
  branchesList: [
    { city: "Serra (Calogi)", uf: "ES", kind: "matriz" },
    { city: "Recife", uf: "PE", kind: "industrial" },
    { city: "Salvador", uf: "BA", kind: "industrial" },
    { city: "Volta Redonda", uf: "RJ", kind: "industrial" },
    { city: "Rio de Janeiro", uf: "RJ", kind: "venda" },
    { city: "Macaé", uf: "RJ", kind: "venda" },
    { city: "Luís Eduardo Magalhães", uf: "BA", kind: "venda" },
    { city: "Fortaleza", uf: "CE", kind: "venda" },
    { city: "Campo Grande", uf: "MS", kind: "venda" },
    { city: "Cuiabá", uf: "MT", kind: "venda" },
    { city: "Cercado da Pedra (Serra)", uf: "ES", kind: "industrial" }
  ],
  // Mapa em blocos (coluna, linha) — cada estado é um quadrado.
  tileMap: {
    RR: [2, 0], AP: [4, 0],
    AC: [0, 1], AM: [1, 1], PA: [3, 1], MA: [4, 1], CE: [5, 1], RN: [6, 1],
    RO: [1, 2], MT: [2, 2], TO: [3, 2], PI: [4, 2], PE: [5, 2], PB: [6, 2],
    MS: [1, 3], GO: [2, 3], DF: [3, 3], BA: [4, 3], AL: [5, 3], SE: [6, 3],
    SP: [2, 4], MG: [3, 4], ES: [4, 4],
    PR: [2, 5], RJ: [3, 5],
    SC: [2, 6],
    RS: [2, 7]
  },

  /* ---------- Faixas etárias = etapas do aço ---------- */
  bands: [
    { id: "minerio", name: "Minério", min: 0, max: 3, age: "0 a 3 anos", line: "A matéria-prima de tudo.", mode: "kid", guide: "Para fazer no colo de um adulto: ler em voz alta, apontar, brincar.",
      modules: ["m-caminhao", "m-cores", "m-forte", "m-escutar", "m-domingo"] },
    { id: "faisca", name: "Faísca", min: 4, max: 6, age: "4 a 6 anos", line: "O fogo que acende a curiosidade.", mode: "kid", guide: "Brincadeiras curtas. Um adulto pode ler junto.",
      modules: ["f-oque", "f-contar", "f-valores", "f-conversar", "f-cofrinho", "f-missao"] },
    { id: "lingote", name: "Lingote", min: 7, max: 9, age: "7 a 9 anos", line: "Tomando forma.", mode: "kid",
      modules: ["l-historia", "l-processo", "l-mapa", "l-100reais", "l-sementes", "l-valores"] },
    { id: "chapa", name: "Chapa", min: 10, max: 12, age: "10 a 12 anos", line: "Pronta para ser moldada.", mode: "teen",
      modules: ["c-grupo", "c-linha", "c-produtos", "c-numeros", "c-brigadeiro", "c-chapeus", "c-valorizacao", "c-entrevista"] },
    { id: "perfil", name: "Perfil", min: 13, max: 17, age: "13 a 17 anos", line: "Ganhando dobra e função.", mode: "teen",
      modules: ["p-circulos", "p-3geracoes", "p-dinheiro", "p-dre", "p-mercado", "p-conversas", "p-socios", "p-valorizacao", "p-aptidao", "p-futuro"] },
    { id: "viga", name: "Viga", min: 18, max: 24, age: "18 a 24 anos", line: "Sustenta o que vem.", mode: "adult",
      modules: ["v-papeis", "v-decisoes", "v-dre", "v-indicadores", "v-capital", "v-protocolo", "v-bens", "v-valorizacao", "v-caminhos", "v-aptidao"] },
    { id: "estrutura", name: "Estrutura", min: 25, max: 200, age: "25 anos ou mais", line: "Sustenta e une o conjunto.", mode: "adult",
      modules: ["e-porque", "e-historia", "e-governanca", "e-regimento", "e-riqueza", "e-dre", "e-capital", "e-estrategia", "e-valorizacao", "e-conflitos", "e-sucessao", "e-aptidao"] }
  ],

  levels: [
    { xp: 0, t: "Aprendiz da Forja" },
    { xp: 80, t: "Soldador(a)" },
    { xp: 200, t: "Laminador(a)" },
    { xp: 380, t: "Mestre do Aço" },
    { xp: 600, t: "Guardião(ã) do Legado" }
  ],

  /* ---------- Módulos ---------- */
  modules: {

    /* ===== MINÉRIO 0–3 ===== */
    "m-caminhao": {
      title: "Vrum! O caminhão da Cedisa", icon: "truck", minutes: 3,
      cards: [
        { t: "Olha o caminhão!", b: "Todo dia, bem cedinho, os caminhões da Cedisa saem carregados de aço. Vrum, vrum!", visual: "trucks" },
        { t: "Para onde ele vai?", b: "Ele leva o aço para longe, para construir casas, pontes e escolas. Faça o barulho do caminhão com a criança: vrum, vrum, biiii!" }
      ],
      activity: { type: "count", prompt: "Quantos caminhões você vê? Conte junto, apontando um por um.", item: "truck", n: 3, options: [2, 3, 4] }
    },
    "m-cores": {
      title: "Azul e laranja", icon: "palette", minutes: 2,
      cards: [
        { t: "As cores da Cedisa", b: "A Cedisa tem duas cores: azul, como o céu de noite, e laranja, como o aço quentinho saindo do forno.", visual: "colors" }
      ],
      activity: { type: "quiz", questions: [
        { q: "Qual é o laranja?", swatch: true, options: [{ label: "azul", color: "#0B1E45" }, { label: "laranja", color: "#F36F21" }, { label: "verde", color: "#2F8F5B" }], answer: 1, explain: "Laranja, como o aço quente!" },
        { q: "E qual é o azul?", swatch: true, options: [{ label: "amarelo", color: "#F2C94C" }, { label: "vermelho", color: "#D7191C" }, { label: "azul", color: "#0B1E45" }], answer: 2, explain: "Azul, a cor da Cedisa." }
      ] }
    },
    "m-forte": {
      title: "Forte como o aço", icon: "coil", minutes: 3,
      cards: [
        { t: "Duro ou macio?", b: "O aço é bem duro e forte. Deixe a criança apertar algo macio (um travesseiro) e algo duro (uma colher de metal). Qual é qual?" }
      ],
      activity: { type: "sort", prompt: "Toque em cada coisa e escolha: é duro ou macio?", bins: ["Duro", "Macio"], items: [
        { t: "🥄 Colher", bin: 0 }, { t: "🧸 Ursinho", bin: 1 }, { t: "🔩 Parafuso", bin: 0 }, { t: "🛏️ Travesseiro", bin: 1 }
      ] }
    },
    "m-domingo": {
      title: "Almoço de domingo", icon: "home", minutes: 5,
      cards: [
        { t: "A família é a nossa fornalha", b: "É no almoço de domingo e no Natal que a família se encontra. É ali que as histórias passam de avô para neto." }
      ],
      activity: { type: "mission", prompt: "Missões para o próximo encontro de família:", tasks: [
        "Dar um abraço em alguém da 2ª geração",
        "Olhar uma foto antiga da família",
        "Contar para alguém qual é a cor da Cedisa"
      ] }
    },

    /* ===== FAÍSCA 4–6 ===== */
    "f-oque": {
      title: "Onde mora o aço?", icon: "bulb", minutes: 4,
      cards: [
        { t: "O aço está em todo lugar", b: "Na bicicleta, na geladeira, no carro, na panela e até no prédio onde a gente mora. A Cedisa ajuda a levar esse aço para quem precisa." },
        { t: "O aço é forte", b: "Ele segura telhados, pontes e máquinas enormes. Por isso a gente diz: forte como o aço!" }
      ],
      activity: { type: "sort", prompt: "Tem aço ou não tem aço?", bins: ["Tem aço", "Não tem aço"], items: [
        { t: "🚲 Bicicleta", bin: 0 }, { t: "🍎 Maçã", bin: 1 }, { t: "🚗 Carro", bin: 0 }, { t: "🧸 Ursinho de pelúcia", bin: 1 }, { t: "🍳 Panela", bin: 0 }, { t: "🌳 Árvore", bin: 1 }
      ] }
    },
    "f-contar": {
      title: "Contando caminhões", icon: "truck", minutes: 3,
      cards: [
        { t: "Muitos caminhões!", b: "Em um dia, saem 31 caminhões da Cedisa. É muita coisa! Vamos contar alguns?", visual: "trucks" }
      ],
      activity: { type: "count", prompt: "Quantos caminhões estão prontos para sair?", item: "truck", n: 5, options: [4, 5, 6] }
    },
    "f-valores": {
      title: "O jeito Cedisa de ser", icon: "people", minutes: 4,
      cards: [
        { t: "Nossos valores", b: "Valores são as regras do coração. Os da Cedisa são: cuidar das pessoas, segurança em primeiro lugar, falar a verdade e fazer junto.", visual: "valuesKid" }
      ],
      activity: { type: "quiz", questions: [
        { q: "Seu amigo caiu no parquinho. O que você faz?", options: ["Ajudo ele a levantar", "Finjo que não vi", "Dou risada"], answer: 0, explain: "Isso! Cuidar das pessoas é um valor da nossa família." },
        { q: "Você quebrou um brinquedo sem querer. O que você faz?", options: ["Escondo", "Conto a verdade", "Digo que foi outra pessoa"], answer: 1, explain: "Falar a verdade é ser íntegro, como o aço." },
        { q: "Para andar de bicicleta, o que usamos?", options: ["Capacete", "Chinelo", "Nada"], answer: 0, explain: "Segurança em primeiro lugar!" }
      ] }
    },
    "f-cofrinho": {
      title: "O cofrinho", icon: "coin", minutes: 4,
      cards: [
        { t: "Entra e sai", b: "Dinheiro entra quando a gente vende ou ganha alguma coisa. Dinheiro sai quando a gente compra. A Cedisa também é assim: vende aço (entra) e paga o caminhão, o aço e as pessoas (sai)." }
      ],
      activity: { type: "sort", prompt: "O dinheiro entra ou sai do cofrinho?", bins: ["Entra 🐷", "Sai 💸"], items: [
        { t: "Ganhei mesada", bin: 0 }, { t: "Comprei um sorvete", bin: 1 }, { t: "Vendi um desenho para a vovó", bin: 0 }, { t: "Paguei o lanche", bin: 1 }
      ] }
    },
    "f-missao": {
      title: "Pergunte para a família", icon: "chat", minutes: 5,
      cards: [
        { t: "Todo mundo tem uma história", b: "Os avós e os tios sabem histórias incríveis de como tudo começou. Vamos perguntar?" }
      ],
      activity: { type: "reflect", prompt: "Pergunte a alguém da família: qual foi o seu primeiro trabalho? Escreva aqui (um adulto pode ajudar).", placeholder: "Ex.: O tio contou que..." }
    },

    /* ===== LINGOTE 7–9 ===== */
    "l-historia": {
      title: "A história que começou em Colatina", icon: "book", minutes: 5,
      cards: [
        { t: "O bisavô Dionísio", b: "Tudo começou com Dionísio Dalla Bernardina, que trabalhava junto com os filhos. Em 1958 os filhos mais velhos, José e Claudionor, abriram uma loja de ferragens em Colatina, no Espírito Santo: a Irmãos Dalla Bernardina." },
        { t: "Nasce a Cedisa", b: "Em 1975 a loja virou a Cedisa – Central de Aço. Em 2025 ela fez 50 anos! Hoje a família já está chegando na 4ª geração.", visual: "timelineMini" },
        { t: "Uma fábrica nova", b: "Em 2025 a Cedisa inaugurou uma fábrica nova e bem maior em Calogi, na Serra." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Em que cidade a história começou?", options: ["Colatina", "São Paulo", "Recife"], answer: 0, explain: "Colatina, no Espírito Santo, em 1958." },
        { q: "O que era a primeira loja da família?", options: ["Uma loja de ferragens", "Uma padaria", "Uma loja de brinquedos"], answer: 0, explain: "A Irmãos Dalla Bernardina S/A Ferragens." },
        { q: "Quantos anos a Cedisa fez em 2025?", options: ["10", "50", "100"], answer: 1, explain: "50 anos! Meio século." },
        { q: "Você faz parte de qual geração?", options: ["2ª", "3ª ou 4ª", "1ª"], answer: 1, explain: "As crianças de hoje são da 4ª geração, e os pais da 3ª." }
      ] }
    },
    "l-processo": {
      title: "Do minério à viga", icon: "process", minutes: 5,
      cards: [
        { t: "Como o aço nasce", b: "O minério de ferro sai da terra, vai para a usina, é derretido num forno muito quente e vira aço em grandes bobinas e chapas.", visual: "process" },
        { t: "E a Cedisa?", b: "A Cedisa compra esse aço da usina e transforma: corta, dobra e faz perfis, tubos e telhas do tamanho que o cliente precisa. Isso se chama beneficiamento." }
      ],
      activity: { type: "sort", prompt: "Quem faz o quê?", bins: ["A usina", "A Cedisa"], items: [
        { t: "Derrete o minério no forno", bin: 0 }, { t: "Corta a chapa no tamanho certo", bin: 1 }, { t: "Faz as bobinas gigantes", bin: 0 }, { t: "Dobra o aço e faz telhas", bin: 1 }, { t: "Entrega de caminhão para o cliente", bin: 1 }
      ] }
    },
    "l-mapa": {
      title: "A Cedisa no mapa do Brasil", icon: "map", minutes: 4,
      cards: [
        { t: "Do Espírito Santo para o Brasil", b: "A casa da Cedisa é no Espírito Santo, mas ela vende para o Brasil inteiro. Os estados que mais compram são Espírito Santo, Bahia, Pernambuco, Rio de Janeiro e São Paulo.", visual: "map" }
      ],
      activity: { type: "quiz", questions: [
        { q: "Em que estado fica a casa da Cedisa?", options: ["Bahia", "Espírito Santo", "Ceará"], answer: 1, explain: "Na Serra, no Espírito Santo." },
        { q: "Qual destas cidades tem uma filial da Cedisa?", options: ["Fortaleza", "Manaus", "Porto Alegre"], answer: 0, explain: "Fortaleza, no Ceará. Tem também Recife, Salvador, Cuiabá e outras." }
      ] }
    },
    "l-100reais": {
      title: "Quanto sobra de 100 reais?", icon: "coin", minutes: 5,
      cards: [
        { t: "Vender não é o mesmo que ganhar", b: "Quando a Cedisa vende R$ 100 de aço, quase tudo vai embora para pagar o aço comprado da usina, o caminhão, as pessoas e a energia.", visual: "coins" },
        { t: "Sobram só 4", b: "De cada R$ 100 vendidos, sobram mais ou menos R$ 4 de lucro. Por isso cuidar de cada real é tão importante!" }
      ],
      activity: { type: "quiz", questions: [
        { q: "De cada R$ 100 que a Cedisa vende, quanto sobra de lucro?", options: ["R$ 50", "R$ 4", "R$ 100"], answer: 1, explain: "Mais ou menos R$ 4. Os outros R$ 96 pagam as contas." },
        { q: "O que é lucro?", options: ["Tudo o que a gente vende", "O que sobra depois de pagar tudo", "O dinheiro do cofrinho da vovó"], answer: 1, explain: "Lucro é o que sobra depois de pagar todas as contas." }
      ] }
    },
    "l-valores": {
      title: "Os 5 valores", icon: "shield", minutes: 5,
      cards: [
        { t: "O que a Cedisa acredita", b: "São 5 valores. Leia com calma:", visual: "values" }
      ],
      activity: { type: "quiz", questions: [
        { q: "Na fábrica, o que vem primeiro?", options: ["A pressa", "A segurança das pessoas", "O lanche"], answer: 1, explain: "Segurança das pessoas é nossa prioridade." },
        { q: "O que quer dizer 'O que queremos, fazemos'?", options: ["Fazer só o que é fácil", "Quando decidimos algo, colocamos a mão na massa", "Querer tudo"], answer: 1, explain: "É ter garra para realizar." },
        { q: "Integridade é...", options: ["Falar a verdade e seguir as regras", "Ganhar sempre", "Ser o mais forte"], answer: 0, explain: "Isso! Integridade e transparência." }
      ] }
    },

    /* ===== CHAPA 10–12 ===== */
    "c-grupo": {
      title: "Um grupo, duas empresas", icon: "building", minutes: 5,
      cards: [
        { t: "Cedisa", b: "Distribui e beneficia aço. Compra das usinas, transforma (corta, dobra, perfila) e entrega para clientes do Brasil inteiro." },
        { t: "Valorização", b: "Cuida de terrenos e imóveis. Foi a primeira loteadora do Espírito Santo, nos anos 1970. Hoje faz parcerias em loteamentos, desenvolve imóveis para alugar e cuida de áreas que vão valer mais no futuro.", visual: "venn" }
      ],
      activity: { type: "sort", prompt: "Essa atividade é da Cedisa ou da Valorização?", bins: ["Cedisa", "Valorização"], items: [
        { t: "Cortar chapas de aço", bin: 0 }, { t: "Alugar um galpão logístico", bin: 1 }, { t: "Fazer parceria num loteamento", bin: 1 }, { t: "Entregar telhas em Salvador", bin: 0 }, { t: "Cuidar de um terreno em Aracruz", bin: 1 }
      ] }
    },
    "c-produtos": {
      title: "O que a Cedisa vende", icon: "coil", minutes: 5,
      cards: [
        { t: "Produtos de aço", b: "Chapas laminadas, cortes especiais em várias espessuras, perfis, vigas, tubos e telhas trapézio e onduladas.", visual: "products" },
        { t: "70% é transformação", b: "Sete de cada dez toneladas que a Cedisa fatura passaram pela fábrica para serem transformadas. Por isso dizemos que o negócio é 'transformar aço em solução'." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Para cobrir um galpão, qual produto usar?", options: ["Telha trapézio", "Tubo", "Parafuso"], answer: 0, explain: "A telha trapézio cobre galpões e fábricas." },
        { q: "O que sustenta a estrutura de um prédio?", options: ["Telha", "Viga", "Chapa fina"], answer: 1, explain: "As vigas são o esqueleto da estrutura." },
        { q: "Quanto do volume da Cedisa é beneficiamento?", options: ["10%", "40%", "70%"], answer: 2, explain: "70%. A Cedisa virou uma indústria." }
      ] }
    },
    "c-numeros": {
      title: "A Cedisa em números", icon: "chart", minutes: 6,
      cards: [
        { t: "Toneladas", b: "Em 2026, até agosto, a Cedisa faturou 89.746 toneladas de aço. A meta do ano é 141.141 toneladas.", visual: "gauge" },
        { t: "Caminhões", b: "Foram 5.119 caminhões em 164 dias úteis: uma média de 31 caminhões por dia!", visual: "trucksBig" }
      ],
      activity: { type: "quiz", questions: [
        { q: "Se saem 31 caminhões por dia, quantos saem numa semana de 5 dias úteis?", options: ["105", "155", "310"], answer: 1, explain: "31 × 5 = 155 caminhões." },
        { q: "A média diária é de cerca de 547 toneladas. Um elefante pesa 5 toneladas. Quantos elefantes isso dá por dia?", options: ["Uns 11", "Uns 110", "Uns 1.100"], answer: 1, explain: "547 ÷ 5 ≈ 109. Mais de 100 elefantes de aço por dia!" },
        { q: "Até agosto, qual parte da meta de toneladas foi feita?", options: ["Cerca de um terço", "Cerca de dois terços", "Tudo"], answer: 1, explain: "Cerca de 64%, quase dois terços." }
      ] }
    },
    "c-brigadeiro": {
      title: "A banca de brigadeiro", icon: "coin", minutes: 7,
      cards: [
        { t: "Receita, custo e lucro", b: "Receita é tudo o que você vende. Custo é o que você gasta para produzir e entregar. Lucro é o que sobra. Vamos testar com uma banca de brigadeiro!" }
      ],
      activity: { type: "sim", preset: "brigadeiro" }
    },
    "c-valorizacao": {
      title: "A Valorização e os terrenos", icon: "map", minutes: 5,
      cards: [
        { t: "O que é um loteamento?", b: "É quando uma área grande é dividida em lotes, com ruas, luz e água, para as pessoas construírem casas ou empresas." },
        { t: "Aluguel é renda", b: "A Valorização também constrói imóveis para alugar, como galpões para empresas. Todo mês o aluguel gera renda para o Grupo." }
      ],
      activity: { type: "quiz", questions: [
        { q: "A Valorização foi a primeira o quê do Espírito Santo?", options: ["Loteadora", "Padaria", "Usina"], answer: 0, explain: "A primeira loteadora do estado, nos anos 1970." },
        { q: "Por que alugar um galpão é bom para o Grupo?", options: ["Porque gera renda todo mês", "Porque o galpão some", "Porque não precisa cuidar"], answer: 0, explain: "O aluguel é uma renda que se repete." }
      ] }
    },
    "c-entrevista": {
      title: "Entrevista com a 2ª geração", icon: "chat", minutes: 15,
      cards: [
        { t: "Missão de repórter", b: "Escolha um tio, tia, avô ou avó da 2ª geração e faça três perguntas: 1) Como era a Cedisa quando você era criança? 2) Qual foi o momento mais difícil? 3) Que conselho você dá para a 4ª geração?" }
      ],
      activity: { type: "reflect", prompt: "Conte aqui o que você descobriu. O que mais te surpreendeu?", placeholder: "Entrevistei... e descobri que..." }
    },

    /* ===== PERFIL 13–17 ===== */
    "p-circulos": {
      title: "Família, empresa e propriedade", icon: "circles", minutes: 6,
      cards: [
        { t: "Os três círculos", b: "Numa empresa familiar existem três mundos que se cruzam: a Família, a Propriedade (quem é sócio ou acionista) e a Gestão (quem trabalha na empresa). Uma pessoa pode estar em um, dois ou nos três.", visual: "circles3" },
        { t: "Por que isso importa?", b: "Ser da família não é o mesmo que trabalhar na empresa. E ser acionista traz direitos e deveres. Entender isso cedo evita conflitos e fortalece a família." }
      ],
      activity: { type: "sort", prompt: "Onde cada situação se encaixa?", bins: ["Família", "Propriedade", "Gestão"], items: [
        { t: "Almoço de domingo", bin: 0 }, { t: "Receber dividendos", bin: 1 }, { t: "Liderar a equipe de vendas", bin: 2 }, { t: "Votar na assembleia de acionistas", bin: 1 }, { t: "Tradição do Natal", bin: 0 }, { t: "Definir o orçamento do ano", bin: 2 }
      ] }
    },
    "p-dinheiro": {
      title: "Como a Cedisa ganha dinheiro", icon: "coin", minutes: 7,
      cards: [
        { t: "Margem apertada", b: "A Cedisa vende muito volume com margem pequena: de cada R$ 100 vendidos, cerca de R$ 4 viram lucro líquido. Ou seja, margem de 4%.", visual: "coins" },
        { t: "Para onde vão os outros 96?", b: "O maior custo é o CMV (custo da mercadoria vendida): o aço comprado das usinas. Depois vêm o frete (vendemos para o Brasil inteiro), as pessoas, a energia, os impostos." },
        { t: "PPR", b: "A Cedisa tem um Programa de Participação nos Resultados (PPR): quando a empresa bate metas, a equipe também ganha. É o valor 'ganhamos juntos' na prática." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Qual é o maior custo da Cedisa?", options: ["Energia", "Custo da mercadoria vendida (o aço)", "Marketing"], answer: 1, explain: "O CMV, que é o próprio aço comprado." },
        { q: "Com margem de 4%, quanto a Cedisa precisa vender para lucrar R$ 1 milhão?", options: ["R$ 4 milhões", "R$ 25 milhões", "R$ 100 milhões"], answer: 1, explain: "R$ 1 mi ÷ 0,04 = R$ 25 milhões em vendas." },
        { q: "Por que o frete pesa tanto?", options: ["Porque vendemos para todo o Brasil", "Porque os caminhões são de ouro", "Não pesa"], answer: 0, explain: "Distâncias longas custam caro." }
      ] }
    },
    "p-dre": {
      title: "Sua primeira DRE", icon: "chart", minutes: 8,
      cards: [
        { t: "O que é a DRE", b: "DRE é a Demonstração do Resultado do Exercício. Ela conta, de cima para baixo, quanto a empresa vendeu, quanto gastou e quanto sobrou. Brinque com os controles e veja o lucro mudar." }
      ],
      activity: { type: "sim", preset: "cedisa" }
    },
    "p-mercado": {
      title: "Onde a Cedisa atua", icon: "map", minutes: 6,
      cards: [
        { t: "Sudeste e Nordeste", b: "Os 5 estados que mais compram: Espírito Santo, Bahia, Pernambuco, Rio de Janeiro e São Paulo.", visual: "map" },
        { t: "Filiais", b: "Campo Grande, Cuiabá, Fortaleza, Luís Eduardo Magalhães, Macaé, Recife, Rio de Janeiro, Salvador, Volta Redonda e Cercado da Pedra (Serra). Além da Matriz em Calogi, há atividade industrial com estoque em Cercado da Pedra, Recife, Salvador e Volta Redonda; nas demais, pontos de venda e escritórios." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Em quais filiais fora do ES há atividade industrial com estoque?", options: ["Recife, Salvador e Volta Redonda", "Cuiabá, Macaé e Fortaleza", "Nenhuma"], answer: 0, explain: "No ES, além da Matriz em Calogi, há a filial industrial de Cercado da Pedra." },
        { q: "Qual destes NÃO está no top 5 de estados?", options: ["Bahia", "Pernambuco", "Mato Grosso"], answer: 2, explain: "O top 5: ES, BA, PE, RJ e SP." }
      ] }
    },
    "p-valorizacao": {
      title: "Valorização: de loteadora a desenvolvedora", icon: "building", minutes: 6,
      cards: [
        { t: "Três fases", b: "Loteadora → Gestora → Desenvolvedora de ativos. Com as mudanças do mercado, passou a atuar em parcerias, mantendo o DNA desenvolvedor.", visual: "evolucao" },
        { t: "Equilíbrio entre três áreas", b: "Desenvolvimento de ativos para locação, parcerias em loteamentos e gestão estratégica de áreas com potencial futuro.", visual: "venn" }
      ],
      activity: { type: "quiz", questions: [
        { q: "Desde 2020, qual o foco do novo ciclo da Valorização?", options: ["Condomínios industriais, comerciais e logísticos", "Restaurantes", "Fazendas de gado"], answer: 0, explain: "Setores com forte crescimento e sinergia com a experiência urbana do Grupo." },
        { q: "Qual o objetivo de longo prazo da Valorização?", options: ["Vender todos os terrenos", "Evoluir de empresa patrimonial para empresa de criação de valor", "Virar uma distribuidora de aço"], answer: 1, explain: "Criar valor, e não só guardar patrimônio." }
      ] }
    },
    "p-aptidao": {
      title: "Qual aço é você?", icon: "spark", minutes: 5,
      cards: [
        { t: "Cada aço tem sua função", b: "Uma viga sustenta, a solda une, o inox resiste e inova. Descubra com qual você mais se parece. Não existe resposta certa: é para conhecer seus talentos." }
      ],
      activity: { type: "aptitude" }
    },
    "p-futuro": {
      title: "Meu projeto de futuro", icon: "target", minutes: 10,
      cards: [
        { t: "Você não precisa trabalhar na empresa", b: "Muitas famílias empresárias incentivam os jovens a seguirem o próprio caminho. Você pode contribuir como acionista informado, conselheiro, profissional em outra área ou, se fizer sentido, dentro do Grupo, seguindo as regras que a família definir." }
      ],
      activity: { type: "reflect", prompt: "Que área te atrai hoje? Que curso ou experiência você gostaria de ter nos próximos 2 anos?", placeholder: "Hoje eu me interesso por..." }
    },

    /* ===== VIGA 18–24 ===== */
    "v-papeis": {
      title: "Herdeiro, acionista, gestor", icon: "circles", minutes: 8,
      cards: [
        { t: "Papéis diferentes", b: "Herdeiro é quem recebe. Acionista é quem é dono e decide na assembleia. Conselheiro orienta a estratégia. Gestor executa no dia a dia. Uma mesma pessoa pode ter mais de um papel, mas precisa saber em qual 'cadeira' está sentada.", visual: "circles3" },
        { t: "Os órgãos de governança", b: "Assembleia de acionistas (propriedade) → Conselho de Administração (estratégia) → Diretoria (gestão). Do lado da família: Conselho de Família, que cuida da união, dos valores e da formação dos membros.", visual: "governance" },
        { t: "Documentos que protegem", b: "Acordo de acionistas: regras entre os sócios (venda de ações, voto, sucessão). Protocolo familiar: regras de convivência entre família e empresa, como critérios para trabalhar no Grupo." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Quem cuida da formação dos membros e da união da família?", options: ["Diretoria", "Conselho de Família", "Departamento Fiscal"], answer: 1, explain: "O Conselho de Família é o fórum da família empresária." },
        { q: "Onde o acionista exerce seu voto?", options: ["Na assembleia de acionistas", "Na reunião de vendas", "No almoço de domingo"], answer: 0, explain: "A assembleia é o espaço formal do dono." },
        { q: "Qual documento define critérios para membros da família trabalharem na empresa?", options: ["Nota fiscal", "Protocolo familiar", "Contrato de aluguel"], answer: 1, explain: "O protocolo familiar organiza essas regras." }
      ] }
    },
    "v-dre": {
      title: "Lendo a DRE da Cedisa", icon: "chart", minutes: 10,
      cards: [
        { t: "Do faturamento ao lucro", b: "Receita líquida → (–) CMV → Lucro bruto → (–) Frete → (–) Pessoas e operação → (–) Administrativas e financeiras → (–) IR/CSLL → Lucro líquido. Na Cedisa, sobra cerca de 4% no fim." },
        { t: "Sensibilidade", b: "Com margem de 4%, pequenas variações pesam muito. Se o frete subir 1 ponto percentual e nada mais mudar, o lucro cai 25% (de 4 para 3)." }
      ],
      activity: { type: "sim", preset: "cedisa", after: [
        { q: "Com margem líquida de 4%, se o CMV subir 2 pontos (e o resto ficar igual), o lucro líquido...", options: ["cai 2%", "cai pela metade", "não muda"], answer: 1, explain: "De 4 para 2: metade do lucro." },
        { q: "Qual alavanca tende a melhorar a margem da Cedisa?", options: ["Aumentar a participação do beneficiamento no mix", "Vender com frete grátis para todo o Brasil", "Aumentar estoque parado"], answer: 0, explain: "Produtos beneficiados agregam valor ao aço." }
      ] }
    },
    "v-indicadores": {
      title: "Indicadores da operação", icon: "truck", minutes: 7,
      cards: [
        { t: "2026 até agosto", b: "89.746 t faturadas em 164 dias úteis (547,23 t/dia). 5.119 caminhões, 31 por dia. Meta do ano: 141.141 t.", visual: "gauge" },
        { t: "Leitura rápida", b: "89.746 t ÷ 5.119 caminhões ≈ 17,5 t por caminhão. Cada ponto de melhora na carga média reduz o custo de frete por tonelada." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Quantas toneladas, em média, vão em cada caminhão?", options: ["Cerca de 5 t", "Cerca de 17,5 t", "Cerca de 50 t"], answer: 1, explain: "89.746 ÷ 5.119 ≈ 17,5 t." },
        { q: "Para bater a meta, quanto falta faturar em toneladas?", options: ["Cerca de 51 mil t", "Cerca de 10 mil t", "Cerca de 141 mil t"], answer: 0, explain: "141.141 – 89.746 = 51.395 t." }
      ] }
    },
    "v-valorizacao": {
      title: "Valorização como desenvolvedora", icon: "building", minutes: 8,
      cards: [
        { t: "Visão, risco calculado e crescimento patrimonial", b: "Identificação de oportunidades, estudos de viabilidade, concepção do produto, estruturação jurídica e societária, captação de recursos (quando necessário), desenvolvimento técnico, gestão de obra e comercialização (locação ou venda)." },
        { t: "O papel na parceria", b: "Escolher o loteador com critério, fazer a avaliação técnica, estruturar juridicamente, garantir segurança regulatória e ambiental, controlar as finanças com transparência e governar a SPE ou o contrato de parceria." }
      ],
      activity: { type: "quiz", questions: [
        { q: "O que é uma SPE?", options: ["Sociedade de Propósito Específico, criada para um empreendimento", "Um tipo de aço", "Um imposto"], answer: 0, explain: "A SPE isola riscos e resultados de um projeto." },
        { q: "Qual é uma responsabilidade da Valorização numa parceria de loteamento?", options: ["Vender aço ao loteador", "Governança e controle financeiro do contrato", "Nenhuma, o parceiro faz tudo"], answer: 1, explain: "A Valorização garante a governança e a transparência." }
      ] }
    },
    "v-caminhos": {
      title: "Caminhos para contribuir", icon: "target", minutes: 8,
      cards: [
        { t: "Boas práticas de famílias empresárias", b: "Grupos familiares longevos costumam definir regras claras para quem quer trabalhar na empresa: formação superior, experiência em outras empresas antes de entrar, vaga real e processo seletivo como qualquer candidato. Algumas famílias, como os Baumgart, registram isso num protocolo familiar." },
        { t: "Outras formas de contribuir", b: "Ser um acionista informado, participar do Conselho de Família, preparar-se para comitês e conselhos, empreender com o apoio do Grupo ou atuar como embaixador da marca." },
        { t: "Atenção", b: "As regras do Grupo Cedisa serão definidas pelo Conselho de Família. Esta trilha mostra referências de mercado para inspirar a conversa." }
      ],
      activity: { type: "reflect", prompt: "De que forma você imagina contribuir com o Grupo nos próximos 5 anos?", placeholder: "Eu me vejo..." }
    },
    "v-aptidao": {
      title: "Qual aço é você?", icon: "spark", minutes: 5,
      cards: [
        { t: "Mapa de aptidões", b: "Um retrato rápido dos seus talentos. O resultado aparece no seu perfil e ajuda o Conselho de Família a sugerir cursos e experiências." }
      ],
      activity: { type: "aptitude" }
    },

    /* ===== ESTRUTURA 25+ ===== */
    "e-porque": {
      title: "Por que esta trilha existe", icon: "flame", minutes: 5,
      cards: [
        { t: "Aproximar a família do negócio", b: "A trilha existe para que todos conheçam a história, entendam o negócio e compartilhem os mesmos valores. Uma família informada decide melhor e protege o legado." },
        { t: "Conexão e vínculo", b: "Nossa harmonia nasce nos almoços de domingo e no Natal. A trilha soma a isso um espaço comum para conhecer uns aos outros, celebrar conquistas e acompanhar a formação de cada um." },
        { t: "Como o aço", b: "O aço se forja, se molda e ganha função. Cada membro da família também. A essência, a matéria-prima, é a mesma: respeito, integridade e os valores deixados pelos fundadores." }
      ],
      activity: { type: "reflect", prompt: "Qual valor dos fundadores você mais quer ver passado para a 4ª geração? Por quê?", placeholder: "Para mim, o valor mais importante é..." }
    },
    "e-governanca": {
      title: "A governança do Grupo", icon: "circles", minutes: 10,
      cards: [
        { t: "As gerações", b: "1ª geração: os fundadores. 2ª geração: 11 membros, alguns no Conselho de Administração. 3ª geração: 5 pessoas atuando na empresa em diferentes cargos. 4ª geração: chegando.", visual: "generations" },
        { t: "Os fóruns", b: "Assembleia (propriedade), Conselho de Administração (estratégia e fiscalização da gestão), Diretoria (operação) e Conselho de Família (união, valores, formação e regras de convivência).", visual: "governance" },
        { t: "O papel do Conselho de Família", b: "Pelo Regimento Interno: promover a coesão da família, planejar a educação dos membros (como esta trilha), elaborar e revisar o Protocolo Familiar, facilitar a comunicação entre família e empresa, zelar pelo planejamento patrimonial e sucessório e criar comitês temáticos." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Qual fórum fiscaliza a gestão e define a estratégia?", options: ["Conselho de Administração", "Conselho de Família", "Assembleia de condomínio"], answer: 0, explain: "O CA orienta a estratégia e acompanha a diretoria." },
        { q: "Quantos membros da 3ª geração atuam hoje no Grupo?", options: ["2", "5", "11"], answer: 1, explain: "Cinco, em diferentes cargos." }
      ] }
    },
    "e-dre": {
      title: "Margem, alavancas e riscos", icon: "chart", minutes: 12,
      cards: [
        { t: "Um negócio de centavos por quilo", b: "Distribuição e beneficiamento de aço giram grande volume com margem estreita. Na Cedisa, cerca de 4% de margem líquida. O resultado depende de disciplina em compra, preço, frete e despesas." },
        { t: "Alavancas", b: "Mix com mais beneficiamento (valor agregado), eficiência logística (carga média por caminhão, rotas), giro de estoque e capital de giro, produtividade da nova fábrica e política comercial." },
        { t: "Riscos", b: "Oscilação do preço do aço nas usinas, importação, custo do diesel e do frete, inadimplência de clientes e ciclo da construção civil." }
      ],
      activity: { type: "sim", preset: "cedisa", after: [
        { q: "Se o preço do aço sobe nas usinas e a Cedisa não consegue repassar, o que acontece primeiro na DRE?", options: ["O CMV sobe e a margem bruta cai", "A receita dobra", "O frete some"], answer: 0, explain: "O CMV é o maior custo; é o primeiro a pressionar a margem." }
      ] }
    },
    "e-estrategia": {
      title: "Estratégia 2030", icon: "target", minutes: 8,
      cards: [
        { t: "Onde estamos", b: "50 anos completados em 2025, com faturamento perto de R$ 1 bilhão. Beneficiamento já é 70% do volume." },
        { t: "A nova fábrica", b: "Inaugurada em 2025, com R$ 120 milhões investidos na nova Matriz em Calogi, na Serra. Área de operação de 16 mil para 29 mil m², num complexo de 200 mil m², com acesso ao Contorno do Mestre Álvaro." },
        { t: "Aonde vamos", b: "Dobrar o faturamento até 2030 e ser referência nacional em distribuição e beneficiamento de aço." }
      ],
      activity: { type: "quiz", questions: [
        { q: "Qual é a meta de faturamento da Cedisa para 2030?", options: ["Manter", "Dobrar", "Triplicar"], answer: 1, explain: "Dobrar o faturamento até 2030." },
        { q: "Qual foi o investimento na nova fábrica de Calogi?", options: ["R$ 12 milhões", "R$ 120 milhões", "R$ 1,2 bilhão"], answer: 1, explain: "R$ 120 milhões." }
      ] }
    },
    "e-valorizacao": {
      title: "Valorização: criação de valor", icon: "building", minutes: 8,
      cards: [
        { t: "De patrimonial a criadora de valor", b: "A Valorização quer deixar de ser apenas guardiã de terrenos para gerar valor com projetos: condomínios industriais, comerciais e logísticos, parcerias bem governadas e renda recorrente.", visual: "evolucao" },
        { t: "Proteger o que existe", b: "Além de desenvolver, cuida do patrimônio atual: rentabiliza com aluguéis e protege nos aspectos jurídico, tributário e societário." }
      ],
      activity: { type: "reflect", prompt: "Que tipo de ativo ou parceria você acha que a Valorização deveria estudar nos próximos anos?", placeholder: "Eu sugiro olharmos para..." }
    },
    "e-sucessao": {
      title: "Sucessão e a 4ª geração", icon: "people", minutes: 8,
      cards: [
        { t: "Sucessão é um processo", b: "Não é um evento. Começa na infância, com valores e histórias, passa pela formação e pela experiência, e termina com responsabilidades assumidas aos poucos." },
        { t: "Parceria entre gerações", b: "O jeito mais eficaz de fazer a sucessão é a geração sênior e a próxima trabalharem juntas: definir papéis, construir a estratégia a quatro mãos, ouvir e dividir os méritos. A geração sênior também precisa de um novo papel significativo depois da transição." },
        { t: "O seu papel", b: "Pais e tios da 3ª geração são os primeiros professores da 4ª. Acompanhe a trilha dos pequenos, faça as missões junto e leve-os para conhecer a fábrica." }
      ],
      activity: { type: "mission", prompt: "Compromissos para este semestre:", tasks: [
        "Fazer um módulo da trilha junto com uma criança da família",
        "Levar alguém da 4ª geração para conhecer a fábrica de Calogi",
        "Compartilhar uma iniciativa no Mural",
        "Participar de uma reunião do Conselho de Família"
      ] }
    },
    "e-aptidao": {
      title: "Qual aço é você?", icon: "spark", minutes: 5,
      cards: [
        { t: "Mapa de aptidões", b: "Um retrato rápido dos seus talentos para o Conselho de Família montar comitês, mentorias e oportunidades." }
      ],
      activity: { type: "aptitude" }
    }
  },

  /* ---------- Simuladores de DRE ---------- */
  sims: {
    cedisa: {
      title: "DRE ilustrativa da Cedisa (a cada R$ 100 vendidos)",
      note: "Proporções ilustrativas para aprendizado, calibradas para a margem líquida de ~4%. Os números oficiais ficam com a controladoria.",
      revenueLabel: "Receita líquida",
      lines: [
        { id: "cmv", t: "CMV (aço comprado das usinas)", v: 78, min: 70, max: 86, adj: true },
        { id: "frete", t: "Frete", v: 5, min: 2, max: 9, adj: true },
        { id: "pessoas", t: "Pessoas, operação e PPR", v: 9, min: 5, max: 13, adj: true },
        { id: "adm", t: "Administrativas e financeiras", v: 2, min: 2, max: 2 },
        { id: "ir", t: "IR/CSLL", v: 2, min: 2, max: 2 }
      ],
      resultLabel: "Lucro líquido"
    },
    brigadeiro: {
      title: "Banca de brigadeiro (a cada R$ 100 vendidos)",
      note: "Mexa nos custos e veja quanto sobra.",
      revenueLabel: "Vendas",
      lines: [
        { id: "ing", t: "Ingredientes (leite condensado, chocolate)", v: 50, min: 30, max: 70, adj: true },
        { id: "emb", t: "Forminhas e embalagem", v: 10, min: 5, max: 20, adj: true },
        { id: "trans", t: "Transporte até a escola", v: 10, min: 0, max: 20, adj: true },
        { id: "ajuda", t: "Pagar quem ajudou", v: 10, min: 0, max: 20, adj: true }
      ],
      resultLabel: "Lucro"
    }
  },

  /* ---------- Desafio do Aço (quiz geral) ---------- */
  quizPool: {
    kid: [
      { q: "Quais são as cores da Cedisa?", options: ["Azul e laranja", "Verde e amarelo", "Rosa e roxo"], answer: 0 },
      { q: "O que o caminhão da Cedisa leva?", options: ["Sorvete", "Aço", "Brinquedos"], answer: 1 },
      { q: "Em que estado fica a casa da Cedisa?", options: ["Espírito Santo", "Amazonas", "Paraná"], answer: 0 },
      { q: "O que vem primeiro na fábrica?", options: ["Segurança", "Pressa", "Bagunça"], answer: 0 },
      { q: "Quantos caminhões saem por dia, mais ou menos?", options: ["3", "31", "300"], answer: 1 },
      { q: "Em que cidade a história da família começou?", options: ["Colatina", "Paris", "Brasília"], answer: 0 },
      { q: "Quem é o bisavô que começou tudo?", options: ["Dionísio", "Pedro", "Antônio"], answer: 0 },
      { q: "Numa briga com o primo, o que ajuda?", options: ["Conversar e escutar", "Gritar mais alto", "Nunca mais falar com ele"], answer: 0 },
      { q: "O aço é...", options: ["Mole como gelatina", "Forte e duro", "Feito de papel"], answer: 1 },
      { q: "Lucro é...", options: ["O que sobra depois de pagar as contas", "Tudo o que a gente vende", "Um tipo de caminhão"], answer: 0 },
      { q: "Quantos anos a Cedisa fez em 2025?", options: ["5", "50", "500"], answer: 1 },
      { q: "Onde fica a fábrica nova da Cedisa?", options: ["Na Serra (ES)", "Na Lua", "Em Portugal"], answer: 0 }
    ],
    teen: [
      { q: "Qual é o 'negócio' da Cedisa?", options: ["Transformar aço em solução", "Vender imóveis", "Minerar ferro"], answer: 0 },
      { q: "Quanto do volume da Cedisa vem do beneficiamento?", options: ["30%", "50%", "70%"], answer: 2 },
      { q: "Margem líquida aproximada da Cedisa:", options: ["4%", "20%", "40%"], answer: 0 },
      { q: "Qual é o maior custo da Cedisa?", options: ["CMV", "Marketing", "Aluguel"], answer: 0 },
      { q: "Qual estado NÃO está no top 5 de vendas?", options: ["Bahia", "São Paulo", "Paraná"], answer: 2 },
      { q: "A Valorização foi a primeira ___ do ES.", options: ["loteadora", "siderúrgica", "construtora de navios"], answer: 0 },
      { q: "Média de caminhões por dia em 2026:", options: ["13", "31", "103"], answer: 1 },
      { q: "PPR significa:", options: ["Programa de Participação nos Resultados", "Plano de Produção Regional", "Preço Por Remessa"], answer: 0 },
      { q: "Em quais filiais fora do ES há atividade industrial?", options: ["Recife, Salvador e Volta Redonda", "Cuiabá e Fortaleza", "Nenhuma"], answer: 0 },
      { q: "Em que ano nasceu a Irmãos Dalla Bernardina, em Colatina?", options: ["1958", "1975", "1994"], answer: 0 },
      { q: "Quem administrava a Irmãos Dalla Bernardina?", options: ["José e Claudionor", "Dionísio sozinho", "Um sócio de fora"], answer: 0 },
      { q: "Qual ditado resume a 'regra das 3 gerações'?", options: ["Pai rico, filho nobre, neto pobre", "Quem espera sempre alcança", "Devagar se vai longe"], answer: 0 },
      { q: "O que é um sócio 'ativo'?", options: ["Engajado, estuda os temas e contribui nas decisões", "Só recebe dividendos", "Bloqueia todas as decisões"], answer: 0 },
      { q: "Escuta ativa é...", options: ["Repetir com suas palavras o que o outro disse para mostrar que entendeu", "Esperar a sua vez de falar", "Concordar com tudo"], answer: 0 },
      { q: "Qual é a visão da Cedisa?", options: ["Ser referência em todo território nacional", "Ser a maior do mundo", "Ficar só no ES"], answer: 0 },
      { q: "Os três círculos da empresa familiar são:", options: ["Família, Propriedade e Gestão", "Venda, Compra e Frete", "Aço, Ferro e Inox"], answer: 0 },
      { q: "Meta da Cedisa para 2030:", options: ["Dobrar o faturamento", "Fechar filiais", "Vender a Valorização"], answer: 0 }
    ],
    adult: [
      { q: "Toneladas faturadas em 2026 até agosto:", options: ["54.723", "89.746", "141.141"], answer: 1 },
      { q: "Média diária de toneladas em 2026:", options: ["347,23", "547,23", "747,23"], answer: 1 },
      { q: "Com margem de 4%, o frete subindo 1 ponto reduz o lucro em:", options: ["1%", "4%", "25%"], answer: 2 },
      { q: "Carga média aproximada por caminhão (t):", options: ["8", "17,5", "30"], answer: 1 },
      { q: "Investimento na fábrica de Calogi:", options: ["R$ 60 mi", "R$ 120 mi", "R$ 240 mi"], answer: 1 },
      { q: "Área de operação após a mudança para Calogi:", options: ["16 mil m²", "29 mil m²", "200 mil m²"], answer: 1 },
      { q: "Qual órgão cuida da união, valores e formação da família?", options: ["Conselho de Família", "Conselho Fiscal", "Diretoria"], answer: 0 },
      { q: "Documento que regula venda de ações e voto entre sócios:", options: ["Acordo de acionistas", "Protocolo de entrega", "Nota fiscal"], answer: 0 },
      { q: "Três frentes da Valorização:", options: ["Locação, parcerias em loteamentos e áreas com potencial futuro", "Aço, frete e varejo", "Construção, mineração e energia"], answer: 0 },
      { q: "Faturamento aproximado da Cedisa em 2025:", options: ["R$ 100 milhões", "Perto de R$ 1 bilhão", "R$ 10 bilhões"], answer: 1 },
      { q: "Desde quando a Valorização foca em condomínios industriais e logísticos?", options: ["1990", "2020", "2026"], answer: 1 },
      { q: "Membros da 2ª geração:", options: ["5", "11", "20"], answer: 1 },
      { q: "Quantas reuniões ordinárias por ano o Conselho de Família faz, no mínimo?", options: ["2", "4", "12"], answer: 1 },
      { q: "Mandato de um membro do Conselho de Família:", options: ["1 ano", "2 anos, com uma reeleição", "Vitalício"], answer: 1 },
      { q: "Quantos membros cada holding pode indicar ao Conselho de Família?", options: ["Até 2", "Até 4", "Até 10"], answer: 1 },
      { q: "Como o Coordenador do Conselho de Família participa do Conselho de Administração?", options: ["Como observador, sem voto", "Como presidente", "Não participa"], answer: 0 },
      { q: "Com quanta antecedência as reuniões do Conselho de Família são convocadas?", options: ["2 dias", "15 dias", "60 dias"], answer: 1 },
      { q: "No triângulo da alocação de capital, os três objetivos são:", options: ["Crescimento, controle e liquidez", "Lucro, receita e custo", "Família, empresa e sociedade"], answer: 0 },
      { q: "União familiar significa:", options: ["Alinhamento sobre valores, missão e visão, mesmo com opiniões diferentes", "Todos concordarem sempre", "Ausência total de conflito"], answer: 0 },
      { q: "Em que ano foi lançada a nova marca da Cedisa?", options: ["2012", "2022", "2025"], answer: 1 },
      { q: "Qual cidade recebeu a primeira filial da Cedisa na Bahia, em 1984?", options: ["Itabuna", "Salvador", "Ilhéus"], answer: 0 }
    ]
  },

  /* ---------- Qual aço é você? ---------- */
  aptitude: {
    profiles: {
      viga: { name: "Viga", area: "Estratégia e governança", d: "Você sustenta. Pensa no longo prazo, organiza, decide com calma. Tem jeito para conselhos e comitês." },
      lingote: { name: "Lingote", area: "Finanças", d: "Você é valor concentrado. Gosta de números, controla, compara e protege o patrimônio." },
      bobina: { name: "Bobina", area: "Operação e indústria", d: "Você gira a máquina. Gosta de processo, fábrica, logística e ver as coisas acontecendo." },
      telha: { name: "Telha", area: "Comercial e clientes", d: "Você cobre e protege quem está perto. Conversa bem, negocia, cria relações." },
      solda: { name: "Solda", area: "Pessoas e família", d: "Você une. Cuida das relações, da cultura e das tradições. Tem jeito para o Conselho de Família." },
      inox: { name: "Inox", area: "Inovação e tecnologia", d: "Você resiste e brilha. Traz ideias novas, tecnologia e jeitos diferentes de fazer." }
    },
    questions: [
      { q: "Num trabalho em grupo, você normalmente...", options: [["Organiza o plano", "viga"], ["Cuida do orçamento", "lingote"], ["Põe a mão na massa", "bobina"], ["Apresenta para a turma", "telha"], ["Garante que todos se deem bem", "solda"], ["Traz uma ideia diferente", "inox"]] },
      { q: "Num fim de semana livre, você prefere...", options: [["Ler ou ver documentário", "viga"], ["Planejar uma compra ou investimento", "lingote"], ["Consertar ou montar algo", "bobina"], ["Encontrar muita gente", "telha"], ["Almoço longo com a família", "solda"], ["Testar um app ou gadget novo", "inox"]] },
      { q: "O que mais te interessaria visitar na Cedisa?", options: [["A reunião do conselho", "viga"], ["A controladoria", "lingote"], ["A linha de produção em Calogi", "bobina"], ["Uma visita a cliente", "telha"], ["Um encontro com a equipe", "solda"], ["O time de tecnologia e dados", "inox"]] },
      { q: "Um elogio que você gosta de ouvir:", options: [["Você enxerga longe", "viga"], ["Você é muito cuidadoso(a)", "lingote"], ["Você resolve", "bobina"], ["Você convence qualquer um", "telha"], ["Você é o coração do grupo", "solda"], ["Você é criativo(a)", "inox"]] },
      { q: "Se ganhasse R$ 1.000 para um projeto, você...", options: [["Faria um plano de 5 anos", "viga"], ["Investiria e acompanharia o rendimento", "lingote"], ["Construiria algo", "bobina"], ["Venderia algo e multiplicaria", "telha"], ["Faria um evento para unir a família", "solda"], ["Criaria algo que ainda não existe", "inox"]] },
      { q: "Seu jeito de resolver um problema:", options: [["Olho o todo antes de agir", "viga"], ["Faço as contas", "lingote"], ["Testo na prática", "bobina"], ["Converso com quem entende", "telha"], ["Escuto todos os lados", "solda"], ["Invento um caminho novo", "inox"]] }
    ]
  },

  /* ---------- Cursos e oportunidades ---------- */
  courses: [
    { id: "visita", t: "Visita guiada à fábrica de Calogi", org: "Grupo Cedisa", kind: "Experiência", bands: ["lingote", "chapa", "perfil", "viga", "estrutura"], d: "Conhecer a linha de corte, dobra e perfilação com um líder da operação." },
    { id: "dia-cedisa", t: "Um dia na Cedisa", org: "Grupo Cedisa", kind: "Experiência", bands: ["perfil", "viga"], d: "Acompanhar uma área por um dia (comercial, logística, financeiro)." },
    { id: "cafe-conselho", t: "Café com o Conselho", org: "Conselho de Família", kind: "Encontro", bands: ["viga", "estrutura"], d: "Conversa aberta sobre resultados e estratégia com membros do Conselho." },
    { id: "ibgc-familia", t: "Governança em empresas familiares", org: "IBGC", kind: "Curso", url: "https://www.ibgc.org.br", bands: ["viga", "estrutura"], d: "Referência nacional em governança corporativa, com cursos para famílias empresárias e conselheiros." },
    { id: "fdc-pda", t: "Parceria para o Desenvolvimento de Acionistas (PDA)", org: "Fundação Dom Cabral", kind: "Programa", url: "https://www.fdc.org.br", bands: ["viga", "estrutura"], d: "Programa voltado a acionistas e sucessores de empresas familiares." },
    { id: "cfeg-wt", t: "Winter Training para novas gerações", org: "Cambridge Family Enterprise Group", kind: "Programa", url: "https://www.cfeg.com", bands: ["viga", "estrutura"], d: "Imersão de uma semana sobre governança, mentalidade de sócio, cultura, sucessão e capital para jovens de famílias empresárias." },
    { id: "b3-edu", t: "Cursos gratuitos de finanças e investimentos", org: "B3 Educação", kind: "Curso online", url: "https://edu.b3.com.br", bands: ["perfil", "viga", "estrutura"], d: "Do básico de finanças pessoais à leitura de demonstrações financeiras." },
    { id: "sebrae-fin", t: "Educação financeira e empreendedorismo", org: "Sebrae", kind: "Curso online", url: "https://sebrae.com.br", bands: ["chapa", "perfil", "viga"], d: "Cursos curtos e gratuitos, bons para começar." },
    { id: "senai-metal", t: "Cursos técnicos em metalmecânica e logística", org: "SENAI", kind: "Formação técnica", url: "https://www.portaldaindustria.com.br/senai/", bands: ["perfil", "viga"], d: "Para conhecer o chão de fábrica do setor do aço." },
    { id: "acobrasil", t: "Panorama do setor do aço", org: "Aço Brasil", kind: "Leitura", url: "https://www.acobrasil.org.br", bands: ["perfil", "viga", "estrutura"], d: "Dados e publicações sobre a siderurgia brasileira." },
    { id: "livro-familia", t: "Leitura: livros infantis sobre dinheiro", org: "Biblioteca da família", kind: "Leitura em família", bands: ["faisca", "lingote", "chapa"], d: "Separe um livro sobre mesada e poupança para ler junto à noite." }
  ],

  /* ---------- Notícias do Grupo (fixas) ---------- */
  news: [
    { date: "2025–2026", tag: "Cedisa", t: "Nova Matriz em Calogi", b: "Inaugurada em 2025 com investimento de R$ 120 milhões na Serra. Em 2026, 100% das atividades foram transferidas, e a área de operação saindo de 16 mil para 29 mil m²." },
    { date: "2026", tag: "Cedisa", t: "Meta: dobrar o faturamento até 2030", b: "Depois de fechar 2025 perto de R$ 1 bilhão, a Cedisa entra num novo ciclo de crescimento planejado." },
    { date: "2025", tag: "Cedisa", t: "50 anos de história", b: "Meio século transformando aço em solução, do Espírito Santo para o Brasil." },
    { date: "2024", tag: "Grupo", t: "Nova área em Aracruz", b: "O Grupo Cedisa comprou uma grande área em Aracruz, de olho em novas expansões." }
  ],

  hobbySuggestions: ["Futebol", "Pescar", "Cozinhar", "Viajar", "Ler", "Música", "Praia", "Corrida", "Ciclismo", "Games", "Desenhar", "Dançar", "Fotografia", "Tênis", "Beach tennis", "Jardinagem", "Cinema", "Surfe", "Lego", "Bichos"],

  /* ---------- Página Governança ---------- */
  governance: {
    why: [
      { t: "Aproximar a família do negócio", d: "Quem conhece a empresa por dentro decide melhor como acionista." },
      { t: "Criar conexão e vínculo", d: "Primos, tios e avós se conhecem além do almoço de domingo." },
      { t: "Alinhar valores", d: "Os valores dos fundadores viram prática para cada geração." },
      { t: "Preparar a sucessão", d: "Formação contínua, da 4ª geração no colo até os futuros conselheiros." }
    ],
    council: [
      "Promover a coesão familiar e a integração entre os familiares",
      "Planejar e executar programas de educação e desenvolvimento dos membros da família, como esta trilha",
      "Elaborar e revisar periodicamente o Protocolo Familiar",
      "Facilitar a comunicação entre os membros da família e entre a empresa e a família",
      "Zelar pelo planejamento patrimonial e sucessório da família",
      "Criar e acompanhar comitês temáticos para questões específicas"
    ],
    inspirations: [
      { t: "Protocolo familiar", d: "Famílias como os Baumgart definiram em protocolo quem pode trabalhar no grupo, com formação mínima e experiência prévia em outras empresas." },
      { t: "Conselho com rodízio e independentes", d: "Membros da família se revezam em posições do conselho, ao lado de conselheiros independentes que ajudam a mediar." },
      { t: "Educação desde cedo", d: "Programas de desenvolvimento de acionistas começam com valores e história na infância e chegam a finanças e governança na vida adulta." },
      { t: "Gestão profissional", d: "A família fica na propriedade e nos conselhos; a gestão é ocupada por quem tem preparo, seja da família ou não." }
    ]
  }
};

/* ============================================================
 * Módulos de governança e história (referências: Cambridge Family
 * Enterprise Group, Winter Training 2025; IBGC, cadernos de
 * Governança da Família Empresária e Sucessão). Conteúdo adaptado
 * e resumido com palavras próprias para cada faixa etária.
 * ============================================================ */
Object.assign(window.FORJA.modules, {

  /* ---- Minério ---- */
  "m-escutar": {
    title: "Orelhas atentas", icon: "people", minutes: 3,
    cards: [
      { t: "Escutar é um superpoder", b: "Na nossa família a gente escuta quem está falando. Olho no olho, boca fechadinha, orelhas atentas. Brinque de 'estátua da escuta' com a criança enquanto alguém conta uma história." }
    ],
    activity: { type: "mission", prompt: "Brincadeiras para fazer juntos:", tasks: [
      "Contar uma história curta e pedir para a criança repetir o final",
      "Brincar de 'minha vez, sua vez' com um brinquedo",
      "Dizer 'obrigado' e 'por favor' três vezes hoje"
    ] }
  },

  /* ---- Faísca ---- */
  "f-conversar": {
    title: "Brigar ou conversar?", icon: "chat", minutes: 4,
    cards: [
      { t: "Todo mundo discorda às vezes", b: "Irmãos e primos nem sempre querem a mesma coisa. Tudo bem! Família unida não é família que nunca discorda: é família que conversa e resolve junto." },
      { t: "As palavras mágicas", b: "Comece falando 'Eu me senti...'. Escute o outro até o fim. Depois pensem juntos numa solução boa para os dois." }
    ],
    activity: { type: "sort", prompt: "Isso ajuda ou atrapalha a resolver uma briga?", bins: ["Ajuda 🤝", "Atrapalha 💥"], items: [
      { t: "Escutar até o fim", bin: 0 }, { t: "Gritar", bin: 1 }, { t: "Dizer 'eu me senti triste'", bin: 0 }, { t: "Pegar o brinquedo à força", bin: 1 }, { t: "Pedir desculpas", bin: 0 }, { t: "Falar 'você é chato'", bin: 1 }
    ] }
  },

  /* ---- Lingote ---- */
  "l-sementes": {
    title: "Riqueza é como um pomar", icon: "spark", minutes: 5,
    cards: [
      { t: "Um ditado antigo", b: "Existe um ditado: 'pai rico, filho nobre, neto pobre'. Ele diz que muitas famílias perdem o que construíram em três gerações. Em vários países existe um ditado parecido!" },
      { t: "Como evitar?", b: "Pense num pomar. Se a família só colhe as frutas e ninguém planta árvores novas, um dia o pomar acaba. Cada geração precisa plantar sementes novas: estudar, trabalhar, cuidar e ter ideias." },
      { t: "O que cresce e o que gasta", b: "Para o pomar ficar grande, precisa crescer mais rápido do que a família come. Gastar tudo, brigar e não aprender fazem o pomar encolher." }
    ],
    activity: { type: "sort", prompt: "Isso faz o pomar da família crescer ou encolher?", bins: ["Cresce 🌳", "Encolhe 🍂"], items: [
      { t: "Estudar e aprender", bin: 0 }, { t: "Gastar tudo o que ganha", bin: 1 }, { t: "Ter uma ideia nova", bin: 0 }, { t: "Brigar e parar de se falar", bin: 1 }, { t: "Guardar parte da mesada", bin: 0 }, { t: "Cuidar do que já temos", bin: 0 }
    ] }
  },

  /* ---- Chapa ---- */
  "c-linha": {
    title: "Da loja de ferragens à Central de Aço", icon: "book", minutes: 7,
    cards: [
      { t: "1958: tudo começa em Colatina", b: "Dionísio Dalla Bernardina empreendia ao lado dos filhos. Em 1958 os mais velhos, José e Claudionor, assumem a Irmãos Dalla Bernardina S/A Ferragens, em Colatina (ES)." },
      { t: "1975 a 1994: nasce e cresce a Cedisa", b: "Em 1975 a Cedisa sucede a Irmãos Dalla Bernardina. Em 1982 inaugura a planta na Serra; em 1984 abre filiais em Itabuna (BA) e Colatina e um escritório em Macaé; em 1994 chega a Salvador." },
      { t: "2004 a 2013: indústria e qualidade", b: "Novos galpões, máquinas e a ISO 9001 (2004). Macaé vira filial (2007), o processo industrial se fortalece (2010), Recife abre (2012) e o Rio ganha escritório (2013)." },
      { t: "2020 a 2025: um novo tamanho", b: "Mais estoque na Matriz (2020); Cercado da Pedra, Cuiabá e nova marca (2022); Volta Redonda (2023); Fortaleza (2024); e em 2025, 50 anos com a nova Matriz em Calogi.", visual: "timelineFull" }
    ],
    activity: { type: "quiz", questions: [
      { q: "Qual era o nome da primeira empresa, em 1958?", options: ["Irmãos Dalla Bernardina S/A Ferragens", "Cedisa Central de Aço", "Valorização"], answer: 0, explain: "A loja de ferragens em Colatina, que em 1975 deu lugar à Cedisa." },
      { q: "Em que ano a Cedisa inaugurou a planta na Serra?", options: ["1958", "1982", "2022"], answer: 1, explain: "Em 1982." },
      { q: "Qual foi a primeira filial fora do Espírito Santo, em 1984?", options: ["Itabuna (BA)", "Recife (PE)", "Cuiabá (MT)"], answer: 0, explain: "Itabuna, na Bahia." },
      { q: "O que aconteceu em 2025?", options: ["A Cedisa fez 50 anos e inaugurou a nova Matriz em Calogi", "A Cedisa foi fundada", "Abriu a primeira filial"], answer: 0, explain: "Meio século e uma nova casa!" }
    ] }
  },
  "c-chapeus": {
    title: "Os três chapéus", icon: "circles", minutes: 5,
    cards: [
      { t: "Um chapéu para cada lugar", b: "Na família empresária, cada pessoa pode usar até três chapéus: o de membro da família (almoço de domingo), o de dono ou sócio (decide o futuro da empresa) e o de quem trabalha na empresa (faz o dia a dia).", visual: "circles3" },
      { t: "Trocar de chapéu na hora certa", b: "No almoço de domingo, usamos o chapéu da família. Numa reunião de sócios, o chapéu de dono. Misturar os chapéus é uma das maiores causas de confusão e briga." }
    ],
    activity: { type: "sort", prompt: "Qual chapéu a pessoa está usando?", bins: ["Família", "Sócio", "Trabalho"], items: [
      { t: "Comemorar o aniversário da vovó", bin: 0 }, { t: "Votar se a empresa vai abrir uma filial", bin: 1 }, { t: "Atender um cliente em Salvador", bin: 2 }, { t: "Decidir quanto do lucro vai para dividendos", bin: 1 }, { t: "Operar uma máquina de corte", bin: 2 }, { t: "Passar o Natal juntos", bin: 0 }
    ] }
  },

  /* ---- Perfil ---- */
  "p-3geracoes": {
    title: "A regra das três gerações", icon: "chart", minutes: 7,
    cards: [
      { t: "Um fenômeno mundial", b: "No Brasil se diz 'pai rico, filho nobre, neto pobre'. Na Itália, 'dos estábulos às estrelas e de volta aos estábulos'. Nos EUA, 'de mangas de camisa a mangas de camisa em três gerações'. No Brasil, só cerca de 30% das empresas familiares chegam à 2ª geração e 15% à 3ª." },
      { t: "Por que acontece?", b: "A família cresce mais rápido que a empresa. A nova geração nem sempre é preparada ou engajada. As ações se dividem entre muitos primos, que passam a olhar só para dividendos e têm menos apetite para risco. E o mercado muda cada vez mais rápido." },
      { t: "A trajetória da regeneração", b: "Famílias longevas criam novos ciclos de riqueza: visão de longo prazo compartilhada, união em torno de um propósito, espírito empreendedor, desenvolvimento de talentos em cada geração e patrimônio crescendo mais que o consumo da família." }
    ],
    activity: { type: "quiz", questions: [
      { q: "Qual destas é uma causa da 'regra das 3 gerações'?", options: ["A família cresce mais rápido que a empresa", "A empresa tem clientes demais", "Os funcionários são muito bons"], answer: 0, explain: "Mais herdeiros dividindo o mesmo bolo." },
      { q: "O que mais ajuda uma família a 'regenerar' a riqueza?", options: ["Preparar talentos e empreender em cada geração", "Distribuir todo o lucro", "Nunca mudar nada"], answer: 0, explain: "Cada geração precisa criar valor, não só herdar." },
      { q: "Qual porcentagem aproximada das empresas familiares brasileiras chega à 3ª geração?", options: ["15%", "50%", "90%"], answer: 0, explain: "Cerca de 15%. A Cedisa já está com a 3ª geração atuando e a 4ª chegando." }
    ] }
  },
  "p-conversas": {
    title: "Conversas difíceis", icon: "chat", minutes: 7,
    cards: [
      { t: "Toda conversa difícil tem três camadas", b: "O que aconteceu (os fatos e quem tem razão), os sentimentos (o que cada um sente) e a identidade (o que aquilo diz sobre mim). Quando só discutimos quem tem razão, a conversa trava." },
      { t: "Troque certezas por curiosidade", b: "Em vez de 'quem está certo?', pergunte 'por que vemos isso de jeitos diferentes?'. Em vez de 'de quem é a culpa?', pense 'o que cada um fez para chegar aqui?'." },
      { t: "Escuta ativa", b: "Parafraseie (repita com suas palavras o que entendeu), investigue (faça perguntas abertas) e reconheça o sentimento do outro. Use frases começando com 'Eu', separe fatos de julgamentos e faça uma pausa de três segundos antes de responder." }
    ],
    activity: { type: "quiz", questions: [
      { q: "Seu primo diz: 'Você nunca me chama para nada!'. Qual resposta é escuta ativa?", options: ["'Você está chateado porque sentiu que ficou de fora, é isso?'", "'Mentira, eu chamei semana passada.'", "'Você é muito sensível.'"], answer: 0, explain: "Parafrasear e reconhecer o sentimento abre a conversa." },
      { q: "Qual frase separa fato de julgamento?", options: ["'Você chegou 30 minutos depois do combinado.'", "'Você é irresponsável.'", "'Você sempre atrasa tudo.'"], answer: 0, explain: "Fatos específicos não acusam; julgamentos provocam defesa." },
      { q: "Qual é a melhor postura numa discordância familiar?", options: ["Curiosidade", "Certeza", "Silêncio total"], answer: 0, explain: "Curiosidade para entender por que o outro vê diferente." }
    ] }
  },
  "p-socios": {
    title: "Que tipo de sócio você vai ser?", icon: "people", minutes: 6,
    cards: [
      { t: "Bons sócios não nascem prontos", b: "Eles são preparados. Um dia você poderá ser sócio do Grupo, e o jeito de exercer esse papel faz toda a diferença." },
      { t: "Os tipos de sócio", b: "Obstrutivo: trava decisões. Passivo: não acompanha nada, só recebe. Apoiador: acompanha os temas importantes e apoia quem decide. Ativo: se engaja, estuda e contribui nas decisões. Empreendedor: lidera, assume riscos e cria valor." },
      { t: "Muitas formas de contribuir", b: "Nem todo mundo precisa trabalhar na empresa. Dá para contribuir como membro da governança, unificador da família, criador de novos negócios, líder de impacto social, conector de pessoas ou executivo." }
    ],
    activity: { type: "sort", prompt: "Esse comportamento é de um sócio desejável ou indesejável?", bins: ["Desejável", "Indesejável"], items: [
      { t: "Lê o material antes da assembleia", bin: 0 }, { t: "Nunca aparece nas reuniões", bin: 1 }, { t: "Vota contra tudo sem explicar", bin: 1 }, { t: "Propõe um novo negócio com plano", bin: 0 }, { t: "Faz perguntas para entender a estratégia", bin: 0 }, { t: "Só pergunta quando sai o dividendo", bin: 1 }
    ] }
  },

  /* ---- Viga ---- */
  "v-decisoes": {
    title: "As decisões que só o sócio pode tomar", icon: "target", minutes: 8,
    cards: [
      { t: "Decisões indelegáveis", b: "Algumas decisões não podem ser passadas para executivos: são dos sócios. Visão estratégica, cultura, investimentos, pessoas-chave, governança e transição para a próxima geração." },
      { t: "O que cada uma envolve", b: "Visão: o que queremos alcançar em X anos. Cultura: proteger e adaptar o jeito de ser que nos fez chegar até aqui. Investimentos: escolher boas apostas e saber sair das ruins. Pessoas: escolher e avaliar líderes, e trocar quando necessário. Governança: estruturas e regras claras de decisão. Transição: preparar a próxima geração." },
      { t: "O chapéu de sócio", b: "O gestor olha a 20 metros de altura (o dia a dia). O conselho, a 100 metros. O sócio precisa subir a 10 mil metros: tendências, riscos, oportunidades e o futuro de longo prazo." }
    ],
    activity: { type: "quiz", questions: [
      { q: "Qual destas é uma decisão indelegável dos sócios?", options: ["Definir a visão estratégica de longo prazo", "Escolher o fornecedor de papel", "Montar a escala de férias"], answer: 0, explain: "Visão é papel do dono." },
      { q: "Saber 'sair de más apostas' vale para...", options: ["Investimentos e pessoas", "Só imóveis", "Nada, sócio nunca desiste"], answer: 0, explain: "Reconhecer erros e corrigir o rumo é uma habilidade central do sócio." },
      { q: "A que 'altura' o sócio deve olhar o negócio?", options: ["10 mil metros: visão ampla e de longo prazo", "20 metros: detalhes da operação", "No chão: o caixa do dia"], answer: 0, explain: "Altitude para enxergar tendências e o futuro." }
    ] }
  },
  "v-capital": {
    title: "Onde colocar o lucro?", icon: "coin", minutes: 10,
    cards: [
      { t: "O triângulo da alocação de capital", b: "Toda família empresária equilibra três objetivos: crescimento (reinvestir e novos negócios), liquidez (dividendos e dinheiro disponível para a família) e controle (manter o comando e reduzir riscos). Não dá para maximizar os três ao mesmo tempo." },
      { t: "Um caso para praticar", b: "Uma empresa familiar hipotética lucrou R$ 100 milhões. As opções: reinvestir na expansão, pagar dividendos, criar um novo negócio de um membro da 3ª geração, apoiar a fundação da família ou montar um fundo de reserva. Como você dividiria?" }
    ],
    activity: { type: "allocate", preset: "caso" }
  },
  "v-protocolo": {
    title: "Acordo de sócios e protocolo familiar", icon: "book", minutes: 8,
    cards: [
      { t: "Acordo de sócios", b: "Documento com as regras da sociedade: órgãos de governança e como são eleitos, alçadas de decisão, compra e venda de ações, avaliação das participações, política de dividendos, confidencialidade, não concorrência e transações entre partes relacionadas." },
      { t: "Protocolo familiar", b: "Complementa o acordo de sócios e os regimentos. Explicita as regras da família entre si e com o negócio: valores, missão e visão, comunicação, regime de bens, política de empregabilidade de familiares, educação, novos negócios, uso de bens e funcionários da empresa, filantropia e gestão de conflitos." },
      { t: "O processo importa tanto quanto o documento", b: "O protocolo deve ser construído com a participação da família e revisado a cada 3 a 5 anos. As conversas para escrevê-lo já criam alinhamento." }
    ],
    activity: { type: "sort", prompt: "Esse tema fica no Acordo de Sócios ou no Protocolo Familiar?", bins: ["Acordo de Sócios", "Protocolo Familiar"], items: [
      { t: "Regras para compra e venda de ações", bin: 0 }, { t: "Critérios para familiares trabalharem na empresa", bin: 1 }, { t: "Política de dividendos", bin: 0 }, { t: "Uso de bens e funcionários da empresa pela família", bin: 1 }, { t: "Método de avaliação das participações", bin: 0 }, { t: "Programa de educação das novas gerações", bin: 1 }
    ] }
  },
  "v-bens": {
    title: "Namoro, casamento e patrimônio", icon: "shield", minutes: 8,
    cards: [
      { t: "Por que pensar nisso agora?", b: "Decisões desta fase da vida, como casar ou morar junto, afetam a herança que você vai receber e a que você vai deixar. Pensar nisso é cuidado com a família, não desconfiança." },
      { t: "Regimes de bens, em resumo", b: "Sem pacto, casamento e união estável seguem a comunhão parcial: a herança em si não se comunica, mas os rendimentos e dividendos dela, sim. Na separação total, definida por pacto antenupcial, o patrimônio herdado e seus frutos ficam protegidos." },
      { t: "Ferramentas de planejamento", b: "Testamento, doação com cláusulas (incomunicabilidade, inalienabilidade), holding patrimonial, previdência privada. Metade do patrimônio (a legítima) vai obrigatoriamente aos herdeiros necessários. Conteúdo educativo: cada caso deve ser visto com advogado." }
    ],
    activity: { type: "quiz", questions: [
      { q: "Na comunhão parcial sem pacto, os dividendos recebidos de uma herança...", options: ["Se comunicam com o cônjuge", "Nunca se comunicam", "Vão para o governo"], answer: 0, explain: "A herança em si não, mas os rendimentos dela sim." },
      { q: "Qual regime protege o patrimônio herdado e seus rendimentos?", options: ["Separação total de bens, por pacto antenupcial", "Comunhão universal", "Não existe proteção"], answer: 0, explain: "Por isso muitas famílias empresárias orientam o pacto antenupcial." },
      { q: "Qual parte do patrimônio vai obrigatoriamente aos herdeiros necessários?", options: ["50% (a legítima)", "10%", "100%"], answer: 0, explain: "A outra metade é a parte disponível, que pode ser destinada por testamento." }
    ] }
  },

  /* ---- Estrutura ---- */
  "e-historia": {
    title: "Nossa história em 18 marcos", icon: "book", minutes: 8,
    cards: [
      { t: "A origem", b: "A história começa com Dionísio Dalla Bernardina, que empreendeu ao lado dos filhos. Em 1958 nasce a Irmãos Dalla Bernardina S/A Ferragens, em Colatina, sob a administração dos filhos mais velhos, José e Claudionor. Esse legado é o ponto de partida de uma jornada que atravessa gerações." },
      { t: "Linha do tempo", b: "Da loja de ferragens à Central de Aço com operação industrial em quatro estados.", visual: "timelineFull" }
    ],
    activity: { type: "quiz", questions: [
      { q: "A Cedisa sucedeu qual empresa em 1975?", options: ["Irmãos Dalla Bernardina S/A Ferragens", "Valorização", "Uma siderúrgica de Vitória"], answer: 0, explain: "A empresa de ferragens de 1958, em Colatina." },
      { q: "Quando começou a implantação da ISO 9001?", options: ["2004", "2013", "2022"], answer: 0, explain: "Junto com a expansão de galpões e máquinas." },
      { q: "Qual unidade industrial começou a operar em 2023?", options: ["Volta Redonda (RJ)", "Recife (PE)", "Fortaleza (CE)"], answer: 0, explain: "Volta Redonda. Fortaleza (2024) é ponto de venda." },
      { q: "O que marcou 2022?", options: ["Cercado da Pedra, escritório em Cuiabá e nova marca", "Fundação da Cedisa", "Filial em Salvador"], answer: 0, explain: "Um ano de expansão e nova identidade." }
    ] }
  },
  "e-regimento": {
    title: "O Regimento do Conselho de Família", icon: "shield", minutes: 10,
    cards: [
      { t: "O que é e para que serve", b: "O Conselho de Família do Grupo Cedisa promove a coesão e o desenvolvimento dos membros da família, zela pelos valores familiares e busca a longevidade da empresa com governança estruturada. São membros da família todos os que compõem as holdings Santa Lucia e Ultrapar e seus herdeiros em linha reta, de todas as gerações." },
      { t: "Quem participa", b: "Até 4 membros indicados por cada holding (excepcionalmente, mais um de cada, por acordo). Cada holding indica ao menos 1 membro da 2ª geração. Mandato de 2 anos, com uma reeleição, e renovação de ao menos 50% a cada eleição. O coordenador é escolhido entre os membros.", visual: "regimento" },
      { t: "Como funciona", b: "No mínimo 4 reuniões ordinárias por ano, uma por trimestre, com agenda definida na primeira reunião do ano. Convocação com 15 dias de antecedência, pauta e material. Ata feita pelo secretário e assinada na reunião seguinte." },
      { t: "Deveres e ligação com o CA", b: "Conselheiros chegam preparados, participam ativamente e guardam sigilo. Quem falta a mais de 25% das reuniões ou a 2 seguidas perde o cargo. O coordenador participa das reuniões do Conselho de Administração como observador, sem voto." }
    ],
    activity: { type: "quiz", questions: [
      { q: "Quantos membros cada holding pode indicar, em regra?", options: ["Até 2", "Até 4", "Quantos quiser"], answer: 1, explain: "Até 4, com representação equitativa." },
      { q: "Qual é a exigência de geração na indicação de cada holding?", options: ["Ao menos 1 membro da 2ª geração", "Só membros da 3ª geração", "Nenhuma"], answer: 0, explain: "Garante a experiência da 2ª geração no Conselho." },
      { q: "Um conselheiro perde o cargo se...", options: ["Faltar a 2 reuniões seguidas ou tiver menos de 75% de presença", "Discordar do coordenador", "Faltar a 1 reunião"], answer: 0, explain: "Compromisso com a presença é dever do conselheiro." },
      { q: "Para alterar o Regimento é preciso...", options: ["Aprovação de 2/3 dos membros do Conselho", "Maioria simples", "Decisão do coordenador"], answer: 0, explain: "Mudanças exigem amplo consenso." }
    ] }
  },
  "e-riqueza": {
    title: "Construir riqueza entre gerações", icon: "chart", minutes: 10,
    cards: [
      { t: "Os quatro pilares", b: "Sustentar o sucesso por gerações exige: união da família e da organização, talentos familiares e não familiares, crescimento dos ativos da família e governança que dê conta de uma família e de um negócio cada vez mais complexos." },
      { t: "Crescer mais do que se consome", b: "Os ativos precisam crescer acima do que a família consome: despesas, novos investimentos que não dão certo, divisões de patrimônio e reinvestimentos necessários. Uma referência usada por consultorias é crescer acima de 6% ao ano em termos reais." },
      { t: "Ativos que não aparecem no balanço", b: "Além de empresas, imóveis e aplicações, a família tem ativos intangíveis: cultura, valores, missão e visão, talento e know-how, relacionamentos e reputação. A Valorização e a Cedisa são tangíveis; o nome Dalla Bernardina é intangível." },
      { t: "Operadora, investidora ou as duas?", b: "Famílias podem concentrar a riqueza em empresas que operam, combinar operação e investimentos, ou virar investidoras. Cada modelo exige competências diferentes dos sócios: execução, gestão ou investimento." }
    ],
    activity: { type: "sort", prompt: "Esse ativo é tangível ou intangível?", bins: ["Tangível", "Intangível"], items: [
      { t: "A fábrica de Calogi", bin: 0 }, { t: "A reputação do nome Dalla Bernardina", bin: 1 }, { t: "Terrenos da Valorização em Aracruz", bin: 0 }, { t: "Os valores deixados pelos fundadores", bin: 1 }, { t: "O know-how em beneficiamento de aço", bin: 1 }, { t: "O estoque de bobinas", bin: 0 }
    ] }
  },
  "e-capital": {
    title: "Alocação de capital na prática", icon: "coin", minutes: 12,
    cards: [
      { t: "Crescimento, liquidez e controle", b: "Toda decisão sobre o lucro equilibra crescer (reinvestir, novos negócios), dar liquidez (dividendos, reservas) e manter o controle (evitar diluição, reduzir riscos). Uma visão estratégica clara da família torna essa escolha mais fácil e menos emocional." },
      { t: "Crie valor de verdade", b: "Um investimento só cria valor quando o retorno supera o custo de capital. Invista onde se cruzam a aspiração dos sócios, oportunidades reais de crescimento e um diferencial que a família tem." }
    ],
    activity: { type: "allocate", preset: "caso" }
  },
  "e-conflitos": {
    title: "Harmonia, alinhamento e união", icon: "handshake", minutes: 8,
    cards: [
      { t: "Três palavras diferentes", b: "Harmonia é 'gostamos uns dos outros'. Concordância é 'não há conflito'. Alinhamento é 'temos um propósito comum, mesmo com perspectivas diferentes'. União familiar não exige unanimidade nem harmonia o tempo todo: exige alinhamento sobre valores, missão, visão e sobre como a família funciona junta." },
      { t: "Tensões comuns", b: "Objetivos e estratégias, divisão de responsabilidades e de poder, reinvestir ou distribuir lucros, estilos de vida diferentes e feridas antigas. A união precisa ser reconstruída a cada geração, com irmãos e primos." },
      { t: "Conversa construtiva em 4 passos", b: "Preparação (o que eu quero, o que o outro quer). Empatia (entender a perspectiva do outro). Assertividade (colocar a sua de forma estruturada). Colaboração (achar juntos um caminho)." }
    ],
    activity: { type: "quiz", questions: [
      { q: "União familiar, segundo as boas práticas, significa...", options: ["Alinhamento sobre valores, missão e visão", "Todos concordarem em tudo", "Nunca tocar em assuntos difíceis"], answer: 0, explain: "Dá para discordar e continuar unido." },
      { q: "Qual é o primeiro passo de uma conversa construtiva?", options: ["Preparação", "Colaboração", "Decisão"], answer: 0, explain: "Saber sobre o que a conversa realmente se trata." },
      { q: "Reinvestir ou distribuir lucros é...", options: ["Uma tensão comum que precisa de regras claras", "Um assunto proibido", "Decisão só do gestor"], answer: 0, explain: "Por isso existem política de dividendos e acordo de sócios." }
    ] }
  }
});

/* ---------- Simulador de alocação ---------- */
window.FORJA.allocs = {
  caso: {
    title: "Divida R$ 100 milhões de lucro",
    note: "Caso hipotético para treinar o olhar de sócio. Não são números do Grupo Cedisa.",
    total: 100,
    buckets: [
      { id: "reinv", t: "Reinvestir na expansão da empresa", axis: "growth", v: 40 },
      { id: "novo", t: "Novo negócio de um membro da 3ª geração", axis: "growth", v: 10 },
      { id: "div", t: "Dividendos para a família", axis: "liquidity", v: 20 },
      { id: "fundacao", t: "Fundação / impacto social", axis: "liquidity", v: 5 },
      { id: "reserva", t: "Fundo de reserva dos sócios", axis: "control", v: 25 }
    ],
    axes: { growth: "Crescimento", liquidity: "Liquidez", control: "Controle" },
    minDiv: 15
  }
};

/* ---------- Regimento Interno do Conselho de Família (resumo) ---------- */
window.FORJA.regimento = [
  { cap: "Disposições gerais", t: "O que é", items: [
    "O Conselho de Família do Grupo Cedisa promove a coesão e o desenvolvimento dos membros da família, zela pelos valores familiares e busca a longevidade da empresa com governança estruturada.",
    "Membros da família: todos os que compõem as holdings Santa Lucia Participação e Agropecuária S/A e Ultrapar Participação e Agropecuária S/A e seus herdeiros em linha reta, de todas as gerações."
  ] },
  { cap: "Atribuições", t: "O que faz", items: [
    "Promover a coesão e a integração da família",
    "Planejar e executar a educação e o desenvolvimento dos membros",
    "Elaborar e revisar o Protocolo Familiar",
    "Facilitar a comunicação entre familiares e entre família e empresa",
    "Zelar pelo planejamento patrimonial e sucessório",
    "Criar e acompanhar comitês temáticos"
  ] },
  { cap: "Composição", t: "Quem participa", items: [
    "Até 4 membros por holding, com representação igual entre as duas (excepcionalmente, mais 1 de cada, por acordo)",
    "Cada holding indica ao menos 1 membro da 2ª geração",
    "Se uma holding se dividir, a regra de composição não muda",
    "Mandato de 2 anos, com uma reeleição; ao menos 50% dos membros se renovam a cada eleição",
    "Coordenador escolhido entre os membros; em caso de vaga, a holding indica o substituto até a próxima reunião"
  ] },
  { cap: "Comitês temáticos", t: "Grupos de trabalho", items: [
    "O Conselho pode criar comitês para temas específicos, com membros das duas holdings",
    "Cada comitê tem ao menos 1 membro da 2ª geração, um coordenador e um secretário",
    "Podem entrar membros ad hoc para projetos específicos",
    "Na primeira instalação, o Conselho de Administração da Cedisa aprova a estrutura"
  ] },
  { cap: "Deveres do conselheiro", t: "Compromissos", items: [
    "Chegar preparado, tendo lido os documentos, e participar ativamente",
    "Cumprir com zelo as atividades designadas",
    "Manter sigilo sobre as informações do cargo",
    "Perde o cargo quem tiver menos de 75% de presença ou faltar a 2 reuniões seguidas"
  ] },
  { cap: "Reuniões", t: "Como funciona", items: [
    "Mínimo de 4 reuniões ordinárias por ano (uma por trimestre), além das extraordinárias",
    "Agenda anual definida na primeira reunião do ano",
    "Convocação com 15 dias de antecedência, com pauta e material",
    "Convocadas pelo coordenador ou por qualquer membro, com justificativa",
    "Ata feita pelo secretário e assinada pelos presentes na reunião seguinte"
  ] },
  { cap: "Relação com o Conselho de Administração", t: "Ponte com a empresa", items: [
    "Relação próxima e colaborativa, integrando as decisões da família à estratégia",
    "O coordenador do Conselho de Família participa das reuniões do CA como observador, sem voto"
  ] },
  { cap: "Disposições finais", t: "Mudanças", items: [
    "Alterações exigem aprovação de ao menos 2/3 dos membros",
    "Casos omissos são resolvidos pelo Conselho com equidade e justiça",
    "Vale a partir da aprovação pelo Conselho"
  ] }
];

/* ---------- Referências de boas práticas ---------- */
window.FORJA.references = [
  "Cambridge Family Enterprise Group (CFEG), Winter Training 2025: governança, mentalidade de sócio, cultura, conflitos, sucessão e alocação de capital",
  "IBGC: Governança da Família Empresária (Caderno 15) e Sucessão em Empresas Familiares",
  "IBGC: Código das Melhores Práticas de Governança Corporativa, 6ª edição",
  "Modelo dos três círculos (Tagiuri e Davis, 1978)"
];
