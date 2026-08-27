import { Link } from "@tanstack/react-router";
import type { CategoryEditorial, Seg } from "@/data/categoryEditorial";
import { waLink } from "@/lib/whatsapp";
import { useTrackConversion } from "@/hooks/useTrackConversion";

/** Renderiza um parágrafo composto de texto e links internos contextuais. */
export function Segments({ parts }: { parts: Seg[] }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <Link
            key={i}
            to={part.to}
            className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
          >
            {part.label}
          </Link>
        ),
      )}
    </>
  );
}

/**
 * Bloco editorial exclusivo de uma galeria comercial: seções em texto corrido,
 * listas de apoio e um CTA contextual de WhatsApp com o rastreio já existente.
 */
export function EditorialBlock({ data }: { data: CategoryEditorial }) {
  const track = useTrackConversion();

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-ember">{data.eyebrow}</p>

        <div className="mt-8 space-y-12">
          {data.sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">{s.h}</h2>
              <div className="mt-5 space-y-4">
                {s.paragraphs.map((parts, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    <Segments parts={parts} />
                  </p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 rounded-sm border border-border bg-background px-4 py-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={waLink(data.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp")}
            className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            {data.ctaLabel}
          </a>
          <Link
            to="/contato"
            className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
