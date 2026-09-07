import { useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/site/SmartImage";

const STEP = 12;

export function Masonry({ images, alt }: { images: string[]; alt: string }) {
  const unique = Array.from(new Set(images));
  const [broken, setBroken] = useState<Set<string>>(new Set());
  const [count, setCount] = useState(STEP);
  const sentinel = useRef<HTMLDivElement | null>(null);

  const visible = unique.filter((src) => !broken.has(src));
  const shown = visible.slice(0, count);
  const hasMore = count < visible.length;

  useEffect(() => {
    if (!hasMore) return;
    const node = sentinel.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setCount((c) => c + STEP);
      },
      { rootMargin: "1200px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [hasMore, count]);

  if (!visible.length) return null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {shown.map((src, i) => (
          <figure
            key={src}
            className="group break-inside-avoid overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-[box-shadow] duration-200 hover:ring-border-strong [content-visibility:auto] [contain-intrinsic-size:auto_320px]"
          >
            <SmartImage
              src={src}
              alt={`${alt} — foto ${i + 1}`}
              priority={i === 0}
              baseWidth={768}
              placeholderRatio="4 / 3"
              width={1200}
              height={900}
              sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 400px"
              onBroken={() =>
                setBroken((prev) => {
                  if (prev.has(src)) return prev;
                  const next = new Set(prev);
                  next.add(src);
                  return next;
                })
              }
              className="h-auto w-full transform-gpu transition-[opacity,transform] duration-200 group-hover:scale-[1.03]"
            />
          </figure>
        ))}
      </div>

      {hasMore && (
        <div ref={sentinel} className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + STEP)}
            className="rounded-sm border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-ember"
          >
            Carregar mais fotos ({visible.length - count} restantes)
          </button>
        </div>
      )}
    </>
  );
}
