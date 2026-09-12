import { googleBusinessProfileUrl, googleReviewsSummary } from "@/data/reviews";
import { googleTestimonials } from "@/data/testimonials";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";

interface NumeroItem {
  valor: string;
  legenda: string;
  href?: string;
}

const NUMEROS: readonly NumeroItem[] = [
  { valor: "30+", legenda: "anos de experiência" },
  { valor: "200+", legenda: "empresas atendidas" },
  { valor: "300+", legenda: "executivos fotografados" },
  {
    valor: "4,9",
    legenda: `no Google · ${googleReviewsSummary.reviewCount} avaliações`,
    href: googleBusinessProfileUrl,
  },
];

function StarRow({ ariaLabel }: { ariaLabel: string }) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className="text-ember"
    >
      ★★★★★
    </span>
  );
}

export default function AgilidadeProva() {
  return (
    <>
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="font-display text-[24px] font-semibold leading-[1.2] text-foreground md:text-[32px]">
              Experiência que acompanha cada produção
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-muted-foreground md:mt-6 md:text-[17px]">
              Mais de três décadas de atuação profissional trouxeram experiência em diferentes
              ambientes, segmentos e desafios de produção. Esse repertório orienta o planejamento,
              a execução e a entrega de cada projeto.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 md:mt-12 md:grid-cols-4 md:gap-6">
            {NUMEROS.map((item) => (
              <div key={item.valor} className="text-center">
                <p
                  className="font-display text-[32px] font-semibold leading-[1.1] text-foreground md:text-[48px]"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {item.valor}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-11 flex-col items-center justify-center gap-1 text-[14px] leading-[1.4] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none md:min-h-0"
                  >
                    <span>{item.legenda}</span>
                    <StarRow ariaLabel="4,9 de 5 estrelas no Google" />
                  </a>
                ) : (
                  <p className="mt-2 text-[14px] leading-[1.4] text-muted-foreground">
                    {item.legenda}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

       <TestimonialsCarousel
         title="Depoimentos de clientes"
         testimonials={googleTestimonials}
       />
    </>
  );
}
