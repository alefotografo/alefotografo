import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { site } from "@/data/catalog";
import { Quote } from "lucide-react";
import {
  allTestimonials,
  sourceLabel,
  testimonialInitials,
  type Testimonial,
} from "@/data/testimonials";
import { aggregateRatingSchema, googleReviewsSummary } from "@/data/reviews";

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alê Fotógrafo",
  url: "https://alefotografo.com.br/depoimentos",
  telephone: "+55-11-91355-0533",
  email: "comercial@alefotografos.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda Santos, 1165",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01419-002",
    addressCountry: "BR",
  },
  sameAs: [site.instagram, site.linkedin],
  aggregateRating: aggregateRatingSchema,
  review: allTestimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    ...(t.date ? { datePublished: t.date } : {}),
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.text,
  })),
};

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: buildMeta({
      title: "Depoimentos de Clientes de Fotos Corporativas",
      description:
        "Depoimentos reais de empresas e executivos que contrataram Alê Fotógrafo para fotos corporativas, retratos e vídeo institucional em São Paulo.",
      path: "/depoimentos",
    }),
    links: [{ rel: "canonical", href: "https://alefotografo.com.br/depoimentos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(reviewsSchema),
      },
    ],
  }),
  component: Depoimentos,
});

function Avatar({ name }: { name: string }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember/15 font-display text-sm font-semibold text-ember"
      aria-hidden="true"
    >
      {testimonialInitials(name)}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex flex-col rounded-sm border border-border bg-surface p-6 sm:p-8">
      <Quote
        className="absolute right-4 top-4 text-ember/15 sm:right-6 sm:top-6"
        size={40}
        strokeWidth={1}
        aria-hidden="true"
      />
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-0.5 text-ember" aria-label={`${t.rating} de 5 estrelas`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i} aria-hidden="true">
              ★
            </span>
          ))}
        </span>
        <span className="rounded-full border border-border px-2 py-0.5 text-[11px] uppercase tracking-wide text-muted-foreground">
          {t.source === "google" ? "Google" : "LinkedIn"}
        </span>
      </div>
      <blockquote className="relative mt-4 text-base leading-relaxed text-foreground/90 md:text-lg">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
        <Avatar name={t.name} />
        <div className="min-w-0 flex-1">
          <p className="font-display font-semibold leading-tight">{t.name}</p>
          <p className="text-sm leading-tight text-muted-foreground">
            {t.role ?? sourceLabel[t.source]}
            {t.when ? ` · ${t.when}` : ""}
          </p>
          {t.link ? (
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-1 inline-block text-xs text-ember hover:underline"
              aria-label={`Ver depoimento de ${t.name}`}
            >
              {t.source === "google" ? "Ver no Google →" : "Ver no LinkedIn →"}
            </a>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

function Depoimentos() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Depoimentos</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            O que dizem nossos clientes
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Profissionais e empresas que confiaram em Alexandre Machado para construir sua imagem.
            Nota {googleReviewsSummary.ratingValue.toLocaleString("pt-BR")} de 5 em{" "}
            {googleReviewsSummary.reviewCount} avaliações no Google.
          </p>
          <a
            href={googleReviewsSummary.profileUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mt-4 inline-block text-sm text-ember underline underline-offset-4"
          >
            Ver o perfil no Google
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {allTestimonials.map((t) => (
            <Card key={`${t.source}-${t.name}`} t={t} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Quer ser o próximo depoimento?</h2>
            <p className="mt-2 text-muted-foreground">Solicite um orçamento sem compromisso.</p>
          </div>
          <Link to="/contato" className="rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow">
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}
