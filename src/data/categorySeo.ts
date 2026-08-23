// Títulos e descrições de busca escritos à mão para as galerias com maior
// volume de impressões no Google. Sem override, usamos um fallback limpo
// gerado a partir da descrição da galeria.

export interface CategorySeo {
  title: string;
  description: string;
}

export const categorySeo: Record<string, CategorySeo> = {
  "retrato-corporativo": {
    title: "Retrato Corporativo em SP | Orçamento no Mesmo Dia",
    description:
      "Retrato corporativo em São Paulo e Grande SP: direção de pose, luz e edição para LinkedIn e site. 30 anos de experiência, nota 4,9 (144 avaliações) e orçamento no mesmo dia.",
  },
  "fotografo-de-retratos-corporativos": {
    title: "Retratos Profissionais em São Paulo | Ensaio Executivo",
    description:
      "Ensaio de retratos profissionais em São Paulo, em estúdio ou na sua empresa. Fotos com naturalidade e padrão executivo para currículo, LinkedIn e mídia.",
  },
  "fotos-para-clinicas-medicas": {
    title: "Fotografia para Clínicas Médicas em São Paulo",
    description:
      "Fotos para clínicas médicas em São Paulo: ambientes, equipe e procedimentos com padrão de credibilidade. Imagens prontas para site, Google e redes sociais.",
  },
  "fotos-profissionais-para-medicos": {
    title: "Fotos Profissionais para Médicos em São Paulo",
    description:
      "Retratos profissionais para médicos e médicas em São Paulo: jaleco, consultório ou estúdio. Fotos que transmitem confiança para pacientes e convênios.",
  },
  "retratos-de-medicos": {
    title: "Retratos de Médicos em São Paulo | Fotógrafo Médico",
    description:
      "Sessão de retratos para médicos em São Paulo, no consultório ou em estúdio. Direção de imagem, tratamento profissional e entrega rápida dos arquivos.",
  },
  "retratos-de-medicas": {
    title: "Retratos de Médicas em São Paulo | Fotografia Profissional",
    description:
      "Retratos profissionais para médicas em São Paulo com direção de pose e luz. Fotos elegantes para consultório, redes sociais, LinkedIn e imprensa.",
  },
  "fotografo-profissional-em-sao-paulo": {
    title: "Fotografia Empresarial em São Paulo | Fotógrafo Profissional",
    description:
      "Fotografia empresarial em São Paulo: equipes, ambientes, produtos e eventos. Um fotógrafo profissional para abastecer site, campanhas e redes da empresa.",
  },
  "fotografia-corporativa-em-sao-paulo": {
    title: "Fotografia Corporativa em São Paulo | Empresas e Equipes",
    description:
      "Fotografia corporativa em São Paulo para empresas de todos os portes: retratos de equipe, ambientes e operação. Padrão editorial e entrega rápida.",
  },
  "banco-de-imagens-para-empresas": {
    title: "Banco de Imagens para Empresas em São Paulo",
    description:
      "Criação de banco de imagens próprio para empresas em São Paulo: pessoas, ambientes e processos reais, com direito de uso e organização por temas.",
  },
  "fotografo-de-retratos-profissionais": {
    title: "Banco de Imagens Corporativo | Fotografia em São Paulo",
    description:
      "Produção de banco de imagens corporativo em São Paulo com pessoas e ambientes da sua operação. Acervo consistente para site, campanhas e apresentações.",
  },
  "fotografia-institucional-em-saopaulo": {
    title: "Fotografia Institucional em São Paulo | Empresas",
    description:
      "Fotografia institucional em São Paulo: retratos de liderança, ambientes e processos para relatórios, sites e materiais de comunicação corporativa.",
  },
  "eventos-corporativos": {
    title: "Fotógrafo de Eventos Empresariais em São Paulo",
    description:
      "Cobertura fotográfica de eventos empresariais em São Paulo: convenções, palestras, kick-offs e premiações. Seleção no mesmo dia e entrega em 48h.",
  },
  "fotografo-de-eventos-corporativos": {
    title: "Fotógrafo de Eventos Corporativos em São Paulo",
    description:
      "Fotógrafo de eventos corporativos em São Paulo com registro estratégico de palco, plateia, networking e patrocinadores. Prévia rápida para redes sociais.",
  },
  "fotografia-industrial": {
    title: "Fotografia Industrial em São Paulo | Indústrias e Plantas",
    description:
      "Fotografia industrial em São Paulo: linhas de produção, equipamentos e equipes em operação, com segurança e padrão técnico para catálogos e sites.",
  },
  "fotografia-para-escritorios-de-advocacia": {
    title: "Fotografia para Escritórios de Advocacia em São Paulo",
    description:
      "Fotos para escritórios de advocacia em São Paulo: retratos de sócios, equipe e ambientes com sobriedade e autoridade para site, LinkedIn e imprensa.",
  },
  "empreendimentos-imobiliarios": {
    title: "Fotografia de Empreendimentos Imobiliários em SP",
    description:
      "Fotografia de empreendimentos imobiliários em São Paulo: fachadas, áreas comuns, decorados e obra. Imagens para lançamentos, portais e material de venda.",
  },
};

/** Limpa descrições longas raspadas do site antigo para uso em meta description. */
export function cleanDescription(raw: string, max = 158): string {
  const lines = raw
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l.length > 0 && !/^\d{2}\/\d{2}\/\d{4}$/.test(l));

  // A primeira linha costuma ser um título repetido; junta as frases seguintes.
  const sentences = lines.slice(1).join(" ") || lines.join(" ");
  const text = sentences.replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(", "), cut.lastIndexOf(" "));
  return cut.slice(0, stop > 80 ? stop : max).replace(/[.,;:!?-]+$/, "") + "…";
}
