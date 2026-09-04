import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/data/catalog";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { FaqList } from "@/components/site/Faq";
import type { Faq } from "@/lib/faqs";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { StatsBand } from "@/components/site/StatsBand";
import { serviceStats, statsLead } from "@/data/stats";

const URL_PATH = "/foto-profissional-para-linkedin";
const CANONICAL = `${SITE_ORIGIN}${URL_PATH}`;

const TITLE = "Headshot para LinkedIn em SP | Alexandre Machado";
const DESCRIPTION =
  "Eu dirijo postura, olhar e expressão para o seu headshot de LinkedIn em São Paulo. Sessão de 30 minutos, retoque natural e recorte pronto para o perfil. Agende pelo WhatsApp.";

const pageFaqs: Faq[] = [
  {
    q: "Como deve ser a foto profissional do LinkedIn?",
    a: "Enquadramento do peito para cima, rosto ocupando cerca de 60% do quadro, fundo limpo e sem distrações, luz suave no rosto, olhar direto para a câmera e expressão acessível. Roupa alinhada ao seu setor e recorte quadrado, já que o LinkedIn exibe a foto em círculo.",
  },
  {
    q: "Qual o tamanho ideal da foto de perfil no LinkedIn?",
    a: "O LinkedIn recomenda imagem quadrada a partir de 400x400 px (ideal 1.000x1.000 px), em JPG ou PNG com até 8 MB. Entregamos a foto já cortada nesse formato, além da versão ampla para site e apresentações.",
  },
  {
    q: "Quanto tempo dura a sessão?",
    a: "Entre 20 e 40 minutos por pessoa, com direção de pose e revisão das imagens na hora. Para times, organizamos uma agenda contínua no escritório, com poucos minutos por colaborador.",
  },
  {
    q: "Posso fazer a foto no escritório da empresa?",
    a: "Sim. Levamos iluminação e fundo portátil até seu escritório em toda a Grande São Paulo, o que padroniza os retratos de todo o time no mesmo dia.",
  },
  {
    q: "Quantas fotos eu recebo?",
    a: "Você escolhe as favoritas do ensaio e recebe as imagens tratadas em alta resolução, com versão quadrada para o LinkedIn e versão horizontal para site, currículo e apresentações.",
  },
];

export const Route = createFileRoute("/foto-profissional-para-linkedin")({
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
              name: "Foto profissional para LinkedIn em São Paulo",
              serviceType: "Retrato profissional / headshot",
              description: DESCRIPTION,
              url: CANONICAL,
              areaServed: { "@type": "City", name: "São Paulo" },
              provider: {
                "@type": "LocalBusiness",
                name: site.name,
                url: SITE_ORIGIN,
                telephone: `+${site.whatsapp}`,
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
                { "@type": "ListItem", position: 2, name: "Foto profissional para LinkedIn", item: CANONICAL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: LinkedinPage,
});

const passos = [
  { h: "1. Briefing rápido", p: "Definimos o objetivo do perfil, o estilo de fundo e o figurino mais adequado ao seu setor." },
  { h: "2. Sessão de 20 a 40 min", p: "Direção de pose e expressão em estúdio ou no seu escritório, com revisão das fotos na hora." },
  { h: "3. Seleção", p: "Você escolhe as favoritas em uma galeria online, sem pressa." },
  { h: "4. Tratamento e entrega", p: "Retoque natural, ajuste de cor e recortes prontos para LinkedIn, site e currículo em até 3 dias úteis." },
];

const checklist = [
  "Roupa lisa, sem estampas fortes ou logos grandes",
  "Cabelo e barba como você usa no dia a dia de trabalho",
  "Evite óculos com lentes muito reflexivas (ou traga a armação sem lente)",
  "Leve duas opções de figurino: uma formal e uma smart casual",
  "Descanse bem na véspera — a luz revela cansaço",
];

function LinkedinPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Serviços", to: "/servicos" }, { label: "Foto para LinkedIn" }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Retrato profissional
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Foto profissional para LinkedIn em São Paulo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Um retrato bem feito muda a primeira impressão do seu perfil. Sessão rápida, direção de
            pose, tratamento natural e arquivos no formato exato do LinkedIn — em estúdio ou no seu
            escritório, com {site.fullName}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Agendar minha foto
            </Link>
            <Link
              to="/fotos-corporativas"
              className="inline-flex rounded-sm border border-border px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Fotos para o time todo
            </Link>
            <Link
              to="/fotografia-para-clinicas"
              className="inline-flex rounded-sm border border-border px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Sou da área da saúde
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">Como funciona</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((s) => (
            <article key={s.h} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{s.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">
            Como se preparar para o ensaio
          </h2>
          <ul className="mt-8 space-y-3 text-muted-foreground">
            {checklist.map((c) => (
              <li key={c} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="mb-8 font-display text-2xl font-semibold md:text-4xl">
          Perguntas frequentes
        </h2>
        <FaqList items={pageFaqs} />
        <div className="mt-12 text-center">
          <Link
            to="/contato"
            className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Quero minha foto de LinkedIn
          </Link>
        </div>
      </section>
    </>
  );
}
