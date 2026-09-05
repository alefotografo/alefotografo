import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { faqsComerciais } from "@/lib/faqsComerciais";

export default function HomeFaq() {
  return (
      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes antes de contratar
          </h2>
          <FaqList items={faqsComerciais.slice(0, 6)} />
          <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Ver todas as perguntas <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
  );
}
