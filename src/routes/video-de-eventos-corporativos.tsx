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

const PATH = "/video-de-eventos-corporativos";
const TITLE = "Vídeo de Eventos Corporativos em São Paulo | Produção";
const DESCRIPTION =
  "Produção de vídeo de eventos corporativos em São Paulo: congressos, convenções, fóruns e premiações, com captação no local, entrevistas e edição.";
const WA =
  "Olá Alexandre, quero um orçamento de vídeo para um evento corporativo.";

/* Formatos de evento presentes no acervo de produções já realizadas. */
const TIPOS = [
  "Congressos",
  "Convenções",
  "Fóruns setoriais",
  "Premiações",
  "Sales meetings",
  "Lançamentos e coquetéis",
  "Confraternizações",
  "Cursos e encontros técnicos",
];

/* Cases de evento reais já publicados no catálogo de vídeos. */
const CASES: { slug: string; label: string; tipo: string }[] = [
  { slug: "video-corporativo-do-11o-forum-abradilan-2026-cobertura-de-evento-empresarial", label: "11º Fórum ABRADILAN", tipo: "Fórum" },
  { slug: "15-convencao-abradilan-barcelo-bavaro-palace-punta-cana-01-a-06-nov-2022", label: "15ª Convenção ABRADILAN", tipo: "Convenção internacional" },
  { slug: "convencao-de-vendas-2023-tecnisa", label: "Tecnisa — Convenção de Vendas", tipo: "Convenção" },
  { slug: "ibde-rio2026", label: "IBDE — Congresso no Rio", tipo: "Congresso" },
  { slug: "ibde-mendoza-iii-congresso-internacional", label: "IBDE Mendoza", tipo: "Congresso internacional" },
  { slug: "passion-for-excellence-latam-sales-meeting-2021-convatec", label: "Convatec — Latam Sales Meeting", tipo: "Sales meeting" },
  { slug: "copapharma-coquetel-de-lancamento", label: "Copapharma — Coquetel de lançamento", tipo: "Lançamento" },
  { slug: "22-forum-de-comprasive-university", label: "22º Fórum de Compras", tipo: "Fórum" },
];

const PROCESSO: { h: string; p: string }[] = [
  { h: "1. Briefing", p: "Entendemos o formato do evento, o público, os momentos prioritários e o uso previsto do material." },
  { h: "2. Planejamento", p: "A partir do roteiro do evento, definimos pontos de captação, entrevistas e a equipe necessária." },
  { h: "3. Captação", p: "Nossa equipe grava palco, plateia, ambientes, bastidores e entrevistas ao longo da programação." },
  { h: "4. Edição", p: "Montagem, tratamento de imagem e som, trilha e cortes adaptados aos canais de divulgação." },
  { h: "5. Entrega", p: "Versão final aprovada e, quando o projeto pede, versões curtas para redes e comunicação interna." },
];

const FAQS: Faq[] = [
  {
    q: "O que está incluído na produção de vídeo de um evento corporativo?",
    a: "A produção inclui o planejamento a partir do roteiro do evento, a captação no local durante a programação, entrevistas quando previstas e a edição do material final. O escopo exato é definido no orçamento, de acordo com o formato do evento.",
  },
  {
    q: "É possível gravar entrevistas com participantes durante o evento?",
    a: "Sim. Entrevistas com diretoria, palestrantes, patrocinadores e participantes fazem parte de muitas produções, gravadas em um ponto preparado no próprio local para garantir imagem e áudio adequados.",
  },
  {
    q: "Vocês atendem eventos fora de São Paulo?",
    a: "Sim. A base é São Paulo, com atendimento em toda a região e produções em outras cidades e no exterior quando previstas no orçamento, como convenções e congressos internacionais já realizados.",
  },
  {
    q: "Dá para fazer foto e vídeo no mesmo evento?",
    a: "Sim. Fotografia e vídeo podem ser produzidos na mesma cobertura, com equipe dimensionada para os dois entregáveis e aproveitando o mesmo planejamento de captação.",
  },
  {
    q: "O material rende versões curtas para redes sociais?",
    a: "Sim. Além da versão principal, a edição pode gerar cortes curtos e verticais para LinkedIn, Instagram e comunicação interna, definidos no escopo antes da produção.",
  },
];

export const Route = createFileRoute("/video-de-eventos-corporativos")({
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
          name: "Produção de vídeo de eventos corporativos em São Paulo",
          serviceType: "Produção de vídeo de eventos corporativos",
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
  component: VideoEventosCorporativos,
});

function VideoEventosCorporativos() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Vídeos Corporativos", to: "/videos" },
          { label: "Vídeo de Eventos Corporativos" },
        ]}
      />

      {/* Herói */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Vídeo para eventos de empresa
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Vídeo de eventos corporativos em {site.city}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos vídeos de congressos, convenções, fóruns, premiações e confraternizações, com captação no local, entrevistas e edição voltada ao uso do material depois do evento.
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
            Produção de vídeo em eventos corporativos
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              A produção começa pelo roteiro do evento: definimos quais momentos são prioridade, onde a equipe fica posicionada e quais depoimentos precisam ser gravados durante a programação.
            </p>
            <p>
              Na captação, nossa equipe registra palco, plateia, credenciamento, ambientes e bastidores, com entrevistas de diretoria, palestrantes, patrocinadores e participantes quando o projeto prevê.
            </p>
            <p>
              Na edição, o material é montado com tratamento de imagem e som, trilha e cortes adaptados aos canais em que o evento será divulgado, do relatório interno à comunicação da próxima edição.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de evento */}
      <section className="border-b border-border" aria-labelledby="tipos">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="tipos" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Tipos de evento atendidos
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TIPOS.map((t) => (
              <li key={t} className="rounded-sm border border-border bg-surface px-4 py-3 text-sm">
                {t}
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
            Vídeos de eventos realizados
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
                          alt={`Capa do vídeo do evento ${c.label}`}
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

      {/* Autoridade */}
      <section className="border-b border-border bg-surface" aria-labelledby="setores">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="setores" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Experiência em eventos de diferentes setores
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
            Nossas produções de evento incluem fóruns e convenções do setor de distribuição, encontros das áreas farmacêutica e química, congressos jurídicos, convenções de vendas do mercado imobiliário e eventos da área de saúde — no Brasil e no exterior. Essa experiência permite trabalhar dentro da programação, sem interferir no andamento do evento.
          </p>
        </div>
      </section>

      {/* Foto + vídeo */}
      <LazySection minHeight={320}>
        <section className="border-b border-border" aria-labelledby="foto-video">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <h2 id="foto-video" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
              Foto e vídeo no mesmo evento
            </h2>
            <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
              A mesma cobertura pode reunir vídeo e fotografia, com equipe dimensionada para os dois entregáveis e o mesmo planejamento de captação. Veja{" "}
              <Link to="/eventos-corporativos" className="text-ember hover:underline">
                fotografia de eventos corporativos
              </Link>{" "}
              e a{" "}
              <Link
                to="/fotografo-corporativo/$slug"
                params={{ slug: "fotografo-de-eventos-corporativos" }}
                className="text-ember hover:underline"
              >
                galeria de eventos corporativos
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
            Como funciona a cobertura
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
      <section className="border-b border-border" aria-labelledby="faq-video-eventos">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 id="faq-video-eventos" className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes sobre vídeo de eventos corporativos
          </h2>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* CTA final */}
      <section aria-labelledby="cta-video-eventos">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 id="cta-video-eventos" className="font-display text-2xl font-semibold md:text-3xl">
              Vamos planejar o vídeo do seu evento
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Informe data, local, formato do evento e o uso previsto do material. A partir dessas informações, estruturamos a cobertura de acordo com a programação.
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
