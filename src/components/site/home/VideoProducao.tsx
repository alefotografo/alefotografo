import { useState } from "react";
import { Link } from "@tanstack/react-router";

const VIDEOS = [
  { id: "VzEBf22nMJg", cliente: "Nitriflex", tipo: "Vídeo institucional de indústria" },
  { id: "iod4JyF9l6w", cliente: "Fiorde Logística", tipo: "Vídeo institucional corporativo" },
  { id: "uFNcEB1uvAA", cliente: "Procooler na FEBRAVA", tipo: "Cobertura de feira de negócios" },
  { id: "nkHJbeXx5Qo", cliente: "Ativa Logística", tipo: "Vídeo institucional de logística" },
] as const;

function VideoFacade({ id, cliente }: { id: string; cliente: string }) {
  const [ativo, setAtivo] = useState(false);

  if (ativo) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={cliente}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setAtivo(true)}
      aria-label={`Assistir ao vídeo: ${cliente}`}
      className="group relative h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={`Capa do vídeo de ${cliente}`}
        width={480}
        height={360}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-background/40" />
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-sm bg-ember p-4 text-accent-foreground">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

export default function VideoProducao() {
  if (!VIDEOS.length) return null;


  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
          Vídeos corporativos com produção completa
        </h2>
        <p className="mt-6 max-w-[68ch] text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
          Planejamento, roteiro, captação, direção, edição, locução e trilha reunidos em uma
          produção audiovisual completa. Criamos vídeos para apresentar empresas, serviços,
          estruturas, equipes, cases e projetos com comunicação clara e profissional.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <article key={video.id}>
              <div
                className="overflow-hidden rounded-sm border border-border bg-surface"
                style={{ aspectRatio: "16 / 9" }}
              >
                <VideoFacade id={video.id} cliente={video.cliente} />
              </div>
              <h3 className="mt-2 font-display text-[18px] font-semibold leading-[1.3] text-foreground md:text-[20px]">
                {video.cliente}
              </h3>
              <p className="text-[14px] leading-[1.4] text-muted-foreground">{video.tipo}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center">
          <Link
            to="/videos"
            className="inline-flex min-h-11 items-center text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none md:min-h-0"
          >
            Ver todos os vídeos
          </Link>
        </p>
      </div>
    </section>
  );
}
