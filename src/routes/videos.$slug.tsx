import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { videoBySlug, videos } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { ArrowLeft, Video as VideoIcon } from "lucide-react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { LinkHub } from "@/components/site/LinkHub";
import { serviceFor } from "@/lib/serviceMatch";

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
        type: "article",
      }),
      links: [{ rel: "canonical", href: `https://alefotografo.com.br/videos/${params.slug}/` }],
      scripts: image
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                name: loaderData.title,
                description:
                  loaderData.description ||
                  `${loaderData.title} — Produção audiovisual por Alê Fotógrafo`,
                thumbnailUrl: [image],
                // Data real conferida no YouTube (campo `uploaded` do catálogo).
                // Quando ausente, o campo é omitido — nunca usar data fictícia
                // (o GSC rejeita e a regra de verdade do projeto proíbe).
                uploadDate: loaderData.uploaded,
                embedUrl: loaderData.youtube
                  ? `https://www.youtube.com/embed/${loaderData.youtube}`
                  : undefined,
                contentUrl: loaderData.youtube
                  ? `https://www.youtube.com/watch?v=${loaderData.youtube}`
                  : undefined,
                publisher: {
                  "@type": "Organization",
                  name: "Alê Fotógrafo",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://alefotografo.com.br/assets/logo-alefotografo.png",
                  },
                },
                inLanguage: "pt-BR",
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: ["h1", ".video-description"],
                },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: `Como contratar produção de vídeo similar a "${loaderData.title}"?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Entre em contato pelo WhatsApp (11) 91355-0533 ou pelo formulário em alefotografo.com.br/contato. Enviamos orçamento em até 1 dia útil após o briefing.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quanto custa um vídeo institucional em São Paulo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "O valor de um vídeo institucional em São Paulo varia conforme duração, locações e complexidade de edição. Vídeos corporativos completos (captação + edição + trilha) partem de R$ 3.500. Solicite um orçamento personalizado pelo WhatsApp (11) 91355-0533.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Qual o prazo de entrega de um vídeo corporativo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "O prazo padrão é de 10 a 15 dias úteis após a captação, incluindo uma rodada de revisão. Para entregas urgentes, consulte disponibilidade no briefing.",
                    },
                  },
                ],
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
  const seed = `${v.title} ${v.subtitle ?? ""} ${v.description ?? ""}`;
  const service = serviceFor(seed);
  // Malha lateral: 6 vídeos, priorizando os que compartilham palavras do título.
  const pool = videos.filter((x) => x.slug !== v.slug);
  const words = v.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\W+/)
    .filter((w) => w.length > 4);
  const others = [...pool]
    .map((o) => {
      const t = o.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return { o, s: words.reduce((n, w) => (t.includes(w) ? n + 1 : n), 0) };
    })
    .sort((a, b) => b.s - a.s)
    .slice(0, 6)
    .map((x) => x.o);

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
          <VideoPlayer video={v} />
        </div>
        {v.description && (
          <div className="prose prose-invert mt-10 max-w-none">
            <p className="whitespace-pre-line text-muted-foreground">{v.description}</p>
          </div>
        )}

        <div className="mt-10 rounded-sm border border-border bg-surface p-6">
          <p className="text-sm text-muted-foreground text-pretty">
            Precisa desse tipo de material para a sua empresa? Veja como funciona meu trabalho de{" "}
            <Link to={service.to} className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">
              {service.label}
            </Link>{" "}
            ou explore os{" "}
            <Link to="/portfolio" className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">
              cases do portfólio
            </Link>
            . Produção de vídeo completa em{" "}
            <Link to="/videos" className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">
              vídeo corporativo
            </Link>
            .
          </p>
        </div>
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
                    const t = videoThumb(o, "sm");
                    return t ? (
                      <img
                        src={t}
                        alt={`Capa do vídeo ${o.title}`}
                        width={320}
                        height={180}
                        loading="lazy"
                        decoding="async"
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

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <LinkHub seed={`${v.title} vídeo institucional depoimento evento`} exclude={["/videos"]} title="10 páginas relacionadas" />
      </section>
    </>

  );
}
