import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categoryBySlug, categories, site } from "@/data/catalog";
import { categorySeo, cleanDescription } from "@/data/categorySeo";

import { buildMeta } from "@/lib/seo";
import { aggregateRatingSchema } from "@/data/reviews";
import { Masonry } from "@/components/site/Masonry";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { LinkHub } from "@/components/site/LinkHub";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";
import { faqs } from "@/lib/faqs";
import { editorialFor } from "@/data/categoryEditorial";
import { EditorialBlock } from "@/components/site/EditorialBlock";
import { relatedCategories, relatedPosts } from "@/lib/related";
import { autoLink } from "@/lib/autoLink";
import { serviceFor } from "@/lib/serviceMatch";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const retratoCorporativoFaqs = [
  {
    q: "Qual a diferença entre headshot e retrato corporativo?",
    a: "Headshot é uma foto de busto focada no rosto, usada em LinkedIn e cartões de visita. Retrato corporativo é mais elaborado: inclui contexto do ambiente de trabalho, transmite mais personalidade e é ideal para sites institucionais e press kits.",
  },
  {
    q: "O retrato corporativo pode ser feito no escritório da empresa?",
    a: "Sim. Realizamos sessões no estúdio ou diretamente na empresa do cliente em São Paulo. A locação no ambiente corporativo autentica a imagem e facilita a logística para equipes grandes.",
  },
  {
    q: "Quantas fotos são entregues em um retrato corporativo?",
    a: "Os pacotes de retrato corporativo incluem de 5 a 20 fotos editadas por colaborador, dependendo do pacote escolhido. Todas entregues em alta resolução em até 5 dias úteis.",
  },
];


export const Route = createFileRoute("/fotografo-corporativo/$slug")({
  loader: async ({ params }) => {
    const cat = categoryBySlug(params.slug);
    if (!cat) throw notFound();
    // As listas de fotos (~330 KB somadas) são importadas dinamicamente: só a
    // rota da galeria paga esse peso.
    const { categoryImages } = await import("@/data/categoryImages");
    return { ...cat, images: categoryImages(params.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const seo = categorySeo[params.slug];
    const fallbackDescription = loaderData.description
      ? cleanDescription(loaderData.description)
      : `${loaderData.title} em São Paulo — ${site.description}`;
    return {
      meta: buildMeta({
        title: seo?.title ?? `${loaderData.title} em São Paulo`,
        description: seo?.description ?? fallbackDescription,
        path: `/fotografo-corporativo/${params.slug}`,
        type: "article",
      }),

      links: [{ rel: "canonical", href: `https://www.alefotografo.com.br/fotografo-corporativo/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: loaderData.title,
            description: loaderData.description,
            url: `https://www.alefotografo.com.br/fotografo-corporativo/${params.slug}`,
            inLanguage: "pt-BR",
            author: { "@type": "Person", name: "Alexandre Machado", url: "https://www.alefotografo.com.br/quem-e-o-ale" },
            image: loaderData.images.slice(0, 8),
            associatedMedia: loaderData.images.slice(0, 8).map((src: string, i: number) => ({
              "@type": "Photograph",
              name: `${loaderData.title} — foto ${i + 1}`,
              creator: { "@type": "Person", name: "Alexandre Machado" },
              copyrightHolder: { "@id": "https://www.alefotografo.com.br/#business" },
              image: { "@type": "ImageObject", contentUrl: src, url: src, representativeOfPage: i === 0 },
            })),
          }),

        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: loaderData.title,
            name: loaderData.title,
            description: loaderData.description,
            url: `https://www.alefotografo.com.br/fotografo-corporativo/${params.slug}`,
            areaServed: { "@type": "City", name: "São Paulo" },
            provider: {
              "@type": "LocalBusiness",
              name: site.name,
              telephone: "+55 11 91355-0533",
              url: "https://www.alefotografo.com.br",
            },
            aggregateRating: aggregateRatingSchema,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: (params.slug === "retrato-corporativo" ? retratoCorporativoFaqs : (editorialFor(params.slug)?.faqs ?? faqs.slice(0, 5))).map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function shorten(s: string, max = 180): string {
  if (!s) return "";
  const clean = s.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:!?-]+$/, "") + "…";
}

function CategoryPage() {
  const cat = Route.useLoaderData();
  const idx = categories.findIndex((c) => c.slug === cat.slug);
  const prev = categories[(idx - 1 + categories.length) % categories.length];
  const next = categories[(idx + 1) % categories.length];
  const related = relatedCategories(`${cat.title} ${cat.subtitle} ${cat.description}`, cat.slug, 6);
  const service = serviceFor(`${cat.title} ${cat.subtitle ?? ""} ${cat.description ?? ""}`);
  const editorial = editorialFor(cat.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Fotos", to: "/fotografo-corporativo" }, { label: cat.title }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <Link to="/fotografo-corporativo" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} /> Todos os segmentos
          </Link>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-ember">Fotos</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            {cat.title}
          </h1>
          {cat.subtitle && (
            <h2 className="mt-4 max-w-3xl font-display text-lg font-normal text-muted-foreground md:text-xl">
              {shorten(cat.subtitle, 140)}
            </h2>
          )}
          {cat.description && (
            <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
              {autoLink(shorten(cat.description, 220), { excludeSlug: cat.slug, maxLinks: 3 })}
            </p>
          )}
          {related.length > 0 && (
            <nav aria-label="Categorias relacionadas" className="mt-8 flex flex-wrap gap-2">
              {related.slice(0, 5).map((r) => (
                <Link
                  key={r.slug}
                  to="/fotografo-corporativo/$slug"
                  params={{ slug: r.slug }}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-ember hover:text-ember"
                >
                  {r.title}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </section>

      {editorial && <EditorialBlock data={editorial} />}


      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Masonry images={cat.images} alt={cat.title} />

        {/* Separação de intenção: a galeria é prova visual; a contratação fica na página de serviço. */}
        <div className="mt-12 rounded-sm border border-ember/40 bg-surface p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold md:text-2xl">
            Quer um trabalho assim para a sua empresa?
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground text-pretty md:text-base">
            Esta página é o registro visual do que já fotografei. Condições, o que está incluído e
            orçamento ficam na página de{" "}
            <Link
              to={service.to}
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
            >
              {service.label}
            </Link>
            . Para ver os cases organizados por segmento, veja o{" "}
            <Link
              to="/portfolio"
              className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
            >
              portfólio completo
            </Link>
            .
          </p>
        </div>

        <RelatedLinks
          cats={related}
          posts={relatedPosts(`${cat.title} ${cat.subtitle} ${cat.description}`, undefined, 4)}
          title={`Mais sobre ${cat.title.toLowerCase()}`}
        />
        <LinkHub
          seed={`${cat.title} ${cat.subtitle} ${cat.description}`}
          exclude={[`/fotografo-corporativo/${cat.slug}`]}
          excludeSlug={cat.slug}
          title="10 páginas relacionadas"
        />
      </section>


      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 className="mb-8 font-display text-2xl font-semibold md:text-3xl">
            Perguntas frequentes sobre {cat.title.toLowerCase()}
          </h2>
          <FaqList items={editorial?.faqs ?? faqs.slice(0, 5)} />
          <Link to="/faq" className="mt-6 inline-flex items-center gap-2 text-sm text-ember hover:underline">
            Ver todas as perguntas →
          </Link>
        </div>
      </section>




      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-12 md:grid-cols-2 md:px-8">
          <Link
            to="/fotografo-corporativo/$slug"
            params={{ slug: prev.slug }}
            className="group flex items-center gap-4 rounded-sm border border-border bg-background p-5 hover:border-ember"
          >
            <ArrowLeft size={18} className="text-ember" />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Anterior</p>
              <p className="font-display text-base font-semibold group-hover:text-ember">{prev.title}</p>
            </div>
          </Link>
          <Link
            to="/fotografo-corporativo/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center justify-end gap-4 rounded-sm border border-border bg-background p-5 text-right hover:border-ember"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Próximo</p>
              <p className="font-display text-base font-semibold group-hover:text-ember">{next.title}</p>
            </div>
            <ArrowUpRight size={18} className="text-ember" />
          </Link>
        </div>
      </section>
    </>
  );
}
