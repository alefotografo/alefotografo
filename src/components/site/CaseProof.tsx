import { Link } from "@tanstack/react-router";
import { caseByPath, type CasePath } from "@/data/cases";
import { videoBySlug } from "@/data/catalog";
import { videoThumb } from "@/lib/videoThumb";

// Bloco de prova: leva o case real do segmento para dentro da página da
// galeria (prova comercial acima da dobra de decisão). Só renderiza quando o
// case e o vídeo existem no catálogo — nunca inventa conteúdo.
export function CaseProof({ caseTo }: { caseTo: CasePath }) {
  const c = caseByPath(caseTo);
  const video = c ? videoBySlug(c.videoSlug) : undefined;
  const thumb = video ? videoThumb(video, "lg") : undefined;
  if (!c || !thumb) return null;

  return (
    <section className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
          Case real do segmento
        </p>
        <Link
          to={c.to}
          className="group grid gap-6 overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember md:grid-cols-5"
        >
          <div className="relative aspect-video overflow-hidden bg-black md:col-span-3">
            <img
              src={thumb}
              alt={`Produção em vídeo do case ${c.client}`}
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:col-span-2 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ember">{c.segment}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold group-hover:text-ember md:text-3xl">
              {c.client}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground text-pretty md:text-base">
              {c.services}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ember">
              Ver case completo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
