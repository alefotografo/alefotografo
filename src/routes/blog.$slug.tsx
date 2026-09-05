import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { postBySlug, posts, site } from "@/data/catalog";
import { postBody } from "@/data/postBodies";
import { postSeo } from "@/data/postSeo";


import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { PillarLinks } from "@/components/site/PillarLinks";
import { LinkHub } from "@/components/site/LinkHub";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { relatedCategories, relatedPosts } from "@/lib/related";
import { postCover } from "@/lib/postCover";
import { SmartImage } from "@/components/site/SmartImage";
import { autoLink } from "@/lib/autoLink";
import { MarkdownBlock } from "@/lib/markdownBlocks";
import { bridgeFor } from "@/data/postBridges";
import { Segments } from "@/components/site/EditorialBlock";
import { ArrowLeft } from "lucide-react";

const MONTHS_PT: Record<string, string> = {
  janeiro: "01", fevereiro: "02", "março": "03", marco: "03", abril: "04",
  maio: "05", junho: "06", julho: "07", agosto: "08", setembro: "09",
  outubro: "10", novembro: "11", dezembro: "12",
};

function toISODate(input?: string): string | undefined {
  if (!input) return undefined;
  const m = input.toLowerCase().match(/(\d{1,2})\s+de\s+([a-zç]+)\s+de\s+(\d{4})/);
  if (!m) return /^\d{4}-\d{2}-\d{2}/.test(input) ? input : undefined;
  const day = m[1].padStart(2, "0");
  const month = MONTHS_PT[m[2]];
  if (!month) return undefined;
  return `${m[3]}-${month}-${day}`;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = postBySlug(params.slug);
    if (!p) throw notFound();
    // O corpo do texto vive num módulo próprio: só esta rota o carrega.
    return { ...p, ...postBody(params.slug) };
  },

  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const override = postSeo[params.slug];
    return {
      meta: buildMeta({
        title: override
          ? override.title
          : loaderData.title.length > 60 ? `${loaderData.title.slice(0, 57).trimEnd()}…` : loaderData.title,
        description: override ? override.description : (() => {
          const base = (loaderData.description || loaderData.title || "").trim();
          if (base.length > 158) return `${base.slice(0, 155).trimEnd()}…`;
          if (base.length >= 50) return base;
          const suffix = ` — dicas de Alexandre Machado, fotógrafo corporativo em São Paulo.`;
          return `${base}${suffix}`.slice(0, 160);
        })(),

        path: `/blog/${params.slug}`,
        image: postCover(loaderData),
        type: "article",
      }),
      links: [{ rel: "canonical", href: `https://www.alefotografo.com.br/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${SITE_ORIGIN}/blog/${params.slug}`,
            headline: loaderData.title,
            description: loaderData.description,
            image: postCover(loaderData) ? [postCover(loaderData)] : undefined,
            url: `${SITE_ORIGIN}/blog/${params.slug}`,
            inLanguage: "pt-BR",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_ORIGIN}/blog/${params.slug}`,
            },
            author: {
              "@type": "Person",
              "@id": `${SITE_ORIGIN}/quem-e-o-ale#person`,
              name: "Alexandre Machado",
              url: `${SITE_ORIGIN}/quem-e-o-ale`,
            },
            publisher: {
              "@type": "Organization",
              "@id": `${SITE_ORIGIN}/#business`,
              name: site.name,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_ORIGIN}/img/logo-alefotografo.png`,
                width: 794,
                height: 450,
              },
            },

            // dateModified não é emitido: não há evidência de alteração
            // editorial substancial e não se cria "freshness" artificial.
            datePublished: toISODate(loaderData.date),
          }),
        },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const p = Route.useLoaderData();
  const seed = `${p.title} ${p.description}`;
  const relCats = relatedCategories(seed, undefined, 6);
  const relPostList = relatedPosts(seed, p.slug, 4);
  const more = (relPostList.length ? relPostList : posts.filter((x) => x.slug !== p.slug)).slice(0, 3);
  const bridge = bridgeFor(p.slug);
  // Shared trackers so the same category isn't linked twice across paragraphs
  const usedSlugs = new Set<string>();
  const usedPhrases = new Set<string>();

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Blog", to: "/blog" }, { label: p.title }]} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Voltar ao blog
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-ember">
          {p.date && <time dateTime={toISODate(p.date)}>{p.date}</time>}
          <span className="text-muted-foreground">
            {Math.max(1, Math.round(p.body.join(" ").split(/\s+/).length / 200))} min de leitura
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl text-balance">{p.title}</h1>
        {p.description && (
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {autoLink(p.description, { usedSlugs, usedPhrases, maxLinks: 2 })}
          </p>
        )}

        {postCover(p) && (
          <figure className="my-10 overflow-hidden rounded-sm ring-1 ring-border">
            <SmartImage src={postCover(p)!} alt={p.title} className="w-full" baseWidth={768} widths={[400, 640, 768]} priority sizes="(max-width: 768px) 100vw, 768px" />
            {p.cover_credit && (
              <figcaption className="bg-surface px-4 py-2 text-xs italic text-muted-foreground">
                Foto: {p.cover_credit}
              </figcaption>
            )}
          </figure>
        )}

        <div className="prose prose-invert mt-8 max-w-none text-foreground/90 space-y-5">
          {p.body.map((para: string, i: number) => {
            const img = p.images?.find((im: { after: number }) => im.after === i);
            return (
              <div key={i}>
                <MarkdownBlock text={para} ctx={{ usedSlugs, usedPhrases }} />
                {img && (
                  <figure className="my-8 overflow-hidden rounded-sm ring-1 ring-border">
                    <SmartImage src={img.src} alt={img.alt} className="w-full" baseWidth={768} widths={[400, 640, 768]} sizes="(max-width: 768px) 100vw, 768px" />
                    <figcaption className="bg-surface px-4 py-2 text-xs text-muted-foreground">
                      {img.alt}
                      {img.credit && (
                        <span className="mt-1 block italic">Foto: {img.credit}</span>
                      )}
                    </figcaption>
                  </figure>
                )}
              </div>
            );
          })}
          {bridge && (
            <div className="mt-8 space-y-4 border-l-2 border-ember/50 pl-5">
              {bridge.paragraphs.map((parts, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  <Segments parts={parts} />
                </p>
              ))}
            </div>
          )}
          <p className="mt-8 rounded-sm border border-border bg-surface p-5 text-sm text-muted-foreground">
            Este artigo faz parte da série de conteúdos publicados por Alexandre Machado sobre fotografia profissional. Para conversar sobre um projeto, <Link to="/contato" className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">entre em contato</Link> ou veja a <Link to="/fotografo-corporativo" className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">galeria completa de fotos</Link>.
          </p>
        </div>

        <QuoteBlock />

        <PillarLinks seed={`${p.title} ${p.description} ${p.body.slice(0, 3).join(" ")}`} />

        <LinkHub
          seed={`${p.title} ${p.description} ${p.body.slice(0, 4).join(" ")}`}
          exclude={[`/blog/${p.slug}`]}
          excludeSlug={p.slug}
          title="10 páginas relacionadas"
        />

        <RelatedLinks cats={relCats} posts={relPostList} title="Assuntos relacionados" />



        <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
          <Link to="/contato" className="rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow">
            Solicitar orçamento
          </Link>
          <Link to="/fotografo-corporativo" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
            Ver fotos
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
