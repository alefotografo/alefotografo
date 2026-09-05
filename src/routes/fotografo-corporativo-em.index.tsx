import { createFileRoute, Link } from "@tanstack/react-router";
import { bairros } from "@/data/bairros";
import { buildMeta } from "@/lib/seo";
import { site } from "@/data/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ArrowUpRight, MapPin } from "lucide-react";

const PATH = "/fotografo-corporativo-em";
const URL_ABS = `https://www.alefotografo.com.br${PATH}`;
const TITLE = "Fotógrafo Corporativo por Bairro em São Paulo e ABC";
const DESCRIPTION =
  "Escolha o bairro e veja como atendemos: retratos executivos, fotos para LinkedIn, eventos e vídeo institucional em 35 regiões de São Paulo e do ABC.";

/** Agrupa os bairros por região preservando a ordem original do catálogo. */
function agrupar() {
  const grupos: { regiao: string; itens: typeof bairros }[] = [];
  for (const b of bairros) {
    const atual = grupos.find((g) => g.regiao === b.regiao);
    if (atual) atual.itens.push(b);
    else grupos.push({ regiao: b.regiao, itens: [b] });
  }
  return grupos;
}

export const Route = createFileRoute("/fotografo-corporativo-em/")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: [{ rel: "canonical", href: URL_ABS }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL_ABS,
          publisher: { "@type": "LocalBusiness", name: site.name, url: "https://www.alefotografo.com.br" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: bairros.map((b, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Fotógrafo corporativo ${b.prep ?? "na"} ${b.nome}`,
              url: `https://www.alefotografo.com.br/fotografo-corporativo-em/${b.slug}`,
            })),
          },
        }),
      },
    ],
  }),
  component: BairrosIndex,
});

function BairrosIndex() {
  const grupos = agrupar();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Fotos", to: "/fotografo-corporativo" },
          { label: "Por bairro" },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            <MapPin size={14} /> {bairros.length} regiões atendidas
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fotógrafo corporativo por bairro
          </h1>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
            Cada bairro tem uma página própria com contexto real da região, o tipo de produção que
            funciona por lá e o link fixo que você pode compartilhar. Atendimento on-location em São
            Paulo e no ABC, com estúdio próprio para quando o escritório não colabora.
          </p>
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

      {grupos.map((g) => (
        <section key={g.regiao} className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">{g.regiao}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.itens.map((b) => (
                <Link
                  key={b.slug}
                  to="/fotografo-corporativo-em/$bairro"
                  params={{ bairro: b.slug }}
                  className="group rounded-sm border border-border bg-surface p-5 transition-colors hover:border-ember"
                >
                  <span className="block text-sm font-medium group-hover:text-ember">
                    Fotógrafo corporativo {b.prep ?? "na"} {b.nome}
                  </span>
                  <span className="mt-2 block text-xs text-muted-foreground">
                    /fotografo-corporativo-em/{b.slug}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
