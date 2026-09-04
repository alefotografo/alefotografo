import { Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { waLink } from "@/lib/whatsapp";
import { FaqList } from "@/components/site/Faq";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { LinkHub } from "@/components/site/LinkHub";
import { SITE_ORIGIN } from "@/lib/seo";
import { aggregateRatingSchema, reviewSchema } from "@/data/reviews";
import { StatsBand } from "@/components/site/StatsBand";
import { deliveryKindForPath, serviceStats, statsLead } from "@/data/stats";
import { FormatsTable, type SessionFormat } from "@/components/site/FormatsTable";
import type { Faq } from "@/lib/faqs";
import { BlockText } from "@/components/site/BlockText";

export interface ServicePageConfig {
  path: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  /**
   * Bloco de resposta direta de 40–60 palavras: responde "o que é este serviço
   * e para quem" na primeira frase, sem depender do resto da página.
   */
  answerBlock: string;
  intro: string[];
  /** Tabela comparativa de formatos de sessão. */
  formats: SessionFormat[];
  /** Nota editorial apontando para o site da equipe (coberturas de grande porte). */
  teamSiteNote?: string;
  serviceType: string;
  description: string;
  /** Blocos de entregáveis do serviço. */
  blocks: { h: string; p: string }[];
  paraQuem: string[];
  ondeUsar: string[];
  comoFunciona: { h: string; p: string }[];
  gallerySlugs: string[];
  faqs: Faq[];
  wa: string;
  ctaLabel: string;
}

/** Links internos comerciais compartilhados por todas as páginas de serviço. */
const INTERNAL_LINKS: { to: string; label: string }[] = [
  { to: "/fotos-corporativas", label: "Fotografia corporativa em São Paulo" },
  { to: "/foto-profissional", label: "Foto profissional em São Paulo" },
  { to: "/fotografia-executiva", label: "Fotografia executiva" },
  { to: "/foto-profissional-para-linkedin", label: "Foto profissional para LinkedIn" },
  { to: "/fotos-profissionais-medicos", label: "Fotos profissionais para médicos" },
  { to: "/fotografia-para-advogados", label: "Fotografia para advogados" },
  { to: "/fotografia-para-clinicas", label: "Fotografia para clínicas" },
  { to: "/fotografo-empresarial", label: "Fotógrafo empresarial" },
  { to: "/fotografo-de-feira-de-negocios", label: "Fotógrafo de feira de negócios" },
  { to: "/eventos-corporativos", label: "Eventos corporativos" },
  { to: "/videos", label: "Vídeo institucional" },
];

export function servicePageSchema(cfg: ServicePageConfig) {
  const canonical = `${SITE_ORIGIN}${cfg.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: cfg.h1,
        serviceType: cfg.serviceType,
        description: cfg.answerBlock,
        disambiguatingDescription: cfg.description,
        url: canonical,
        areaServed: { "@type": "City", name: "São Paulo" },
        aggregateRating: aggregateRatingSchema,
        review: reviewSchema,
        provider: {
          "@type": "LocalBusiness",
          name: site.name,
          url: SITE_ORIGIN,
          telephone: `+${site.whatsapp}`,
          aggregateRating: aggregateRatingSchema,
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: cfg.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        inLanguage: "pt-BR",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["[data-answer-block]", "[data-faq-question]", "[data-faq-answer]"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_ORIGIN },
          { "@type": "ListItem", position: 2, name: cfg.breadcrumb, item: canonical },
        ],
      },
    ],
  };
}

export function ServicePage({ cfg }: { cfg: ServicePageConfig }) {
  const gallery = cfg.gallerySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c?.cover));
  const heroImg = gallery[0]?.cover;
  const deliveryKind = deliveryKindForPath(cfg.path);

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: cfg.breadcrumb }]} />

      <section className="relative overflow-hidden border-b border-border">
        {heroImg && (
          <div className="absolute inset-0 -z-10">
            <img
              src={imgUrl(heroImg, 1440)}
              srcSet={imgSrcSet(heroImg)}
              alt={`${cfg.h1} — São Paulo`}
              width={1600}
              height={1067}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          </div>
        )}
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            {cfg.eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-5xl">
            {cfg.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            {cfg.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(cfg.wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              {cfg.ctaLabel}
            </a>
            <Link
              to="/portfolio"
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Ver cases no portfólio
            </Link>
            <Link
              to="/contato"
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Falar com o Alê
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            30+ anos de experiência · Atendimento em São Paulo · Empresas, médicos, advogados e
            executivos
          </p>
        </div>
      </section>

      <StatsBand items={serviceStats(deliveryKind)} />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-3xl space-y-4 text-muted-foreground md:text-lg">
          <p
            data-answer-block
            className="border-l-2 border-ember pl-5 text-lg font-medium text-foreground md:text-xl"
          >
            {cfg.answerBlock}
          </p>
          <p className="text-foreground">{statsLead(deliveryKind)}</p>
          {cfg.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {cfg.teamSiteNote ? (
            <p className="rounded-sm border border-border bg-surface p-5 text-sm text-muted-foreground">
              {cfg.teamSiteNote}{" "}
              <a
                href="https://alefotografos.com.br"
                className="underline decoration-ember/50 underline-offset-4 hover:text-foreground"
              >
                alefotografos.com.br
              </a>
              .
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cfg.blocks.map((b) => (
            <article
              key={b.h}
              className="rounded-sm border border-border bg-surface p-6 transition-colors hover:border-ember"
            >
              <h2 className="font-display text-lg font-semibold">{b.h}</h2>
              <BlockText text={b.p} className="mt-3 text-sm leading-relaxed text-muted-foreground" />
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={waLink(cfg.wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento no WhatsApp
          </a>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Para quem é</h2>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {cfg.paraQuem.map((i) => (
                <li key={i} className="rounded-sm border border-border bg-background px-4 py-3">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Onde usar as imagens</h2>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {cfg.ondeUsar.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FormatsTable items={cfg.formats} />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">Como funciona</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cfg.comoFunciona.map((s) => (
            <li key={s.h} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold">{s.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </li>
          ))}
        </ol>
      </section>

      {gallery.length > 0 && (
        <section className="border-y border-border">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Prova visual: cases desse tipo de trabalho
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground text-pretty">
              As galerias abaixo servem como prova do resultado. A contratação, o que está incluído e o
              orçamento ficam nesta página; para ver todos os cases por segmento, vá ao{" "}
              <Link
                to="/portfolio"
                className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
              >
                portfólio completo
              </Link>
              .
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/fotografo-corporativo/$slug"
                    params={{ slug: c.slug }}
                    className="group block overflow-hidden rounded-sm border border-border bg-surface hover:border-ember"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={imgUrl(c.cover as string, 768)}
                        srcSet={imgSrcSet(c.cover as string, [480, 768, 1024])}
                        alt={c.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold group-hover:text-ember">
                        {c.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.subtitle}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          Imagem profissional para quem precisa transmitir confiança
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Atendimento para empresas, executivos, médicos, advogados, clínicas, escritórios, equipes
          comerciais e eventos corporativos em São Paulo.
        </p>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Perguntas frequentes</h2>
          <div className="mt-8">
            <FaqList items={cfg.faqs} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="rounded-sm border border-ember/40 bg-surface p-8 md:p-10">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">{cfg.ctaLabel}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Envie o serviço desejado, a cidade ou bairro, a data pretendida e quantas pessoas serão
            fotografadas. Com essas informações o orçamento sai fechado pelo WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(cfg.wa)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <Link
              to="/faq"
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Ver perguntas sobre orçamento
            </Link>
          </div>
        </div>

        <h2 className="mt-14 font-display text-xl font-semibold">Serviços relacionados</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {INTERNAL_LINKS.filter((l) => l.to !== cfg.path).map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground hover:border-ember hover:text-ember"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <LinkHub
          seed={`${cfg.h1} ${cfg.subtitle} ${cfg.intro.join(" ")} ${cfg.serviceType}`}
          exclude={[cfg.path]}
          title="10 páginas relacionadas"
        />
      </section>
    </>
  );
}
