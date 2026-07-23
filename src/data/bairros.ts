export interface Bairro {
  slug: string;
  nome: string;
  regiao: string;
  intro: string;
  destaques: string[];
  landmarks: string[];
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
];

export const bairroBySlug = (slug: string) => bairros.find((b) => b.slug === slug);
