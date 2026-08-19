import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-alefotografo.png.asset.json";

const nav = [
  { to: "/", label: "Início" },
  { to: "/foto-profissional", label: "Foto profissional" },
  { to: "/fotos-corporativas", label: "Corporativo" },
  { to: "/fotografo-corporativo", label: "Fotos" },
  { to: "/videos", label: "Vídeos" },
  { to: "/blog", label: "Blog" },
  { to: "/quem-e-o-ale", label: "Quem é o Alê" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
      >
        Pular para o conteúdo
      </a>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 md:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Alê Fotógrafo — Início"
        >
          <img
            src={logo.url}
            alt="Alê Fotógrafo"
            width={160}
            height={48}
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav
          className="ml-auto hidden min-w-0 items-center gap-3 min-[1000px]:flex xl:gap-6"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative whitespace-nowrap text-[13px] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground xl:text-sm"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 max-[999px]:flex min-[1000px]:hidden">
          <Link
            to="/contato"
            className="rounded-sm bg-ember px-3 py-2 text-xs font-medium text-accent-foreground hover:bg-ember-glow"
            onClick={() => setOpen(false)}
          >
            Orçamento
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background max-[999px]:block min-[1000px]:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border/40 py-3 text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="mt-3 rounded-sm bg-ember px-4 py-3 text-center text-sm font-medium text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              Solicitar orçamento
            </Link>
          </nav>
        </div>
      )}
      </header>
    </>
  );
}
