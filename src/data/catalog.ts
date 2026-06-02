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

export const categories: Category[] = data.cats.map(cleanItem);
export const videos: Video[] = data.vids.map(cleanItem).filter((v) => !v.vimeo);
export const posts: Post[] = data.posts.map((p) => ({
  ...cleanItem(p),
  body: p.body.map(decode),
}));

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const videoBySlug = (slug: string) => videos.find((v) => v.slug === slug);
export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const site = {
  name: "Alê Fotógrafo",
  fullName: "Alexandre Machado — Alê Fotógrafo",
  tagline: "Fotografia e vídeo corporativo em São Paulo",
  description:
    "Fotógrafo corporativo em São Paulo com mais de 30 anos de experiência. Retratos profissionais, fotografia para empresas, cobertura de eventos e vídeo institucional.",
  city: "São Paulo",
  state: "SP",
  whatsapp: "5511999999999", // placeholder — atualize com o número real
  email: "contato@alefotografo.com.br",
  instagram: "https://www.instagram.com/alefotografo",
  linkedin: "https://www.linkedin.com/in/alexandremachadofotografo",
  originalUrl: "https://alefotografo.com.br",
};
