import { googleReviews, googleReviewsSummary } from "@/data/reviews";

export function Testimonials({
  title = "O que os clientes dizem",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">{title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {subtitle ??
            `Nota ${googleReviewsSummary.ratingValue.toLocaleString("pt-BR")} de 5 em ${googleReviewsSummary.reviewCount} avaliações no Google.`}{" "}
          <a
            href={googleReviewsSummary.profileUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-ember underline underline-offset-4"
          >
            Ver avaliações no Google
          </a>
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((r) => (
            <figure key={r.author} className="rounded-sm border border-border bg-background p-6">
              <div className="flex items-center gap-1 text-ember" aria-label={`${r.rating} de 5 estrelas`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {r.author}
                <span className="block text-xs font-normal text-muted-foreground">
                  Avaliação no Google · {r.when}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
