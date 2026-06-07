import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { videos, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Search, Video, X } from "lucide-react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { FaqList } from "@/components/site/Faq";
import { faqs, faqJsonLd } from "@/lib/faqs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const featuredFaqs = faqs.filter((f) =>
  /v[ií]deo|institucional|evento|drone|cobertura/i.test(f.q),
).slice(0, 6);

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: buildMeta({
      title: "Vídeo Institucional e Produção Audiovisual em São Paulo",
      description: `Vídeos institucionais, depoimentos executivos e cobertura de eventos corporativos em São Paulo — por Alexandre Machado, há 30 anos.`,
      path: "/videos",
    }),
    links: [
      { rel: "canonical", href: "https://alefotografos.com.br/videos" },
      { rel: "dns-prefetch", href: "https://i.ytimg.com" },
      { rel: "preconnect", href: "https://i.ytimg.com", crossOrigin: "" },
      { rel: "dns-prefetch", href: "https://vumbnail.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Vídeo institucional e produção audiovisual em São Paulo",
          description: `Catálogo com ${videos.length} produções audiovisuais corporativas em São Paulo.`,
          provider: { "@type": "Organization", name: site.name },
          numberOfItems: videos.length,
          itemListElement: videos.slice(0, 30).map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `/videos/${v.slug}`,
            name: v.title,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(featuredFaqs)),
      },
    ],
  }),
  component: VideosIndex,
});

function VideosIndex() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return videos;
    return videos.filter((v) =>
      [v.title, v.subtitle, v.description].some((t) => (t ?? "").toLowerCase().includes(term)),
    );
  }, [q]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Vídeos" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Vídeo corporativo</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Produção audiovisual para empresas
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            {videos.length} produções entregues: vídeos institucionais, depoimentos executivos, coberturas de eventos
            e conteúdos estratégicos para empresas em {site.city} e em todo o Brasil.
          </p>

          <div className="mt-10 flex max-w-xl items-center gap-2 rounded-sm border border-border bg-surface px-3 py-2 focus-within:border-ember">
            <Search size={16} className="text-muted-foreground" aria-hidden="true" />
            <label htmlFor="video-search" className="sr-only">Buscar vídeos</label>
            <input
              id="video-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por título, evento ou cliente…"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            {q && (
              <button
                type="button"
                aria-label="Limpar busca"
                onClick={() => setQ("")}
                className="rounded-sm p-1 text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16" aria-label="Lista de vídeos">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "vídeo" : "vídeos"}
          {q && ` para "${q}"`}
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-sm border border-dashed border-border p-12 text-center text-muted-foreground">
            <p>Nenhum vídeo encontrado para esta busca.</p>
            <button
              type="button"
              onClick={() => setQ("")}
              className="mt-4 text-sm text-ember hover:underline"
            >
              Limpar filtro
            </button>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v, i) => {
              const thumb = videoThumb(v, "sm");
              const eager = i < 6;
              return (
                <li
                  key={v.slug}
                  style={{ contentVisibility: i < 9 ? "visible" : "auto", containIntrinsicSize: "320px 280px" }}
                >
                  <Link
                    to="/videos/$slug"
                    params={{ slug: v.slug }}
                    preload="intent"
                    className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                    aria-label={`Assistir: ${v.title}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={`Capa do vídeo: ${v.title}`}
                          width={320}
                          height={180}
                          loading={eager ? "eager" : "lazy"}
                          fetchPriority={i < 3 ? "high" : "auto"}
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const img = e.currentTarget;
                            const next = ytFallback(img.src);
                            if (next && next !== img.src) img.src = next;
                          }}
                          className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background">
                          <Video size={40} className="text-ember/70" aria-hidden="true" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-ember/90 p-4 text-accent-foreground shadow-lg transition-transform group-hover:scale-110">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                      <span className="absolute left-3 top-3 rounded-sm bg-black/60 px-2 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur">
                        {v.youtube ? "YouTube" : v.vimeo ? "Vimeo" : "Vídeo"}
                      </span>
                    </div>
                    <div className="p-5">
                      <h2 className="line-clamp-2 font-display text-base font-semibold leading-snug group-hover:text-ember">
                        {v.title}
                      </h2>
                      {v.description && (
                        <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{v.description}</p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

        )}
      </section>

      <section className="border-t border-border bg-surface" aria-labelledby="faq-videos">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 id="faq-videos" className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes sobre vídeo corporativo
          </h2>
          <FaqList items={featuredFaqs} />
          <Link to="/faq" className="mt-8 inline-flex text-sm text-muted-foreground hover:text-foreground">
            Ver todas as perguntas →
          </Link>
        </div>
      </section>

      <section className="border-t border-border" aria-label="Próximo passo">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Pronto para produzir o vídeo da sua empresa?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Envie seu briefing para um orçamento sob medida — atendimento em todo o Brasil.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </>
  );
}
