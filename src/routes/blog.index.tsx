import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: "Blog de Fotografia Corporativa em São Paulo",
      description: "Artigos sobre fotografia profissional, retratos corporativos, LinkedIn, vídeo e dicas para fortalecer sua imagem profissional.",
      path: "/blog",
    }),
    links: [{ rel: "canonical", href: "https://alefotografos.com.br/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Blog</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Insights sobre fotografia e imagem profissional
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            {posts.length} artigos publicados sobre retrato corporativo, LinkedIn, equipamentos, dicas e estratégia de imagem para profissionais e empresas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-ember"
            >
              {p.cover && (
                <div className="aspect-[16/10] overflow-hidden bg-background">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {p.date && <time className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</time>}
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember">{p.title}</h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <span className="mt-4 text-xs font-medium uppercase tracking-wider text-ember">Ler artigo →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
