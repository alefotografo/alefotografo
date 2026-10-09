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

const PATH = "/cases/abradilan";
const TITLE = "Case ABRADILAN | Cobertura de Eventos Corporativos";
const DESCRIPTION =
  "Coberturas em vídeo de fóruns, convenções e eventos da ABRADILAN — do 7º ao 11º Fórum de Desenvolvimento Empresarial, convenção internacional e produções comemorativas.";
const WA = "Olá Alexandre, vi o case da ABRADILAN e quero um orçamento de cobertura de evento corporativo.";

/* Produções ABRADILAN publicadas no catálogo de vídeos (slugs reais). */
const VIDEO_MAIN = "11-forum-abradilan-2026";
const VIDEOS_MORE = [
  "video-corporativo-do-11o-forum-abradilan-2026-cobertura-de-evento-empresarial",
  "9-forum-abradilan",
  "7-forum-abradilan",
  "15-convencao-abradilan-barcelo-bavaro-palace-punta-cana-01-a-06-nov-2022",
  "confraternizacao-abradilan",
  "abradilan-25-anos",
];

const APLICACOES = [
  "Registro institucional do evento",
  "Comunicação com associados",
  "Abertura e encerramento",
  "Materiais de patrocínio",
  "Acervo histórico da entidade",
];

const FAQS: Faq[] = [
  {
    q: "Que eventos da ABRADILAN foram cobertos?",
    a: "As produções publicadas incluem o 7º, o 9º e o 11º Fórum ABRADILAN de Desenvolvimento Empresarial, a 15ª Convenção ABRADILAN no Barceló Bavaro Palace (Punta Cana), uma confraternização e o vídeo comemorativo de 25 anos da entidade. Estão todas listadas neste case e no catálogo de vídeos.",
  },
  {
    q: "Vocês cobrem eventos fora de São Paulo?",
    a: "Sim. A 15ª Convenção ABRADILAN foi produzida em Punta Cana, na República Dominicana. Atendemos eventos corporativos em outras cidades e países sob orçamento, com planejamento de logística de equipamento em conjunto com a organização.",
  },
  {
    q: "O que uma cobertura de evento corporativo inclui?",
    a: "Registro em vídeo do evento: abertura, palestras, público, interações e bastidores, com edição final para uso institucional. Quando o escopo prevê, a mesma operação produz fotografia. Veja a página de vídeo de eventos corporativos para o escopo completo.",
  },
  {
    q: "Produzem vídeos comemorativos e institucionais para entidades?",
    a: "Sim. O vídeo dos 25 anos da ABRADILAN é um exemplo de produção comemorativa para uma entidade. Planejamos roteiro, acervo e captação para contar a história da organização em formato audiovisual.",
  },
];

export const Route = createFileRoute("/cases/abradilan")({
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
          about: { "@type": "Organization", name: "ABRADILAN" },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: CaseAbradilan,
});

function CaseAbradilan() {
  const main = videoBySlug(VIDEO_MAIN);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Cases", to: "/cases" },
          { label: "ABRADILAN" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Case · Eventos corporativos</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            ABRADILAN — cobertura de fóruns e convenções
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            Produzimos as coberturas em vídeo dos fóruns de desenvolvimento empresarial da
            ABRADILAN, da 15ª Convenção Internacional em Punta Cana e das produções comemorativas
            da entidade.
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
              <dd className="mt-1 font-semibold">ABRADILAN</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Segmento</dt>
              <dd className="mt-1 font-semibold">Eventos corporativos e entidades</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Serviços</dt>
              <dd className="mt-1 font-semibold">Cobertura de eventos em vídeo e produção comemorativa</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Eventos documentados</dt>
              <dd className="mt-1 font-semibold">Fóruns (7º, 9º e 11º), 15ª Convenção em Punta Cana, confraternização e 25 anos</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Material publicado</dt>
              <dd className="mt-1 font-semibold">7 produções em vídeo</dd>
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
            O que a entidade precisava registrar
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground text-pretty">
            <p>
              Entidades que promovem eventos anuais precisam de um registro audiovisual que
              documente cada edição e comunique o encontro para associados e patrocinadores. Para
              a ABRADILAN, produzimos as coberturas em vídeo dos fóruns de desenvolvimento
              empresarial — da 7ª à 11ª edição — e o registro da 15ª Convenção ABRADILAN, realizada
              no Barceló Bavaro Palace, em Punta Cana.
            </p>
            <p>
              O conjunto inclui ainda a cobertura de uma confraternização e o vídeo comemorativo
              dos 25 anos da entidade. O material é usado pela organização em aberturas de evento,
              comunicação com associados e acervo institucional.
            </p>
          </div>
        </div>
      </section>

      {/* Produções em vídeo */}
      <section id="producoes" className="border-b border-border scroll-mt-20" aria-labelledby="videos-titulo">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">Vídeo</p>
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
            <Link to="/video-de-eventos-corporativos" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Vídeo de eventos corporativos
            </Link>
            <Link to="/eventos-corporativos" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotografia de eventos corporativos
            </Link>
            <Link to="/fotografo-de-feira-de-negocios" className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
              Fotógrafo de feiras de negócios
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
            Precisa cobrir o seu evento corporativo?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fale com {site.name} sobre a sua programação.
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
