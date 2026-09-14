// Fonte central da curadoria visual da Home (Fase 6B).
// Nenhum nome de asset deve ser escrito diretamente no JSX da Home.
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
  alt: string;
  /** Dimensões reais do asset — usadas para reservar proporção sem crop. */
  width: number;
  height: number;
  /** Nome curto exibido no portfólio da Home. */
  title?: string;
}

/** Seis frentes B2B representadas com fotografias reais do acervo. */
export const selectedWorks: HomePhoto[] = [
  {
    src: `${CDN}/102590/fotografia-corporativa-em-sao-paulo_contactone-259.jpg`,
    gallery: "fotografo-de-grupos-times-e-equipes",
    pillar: "retrato",
    orientation: "horizontal",
    alt: "Reunião de equipe em escritório corporativo em São Paulo",
    width: 1920,
    height: 1280,
    title: "Fotografia Corporativa",
  },
  {
    src: `${CDN}/102590/fotografia-corporativa-em-sao-paulo_antonio-logigo-37.jpg`,
    gallery: "fotografo-de-retratos-corporativos",
    pillar: "retrato",
    orientation: "horizontal",
    alt: "Retrato profissional de executivo em ambiente de escritório",
    width: 1920,
    height: 1670,
    title: "Retratos Profissionais",
  },
  {
    src: `${CDN}/66655/industrial_dsc7266.jpg`,
    gallery: "fotografia-industrial-em-sp",
    pillar: "retrato",
    orientation: "horizontal",
    alt: "Fotografia industrial de instalações e equipamentos",
    width: 1920,
    height: 1280,
    title: "Indústria",
  },
  {
    src: `${CDN}/124025/fotografia-de-logistica_fotografo-de-logistica-1.jpg`,
    gallery: "fotografia-de-logistica",
    pillar: "retrato",
    orientation: "horizontal",
    alt: "Fotografia de logística e transportes",
    width: 1920,
    height: 1280,
    title: "Transportes e Logística",
  },
  {
    src: `${CDN}/66936/fotografo-de-feiras-de-negocios-em-sao-paulo_procooler-39.jpg`,
    gallery: "fotografo-feiras-stands",
    pillar: "evento",
    orientation: "horizontal",
    alt: "Cobertura fotográfica de feira de negócios e stand",
    width: 1920,
    height: 1282,
    title: "Eventos e Feiras",
  },
  {
    src: `${CDN}/130271/fotografia-para-escritorios-de-advocacia_fotografia-profissional-de-advogados-2.jpg`,
    gallery: "fotografia-para-escritorios-de-advocacia",
    pillar: "retrato",
    orientation: "horizontal",
    alt: "Fotografia profissional de advogados em escritório de advocacia",
    width: 1920,
    height: 1410,
    title: "Saúde e Advocacia",
  },
];

/** Título da galeria vindo do catálogo (evita duplicar dados). */
export function galleryTitle(slug: string): string {
  return HOME_GALLERY_TITLES[slug] ?? "";
}

const HOME_GALLERY_TITLES: Record<string, string> = {
  "retrato-corporativo": "Retrato Corporativo",
  "fotografia-para-escritorios-de-advocacia": "Fotografia para escritórios de advocacia",
  "fotografo-de-retratos-corporativos": "Retratos",
  "fotos-profissionais-para-medicos": "Fotos Profissionais para Médicos",
  "fotografo-de-grupos-times-e-equipes": "Fotógrafo de Grupos, Times e Equipes",
  "retratos-de-medicas": "Retratos de Médicas",
  "fotografo-de-eventos-corporativos": "Fotógrafo de Eventos Corporativos",
  "eventos-corporativos": "Fotógrafo de Eventos Empresariais",
  "fotografo-feiras-stands": "Fotógrafo de Feiras de Negócios",
  "fotografo-festa-de-confraternizacao": "Festa da Firma",
};

/** CTAs comerciais abaixo do grid — URLs existentes, não criar novas. */
export const worksCtas = [
  { label: "Retratos Corporativos", categorySlug: "retrato-corporativo" },
  { label: "Cobertura de Eventos Corporativos", path: "/eventos-corporativos" },
] as const;
