export interface Bairro {
  slug: string;
  nome: string;
  regiao: string;
  intro: string;
  destaques: string[];
  landmarks: string[];
  /** Preposição usada antes do nome (default "na"). Ex.: "no Centro", "em Pinheiros". */
  prep?: string;
}

export const bairros: Bairro[] = [
  {
    slug: "vila-olimpia",
    nome: "Vila Olímpia",
    regiao: "Zona Sul de São Paulo",
    intro:
      "Atendemos escritórios, agências e clínicas na Vila Olímpia com fotografia corporativa on-location: retratos executivos, ensaios para LinkedIn, cobertura de eventos e vídeo institucional. Estúdio próprio a 5 minutos da região.",
    destaques: [
      "Retratos corporativos no escritório do cliente com iluminação profissional",
      "Cobertura de convenções, kick-offs e confraternizações em hotéis e centros de eventos",
      "Fotografia de arquitetura e interiores para imobiliárias e escritórios de advocacia",
      "Ensaios editoriais para redes sociais e site institucional",
    ],
    landmarks: ["Faria Lima", "JK Iguatemi", "Vila Nova Conceição", "Itaim Bibi"],
  },
  {
    slug: "faria-lima",
    nome: "Faria Lima",
    regiao: "Zona Sul de São Paulo",
    intro:
      "Faria Lima concentra o coração financeiro e jurídico de São Paulo. Fazemos retratos corporativos, headshots para LinkedIn de sócios e associados, fotografia institucional de escritórios e cobertura de eventos executivos com padrão internacional.",
    destaques: [
      "Headshots executivos de sócios, C-level e times de investimento",
      "Fotografia institucional de escritórios de advocacia, private equity e wealth",
      "Cobertura de comitês, boards, painéis e coquetéis corporativos",
      "Retratos para press-release e mídia especializada",
    ],
    landmarks: ["Itaim Bibi", "Pinheiros", "Vila Olímpia", "Jardim Paulistano"],
  },
  {
    slug: "avenida-paulista",
    nome: "Avenida Paulista",
    regiao: "Região Central de São Paulo",
    intro:
      "Fotografia corporativa na Avenida Paulista para bancos, seguradoras, entidades setoriais, hospitais e escritórios. Atendemos em toda a extensão da avenida — Bela Vista, Jardins, Paraíso e Consolação — com equipamento portátil e agilidade.",
    destaques: [
      "Retratos corporativos em ambiente executivo com skyline da Paulista",
      "Fotografia médica e hospitalar para grupos e clínicas de referência",
      "Cobertura de congressos, seminários e lançamentos em hotéis e teatros",
      "Vídeo institucional e depoimentos de liderança",
    ],
    landmarks: ["Bela Vista", "Jardins", "Paraíso", "Consolação"],
  },
  {
    slug: "berrini",
    nome: "Berrini",
    regiao: "Zona Sul de São Paulo",
    intro:
      "Na Berrini atendemos multinacionais, empresas de tecnologia e logística instaladas nos principais edifícios corporativos: retratos executivos, fotografia de escritório, eventos internos e vídeo institucional em inglês/português.",
    destaques: [
      "Retratos de times globais com padrão de headshot internacional",
      "Fotografia arquitetônica de sedes e escritórios",
      "Cobertura de town halls, all hands e treinamentos",
      "Produção bilíngue para comunicação global",
    ],
    landmarks: ["Chácara Santo Antônio", "Brooklin", "Vila Cordeiro", "Santo Amaro"],
  },
  {
    slug: "itaim-bibi",
    nome: "Itaim Bibi",
    regiao: "Zona Sul de São Paulo",
    intro:
      "Itaim Bibi reúne consultorias, gestoras, startups e escritórios boutique. Produzimos retratos corporativos, ensaios para redes sociais, cobertura de eventos e vídeos manifesto com estética contemporânea alinhada ao posicionamento de marca.",
    destaques: [
      "Ensaios executivos para LinkedIn, sites e press-kits",
      "Fotografia institucional e cultura organizacional",
      "Cobertura de eventos de networking e lançamentos",
      "Vídeo manifesto e branded content curto para redes sociais",
    ],
    landmarks: ["Vila Olímpia", "Faria Lima", "Jardins", "Vila Nova Conceição"],
  },
  {
    slug: "pinheiros",
    nome: "Pinheiros",
    regiao: "Zona Oeste de São Paulo",
    prep: "em",
    intro:
      "Pinheiros é um dos principais polos de tecnologia, agências e startups de São Paulo. Produzimos fotografia corporativa para empresas criativas e de inovação: retratos executivos, cultura organizacional, cobertura de eventos e conteúdo para redes sociais.",
    destaques: [
      "Retratos e headshots para times de produto, engenharia e design",
      "Fotografia de cultura organizacional e ambiente de trabalho",
      "Cobertura de meetups, demos e lançamentos de produto",
      "Contúdo visual para LinkedIn e redes sociais",
    ],
    landmarks: ["Vila Madalena", "Faria Lima", "Jardim Paulistano", "Cerqueira César"],
  },
  {
    slug: "jardim-paulistano",
    nome: "Jardim Paulistano",
    regiao: "Zona Sul de São Paulo",
    prep: "no",
    intro:
      "O Jardim Paulistano abriga gestoras, escritórios boutique e sedes regionais. Oferecemos retratos corporativos discretos e sofisticados, fotografia institucional e cobertura de eventos executivos alinhados ao padrão da região.",
    destaques: [
      "Retratos executivos de sócios e C-level com estética editorial",
      "Fotografia institucional de escritórios e residências corporativas",
      "Cobertura de jantares, boards e eventos exclusivos",
      "Headshots para LinkedIn e press-kits",
    ],
    landmarks: ["Faria Lima", "Itaim Bibi", "Pinheiros", "Jardins"],
  },
  {
    slug: "brooklin",
    nome: "Brooklin",
    regiao: "Zona Sul de São Paulo",
    prep: "no",
    intro:
      "O Brooklin concentra sedes corporativas, multinacionais e o polo financeiro da Berrini. Atendemos com retratos executivos, fotografia de escritório, cobertura de eventos internos e vídeo institucional com padrão corporativo internacional.",
    destaques: [
      "Retratos de times globais com padrão de headshot internacional",
      "Fotografia arquitetônica de sedes e escritórios corporativos",
      "Cobertura de town halls, all hands e treinamentos",
      "Vídeo institucional bilíngue para comunicação global",
    ],
    landmarks: ["Berrini", "Cidade Monções", "Vila Cordeiro", "Santo Amaro"],
  },
  {
    slug: "cidade-moncoes",
    nome: "Cidade Monções",
    regiao: "Zona Sul de São Paulo",
    intro:
      "A Cidade Monções é o polo corporativo vizinho à Berrini, com sedes de multinacionais e escritórios de tecnologia. Produzimos retratos corporativos, fotografia institucional e cobertura de eventos com agilidade e padrão internacional.",
    destaques: [
      "Headshots executivos para times multinacionais",
      "Fotografia de escritórios, ambientes e arquitetura corporativa",
      "Cobertura de convenções, all hands e treinamentos",
      "Conteúdo visual para comunicação interna e LinkedIn",
    ],
    landmarks: ["Berrini", "Brooklin", "Vila Cordeiro", "Chácara Santo Antônio"],
  },
  {
    slug: "vila-madalena",
    nome: "Vila Madalena",
    regiao: "Zona Oeste de São Paulo",
    intro:
      "A Vila Madalena abriga agências criativas, estúdios e startups. Criamos fotografia corporativa com viés autoral: retratos editoriais, cultura organizacional, cobertura de eventos e conteúdo para marcas que valorizam estética.",
    destaques: [
      "Retratos editoriais com direção de pose e luz natural",
      "Fotografia de cultura e ambiente de trabalho criativo",
      "Cobertura de lançamentos, festas e ativações de marca",
      "Conteúdo visual para redes sociais e portfólio",
    ],
    landmarks: ["Pinheiros", "Alto de Pinheiros", "Vila Beatriz", "Sumarezinho"],
  },
  {
    slug: "cerqueira-cesar",
    nome: "Cerqueira César",
    regiao: "Região Central de São Paulo",
    intro:
      "O Cerqueira César, entre a Paulista e os Jardins, abriga escritórios de advocacia, consultorias e sedes regionais. Produzimos retratos corporativos sofisticados, fotografia institucional e cobertura de eventos executivos.",
    destaques: [
      "Retratos de sócios e associados com padrão editorial",
      "Fotografia institucional de escritórios e reuniões",
      "Cobertura de boards, painéis e coquetéis corporativos",
      "Headshots para LinkedIn e press-release",
    ],
    landmarks: ["Jardins", "Avenida Paulista", "Consolação", "Bela Vista"],
  },
  {
    slug: "consolacao",
    nome: "Consolação",
    regiao: "Região Central de São Paulo",
    intro:
      "A Consolação, no entorno da Avenida Paulista, abriga clínicas, consultórios e escritórios. Atendemos com retratos corporativos, fotografia médica e institucional, cobertura de eventos e vídeo institucional com agilidade.",
    destaques: [
      "Retratos corporativos e médicos com iluminação profissional",
      "Fotografia institucional de consultórios e clínicas",
      "Cobertura de congressos, seminários e palestras",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Avenida Paulista", "Bela Vista", "Cerqueira César", "República"],
  },
  {
    slug: "republica",
    nome: "República",
    regiao: "Região Central de São Paulo",
    intro:
      "A República é um polo de escritórios, teatros e instituições no centro de São Paulo. Produzimos fotografia corporativa, cobertura de eventos culturais e corporativos, retratos executivos e vídeo institucional com mobilidade.",
    destaques: [
      "Retratos corporativos no escritório ou em locação",
      "Cobertura de eventos, congressos e premiações no centro",
      "Fotografia institucional de sedes e associações",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Avenida Paulista", "Consolação", "Bela Vista", "Santa Ifigênia"],
  },
  {
    slug: "moema",
    nome: "Moema",
    regiao: "Zona Sul de São Paulo",
    intro:
      "Moema reúne clínicas, consultórios, escolas e escritórios em ambiente residencial nobre. Atendemos com retratos corporativos, fotografia médica e institucional, cobertura de eventos e ensaios para LinkedIn com estética leve.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia médica e de clínicas da região",
      "Cobertura de eventos escolares e corporativos",
      "Ensaios editoriais para site e redes sociais",
    ],
    landmarks: ["Indianópolis", "Vila Mariana", "Itaim Bibi", "Brooklin"],
  },
  {
    slug: "vila-mariana",
    nome: "Vila Mariana",
    regiao: "Zona Sul de São Paulo",
    intro:
      "A Vila Mariana abriga clínicas, escolas, startups e escritórios próximos ao Ibirapuera. Produzimos retratos corporativos, fotografia institucional, cobertura de eventos e conteúdo para marcas com estética contemporânea.",
    destaques: [
      "Retratos e headshots para times de saúde e educação",
      "Fotografia institucional de clínicas e escolas",
      "Cobertura de eventos, palestras e formações",
      "Conteúdo visual para LinkedIn e redes sociais",
    ],
    landmarks: ["Moema", "Indianópolis", "Vila Clementino", "Paraíso"],
  },
  {
    slug: "perdizes",
    nome: "Perdizes",
    regiao: "Zona Oeste de São Paulo",
    prep: "em",
    intro:
      "Perdizes abriga faculdades, escolas, clínicas e escritórios em ambiente arborizado. Atendemos com retratos corporativos, fotografia institucional, cobertura de eventos acadêmicos e vídeo institucional com estética sóbria.",
    destaques: [
      "Retratos corporativos e headshots para docentes e executivos",
      "Fotografia institucional de faculdades e clínicas",
      "Cobertura de colações, palestras e eventos acadêmicos",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Pompeia", "Lapa", "Vila Buarque", "Higienópolis"],
  },
  {
    slug: "lapa",
    nome: "Lapa",
    regiao: "Zona Oeste de São Paulo",
    intro:
      "A Lapa é um polo de logística, indústria e escritórios no entroncamento oeste. Produzimos fotografia corporativa industrial, retratos de equipes, fotografia de operação e cobertura de eventos com agilidade.",
    destaques: [
      "Fotografia industrial e de processos produtivos",
      "Retratos de equipes operacionais e corporativas",
      "Fotografia de galpões, logística e centros de distribuição",
      "Cobertura de eventos internos e treinamentos",
    ],
    landmarks: ["Perdizes", "Pompeia", "Água Branca", "Barra Funda"],
  },
  {
    slug: "santana",
    nome: "Santana",
    regiao: "Zona Norte de São Paulo",
    prep: "em",
    intro:
      "Santana é o principal centro da Zona Norte, com clínicas, escritórios e comércio forte. Atendemos com retratos corporativos, fotografia institucional, cobertura de eventos e ensaios para LinkedIn na região.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de clínicas e escritórios",
      "Cobertura de eventos regionais e comerciais",
      "Ensaios editoriais para site e redes sociais",
    ],
    landmarks: ["Vila Maria", "Tucuruvi", "Higienópolis", "Barra Funda"],
  },
  {
    slug: "tatuape",
    nome: "Tatuapé",
    regiao: "Zona Leste de São Paulo",
    prep: "no",
    intro:
      "O Tatuapé é o principal polo corporativo e comercial da Zona Leste, com escritórios, clínicas e shoppings. Produzimos retratos corporativos, fotografia institucional, cobertura de eventos e vídeo institucional na região.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de escritórios e clínicas",
      "Cobertura de eventos e lançamentos comerciais",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Anália Franco", "Mooca", "Penha", "Vila Gomes Cardim"],
  },
  {
    slug: "mooca",
    nome: "Mooca",
    regiao: "Zona Leste de São Paulo",
    intro:
      "A Mooca abriga indústrias, escritórios e clínicas em um bairro tradicional de São Paulo. Atendemos com fotografia corporativa e industrial, retratos de equipes, cobertura de eventos e vídeo institucional.",
    destaques: [
      "Fotografia industrial e de processos",
      "Retratos de equipes e executivos",
      "Cobertura de eventos corporativos e internos",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Tatuapé", "Brás", "Água Rasa", "Vila Prudente"],
  },
  {
    slug: "agua-branca",
    nome: "Água Branca",
    regiao: "Zona Oeste de São Paulo",
    intro:
      "A Água Branca, no entorno da Lapa e Barra Funda, abriga indústrias, logística e escritórios. Produzimos fotografia corporativa industrial, retratos de equipes e cobertura de eventos com mobilidade.",
    destaques: [
      "Fotografia industrial, logística e de operação",
      "Retratos de equipes operacionais e corporativas",
      "Fotografia de galpões e centros de distribuição",
      "Cobertura de eventos internos",
    ],
    landmarks: ["Lapa", "Pompeia", "Barra Funda", "Perdizes"],
  },
  {
    slug: "morumbi",
    nome: "Morumbi",
    regiao: "Zona Sul de São Paulo",
    prep: "no",
    intro:
      "O Morumbi abriga sedes corporativas, clínicas e residências executivas de alto padrão. Atendemos com retratos corporativos sofisticados, fotografia institucional e cobertura de eventos exclusivos.",
    destaques: [
      "Retratos executivos com estética editorial",
      "Fotografia institucional de sedes e residências corporativas",
      "Cobertura de eventos e jantares exclusivos",
      "Headshots para LinkedIn e press-kits",
    ],
    landmarks: ["Vila Andrade", "Panamby", "Richteria", "Cidade Jardim"],
  },
  {
    slug: "santo-amaro",
    nome: "Santo Amaro",
    regiao: "Zona Sul de São Paulo",
    prep: "em",
    intro:
      "Santo Amaro é um dos principais polos corporativos da Zona Sul, com sedes, escritórios e clínicas. Produzimos retratos corporativos, fotografia institucional, cobertura de eventos e vídeo institucional na região.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de escritórios e clínicas",
      "Cobertura de eventos corporativos e internos",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Brooklin", "Berrini", "Chácara Santo Antônio", "Vila Mariana"],
  },
  {
    slug: "centro-santo-andre",
    nome: "Centro de Santo André",
    regiao: "Santo André — ABC Paulista",
    prep: "no",
    intro:
      "O Centro de Santo André concentra escritórios, clínicas e comércio do ABC. Atendemos com retratos corporativos, fotografia institucional, cobertura de eventos e vídeo institucional para empresas do ABC Paulista.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de escritórios e clínicas",
      "Cobertura de eventos e palestras corporativas",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Bairro Campestre", "Vila Assunção", "Jardim", "Paraíso"],
  },
  {
    slug: "campestre-santo-andre",
    nome: "Bairro Campestre",
    regiao: "Santo André — ABC Paulista",
    prep: "no",
    intro:
      "O Bairro Campestre, em Santo André, abriga clínicas, escritórios e residências executivas. Produzimos retratos corporativos, fotografia institucional e cobertura de eventos para empresas do ABC.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de clínicas e escritórios",
      "Cobertura de eventos corporativos e internos",
      "Ensaios editoriais para site e redes sociais",
    ],
    landmarks: ["Centro de Santo André", "Vila Assunção", "Jardim", "Paraíso"],
  },
  {
    slug: "vila-assuncao-santo-andre",
    nome: "Vila Assunção",
    regiao: "Santo André — ABC Paulista",
    intro:
      "A Vila Assunção, em Santo André, é um bairro residencial executivo com clínicas e escritórios. Atendemos com retratos corporativos sofisticados, fotografia institucional e cobertura de eventos.",
    destaques: [
      "Retratos executivos com estética editorial",
      "Fotografia institucional de clínicas e residências corporativas",
      "Cobertura de eventos e jantares exclusivos",
      "Headshots para LinkedIn e press-kits",
    ],
    landmarks: ["Bairro Campestre", "Centro de Santo André", "Jardim", "Paraíso"],
  },
  {
    slug: "centro-sao-bernardo",
    nome: "Centro de São Bernardo do Campo",
    regiao: "São Bernardo do Campo — ABC Paulista",
    prep: "no",
    intro:
      "O Centro de São Bernardo do Campo reúne indústrias, escritórios e clínicas do ABC. Atendemos com fotografia corporativa industrial, retratos de equipes, cobertura de eventos e vídeo institucional.",
    destaques: [
      "Fotografia industrial e de processos produtivos",
      "Retratos de equipes operacionais e corporativas",
      "Cobertura de eventos corporativos e internos",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Rudge Ramos", "Baeta Neves", "Demarchi", "Jardim do Mar"],
  },
  {
    slug: "rudge-ramos",
    nome: "Rudge Ramos",
    regiao: "São Bernardo do Campo — ABC Paulista",
    prep: "em",
    intro:
      "O Rudge Ramos, em São Bernardo do Campo, abriga indústrias e centros de distribuição. Produzimos fotografia corporativa industrial, retratos de equipes, fotografia de operação e cobertura de eventos.",
    destaques: [
      "Fotografia industrial, logística e de operação",
      "Retratos de equipes operacionais e corporativas",
      "Fotografia de galpões e centros de distribuição",
      "Cobertura de eventos internos e treinamentos",
    ],
    landmarks: ["Centro de São Bernardo", "Baeta Neves", "Demarchi", "Jardim do Mar"],
  },
  {
    slug: "baeta-neves",
    nome: "Baeta Neves",
    regiao: "São Bernardo do Campo — ABC Paulista",
    intro:
      "A Baeta Neves, em São Bernardo do Campo, abriga residências executivas, clínicas e escritórios. Atendemos com retratos corporativos, fotografia institucional e cobertura de eventos para empresas do ABC.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de clínicas e escritórios",
      "Cobertura de eventos corporativos e internos",
      "Ensaios editoriais para site e redes sociais",
    ],
    landmarks: ["Centro de São Bernardo", "Rudge Ramos", "Demarchi", "Jardim do Mar"],
  },
  {
    slug: "centro-sao-caetano",
    nome: "Centro de São Caetano do Sul",
    regiao: "São Caetano do Sul — ABC Paulista",
    prep: "no",
    intro:
      "O Centro de São Caetano do Sul abriga indústrias, escritórios e clínicas de alto padrão. Atendemos com retratos corporativos, fotografia institucional, cobertura de eventos e vídeo institucional para empresas do ABC.",
    destaques: [
      "Retratos corporativos e headshots para LinkedIn",
      "Fotografia institucional de escritórios e clínicas",
      "Cobertura de eventos e palestras corporativas",
      "Vídeo institucional e depoimentos",
    ],
    landmarks: ["Santa Paula", "Santo André", "São Bernardo do Campo", "Olímpico"],
  },
  {
    slug: "santa-paula-sao-caetano",
    nome: "Santa Paula",
    regiao: "São Caetano do Sul — ABC Paulista",
    intro:
      "O bairro Santa Paula, em São Caetano do Sul, abriga residências executivas, clínicas e escritórios. Produzimos retratos corporativos sofisticados, fotografia institucional e cobertura de eventos.",
    destaques: [
      "Retratos executivos com estética editorial",
      "Fotografia institucional de clínicas e escritórios",
      "Cobertura de eventos corporativos e internos",
      "Headshots para LinkedIn e press-kits",
    ],
    landmarks: ["Centro de São Caetano", "Santo André", "Olímpico", "Mauá"],
  },
  {
    slug: "centro-diadema",
    nome: "Centro de Diadema",
    regiao: "Diadema — ABC Paulista",
    prep: "no",
    intro:
      "O Centro de Diadema reúne indústrias, logística e escritórios do ABC. Atendemos com fotografia corporativa industrial, retratos de equipes, cobertura de eventos e vídeo institucional para empresas da região.",
    destaques: [
      "Fotografia industrial, logística e de operação",
      "Retratos de equipes operacionais e corporativas",
      "Fotografia de galpões e centros de distribuição",
      "Cobertura de eventos internos e treinamentos",
    ],
    landmarks: ["Eldorado", "Santo André", "São Bernardo do Campo", "Piraporinha"],
  },
  {
    slug: "alphaville-barueri",
    nome: "Alphaville",
    regiao: "Barueri — Grande São Paulo",
    prep: "em",
    intro:
      "Alphaville, em Barueri, é um dos maiores polos corporativos do país, com sedes de multinacionais e escritórios de alto padrão. Produzimos retratos executivos, fotografia institucional, cobertura de eventos e vídeo institucional com padrão internacional.",
    estaques_placeholder: true,
    destaques: [
      "Headshots executivos de C-level e times globais com padrão internacional",
      "Fotografia arquitetônica de sedes e escritórios corporativos",
      "Cobertura de town halls, convenções e lançamentos",
      "Vídeo institucional bilíngue para comunicação global",
    ],
    landmarks: ["Tamboré", "Centro de Barueri", "Jardim Paulista (Barueri)", "Engenho Novo"],
  },
];

export const bairroBySlug = (slug: string) => bairros.find((b) => b.slug === slug);
