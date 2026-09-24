import { createFileRoute, Link } from "@tanstack/react-router";
import { videoBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";
import { faqJsonLd } from "@/lib/faqs";
import type { Faq } from "@/lib/faqs";
import { Masonry } from "@/components/site/Masonry";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { waLink } from "@/lib/whatsapp";

const PATH = "/cases/ativa-logistica";
const TITLE = "Case ATIVA Logística | Fotografia e Vídeo Corporativo";
const DESCRIPTION =
  "Fotografia e vídeo produzidos para a ATIVA Logística, com registros de estrutura, operação e unidades em Itapevi e Barueri. Veja o case e as produções.";
const WA = "Olá Alexandre, vi o case da ATIVA Logística e quero um orçamento de fotografia e vídeo para minha empresa.";

/* Produções ATIVA publicadas no catálogo de vídeos (slugs reais). */
const VIDEOS_MAIN = "ativa-log-estrutura-operacao-e-eficiencia-logistica";
const VIDEOS_MORE = [
  "ativa-logistica-apresenta-o-seu-centro-de-distribuicao-em-itapevi",
  "ativa-logistica-unidade-barueri",
  "ativa-logistica-30-anos",
  "ativa-log",
  "ativa-logistiva-video-do-programa-de-sustentabilidade",
  "ativa-logistica",
  "video-de-boas-festas-da-ativalog",
];

/* Fotografias nomeadas ATIVA no acervo (ativa-itapevi-*). */
const FOTOS = [
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-8.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-20.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-34.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-74.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-108.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-113.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-224.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-260.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-289.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-317.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-332.jpg",
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/125396/banco-de-imagens-para-empresas_ativa-itapevi-349.jpg",
];

const APLICACOES = [
  "Site institucional",
  "Materiais comerciais",
  "Comunicação interna",
  "Recrutamento",
  "Apresentação de estrutura",
];

const FAQS: Faq[] = [
  {
    q: "Que tipo de material foi produzido para a ATIVA Logística?",
    a: "Fotografia de estrutura e operação e produções em vídeo: vídeo institucional, registro do centro de distribuição em Itapevi, registro da unidade de Barueri, produção comemorativa de 30 anos e conteúdo do programa de sustentabilidade. As produções publicadas estão listadas neste case e no catálogo de vídeos.",
  },
  {
    q: "As fotografias e os vídeos podem ser usados em canais comerciais?",
    a: "Sim. As produções são entregues para uso da empresa nos canais dela — site, materiais comerciais, comunicação interna e apresentações — conforme o escopo contratado em cada projeto.",
  },
  {
    q: "Vocês produzem fotografia e vídeo no mesmo projeto?",
    a: "Sim. Na ATIVA Logística, a mesma relação de trabalho reuniu os dois materiais ao longo de várias produções. Quando o objetivo da empresa pede os dois formatos, planejamos captação de fotografia e vídeo de forma integrada.",
  },
  {
    q: "Atendem outras empresas de logística?",
    a: "Sim. Produzimos fotografia e vídeo para empresas do setor logístico, com registro de frotas, centros de distribuição, armazéns, equipes e operações. Veja a página de fotografia de logística para o escopo completo.",
  },
];

export const Route = createFileRoute("/cases/ativa-logistica")({
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
          about: { "@type": "Organization", name: "ATIVA Logística" },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: CaseAtiva,
});

function CaseAtiva() {
  const main = videoBySlug(VIDEOS_MAIN);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Cases", to: "/cases" },
          { label: "ATIVA Logística" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Case · Logística</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            ATIVA Logística — fotografia e vídeo para mostrar estrutura e operação
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos fotografia e vídeo para a ATIVA Logística registrarem a estrutura, a operação
            e as unidades da empresa — do centro de distribuição em Itapevi à unidade de Barueri.
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
              <dd className="mt-1 font-semibold">ATIVA Logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Segmento</dt>
              <dd className="mt-1 font-semibold">Logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Serviços</dt>
              <dd className="mt-1 font-semibold">Fotografia corporativa e produção de vídeo</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Locais documentados</dt>
              <dd className="mt-1 font-semibold">Itapevi e Barueri</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Material publicado</dt>
              <dd className="mt-1 font-semibold">Fotografias de operação e 8 produções em vídeo</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Produção</dt>
              <dd className="mt-1 font-semibold">Alê Fotógrafo — Alexandre Machado e equipe</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Desafio + o que produzimos */}
      <section className="border-b border-border" aria-labelledby="desafio">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="desafio" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            O que a operação precisava mostrar
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              Operações logísticas envolvem armazém, docas, movimentação de cargas e equipes em
              operação. O trabalho produzido para a ATIVA Logística registra visualmente essa
              estrutura — a dimensão física das unidades, o fluxo da operação e as pessoas que a
              movem — em fotografia e em vídeo.
            </p>
            <p>
              Ao longo de várias produções, desenvolvemos um acervo fotográfico da operação e um
              conjunto de vídeos que apresentam a empresa: o centro de distribuição em Itapevi, a
              unidade de Barueri, a operação no dia a dia e as produções comemorativas e de
              sustentabilidade. O material é usado pela empresa em site, materiais comerciais,
              comunicação interna, recrutamento e apresentação da estrutura.
            </p>
            <p>
              Contamos o trabalho em detalhes no{" "}
              <Link
                to="/blog/$slug"
                params={{ slug: "case-ativa-logistica-fotografia-video" }}
                className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
              >
                case da ATIVA publicado no blog
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Fotografias */}
      <section className="border-b border-border bg-surface" aria-labelledby="fotos">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Fotografia</p>
          <h2 id="fotos" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Fotografias da operação
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground text-pretty">
            Seleção do banco de imagens produzido para a ATIVA Logística — registro da estrutura e
            da operação no centro de distribuição em Itapevi.
          </p>
          <div className="mt-10">
            <Masonry images={FOTOS} alt="ATIVA Logística" />
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
            <Link to="/fotografo-corporativo/$slug" params={{ slug: "fotografia-de-logistica" }} className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotografia de logística
            </Link>
            <Link to="/fotografo-corporativo/$slug" params={{ slug: "banco-de-imagens-para-empresas" }} className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Banco de imagens para empresas
            </Link>
            <Link to="/video-institucional" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeo institucional
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
            Precisa produzir fotografia e vídeo para a sua operação?
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
