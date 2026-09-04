import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { SmartImage } from "@/components/site/SmartImage";
import { waLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: buildMeta({
      title: "Retrato Profissional em SP — Todos os Formatos",
      description:
        "Todos os formatos de retrato que eu fotografo em São Paulo: individual, LinkedIn, executivo, equipes, médicos, advogados e clínicas — com direção de pose.",
      path: "/servicos",
    }),
    links: [{ rel: "canonical", href: "https://www.alefotografo.com.br/servicos" }],
  }),
  component: ServicosPage,
});

type CardLink =
  | { kind: "route"; to: "/foto-profissional" | "/fotos-corporativas" | "/fotografia-executiva" | "/foto-profissional-para-linkedin" | "/eventos-corporativos" | "/videos" | "/fotos-profissionais-medicos" | "/fotografia-para-clinicas" | "/fotografia-para-advogados" | "/fotografo-empresarial" | "/fotografo-de-feira-de-negocios" }
  | { kind: "gallery"; slug: string };

type ServiceCard = {
  title: string;
  line: string;
  cover: string;
  link: CardLink;
};

/** Capa da galeria correspondente — evita imagens hardcoded. */
function cover(slug: string, fallback = ""): string {
  return categories.find((c) => c.slug === slug)?.cover ?? fallback;
}

const PRINCIPAIS: ServiceCard[] = [
  {
    title: "Foto profissional",
    line: "Retrato individual com presença e credibilidade.",
    cover: cover("fotografo-de-retratos-profissionais"),
    link: { kind: "route", to: "/foto-profissional" },
  },
  {
    title: "Fotografia corporativa",
    line: "Equipe, diretoria, ambientes e processos.",
    cover: cover("fotografia-corporativa-em-sao-paulo"),
    link: { kind: "route", to: "/fotos-corporativas" },
  },
  {
    title: "Fotografia executiva",
    line: "Retratos de liderança e board.",
    cover: cover("fotografo-de-retratos-corporativos"),
    link: { kind: "route", to: "/fotografia-executiva" },
  },
  {
    title: "Foto para LinkedIn",
    line: "Perfil que transmite autoridade.",
    cover: cover("fotografo-profissional-em-sao-paulo"),
    link: { kind: "route", to: "/foto-profissional-para-linkedin" },
  },
  {
    title: "Eventos corporativos",
    line: "Congressos, convenções e lançamentos.",
    cover: cover("fotografo-de-eventos-corporativos"),
    link: { kind: "route", to: "/eventos-corporativos" },
  },
  {
    title: "Vídeo institucional",
    line: "Empresa, estrutura e time em vídeo.",
    cover: cover("banco-de-imagens-para-empresas"),
    link: { kind: "route", to: "/videos" },
  },
];

const PUBLICOS: ServiceCard[] = [
  {
    title: "Médicos",
    line: "Retratos para saúde e consultórios.",
    cover: cover("fotos-profissionais-para-medicos"),
    link: { kind: "route", to: "/fotos-profissionais-medicos" },
  },
  {
    title: "Clínicas",
    line: "Ambientes, equipe e atendimento.",
    cover: cover("fotos-para-clinicas-medicas"),
    link: { kind: "route", to: "/fotografia-para-clinicas" },
  },
  {
    title: "Advogados",
    line: "Escritórios, sócios e equipe.",
    cover: cover("fotografia-para-escritorios-de-advocacia"),
    link: { kind: "route", to: "/fotografia-para-advogados" },
  },
  {
    title: "Empresas e indústrias",
    line: "Banco de imagens institucional.",
    cover: cover("fotografia-industrial"),
    link: { kind: "route", to: "/fotografo-empresarial" },
  },
  {
    title: "Feiras de negócios",
    line: "Stands, ativações e relacionamento.",
    cover: cover("fotografo-feiras-stands"),
    link: { kind: "route", to: "/fotografo-de-feira-de-negocios" },
  },
  {
    title: "Times e equipes",
    line: "Fotos de grupo em estúdio ou no escritório.",
    cover: cover("fotografo-de-grupos-times-e-equipes"),
    link: { kind: "gallery", slug: "fotografo-de-grupos-times-e-equipes" },
  },
];

function CardShell({
  card,
  priority,
  ratio,
}: {
  card: ServiceCard;
  priority: boolean;
  ratio: string;
}) {
  const inner = (
    <>
      <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
        {card.cover ? (
          <SmartImage
            src={card.cover}
            alt={card.title}
            baseWidth={768}
            priority={priority}
            placeholderRatio={ratio}
            width={1200}
            height={Math.round(1200 / (ratio === "4 / 5" ? 4 / 5 : ratio === "4 / 3" ? 4 / 3 : 3 / 2))}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="h-full w-full object-cover group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-surface text-muted-foreground">
            {card.title}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-lg font-semibold leading-tight">{card.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{card.line}</p>
      </div>
    </>
  );

  const cls =
    "group relative block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember";

  return card.link.kind === "route" ? (
    <Link to={card.link.to} className={cls}>
      {inner}
    </Link>
  ) : (
    <Link
      to="/fotografo-corporativo/$slug"
      params={{ slug: card.link.slug }}
      className={cls}
    >
      {inner}
    </Link>
  );
}

function ServicosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Serviços" }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Serviços</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Todos os serviços de foto e vídeo
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Escolha pelo objetivo ou pelo seu segmento. Orçamento no mesmo dia em São Paulo.
          </p>
          <a
            href={waLink(
              "Olá Alexandre, vi a página de serviços e gostaria de um orçamento. Pode me ajudar?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="principais">
        <h2 id="principais" className="font-display text-2xl font-semibold md:text-3xl">
          Serviços principais
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPAIS.map((c, i) => (
            <CardShell key={c.title} card={c} priority={i < 3} ratio="4 / 3" />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="publicos">
          <h2 id="publicos" className="font-display text-2xl font-semibold md:text-3xl">
            Por segmento
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PUBLICOS.map((c) => (
              <CardShell key={c.title} card={c} priority={false} ratio="4 / 3" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16" aria-labelledby="especialidades">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="especialidades" className="font-display text-2xl font-semibold md:text-3xl">
            Especialidades e galerias
          </h2>
          <Link
            to="/fotografo-corporativo"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ember"
          >
            Ver galerias por segmento <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/fotografo-corporativo/$slug"
              params={{ slug: c.slug }}
              className="group relative block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                {c.cover ? (
                  <SmartImage
                    src={c.cover}
                    alt={c.title}
                    baseWidth={480}
                    placeholderRatio="4 / 3"
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="h-full w-full object-cover group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                    Sem imagem
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3">
                <h3 className="font-display text-sm font-semibold leading-tight">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Não encontrou o que precisa?
          </h2>
          <p className="mt-3 text-muted-foreground">
            {site.name} atende demandas customizadas de foto e vídeo em todo São Paulo.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </>
  );
}
