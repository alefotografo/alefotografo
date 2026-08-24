import { useEffect, useState } from "react";
import { imgSrcSet, imgUrl } from "@/lib/img";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** largura de referência para a versão base (default 1024) */
  baseWidth?: number;
  widths?: number[];
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onBroken?: () => void;
};

/**
 * Imagem com fallback progressivo:
 * - serve WebP redimensionado (CDN legado é otimizado por proxy)
 * - srcset/sizes para não baixar mais pixels do que a tela usa
 * - fade-in ao concluir o download (evita a sensação de "carregou pela metade")
 * - em caso de erro, tenta o original antes de desistir
 */
export function SmartImage({
  src,
  alt,
  className = "",
  baseWidth = 1024,
  widths,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  width,
  height,
  priority = false,
  onBroken,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFallback(false);
  }, [src]);

  const finalSrc = fallback ? src : imgUrl(src, baseWidth);
  const srcSet = fallback ? undefined : imgSrcSet(src, widths);

  return (
    <img
      src={finalSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      referrerPolicy="no-referrer"
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (!fallback) setFallback(true);
        else onBroken?.();
      }}
      className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
