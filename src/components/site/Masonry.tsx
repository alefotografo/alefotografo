import { useState } from "react";

export function Masonry({ images, alt }: { images: string[]; alt: string }) {
  const unique = Array.from(new Set(images));
  const [broken, setBroken] = useState<Set<string>>(new Set());
  const visible = unique.filter((src) => !broken.has(src));

  if (!visible.length) return null;
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {visible.map((src, i) => (
        <figure
          key={src}
          className="group break-inside-avoid overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-border-strong"
        >
          <img
            src={src}
            alt={`${alt} — foto ${i + 1}`}
            loading={i < 6 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "auto"}
            referrerPolicy="no-referrer"
            onError={() =>
              setBroken((prev) => {
                if (prev.has(src)) return prev;
                const next = new Set(prev);
                next.add(src);
                return next;
              })
            }
            className="h-auto w-full transform-gpu transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </figure>
      ))}
    </div>
  );
}
