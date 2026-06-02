import { createFileRoute, Link } from "@tanstack/react-router";
import { videos } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Video } from "lucide-react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { FaqList } from "@/components/site/Faq";
import { faqs, faqJsonLd } from "@/lib/faqs";

const featuredFaqs = faqs.filter((f) =>
  /v[ií]deo|institucional|evento|drone|cobertura/i.test(f.q),
).slice(0, 6);

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: buildMeta({
      title: "Vídeo Institucional e Produção Audiovisual em São Paulo",
      description: `${videos.length} produções audiovisuais para empresas: vídeos institucionais, depoimentos, cobertura de eventos corporativos e conteúdo estratégico em São Paulo.`,
      path: "/videos",
    }),
    links: [{ rel: "canonical", href: "/videos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Vídeo institucional e produção audiovisual em São Paulo",
          numberOfItems: videos.length,
          itemListElement: videos.slice(0, 20).map((v, i) => ({
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
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Vídeo</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Produção audiovisual para empresas
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Vídeos corporativos, coberturas de eventos, conteúdos institucionais e materiais audiovisuais para empresas que desejam comunicar com mais autoridade em São Paulo e em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => {
            const thumb = videoThumb(v);
            return (
              <Link
                key={v.slug}
                to="/videos/$slug"
                params={{ slug: v.slug }}
                className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={`Capa do vídeo ${v.title}`}
                      loading="lazy"
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
                      <Video size={40} className="text-ember/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes sobre vídeo corporativo
          </h2>
          <FaqList items={featuredFaqs} />
          <Link to="/faq" className="mt-8 inline-flex text-sm text-muted-foreground hover:text-foreground">
            Ver todas as perguntas →
          </Link>
        </div>
      </section>
    </>
  );
}
