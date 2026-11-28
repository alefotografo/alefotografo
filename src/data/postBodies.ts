import raw from "./postBodies.json";

export interface PostImage {
  src: string;
  alt: string;
  after: number;
  credit?: string;
}

export interface PostBody {
  body: string[];
  images?: PostImage[];
  /** ID do YouTube para embed do vídeo do evento ao final do post. */
  youtube?: string;
}

const bodies = raw as Record<string, PostBody>;

/**
 * Corpo do artigo, carregado só na rota /blog/$slug. Mantido fora de
 * `@/data/catalog` para que as demais páginas não baixem ~630 KB de texto.
 */
export function postBody(slug: string): PostBody {
  return bodies[slug] ?? { body: [] };
}
