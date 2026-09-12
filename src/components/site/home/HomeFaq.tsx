import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { faqsComerciais } from "@/lib/faqsComerciais";

export default function HomeFaq() {
  return (
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-14 md:px-8 md:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 className="mb-6 text-balance font-display text-3xl font-semibold md:mb-8 md:text-4xl">
            Dúvidas frequentes antes de contratar
          </h2>
          <div className="[&_button]:min-h-11 [&_button]:py-4 md:[&_button]:py-5">
            <FaqList items={faqsComerciais.slice(0, 6)} />
          </div>
          <Link to="/faq" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:mt-8">
            Ver todas as perguntas <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
  );
}
