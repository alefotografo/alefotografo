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

const PATH = "/video-institucional";
const TITLE = "Vídeo Institucional em São Paulo | Produção para Empresas";
const DESCRIPTION =
  "Produção de vídeo institucional em São Paulo para apresentar empresas, estruturas, equipes, serviços e operações. Roteiro, captação, direção e edição.";
const WA =
  "Olá Alexandre, quero um orçamento de vídeo institucional para minha empresa.";

/* Aplicações do vídeo institucional. */
const APLICACOES = [
  "Site institucional",
  "Apresentações comerciais",
  "LinkedIn",
  "YouTube",
  "Eventos",
  "Treinamentos",
  "Comunicação interna",
  "Apresentações para clientes e parceiros",
];

/* Cases institucionais reais já publicados no catálogo de vídeos. */
const CASES: { slug: string; label: string; segmento: string }[] = [
  { slug: "flexfunds-solucoes-financeiras-inteligentes-para-empresas-video-institucional", label: "FlexFunds", segmento: "Financeiro" },
  { slug: "ativa-log", label: "ATIVA Log", segmento: "Logística" },
  { slug: "video-institucional-rocha-queiroz-advogados", label: "Rocha & Queiroz", segmento: "Jurídico" },
  { slug: "nitriflex-industria-quimica-de-polimeros-especiais-e-borrachas-nitrilicas", label: "Nitriflex", segmento: "Indústria química" },
  { slug: "fiorde-logistica-solucoes-logisticas-integradas-para-empresas", label: "Fiorde Logística", segmento: "Logística" },
  { slug: "video-institucional-bmx-logistica", label: "BMX Logística", segmento: "Logística" },
  { slug: "unitec-video-institucional", label: "UNITEC", segmento: "Indústria" },
  { slug: "sq-quimica-unidade-vinhedo", label: "SQ Química — Unidade Vinhedo", segmento: "Química" },
];

const PROCESSO: { h: string; p: string }[] = [
  { h: "1. Briefing", p: "Entendemos o objetivo do vídeo, o público, os canais de uso e o que a empresa precisa comunicar." },
  { h: "2. Planejamento e roteiro", p: "Estruturamos a narrativa, a ordem dos assuntos, as locações e o cronograma de captação." },
  { h: "3. Captação", p: "Gravamos entrevistas, ambientes, equipes e operações com direção durante toda a produção." },
  { h: "4. Edição", p: "Montagem, tratamento de imagem e som, trilha e inserção de gráficos quando necessário." },
  { h: "5. Entrega", p: "Versão final aprovada e, quando o projeto pede, versões adaptadas para diferentes canais." },
];

const FAQS: Faq[] = [
  {
    q: "Quanto custa produzir um vídeo institucional?",
    a: "O valor depende do escopo: número de locações, dias de captação, entrevistas, duração final e versões extras. Envie o objetivo do vídeo e onde ele será utilizado para receber um orçamento estruturado para o seu projeto.",
  },
  {
    q: "Quanto tempo leva a produção de um vídeo institucional?",
    a: "O prazo é definido no planejamento, de acordo com o número de locações, a agenda de gravação da empresa e a complexidade da edição. Ele é informado no orçamento, antes do início da produção.",
  },
  {
    q: "Vocês ajudam com o roteiro?",
    a: "Sim. O roteiro faz parte da produção: a partir do briefing, planejamos a narrativa, a sequência dos assuntos e o que precisa ser gravado em cada ambiente.",
  },
  {
    q: "O vídeo pode incluir entrevistas com executivos e colaboradores?",
    a: "Sim. Gravamos entrevistas com diretoria, lideranças e equipe, com direção durante a gravação para que os depoimentos fiquem naturais e alinhados à mensagem do vídeo.",
  },
  {
    q: "A produção pode incluir fotografia corporativa no mesmo projeto?",
    a: "Sim. A mesma produção pode reunir vídeo institucional, retratos profissionais, fotografia de ambientes, equipes e operações, aproveitando a preparação já feita no local.",
  },
];

export const Route = createFileRoute("/video-institucional")({
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
          name: "Produção de vídeo institucional em São Paulo",
          serviceType: "Produção de vídeo institucional",
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
  component: VideoInstitucional,
});

function VideoInstitucional() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Vídeos Corporativos", to: "/videos" },
          { label: "Vídeo Institucional" },
        ]}
      />

      {/* Herói */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Vídeo institucional para empresas
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Vídeo institucional para empresas em {site.city}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos vídeos institucionais para apresentar empresas, estruturas, equipes, serviços e operações com comunicação clara e profissional. Cuidamos do planejamento, roteiro, captação, direção e edição de cada produção.
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

      {/* Produção completa */}
      <section className="border-b border-border bg-surface" aria-labelledby="producao">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="producao" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Produção completa de vídeo institucional
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              Cada produção começa pelo planejamento: entendemos o objetivo do vídeo, o público e os canais em que ele será utilizado, e a partir disso desenvolvemos o roteiro e a sequência de gravação.
            </p>
            <p>
              Na captação, nossa equipe grava ambientes, equipes, serviços e operações, com entrevistas de executivos e colaboradores quando o projeto pede, além das imagens de apoio que sustentam a narrativa.
            </p>
            <p>
              Na edição, montamos o material com tratamento de imagem e som, trilha e locução quando aplicável, e preparamos versões adaptadas para diferentes canais quando o vídeo será usado em site, apresentações e redes.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="border-b border-border" aria-labelledby="aplicacoes">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="aplicacoes" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Onde o vídeo institucional pode ser utilizado
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
            Vídeos institucionais realizados
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
                          alt={`Capa do vídeo institucional ${c.label}`}
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
                      <p className="text-xs uppercase tracking-[0.18em] text-ember">{c.segmento}</p>
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

      {/* Autoridade */}
      <section className="border-b border-border bg-surface" aria-labelledby="segmentos">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="segmentos" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Experiência em produções para diferentes segmentos
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
            São mais de 30 anos produzindo imagem corporativa para empresas de logística, indústria, química, financeiro e jurídico, entre outros setores. Essa bagagem permite entrar em operações, plantas, centros de distribuição e escritórios com agilidade, respeitando rotina, segurança e cronograma de cada empresa.
          </p>
        </div>
      </section>

      {/* Foto + vídeo */}
      <LazySection minHeight={320}>
        <section className="border-b border-border" aria-labelledby="foto-video">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <h2 id="foto-video" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
              Fotografia e vídeo na mesma produção
            </h2>
            <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
              Quando o projeto exige, a mesma produção reúne vídeo institucional, retratos profissionais, banco de imagens corporativo e fotografia de ambientes, equipes e operações — aproveitando a preparação já feita no local. Veja{" "}
              <Link to="/fotos-corporativas" className="text-ember hover:underline">
                fotografia corporativa
              </Link>{" "}
              e{" "}
              <Link
                to="/fotografo-corporativo/$slug"
                params={{ slug: "banco-de-imagens-para-empresas" }}
                className="text-ember hover:underline"
              >
                banco de imagens para empresas
              </Link>
              .
            </p>
          </div>
        </section>
      </LazySection>

      {/* Processo */}
      <section className="border-b border-border bg-surface" aria-labelledby="processo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="processo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Como funciona a produção
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {PROCESSO.map((p) => (
              <li key={p.h} className="rounded-sm border border-border bg-background p-6">
                <h3 className="font-display text-base font-semibold">{p.h}</h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">{p.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border" aria-labelledby="faq-video-institucional">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 id="faq-video-institucional" className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes sobre vídeo institucional
          </h2>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="cta-video-institucional">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 id="cta-video-institucional" className="font-display text-2xl font-semibold md:text-3xl">
              Vamos conversar sobre seu vídeo institucional
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Conte para nossa equipe o objetivo do projeto e onde o vídeo será utilizado. A partir dessas informações, estruturamos a produção de acordo com a necessidade da empresa.
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
