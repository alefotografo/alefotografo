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

/** Hero definitivo da Home. */
export const heroPhoto = {
  mobileSrc: "/img/hero-portrait-mobile.webp",
  webpSrc: "/img/hero-portrait.webp",
  fallbackSrc: "/img/hero-portrait.jpg",
  gallery: "fotografo-de-retratos-corporativos",
  alt: "Alexandre Ferreira - Fotógrafo Corporativo São Paulo",
  width: 1217,
  height: 1600,
};

/** Alternativas já validadas para o recorte desktop/mobile do hero. */
export const heroAlternatives = [
  {
    src: `${CDN}/90047/fotografo-de-retratos-corporativos_retratos-corporativos-1.jpg`,
    gallery: "fotografo-de-retratos-corporativos",
    alt: "Retrato corporativo profissional em São Paulo",
  },
  {
    src: `${CDN}/130271/fotografia-para-escritorios-de-advocacia_fotografia-profissional-de-advogados-12.jpg`,
    gallery: "fotografia-para-escritorios-de-advocacia",
    alt: "Retrato profissional de advogado em escritório de advocacia",
  },
];

/** Seis frentes B2B representadas com fotografias reais do acervo. */
export const selectedWorks: HomePhoto[] = [
  {
    src: `${CDN}/77681/grupos-fotos-de-grupos-ou-equipes_grupos-1.jpg`,
    gallery: "fotografo-de-grupos-times-e-equipes",
    pillar: "retrato",
    orientation: "horizontal",
    alt: "Foto de equipe corporativa em grupo no escritório",
    width: 1920,
    height: 1539,
    title: "Fotografia Corporativa",
  },
  {
    src: `${CDN}/90047/fotografia-de-retrato-profissional-em-sao-paulo_paulo-henrique-gomes-camara-8.jpg`,
    gallery: "fotografo-de-retratos-corporativos",
    pillar: "retrato",
    orientation: "vertical",
    alt: "Retrato profissional corporativo com iluminação de estúdio",
    width: 1067,
    height: 1600,
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

/** Fotografia real de cada card de segmento da Home (Fase 6C), na mesma ordem de SEGMENTS. */
export interface SegmentPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const segmentPhotos: Record<string, SegmentPhoto> = {
  "Advogados e escritórios de advocacia": {
    src: `${CDN}/130271/fotografia-para-escritorios-de-advocacia_fotografia-profissional-de-advogados-11.jpg`,
    width: 1067,
    height: 1600,
    alt: "Fotografia profissional de advogado em escritório de advocacia em São Paulo",
  },
  "Médicos e clínicas": {
    src: `${CDN}/132060/fotos-profissionais-para-medicos-e-ambientes_draeugenia-5.jpg`,
    width: 1067,
    height: 1600,
    alt: "Foto profissional de médica em ambiente de consultório",
  },
  "Executivos e empresários": {
    src: `${CDN}/90047/fotografia-de-retrato-profissional-em-sao-paulo_gustavo-pereira-13.jpg`,
    width: 1067,
    height: 1600,
    alt: "Retrato profissional de executivo fotografado em São Paulo",
  },
  "Empresas e equipes": {
    src: `${CDN}/77681/grupos-fotos-de-grupos-ou-equipes_grupos-3.jpg`,
    width: 1920,
    height: 1275,
    alt: "Foto de equipe corporativa reunida em ambiente de trabalho",
  },
  "Eventos corporativos": {
    src: `${CDN}/90046/fotografo-de-eventos-corporativos_jantar-e-encontro-febrafar-2024-532.JPG`,
    width: 1920,
    height: 1079,
    alt: "Público e interação em evento corporativo fotografado em São Paulo",
  },
  "Palestrantes e profissionais liberais": {
    src: `${CDN}/90046/fotografo-de-eventos-corporativos_8-forum-abradilan-2023-707.jpg`,
    width: 1920,
    height: 1280,
    alt: "Palestrante em apresentação no palco de fórum corporativo",
  },
};

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
