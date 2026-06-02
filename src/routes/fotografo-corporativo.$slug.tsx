import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categoryBySlug, categories, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Masonry } from "@/components/site/Masonry";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { relatedCategories, relatedPosts } from "@/lib/related";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/fotografo-corporativo/$slug")({
  loader: ({ params }) => {
    const cat = categoryBySlug(params.slug);
    if (!cat) throw notFound();
    return cat;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: buildMeta({
        title: loaderData.title,
        description: loaderData.description || `${loaderData.title} — ${site.description}`,
        path: `/fotografo-corporativo/${params.slug}`,
        image: loaderData.cover || undefined,
        type: "article",
      }),
      links: [{ rel: "canonical", href: `/fotografo-corporativo/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: loaderData.title,
            description: loaderData.description,
            url: `https://alefotografo.com.br/fotografo-corporativo/${params.slug}`,
            author: { "@type": "Person", name: "Alexandre Machado" },
            image: loaderData.images.slice(0, 8),
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
            <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">{shorten(cat.description, 220)}</p>
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

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Masonry images={cat.images} alt={cat.title} />
        <RelatedLinks
          cats={related}
          posts={relatedPosts(`${cat.title} ${cat.subtitle} ${cat.description}`, undefined, 4)}
          title={`Mais sobre ${cat.title.toLowerCase()}`}
        />
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
