import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { videos, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Search, Video, X } from "lucide-react";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { FaqList } from "@/components/site/Faq";
import { faqs, faqJsonLd } from "@/lib/faqs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const featuredFaqs = faqs.filter((f) =>
  /v[ií]deo|institucional|evento|drone|cobertura/i.test(f.q),
).slice(0, 6);

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: buildMeta({
      title: "Vídeo Institucional para Empresas em São Paulo",
      description: `Vídeo institucional, cobertura de eventos e feiras de negócios em São Paulo: roteiro, captação e edição. Veja ${videos.length} produções e peça seu orçamento.`,
      path: "/videos",
    }),
    links: [
      { rel: "canonical", href: "https://alefotografos.com.br/videos" },
      { rel: "dns-prefetch", href: "https://i.ytimg.com" },
      { rel: "preconnect", href: "https://i.ytimg.com", crossOrigin: "" },
      { rel: "dns-prefetch", href: "https://vumbnail.com" },
    ],
    scripts: [
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
            url: `/videos/${v.slug}`,
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

function VideosIndex() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return videos;
    return videos.filter((v) =>
      [v.title, v.subtitle, v.description].some((t) => (t ?? "").toLowerCase().includes(term)),
    );
  }, [q]);

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Vídeos" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">+30 anos produzindo imagem corporativa</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Vídeos que fazem a sua empresa ser levada a sério.
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produção de vídeo institucional, eventos corporativos e feiras de negócios. Roteiro, captação e edição com mais de 30 anos de bagagem — em {site.city} e em todo o Brasil.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow">
              Ver portfólio
            </a>
            <Link to="/contato" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Solicitar orçamento
            </Link>
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

      <section className="border-b border-border bg-surface" aria-label="Empresas atendidas">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12">
          <p className="text-sm text-muted-foreground text-pretty md:text-base">
            Mais de 30 anos atendendo empresas como <strong className="text-foreground">Tecnisa</strong>, <strong className="text-foreground">Convatec</strong>, <strong className="text-foreground">Accor</strong>, <strong className="text-foreground">ABRADILAN</strong>, <strong className="text-foreground">Galena</strong> e <strong className="text-foreground">Germed</strong> — em projetos por todo o Brasil.
          </p>
        </div>
      </section>

      <section id="portfolio" className="border-b border-border scroll-mt-20" aria-labelledby="servicos-portfolio">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Serviços &amp; Portfólio</p>
          <h2 id="servicos-portfolio" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Quatro frentes, um único padrão de qualidade.
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
                    <span className="ml-2 text-xs opacity-70">{g.items.length}</span>
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
                <Link to="/contato" className="text-ember hover:underline">
                  Fale comigo
                </Link>
              </p>
            </>
          )}
        </div>
      </section>


      <section className="border-t border-border bg-surface" aria-labelledby="faq-videos">
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

      <section className="border-t border-border" aria-label="Próximo passo">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Pronto para produzir o vídeo da sua empresa?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Envie seu briefing para um orçamento sob medida — atendimento em todo o Brasil.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </>
  );
}
