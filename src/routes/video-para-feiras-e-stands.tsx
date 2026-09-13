import { createFileRoute, Link } from "@tanstack/react-router";
import { videoBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";
import { LazySection } from "@/components/site/LazySection";
import { faqJsonLd } from "@/lib/faqs";
import { waLink } from "@/lib/whatsapp";
import type { Faq } from "@/lib/faqs";

const PATH = "/video-para-feiras-e-stands";
const TITLE = "Vídeo para Feiras e Stands em São Paulo | Produção";
const DESCRIPTION =
  "Produção de vídeos para feiras e stands em São Paulo. Cobertura audiovisual para expositores, empresas e marcas em feiras de negócios e eventos profissionais.";
const WA =
  "Olá Alexandre, quero um orçamento de vídeo para a participação da minha empresa em uma feira.";

/* Usos do material audiovisual gerado a partir da participação na feira. */
const APLICACOES = [
  "Site da empresa",
  "LinkedIn",
  "YouTube",
  "Redes sociais",
  "Comunicação interna",
  "Apresentações comerciais",
  "Divulgação pós-evento",
  "Materiais institucionais",
];

/* Cases de feira reais já publicados no catálogo de vídeos. */
const CASES: { slug: string; label: string; tipo: string }[] = [
  {
    slug: "beauty-fair-2026-3o-dia-tendencias-lancamentos-e-os-melhores-momentos-da-feira",
    label: "Beauty Fair 2026",
    tipo: "Feira de beleza",
  },
  {
    slug: "procooler-na-febrava-cobertura-profissional-de-feiras-e-eventos-corporativos",
    label: "Procooler — FEBRAVA",
    tipo: "Feira de refrigeração",
  },
  {
    slug: "sq-quimica-na-fce-pharma-cobertura-profissional-de-feira-de-negocios-com-fotogra",
    label: "SQ Química — FCE Pharma (foto e vídeo)",
    tipo: "Feira farmacêutica",
  },
  {
    slug: "sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c",
    label: "SQ Química — FCE Pharma (vídeo)",
    tipo: "Feira farmacêutica",
  },
  {
    slug: "g-tech-na-conexao-farma-2023-inovacao-tecnologia-e-solucoes-para-a-saude",
    label: "G-TECH — Conexão Farma 2023",
    tipo: "Feira do setor farmacêutico",
  },
  {
    slug: "genesis-inteligencia-artificial-na-feira-hospitalar",
    label: "Genesis IA — Feira Hospitalar",
    tipo: "Feira de saúde",
  },
  {
    slug: "sq-quimica-na-abrafati-show-2022",
    label: "SQ Química — ABRAFATI Show 2022",
    tipo: "Feira de tintas e química",
  },
];

const PROCESSO: { h: string; p: string }[] = [
  {
    h: "1. Briefing",
    p: "Entendemos qual é a feira, como será a participação da empresa e onde o conteúdo será utilizado depois do evento.",
  },
  {
    h: "2. Planejamento",
    p: "Definimos os momentos prioritários da participação, os pontos de captação no stand e o formato dos entregáveis.",
  },
  {
    h: "3. Captação no evento",
    p: "Nossa equipe grava no próprio ambiente da feira, durante o período de funcionamento previsto no projeto.",
  },
  {
    h: "4. Edição",
    p: "Montagem, tratamento de imagem e som e cortes adaptados aos canais em que o material será publicado.",
  },
  {
    h: "5. Entrega",
    p: "Versão final aprovada e, quando o projeto prevê, versões adicionais para redes e comunicação interna.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Vocês produzem vídeos para empresas expositoras em feiras?",
    a: "Sim. Produzimos vídeos para empresas e marcas que expõem em feiras de negócios e exposições profissionais, com captação realizada no próprio evento e edição voltada ao uso do material pela empresa.",
  },
  {
    q: "É possível contratar fotografia e vídeo para a mesma feira?",
    a: "Sim. Fotografia e vídeo podem fazer parte do mesmo planejamento de cobertura, com equipe dimensionada para os dois entregáveis. O escopo é definido no orçamento, de acordo com a participação da empresa no evento.",
  },
  {
    q: "O vídeo pode ser utilizado depois do evento?",
    a: "Sim. O material é editado pensando no uso posterior: site, LinkedIn, YouTube, redes sociais, apresentações comerciais, comunicação interna e divulgação da participação na feira.",
  },
  {
    q: "Vocês atendem feiras e exposições em São Paulo?",
    a: "Sim. A base é São Paulo e atendemos feiras e exposições na cidade e na região. Eventos em outras localidades são avaliados e previstos no orçamento.",
  },
  {
    q: "É possível planejar conteúdos diferentes a partir da participação na feira?",
    a: "Sim. A partir do material captado no evento é possível montar mais de uma peça, com durações e formatos distintos para cada canal. Os entregáveis são definidos antes da produção.",
  },
];

export const Route = createFileRoute("/video-para-feiras-e-stands")({
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
          "@type": "Service",
          name: "Produção de vídeo para feiras e stands em São Paulo",
          serviceType: "Produção de vídeo para feiras e stands",
          description: DESCRIPTION,
          areaServed: { "@type": "City", name: site.city },
          provider: {
            "@type": "Organization",
            name: site.name,
            telephone: `+${site.whatsapp}`,
            email: site.email,
            url: SITE_ORIGIN,
          },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: VideoFeirasStands,
});

function VideoFeirasStands() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Vídeos Corporativos", to: "/videos" },
          { label: "Vídeos para Feiras e Stands" },
        ]}
      />

      {/* Herói */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Vídeo para expositores
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Vídeos para feiras e stands em {site.city}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos vídeos para empresas e expositores que participam de feiras de negócios, exposições e eventos profissionais. Nossa equipe realiza a captação durante o evento e desenvolve conteúdos para apresentar a participação da empresa, fortalecer a comunicação da marca e ampliar o aproveitamento do evento em canais digitais.
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
              href="#trabalhos"
              className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface"
            >
              Ver trabalhos
            </a>
          </div>
        </div>
      </section>

      {/* Produção */}
      <section className="border-b border-border bg-surface" aria-labelledby="producao">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="producao" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Produção audiovisual para empresas expositoras
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              A produção registra a participação da empresa no evento: o stand, o ambiente da feira e os momentos definidos como prioridade no planejamento.
            </p>
            <p>
              O resultado é um conteúdo audiovisual que a empresa utiliza na comunicação corporativa, mostrando presença no mercado e no calendário do setor.
            </p>
            <p>
              O escopo de cada projeto é definido antes do evento, de acordo com o formato da participação e com os canais em que o material será publicado.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="border-b border-border" aria-labelledby="aplicacoes">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="aplicacoes" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Conteúdo em vídeo para aproveitar melhor a participação na feira
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {APLICACOES.map((a) => (
              <li key={a} className="rounded-sm border border-border bg-surface px-4 py-3 text-sm">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cases */}
      <section id="trabalhos" className="border-b border-border scroll-mt-20" aria-labelledby="trabalhos-titulo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Portfólio</p>
          <h2 id="trabalhos-titulo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Feiras e stands registrados em vídeo
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CASES.map((c, i) => {
              const video = videoBySlug(c.slug);
              if (!video) return null;
              const thumb = videoThumb(video, "sm");
              return (
                <li key={c.slug}>
                  <Link
                    to="/videos/$slug"
                    params={{ slug: c.slug }}
                    preload="intent"
                    className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                    aria-label={`Assistir: ${video.title}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      {thumb && (
                        <img
                          src={thumb}
                          alt={`Capa do vídeo da feira ${c.label}`}
                          width={320}
                          height={180}
                          loading={i < 2 ? "eager" : "lazy"}
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const el = e.currentTarget;
                            const next = ytFallback(el.src);
                            if (next && next !== el.src) el.src = next;
                          }}
                          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-ember">{c.tipo}</p>
                      <h3 className="mt-2 font-display text-base font-semibold leading-snug group-hover:text-ember">
                        {c.label}
                      </h3>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link to="/videos" className="mt-8 inline-flex text-sm text-muted-foreground hover:text-foreground">
            Ver todas as produções de vídeo corporativo →
          </Link>
        </div>
      </section>

      {/* Cross-sell fotografia */}
      <LazySection minHeight={320}>
        <section className="border-b border-border bg-surface" aria-labelledby="foto-video-feira">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <h2 id="foto-video-feira" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
              Fotografia e vídeo para feiras de negócios
            </h2>
            <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
              Fotografia e vídeo são entregáveis diferentes e podem fazer parte do mesmo planejamento de cobertura da feira, com equipe dimensionada para os dois. Veja o trabalho de{" "}
              <Link to="/fotografo-de-feira-de-negocios" className="text-ember hover:underline">
                fotografia de feira de negócios
              </Link>{" "}
              e a{" "}
              <Link
                to="/fotografo-corporativo/$slug"
                params={{ slug: "fotografo-feiras-stands" }}
                className="text-ember hover:underline"
              >
                galeria de feiras e stands
              </Link>
              .
            </p>
          </div>
        </section>
      </LazySection>

      {/* Processo */}
      <section className="border-b border-border" aria-labelledby="processo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="processo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Como planejamos a produção em vídeo para feiras
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {PROCESSO.map((p) => (
              <li key={p.h} className="rounded-sm border border-border bg-surface p-6">
                <h3 className="font-display text-base font-semibold">{p.h}</h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">{p.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border" aria-labelledby="faq-video-feiras">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 id="faq-video-feiras" className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes sobre vídeo para feiras e stands
          </h2>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="cta-video-feiras">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 id="cta-video-feiras" className="font-display text-2xl font-semibold md:text-3xl">
              Vamos conversar sobre sua próxima feira
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Conte para nossa equipe qual é o evento, como será a participação da empresa e como o conteúdo será utilizado. A partir dessas informações, planejamos a produção audiovisual adequada ao projeto.
            </p>
          </div>
          <a
            href={waLink(WA)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </a>
        </div>
      </section>
    </>
  );
}
