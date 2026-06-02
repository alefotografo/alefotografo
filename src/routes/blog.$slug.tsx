import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { postBySlug, posts, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = postBySlug(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: buildMeta({
        title: loaderData.title,
        description: loaderData.description || loaderData.title,
        path: `/blog/${params.slug}`,
        image: loaderData.cover || undefined,
        type: "article",
      }),
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.description,
            image: loaderData.cover || undefined,
            author: { "@type": "Person", name: "Alexandre Machado" },
            publisher: {
              "@type": "Organization",
              name: site.name,
            },
            datePublished: loaderData.date,
          }),
        },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const p = Route.useLoaderData();
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  // Use only the description and a short excerpt to avoid full reproduction
  const excerpt = p.body[0] || p.description;

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Voltar ao blog
        </Link>
        {p.date && (
          <time className="text-xs uppercase tracking-[0.2em] text-ember">{p.date}</time>
        )}
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl text-balance">{p.title}</h1>
        {p.description && (
          <p className="mt-6 text-lg text-muted-foreground text-pretty">{p.description}</p>
        )}

        {p.cover && (
          <figure className="my-10 overflow-hidden rounded-sm ring-1 ring-border">
            <img src={p.cover} alt={p.title} className="w-full" loading="eager" decoding="async" />
          </figure>
        )}

        <div className="prose prose-invert mt-8 max-w-none text-foreground/90">
          {excerpt && <p className="text-base leading-relaxed text-muted-foreground">{excerpt}</p>}
          <p className="mt-8 rounded-sm border border-border bg-surface p-5 text-sm text-muted-foreground">
            Este artigo faz parte da série de conteúdos publicados por Alexandre Machado sobre fotografia profissional. Para conversar sobre um projeto, entre em contato.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <Link to="/contato" className="rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow">
            Solicitar orçamento
          </Link>
          <Link to="/fotografo-corporativo" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
            Ver portfólio
          </Link>
        </div>
      </article>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="mb-8 font-display text-2xl font-semibold">Continue lendo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((o) => (
              <Link
                key={o.slug}
                to="/blog/$slug"
                params={{ slug: o.slug }}
                className="group block rounded-sm border border-border bg-background p-5 hover:border-ember"
              >
                {o.date && <time className="text-xs uppercase tracking-wider text-muted-foreground">{o.date}</time>}
                <h3 className="mt-3 line-clamp-2 font-display text-base font-semibold group-hover:text-ember">{o.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
