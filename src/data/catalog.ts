import raw from "./catalog.json";

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  seo_title: string;
  images: string[];
  cover: string | null;
}

export interface Video {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  seo_title: string;
  youtube: string | null;
  vimeo: string | null;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  seo_title: string;
  cover: string | null;
  body: string[];
  images?: { src: string; alt: string; after: number }[];
}

const data = raw as { cats: Category[]; vids: Video[]; posts: Post[] };

// Decode common HTML entities present in scraped descriptions
function decode(s: string): string {
  if (!s) return s;
  return s
    .replace(/&ccedil;/g, "ç").replace(/&Ccedil;/g, "Ç")
    .replace(/&atilde;/g, "ã").replace(/&Atilde;/g, "Ã")
    .replace(/&otilde;/g, "õ").replace(/&Otilde;/g, "Õ")
    .replace(/&aacute;/g, "á").replace(/&Aacute;/g, "Á")
    .replace(/&eacute;/g, "é").replace(/&Eacute;/g, "É")
    .replace(/&iacute;/g, "í").replace(/&Iacute;/g, "Í")
    .replace(/&oacute;/g, "ó").replace(/&Oacute;/g, "Ó")
    .replace(/&uacute;/g, "ú").replace(/&Uacute;/g, "Ú")
    .replace(/&acirc;/g, "â").replace(/&Acirc;/g, "Â")
    .replace(/&ecirc;/g, "ê").replace(/&Ecirc;/g, "Ê")
    .replace(/&ocirc;/g, "ô").replace(/&Ocirc;/g, "Ô")
    .replace(/&agrave;/g, "à").replace(/&Agrave;/g, "À")
    .replace(/&ordf;/g, "ª").replace(/&ordm;/g, "º")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function cleanItem<T extends { description?: string; seo_title?: string; subtitle?: string; title?: string }>(x: T): T {
  return {
    ...x,
    title: x.title ? decode(x.title) : x.title,
    subtitle: x.subtitle ? decode(x.subtitle) : x.subtitle,
    description: x.description ? decode(x.description) : x.description,
    seo_title: x.seo_title ? decode(x.seo_title) : x.seo_title,
  };
}

// Ordem oficial das categorias conforme alefotografo.com.br/fotografo-corporativo
const CATEGORY_ORDER: string[] = [
  "fotografia-para-escritorios-de-advocacia",
  "ensaio-feminino",
  "retrato-corporativo",
  "retratos-de-medicos",
  "retratos-de-medicas",
  "fotos-para-clinicas-medicas",
  "fotografia-corporativa-em-sao-paulo",
  "fotografo-de-eventos-corporativos",
  "fotografo-feiras-stands",
  "totem-fotografico-totem-mania",
  "foto-impressa-na-hora",
  "fotografia-de-logistica",
  "ensaio-fotografico-para-dentistas",
  "fotografo-de-arquitetura-e-interiores",
  "banco-de-imagens-para-empresas",
  "fotografia-institucional-em-saopaulo",
  "ensaio-fotografico-para-redes-sociais",
  "fotos-aereas",
  "empreendimentos-imobiliarios",
  "fotografo-de-retratos-profissionais",
  "eventos-corporativos",
  "fotografo-festa-de-confraternizacao",
  "fotografo-festa-de-confraternizacao-1-1",
  "fotografo-profissional-em-sao-paulo",
  "banco-de-imagens-para-escolas",
  "fotografo-de-grupos-times-e-equipes",
  "fotografia-industrial",
  "fotos-de-paes",
  "fotos-de-hamburguer",
  "fotografo-de-drinks-coqueteis",
  "fotografo-de-culinaria",
  "fotos-para-restaurantes",
  "fotografo-de-retratos-corporativos",
  "fotografia-industrial-em-sp",
  "fotos-profissionais-para-medicos",
];

export const categories: Category[] = data.cats.map(cleanItem).sort((a, b) => {
  const ia = CATEGORY_ORDER.indexOf(a.slug);
  const ib = CATEGORY_ORDER.indexOf(b.slug);
  return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
});
// Ordem oficial dos vídeos conforme alefotografo.com.br/videos-para-empresas
const VIDEO_ORDER: string[] = [
  "beauty-fair-2026-3o-dia-tendencias-lancamentos-e-os-melhores-momentos-da-feira",
  "flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional",
  "procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos",
  "sq-quimica-na-fce-pharma-cobertura-profissional-de-feira-de-negocios-com-fotogra",
  "sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c",
  "g-tech-na-conexao-farma-2023-inovacao-tecnologia-e-solucoes-para-a-saude",
  "ativa-logistica-30-anos",
  "tecnisa-almoco-com-fornecedores",
  "curso-de-prestacao-de-contas-eleitorais-2026-turma-sao-paulo",
  "unipac-50-anos",
  "genesis-inteligencia-artificial-na-feira-hospitalar",
  "11-forum-abradilan-2026",
  "video-corporativo-do-11o-forum-abradilan-2026-cobertura-de-evento-empresarial",
  "nitriflex-industria-quimica-de-polimeros-especiais-e-borrachas-nitrilicas",
  "flexfunds-fundos-de-investimento-e-solucoes-financeiras-para-o-mercado-corporati",
  "fiorde-logistica-solucoes-logisticas-integradas-para-empresas",
  "ativa-log",
  "video-manifesto-empreendimento-estrutura-e-proposito",
  "ibis-jau-evento-experiencia-e-producao-audiovisual-ale-fotografo",
  "curso-de-prestacao-de-contas-eleitorais-2026-com-professora-rita-producao-ale-fotografo",
  "ibde-rio2026",
  "onemba",
  "22-forum-de-comprasive-university",
  "9faznegocios",
  "depoimento-de-cliente-hausy-robotton-producao-ale-fotografo",
  "video-institucional-bmx-logistica",
  "9-forum-abradilan",
  "professora-rita-curso-de-prestacao-de-contas-eleitorais-2024",
  "unitec-video-institucional",
  "ativa-log-estrutura-operacao-e-eficiencia-logistica",
  "ibde-mendoza-iii-congresso-internacional",
  "abradilan-25-anos",
  "encontro-farmarcas-2023",
  "15-convencao-abradilan-barcelo-bavaro-palace-punta-cana-01-a-06-nov-2022",
  "convencao-de-vendas-2023-tecnisa",
  "copapharma-coquetel-de-lancamento",
  "faz-negocios-3",
  "festa-de-confraternizacao-2022-tecnisa",
  "ii-congreso-brasileiro-de-direito-da-empresa",
  "sq-quimica-34-premio-sitivesp-de-fornecedor-do-ano",
  "onemba-class-2023-sao-paulo",
  "galena-celebra",
  "sipat-2022-foseco",
  "sq-quimica-unidade-vinhedo",
  "encontro-farmarcas-2022",
  "i-congresso-brasileiro-de-direito-da-empresa-no-novo-futebol-ibde",
  "galena-35-anos",
  "ativa-logistiva-video-do-programa-de-sustentabilidade",
  "sq-quimica-na-abrafati-show-2022",
  "ensaio-de-retratos-profissionais-ale-fotografo",
  "confraternizacao-abradilan",
  "7-forum-abradilan",
  "retratos-profissionais-em-estudio",
  "retrato-corporativo-ensaio-fotografico",
  "teaser-ibis-botucatu-sp",
  "ibis-botucatu-video-manifesto",
  "curso-de-prestacao-de-contas-eleitorais-com-a-professora-rita-goncalves",
  "latin-sales-meeting-2022-em-punta-cana",
  "jantar-febrafar-2022",
  "salomao-concursos-aulao-em-sao-paulo",
  "renove-mudancas",
  "sitivesp-80-anos",
  "video-escritorio-rocha-e-queiroz",
  "passion-for-excellence-latam-sales-meeting-2021-convatec",
  "ativa-logistica",
  "video-institucional-rocha-queiroz-advogados",
  "video-de-boas-festas-da-ativalog",
  "sustainable-foods-summit-edicao-sao-paulo",
  "encontro-de-craques-germed-1",
  "ativa-logistica-apresenta-o-seu-centro-de-distribuicao-em-itapevi",
  "video-corporativo-fcw-premio-almirante-alvaro-alberto",
];

export const videos: Video[] = data.vids
  .map(cleanItem)
  .filter((v) => !v.vimeo)
  .sort((a, b) => {
    const ia = VIDEO_ORDER.indexOf(a.slug);
    const ib = VIDEO_ORDER.indexOf(b.slug);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

// Ordem oficial dos posts conforme alefotografo.com.br/blog
const POST_ORDER: string[] = [
  "fotografia-imobiliaria-corporativa-aceleracao-vendas",
  "foto-perfil-linkedin-gestor-contratos",
  "10-lugares-em-sao-paulo-para-tirar-boas-fotos",
  "fotografo-5-poses-para-retrato-corporativo",
  "os-6-melhores-aplicativos-para-editar-videos-pelo-celular",
  "7-lugares-incriveis-para-tirar-fotos-profissionais-em-sao-paulo",
  "seu-icloud-esta-cheio-5-dicas-para-voce-ganhar-mais-armazenamento-para-suas-fotos-e-videos",
  "7-dicas-para-maximizar-seu-perfil-no-linkedin",
  "psicologia-das-cores-e-fotografia-saiba-como-elas-interagem",
  "como-manter-sua-imagem-profissional-em-tempos-de-home-office",
  "linkedin-como-criar-um-perfil-campeao-e-bombar-na-rede-de-negocios",
  "posicionamento-de-imagem-profissional-o-que-e-e-como-aplicar",
  "headhunter-o-que-e-o-que-faz-e-qual-seu-papel-no-mundo-corporativo",
  "linguagem-corporal-na-fotografia-de-retratos",
];

export const posts: Post[] = data.posts
  .map((p) => ({ ...cleanItem(p), body: p.body.map(decode) }))
  .sort((a, b) => {
    const ia = POST_ORDER.indexOf(a.slug);
    const ib = POST_ORDER.indexOf(b.slug);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const videoBySlug = (slug: string) => videos.find((v) => v.slug === slug);
export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const site = {
  name: "Alê Fotógrafo",
  fullName: "Alexandre Machado — Alê Fotógrafo",
  tagline: "Fotografia e vídeo corporativo em São Paulo",
  description:
    "Fotógrafo corporativo em São Paulo, 30 anos de experiência: retratos profissionais, fotografia para empresas, eventos e vídeo institucional.",
  city: "São Paulo",
  state: "SP",
  whatsapp: "5511913550533",
  phoneDisplay: "11913550533",
  email: "comercial@alefotografo.com.br",
  instagram: "https://www.instagram.com/alefotografo",
  linkedin: "https://www.linkedin.com/in/alefotografo",
  originalUrl: "https://alefotografo.com.br",
  cnpj: "03230626/0001-82",
  foundingYear: 1995,
  address: {
    street: "Alameda Santos, 1165",
    district: "Jardim Paulista",
    locality: "São Paulo",
    region: "SP",
    postalCode: "01419-002",
    country: "BR",
  },
  geo: {
    lat: "-23.5640870",
    lon: "-46.6553543",
  },
};
