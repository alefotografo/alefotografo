import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { buildMeta } from "@/lib/seo";
import { site } from "@/data/catalog";
import { Mail, MapPin, MessageCircle, Linkedin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: buildMeta({
      title: "Contato — Solicite seu orçamento",
      description: "Fale com Alexandre Machado, o Alê Fotógrafo. Solicite orçamento para fotografia corporativa, retratos profissionais e vídeo institucional em São Paulo.",
      path: "/contato",
    }),
    links: [{ rel: "canonical", href: "/contato" }],
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" name="nome" required />
              <Field label="E-mail" name="email" type="email" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Empresa (opcional)" name="empresa" />
              <Field label="Telefone (opcional)" name="telefone" type="tel" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                required
                rows={6}
                placeholder="Conte sobre seu projeto, prazo, e quantas pessoas serão fotografadas."
                className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 font-medium text-accent-foreground transition-colors hover:bg-ember-glow"
            >
              <MessageCircle size={18} />
              Enviar via WhatsApp
            </button>
            {sent && (
              <p className="text-sm text-ember">
                Abrindo o WhatsApp em uma nova aba…
              </p>
            )}
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
                <span className="text-muted-foreground">São Paulo — SP<br />Atendemos toda Grande SP e Brasil</span>
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

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-sm border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none"
      />
    </div>
  );
}
