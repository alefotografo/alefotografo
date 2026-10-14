// Schema das páginas de bairro (/fotografo-corporativo-em/:slug).
// Fonte única: o endereço e as coordenadas do estúdio vêm de `site`, a área
// atendida vem de `bairros`. Nenhum dado inventado aqui.

import { site } from "@/data/site";
import { bairros, type Bairro } from "@/data/bairros";
import { BUSINESS_ID, PERSON_ID } from "@/data/person";
import { aggregateRatingSchema } from "@/data/reviews";

const SITE_ORIGIN = "https://alefotografo.com.br";

/** Cidade real de cada região usada em `bairros.regiao`. */
function cidadeDaRegiao(regiao: string): string {
  if (regiao.startsWith("Barueri")) return "Barueri";
  if (regiao.startsWith("Diadema")) return "Diadema";
  if (regiao.startsWith("Santo André")) return "Santo André";
  if (regiao.startsWith("São Bernardo")) return "São Bernardo do Campo";
  if (regiao.startsWith("São Caetano")) return "São Caetano do Sul";
  return "São Paulo";
}

/** Todas as cidades cobertas pelas páginas de bairro, sem repetição. */
export const cidadesAtendidas: string[] = Array.from(
  new Set(bairros.map((b) => cidadeDaRegiao(b.regiao))),
);

const studioAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
} as const;

const studioGeo = {
  "@type": "GeoCoordinates",
  latitude: site.geo.lat,
  longitude: site.geo.lon,
} as const;

/** Lugar (bairro) com a cidade e o estado como contêiner. */
function bairroPlace(b: Bairro) {
  const cidade = cidadeDaRegiao(b.regiao);
  return {
    "@type": "Place",
    name: `${b.nome}, ${cidade} — SP`,
    containedInPlace: {
      "@type": "City",
      name: cidade,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "São Paulo",
        addressCountry: "BR",
      },
    },
  };
}

/**
 * Grafo JSON-LD de uma página de bairro: ProfessionalService com a área
 * atendida declarada (bairro, bairros vizinhos da mesma região e todas as
 * cidades cobertas) e o geo do estúdio.
 */
export function bairroServiceGraph(args: {
  b: Bairro;
  url: string;
  title: string;
  description: string;
}) {
  const { b, url, title, description } = args;
  const cidade = cidadeDaRegiao(b.regiao);
  const vizinhos = bairros.filter((x) => x.regiao === b.regiao && x.slug !== b.slug);

  const prep = b.prep ?? "na";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".bairro-lead", "main p:first-of-type"],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Fotógrafo corporativo ${prep} ${b.nome}: quanto custa e como contratar?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Alexandre Machado atende ${prep} ${b.nome} para retratos executivos, headshots para LinkedIn, fotos de equipe e cobertura de eventos corporativos. Orçamento pelo WhatsApp (11) 91355-0533 ou pelo formulário em alefotografo.com.br/contato. Sessão de retrato individual a partir de R$800; equipe a partir de R$2.400; evento a partir de R$3.500.`,
            },
          },
          {
            "@type": "Question",
            name: `O fotógrafo vai até ${b.nome} ou é necessário ir ao estúdio?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `O atendimento é on-location: o fotógrafo se desloca até o escritório, sede ou espaço de evento ${prep} ${b.nome}. O estúdio no Bela Vista (Alameda Santos) também está disponível quando o ambiente da empresa não tem condições ideais de luz ou espaço.`,
            },
          },
          {
            "@type": "Question",
            name: `Qual o prazo de entrega das fotos corporativas ${prep} ${b.nome}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `O prazo padrão é de 5 a 7 dias úteis após a sessão. Para eventos ou urgências, combinar no briefing. As fotos são entregues em alta resolução por link de download, prontas para LinkedIn, site e materiais da empresa.`,
            },
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: title,
        description,
        url,
        additionalType: "https://schema.org/PhotographyBusiness",
        serviceType: "Fotografia corporativa",
        priceRange: "$$",
        currenciesAccepted: "BRL",
        // Mesmo formato publicado no nó #business em __root.tsx.
        telephone: "+55-11-91355-0533",
        email: site.email,
        image: `${SITE_ORIGIN}/og-default.jpg`,
        address: studioAddress,
        geo: studioGeo,
        hasMap: `https://maps.google.com/?cid=624227612892811793`,
        // Raio de deslocamento a partir do estúdio na Alameda Santos: cobre
        // São Paulo, o ABC Paulista e Barueri.
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: studioGeo,
          geoRadius: "40000",
        },
        areaServed: [
          bairroPlace(b),
          ...vizinhos.map(bairroPlace),
          ...cidadesAtendidas.map((c) => ({ "@type": "City", name: c })),
        ],
        parentOrganization: { "@id": BUSINESS_ID },
        provider: { "@id": BUSINESS_ID },
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        knowsLanguage: ["pt-BR", "en"],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        aggregateRating: aggregateRatingSchema,
      },
      {
        "@type": "Service",
        "@id": `${url}#offer`,
        name: `Fotografia corporativa ${b.prep ?? "na"} ${b.nome}`,
        serviceType: "Fotografia corporativa",
        description,
        provider: { "@id": `${url}#service` },
        areaServed: bairroPlace(b),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Serviços ${b.prep ?? "na"} ${b.nome}`,
          itemListElement: [
            "Retrato executivo e headshot para LinkedIn",
            "Fotografia de equipe no escritório",
            "Cobertura de evento corporativo",
            "Foto de ambiente e institucional",
            "Vídeo institucional",
          ].map((n) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: n, areaServed: { "@type": "City", name: cidade } },
          })),
        },
      },
    ],
  };
}
