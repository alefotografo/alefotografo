import { createFileRoute, Link } from "@tanstack/react-router";
import { videoBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";
import { faqJsonLd } from "@/lib/faqs";
import type { Faq } from "@/lib/faqs";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { waLink } from "@/lib/whatsapp";

const PATH = "/cases/fiorde";
const TITLE = "Case Fiorde Logística | Vídeo da Operação Logística";
const DESCRIPTION = "Vídeo institucional produzido para a Fiorde Logística: estrutura operacional, transporte, armazenagem e distribuição registrados em imagem.";
const WA = "Olá Alexandre, vi o case da Fiorde Logística e quero um orçamento de vídeo institucional para minha operação logística.";

/* Produções publicadas no catálogo de vídeos (slugs reais). */
const VIDEO_MAIN = "fiorde-logistica-solucoes-logisticas-integradas-para-empresas";
const VIDEOS_MORE: string[] = [];

const APLICACOES = ["Site institucional", "Prospecção comercial", "Apresentação da operação", "Materiais de vendas", "Comunicação com clientes"];

const FAQS: Faq[] = [  {
    q: "O que foi produzido para a Fiorde Logística?",
    a: "Um vídeo institucional que apresenta a Fiorde Logística e suas soluções logísticas integradas para empresas: estrutura operacional, transporte, armazenagem e distribuição. O vídeo está publicado no catálogo.",
  },
  {
    q: "Produzem vídeo para empresas de logística?",
    a: "Sim. O vídeo da Fiorde é um exemplo: a operação logística — armazenagem, transporte e distribuição — traduzida em imagem para uso comercial. A ATIVA Logística é outro case do segmento, com fotografia e vídeo.",
  },
  {
    q: "O vídeo da operação serve para quê?",
    a: "Para apresentar a estrutura a prospects, apoiar o time comercial e fortalecer a comunicação institucional da operação.",
  }];

export const Route = createFileRoute("/cases/fiorde")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}${PATH}` },
      { rel: "dns-prefetch", href: "https://i.ytimg.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          url: `${SITE_ORIGIN}${PATH}`,
          mainEntityOfPage: `${SITE_ORIGIN}${PATH}`,
          inLanguage: "pt-BR",
          author: { "@type": "Organization", name: site.name, url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: site.name, url: SITE_ORIGIN },
          about: { "@type": "Organization", name: "Fiorde Logística" },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: CasePage,
});

function CasePage() {
  const main = videoBySlug(VIDEO_MAIN);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Cases", to: "/cases" },
          { label: "Fiorde Logística" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Case · Logística</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fiorde Logística — a operação em vídeo institucional
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos o vídeo institucional da Fiorde Logística: soluções logísticas integradas para empresas, com a estrutura operacional, o transporte, a armazenagem e a distribuição registrados em imagem.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(WA)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento
            </a>
            <a
              href="#producoes"
              className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface"
            >
              Ver produções
            </a>
          </div>
        </div>
      </section>

      {/* Resumo do projeto */}
      <section className="border-b border-border bg-surface" aria-labelledby="resumo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="resumo" className="font-display text-2xl font-semibold md:text-3xl">Resumo do projeto</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Cliente</dt>
              <dd className="mt-1 font-semibold">Fiorde Logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Segmento</dt>
              <dd className="mt-1 font-semibold">Logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Serviços</dt>
              <dd className="mt-1 font-semibold">Vídeo institucional da operação logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Locais documentados</dt>
              <dd className="mt-1 font-semibold">Operação da Fiorde Logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Material publicado</dt>
              <dd className="mt-1 font-semibold">1 produção em vídeo</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Produção</dt>
              <dd className="mt-1 font-semibold">Alê Fotógrafo — Alexandre Machado e equipe</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Contexto */}
      <section className="border-b border-border" aria-labelledby="desafio">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="desafio" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Logística se vende mostrando a operação
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              Quem contrata logística quer ver capacidade operacional: galpões, frota, rotina de
              armazenagem e distribuição. Para a Fiorde Logística, produzimos um vídeo
              institucional que registra a operação integrada da empresa — o que o time comercial
              usa para apresentar a estrutura a novos clientes.
            </p>
            <p>
              O filme está publicado no catálogo de vídeos junto a outros cases do segmento, como
              a ATIVA Logística.
            </p>
          </div>
        </div>
      </section>

      {/* Produções em vídeo */}
      <section id="producoes" className="border-b border-border scroll-mt-20" aria-labelledby="videos-titulo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Vídeo</p>
          <h2 id="videos-titulo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Produções em vídeo publicadas
          </h2>
          {main && (
            <div className="mt-10 aspect-video overflow-hidden rounded-sm bg-black ring-1 ring-border">
              <VideoPlayer video={main} />
            </div>
          )}
          {VIDEOS_MORE.length > 0 && (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS_MORE.map((slug) => {
              const video = videoBySlug(slug);
              if (!video) return null;
              const thumb = videoThumb(video, "sm");
              return (
                <li key={slug}>
                  <Link
                    to="/videos/$slug"
                    params={ { slug } }
                    className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
                    aria-label={`Assistir: ${video.title}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      {thumb && (
                        <img
                          src={thumb}
                          alt={`Capa do vídeo ${video.title}`}
                          width={640}
                          height={360}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const img = e.currentTarget;
                            const next = ytFallback(img.src);
                            if (next && next !== img.src) img.src = next;
                          }}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <p className="p-4 text-sm font-medium group-hover:text-ember">{video.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
          )}
          <p className="mt-6">
            <Link to="/videos" className="text-sm text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">
              Ver catálogo completo de vídeos →
            </Link>
          </p>
        </div>
      </section>

      {/* Aplicações */}
      <section className="border-b border-border bg-surface" aria-labelledby="aplicacoes">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="aplicacoes" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Onde o material é usado
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {APLICACOES.map((a) => (
              <li key={a} className="rounded-sm border border-border bg-background px-4 py-3 text-sm">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Serviços relacionados */}
      <section className="border-b border-border" aria-labelledby="relacionados">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="relacionados" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Serviços relacionados
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/video-institucional" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeo institucional
            </Link>
            <Link to="/fotografo-corporativo/$slug" params={{ slug: "fotografia-de-logistica" }} className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotografia de logística
            </Link>
            <Link to="/cases/ativa-logistica" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Case ATIVA Logística
            </Link>
            <Link to="/fotografo-corporativo/$slug" params={{ slug: "fotos-aereas" }} className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotos aéreas de galpões
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-surface" aria-labelledby="faq-titulo">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 id="faq-titulo" className="mb-8 font-display text-2xl font-semibold md:text-3xl">
            Perguntas frequentes sobre o case
          </h2>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Quer mostrar a sua operação em vídeo?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fale com {site.name} sobre o seu projeto.
          </p>
          <a
            href={waLink(WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </a>
        </div>
      </section>
    </>
  );
}
