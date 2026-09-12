// Redirecionamentos 301 de URLs antigas (estrutura de path do site legado)
// para as URLs equivalentes deste site. Independem do domínio: valem para
// alefotografo.com.br (primário) e para qualquer outro host apontado ao
// projeto (redirecionado na borda pela Lovable).

import { videos, allPosts } from "@/data/catalog";

const POST_SLUGS = new Set(allPosts.map((p) => p.slug));


const VIDEO_SLUGS = new Set(videos.map((v) => v.slug));

// Vídeos que saíram do ar no YouTube e foram removidos do catálogo.
// As URLs antigas continuam respondendo com 301 para /videos.
const REMOVED_VIDEO_SLUGS = new Set([
  "beauty-fair-2026-4o-e-ultimo-dia-encerramento-da-maior-feira-de-beleza-da-americ",
  "beauty-fair-2026-2o-dia-da-maior-feira-de-beleza-da-america-latina-cobertura-pro",
  "beauty-fair-2026-cobertura-profissional-do-1o-dia-da-maior-feira-de-beleza-da-am",
  "ativa-logistica-na-abradilan-2026-cobertura-profissional-em-video-da-maior-feira",
  "abed-60-anos-cobertura-profissional-da-celebracao-com-fotografia-e-video-corpora",
  "nini-bambini-moda-infantil-com-encanto-e-estilo",
  "women-in-tech-brasil",
  "fincon-o-primeiro-encontro-da-comunicacao-financeira",
]);

// Slugs de galeria que mudaram de nome no site novo.
const CATEGORY_ALIASES: Record<string, string> = {
  "banco-de-imagem-corporativo": "banco-de-imagens-para-empresas",
  "fotografo-festa-da-firma": "fotografo-festa-de-confraternizacao",
  // Consolidação de duplicidades (lote 1): sinais concentrados nas URLs
  // com desempenho orgânico superior no Search Console.
  "fotografia-industrial": "fotografia-industrial-em-sp",
  "fotografo-de-retratos-profissionais": "banco-de-imagens-para-empresas",
  "eventos-corporativos": "fotografo-de-eventos-corporativos",
};

// Resolve alias de categoria para o slug final (evita cadeia de 301).
function canonicalCategory(slug: string): string {
  return CATEGORY_ALIASES[slug] ?? slug;
}

// Slugs de categoria válidos no site novo (usados pelas regras dinâmicas).
const CATEGORY_SLUGS = new Set([
  "fotos-aereas",
  "fotografia-industrial",
  "fotografo-de-culinaria",
  "fotografo-de-arquitetura-e-interiores",
  "fotografia-industrial-em-sp",
  "banco-de-imagens-para-escolas",
  "retrato-corporativo",
  "fotografia-institucional-em-saopaulo",
  "fotografo-de-retratos-profissionais",
  "fotografo-feiras-stands",
  "eventos-corporativos",
  "foto-impressa-na-hora",
  "fotografo-de-grupos-times-e-equipes",
  "fotografo-festa-de-confraternizacao",
  "totem-fotografico-totem-mania",
  "fotografo-de-drinks-coqueteis",
  "fotografo-de-eventos-corporativos",
  "fotografo-de-retratos-corporativos",
  "fotografo-profissional-em-sao-paulo",
  "fotografia-corporativa-em-sao-paulo",
  "fotografia-de-logistica",
  "banco-de-imagens-para-empresas",
  "ensaio-feminino",
  "fotografia-para-escritorios-de-advocacia",
  "fotos-de-hamburguer",
  "fotos-para-restaurantes",
  "empreendimentos-imobiliarios",
  "fotos-profissionais-para-medicos",
  "ensaio-fotografico-para-redes-sociais",
  "retratos-de-medicos",
  "retratos-de-medicas",
  "ensaio-fotografico-para-dentistas",
  "fotos-para-clinicas-medicas",
  "fotos-de-paes",
]);

// Rotas comerciais próprias deste site: nunca podem cair nas regras dinâmicas
// de categoria (ex.: /eventos-corporativos também é slug de galeria).
const OWN_ROUTES = new Set([
  "/eventos-corporativos",
  "/fotografia-executiva",
  "/fotos-profissionais-medicos",
  "/fotografia-para-advogados",
  "/fotos-corporativas",
  "/foto-profissional",
  "/foto-profissional-para-linkedin",
  "/fotografia-para-clinicas",
]);

// Mapeamentos exatos.
const EXACT: Record<string, string> = {
  "/videos-para-empresas": "/videos",
  "/videos-corporativos": "/videos",
  "/video-corporativo": "/videos",
  "/video-institucional": "/videos",
  "/videos-institucionais": "/videos",
  "/filmagem-corporativa": "/videos",
  "/producao-de-video": "/videos",
  "/portfolio-do-fotografo": "/fotografo-corporativo",
  "/loja": "/contato",
  "/orcamento": "/contato",
  "/fale-conosco": "/contato",
  "/sobre-o-ale": "/quem-e-o-ale",
  // Aliases comerciais → páginas canônicas
  "/fotografia-corporativa-sao-paulo": "/fotos-corporativas",
  "/fotografia-corporativa": "/fotos-corporativas",
  "/fotos-corporativa": "/fotos-corporativas",
  "/fotos-corporativas-sao-paulo": "/fotos-corporativas",
  "/fotografia-empresarial": "/fotos-corporativas",
  "/fotos-empresariais": "/fotos-corporativas",
  "/fotografo-corporativo-sao-paulo": "/fotografo-corporativo",
  "/foto-profissional-sao-paulo": "/foto-profissional",
  "/foto-para-linkedin": "/foto-profissional-para-linkedin",
  "/fotografo-corporativo/fotografo-de-linkedin": "/foto-profissional-para-linkedin",
  "/fotos-para-medicos": "/fotos-profissionais-medicos",
  "/fotografia-para-medicos": "/fotos-profissionais-medicos",
  "/fotos-para-advogados": "/fotografia-para-advogados",
  "/retrato-executivo": "/fotografia-executiva",
  // Estrutura do WordPress antigo (auditoria 27/08/2026: respondiam 404)
  "/index.php": "/",
  "/feed": "/blog/rss.xml",
  "/blog/feed": "/blog/rss.xml",
  "/comments/feed": "/blog",
  "/sitemap_index.xml": "/sitemap-index.xml",
  "/wp-sitemap.xml": "/sitemap-index.xml",
  "/contact": "/contato",
};



function normalize(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/**
 * Retorna o caminho de destino (ou undefined quando não há redirect).
 */
export function resolveLegacyPath(pathname: string): string | undefined {
  const path = normalize(pathname);

  // Rotas próprias: apenas normalização de barra final (301), sem regras legadas.
  if (OWN_ROUTES.has(path)) return path !== pathname ? path : undefined;

  const exact = EXACT[path];
  if (exact) return exact;

  // /portfolio-do-fotografo/{slug} → /fotografo-corporativo/{slug}
  const portfolio = path.match(/^\/portfolio-do-fotografo\/([^/]+)$/);
  if (portfolio) {
    const slug = portfolio[1];
    return CATEGORY_SLUGS.has(slug)
      ? `/fotografo-corporativo/${canonicalCategory(slug)}`
      : "/fotografo-corporativo";
  }

  // /videos-para-empresas/{slug} → /videos/{slug} (ou índice de vídeos)
  const legacyVideo = path.match(/^\/(?:videos-para-empresas|videos-corporativos)\/([^/]+)$/);
  if (legacyVideo) {
    const slug = legacyVideo[1];
    return VIDEO_SLUGS.has(slug) ? `/videos/${slug}` : "/videos";
  }

  // Vídeos removidos do YouTube (indisponíveis) → índice de vídeos
  const removedVideo = path.match(/^\/videos\/([^/]+)$/);
  if (removedVideo && REMOVED_VIDEO_SLUGS.has(removedVideo[1])) return "/videos";


  // Loja antiga (pacotes) → página de contato/orçamento
  if (/^\/loja\//.test(path)) return "/contato";

  // Galerias renomeadas
  const gallery = path.match(/^\/fotografo-corporativo\/([^/]+)$/);
  if (gallery && CATEGORY_ALIASES[gallery[1]]) {
    return `/fotografo-corporativo/${CATEGORY_ALIASES[gallery[1]]}`;
  }
  // Aliases de galeria fora do prefixo
  const bareAlias = path.match(/^\/([^/]+)$/);
  if (bareAlias && CATEGORY_ALIASES[bareAlias[1]]) {
    return `/fotografo-corporativo/${CATEGORY_ALIASES[bareAlias[1]]}`;
  }

  // Categorias de blog do WordPress antigo → índice do blog
  if (/^\/blog\/(categoria|category|tag)\//.test(path)) return "/blog";

  // Páginas de tags do WordPress antigo (/blog/tags?tag=...) → índice do blog
  if (/^\/blog\/tags?$/.test(path)) return "/blog";

  // Paginação antiga do blog (/blog/page/2) → índice
  if (/^\/blog\/page\/\d+$/.test(path)) return "/blog";

  // Categoria fora do prefixo (/{slug} de categoria conhecida)
  const bare = path.match(/^\/([^/]+)$/);
  if (bare && CATEGORY_SLUGS.has(bare[1])) {
    return `/fotografo-corporativo/${canonicalCategory(bare[1])}`;
  }

  // Arquivos do WordPress antigo: /category/{slug}, /tag/{slug}, /author/{slug}
  const wpCat = path.match(/^\/category\/([^/]+)$/);
  if (wpCat) {
    return CATEGORY_SLUGS.has(wpCat[1])
      ? `/fotografo-corporativo/${wpCat[1]}`
      : "/blog";
  }
  if (/^\/(?:tag|tags|author|arquivo|archives)\/[^/]+$/.test(path)) return "/blog";

  // Permalinks com data do WordPress: /2021/05/slug ou /2021/05/12/slug
  const dated = path.match(/^\/\d{4}\/\d{2}(?:\/\d{2})?\/([^/]+)$/);
  if (dated) {
    return POST_SLUGS.has(dated[1]) ? `/blog/${dated[1]}` : "/blog";
  }

  // Feeds RSS por página do WordPress (/qualquer-coisa/feed)
  const feed = path.match(/^\/(.+)\/feed$/);
  if (feed) return "/blog/rss.xml";


  // Normalização de barra final
  if (path !== pathname) return path;

  return undefined;
}
