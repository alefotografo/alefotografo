import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { posts } from "@/data/catalog";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { postCover } from "@/lib/postCover";
import { SmartImage } from "@/components/site/SmartImage";
import { postDateISO } from "@/lib/postDate";

const PAGE_SIZE = 24;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: "Blog de Fotografia Corporativa em São Paulo",
      description: "Artigos sobre fotografia profissional, retratos corporativos, LinkedIn, vídeo e dicas para fortalecer sua imagem profissional.",
      path: "/blog",
    }),
    links: [
      { rel: "canonical", href: "https://alefotografos.com.br/blog" },
      { rel: "alternate", type: "application/rss+xml", title: "Alê Fotógrafo — Blog RSS", href: "https://alefotografos.com.br/blog/rss.xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${SITE_ORIGIN}/blog`,
          name: "Blog — Alê Fotógrafo",
          url: `${SITE_ORIGIN}/blog`,
          inLanguage: "pt-BR",
          blogPost: posts.slice(0, 20).map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_ORIGIN}/blog/${p.slug}`,
            datePublished: postDateISO(p.date),
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function normalize(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return posts;
    return posts.filter((p) => normalize(`${p.title} ${p.description}`).includes(q));
  }, [query]);

  const visible = filtered.slice(0, limit);

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

          <div className="mt-8 max-w-md">
            <label htmlFor="blog-search" className="sr-only">
              Buscar artigos
            </label>
            <div className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 focus-within:border-ember">
              <Search size={16} className="shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setLimit(PAGE_SIZE);
                }}
                placeholder="Buscar por tema: LinkedIn, retrato, evento…"
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "artigo encontrado" : "artigos encontrados"}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {visible.length === 0 ? (
          <p className="text-muted-foreground">
            Nenhum artigo encontrado para “{query}”. Tente outro termo ou{" "}
            <Link to="/contato" className="text-ember underline underline-offset-2">
              fale comigo
            </Link>
            .
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-ember"
              >
                {postCover(p) && (
                  <div className="aspect-[16/10] overflow-hidden bg-background">
                    <SmartImage
                      src={postCover(p)!}
                      alt={p.title}
                      width={640}
                      height={400}
                      baseWidth={768}
                      priority={i < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="h-full w-full object-cover group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  {p.date && (
                    <time dateTime={postDateISO(p.date)} className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.date}
                    </time>
                  )}
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember">{p.title}</h2>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
                  <span className="mt-4 text-xs font-medium uppercase tracking-wider text-ember">Ler artigo →</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {visible.length < filtered.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setLimit((n) => n + PAGE_SIZE)}
              className="rounded-sm border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-ember hover:text-ember"
            >
              Carregar mais artigos ({filtered.length - visible.length} restantes)
            </button>
          </div>
        )}
      </section>
    </>
  );
}
