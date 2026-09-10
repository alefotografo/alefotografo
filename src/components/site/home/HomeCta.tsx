import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export default function HomeCta() {
  return (
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl text-balance">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fotografia e vídeo para empresas em São Paulo e região.
            </p>
          </div>
          <div className="flex w-full flex-wrap gap-3 md:w-auto">
            <a
              href={waLink(
                "Olá, gostaria de solicitar um orçamento de fotografia e vídeo para empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-2 rounded-sm bg-ember px-7 py-4 font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
  );
}
