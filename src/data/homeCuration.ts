// Fonte central da curadoria visual da Home (Fase 6B).
// Nenhum nome de asset deve ser escrito diretamente no JSX da Home.
import { categories } from "./catalog";

const CDN =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem";

export interface HomePhoto {
  /** URL da fotografia no acervo (CDN legado). */
  src: string;
  /** Slug da galeria/categoria de origem. */
  gallery: string;
  /** Pilar comercial ao qual a foto pertence. */
  pillar: "retrato" | "evento";
  orientation: "vertical" | "horizontal";
  /** Destino do clique — galeria existente em /fotografo-corporativo/$slug. */
  to: string;
  alt: string;
}

/** Hero definitivo da Home. */
export const heroPhoto = {
  src: `${CDN}/66874/retrato-corporativo_helio-martins-borges-filho-4.jpg`,
  gallery: "retrato-corporativo",
  alt: "Retrato corporativo de executivo fotografado por Alexandre Machado em São Paulo",
  width: 1200,
  height: 1500,
};

/** Alternativas já validadas para o recorte desktop/mobile do hero. */
export const heroAlternatives = [
  {
    src: `${CDN}/66933/retratos-profissionais_retrato-corporativo-profissionais-fotografo-alefotografo0047.jpg`,
    gallery: "fotografo-de-retratos-profissionais",
    alt: "Retrato profissional corporativo em estúdio",
  },
  {
    src: `${CDN}/130271/fotografia-para-escritorios-de-advocacia_fotografia-profissional-de-advogados-11.jpg`,
    gallery: "fotografia-para-escritorios-de-advocacia",
    alt: "Retrato profissional de advogado em escritório de advocacia",
  },
];

/** 10 fotografias reais do acervo — 6 retratos + 4 eventos. */
export const selectedWorks: HomePhoto[] = [
  {
    src: `${CDN}/66874/retrato-corporativo-em-sao-paulo_salomao-concursos-34.JPG`,
    gallery: "retrato-corporativo",
    pillar: "retrato",
    orientation: "vertical",
    to: "/fotografo-corporativo/retrato-corporativo",
    alt: "Retrato corporativo em São Paulo com direção de pose",
  },
  {
    src: `${CDN}/130271/fotografia-para-escritorios-de-advocacia_fotografia-profissional-de-advogados-4.jpg`,
    gallery: "fotografia-para-escritorios-de-advocacia",
    pillar: "retrato",
    orientation: "horizontal",
    to: "/fotografo-corporativo/fotografia-para-escritorios-de-advocacia",
    alt: "Fotografia profissional de advogados em escritório de advocacia",
  },
  {
    src: `${CDN}/153050/retratos-de-medicas_mila-rodrigues-da-silva-4.JPG`,
    gallery: "retratos-de-medicas",
    pillar: "retrato",
    orientation: "vertical",
    to: "/fotografo-corporativo/retratos-de-medicas",
    alt: "Retrato profissional de médica em consultório",
  },
  {
    src: `${CDN}/132060/fotos-profissionais-para-medicos_driuri-tomaz-de-vasconcelos-7.JPG`,
    gallery: "fotos-profissionais-para-medicos",
    pillar: "retrato",
    orientation: "horizontal",
    to: "/fotografo-corporativo/fotos-profissionais-para-medicos",
    alt: "Foto profissional de médico para divulgação e redes sociais",
  },
  {
    src: `${CDN}/66933/retratos-profissionais_retrato-corporativo-profissionais-fotografo-alefotografo0046.jpg`,
    gallery: "fotografo-de-retratos-profissionais",
    pillar: "retrato",
    orientation: "vertical",
    to: "/fotografo-corporativo/fotografo-de-retratos-profissionais",
    alt: "Retrato profissional corporativo com iluminação de estúdio",
  },
  {
    src: `${CDN}/77681/grupos-fotos-de-grupos-ou-equipes_grupos-3.jpg`,
    gallery: "fotografo-de-grupos-times-e-equipes",
    pillar: "retrato",
    orientation: "horizontal",
    to: "/fotografo-corporativo/fotografo-de-grupos-times-e-equipes",
    alt: "Foto de equipe corporativa em grupo no escritório",
  },
  {
    src: `${CDN}/90046/fotografo-de-eventos-corporativos_encontro-farmarcas-2022-2467.JPG`,
    gallery: "fotografo-de-eventos-corporativos",
    pillar: "evento",
    orientation: "horizontal",
    to: "/fotografo-corporativo/fotografo-de-eventos-corporativos",
    alt: "Cobertura fotográfica de evento corporativo em São Paulo",
  },
  {
    src: `${CDN}/66941/fotografo-de-eventos-corporativos-em-sao-paulo_jantar-abradilan-2019-278.jpg`,
    gallery: "eventos-corporativos",
    pillar: "evento",
    orientation: "horizontal",
    to: "/fotografo-corporativo/eventos-corporativos",
    alt: "Jantar de evento empresarial fotografado em São Paulo",
  },
  {
    src: `${CDN}/66936/fotografo-de-feiras-de-negocios-em-sao-paulo_procooler-39.jpg`,
    gallery: "fotografo-feiras-stands",
    pillar: "evento",
    orientation: "horizontal",
    to: "/fotografo-corporativo/fotografo-feiras-stands",
    alt: "Cobertura fotográfica de feira de negócios e stand",
  },
  {
    src: `${CDN}/89025/festa-da-firma-confraternizacoes_swift-701.jpg`,
    gallery: "fotografo-festa-de-confraternizacao",
    pillar: "evento",
    orientation: "vertical",
    to: "/fotografo-corporativo/fotografo-festa-de-confraternizacao",
    alt: "Festa de confraternização de empresa fotografada em São Paulo",
  },
];

/** Título da galeria vindo do catálogo (evita duplicar dados). */
export function galleryTitle(slug: string): string {
  return categories.find((c) => c.slug === slug)?.title ?? "";
}

/** CTAs comerciais abaixo do grid — URLs existentes, não criar novas. */
export const worksCtas = [
  { label: "Retratos Corporativos", to: "/fotografo-corporativo/retrato-corporativo" },
  { label: "Cobertura de Eventos Corporativos", to: "/eventos-corporativos" },
] as const;
