import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq as FaqItem } from "@/lib/faqs";

export function FaqList({
  items,
  defaultOpen = 0,
  headingLevel = "h3",
}: {
  items: FaqItem[];
  defaultOpen?: number;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const faqId = useId();

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f, i) => {
        const isOpen = open === i;
        const answerId = `${faqId}-answer-${i}`;
        return (
          <div key={i} className="py-2">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <Heading data-faq-question className="font-display text-base font-semibold leading-snug md:text-lg">{f.q}</Heading>
              <span className="mt-1 shrink-0 rounded-full border border-border p-1.5 text-ember">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            {isOpen && (
              <div id={answerId} data-faq-answer className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
