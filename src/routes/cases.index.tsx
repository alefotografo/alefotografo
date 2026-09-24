import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { videoBySlug } from "@/data/catalog";
import { videoThumb } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const PATH = "/cases";

const CASES = [
  {
    to: "/cases/ativa-logistica",
    client: "ATIVA Logística",
    segment: "Logística",
    services: "Fotografia corporativa e produção de vídeo",
    proof: "video" as const,
    videoSlug: "ativa-log-estrutura-operacao-e-eficiencia-logistica",
  },
  {
    to: "/cases/rocha-e-queiroz-advogados",
    client: "Rocha & Queiroz Advogados Associados",
    segment: "Advocacia",
    services: "Vídeo institucional e fotografia",
    proof: "video" as const,
    videoSlug: "video-institucional-rocha-queiroz-advogados",
  },
];

export const Route = createFileRoute("/cases/")({
  head: () => ({
    meta: buildMeta({
      title: "Cases de Fotografia e Vídeo Corporativo | Alê Fotógrafo",
      description:
        "Cases reais de fotografia e vídeo corporativo para empresas, organizados por cliente e segmento. ATIVA Logística e Rocha & Queiroz Advogados.",
      path: PATH,
    }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${PATH}` }],
  }),
  component: CasesHub,
});

function CasesHub() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Cases" }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Cases</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Cases de fotografia e vídeo corporativo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Projetos reais para empresas, organizados por cliente e segmento. Cada case reúne as
            produções publicadas, o material fotográfico comprovado e o contexto do trabalho.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((c) => {
            const video = videoBySlug(c.videoSlug);
            const thumb = video ? videoThumb(video, "lg") : undefined;
            return (
              <Link
                key={c.to}
                to={c.to}
                className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {thumb && (
                    <img
                      src={thumb}
                      alt={`Produção em vídeo do case ${c.client}`}
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">{c.segment}</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold group-hover:text-ember">
                    {c.client}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{c.services}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
