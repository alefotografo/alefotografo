import type { Post } from "@/data/catalog";

/**
 * Resolve a capa de um post do blog.
 *
 * Regra editorial: CAPA CORRETA OU NENHUMA CAPA.
 * Só existe capa quando o post a tem explicitamente cadastrada
 * (`post.cover`). Nenhum fallback automático (regex/tema, hash entre
 * galerias) é aplicado — um artigo sem capa definida retorna
 * `undefined` e os consumidores renderizam layout textual.
 */
export function postCover(p: Pick<Post, "slug" | "title"> & { cover?: string | null }): string | undefined {
  return p.cover || undefined;
}
