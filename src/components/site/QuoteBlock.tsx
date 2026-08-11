import { Link } from "@tanstack/react-router";
import { waLink } from "@/lib/whatsapp";

// Bloco de conversão usado em artigos informacionais do blog:
// transforma tráfego de pesquisa (ex.: "lugares para tirar foto em São Paulo")
// em pedido de orçamento.
export function QuoteBlock() {
  return (
    <aside
      className="mt-10 rounded-sm border border-ember/40 bg-surface p-6 md:p-8"
      aria-label="Solicitar orçamento"
    >
      <h2 className="font-display text-xl font-semibold md:text-2xl">
        Quer fazer um ensaio profissional em São Paulo?
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Se você está procurando bons lugares para fotografar, também posso ajudar com direção,
        produção e fotos profissionais para LinkedIn, carreira, marca pessoal ou comunicação
        corporativa.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={waLink(
            "Olá Alexandre, quero fazer um ensaio profissional em São Paulo. Pode me passar um orçamento?",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
        >
          Solicitar orçamento pelo WhatsApp
        </a>
        <Link
          to="/foto-profissional"
          className="inline-flex rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-background"
        >
          Ver retratos profissionais
        </Link>
        <Link
          to="/foto-profissional-para-linkedin"
          className="inline-flex rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-background"
        >
          Ver foto para LinkedIn
        </Link>
        <Link
          to="/fotos-corporativas"
          className="inline-flex rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-background"
        >
          Ver fotografia corporativa
        </Link>
      </div>
      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <li>
          <Link to="/foto-profissional" className="text-ember underline underline-offset-4">
            Foto Profissional em São Paulo
          </Link>
        </li>
        <li>
          <Link to="/fotografo-corporativo/$slug" params={{ slug: "retrato-corporativo" }} className="text-ember underline underline-offset-4">
            Retrato Profissional
          </Link>
        </li>
        <li>
          <Link to="/foto-profissional-para-linkedin" className="text-ember underline underline-offset-4">
            Foto para LinkedIn
          </Link>
        </li>
        <li>
          <Link to="/fotos-corporativas" className="text-ember underline underline-offset-4">
            Fotografia Corporativa
          </Link>
        </li>
        <li>
          <Link
            to="/fotografo-corporativo/$slug"
            params={{ slug: "fotografo-de-eventos-corporativos" }}
            className="text-ember underline underline-offset-4"
          >
            Eventos Corporativos
          </Link>
        </li>
      </ul>
    </aside>
  );
}
