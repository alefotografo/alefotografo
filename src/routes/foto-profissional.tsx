import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { FaqList } from "@/components/site/Faq";
import { aggregateRatingSchema, reviewSchema } from "@/data/reviews";
import { waLink } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StatsBand } from "@/components/site/StatsBand";
import { serviceStats, statsLead } from "@/data/stats";
import { FormatsTable, type SessionFormat } from "@/components/site/FormatsTable";
import type { Faq } from "@/lib/faqs";

const URL_PATH = "/foto-profissional";
const CANONICAL = `${SITE_ORIGIN}${URL_PATH}`;

const TITLE = "Foto Profissional em SP | Alexandre Machado — Direção de Pose";
const DESCRIPTION =
  "Ensaio de foto profissional em São Paulo com direção de pose do início ao fim. Ideal para LinkedIn, currículo e marca pessoal. Fotografado pessoalmente por Alexandre Machado. Solicite orçamento.";

const GALLERY_SLUGS = [
  "retrato-corporativo",
  "fotografo-de-retratos-profissionais",
  "fotografo-de-retratos-corporativos",
  "fotografia-para-escritorios-de-advocacia",
  "retratos-de-medicos",
  "retratos-de-medicas",
];

const paraQuem = [
  {
    h: "Executivos e gestores",
    p: "Quem ocupa cargo de liderança e precisa de uma imagem coerente com a responsabilidade do cargo em LinkedIn, apresentações e mídia.",
  },
  {
    h: "Advogados e consultores",
    p: "Profissionais que vendem confiança técnica e precisam transmitir solidez antes da primeira reunião.",
  },
  {
    h: "Médicos e profissionais da saúde",
    p: "Retratos que reduzem a insegurança do paciente e padronizam o site da clínica, convênios e perfis profissionais.",
  },
  {
    h: "Profissionais em transição de carreira",
    p: "Quem está em processo seletivo e precisa de um retrato atual, profissional e adequado ao cargo pretendido.",
  },
  {
    h: "Empreendedores e marca pessoal",
    p: "Quem é o rosto do próprio negócio e precisa de imagens para site, propostas, redes sociais e materiais comerciais.",
  },
  {
    h: "Palestrantes e autores",
    p: "Retratos de autoridade para divulgação de eventos, releases, capas e material de imprensa.",
  },
];

const ondeUsar = [
  "LinkedIn, com enquadramento correto para o formato circular da plataforma",
  "Currículo, propostas comerciais e apresentações institucionais",
  "Site da empresa, página de equipe e assinatura de e-mail",
  "Releases, entrevistas e material de imprensa",
  "Google Meu Negócio, plataformas de agendamento e diretórios profissionais",
  "Instagram profissional, capas e anúncios",
];

const comoFunciona = [
  {
    h: "1. Briefing pelo WhatsApp",
    p: "Você conta o objetivo do retrato, o cargo, os canais de uso e a data desejada. O orçamento sai fechado, sem reunião obrigatória.",
  },
  {
    h: "2. Preparação e escolha do local",
    p: "Definimos roupa, fundo e local: estúdio, sua empresa ou locação externa em São Paulo. Você recebe orientações de figurino antes da sessão.",
  },
  {
    h: "3. Sessão com direção de pose",
    p: "Em cerca de uma hora fotografamos várias combinações de pose, expressão e enquadramento, com direção durante todo o processo — inclusive para quem não se sente à vontade diante da câmera.",
  },
  {
    h: "4. Seleção e tratamento",
    p: "Você escolhe as imagens preferidas em galeria online. O tratamento inclui ajuste de cor, luz e retoque profissional, sem descaracterizar o rosto.",
  },
  {
    h: "5. Entrega em 1 dia útil",
    p: "Arquivos em alta resolução e versões otimizadas para web, em recortes quadrado, vertical e horizontal, com uso comercial liberado sem prazo.",
  },
];

const pageFaqs: Faq[] = [
  {
    q: "Quanto custa uma foto profissional em São Paulo?",
    a: "O valor depende do local da sessão (estúdio, sua empresa ou locação externa) e da quantidade de imagens tratadas na entrega. Sessões individuais para LinkedIn e currículo são o formato mais procurado e resolvem em cerca de uma hora. Envie o objetivo do seu retrato pelo WhatsApp e receba o valor fechado.",
  },
  {
    q: "Quanto tempo dura a sessão de retrato?",
    a: "Em média uma hora para retratos individuais. Nesse tempo cobrimos diferentes poses, expressões, enquadramentos e ao menos duas variações de figurino, o que gera opções para LinkedIn, site, imprensa e redes sociais.",
  },
  {
    q: "Que roupa devo usar na foto profissional?",
    a: "Tons sólidos, sem estampas fortes ou logotipos grandes, e peças bem ajustadas ao corpo. Traga duas ou três opções, incluindo uma mais formal. Antes da sessão você recebe orientações específicas para o seu setor.",
  },
  {
    q: "Não gosto de ser fotografado. Como funciona?",
    a: "Essa é a situação mais comum. A sessão é conduzida com direção contínua de pose, respiração e expressão — você não precisa saber posar. O ritmo é tranquilo e revisamos imagens durante a sessão para ajustar o que for necessário.",
  },
  {
    q: "Vocês vão até a empresa ou é só em estúdio?",
    a: "As duas opções existem. Levamos iluminação e fundo portátil até o escritório da empresa em toda a Grande São Paulo, o que é ideal para retratar várias pessoas no mesmo dia, ou fotografamos em estúdio e em locações externas.",
  },
  {
    q: "Em quanto tempo recebo as fotos?",
    a: "Em 1 dia útil após a sua seleção, por galeria online com download em alta resolução e versões prontas para web e redes sociais.",
  },
];

const ANSWER_BLOCK =
  "Foto profissional é o retrato feito com luz, direção de pose e tratamento adequados ao uso profissional: LinkedIn, currículo, site, propostas e imprensa. É indicada para quem precisa de uma imagem confiável de si mesmo, em qualquer área. Fotografo em São Paulo, pessoalmente, e entrego as imagens tratadas em 1 dia útil.";

const FORMATS: SessionFormat[] = [
  { formato: "Retrato individual", onde: "Meu estúdio, o seu escritório ou locação externa", duracao: "Cerca de 1 hora de captação", entrega: "Imagens tratadas em 1 dia útil" },
  { formato: "Retrato para LinkedIn", onde: "Meu estúdio, o seu escritório ou locação externa", duracao: "Cerca de 1 hora de captação", entrega: "Recorte quadrado, vertical e horizontal em 1 dia útil" },
  { formato: "Retratos de equipe ou diretoria", onde: "No escritório da empresa, em blocos de horário", duracao: "Cerca de 15 minutos por pessoa", entrega: "Mesmo padrão visual para todos, em 1 dia útil" },
];

export const Route = createFileRoute("/foto-profissional")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: URL_PATH }),
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Foto profissional em São Paulo",
              serviceType: "Retrato profissional e corporativo",
              description: DESCRIPTION,
              url: CANONICAL,
              areaServed: { "@type": "City", name: "São Paulo" },
              aggregateRating: aggregateRatingSchema,
              review: reviewSchema,
              provider: {
                "@type": "LocalBusiness",
                name: site.name,
                url: SITE_ORIGIN,
                telephone: `+${site.whatsapp}`,
                aggregateRating: aggregateRatingSchema,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Alameda Santos, 1165",
                  addressLocality: "São Paulo",
                  addressRegion: "SP",
                  postalCode: "01419-002",
                  addressCountry: "BR",
                },
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: pageFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Início", item: SITE_ORIGIN },
                { "@type": "ListItem", position: 2, name: "Foto profissional", item: CANONICAL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FotoProfissionalPage,
});

const WA_MAIN =
  "Olá Alexandre, quero fazer uma foto profissional em São Paulo. Pode me passar valores e disponibilidade?";

function FotoProfissionalPage() {
  const gallery = GALLERY_SLUGS.map((slug) => categories.find((c) => c.slug === slug)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c?.cover),
  );
  const heroImg = gallery[0]?.cover;

  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Foto profissional" }]} />

      <section className="relative overflow-hidden border-b border-border">
        {heroImg && (
          <div className="absolute inset-0 -z-10">
            <img
              src={imgUrl(heroImg, 1440)}
              srcSet={imgSrcSet(heroImg)}
              alt="Foto profissional em São Paulo — retrato corporativo"
              width={1600}
              height={1067}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          </div>
        )}
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Retrato profissional
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Foto Profissional em São Paulo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Retratos com direção de pose, luz controlada e enquadramentos prontos para LinkedIn,
            currículo, site e imprensa. Produção por {site.fullName}, com mais de 30 anos
            fotografando executivos, médicos, advogados e empresas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(WA_MAIN)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <Link
              to="/fotografo-corporativo/$slug"
              params={{ slug: "retrato-corporativo" }}
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Ver galeria de retratos
            </Link>
            <Link
              to="/foto-profissional-para-linkedin"
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Foto para LinkedIn
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            30+ anos de experiência · Atendimento em São Paulo · Executivos, médicos, advogados e
            empresas
          </p>
        </div>
      </section>

      <StatsBand items={serviceStats()} />

      <section className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-16">
        <p
          data-answer-block
          className="max-w-3xl border-l-2 border-ember pl-5 text-lg font-medium text-foreground md:text-xl"
        >
          {ANSWER_BLOCK}
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">{statsLead()}</p>
      </section>

      <FormatsTable items={FORMATS} />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">Para quem é</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paraQuem.map((b) => (
            <article key={b.h} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{b.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">Onde usar as imagens</h2>
          <ul className="mt-8 space-y-4">
            {ondeUsar.map((u, i) => (
              <li key={u} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember/15 text-xs font-semibold text-ember">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">Como funciona</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {comoFunciona.map((s) => (
            <article key={s.h} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{s.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={waLink(WA_MAIN)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Agendar minha foto profissional
          </a>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">Galeria de retratos</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Exemplos reais de retratos profissionais produzidos em estúdio, em empresas e em
            locações em São Paulo.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((c) => (
              <Link
                key={c.slug}
                to="/fotografo-corporativo/$slug"
                params={{ slug: c.slug }}
                className="group block overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-ember"
              >
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <img
                    src={imgUrl(c.cover as string, 768)}
                        srcSet={imgSrcSet(c.cover as string, [480, 768, 1024])}
                    alt={`Foto profissional — ${c.title}`}
                    width={900}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold group-hover:text-ember">
                    {c.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="mb-8 font-display text-2xl font-semibold md:text-4xl">
            Perguntas frequentes sobre foto profissional
          </h2>
          <FaqList items={pageFaqs} />
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={waLink(WA_MAIN)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex rounded-sm border border-border-strong px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Outras formas de contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
