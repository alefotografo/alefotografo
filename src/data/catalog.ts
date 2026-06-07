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
  "9faznegocios",
  "video-institucional-bmx-logistica",
  "ativa-logistica-unidade-barueri",
  "video-institucional-rocha-queiroz-advogados",
  "sq-quimica-unidade-vinhedo",
  "galena-35-anos",
  "unitec-video-institucional",
  "retratos-profissionais-em-estudio",
  "ibis-botucatu-video-manifesto",
  "teaser-ibis-botucatu-sp",
  "ensaio-de-retratos-profissionais-ale-fotografo",
  "9-forum-abradilan",
  "retrato-corporativo-ensaio-fotografico",
  "galena-celebra",
  "15-convencao-abradilan-barcelo-bavaro-palace-punta-cana-01-a-06-nov-2022",
  "professora-rita-curso-de-prestacao-de-contas-eleitorais-2024",
  "ibde-mendoza-iii-congresso-internacional",
  "encontro-farmarcas-2023",
  "abradilan-25-anos",
  "convencao-de-vendas-2023-tecnisa",
  "faz-negocios-3",
  "festa-de-confraternizacao-2022-tecnisa",
  "encontro-farmarcas-2022",
  "ii-congreso-brasileiro-de-direito-da-empresa",
  "sq-quimica-34-premio-sitivesp-de-fornecedor-do-ano",
  "onemba-class-2023-sao-paulo",
  "sipat-2022-foseco",
  "i-congresso-brasileiro-de-direito-da-empresa-no-novo-futebol-ibde",
  "ativa-logistiva-video-do-programa-de-sustentabilidade",
  "sq-quimica-na-abrafati-show-2022",
  "confraternizacao-abradilan",
  "salomao-concursos-aulao-em-sao-paulo",
  "7-forum-abradilan",
  "curso-de-prestacao-de-contas-eleitorais-com-a-professora-rita-goncalves",
  "latin-sales-meeting-2022-em-punta-cana",
  "jantar-febrafar-2022",
  "renove-mudancas",
  "sitivesp-80-anos",
  "video-escritorio-rocha-e-queiroz",
  "sustainable-foods-summit-edicao-sao-paulo",
  "ativa-logistica",
  "passion-for-excellence-latam-sales-meeting-2021-convatec",
  "video-de-boas-festas-da-ativalog",
  "encontro-de-craques-germed-1",
  "video-corporativo-fcw-premio-almirante-alvaro-alberto",
  "ativa-logistica-apresenta-o-seu-centro-de-distribuicao-em-itapevi",
  "teaser-de-melhores-momentos-do-kick-off-bom-pra-credito",
  "lobtec-35-anos",
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
  email: "contato@alefotografo.com.br",
  instagram: "https://www.instagram.com/alefotografo",
  linkedin: "https://www.linkedin.com/in/alexandremachadofotografo",
  originalUrl: "https://alefotografo.com.br",
};
