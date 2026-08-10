import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: buildMeta({
      title: "Portfólio de Fotografia Corporativa em São Paulo",
      description: `Portfólio com ${categories.length} categorias de fotografia corporativa: retratos profissionais, advocacia, saúde, eventos, indústria, arquitetura e gastronomia.`,
      path: "/portfolio",
    }),
    links: [{ rel: "canonical", href: "https://alefotografos.com.br/portfolio" }],
  }),
  component: PortfolioFotos,
});

function PortfolioFotos() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Fotos</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fotografia Corporativa em São Paulo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            {categories.length} categorias de trabalho — explore as galerias na mesma ordem do site oficial alefotografo.com.br.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/fotografo-corporativo/$slug"
              params={{ slug: c.slug }}
              className="group relative block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <div className={`relative ${i % 6 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden`}>
                {c.cover ? (
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background text-muted-foreground">
                    Sem imagem
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h2 className="font-display text-lg font-semibold leading-tight">{c.title}</h2>
                {c.images.length > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">{c.images.length} fotos</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Tem um projeto em mente?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Atendemos demandas customizadas em todo São Paulo. Fale com {site.name}.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </>
  );
}
