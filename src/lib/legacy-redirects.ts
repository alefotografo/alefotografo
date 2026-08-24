// Redirecionamentos 301 do site antigo (alefotografo.com.br) para as URLs
// equivalentes deste site (alefotografos.com.br). Também funcionam quando o
// domínio antigo é apontado para esta aplicação.

import { videos } from "@/data/catalog";

const VIDEO_SLUGS = new Set(videos.map((v) => v.slug));

// Slugs de galeria que mudaram de nome no site novo.
const CATEGORY_ALIASES: Record<string, string> = {
  "banco-de-imagem-corporativo": "banco-de-imagens-para-empresas",
  "fotografo-festa-da-firma": "fotografo-festa-de-confraternizacao",
};

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
  "/portfolio-do-fotografo": "/fotografo-corporativo",
  "/loja": "/contato",
  "/orcamento": "/contato",
  "/fale-conosco": "/contato",
  "/sobre-o-ale": "/quem-e-o-ale",
  // Aliases comerciais → páginas canônicas
  "/fotografia-corporativa-sao-paulo": "/fotos-corporativas",
  "/foto-profissional-sao-paulo": "/foto-profissional",
  "/foto-para-linkedin": "/foto-profissional-para-linkedin",
  "/fotos-para-medicos": "/fotos-profissionais-medicos",
  "/fotografia-para-medicos": "/fotos-profissionais-medicos",
  "/fotos-para-advogados": "/fotografia-para-advogados",
  "/retrato-executivo": "/fotografia-executiva",
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

  if (OWN_ROUTES.has(path)) return undefined;

  const exact = EXACT[path];
  if (exact) return exact;

  // /portfolio-do-fotografo/{slug} → /fotografo-corporativo/{slug}
  const portfolio = path.match(/^\/portfolio-do-fotografo\/([^/]+)$/);
  if (portfolio) {
    const slug = portfolio[1];
    return CATEGORY_SLUGS.has(slug)
      ? `/fotografo-corporativo/${slug}`
      : "/fotografo-corporativo";
  }

  // /videos-para-empresas/{slug} → /videos/{slug} (ou índice de vídeos)
  const legacyVideo = path.match(/^\/(?:videos-para-empresas|videos-corporativos)\/([^/]+)$/);
  if (legacyVideo) {
    const slug = legacyVideo[1];
    return VIDEO_SLUGS.has(slug) ? `/videos/${slug}` : "/videos";
  }

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

  // Paginação antiga do blog (/blog/page/2) → índice
  if (/^\/blog\/page\/\d+$/.test(path)) return "/blog";

  // Categoria fora do prefixo (/{slug} de categoria conhecida)
  const bare = path.match(/^\/([^/]+)$/);
  if (bare && CATEGORY_SLUGS.has(bare[1])) {
    return `/fotografo-corporativo/${bare[1]}`;
  }

  // Normalização de barra final
  if (path !== pathname) return path;

  return undefined;
}
