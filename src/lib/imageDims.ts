import dims from "@/data/imageDims.json";

/**
 * Dimensões naturais (largura x altura) medidas nas fotos usadas nos artigos.
 * Serve para declarar width/height no <img> e eliminar salto de layout (CLS)
 * onde a foto não está dentro de um contêiner de proporção fixa.
 */
const MAP = dims as unknown as Record<string, number[]>;

export function naturalDims(src: string): { width: number; height: number } | undefined {
  const d = MAP[src];
  if (!d) return undefined;
  return { width: d[0], height: d[1] };
}
