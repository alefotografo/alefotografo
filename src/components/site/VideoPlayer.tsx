import { useState } from "react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import type { Video } from "@/data/catalog";

type Props = { video: Pick<Video, "title" | "youtube" | "vimeo"> };

// Facade: mostra somente a capa + botão Play até o usuário clicar.
// Evita carregar ~1-2MB de scripts do YouTube/Vimeo no load inicial.
export function VideoPlayer({ video }: Props) {
  const [active, setActive] = useState(false);
  const thumb = videoThumb(video, "lg");

  if (active) {
    if (video.youtube) {
      return (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtube}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }
    if (video.vimeo) {
      return (
        <iframe
          className="h-full w-full"
          src={`https://player.vimeo.com/video/${video.vimeo}?autoplay=1`}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Vídeo indisponível no momento.
      </div>
    );
  }

  if (!video.youtube && !video.vimeo) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Vídeo indisponível no momento.
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative h-full w-full"
      aria-label={`Reproduzir vídeo: ${video.title}`}
    >
      {thumb && (
        <img
          src={thumb}
          alt={`Capa do vídeo ${video.title}`}
          width={1280}
          height={720}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            const next = ytFallback(img.src);
            if (next && next !== img.src) img.src = next;
          }}
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-ember/90 p-6 text-accent-foreground shadow-2xl transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
