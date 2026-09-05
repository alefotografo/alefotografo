import { site } from "./site";

const ORIGIN = "https://www.alefotografo.com.br";

export const PERSON_ID = `${ORIGIN}/quem-e-o-ale#person`;
export const BUSINESS_ID = `${ORIGIN}/#business`;

export const personImage =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG";

/** Anos de carreira confirmados pelo fotógrafo (desde 1995). */
export const personYearsOfExperience = 30;

export const personKnowsAbout = [
  "Retrato corporativo",
  "Retrato executivo",
  "Foto profissional",
  "Foto para LinkedIn",
  "Headshot profissional",
  "Retratos de médicos",
  "Retratos de advogados",
  "Retrato de CEOs e C-levels",
  "Direção de pose",
  "Iluminação de retrato",
  "Fotografia corporativa em São Paulo",
  "Direção de vídeo institucional",
];

/**
 * Perfis oficiais. Só entram URLs confirmadas — `sameAs` é o que permite ao
 * Google reconciliar a entidade, e um link errado quebra a reconciliação.
 * Quando o item no Wikidata existir, acrescentar a URL aqui.
 */
export const personSameAs = [site.instagram, site.linkedin];

/**
 * Definição única da entidade Alexandre Machado. Referenciada por @id no
 * @graph do root, no ProfilePage de /quem-e-o-ale e como author dos artigos.
 */
export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Alexandre Machado",
  alternateName: ["Alê Fotógrafo", "Alê"],
  jobTitle: "Fotógrafo de retrato corporativo",
  description:
    "Fotógrafo em São Paulo com mais de 30 anos de carreira. Fotografa pessoalmente retratos corporativos, headshots para LinkedIn, retratos de executivos, médicos e advogados, e dirige produções audiovisuais institucionais.",
  image: personImage,
  url: `${ORIGIN}/quem-e-o-ale`,
  mainEntityOfPage: { "@id": `${ORIGIN}/quem-e-o-ale` },
  worksFor: { "@id": BUSINESS_ID },
  founderOf: { "@id": BUSINESS_ID },
  email: `mailto:${site.email}`,
  telephone: `+${site.whatsapp}`,
  nationality: { "@type": "Country", name: "Brasil" },
  knowsLanguage: ["pt-BR", "en"],
  knowsAbout: personKnowsAbout,
  hasOccupation: {
    "@type": "Occupation",
    name: "Fotógrafo corporativo",
    occupationalCategory: "2618-05 Fotógrafo (CBO)",
    occupationLocation: { "@type": "City", name: "São Paulo" },
    skills:
      "Retrato corporativo, retrato executivo, headshot para LinkedIn, direção de pose, iluminação de estúdio e locação, direção de vídeo institucional",
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      // schema.org não tem "yearsOfExperience" em Person: 30 anos = 360 meses.
      monthsOfExperience: personYearsOfExperience * 12,
    },
  },
  areaServed: [
    { "@type": "City", name: "São Paulo" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de São Paulo" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: personSameAs,
};

/** Fatos verificáveis exibidos em HTML na página da entidade. */
export const personFacts: { term: string; value: string }[] = [
  { term: "Nome", value: "Alexandre Machado" },
  { term: "Também conhecido como", value: "Alê Fotógrafo" },
  { term: "Atuação", value: "Fotógrafo de retrato corporativo e executivo" },
  { term: "Anos de carreira", value: `${personYearsOfExperience}+ anos (desde ${site.foundingYear})` },
  { term: "Base", value: `${site.address.street} — ${site.address.district}, ${site.address.locality}/${site.address.region}` },
  { term: "Atende", value: "São Paulo e região metropolitana" },
  {
    term: "Especializações",
    value: "Retrato executivo, headshot para LinkedIn, médicos, advogados, equipes e eventos corporativos",
  },
  { term: "Idiomas", value: "Português e inglês" },
];
