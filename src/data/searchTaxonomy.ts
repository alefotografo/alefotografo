export type SearchTaxonomyEntry = {
  label: string;
  keywords: string[];
  slugs: string[];
  priority: number;
};

export const photoTaxonomy: SearchTaxonomyEntry[] = [
  {
    label: "Retratos profissionais e corporativos",
    keywords: ["retrato", "headshot", "perfil", "linkedin", "executivo", "empresario", "profissional"],
    slugs: ["retrato-corporativo", "fotografo-de-retratos-profissionais", "fotografo-de-retratos-corporativos", "fotografo-profissional-em-sao-paulo", "ensaio-fotografico-para-redes-sociais", "ensaio-feminino"],
    priority: 10,
  },
  {
    label: "Médicos, dentistas e clínicas",
    keywords: ["medico", "medica", "doutor", "saude", "clinica", "consultorio", "dentista", "doctoralia"],
    slugs: ["fotos-profissionais-para-medicos", "retratos-de-medicos", "retratos-de-medicas", "fotos-para-clinicas-medicas", "ensaio-fotografico-para-dentistas"],
    priority: 10,
  },
  {
    label: "Advogados e escritórios",
    keywords: ["advogado", "advocacia", "juridico", "direito", "escritorio", "socio"],
    slugs: ["fotografia-para-escritorios-de-advocacia"],
    priority: 10,
  },
  {
    label: "Eventos, feiras e confraternizações",
    keywords: ["evento", "feira", "stand", "estande", "congresso", "convencao", "palestra", "confraternizacao", "festa"],
    slugs: ["fotografo-de-eventos-corporativos", "eventos-corporativos", "fotografo-feiras-stands", "fotografo-festa-de-confraternizacao", "fotografo-festa-de-confraternizacao-1-1"],
    priority: 9,
  },
  {
    label: "Foto lembrança impressa e totem",
    keywords: [
      "totem",
      "foto lembranca impressa",
      "lembranca impressa",
      "foto lembranca",
      "foto impressa",
      "impressao",
      "lembranca",
      "recordacao",
      "ativacao",
    ],
    slugs: ["totem-fotografico-totem-mania", "foto-impressa-na-hora"],
    priority: 9,
  },
  {
    label: "Fotografia institucional e equipes",
    keywords: ["institucional", "corporativo", "empresa", "equipe", "time", "banco de imagens", "comunicacao"],
    slugs: ["fotografia-institucional-em-saopaulo", "fotografia-corporativa-em-sao-paulo", "fotografo-de-grupos-times-e-equipes", "banco-de-imagens-para-empresas", "banco-de-imagens-para-escolas"],
    priority: 8,
  },
  {
    label: "Produtos e gastronomia",
    keywords: ["produto", "gastronomia", "culinaria", "comida", "restaurante", "hamburguer", "paes", "drinks", "coqueteis"],
    slugs: ["fotografo-de-culinaria", "fotos-para-restaurantes", "fotos-de-hamburguer", "fotos-de-paes", "fotografo-de-drinks-coqueteis"],
    priority: 8,
  },
  {
    label: "Indústria e logística",
    keywords: ["industria", "industrial", "fabrica", "logistica", "operacao", "processo", "armazem"],
    slugs: ["fotografia-industrial", "fotografia-industrial-em-sp", "fotografia-de-logistica"],
    priority: 8,
  },
  {
    label: "Arquitetura, imóveis e drone",
    keywords: ["arquitetura", "interiores", "imovel", "imobiliario", "empreendimento", "drone", "aerea", "aereo"],
    slugs: ["fotografo-de-arquitetura-e-interiores", "empreendimentos-imobiliarios", "fotos-aereas"],
    priority: 8,
  },
];

export const videoTaxonomy: SearchTaxonomyEntry[] = [
  {
    label: "Vídeos institucionais",
    keywords: ["video institucional", "institucional", "empresa", "manifesto", "corporativo"],
    slugs: ["flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional", "ativa-log", "unitec-video-institucional", "video-institucional-rocha-queiroz-advogados", "video-manifesto-empreendimento-estrutura-e-proposito"],
    priority: 10,
  },
  {
    label: "Cobertura de eventos e feiras",
    keywords: ["evento", "feira", "congresso", "forum", "convencao", "encontro", "confraternizacao", "cobertura"],
    slugs: ["procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos", "video-corporativo-do-11o-forum-abradilan-2026-cobertura-de-evento-empresarial", "11-forum-abradilan-2026", "confraternizacao-abradilan", "ibde-rio2026"],
    priority: 9,
  },
  {
    label: "Retratos em vídeo",
    keywords: ["retrato", "ensaio", "profissional", "executivo", "estudio"],
    slugs: ["ensaio-de-retratos-profissionais-ale-fotografo", "retratos-profissionais-em-estudio", "retrato-corporativo-ensaio-fotografico"],
    priority: 9,
  },
  {
    label: "Indústria e logística em vídeo",
    keywords: ["industria", "fabrica", "logistica", "operacao", "centro de distribuicao"],
    slugs: ["ativa-log-estrutura-operacao-e-eficiencia-logistica", "fiorde-logistica-solucoes-logisticas-integradas-para-empresas", "nitriflex-industria-quimica-de-polimeros-especiais-e-borrachas-nitrilicas", "ativa-logistica-apresenta-o-seu-centro-de-distribuicao-em-itapevi"],
    priority: 8,
  },
  {
    label: "Depoimentos de clientes",
    keywords: ["depoimento", "cliente", "case", "testimonial"],
    slugs: ["depoimento-de-cliente-hausy-robotton-producao-ale-fotografo"],
    priority: 8,
  },
];