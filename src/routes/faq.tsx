import { createFileRoute, Link } from "@tanstack/react-router";
import { buildMeta } from "@/lib/seo";
import { faqs, faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { FaqList } from "@/components/site/Faq";
import { LazySection } from "@/components/site/LazySection";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { site } from "@/data/catalog";
import { waLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

const primeiras = faqsComerciais;
const restantes = faqs.filter((f) => !faqsComerciais.some((c) => c.q === f.q));
const allFaqs = [...primeiras, ...restantes];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: buildMeta({
      title: "Dúvidas: Preço e Prazo de Fotos Corporativas",
      description:
        "Quanto custa, quanto tempo leva e como funciona uma sessão de fotos corporativas em São Paulo: preços, prazos, direitos de uso, equipe e drone.",
      path: "/faq",
    }),
    links: [{ rel: "canonical", href: "https://alefotografos.com.br/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(allFaqs)),
      },
    ],
  }),
  component: FaqPage,
  errorComponent: FaqFallback,
  notFoundComponent: FaqFallback,
});

function FaqFallback() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 md:px-8">
      <h1 className="font-display text-3xl font-semibold">Perguntas frequentes</h1>
      <p className="mt-4 text-muted-foreground">
        Não conseguimos carregar esta seção agora. Fale direto com Alexandre Machado pelo WhatsApp
        que respondemos suas dúvidas na hora.
      </p>
      <a
        href={waLink("Olá Alexandre, tenho uma dúvida sobre fotografia corporativa.")}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
      >
        Falar no WhatsApp
      </a>
    </section>
  );
}


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
        <FaqList items={allFaqs} />
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={waLink(
              "Olá Alexandre, tenho uma dúvida e gostaria de um orçamento de fotografia.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Pedir orçamento pelo WhatsApp
          </a>
          <Link
            to="/foto-profissional"
            className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface"
          >
            Ver foto profissional
          </Link>
        </div>
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
