import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { Quote } from "lucide-react";

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
    name: "Cliente corporativo",
    role: "Diretor de Marketing",
    text: "Trabalho de altíssima qualidade técnica e estratégica. As imagens elevaram instantaneamente a percepção da nossa marca em todos os canais digitais.",
  },
  {
    name: "Cliente corporativo",
    role: "Sócia de escritório de advocacia",
    text: "Profissionalismo do início ao fim. Alexandre entendeu nosso posicionamento e entregou retratos que transmitem autoridade e confiança.",
  },
];

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: buildMeta({
      title: "Depoimentos de clientes — Alê Fotógrafo",
      description: "O que dizem clientes que contrataram Alexandre Machado para fotografia e vídeo corporativo em São Paulo.",
      path: "/depoimentos",
    }),
    links: [{ rel: "canonical", href: "/depoimentos" }],
  }),
  component: Depoimentos,
});

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
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
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
