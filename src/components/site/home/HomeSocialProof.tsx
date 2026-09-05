import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { googleBusinessProfileUrl, googleReviewUrl, googleReviews, googleReviewsSummary } from "@/data/reviews";

export default function HomeSocialProof() {
  return (
      {/* Social proof — depoimentos */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Prova social</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">O que dizem nossos clientes</h2>
            </div>
            <Link to="/depoimentos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              Ver todos os depoimentos <ArrowUpRight size={14} />
            </Link>
          </div>
          <p className="mb-8 text-sm text-muted-foreground">
            Nota {googleReviewsSummary.ratingValue.toLocaleString("pt-BR")} de 5 em{" "}
            {googleReviewsSummary.reviewCount} avaliações no Google.{" "}
            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-ember underline underline-offset-4"
            >
              Ver avaliações no Google
            </a>{" "}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Avaliar
            </a>
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {googleReviews.slice(0, 3).map((r) => (
              <figure key={r.author} className="rounded-sm border border-border bg-background p-7">
                <div role="img" className="flex items-center gap-1 text-ember" aria-label={`${r.rating} de 5 estrelas`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display font-semibold">{r.author}</p>
                  <p className="text-sm text-muted-foreground">Avaliação no Google · {r.when}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="font-display text-xl font-semibold md:text-2xl">
              Empresas, profissionais e segmentos atendidos
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Produções realizadas para empresas de tecnologia, indústria, saúde, educação,
              serviços financeiros, jurídico, varejo e para profissionais liberais em São Paulo.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "Executivos e diretoria",
                "Advogados e escritórios",
                "Médicos e clínicas",
                "Indústria",
                "Tecnologia",
                "Educação",
                "Arquitetura e interiores",
                "Eventos corporativos",
                "Palestrantes",
                "Profissionais liberais",
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
}
