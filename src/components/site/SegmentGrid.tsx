import { Link } from "@tanstack/react-router";
import { imgUrl } from "@/lib/img";
import { ArrowUpRight } from "lucide-react";

type Segment = {
  title: string;
  img: string;
  alt: string;
  width: number;
  height: number;
  to?: "/fotografo-empresarial" | "/fotos-profissionais-medicos" | "/fotografia-para-advogados" | "/fotos-corporativas" | "/eventos-corporativos";
  catSlug?: string;
  seeLabel: string;
};

const SEGMENTS: Segment[] = [
  {
    title: "Indústria",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66655/industrial_dsc7266.jpg",
    alt: "Fotografia industrial de instalações e equipamentos",
    width: 1920,
    height: 1280,
    to: "/fotografo-empresarial",
    seeLabel: "Ver fotografia industrial",
  },
  {
    title: "Transportes e Logística",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/124025/fotografia-de-logistica_fotografo-de-logistica-1.jpg",
    alt: "Fotografia de logística e transportes",
    width: 1920,
    height: 1280,
    catSlug: "fotografia-de-logistica",
    seeLabel: "Ver logística e transportes",
  },
  {
    title: "Saúde",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/132060/fotos-profissionais-para-medicos_driuri-tomaz-de-vasconcelos-7.JPG",
    alt: "Fotografia profissional para médicos e clínicas",
    width: 1920,
    height: 1277,
    to: "/fotos-profissionais-medicos",
    seeLabel: "Ver fotografia para saúde",
  },
  {
    title: "Advocacia",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130271/fotografia-para-escritorios-de-advocacia_fotografia-de-advogados-4.jpg",
    alt: "Fotografia para escritórios de advocacia",
    width: 1920,
    height: 1280,
    to: "/fotografia-para-advogados",
    seeLabel: "Ver fotografia para advocacia",
  },
  {
    title: "Empresas e Equipes",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/77681/grupos-fotos-de-grupos-ou-equipes_grupos-1.jpg",
    alt: "Fotografia de equipes e empresas",
    width: 1920,
    height: 1539,
    to: "/fotos-corporativas",
    seeLabel: "Ver fotografia corporativa",
  },
  {
    title: "Eventos e Feiras",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/90046/fotografo-de-eventos-corporativos_encontro-farmarcas-2022-2467.JPG",
    alt: "Fotografia de eventos corporativos e feiras",
    width: 1920,
    height: 1278,
    to: "/eventos-corporativos",
    seeLabel: "Ver eventos e feiras",
  },
];

export function SegmentGrid() {
  return (
    <section className="border-b border-border" aria-labelledby="segmentos">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Segmentos</p>
        <h2 id="segmentos" className="font-display text-3xl font-semibold text-balance md:text-4xl">
          Experiência em diferentes segmentos
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Experiência em produções realizadas em diferentes ambientes e setores empresariais.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-ember"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={imgUrl(s.img, 480)}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                {s.to ? (
                  <Link
                    to={s.to}
                    className="mt-4 inline-flex min-h-[44px] items-center gap-1 text-sm text-muted-foreground hover:text-ember"
                  >
                    {s.seeLabel} <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <Link
                    to="/fotografo-corporativo/$slug"
                    params={{ slug: s.catSlug as string }}
                    className="mt-4 inline-flex min-h-[44px] items-center gap-1 text-sm text-muted-foreground hover:text-ember"
                  >
                    {s.seeLabel} <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
