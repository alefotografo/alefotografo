import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { videos, videoBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta } from "@/lib/seo";
import { Search, Video, X } from "lucide-react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { FaqList } from "@/components/site/Faq";
import { faqs, faqJsonLd } from "@/lib/faqs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { LazySection } from "@/components/site/LazySection";
import { waLink } from "@/lib/whatsapp";
import { TIPOS, SERVICOS, SEGMENTOS, PROCESSO, DIFERENCIAIS, GROUP_DEFS, type Group } from "./-videos-content";

const featuredFaqs = faqs
  .filter((f) => /v[ií]deo|institucional|evento|drone|cobertura|pre[çc]o|custa|prazo/i.test(f.q))
  .slice(0, 8);

const SHOWREEL_SLUG = "ativa-log";

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: buildMeta({
      title: "Vídeos Corporativos em São Paulo | Produção para Empresas",
      description:
        "Produção de vídeos corporativos em São Paulo para empresas: institucional, eventos, treinamento e comunicação interna, com roteiro, captação e edição.",
      path: "/videos",
    }),
    links: [
      { rel: "canonical", href: "https://www.alefotografo.com.br/videos" },
      { rel: "dns-prefetch", href: "https://i.ytimg.com" },
      { rel: "preconnect", href: "https://i.ytimg.com", crossOrigin: "" },
      { rel: "dns-prefetch", href: "https://vumbnail.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Produção de vídeo corporativo em São Paulo",
          serviceType: "Produção de vídeo corporativo",
          description:
            "Produção de vídeo institucional, treinamento, integração, depoimentos, eventos corporativos e reels para empresas em São Paulo.",
          areaServed: { "@type": "City", name: site.city },
          provider: {
            "@type": "Organization",
            name: site.name,
            telephone: `+${site.whatsapp}`,
            email: site.email,
            url: "https://www.alefotografo.com.br",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Vídeo institucional e produção audiovisual em São Paulo",
          description: `Catálogo com ${videos.length} produções audiovisuais corporativas em São Paulo.`,
          provider: { "@type": "Organization", name: site.name },
          numberOfItems: videos.length,
          itemListElement: videos.slice(0, 30).map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.alefotografo.com.br/videos/${v.slug}`,
            name: v.title,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(featuredFaqs)),
      },
    ],
  }),
  component: VideosIndex,
});

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */


function VideosIndex() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string>("institucional");
  const [expanded, setExpanded] = useState(false);

  const showreel = videoBySlug(SHOWREEL_SLUG) ?? videos[0];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return videos;
    return videos.filter((v) =>
      [v.title, v.subtitle, v.description].some((t) => (t ?? "").toLowerCase().includes(term)),
    );
  }, [q]);

  const grouped = useMemo<Group[]>(() => {
    const buckets = new Map<string, typeof videos>(GROUP_DEFS.map((g) => [g.id, []]));
    for (const v of videos) {
      const text = `${v.title} ${v.subtitle ?? ""}`;
      const match =
        GROUP_DEFS.find((g) => g.id === "reels" && g.test(text)) ??
        GROUP_DEFS.find((g) => g.id === "feiras" && g.test(text)) ??
        GROUP_DEFS.find((g) => g.id === "depoimentos" && g.test(text)) ??
        GROUP_DEFS.find((g) => g.id === "eventos" && g.test(text)) ??
        GROUP_DEFS[0];
      buckets.get(match.id)!.push(v);
    }
    return GROUP_DEFS.map((g) => ({
      id: g.id,
      label: g.label,
      blurb: g.blurb,
      items: buckets.get(g.id)!,
    })).filter((g) => g.items.length > 0);
  }, []);

  const activeGroup = grouped.find((g) => g.id === active) ?? grouped[0];

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Vídeos" }]} />

      {/* Herói */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">+30 anos produzindo imagem corporativa</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Vídeos corporativos em {site.city} para empresas que precisam vender, treinar e comunicar melhor.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produção de vídeo institucional, treinamento, integração, depoimentos, eventos corporativos e conteúdo para comunicação empresarial. Roteiro, captação e edição com mais de 30 anos de bagagem — em {site.city} e em todo o Brasil.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Olá Alexandre, quero um orçamento de vídeo corporativo para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <a href="#tipos" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Ver tipos de vídeo
            </a>
            <a href="#portfolio" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Ver portfólio
            </a>
          </div>

          <div className="mt-10 flex max-w-xl items-center gap-2 rounded-sm border border-border bg-surface px-3 py-2 focus-within:border-ember">
            <Search size={16} className="text-muted-foreground" aria-hidden="true" />
            <label htmlFor="video-search" className="sr-only">Buscar vídeos</label>
            <input
              id="video-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por título, evento ou cliente…"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            {q && (
              <button
                type="button"
                aria-label="Limpar busca"
                onClick={() => setQ("")}
                className="rounded-sm p-1 text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Showreel */}
      {showreel && (
        <section className="border-b border-border" aria-labelledby="showreel">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Showreel</p>
            <h2 id="showreel" className="mb-6 font-display text-2xl font-semibold md:text-3xl">
              {showreel.title}
            </h2>
            <div className="aspect-video overflow-hidden rounded-sm bg-black ring-1 ring-border">
              <VideoPlayer video={showreel} />
            </div>
          </div>
        </section>
      )}

      {/* Prova social */}
      <section className="border-b border-border bg-surface" aria-label="Empresas atendidas">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12">
          <p className="text-sm text-muted-foreground text-pretty md:text-base">
            Mais de 30 anos atendendo empresas como <strong className="text-foreground">Tecnisa</strong>, <strong className="text-foreground">Convatec</strong>, <strong className="text-foreground">Accor</strong>, <strong className="text-foreground">ABRADILAN</strong>, <strong className="text-foreground">Galena</strong> e <strong className="text-foreground">Germed</strong> — em projetos por todo o Brasil.
          </p>
        </div>
      </section>

      {/* Tipos de vídeo */}
      <section id="tipos" className="border-b border-border scroll-mt-20" aria-labelledby="tipos-titulo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Tipos de vídeo para empresas</p>
          <h2 id="tipos-titulo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Que tipo de vídeo sua empresa precisa?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            Um vídeo corporativo bem produzido apresenta a estrutura, explica serviços, treina equipes e gera confiança em canais digitais, reuniões e apresentações comerciais.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TIPOS.map((t) => (
              <li key={t.title} className="flex flex-col rounded-sm border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground text-pretty">{t.text}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href={waLink(`Olá Alexandre, quero um orçamento de ${t.wa} para minha empresa.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ember hover:underline"
                  >
                    Solicitar orçamento
                  </a>
                  {t.to && (
                    <Link to={t.to} className="text-sm text-muted-foreground hover:text-foreground">
                      Saber mais →
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Serviços em profundidade */}
      <LazySection minHeight={600}>
        <section className="border-b border-border bg-surface" aria-labelledby="servicos-titulo">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Serviços</p>
            <h2 id="servicos-titulo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
              Vídeos que ajudam sua empresa a vender, treinar e comunicar melhor.
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground text-pretty">
              Produção de vídeo corporativo em {site.city} para indústrias, logística, clínicas e hospitais, escritórios de advocacia e áreas de marketing, RH e comunicação interna. Cada projeto começa pelo objetivo comercial — não pelo equipamento.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {SERVICOS.map((s) => (
                <article key={s.title} className="rounded-sm border border-border bg-background p-6">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-ember">Para quem é</dt>
                      <dd className="mt-1 text-muted-foreground text-pretty">{s.quem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-ember">Quando usar</dt>
                      <dd className="mt-1 text-muted-foreground text-pretty">{s.quando}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-ember">O que entregamos</dt>
                      <dd className="mt-1 text-muted-foreground text-pretty">{s.entrega}</dd>
                    </div>
                  </dl>
                  <a
                    href={waLink(`Olá Alexandre, quero falar sobre um projeto de ${s.wa}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-sm bg-ember px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
                  >
                    {s.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Portfólio */}
      <section id="portfolio" className="border-b border-border scroll-mt-20" aria-labelledby="servicos-portfolio">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Portfólio</p>
          <h2 id="servicos-portfolio" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Frentes de produção, um único padrão de qualidade.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            Escolha a frente e veja trabalhos reais entregues para empresas. Expanda cada seção para conferir mais cases do mesmo serviço.
          </p>

          {q ? (
            <>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground" aria-live="polite">
                {filtered.length} {filtered.length === 1 ? "vídeo" : "vídeos"} para "{q}"
              </p>
              {filtered.length === 0 ? (
                <div className="mt-6 rounded-sm border border-dashed border-border p-12 text-center text-muted-foreground">
                  <p>Nenhum vídeo encontrado para esta busca.</p>
                  <button type="button" onClick={() => setQ("")} className="mt-4 text-sm text-ember hover:underline">
                    Limpar filtro
                  </button>
                </div>
              ) : (
                <VideoGrid items={filtered} className="mt-6" />
              )}
            </>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Frentes de produção">
                {grouped.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    role="tab"
                    aria-selected={active === g.id}
                    onClick={() => {
                      setActive(g.id);
                      setExpanded(false);
                    }}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      active === g.id
                        ? "border-ember bg-ember text-accent-foreground"
                        : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                    }`}
                  >
                    {g.label}
                    <span className="ml-2 text-xs">{g.items.length}</span>
                  </button>
                ))}
              </div>

              {activeGroup && (
                <div className="mt-8">
                  <p className="max-w-2xl text-muted-foreground text-pretty">{activeGroup.blurb}</p>
                  <VideoGrid
                    items={expanded ? activeGroup.items : activeGroup.items.slice(0, 4)}
                    className="mt-6"
                  />
                  {activeGroup.items.length > 4 && (
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => !v)}
                      className="mt-8 inline-flex rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface"
                    >
                      {expanded
                        ? "Mostrar menos"
                        : `Ver mais ${activeGroup.items.length - 4} cases de ${activeGroup.label}`}
                    </button>
                  )}
                </div>
              )}

              <p className="mt-10 text-sm text-muted-foreground">
                Não sabe qual formato precisa?{" "}
                <Link to="/contato" className="text-ember underline underline-offset-4">
                  Fale comigo
                </Link>
              </p>
            </>
          )}
        </div>
      </section>

      {/* Índice completo — todos os vídeos com link real no HTML servido, sem
          depender de aba ativa ou JS. Evita páginas de vídeo órfãs. */}
      <section className="border-b border-border" aria-labelledby="indice-videos">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Índice</p>
          <h2 id="indice-videos" className="font-display text-2xl font-semibold md:text-4xl">
            Todas as {videos.length} produções
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
            Catálogo completo em ordem alfabética. Para retratos de pessoas e equipes, veja o{" "}
            <Link to="/portfolio" className="text-ember underline underline-offset-4">
              portfólio de fotografia
            </Link>
            .
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[...videos]
              .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"))
              .map((v) => (
                <li key={v.slug}>
                  <Link
                    to="/videos/$slug"
                    params={{ slug: v.slug }}
                    className="text-muted-foreground hover:text-ember"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Segmentos */}
      <LazySection minHeight={600}>
        <section className="border-b border-border bg-surface" aria-labelledby="segmentos-titulo">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Segmentos atendidos</p>
            <h2 id="segmentos-titulo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
              Produção de vídeo para diferentes segmentos
            </h2>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SEGMENTOS.map((s) => (
                <li key={s.title} className="flex flex-col rounded-sm border border-border bg-background p-6">
                  <h3 className="font-display text-base font-semibold">{s.title}</h3>
                  <dl className="mt-4 flex-1 space-y-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-ember">Desafio</dt>
                      <dd className="mt-1 text-muted-foreground text-pretty">{s.desafio}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-ember">Vídeo indicado</dt>
                      <dd className="mt-1 text-muted-foreground text-pretty">{s.indicado}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.16em] text-ember">Benefício comercial</dt>
                      <dd className="mt-1 text-muted-foreground text-pretty">{s.beneficio}</dd>
                    </div>
                  </dl>
                  <a
                    href={waLink(`Olá Alexandre, ${s.cta.toLowerCase()}. Pode me enviar um orçamento?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 text-sm font-medium text-ember hover:underline"
                  >
                    {s.cta} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </LazySection>

      {/* Processo */}
      <LazySection minHeight={400}>
        <section id="processo" className="border-b border-border scroll-mt-20" aria-labelledby="processo-titulo">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Processo</p>
            <h2 id="processo-titulo" className="font-display text-3xl font-semibold md:text-4xl text-balance">
              Do briefing à entrega, sem improviso.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
              Cinco etapas claras, com cronograma definido e aprovação em cada ponto de virada.
            </p>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {PROCESSO.map((p) => (
                <li key={p.n} className="rounded-sm border border-border bg-surface p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-ember">Etapa {p.n}</span>
                  <h3 className="mt-3 font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </LazySection>

      {/* Diferenciais */}
      <LazySection minHeight={400}>
        <section className="border-b border-border bg-surface" aria-labelledby="diferenciais-titulo">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Diferenciais</p>
            <h2 id="diferenciais-titulo" className="font-display text-3xl font-semibold md:text-4xl text-balance">
              Por que empresas contratam este serviço
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DIFERENCIAIS.map((d) => (
                <li key={d.title} className="rounded-sm border border-border bg-background p-6">
                  <h3 className="font-display text-base font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </LazySection>

      {/* Sobre */}
      <LazySection minHeight={360}>
        <section className="border-b border-border" aria-labelledby="sobre-titulo">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Sobre</p>
              <h2 id="sobre-titulo" className="font-display text-3xl font-semibold md:text-4xl text-balance">
                Imagem corporativa com intenção estratégica, não apenas estética.
              </h2>
              <p className="mt-5 text-muted-foreground text-pretty">
                Sou Alexandre Machado, o Alê Fotógrafo. Há mais de 30 anos atendo empresas em {site.city} com fotografia corporativa, retratos profissionais, cobertura de eventos e vídeo institucional.
              </p>
              <p className="mt-4 text-muted-foreground text-pretty">
                Entendo o posicionamento, o público e o objetivo da comunicação antes de iniciar qualquer produção. Atendimento direto, sem intermediários, com estúdio próprio e estrutura móvel para gravar na sua empresa.
              </p>
              <Link to="/quem-e-o-ale" className="mt-6 inline-flex text-sm text-ember hover:underline">
                Conhecer o Alê →
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-4 self-start">
              {[
                { k: "+30", v: "anos de experiência" },
                { k: "Brasil", v: "projetos em todo o país" },
                { k: "3 em 1", v: "roteiro, captação e edição" },
                { k: "Multi", v: "entrega em todos os formatos" },
              ].map((m) => (
                <li key={m.k} className="rounded-sm border border-border bg-surface p-6">
                  <p className="font-display text-2xl font-semibold text-ember">{m.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </LazySection>

      {/* FAQ */}
      <section className="border-b border-border bg-surface" aria-labelledby="faq-videos">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 id="faq-videos" className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes sobre vídeo corporativo
          </h2>
          <FaqList items={featuredFaqs} />
          <Link to="/faq" className="mt-8 inline-flex text-sm text-muted-foreground hover:text-foreground">
            Ver todas as perguntas →
          </Link>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-border scroll-mt-20" aria-labelledby="contato-titulo">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Contato</p>
            <h2 id="contato-titulo" className="font-display text-2xl font-semibold md:text-3xl">
              Vamos produzir o vídeo da sua empresa?
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              Conte sobre o seu projeto. Respondo em até 1 dia útil com uma primeira conversa estratégica, sem compromisso.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              WhatsApp{" "}
              <a href={waLink("Olá Alexandre, quero conversar sobre um vídeo corporativo.")} target="_blank" rel="noopener noreferrer" className="text-ember underline underline-offset-4">
                (11) 91355-0533
              </a>{" "}
              · E-mail{" "}
              <a href={`mailto:${site.email}`} className="text-ember underline underline-offset-4">
                {site.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={waLink("Olá Alexandre, quero um orçamento de vídeo corporativo para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-ember px-6 py-3 font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface"
            >
              Enviar briefing pelo formulário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function VideoGrid({ items, className = "" }: { items: typeof videos; className?: string }) {
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {items.map((v, i) => {
        const thumb = videoThumb(v, "sm");
        const eager = i < 4;
        return (
          <li
            key={v.slug}
            style={{ contentVisibility: i < 8 ? "visible" : "auto", containIntrinsicSize: "320px 280px" }}
          >
            <Link
              to="/videos/$slug"
              params={{ slug: v.slug }}
              preload="intent"
              className="group block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label={`Assistir: ${v.title}`}
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                {thumb ? (
                  <img
                    src={thumb}
                    alt={`Capa do vídeo: ${v.title}`}
                    width={320}
                    height={180}
                    loading={eager ? "eager" : "lazy"}
                    fetchPriority={i < 2 ? "high" : "auto"}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget;
                      const next = ytFallback(img.src);
                      if (next && next !== img.src) img.src = next;
                    }}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background">
                    <Video size={40} className="text-ember/70" aria-hidden="true" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-ember/90 p-4 text-accent-foreground shadow-lg transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug group-hover:text-ember">
                  {v.title}
                </h3>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
