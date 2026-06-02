import { Link } from "@tanstack/react-router";
import { site } from "@/data/catalog";
import logo from "@/assets/logo-alefotografo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Alê Fotógrafo" width={200} height={60} className="h-14 w-auto" />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            {site.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {site.city}, {site.state} — atendemos toda Grande São Paulo e Brasil.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Serviços
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/fotografo-corporativo" className="hover:text-foreground">Fotografia corporativa</Link></li>
            <li><Link to="/videos" className="hover:text-foreground">Vídeo institucional</Link></li>
            <li><Link to="/fotografo-corporativo" className="hover:text-foreground">Retratos profissionais</Link></li>
            <li><Link to="/fotografo-corporativo" className="hover:text-foreground">Cobertura de eventos</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Conecte-se
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
            <li><Link to="/sobre" className="hover:text-foreground">Sobre Alexandre</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">Perguntas frequentes</Link></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} Alê Fotógrafo — Alexandre Machado. Todos os direitos reservados.</p>
          <p>Fotógrafo corporativo em São Paulo · 30 anos de experiência</p>
        </div>
      </div>
    </footer>
  );
}
