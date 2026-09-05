import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, videos } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta } from "@/lib/seo";
import { SmartImage } from "@/components/site/SmartImage";
import { ArrowUpRight } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

/**
 * /portfolio é o hub de prova: cada bloco de intenção aponta para (a) a página
 * comercial que atende aquela demanda e (b) as galerias/cases correspondentes.
 * Nenhum slug de galeria é alterado aqui — só a organização e a linkagem.
 */
const BLOCKS = [
  {
    id: "retrato-corporativo",
    label: "Retrato corporativo",
    blurb:
      "Retratos individuais com direção de pose, fundo controlado e leitura de autoridade — a base de qualquer comunicação profissional.",
    services: [
      { to: "/foto-profissional", label: "Contratar foto profissional" },
      { to: "/foto-profissional-para-linkedin", label: "Headshot para LinkedIn" },
    ],
    gals: ["retrato-corporativo", "fotografo-de-retratos-corporativos", "fotografo-de-retratos-profissionais"],
  },
  {
    id: "executivos",
    label: "Executivos e liderança",
    blurb:
      "Retratos de C-level, sócios e conselhos para relatórios, releases, sites institucionais e imprensa.",
    services: [{ to: "/fotografia-executiva", label: "Ver fotografia executiva" }],
    gals: ["fotografo-profissional-em-sao-paulo", "ensaio-fotografico-para-redes-sociais"],
  },
  {
    id: "medicos",
    label: "Médicos e clínicas",
    blurb:
      "Retratos de médicos e médicas, corpo clínico e ambientes de clínica — imagem de confiança para pacientes e convênios.",
    services: [
      { to: "/fotos-profissionais-medicos", label: "Fotos para médicos" },
      { to: "/fotografia-para-clinicas", label: "Fotografia para clínicas" },
    ],
    gals: [
      "retratos-de-medicos",
      "retratos-de-medicas",
      "fotos-profissionais-para-medicos",
      "fotos-para-clinicas-medicas",
      "ensaio-fotografico-para-dentistas",
    ],
  },
  {
    id: "advogados",
    label: "Advogados e escritórios",
    blurb:
      "Retratos de sócios e associados, além de ambientes do escritório, com a sobriedade que o setor jurídico exige.",
    services: [{ to: "/fotografia-para-advogados", label: "Fotografia para advogados" }],
    gals: ["fotografia-para-escritorios-de-advocacia"],
  },
  {
    id: "empresas",
    label: "Empresas e equipes",
    blurb:
      "Fotos de equipe, rotina de trabalho e banco de imagens próprio para site, campanhas e comunicação interna.",
    services: [
      { to: "/fotos-corporativas", label: "Fotografia corporativa" },
      { to: "/fotografo-empresarial", label: "Fotógrafo empresarial" },
    ],
    gals: [
      "fotografia-corporativa-em-sao-paulo",
      "fotografia-institucional-em-saopaulo",
      "fotografo-de-grupos-times-e-equipes",
      "banco-de-imagens-para-empresas",
      "banco-de-imagens-para-escolas",
    ],
  },
  {
    id: "eventos",
    label: "Eventos corporativos",
    blurb:
      "Retratos de pessoas e equipes durante convenções, palestras e confraternizações, sem interromper o evento.",
    services: [{ to: "/eventos-corporativos", label: "Eventos corporativos" }],
    gals: [
      "fotografo-de-eventos-corporativos",
      "eventos-corporativos",
      "fotografo-festa-de-confraternizacao",
      "fotografo-festa-de-confraternizacao-1-1",
      "fotografo-de-drinks-coqueteis",
    ],
  },
  {
    id: "feiras",
    label: "Feiras e stands",
    blurb:
      "Cobertura de stand, ativações e retratos de time comercial em feiras de negócios — material pronto para usar no mesmo dia.",
    services: [{ to: "/fotografo-de-feira-de-negocios", label: "Fotógrafo de feira de negócios" }],
    gals: ["fotografo-feiras-stands", "totem-fotografico-totem-mania", "foto-impressa-na-hora"],
  },
  {
    id: "industria",
    label: "Indústria e logística",
    blurb:
      "Operação, planta, frota e centros de distribuição fotografados com segurança e leitura técnica do processo.",
    services: [{ to: "/fotografo-empresarial", label: "Falar sobre projeto industrial" }],
    gals: ["fotografia-industrial", "fotografia-industrial-em-sp", "fotografia-de-logistica", "fotos-aereas"],
  },
  {
    id: "arquitetura",
    label: "Arquitetura e ambientes",
    blurb: "Escritórios, empreendimentos e interiores corporativos com controle de luz e perspectiva.",
    services: [{ to: "/servicos", label: "Ver todos os serviços" }],
    gals: ["fotografo-de-arquitetura-e-interiores", "empreendimentos-imobiliarios"],
  },
  {
    id: "gastronomia",
    label: "Gastronomia e produto",
    blurb: "Pratos, drinks e produto para menu, delivery e redes sociais de restaurantes e marcas.",
    services: [{ to: "/servicos", label: "Ver todos os serviços" }],
    gals: [
      "fotografo-de-culinaria",
      "fotos-de-hamburguer",
      "fotos-para-restaurantes",
      "fotos-de-paes",
      "fotografo-de-drinks-coqueteis",
    ],
  },
  {
    id: "video",
    label: "Vídeo e audiovisual",
    blurb:
      "Vídeo institucional, depoimentos e conteúdo para redes — roteiro, captação e edição com a mesma direção dos retratos.",
    services: [{ to: "/videos", label: "Ver produções em vídeo" }],
    gals: [],
  },
] as const;

const bySlug = new Map(categories.map((c) => [c.slug, c] as const));

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: buildMeta({
      title: "Portfólio — Cases de Fotografia Corporativa em SP",
      description:
        "Cases reais de retrato corporativo, médicos, advogados, empresas, eventos, feiras, indústria e vídeo em São Paulo. Veja a prova e fale direto comigo pelo WhatsApp.",
      path: "/portfolio",
    }),
    links: [{ rel: "canonical", href: "https://www.alefotografo.com.br/portfolio" }],
  }),
  component: PortfolioHub,
});

function PortfolioHub() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Portfólio" }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Portfólio</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Cases de fotografia corporativa em São Paulo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg text-pretty">
            {categories.length} galerias e {videos.length} produções em vídeo, organizadas pela demanda que
            resolvem. Cada bloco leva à página do serviço correspondente e aos cases daquele segmento.
          </p>
          <nav aria-label="Índice do portfólio" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {BLOCKS.map((b) => (
                <li key={b.id}>
                  <a
                    href={`#${b.id}`}
                    className="inline-flex rounded-sm border border-border-strong px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-ember hover:text-ember"
                  >
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {BLOCKS.map((b, bi) => {
        const gals = b.gals.map((s) => bySlug.get(s)).filter((c): c is NonNullable<typeof c> => Boolean(c));
        return (
          <section
            key={b.id}
            id={b.id}
            className={`scroll-mt-24 border-b border-border ${bi % 2 === 1 ? "bg-surface" : ""}`}
            aria-labelledby={`${b.id}-titulo`}
          >
            <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
              <h2 id={`${b.id}-titulo`} className="font-display text-2xl font-semibold md:text-4xl">
                {b.label}
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground text-pretty">{b.blurb}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {b.services.map((s) => (
                  <Link
                    key={s.to + s.label}
                    to={s.to}
                    className="inline-flex items-center gap-2 rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
                  >
                    {s.label} <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>

              {gals.length > 0 && (
                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {gals.map((c, i) => (
                    <li key={c.slug}>
                      <Link
                        to="/fotografo-corporativo/$slug"
                        params={{ slug: c.slug }}
                        className="group relative block overflow-hidden rounded-sm bg-background ring-1 ring-border transition-all hover:ring-ember"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          {c.cover ? (
                            <SmartImage
                              src={c.cover}
                              alt={`Case de ${c.title}`}
                              baseWidth={768}
                              priority={bi === 0 && i < 3}
                              width={1200}
                              height={900}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                              className="h-full w-full object-cover group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background text-sm text-muted-foreground">
                              Galeria
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <h3 className="font-display text-base font-semibold leading-tight group-hover:text-ember">
                            {c.title}
                          </h3>
                          {c.image_count > 0 && (
                            <p className="mt-1 text-xs text-muted-foreground">{c.image_count} fotos</p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Índice completo de galerias</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Todas as {categories.length} galerias, em ordem alfabética.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[...categories]
              .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"))
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/fotografo-corporativo/$slug"
                    params={{ slug: c.slug }}
                    className="text-muted-foreground hover:text-ember"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Tem um projeto em mente?</h2>
          <p className="mt-3 text-muted-foreground">
            Me conte o objetivo da imagem e eu indico o formato certo. Falo direto com você — sem
            intermediário. {site.name}, São Paulo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink("Olá Alexandre, vi seu portfólio e quero um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <Link
              to="/servicos"
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:bg-surface"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
