import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { faqs, faqJsonLd } from "@/lib/faqs";
import { FaqList } from "@/components/site/Faq";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { site } from "@/data/catalog";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: buildMeta({
      title: "FAQ — Fotografia e Vídeo Corporativo em SP",
      description:
        "Dúvidas sobre fotografia corporativa, retratos executivos, vídeo institucional, prazos, preços, direitos de uso e drone em São Paulo.",
      path: "/faq",
    }),
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faqs)),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Perguntas Frequentes" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">FAQ</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Perguntas frequentes sobre fotografia e vídeo corporativo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Respostas diretas para as principais dúvidas de empresas, departamentos de marketing,
            RH e assessorias de imprensa antes de contratar um fotógrafo corporativo em {site.city}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <FaqList items={faqs} />
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Não encontrou sua resposta?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fale direto com Alexandre Machado pelo WhatsApp ou envie seu briefing por e-mail.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
