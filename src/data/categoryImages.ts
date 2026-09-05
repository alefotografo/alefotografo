import raw from "./categoryImages.json";

const byCategory = raw as Record<string, string[]>;

/**
 * Lista completa de fotos de uma galeria (~330 KB no total). Vive fora de
 * `@/data/catalog` e é carregada por import dinâmico apenas na rota da
 * galeria, para que nenhuma outra página baixe esse peso.
 */
export function categoryImages(slug: string): string[] {
  return byCategory[slug] ?? [];
}
