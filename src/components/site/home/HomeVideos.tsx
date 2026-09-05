import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Video } from "lucide-react";
import { homeVideos } from "@/data/homeSummary";

export default function HomeVideos() {
  return (
      {/* Videos teaser */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Vídeo</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">Produções audiovisuais</h2>
            </div>
            <Link to="/videos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              Todos os vídeos <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {homeVideos.map((v) => (
              <Link
                key={v.slug}
                to="/videos/$slug"
                params={{ slug: v.slug }}
                className="group block overflow-hidden rounded-sm bg-background ring-1 ring-border hover:ring-ember"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {v.youtube ? (
                    <img
                      src={`https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`}
                      alt=""
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background">
                      <Video size={36} className="text-ember/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-ember/90 p-4 text-accent-foreground transition-transform group-hover:scale-110">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 font-display text-base font-semibold">{v.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
}
