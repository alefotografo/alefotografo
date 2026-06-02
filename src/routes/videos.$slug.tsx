import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { videoBySlug, videos } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { ArrowLeft, Video as VideoIcon } from "lucide-react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/videos/$slug")({
  loader: ({ params }) => {
    const v = videoBySlug(params.slug);
    if (!v) throw notFound();
    return v;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const image = videoThumb(loaderData) ?? undefined;
    return {
      meta: buildMeta({
        title: loaderData.title,
        description: loaderData.description || `${loaderData.title} — Produção audiovisual por Alê Fotógrafo`,
        path: `/videos/${params.slug}`,
        image,
        type: "article",
      }),
      links: [{ rel: "canonical", href: `/videos/${params.slug}` }],
      scripts: image
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: loaderData.title,
                description: loaderData.description,
                thumbnailUrl: image,
                uploadDate: "2024-01-01",
                publisher: { "@type": "Organization", name: "Alê Fotógrafo" },
              }),
            },
          ]
        : [],
    };
  },
  component: VideoPage,
});

function VideoPage() {
  const v = Route.useLoaderData();
  const others = videos.filter((x) => x.slug !== v.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Vídeos", to: "/videos" }, { label: v.title }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <Link to="/videos" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} /> Todos os vídeos
          </Link>
          <h1 className="font-display text-3xl font-semibold leading-tight md:text-5xl text-balance">{v.title}</h1>
          {v.subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{v.subtitle}</p>}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="aspect-video overflow-hidden rounded-sm bg-black ring-1 ring-border">
          {v.youtube && (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${v.youtube}`}
              title={v.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
          {v.vimeo && (
            <iframe
              className="h-full w-full"
              src={`https://player.vimeo.com/video/${v.vimeo}`}
              title={v.title}
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
          {!v.youtube && !v.vimeo && (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Vídeo indisponível no momento.
            </div>
          )}
        </div>
        {v.description && (
          <div className="prose prose-invert mt-10 max-w-none">
            <p className="whitespace-pre-line text-muted-foreground">{v.description}</p>
          </div>
        )}
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="mb-8 font-display text-2xl font-semibold">Mais produções</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/videos/$slug"
                params={{ slug: o.slug }}
                className="group block overflow-hidden rounded-sm bg-background ring-1 ring-border hover:ring-ember"
              >
                <div className="relative aspect-video bg-black">
                  {(() => {
                    const t = videoThumb(o);
                    return t ? (
                      <img
                        src={t}
                        alt={`Capa do vídeo ${o.title}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.currentTarget;
                          const next = ytFallback(img.src);
                          if (next && next !== img.src) img.src = next;
                        }}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center"><VideoIcon className="text-ember/60" /></div>
                    );
                  })()}
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-medium group-hover:text-ember">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
