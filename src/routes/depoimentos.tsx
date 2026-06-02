import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { buildMeta } from "@/lib/seo";
import { Quote, Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/google-reviews.functions";

const testimonials = [
  {
    name: "Leandro Capolupo",
    role: "Gerente de Planejamento Financeiro",
    text: "Fiz um trabalho com o Alexandre recentemente e foi muito bacana. Profissional super ágil, competente e focado na qualidade. Além de super divertido durante todo o processo, o resultado foi ótimo!",
    link: "https://www.linkedin.com/in/leandroportocapolupo/",
  },
  {
    name: "Maria Clara Cardoso",
    role: "Psicóloga, Coach e Palestrante",
    text: "Excelente profissional. Alexandre fez minhas fotos profissionais em meu consultório e o resultado foi incrível. Recebi as fotos tratadas no final da sessão. Pontualidade, compromisso e amor ao trabalho marcam o profissional, e ressalto a facilidade de diálogo e atenção com o cliente.",
    link: "https://www.linkedin.com/in/maria-clara-cardoso-7869b225/",
  },
  {
    name: "Anelise Duarte",
    role: "Marketing and Sales Executive",
    text: "Recentemente atualizei minhas fotos profissionais com o Alexandre. Achei o trabalho bastante profissional. Alexandre é pontual, possui um equipamento de qualidade e entrega o que promete. Recomendo o trabalho dele!",
    link: "https://www.linkedin.com/in/aneliseduarte/",
  },
  {
    name: "Julio Cesar Ponte Ferreira",
    role: "Associado no IBGC — Instituto Brasileiro de Governança Corporativa",
    text: "Profissional ético, paciente, dedicado, detalhista, preciso, com sensibilidade apurada e muito empenhado em entregar o melhor. Respeita o seu tempo.",
    link: "https://www.linkedin.com/in/julio-cesar-ponte-ferreira-b6a96a194/",
  },
  {
    name: "Carolina Sasdelli Marani",
    role: "Marketing Sector Manager LATAM — Sealed Air Corporation",
    text: "Alexandre tem sensibilidade artística e é perspicaz em planejar bem o movimento, a luz e o momento para gerar o melhor resultado. Profissional rápido, pontual, sério e focado em obter a melhor foto. O senso estético apurado permite a ele direcionar o cliente a fotografar com naturalidade. Entregou fotos profissionais que transmitem segurança e leveza.",
    link: "https://www.linkedin.com/in/carolina-sasdelli-marani-a8a32611b/",
  },
  {
    name: "Vanessa Cantieri",
    role: "Coordenadora Administrativa — Rocha & Queiroz Advogados Associados",
    text: "O fotógrafo Alexandre nos entregou um excelente trabalho! É muito carismático, transmite leveza e naturalidade às fotos. A segurança que ele passa resulta em fotos confiantes e ricas de detalhes. Surpreendente, pontual, cumpre o que promete!",
    link: "https://www.linkedin.com/in/vanessa-cantieri-353b1753/",
  },
];

const googleReviewsQuery = queryOptions({
  queryKey: ["google-reviews"],
  queryFn: () => getGoogleReviews(),
  staleTime: 1000 * 60 * 60, // 1h
});

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: buildMeta({
      title: "Depoimentos de clientes — Alê Fotógrafo",
      description:
        "O que dizem clientes que contrataram Alexandre Machado para fotografia e vídeo corporativo em São Paulo.",
      path: "/depoimentos",
    }),
    links: [{ rel: "canonical", href: "/depoimentos" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(googleReviewsQuery),
  component: Depoimentos,
});

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < Math.round(rating) ? "fill-ember text-ember" : "text-border"}
        />
      ))}
    </div>
  );
}

function Depoimentos() {
  const { data: google } = useSuspenseQuery(googleReviewsQuery);

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
          </p>
          {google.total > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-sm border border-border bg-surface px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-semibold">{google.rating.toFixed(1)}</span>
                <div>
                  <Stars rating={google.rating} />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {google.total} avaliações no Google
                  </p>
                </div>
              </div>
              <a
                href={google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ember hover:underline"
              >
                Ver no Google Meu Negócio →
              </a>
            </div>
          )}
        </div>
      </section>

      {google.reviews.length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-ember">
                  Google Meu Negócio
                </p>
                <h2 className="font-display text-2xl font-semibold md:text-3xl">
                  Avaliações recentes do Google
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {google.reviews.map((r, i) => (
                <figure
                  key={i}
                  className="relative rounded-sm border border-border bg-background p-8"
                >
                  <Stars rating={r.rating} />
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    {r.authorPhoto && (
                      <img
                        src={r.authorPhoto}
                        alt={r.author}
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <p className="font-display font-semibold">{r.author}</p>
                      <p className="text-xs text-muted-foreground">{r.relativeTime}</p>
                    </div>
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-ember hover:underline"
                      >
                        Google →
                      </a>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-ember">LinkedIn</p>
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Depoimentos de clientes corporativos
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-sm border border-border bg-surface p-8"
            >
              <Quote className="absolute right-6 top-6 text-ember/20" size={48} strokeWidth={1} />
              <blockquote className="text-base leading-relaxed text-foreground/90 md:text-lg">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                {t.link && (
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-ember hover:underline"
                  >
                    Ver no LinkedIn →
                  </a>
                )}
              </figcaption>
            </figure>
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
