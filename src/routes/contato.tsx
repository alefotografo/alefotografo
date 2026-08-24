import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { buildMeta } from "@/lib/seo";
import { site } from "@/data/catalog";
import { LazySection } from "@/components/site/LazySection";
import GoogleMapCard from "@/components/site/GoogleMapCard";
import { Mail, MapPin, MessageCircle, Linkedin, Instagram } from "lucide-react";


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Alê Fotógrafo — Alexandre Machado",
  "description": "Fotógrafo corporativo em São Paulo, 30 anos de experiência: retratos profissionais, fotografia para empresas, eventos e vídeo institucional.",
  "url": "https://alefotografo.com.br",
  "telephone": "+55-11-91355-0533",
  "email": "comercial@alefotografos.com.br",
  "image": "https://alefotografo.com.br/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Alameda Santos, 1165",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01419-002",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-23.5640870",
    "longitude": "-46.6553543"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/alefotografo",
    "https://www.linkedin.com/in/alefotografo"
  ],
  "priceRange": "R$",
  "areaServed": {
    "@type": "City",
    "name": "São Paulo"
  }
};

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: buildMeta({
      title: "Contato e Orçamento de Fotos Corporativas em SP",
      description: "Peça orçamento de fotos corporativas, retratos profissionais e vídeo institucional em São Paulo. Estúdio no Jardim Paulista e atendimento na sua empresa.",
      path: "/contato",
    }),
    links: [{ rel: "canonical", href: "https://alefotografo.com.br/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get("nome");
    const email = data.get("email");
    const empresa = data.get("empresa");
    const msg = data.get("mensagem");
    const body = `Olá Alexandre, sou ${nome} (${email})${empresa ? ` da ${empresa}` : ""}.\n\n${msg}`;
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Contato</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Vamos conversar sobre seu projeto
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Conte um pouco sobre o que você precisa. Responderemos com agilidade.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-5 md:px-8 md:py-24">
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" name="nome" required autoComplete="name" />
              <Field label="E-mail" name="email" type="email" required autoComplete="email" inputMode="email" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Empresa (opcional)" name="empresa" autoComplete="organization" />
              <Field label="Telefone (opcional)" name="telefone" type="tel" autoComplete="tel" inputMode="tel" />
            </div>
            <div>
              <label htmlFor="mensagem" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={6}
                placeholder="Conte sobre seu projeto, prazo, e quantas pessoas serão fotografadas."
                className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-6 py-4 text-base font-medium text-accent-foreground transition-colors hover:bg-ember-glow sm:w-auto"
            >
              <MessageCircle size={18} />
              Enviar via WhatsApp
            </button>
            {sent && (
              <div role="status" aria-live="polite" className="rounded-sm border border-ember/40 bg-ember/10 p-4 text-sm">
                <p className="font-medium text-foreground">Mensagem pronta para envio!</p>
                <p className="mt-1 text-muted-foreground">
                  Abrimos o WhatsApp em uma nova aba. Se não abriu,{" "}
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ember underline hover:no-underline"
                  >
                    clique aqui para falar com Alexandre
                  </a>
                  .
                </p>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Resposta normalmente em até 1 dia útil. Seus dados são usados apenas para responder seu contato.
            </p>
          </form>
        </div>

        <aside className="space-y-6 md:col-span-2">
          <div className="rounded-sm border border-border bg-surface p-6">
            <h2 className="font-display text-lg font-semibold">Canais diretos</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 text-ember" size={18} />
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
                  WhatsApp direto
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 text-ember" size={18} />
                <a href={`mailto:${site.email}`} className="hover:text-ember">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-ember" size={18} />
                <span className="text-muted-foreground">
                  {site.address.street}<br />
                  {site.address.district}, {site.address.locality} — {site.address.region}<br />
                  Atendemos toda Grande SP e Brasil
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="mt-0.5 text-ember" size={18} />
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ember">LinkedIn</a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 text-ember" size={18} />
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ember">Instagram</a>
              </li>
            </ul>
          </div>

          <LazySection minHeight={300} rootMargin="300px">
            <GoogleMapCard />
          </LazySection>


          <div className="rounded-sm border border-border bg-gradient-to-br from-surface to-background p-6">
            <h2 className="font-display text-lg font-semibold">Horário de atendimento</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Segunda a sexta, 9h às 19h.<br />
              Sábados sob demanda para eventos.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, ...props }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none"
      />
    </div>
  );
}
