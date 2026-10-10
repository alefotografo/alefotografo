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

const PATH = "/cases/sq-quimica";
const TITLE = "Case SQ Química | Fotografia e Vídeo para Indústria";
const DESCRIPTION =
  "Produções de fotografia e vídeo realizadas para a SQ Química: cobertura de feiras, vídeo institucional da unidade de Vinhedo e registro do Prêmio SITIVESP.";
const WA = "Olá Alexandre, vi o case da SQ Química e quero um orçamento de fotografia e vídeo para minha empresa.";

/* Produções SQ Química publicadas no catálogo de vídeos (slugs reais). */
const VIDEO_MAIN = "sq-quimica-unidade-vinhedo";
const VIDEOS_MORE = [
  "sq-quimica-na-fce-pharma-cobertura-profissional-de-feira-de-negocios-com-fotogra",
  "sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c",
  "sq-quimica-na-abrafati-show-2022",
  "sq-quimica-34-premio-sitivesp-de-fornecedor-do-ano",
];

const APLICACOES = [
  "Site institucional",
  "Materiais comerciais",
  "Comunicação de feiras e eventos",
  "Apresentação da unidade",
  "Registro de premiações",
];

const FAQS: Faq[] = [
  {
    q: "Que tipo de material foi produzido para a SQ Química?",
    a: "Vídeo institucional da unidade de Vinhedo, cobertura de feiras de negócios com fotografia e vídeo (FCE Pharma e ABRAFATI Show 2022) e registro em vídeo do 34º Prêmio SITIVESP de Fornecedor do Ano. As produções publicadas estão listadas neste case e no catálogo de vídeos.",
  },
  {
    q: "Vocês cobrem feiras com fotografia e vídeo no mesmo projeto?",
    a: "Sim. Na cobertura da FCE Pharma, fotografia e vídeo foram produzidos na mesma operação, com entregas separadas para cada formato. O modelo reduz custos de deslocamento e garante coerência visual entre os materiais.",
  },
  {
    q: "Produzem vídeo institucional para unidades industriais?",
    a: "Sim. O vídeo da unidade de Vinhedo da SQ Química é um exemplo: registro da estrutura, da operação e das equipes para uso institucional. Veja a página de vídeo institucional para o escopo completo.",
  },
  {
    q: "Atendem outras empresas da indústria química?",
    a: "Sim. Produzimos fotografia e vídeo para empresas industriais, com registro de unidades, processos, equipes e participação em feiras do setor. Veja as páginas de fotografia industrial e vídeo institucional.",
  },
];

export const Route = createFileRoute("/cases/sq-quimica")({
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
          about: { "@type": "Organization", name: "SQ Química" },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: CaseSqQuimica,
});

function CaseSqQuimica() {
  const main = videoBySlug(VIDEO_MAIN);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Cases", to: "/cases" },
          { label: "SQ Química" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Case · Indústria</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            SQ Química — fotografia e vídeo para indústria e feiras
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos vídeo institucional, cobertura de feiras de negócios e registros de
            premiações para a SQ Química — da unidade de Vinhedo à FCE Pharma e ao ABRAFATI Show.
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
              <dd className="mt-1 font-semibold">SQ Química</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Segmento</dt>
              <dd className="mt-1 font-semibold">Indústria química</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Serviços</dt>
              <dd className="mt-1 font-semibold">Vídeo institucional e cobertura de feiras com foto e vídeo</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Locais documentados</dt>
              <dd className="mt-1 font-semibold">Unidade de Vinhedo e feiras em São Paulo</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Material publicado</dt>
              <dd className="mt-1 font-semibold">5 produções em vídeo</dd>
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
            O que a indústria precisava mostrar
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              Empresas industriais precisam apresentar suas unidades, sua operação e sua presença
              em eventos do setor com material audiovisual consistente. Para a SQ Química,
              produzimos vídeo institucional da unidade de Vinhedo e coberturas de feiras de
              negócios — FCE Pharma e ABRAFATI Show 2022 — combinando fotografia e vídeo na mesma
              operação de captação.
            </p>
            <p>
              O conjunto de produções inclui ainda o registro em vídeo do 34º Prêmio SITIVESP de
              Fornecedor do Ano. O material é usado pela empresa em canais institucionais,
              materiais comerciais e comunicação de eventos.
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
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS_MORE.map((slug) => {
              const video = videoBySlug(slug);
              if (!video) return null;
              const thumb = videoThumb(video, "sm");
              return (
                <li key={slug}>
                  <Link
                    to="/videos/$slug"
                    params={{ slug }}
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
            <Link to="/video-para-feiras-e-stands" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeo para feiras e stands
            </Link>
            <Link to="/fotografo-de-feira-de-negocios" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotógrafo de feiras de negócios
            </Link>
            <Link to="/fotografo-corporativo/$slug" params={{ slug: "fotografia-industrial-em-sp" }} className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotografia industrial
            </Link>
            <Link to="/videos" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeos para empresas
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
            Precisa produzir fotografia e vídeo para a sua indústria?
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
