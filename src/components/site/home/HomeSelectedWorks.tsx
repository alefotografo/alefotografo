import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { GRID_WIDTHS, imgSrcSet, imgUrl } from "@/lib/img";
import { galleryTitle, selectedWorks, worksCtas } from "@/data/homeCuration";

export default function HomeSelectedWorks() {
  return (

      {/* Trabalhos selecionados — curadoria real do acervo */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Fotos</p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl text-balance">
              Trabalhos selecionados
            </h2>
          </div>
          <Link
            to="/fotografo-corporativo"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Ver todos os segmentos <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="columns-1 gap-4 md:columns-2">
          {selectedWorks.map((w) => (
            <Link
              key={w.src}
              to="/fotografo-corporativo/$slug"
              params={{ slug: w.gallery }}
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <img
                src={imgUrl(w.src, 640)}
                srcSet={imgSrcSet(w.src, GRID_WIDTHS, w.width)}
                sizes="(max-width: 768px) 96vw, 45vw"
                alt={w.alt}
                width={w.width}
                height={w.height}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
                <h3 className="font-display text-sm font-semibold text-foreground md:text-lg">
                  {galleryTitle(w.gallery)}
                </h3>
                <span className="mt-1 hidden items-center gap-1 text-xs text-ember opacity-0 transition-opacity group-hover:opacity-100 md:inline-flex">
                  Ver galeria <ArrowUpRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {worksCtas.map((c) =>
            "categorySlug" in c ? (
              <Link
                key={c.label}
                to="/fotografo-corporativo/$slug"
                params={{ slug: c.categorySlug }}
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-6 py-3.5 text-sm font-medium hover:bg-surface"
              >
                {c.label} <ArrowUpRight size={14} />
              </Link>
            ) : (
              <Link
                key={c.label}
                to="/eventos-corporativos"
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-6 py-3.5 text-sm font-medium hover:bg-surface"
              >
                {c.label} <ArrowUpRight size={14} />
              </Link>
            ),
          )}
        </div>
      </section>
  );
}
