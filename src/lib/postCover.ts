import type { Post } from "@/data/catalog";
import { curatedCovers } from "@/data/postCovers";

/**
 * Resolve a capa de um post do blog.
 *
 * Regra editorial: CAPA CORRETA OU NENHUMA CAPA.
 * Ordem de resolução:
 *   1. `post.cover` — capa própria cadastrada no catálogo;
 *   2. `curatedCovers[slug]` — foto real do acervo escolhida à mão pelo
 *      tema do artigo (`src/data/postCovers.ts`);
 *   3. `undefined` — nenhum fallback automático (regex/tema, hash entre
 *      galerias). O artigo renderiza layout textual.
 */
export function postCover(p: Pick<Post, "slug" | "title"> & { cover?: string | null }): string | undefined {
  return p.cover || curatedCovers[p.slug] || undefined;
}

