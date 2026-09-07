import { useCallback, useEffect, useState } from "react";
import { GRID_WIDTHS, imgSrcSet, imgUrl } from "@/lib/img";
import { naturalDims } from "@/lib/imageDims";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** largura de referência para a versão base (default 768, suficiente para grids) */
  baseWidth?: number;
  widths?: number[];
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  /** proporção reservada enquanto a foto não carrega (ex.: "4 / 3"); evita salto de layout */
  placeholderRatio?: string;
  onBroken?: () => void;
};

/**
 * Imagem com fallback progressivo:
 * - serve WebP redimensionado (CDN legado é otimizado por proxy)
 * - srcset/sizes para não baixar mais pixels do que a tela usa
 * - reserva espaço com proporção enquanto carrega (lazy-load mais preciso, sem CLS)
 * - fade-in ao concluir o download (evita a sensação de "carregou pela metade")
 * - em caso de erro, tenta o original antes de desistir
 */
export function SmartImage({
  src,
  alt,
  className = "",
  baseWidth = 768,
  widths = GRID_WIDTHS,
  sizes = "(max-width: 640px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 400px",
  width,
  height,
  priority = false,
  placeholderRatio,
  onBroken,
}: Props) {
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    setFallback(false);
  }, [src]);

  // Ao concluir o download liberamos a proporção reservada direto no DOM: nada
  // de setState por foto, que geraria dezenas de re-renders durante a rolagem.
  const settle = useCallback((el: HTMLImageElement | null) => {
    if (!el) return;
    el.style.removeProperty("aspect-ratio");
    el.style.opacity = "1";
  }, []);

  const attach = useCallback(
    (el: HTMLImageElement | null) => {
      if (el && el.complete && el.naturalWidth > 0) settle(el);
    },
    [settle],
  );

  const natural = naturalDims(src);
  const finalWidth = width ?? natural?.width;
  const finalHeight = height ?? natural?.height;
  const finalSrc = fallback ? src : imgUrl(src, baseWidth);
  const srcSet = fallback ? undefined : imgSrcSet(src, widths);

  return (
    <img
      ref={attach}
      src={finalSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      referrerPolicy="no-referrer"
      style={{
        ...(placeholderRatio ? { aspectRatio: placeholderRatio } : null),
        opacity: priority ? 1 : 0,
      }}
      onLoad={(e) => settle(e.currentTarget)}
      onError={() => {
        if (!fallback) setFallback(true);
        else onBroken?.();
      }}
      className={`${className} bg-surface transition-opacity duration-200`}
    />
  );
}
