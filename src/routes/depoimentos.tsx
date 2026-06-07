import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  link: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Leandro Capolupo",
    role: "Gerente de Planejamento Financeiro",
    text: "Fiz um trabalho com o Alexandre recentemente e foi muito bacana! Profissional super ágil, competente e focado na qualidade. Além de super divertido durante todo o processo, o resultado foi ótimo!",
    link: "https://www.linkedin.com/in/leandroportocapolupo/",
  },
  {
    name: "Maria Clara Cardoso",
    role: "Psicóloga, Coach e Palestrante",
    text: "Excelente profissional. Alexandre fez minhas fotos profissionais em meu consultório e o resultado do trabalho foi incrível. Recebi as fotos tratadas no final da sessão. Além da pontualidade, compromisso e amor ao trabalho que marcam o profissional, ressalto a facilidade de diálogo e atenção com o cliente.",
    link: "https://www.linkedin.com/in/maria-clara-cardoso-7869b225/",
  },
  {
    name: "Anelise Duarte",
    role: "Marketing and Sales Experienced Executive",
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
    text: "Alexandre tem sensibilidade artística e é perspicaz em planejar bem o movimento, a luz e o momento para gerar o melhor resultado. Profissional rápido, pontual, sério e focado em obter a melhor foto. O senso estético apurado permite a ele usar da expertise para direcionar o cliente a fotografar com naturalidade. O resultado que Alexandre me entregou foram fotos profissionais que transmitem segurança e leveza.",
    link: "https://www.linkedin.com/in/carolina-sasdelli-marani-a8a32611b/",
  },
  {
    name: "Vanessa Cantieri",
    role: "Coordenadora Administrativa — Rocha & Queiroz Advogados Associados",
    text: "O fotógrafo Alexandre nos entregou um excelente trabalho! É muito carismático, transmite leveza e naturalidade às fotos. A segurança que ele passa resulta em fotos confiantes e ricas de detalhes. Surpreendente, pontual, cumpre o que promete. Desejo sucesso!",
    link: "https://www.linkedin.com/in/vanessa-cantieri-353b1753/",
  },
];

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: buildMeta({
      title: "Depoimentos de clientes — Alê Fotógrafo",
      description:
        "O que dizem clientes que contrataram Alexandre Machado para fotografia e vídeo corporativo em São Paulo.",
      path: "/depoimentos",
    }),
    links: [{ rel: "canonical", href: "https://alefotografos.com.br/depoimentos" }],
  }),
  component: Depoimentos,
});

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

function Avatar({ name }: { name: string }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember/15 font-display text-sm font-semibold text-ember"
      aria-hidden="true"
    >
      {initials(name)}
    </div>
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
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col rounded-sm border border-border bg-surface p-6 sm:p-8"
            >
              <Quote className="absolute right-4 top-4 text-ember/15 sm:right-6 sm:top-6" size={40} strokeWidth={1} aria-hidden="true" />
              <blockquote className="relative text-base leading-relaxed text-foreground/90 md:text-lg">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                <Avatar name={t.name} />
                <div className="min-w-0 flex-1">
                  <p className="font-display font-semibold leading-tight">{t.name}</p>
                  <p className="text-sm text-muted-foreground leading-tight">{t.role}</p>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs text-ember hover:underline"
                    aria-label={`Ver perfil de ${t.name} no LinkedIn`}
                  >
                    Ver no LinkedIn →
                  </a>
                </div>
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
