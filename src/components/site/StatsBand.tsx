import type { BusinessStat } from "@/data/stats";

/**
 * Faixa de indicadores reais do negócio. Marcada como <dl> para que leitores
 * de tela e mecanismos de IA associem número e significado.
 */
export function StatsBand({
  items,
  title = "Números do atendimento",
}: {
  items: BusinessStat[];
  title?: string;
}) {
  return (
    <section className="border-b border-border bg-surface" aria-label={title}>
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">
                {s.value}
                <span className="mt-2 block font-sans text-sm font-normal leading-relaxed text-muted-foreground text-pretty">
                  {s.detail}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
