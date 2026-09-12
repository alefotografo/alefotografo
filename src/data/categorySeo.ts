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
    title: "Fotos para Clínicas Médicas em SP | Orçamento Hoje",
    description:
      "Fotógrafo de clínicas em São Paulo: fotos de ambientes, recepção, equipe e procedimentos com padrão de credibilidade. Nota 4,9 (144 avaliações) e orçamento no mesmo dia.",
  },
  "fotografia-de-logistica": {
    title: "Fotografia de Logística em SP | Armazém e Frota",
    description:
      "Fotografia de logística em São Paulo: centro de distribuição, armazém, expedição, frota e equipes em operação. Imagens prontas para site, propostas e licitações.",
  },
  "fotografia-industrial-em-sp": {
    title: "Fotografia Industrial em São Paulo | Fábrica e Produção",
    description:
      "Fotografia industrial em São Paulo: linha de produção, maquinário, equipes e ambientes de fábrica com segurança e padrão técnico. Orçamento no mesmo dia no WhatsApp.",
  },
  "fotografo-feiras-stands": {
    title: "Fotógrafo de Feiras e Stands em São Paulo",
    description:
      "Fotógrafo de feiras e stands em São Paulo: cobertura de expositores, produtos, palestras e visitantes no São Paulo Expo, Expo Center Norte e Anhembi. Prévia no mesmo dia.",
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
    title: "Fotógrafo Profissional em São Paulo | Alexandre Machado",
    description:
      "Fotógrafo profissional em São Paulo com mais de 30 anos de experiência em produções para empresas, executivos, profissionais, eventos e diferentes segmentos.",
  },
  "fotografia-corporativa-em-sao-paulo": {
    title: "Fotografia Corporativa em SP | Orçamento no Mesmo Dia",
    description:
      "Fotografia corporativa em São Paulo: retratos de equipe, ambientes e operação na sua empresa. 30 anos de experiência, nota 4,9 (144 avaliações) e prévia das fotos no mesmo dia.",
  },
  "ensaio-fotografico-para-dentistas": {
    title: "Ensaio Fotográfico para Dentistas em SP | Consultório",
    description:
      "Ensaio fotográfico para dentistas em São Paulo, no seu consultório: retratos, equipe, ambientes e procedimentos. Fotos que passam confiança ao paciente, com orçamento no mesmo dia.",
  },
  "banco-de-imagens-para-empresas": {
    title: "Banco de Imagens para Empresas | São Paulo",
    description:
      "Monte o banco de imagens da sua empresa em São Paulo: pessoas, ambientes e processos reais, com direito de uso e acervo organizado por tema. Orçamento no mesmo dia.",
  },
  "fotografo-de-retratos-profissionais": {
    title: "Banco de Imagens Corporativo | Fotografia em São Paulo",
    description:
      "Produção de banco de imagens corporativo em São Paulo com pessoas e ambientes da sua operação. Acervo consistente para site, campanhas e apresentações.",
  },
  "fotografia-institucional-em-saopaulo": {
    title: "Fotografia Institucional em SP | Empresas e Liderança",
    description:
      "Fotografia institucional em São Paulo: retratos de liderança, ambientes e processos para relatórios, sites e comunicação corporativa. Prévia no mesmo dia pelo WhatsApp.",
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

  // Galerias que antes caíam no recorte automático do texto raspado.
  "fotos-aereas": {
    title: "Fotos e Vídeo Aéreo com Drone em São Paulo",
    description:
      "Fotografia e vídeo aéreo com drone em São Paulo: obras, empreendimentos, plantas industriais e eventos. Piloto habilitado e orçamento no mesmo dia.",
  },
  "fotografo-de-culinaria": {
    title: "Fotografia de Culinária em São Paulo | Fotos de Pratos",
    description:
      "Fotografia de culinária em São Paulo: pratos, bebidas e sobremesas para cardápio, delivery e redes sociais. Luz, direção de arte e entrega rápida.",
  },
  "fotografo-de-arquitetura-e-interiores": {
    title: "Fotografia de Arquitetura e Interiores em São Paulo",
    description:
      "Fotografia de arquitetura e interiores em São Paulo: projetos residenciais, corporativos e comerciais com linhas corrigidas e luz natural valorizada.",
  },
  "banco-de-imagens-para-escolas": {
    title: "Banco de Imagens para Escolas em São Paulo",
    description:
      "Banco de imagens para escolas em São Paulo: alunos, professores, aulas e estrutura em fotos autorizadas para site, matrículas e campanhas do ano todo.",
  },
  "foto-impressa-na-hora": {
    title: "Foto Lembrança Impressa na Hora em SP | Alê Fotógrafo",
    description:
      "Foto lembrança impressa na hora em eventos corporativos em São Paulo: moldura com a sua marca, entrega em segundos e orçamento no mesmo dia.",
  },
  "fotografo-de-grupos-times-e-equipes": {
    title: "Fotógrafo de Grupos, Times e Equipes em São Paulo",
    description:
      "Foto de grupo e de equipe em São Paulo, na sua empresa ou em estúdio: direção de pose, todos nítidos e olhando para a câmera. Orçamento no mesmo dia.",
  },
  "fotografo-festa-de-confraternizacao": {
    title: "Fotógrafo para Festa da Firma em São Paulo",
    description:
      "Fotógrafo para festa de confraternização de empresas em São Paulo: chegada, brindes, premiações e clima da equipe. Prévia das fotos no mesmo dia.",
  },
  "fotografo-festa-de-confraternizacao-1-1": {
    title: "Fotografia para Festa de Confraternização em SP",
    description:
      "Cobertura fotográfica de festa de confraternização em São Paulo: retratos espontâneos, grupos e decoração. Material pronto para endomarketing e redes.",
  },
  "totem-fotografico-totem-mania": {
    title: "Totem Fotográfico para Eventos e Feiras em São Paulo",
    description:
      "Totem fotográfico para eventos corporativos e feiras em São Paulo: impressão na hora, moldura com sua marca e captura de contatos no estande.",
  },
  "fotografo-de-drinks-coqueteis": {
    title: "Fotografia de Drinks e Coquetéis em São Paulo",
    description:
      "Fotografia de drinks e coquetéis em São Paulo para bares, restaurantes e marcas de bebidas: gelo, textura e cor tratados para cardápio e redes sociais.",
  },
  "ensaio-feminino": {
    title: "Ensaio Fotográfico Feminino Corporativo em São Paulo",
    description:
      "Ensaio feminino corporativo em São Paulo: retratos com presença e naturalidade para LinkedIn, site e imprensa. Direção de pose do começo ao fim.",
  },
  "fotos-de-hamburguer": {
    title: "Fotos de Hambúrguer em São Paulo | Food Photography",
    description:
      "Fotos de hambúrguer em São Paulo para cardápio, delivery e anúncios: montagem, luz e retoque que mostram o produto do jeito que ele chega ao cliente.",
  },
  "fotos-para-restaurantes": {
    title: "Fotos para Restaurantes em São Paulo | Pratos e Ambiente",
    description:
      "Fotos para restaurantes em São Paulo: pratos, drinks, ambiente e equipe em um só dia de produção. Imagens prontas para cardápio, delivery e Google.",
  },
  "ensaio-fotografico-para-redes-sociais": {
    title: "Ensaio para Redes Sociais em São Paulo | Fotos e Vídeos",
    description:
      "Ensaio de fotos e vídeos para redes sociais em São Paulo: conteúdo em formato vertical para Instagram, reels e LinkedIn, com várias trocas de look.",
  },
  "fotos-de-paes": {
    title: "Fotos de Pães Artesanais em São Paulo | Padaria",
    description:
      "Fotografia de pães artesanais em São Paulo: casca, miolo e fermentação valorizados em imagens para padarias, cafés e marcas. Entrega rápida dos arquivos.",
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
