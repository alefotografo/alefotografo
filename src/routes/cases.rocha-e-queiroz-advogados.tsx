import { createFileRoute, Link } from "@tanstack/react-router";
import { videoBySlug } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { videoThumb, ytFallback } from "@/lib/videoThumb";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { waLink } from "@/lib/whatsapp";

const PATH = "/cases/rocha-e-queiroz-advogados";
const TITLE = "Case Rocha & Queiroz Advogados | Fotografia e Vídeo";
const DESCRIPTION =
  "Case real de fotografia e vídeo institucional para Rocha & Queiroz Advogados Associados, com produções publicadas e depoimento da equipe.";
const WA = "Olá Alexandre, vi o case da Rocha & Queiroz Advogados e quero um orçamento de fotografia e vídeo institucional.";

/* Produções Rocha & Queiroz publicadas no catálogo de vídeos (slugs e IDs reais). */
const VIDEOS = [
  { slug: "video-institucional-rocha-queiroz-advogados", youtube: "ITBhZlBQd6E" },
  { slug: "video-escritorio-rocha-e-queiroz", youtube: "3Jm3PyVBZDo" },
];

type ServicoLink =
  | { to: "/fotografia-para-advogados" | "/video-institucional" | "/videos"; label: string }
  | { to: "/fotografo-corporativo/$slug"; slug: string; label: string };

const SERVICOS: ServicoLink[] = [
  { to: "/fotografia-para-advogados", label: "Fotografia para advogados" },
  { to: "/fotografo-corporativo/$slug", slug: "fotografia-para-escritorios-de-advocacia", label: "Fotografia para escritórios de advocacia" },
  { to: "/video-institucional", label: "Vídeo institucional" },
  { to: "/videos", label: "Vídeos para empresas" },
];

export const Route = createFileRoute("/cases/rocha-e-queiroz-advogados")({
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
          about: { "@type": "Organization", name: "Rocha & Queiroz Advogados Associados" },
        }),
      },
    ],
  }),
  component: CaseRochaQueiroz,
});

function CaseRochaQueiroz() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Cases", to: "/cases" },
          { label: "Rocha & Queiroz Advogados" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Case · Advocacia</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Rocha & Queiroz Advogados — fotografia e vídeo institucional
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos fotografia e vídeo institucional para Rocha & Queiroz Advogados Associados.
            Duas produções em vídeo estão publicadas no portfólio e o trabalho é citado em
            recomendação da equipe no LinkedIn.
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
              href="#videos"
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
              <dd className="mt-1 font-semibold">Rocha & Queiroz Advogados Associados</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Segmento</dt>
              <dd className="mt-1 font-semibold">Advocacia</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Serviços comprovados</dt>
              <dd className="mt-1 font-semibold">Vídeo institucional e fotografia</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Produções em vídeo</dt>
              <dd className="mt-1 font-semibold">2 publicadas</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Fonte de prova</dt>
              <dd className="mt-1 font-semibold">Portfólio público + recomendação no LinkedIn</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Produção</dt>
              <dd className="mt-1 font-semibold">Alê Fotógrafo — Alexandre Machado e equipe</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Produção audiovisual */}
      <section className="border-b border-border" aria-labelledby="producao">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="producao" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Produção audiovisual
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              Para Rocha & Queiroz Advogados Associados, produzimos vídeo institucional que
              apresenta o escritório e a equipe. As duas produções publicadas — o vídeo
              institucional e o vídeo do escritório — estão disponíveis no catálogo de vídeos e
              reproduzidas abaixo.
            </p>
            <p>
              O trabalho audiovisual para escritórios de advocacia segue o mesmo padrão das demais
              produções institucionais: planejamento, captação com direção e edição, com foco em
              apresentar a estrutura e as pessoas do escritório.
            </p>
          </div>
        </div>
      </section>

      {/* Trabalho fotográfico */}
      <section className="border-b border-border bg-surface" aria-labelledby="fotografia">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="fotografia" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Trabalho fotográfico
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground text-pretty">
            O trabalho fotográfico realizado para o escritório é confirmado pela recomendação da
            coordenadora administrativa, publicada no LinkedIn, que descreve a entrega das
            fotografias e a condução da produção.
          </p>
        </div>
      </section>

      {/* Vídeos publicados */}
      <section id="videos" className="border-b border-border scroll-mt-20" aria-labelledby="videos-titulo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Vídeo</p>
          <h2 id="videos-titulo" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Vídeos publicados
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {VIDEOS.map(({ slug }) => {
              const video = videoBySlug(slug);
              if (!video) return null;
              return (
                <figure key={slug} className="overflow-hidden rounded-sm bg-black ring-1 ring-border">
                  <div className="aspect-video">
                    <VideoPlayer video={video} />
                  </div>
                  <figcaption className="bg-surface px-4 py-3 text-sm font-medium">{video.title}</figcaption>
                </figure>
              );
            })}
          </div>
          <p className="mt-6">
            <Link to="/videos" className="text-sm text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">
              Ver catálogo completo de vídeos →
            </Link>
          </p>
        </div>
      </section>

      {/* Depoimento */}
      <section className="border-b border-border bg-surface" aria-labelledby="depoimento">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Depoimento</p>
          <h2 id="depoimento" className="font-display text-2xl font-semibold md:text-3xl">
            O que a equipe do escritório disse
          </h2>
          <blockquote className="mt-8 rounded-sm border border-border bg-background p-6">
            <p className="text-lg leading-relaxed text-pretty">
              "O fotógrafo Alexandre nos entregou um excelente trabalho! É muito carismático,
              transmite leveza e naturalidade às fotos. A segurança que ele passa resulta em fotos
              confiantes e ricas de detalhes. Surpreendente, pontual, cumpre o que promete. Desejo
              sucesso!"
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              Vanessa Cantieri — Coordenadora Administrativa, Rocha & Queiroz Advogados Associados ·{" "}
              <a
                href="https://www.linkedin.com/in/vanessa-cantieri-353b1753/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
              >
                Fonte: LinkedIn
              </a>
            </footer>
          </blockquote>
          <p className="mt-6">
            <Link to="/depoimentos" className="text-sm text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember">
              Ver todos os depoimentos →
            </Link>
          </p>
        </div>
      </section>

      {/* Serviços relacionados */}
      <section className="border-b border-border" aria-labelledby="relacionados">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="relacionados" className="max-w-3xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Serviços relacionados
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVICOS.map((s) =>
              "slug" in s ? (
                <Link
                  key={s.label}
                  to="/fotografo-corporativo/$slug"
                  params={{ slug: s.slug }}
                  className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface"
                >
                  {s.label}
                </Link>
              ) : (
                <Link
                  key={s.label}
                  to={s.to}
                  className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface"
                >
                  {s.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Precisa produzir fotografia e vídeo para o seu escritório?
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
