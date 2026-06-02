import { createFileRoute, Link } from "@tanstack/react-router";
import { videos } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Video } from "lucide-react";

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: buildMeta({
      title: "Vídeo Institucional e Produção Audiovisual em São Paulo",
      description: `${videos.length} produções audiovisuais para empresas: vídeos institucionais, depoimentos, cobertura de eventos corporativos e conteúdo estratégico.`,
      path: "/videos",
    }),
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosIndex,
});

function VideosIndex() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Vídeo</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Produção audiovisual para empresas
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Vídeos corporativos, coberturas de eventos, conteúdos institucionais e materiais audiovisuais para empresas que desejam comunicar com mais autoridade.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <Link
              key={v.slug}
              to="/videos/$slug"
              params={{ slug: v.slug }}
              className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                {v.youtube ? (
                  <img
                    src={`https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100"
                  />
                ) : v.vimeo ? (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background">
                    <Video size={40} className="text-ember/70" />
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background">
                    <Video size={40} className="text-ember/70" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-ember/90 p-4 text-accent-foreground transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="line-clamp-2 font-display text-base font-semibold group-hover:text-ember">{v.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
