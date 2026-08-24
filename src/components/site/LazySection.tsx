import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** altura mínima do placeholder para evitar layout shift */
  minHeight?: number;
  /** margem de antecipação do IntersectionObserver */
  rootMargin?: string;
  className?: string;
};

/**
 * Monta o conteúdo apenas quando a seção se aproxima da viewport.
 * Mostra placeholders (skeleton) enquanto isso, sem causar CLS.
 * Se o navegador não suportar IntersectionObserver, renderiza direto.
 */
export function LazySection({
  children,
  minHeight = 240,
  rootMargin = "400px",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={visible ? undefined : { minHeight }}>
      {visible ? children : <SectionSkeleton />}
    </div>
  );
}

export function SectionSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div aria-hidden="true" className="animate-pulse space-y-4 py-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="space-y-3 border-b border-border pb-5">
          <div className="h-5 w-3/4 rounded-sm bg-surface" />
          <div className="h-3 w-1/2 rounded-sm bg-surface" />
        </div>
      ))}
    </div>
  );
}
