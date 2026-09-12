import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { googleReviewsSummary } from "@/data/reviews";
import {
  allTestimonials,
  sourceLabel,
  testimonialInitials,
  type Testimonial,
} from "@/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div role="img" className="flex items-center gap-0.5 text-ember" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-sm border border-border bg-background p-6">
      <Quote
        className="absolute right-4 top-4 text-ember/15"
        size={36}
        strokeWidth={1}
        aria-hidden="true"
      />
      <Stars rating={t.rating} />
      <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember/15 font-display text-xs font-semibold text-ember"
          aria-hidden="true"
        >
          {testimonialInitials(t.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold leading-tight">{t.name}</p>
          <p className="text-xs text-muted-foreground">
            {t.role ? `${t.role} · ` : ""}
            {sourceLabel[t.source]}
            {t.when ? ` · ${t.when}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsCarousel({
  title = "O que os clientes dizem",
  subtitle,
  testimonials = allTestimonials,
}: {
  title?: string;
  subtitle?: string;
  testimonials?: readonly Testimonial[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    sync();
    const t = window.setTimeout(sync, 300);
    api.on("init", sync);
    api.on("select", sync);
    api.on("reInit", sync);
    api.on("settle", sync);
    return () => {
      window.clearTimeout(t);
      api.off("init", sync);
      api.off("select", sync);
      api.off("reInit", sync);
      api.off("settle", sync);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 6000);
    return () => window.clearInterval(id);
  }, [api, paused]);

  const goTo = useCallback((i: number) => api?.scrollTo(i), [api]);

  return (
    <section
      className="border-t border-border bg-surface"
      aria-label="Depoimentos de clientes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              Depoimentos
            </p>
            <h2 className="font-display text-2xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              {subtitle ??
                `Nota ${googleReviewsSummary.ratingValue.toLocaleString("pt-BR")} de 5 em ${googleReviewsSummary.reviewCount} avaliações no Google.`}{" "}
              <a
                href={googleReviewsSummary.profileUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-11 items-center text-ember underline underline-offset-4 md:min-h-0"
              >
                Ver no Google
              </a>{" "}
              ·{" "}
              <Link to="/depoimentos" className="inline-flex min-h-11 items-center text-ember underline underline-offset-4 md:min-h-0">
                Todos os depoimentos
              </Link>
            </p>
          </div>
        </div>

        <Carousel
          className="mt-10"
          setApi={setApi}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-6 items-stretch">
            {testimonials.map((t) => (
              <CarouselItem
                key={`${t.source}-${t.name}`}
                className="h-full pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard t={t} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Selecionar depoimento">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  aria-current={i === selected}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 rounded-full transition-all ${
                      i === selected ? "w-6 bg-ember" : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                </button>

              ))}
            </div>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
