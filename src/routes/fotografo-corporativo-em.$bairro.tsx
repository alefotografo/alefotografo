import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { bairroBySlug, bairros } from "@/data/bairros";
import { buildMeta } from "@/lib/seo";
import { site, categories } from "@/data/catalog";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";
import { faqs } from "@/lib/faqs";
import { LinkHub } from "@/components/site/LinkHub";
import { ArrowUpRight, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/fotografo-corporativo-em/$bairro")({
  loader: ({ params }) => {
    const b = bairroBySlug(params.bairro);
    if (!b) throw notFound();
    return b;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const url = `https://alefotografo.com.br/fotografo-corporativo-em/${params.bairro}`;
    const prep = loaderData.prep ?? "na";
    const title = `Fotógrafo Corporativo ${prep} ${loaderData.nome} — SP`;
    const description = `Fotógrafo corporativo na ${loaderData.nome} (${loaderData.regiao}): retratos executivos, LinkedIn, eventos e vídeo institucional. 30 anos de experiência em SP.`;
    return {
      meta: buildMeta({ title, description, path: `/fotografo-corporativo-em/${params.bairro}`, type: "article" }),
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Fotografia corporativa",
            provider: {
              "@type": "LocalBusiness",
              name: site.name,
              telephone: "+55 11 91355-0533",
              url: "https://alefotografo.com.br",
              areaServed: { "@type": "City", name: "São Paulo" },
            },
            areaServed: { "@type": "Place", name: `${loaderData.nome}, São Paulo` },
            name: title,
            description,
            url,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "87",
            },
          }),
        },
      ],
    };
  },
  component: BairroPage,
});

function BairroPage() {
  const b = Route.useLoaderData();
  const cats = categories.slice(0, 8);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Fotos", to: "/fotografo-corporativo" },
          { label: b.nome },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            <MapPin size={14} /> {b.regiao}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fotógrafo Corporativo {b.prep ?? "na"} {b.nome}
          </h1>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">{b.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/fotografo-corporativo"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium hover:border-ember hover:text-ember"
            >
              Ver portfólio completo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          O que produzimos na {b.nome}
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {b.destaques.map((d: string) => (
            <li key={d} className="flex gap-3 rounded-sm border border-border bg-surface p-5">
              <Check className="mt-1 shrink-0 text-ember" size={18} />
              <span className="text-muted-foreground">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Especialidades atendidas na {b.nome}
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cats.map((c) => (
              <Link
                key={c.slug}
                to="/fotografo-corporativo/$slug"
                params={{ slug: c.slug }}
                className="group rounded-sm border border-border bg-background p-4 text-sm transition-colors hover:border-ember hover:text-ember"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Também atendemos</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {b.landmarks.map((l: string) => (
              <span key={l} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground">
                {l}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {bairros
              .filter((x) => x.slug !== b.slug)
              .map((x) => (
                <Link
                  key={x.slug}
                  to="/fotografo-corporativo-em/$bairro"
                  params={{ bairro: x.slug }}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:border-ember hover:text-ember"
                >
                  Fotógrafo {x.prep ?? "na"} {x.nome}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 className="mb-8 font-display text-2xl font-semibold md:text-3xl">
            Perguntas frequentes — {b.nome}
          </h2>
          <FaqList items={faqs.slice(0, 5)} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <LinkHub
          seed={`${b.nome} ${b.regiao} ${b.intro} ${b.destaques.join(" ")}`}
          exclude={[`/fotografo-corporativo-em/${b.slug}`]}
          title="10 páginas relacionadas"
        />
      </section>
    </>

  );
}
