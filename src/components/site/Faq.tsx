import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq as FaqItem } from "@/lib/faqs";

export function FaqList({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-2">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <h3 className="font-display text-base font-semibold leading-snug md:text-lg">{f.q}</h3>
              <span className="mt-1 shrink-0 rounded-full border border-border p-1.5 text-ember">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
