import { createFileRoute, Link } from "@tanstack/react-router";
import { videoBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";
import { faqJsonLd } from "@/lib/faqs";
import type { Faq } from "@/lib/faqs";
import { Masonry } from "@/components/site/Masonry";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { waLink } from "@/lib/whatsapp";

const PATH = "/cases/bmx-logistica/";
const TITLE = "Case BMX Soluções Logísticas | Fotografia de Frota e Vídeo Institucional";
const DESCRIPTION =
  "Fotografia da frota e vídeos institucionais produzidos para a BMX Soluções Logísticas em 2025 — registro do Centro de Armazenagem e Distribuição e das operações. Veja o case.";
const WA = "Olá Alexandre, vi o case da BMX Soluções Logísticas e quero um orçamento de fotografia e vídeo para minha empresa.";

/* Produção principal publicada no catálogo de vídeos (slug real). A série de
   roteiros temáticos (químico, containers, FTL/milk run, aeroportos,
   armazenagem, promocional e carga emergencial) será adicionada a esta grade
   quando publicada no YouTube. */
const VIDEOS_MAIN = "video-institucional-bmx-logistica"
const MAIN_VIDEO = videoBySlug(VIDEOS_MAIN);;
const VIDEOS_MORE: string[] = [];

/* Fotografias da frota BMX (capitação 2025, acervo local otimizado). */
const FOTOS = [
  "/cases/bmx/bmx-frota-01.webp",
  "/cases/bmx/bmx-frota-02.webp",
  "/cases/bmx/bmx-frota-03.webp",
  "/cases/bmx/bmx-frota-04.webp",
  "/cases/bmx/bmx-frota-05.webp",
  "/cases/bmx/bmx-frota-06.webp",
  "/cases/bmx/bmx-frota-07.webp",
  "/cases/bmx/bmx-frota-10.webp",
  "/cases/bmx/bmx-frota-12.webp",
  "/cases/bmx/bmx-frota-14.webp",
  "/cases/bmx/bmx-frota-15.webp",
  "/cases/bmx/bmx-frota-17.webp",
  "/cases/bmx/bmx-frota-18.webp",
  "/cases/bmx/bmx-frota-21.webp",
  "/cases/bmx/bmx-frota-22.webp",
];

const FOTOS_ALT = [
  "Caminhão Mercedes-Benz amarelo da frota BMX com carreta preta no pátio do Centro de Armazenagem e Distribuição",
  "Caminhão amarelo BMX Soluções Logísticas com carreta de carga estacionado no pátio da operação",
  "Fila de caminhões VW Meteor da frota BMX alinhados em frente ao centro de distribuição",
  "Linha de caminhões da frota BMX no pátio do Centro de Armazenagem e Distribuição",
  "Caminhão Mercedes-Benz branco da frota BMX em primeiro plano com os demais caminhões ao fundo",
  "Perspectiva da frota BMX com caminhões VW Constellation e Mercedes-Benz alinhados no pátio",
  "Vista ampla do pátio da BMX com a frota de caminhões e área de manobra do centro de distribuição",
  "Caminhão amarelo BMX rebocando carreta de container no centro de distribuição",
  "Vista elevada da frota BMX alinhada em frente às docas do centro de distribuição",
  "Fila simétrica de caminhões brancos e do caminhão amarelo da frota BMX vista de cima",
  "Enfileiramento frontal da frota de caminhões BMX no pátio da operação logística",
  "Caminhão amarelo em primeiro plano com fila de caminhões brancos da frota BMX ao fundo",
  "Foto aérea da frota BMX com carreta no pátio central do Centro de Armazenagem e Distribuição",
  "Vista baixa e frontal da frota de caminhões BMX Soluções Logísticas",
  "Caminhão amarelo e caminhão branco da frota BMX lado a lado no pátio do centro de distribuição",
];

const APLICACOES = [
  "Site institucional",
  "Materiais comerciais",
  "Comunicação interna",
  "Apresentação da estrutura",
  "Recrutamento",
];

const FAQS: Faq[] = [
  {
    q: "Que material foi produzido para a BMX Soluções Logísticas?",
    a: "Fotografia da frota e do Centro de Armazenagem e Distribuição e uma série de vídeos institucionais: o vídeo institucional principal e roteiros temáticos sobre transporte químico, transporte de containers, FTL/milk run/dedicado, transporte em aeroportos, armazenagem, logística promocional e carga emergencial. As produções publicadas estão neste case e no catálogo de vídeos.",
  },
  {
    q: "As fotografias e os vídeos podem ser usados em canais comerciais?",
    a: "Sim. As produções são entregues para uso da empresa nos canais dela — site, materiais comerciais, comunicação interna e apresentações — conforme o escopo contratado em cada projeto.",
  },
  {
    q: "Vocês produzem fotografia e vídeo no mesmo projeto?",
    a: "Sim. No trabalho para a BMX Soluções Logísticas, a produção combinou os dois formatos: captação fotográfica da frota e da estrutura e produção dos vídeos institucionais da operação.",
  },
  {
    q: "Atendem outras empresas de logística?",
    a: "Sim. Produzimos fotografia e vídeo para empresas do setor logístico, com registro de frotas, centros de distribuição, armazéns, equipes e operações. Veja a página de fotografia de logística para o escopo completo.",
  },
];

export const Route = createFileRoute("/cases/bmx-logistica")({
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
          about: { "@type": "Organization", name: "BMX Soluções Logísticas" },
        }),
      },
            {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: MAIN_VIDEO?.title,
          description: MAIN_VIDEO?.description,
          uploadDate: MAIN_VIDEO?.uploaded,
          thumbnailUrl: MAIN_VIDEO?.youtube ? `https://i.ytimg.com/vi/${MAIN_VIDEO.youtube}/maxresdefault.jpg` : undefined,
          embedUrl: MAIN_VIDEO?.youtube ? `https://www.youtube-nocookie.com/embed/${MAIN_VIDEO.youtube}` : undefined,
          inLanguage: "pt-BR",
        }),
      },
{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "SpeakableSpecification", cssSelector: ["h1", ".case-lead", "main p:first-of-type"] }) },
    ],
  }),
  component: CaseBmx,
});

function CaseBmx() {
  const main = videoBySlug(VIDEOS_MAIN);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Cases", to: "/cases" },
          { label: "BMX Soluções Logísticas" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Case · Logística</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            BMX Soluções Logísticas — fotografia da frota e vídeo institucional para apresentar a operação
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos em 2025 a fotografia da frota e os vídeos institucionais da BMX Soluções
            Logísticas — do registro aéreo do Centro de Armazenagem e Distribuição aos roteiros
            temáticos de cada operação.
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
              <dd className="mt-1 font-semibold">BMX Soluções Logísticas</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Segmento</dt>
              <dd className="mt-1 font-semibold">Logística</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Serviços</dt>
              <dd className="mt-1 font-semibold">Fotografia da frota e produção de vídeo institucional</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Local documentado</dt>
              <dd className="mt-1 font-semibold">Centro de Armazenagem e Distribuição BMX</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Ano</dt>
              <dd className="mt-1 font-semibold">2025</dd>
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
              A BMX Soluções Logísticas opera transporte rodoviário de cargas — com transporte
              químico, containers, operações FTL, milk run e dedicadas, atuação em portos e
              aeroportos — e mantém um Centro de Armazenagem e Distribuição com docas, pátio de
              manobra e frota própria. A comunicação visual precisava apresentar essa estrutura
              com a dimensão que ela tem.
            </p>
            <p>
              O trabalho produzido em 2025 combinou captação fotográfica da frota e do centro de
              distribuição — incluindo registros aéreos — com uma série de vídeos institucionais:
              o vídeo institucional principal e roteiros temáticos dedicados a cada operação,
              do transporte químico à logística promocional. O material é usado pela empresa em
              site institucional, materiais comerciais e apresentação da estrutura.
            </p>
          </div>
        </div>
      </section>

      {/* Fotografias */}
      <section className="border-b border-border bg-surface" aria-labelledby="fotos">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Fotografia</p>
          <h2 id="fotos" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Fotografias da frota e do centro de distribuição
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground text-pretty">
            Seleção do acervo fotográfico produzido para a BMX Soluções Logísticas — registro da
            frota no pátio do Centro de Armazenagem e Distribuição, com fotos terrestres e aéreas.
          </p>
          <div className="mt-10">
            <Masonry images={FOTOS} alt={FOTOS_ALT} />
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
          {/* Grade de roteiros temáticos: entra aqui quando os vídeos forem
              publicados no YouTube (VIDEOS_MORE acima). */}
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
            <Link to="/fotografo-corporativo/$slug" params={{ slug: "fotos-aereas" }} className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotos aéreas de empresas
            </Link>
            <Link to="/video-institucional" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeo institucional
            </Link>
            <Link to="/videos" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeos para empresas
            </Link>
            <Link to="/fotografo-empresarial" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotógrafo empresarial
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
