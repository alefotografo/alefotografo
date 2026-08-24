import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, categories } from "@/data/catalog";
import { bairros } from "@/data/bairros";
import { waLink } from "@/lib/whatsapp";
import { imgUrl, imgSrcSet } from "@/lib/img";

import logo from "@/assets/logo-alefotografo.png.asset.json";

// Curadoria de capas (8 destaques) para a faixa "Siga no Instagram" do rodapé.
const INSTAGRAM_SLUGS = [
  "retrato-corporativo",
  "fotografo-de-eventos-corporativos",
  "fotografia-industrial",
  "fotografo-de-arquitetura-e-interiores",
  "fotografo-de-culinaria",
  "fotos-aereas",
  "fotografia-institucional-em-saopaulo",
  "banco-de-imagens-para-escolas",
];

const instagramTiles = INSTAGRAM_SLUGS
  .map((slug) => categories.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c?.cover))
  .map((c) => ({ src: c.cover as string, title: c.title }));

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      {instagramTiles.length > 0 && (
        <section className="border-b border-border" aria-labelledby="footer-instagram">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-ember">Instagram</p>
                <h2 id="footer-instagram" className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                  Siga no Instagram
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  @alefotografo — bastidores, novos ensaios e produções corporativas.
                </p>
              </div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-sm border border-border bg-background px-4 py-2 text-sm font-medium hover:border-ember hover:text-ember sm:self-auto"
              >
                <Instagram size={16} aria-hidden="true" />
                Seguir @alefotografo
              </a>
            </div>

            <ul className="grid grid-cols-4 gap-2 sm:gap-3 md:grid-cols-8">
              {instagramTiles.map((tile, i) => (
                <li key={tile.src}>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${tile.title} no Instagram`}
                    className="group relative block aspect-square overflow-hidden rounded-sm bg-black ring-1 ring-border transition-all hover:ring-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  >
                    <img
                      src={imgUrl(tile.src, 300)}
                      srcSet={imgSrcSet(tile.src, [200, 300, 480])}
                      sizes="(max-width: 640px) 25vw, 12vw"
                      alt={tile.title}
                      width={300}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      style={{ contentVisibility: i < 4 ? "visible" : "auto" }}
                    />

                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                      <Instagram size={20} className="text-white" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 md:gap-12 md:px-8 lg:grid-cols-5">

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
            Fotografia
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/foto-profissional" className="hover:text-foreground">Foto profissional</Link></li>
            <li><Link to="/foto-profissional-para-linkedin" className="hover:text-foreground">Foto para LinkedIn</Link></li>
            <li><Link to="/fotos-corporativas" className="hover:text-foreground">Fotografia corporativa</Link></li>
            <li><Link to="/fotografia-executiva" className="hover:text-foreground">Fotografia executiva</Link></li>
            <li><Link to="/fotografo-corporativo/$slug" params={{ slug: "retrato-corporativo" }} className="hover:text-foreground">Retrato corporativo</Link></li>
            <li><Link to="/eventos-corporativos" className="hover:text-foreground">Eventos corporativos</Link></li>
            <li><Link to="/fotografia-para-clinicas" className="hover:text-foreground">Fotografia para clínicas</Link></li>
            <li><Link to="/fotos-profissionais-medicos" className="hover:text-foreground">Fotos para médicos</Link></li>
            <li><Link to="/fotografia-para-advogados" className="hover:text-foreground">Fotos para advogados</Link></li>
            <li><Link to="/fotografo-corporativo" className="hover:text-foreground">Portfólio corporativo</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Vídeo
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/videos" className="hover:text-foreground">Vídeo corporativo</Link></li>
            <li><Link to="/videos" className="hover:text-foreground">Vídeo institucional</Link></li>
            <li><Link to="/videos" hash="portfolio" className="hover:text-foreground">Portfólio de vídeos</Link></li>
            <li><Link to="/videos" hash="portfolio" className="hover:text-foreground">Reels e social</Link></li>
          </ul>
        </div>


        <div>
          <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Contato
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex min-w-0 items-start gap-3">
              <Mail className="mt-0.5 shrink-0 text-ember" size={16} aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="min-w-0 break-all hover:text-foreground">{site.email}</a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-ember" size={16} aria-hidden="true" />
              <span>
                {site.address.street}<br />
                {site.address.district}, {site.address.locality} — {site.address.region}<br />
                CEP {site.address.postalCode}, Brasil
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 shrink-0 text-ember" size={16} aria-hidden="true" />
              <a
                href={waLink("Olá Alexandre, gostaria de um orçamento de fotografia profissional.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <a
            href={waLink("Olá Alexandre, gostaria de um orçamento de fotografia profissional.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex max-w-full items-center justify-center rounded-sm bg-ember px-4 py-3 text-center text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento no WhatsApp
          </a>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
            <li><Link to="/quem-e-o-ale" className="hover:text-foreground">Quem é o Alê</Link></li>
            <li><Link to="/sobre" className="hover:text-foreground">Sobre Alexandre</Link></li>
            <li><Link to="/depoimentos" className="hover:text-foreground">Depoimentos</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">Perguntas frequentes</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Fotógrafo corporativo em São Paulo — atendemos
          </p>
          <div className="flex flex-wrap gap-2">
            {bairros.map((b) => (
              <Link
                key={b.slug}
                to="/fotografo-corporativo-em/$bairro"
                params={{ bairro: b.slug }}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground hover:border-ember hover:text-ember"
              >
                {b.nome}
              </Link>
            ))}
          </div>
        </div>
      </div>


      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Alê Fotógrafo"
                className="text-muted-foreground transition-colors hover:text-ember"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Alê Fotógrafo"
                className="text-muted-foreground transition-colors hover:text-ember"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
            <p className="text-center md:text-left">
              Alexandre Machado Fotografia — CNPJ {site.cnpj} — Desde {site.foundingYear} atendendo clientes especiais
            </p>
          </div>
          <p>© {new Date().getFullYear()} Alê Fotógrafo — Alexandre Machado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
