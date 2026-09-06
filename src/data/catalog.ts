import catsRaw from "./catalog.cats.json";
import vidsRaw from "./catalog.vids.json";
import postsRaw from "./catalog.posts.json";
import { clockReady, isPublishedDate } from "@/lib/postDate";
import { lazyList } from "@/lib/lazyList";
export { site } from "./site";

/**
 * Os três arquivos JSON já vêm decodificados (sem entidades HTML) e na ordem
 * editorial final — a normalização é feita na geração dos dados, não em tempo
 * de execução. Assim nenhuma página paga CPU para decodificar texto no boot, e
 * cada rota só baixa a fatia de catálogo que realmente usa: uma página que lê
 * apenas `categories` não carrega vídeos nem artigos.
 */

export interface Category {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  seo_title: string;
  /** Quantidade de fotos da galeria; a lista vive em `@/data/categoryImages`. */
  image_count: number;
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

/**
 * Índice de artigo — sem o corpo do texto. O corpo e as imagens internas
 * vivem em `@/data/postBodies` e só são carregados pela rota /blog/$slug,
 * mantendo ~630 KB fora do JS de todas as outras páginas.
 */
export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  seo_title: string;
  cover: string | null;
  /** Crédito da capa, quando a imagem exige atribuição (ex.: Unsplash). */
  cover_credit?: string | null;
}

/** Categorias na ordem oficial de /fotografo-corporativo. */
export const categories = catsRaw as Category[];

/** Vídeos na ordem oficial de /videos-para-empresas (somente YouTube). */
export const videos = vidsRaw as Video[];

/**
 * Conjunto completo de artigos, cronológico desc — uso interno (gate,
 * relatório, resolução de slug). Não deve alimentar listagens públicas: pode
 * conter registros datados no futuro.
 */
export const allPosts = postsRaw as Post[];

// Ordem oficial dos destaques do blog conforme alefotografo.com.br/blog
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

/**
 * Publicação: somente registros com data <= hoje (America/Sao_Paulo),
 * cronológico desc. Avaliado sob demanda: no runtime de edge o relógio não é
 * confiável durante a inicialização do módulo e o gate zeraria a lista.
 *
 * `@__PURE__` permite ao empacotador descartar a lista (e o JSON de artigos)
 * nas páginas que não a usam.
 */
export const posts: Post[] = /* @__PURE__ */ lazyList(
  () => allPosts.filter((p) => isPublishedDate(p.date)),
  clockReady,
);

/** Registros atualmente datados no futuro — fora de toda superfície pública. */
export const scheduledPosts: Post[] = /* @__PURE__ */ lazyList(
  () => allPosts.filter((p) => !isPublishedDate(p.date)),
  clockReady,
);

/**
 * Destaque editorial: curadoria manual (POST_ORDER), independente da data.
 * Sempre filtrado pelo gate; nunca altera a data de um artigo.
 */
export const featuredPosts: Post[] = /* @__PURE__ */ lazyList(
  () => [
    ...POST_ORDER.map((slug) => posts.find((p) => p.slug === slug)).filter(
      (p): p is Post => Boolean(p),
    ),
    ...posts.filter((p) => !POST_ORDER.includes(p.slug)),
  ],
  clockReady,
);

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const videoBySlug = (slug: string) => videos.find((v) => v.slug === slug);
// Resolve apenas artigos publicados: registro datado no futuro devolve
// undefined e a rota /blog/$slug responde 404 (sem expor o conteúdo).
export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
/** Resolução sem gate — uso interno/relatório, nunca em rota pública. */
export const anyPostBySlug = (slug: string) => allPosts.find((p) => p.slug === slug);
