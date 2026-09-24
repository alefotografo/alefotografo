import { useState } from "react";
import { SmartImage } from "@/components/site/SmartImage";
import categoryDims from "@/data/categoryImageDims.json";

// Dimensões reais medidas nas fotos das galerias (scripts/gen-category-image-dims.py).
// Cada item reserva, antes de carregar, a proporção real da própria foto —
// é o que elimina o reflow/tremor quando a imagem conclui o download.
const GALLERY_DIMS = categoryDims as unknown as Record<string, number[]>;

// Todas as figuras são renderizadas de uma vez: com as proporções reais
// reservadas, o CSS columns balanceia as colunas uma única vez, antes da
// pintura. A paginação incremental foi removida porque cada lote adicionado
// rebalanceava as colunas e fazia fotos visíveis pularem de posição.
// O lazy loading nativo das imagens mantém o custo de rede sob controle.
export function Masonry({ images, alt }: { images: string[]; alt: string }) {
  const [broken, setBroken] = useState<Set<string>>(new Set());

  const visible = Array.from(new Set(images)).filter((src) => !broken.has(src));

  if (!visible.length) return null;

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {visible.map((src, i) => {
        const d = GALLERY_DIMS[src];
        return (
          <figure
            key={src}
            className="group break-inside-avoid overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-[box-shadow] duration-200 hover:ring-border-strong"
          >
            <SmartImage
              src={src}
              alt={`${alt} — foto ${i + 1}`}
              priority={i === 0}
              baseWidth={768}
              placeholderRatio={d && d.length >= 2 ? `${d[0]} / ${d[1]}` : "4 / 3"}
              width={d?.[0] ?? 1200}
              height={d?.[1] ?? 900}
              fade={false}
              sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 400px"
              onBroken={() =>
                setBroken((prev) => {
                  if (prev.has(src)) return prev;
                  const next = new Set(prev);
                  next.add(src);
                  return next;
                })
              }
              className="h-auto w-full [content-visibility:visible]"
            />
          </figure>
        );
      })}
    </div>
  );
}
