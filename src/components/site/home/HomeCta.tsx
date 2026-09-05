import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function HomeCta() {
  return (
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl text-balance">
              Pronto para fortalecer a imagem da sua empresa?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Atendimento em toda Grande São Paulo. Envie o briefing pelo WhatsApp e receba o
              orçamento em até 24 horas úteis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(
                "Olá Alexandre, quero um orçamento de fotografia para a minha empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-7 py-4 font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp <ArrowUpRight size={16} />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-7 py-4 font-medium hover:bg-surface"
            >
              Outras formas de contato
            </Link>
          </div>
        </div>
      </section>
  );
}
