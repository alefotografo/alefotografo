// Fonte única de depoimentos do site: avaliações publicadas no Google + recomendações no LinkedIn.
// Textos são de clientes reais — não editar.
import { googleReviews, googleReviewsSummary } from "@/data/reviews";

export type TestimonialSource = "google" | "linkedin";

export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  rating: number;
  source: TestimonialSource;
  /** texto relativo (Google) */
  when?: string;
  /** ISO date, quando conhecida */
  date?: string;
  link?: string;
}

export const linkedinTestimonials: Testimonial[] = [
  {
    name: "Leandro Capolupo",
    role: "Gerente de Planejamento Financeiro",
    text: "Fiz um trabalho com o Alexandre recentemente e foi muito bacana! Profissional super ágil, competente e focado na qualidade. Além de super divertido durante todo o processo, o resultado foi ótimo!",
    rating: 5,
    source: "linkedin",
    link: "https://www.linkedin.com/in/leandroportocapolupo/",
  },
  {
    name: "Maria Clara Cardoso",
    role: "Psicóloga, Coach e Palestrante",
    text: "Excelente profissional. Alexandre fez minhas fotos profissionais em meu consultório e o resultado do trabalho foi incrível. Recebi as fotos tratadas no final da sessão. Além da pontualidade, compromisso e amor ao trabalho que marcam o profissional, ressalto a facilidade de diálogo e atenção com o cliente.",
    rating: 5,
    source: "linkedin",
    link: "https://www.linkedin.com/in/maria-clara-cardoso-7869b225/",
  },
  {
    name: "Anelise Duarte",
    role: "Marketing and Sales Experienced Executive",
    text: "Recentemente atualizei minhas fotos profissionais com o Alexandre. Achei o trabalho bastante profissional. Alexandre é pontual, possui um equipamento de qualidade e entrega o que promete. Recomendo o trabalho dele!",
    rating: 5,
    source: "linkedin",
    link: "https://www.linkedin.com/in/aneliseduarte/",
  },
  {
    name: "Julio Cesar Ponte Ferreira",
    role: "Associado no IBGC — Instituto Brasileiro de Governança Corporativa",
    text: "Profissional ético, paciente, dedicado, detalhista, preciso, com sensibilidade apurada e muito empenhado em entregar o melhor. Respeita o seu tempo.",
    rating: 5,
    source: "linkedin",
    link: "https://www.linkedin.com/in/julio-cesar-ponte-ferreira-b6a96a194/",
  },
  {
    name: "Carolina Sasdelli Marani",
    role: "Marketing Sector Manager LATAM — Sealed Air Corporation",
    text: "Alexandre tem sensibilidade artística e é perspicaz em planejar bem o movimento, a luz e o momento para gerar o melhor resultado. Profissional rápido, pontual, sério e focado em obter a melhor foto. O senso estético apurado permite a ele usar da expertise para direcionar o cliente a fotografar com naturalidade. O resultado que Alexandre me entregou foram fotos profissionais que transmitem segurança e leveza.",
    rating: 5,
    source: "linkedin",
    link: "https://www.linkedin.com/in/carolina-sasdelli-marani-a8a32611b/",
  },
  {
    name: "Vanessa Cantieri",
    role: "Coordenadora Administrativa — Rocha & Queiroz Advogados Associados",
    text: "O fotógrafo Alexandre nos entregou um excelente trabalho! É muito carismático, transmite leveza e naturalidade às fotos. A segurança que ele passa resulta em fotos confiantes e ricas de detalhes. Surpreendente, pontual, cumpre o que promete. Desejo sucesso!",
    rating: 5,
    source: "linkedin",
    link: "https://www.linkedin.com/in/vanessa-cantieri-353b1753/",
  },
];

export const googleTestimonials: Testimonial[] = googleReviews.map((r) => ({
  name: r.author,
  text: r.text,
  rating: r.rating,
  source: "google" as const,
  when: r.when,
  date: r.date,
  link: googleReviewsSummary.profileUrl,
}));

/** Intercalado: Google e LinkedIn alternados, para variedade no carrossel. */
export const allTestimonials: Testimonial[] = (() => {
  const out: Testimonial[] = [];
  const max = Math.max(googleTestimonials.length, linkedinTestimonials.length);
  for (let i = 0; i < max; i++) {
    if (googleTestimonials[i]) out.push(googleTestimonials[i]!);
    if (linkedinTestimonials[i]) out.push(linkedinTestimonials[i]!);
  }
  return out;
})();

export const sourceLabel: Record<TestimonialSource, string> = {
  google: "Avaliação no Google",
  linkedin: "Recomendação no LinkedIn",
};

export function testimonialInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}
