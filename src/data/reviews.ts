// Avaliações reais do perfil "Ale Fotógrafo" no Google (Google Maps / Perfil da Empresa).
// Fonte: Google Places API — não editar textos, são depoimentos publicados por clientes.

export const googleReviewsSummary = {
  ratingValue: 4.9,
  reviewCount: 144,
  bestRating: 5,
  profileUrl: "https://maps.google.com/?cid=624227612892811793",
};

export interface GoogleReview {
  author: string;
  rating: number;
  date: string; // ISO
  when: string; // texto relativo
  text: string;
}

export const googleReviews: GoogleReview[] = [
  {
    author: "Jean Duarte",
    rating: 5,
    date: "2026-05-12",
    when: "3 meses atrás",
    text:
      "Satisfação e agradecimento. Profissional dedicado e que busca entender seu momento para estruturar o trabalho a atender às suas expectativas. Recomendo sem dúvida e com a certeza de que me acompanhará daqui para frente.",
  },
  {
    author: "Patricia Martinelli",
    rating: 5,
    date: "2025-12-05",
    when: "8 meses atrás",
    text:
      "Ale é um fotógrafo sensacional! Muito profissional e super detalhista. Te deixa à vontade e confiante para tirar as melhores fotos.",
  },
  {
    author: "alessandro chagas",
    rating: 5,
    date: "2025-08-11",
    when: "12 meses atrás",
    text:
      "Simplesmente fantástico! É um baita profissional, uma pessoa paciente, super do bem. Carismático, atencioso e perfeccionista no que faz. Super recomendo!",
  },
  {
    author: "Silvio Valente",
    rating: 5,
    date: "2025-07-01",
    when: "um ano atrás",
    text:
      "Alexandre tem a rara combinação de experiência, competência e simpatia. Sem abdicar do rigor técnico, consegue fazer as fotos de forma leve, e assim extrai o melhor resultado. Recomendo fortemente.",
  },
  {
    author: "Isabelle Bianchi",
    rating: 5,
    date: "2025-04-16",
    when: "um ano atrás",
    text:
      "Parabenizo o Ale Fotógrafo pelo profissionalismo impecável. Seu trabalho é sensacional, com fotos de extrema qualidade, autenticidade, beleza e harmonia. Recomendo de olhos fechados!",
  },
];

export const reviewSchema = googleReviews.map((r) => ({
  "@type": "Review",
  author: { "@type": "Person", name: r.author },
  datePublished: r.date,
  reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
  reviewBody: r.text,
}));

export const aggregateRatingSchema = {
  "@type": "AggregateRating",
  ratingValue: googleReviewsSummary.ratingValue,
  reviewCount: googleReviewsSummary.reviewCount,
  bestRating: googleReviewsSummary.bestRating,
  worstRating: 1,
};
