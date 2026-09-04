import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { SmartImage } from "@/components/site/SmartImage";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/fotografo-corporativo/")({
  head: () => ({
    meta: buildMeta({
      title: "Fotos Corporativas por Segmento em São Paulo",
      description: `Veja ${categories.length} galerias reais: retrato executivo, equipes, escritórios, clínicas, advocacia, indústria e eventos. Orçamento no mesmo dia em São Paulo.`,
      path: "/fotografo-corporativo",
    }),
    links: [{ rel: "canonical", href: "https://alefotografo.com.br/fotografo-corporativo" }],
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Fotos" }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Fotos</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Conheça nossas especialidades
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Explore galerias por categoria. Cada trabalho é pensado para gerar confiança, valor e percepção profissional para a marca do cliente.
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
                  <SmartImage
                    src={c.cover}
                    alt={c.title}
                    baseWidth={768}
                    priority={i < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="h-full w-full object-cover group-hover:scale-105"
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
            Não encontrou seu segmento?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Atendemos demandas customizadas. Fale com {site.name}.
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
