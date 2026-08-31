import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { bairros } from "@/data/bairros";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { FaqList } from "@/components/site/Faq";
import { aggregateRatingSchema, reviewSchema } from "@/data/reviews";
import type { Faq } from "@/lib/faqs";


const URL_PATH = "/fotografia-para-clinicas";
const CANONICAL = `${SITE_ORIGIN}${URL_PATH}`;

const CDN = "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com";
const HERO_IMG = `${CDN}/GaleriaImagem/172233/fotos-para-clinicas-medicas_clinica-gran-life-63.JPG`;

const TITLE = "Fotos para Clínicas em SP | Equipe e Ambientes — Alexandre Machado";
const DESCRIPTION =
  "Retratos da equipe da clínica e imagens de recepção, salas e atendimento em São Paulo — tudo em uma agenda, fotografado pessoalmente por Alexandre Machado. Solicite orçamento.";

const pageFaqs: Faq[] = [
  {
    q: "Por que investir em fotos profissionais para a clínica?",
    a: "A escolha de uma clínica passa por confiança. Fotos reais do ambiente, da recepção, dos equipamentos e da equipe reduzem a insegurança do paciente antes do primeiro contato e melhoram a performance do site, do Google Meu Negócio e dos anúncios. Imagens de banco de imagens genéricas têm efeito contrário: transmitem distanciamento.",
  },
  {
    q: "Como funciona a sessão dentro da clínica?",
    a: "Fotografamos no seu endereço, com iluminação portátil e fundo neutro quando necessário. O roteiro é definido antes: ambientes vazios, recepção, salas de procedimento, equipamentos, equipe em atendimento simulado e retratos individuais dos profissionais. A produção costuma levar de 3 a 6 horas, com agendamento em horários de menor movimento.",
  },
  {
    q: "É possível fotografar pacientes e procedimentos?",
    a: "Sim, desde que haja autorização de uso de imagem assinada e respeito às normas do conselho de classe. Quando o procedimento não pode ser exposto, usamos enquadramentos parciais, modelos ou simulações com a própria equipe — mantendo a leitura da cena sem identificar pacientes.",
  },
  {
    q: "Quanto custa fotografia para clínica em São Paulo?",
    a: "O orçamento depende do tempo de captação, do número de profissionais retratados e da quantidade de ambientes. Clínicas pequenas normalmente resolvem em meia diária; centros médicos com várias unidades são orçados por projeto. Envie o briefing pelo WhatsApp e receba o valor em até 24 horas.",
  },
  {
    q: "As fotos servem para site, Google e redes sociais?",
    a: "Sim. Entregamos os arquivos em versões horizontais, verticais e quadradas, otimizadas para site, Google Meu Negócio, Instagram, LinkedIn e materiais impressos, com cessão de uso comercial sem prazo.",
  },
];

const clinicCategorySlugs = [
  "fotos-para-clinicas-medicas",
  "fotos-profissionais-para-medicos",
  "retratos-de-medicos",
  "retratos-de-medicas",
  "ensaio-fotografico-para-dentistas",
];

export const Route = createFileRoute("/fotografia-para-clinicas")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: URL_PATH }),
    links: [
      { rel: "canonical", href: CANONICAL },
      { rel: "preload", as: "image", href: imgUrl(HERO_IMG, 1440), fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Fotografia para clínicas em São Paulo",
              serviceType: "Fotografia para clínicas e consultórios",
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
                { "@type": "ListItem", position: 2, name: "Fotografia para clínicas", item: CANONICAL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FotografiaParaClinicasPage,
});

const blocos = [
  {
    h: "Ambientes e recepção",
    p: "Recepção, corredores, salas de espera e consultórios fotografados com luz equilibrada e linhas corrigidas — as imagens que o paciente procura antes de agendar.",
  },
  {
    h: "Retratos dos profissionais",
    p: "Retratos de médicos, médicas, dentistas e terapeutas com jaleco ou traje social, padronizados para o site da clínica, LinkedIn, convênios e imprensa.",
  },
  {
    h: "Equipe e atendimento",
    p: "Fotos da equipe de enfermagem, recepção e apoio em situações reais de atendimento, mostrando acolhimento e organização da operação.",
  },
  {
    h: "Equipamentos e procedimentos",
    p: "Registro técnico de aparelhos, tecnologia e etapas de procedimento, com enquadramentos que respeitam a privacidade do paciente.",
  },
  {
    h: "Banco de imagens da clínica",
    p: "Um acervo próprio organizado por tema, suficiente para alimentar site, blog, redes sociais e campanhas por meses.",
  },
  {
    h: "Vídeo e depoimentos",
    p: "Na mesma diária é possível gravar apresentação da clínica, tour pelo espaço e depoimentos de pacientes para redes sociais e anúncios.",
  },
];

const checklist = [
  "Definir os ambientes que entram na produção e liberar as salas por blocos de horário.",
  "Alinhar dress code: jaleco limpo, crachá, tons sólidos e sem estampas fortes.",
  "Organizar bancadas e retirar materiais com marca de terceiros ou dados de pacientes.",
  "Colher autorização de uso de imagem da equipe e de eventuais pacientes.",
  "Listar os usos previstos (site, Google, redes, impresso) para definir formatos de entrega.",
];

const segmentos = [
  {
    h: "Clínicas médicas e centros diagnósticos",
    escopo: "Recepção, salas de consulta, equipamentos de diagnóstico e retratos da equipe médica.",
    p: "Produção em blocos de horário para não interromper o atendimento, com retratos padronizados de todos os médicos no mesmo fundo e enquadramento. Para consultórios individuais, há o formato de meia diária, com retratos, ambiente e detalhes em uma única sessão.",
    slug: "fotos-para-clinicas-medicas",
  },
  {
    h: "Odontologia",
    escopo: "Consultórios, cadeira odontológica, esterilização e retratos com jaleco.",
    p: "Ênfase em limpeza visual, tecnologia e acolhimento — os três pontos que o paciente avalia antes de marcar a primeira consulta.",
    slug: "ensaio-fotografico-para-dentistas",
  },
  {
    h: "Estética e dermatologia",
    escopo: "Ambientes, aparelhos, detalhes de procedimento e conteúdo para redes sociais.",
    p: "Além das fotos institucionais, geramos um acervo vertical pensado para Instagram, anúncios e páginas de procedimento do site.",
    slug: "retratos-de-medicas",
  },
  {
    h: "Psicologia, nutrição e terapias",
    escopo: "Consultório, materiais de trabalho e retratos em tom mais humano.",
    p: "Direção de pose voltada a proximidade e escuta, com fotos que funcionam em site, LinkedIn e plataformas de agendamento.",
    slug: "fotos-profissionais-para-medicos",
  },
  {
    h: "Hospitais e operadoras",
    escopo: "Múltiplos setores, equipes por área e cobertura de rotina assistencial.",
    p: "Projetos orçados por unidade, com cronograma por setor, autorizações de imagem e entrega organizada por pasta temática.",
    slug: "retratos-de-medicos",
  },
];



function FotografiaParaClinicasPage() {
  const cats = clinicCategorySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img
            src={imgUrl(HERO_IMG, 1440)}
            srcSet={imgSrcSet(HERO_IMG)}
            alt="Fotografia profissional em clínica médica em São Paulo"
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
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Saúde e bem-estar
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fotografia para clínicas em São Paulo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Ambientes, equipe, equipamentos e retratos dos profissionais — imagens reais que geram
            confiança antes do primeiro contato do paciente. Produção por {site.fullName}, com 30
            anos fotografando empresas e clínicas na Grande São Paulo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/fotografo-corporativo/$slug"
              params={{ slug: "fotos-para-clinicas-medicas" }}
              className="inline-flex rounded-sm border border-border px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Ver galeria de clínicas
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">
          O que entra na produção de uma clínica
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocos.map((b) => (
            <article key={b.h} className="rounded-sm border border-border bg-surface p-6">
              <h3 className="font-display text-lg font-semibold">{b.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">
            Checklist antes da sessão
          </h2>
          <ul className="mt-8 space-y-4">
            {checklist.map((c, i) => (
              <li key={c} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember/15 text-xs font-semibold text-ember">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">
          Exemplos por segmento da saúde
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Cada especialidade tem uma prioridade visual diferente. Veja o escopo típico de produção
          por segmento e a galeria correspondente.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {segmentos.map((s) => {
            const cover = categories.find((c) => c.slug === s.slug)?.cover;
            return (
              <article key={s.h} className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface">
                {cover ? (
                  <div className="aspect-[3/2] w-full overflow-hidden bg-background">
                    <img
                      src={imgUrl(cover, 768)}
                      srcSet={imgSrcSet(cover, [480, 768, 1024])}
                      alt={`Fotografia profissional — ${s.h}`}
                      width={900}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold">{s.h}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ember">{s.escopo}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
                  <Link
                    to="/fotografo-corporativo/$slug"
                    params={{ slug: s.slug }}
                    className="mt-5 text-sm font-medium text-ember hover:underline"
                  >
                    Ver exemplos →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </section>




      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">Galerias relacionadas</h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <li key={c.slug}>
              <Link
                to="/fotografo-corporativo/$slug"
                params={{ slug: c.slug }}
                className="inline-flex rounded-full border border-border px-4 py-2 text-sm hover:border-ember hover:text-ember"
              >
                {c.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/fotos-corporativas"
              className="inline-flex rounded-full border border-border px-4 py-2 text-sm hover:border-ember hover:text-ember"
            >
              Fotos corporativas
            </Link>
          </li>
          <li>
            <Link
              to="/foto-profissional-para-linkedin"
              className="inline-flex rounded-full border border-border px-4 py-2 text-sm hover:border-ember hover:text-ember"
            >
              Foto profissional para LinkedIn
            </Link>
          </li>
        </ul>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">
            Atendemos clínicas nos principais bairros
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {bairros.slice(0, 24).map((b) => (
              <li key={b.slug}>
                <Link
                  to="/fotografo-corporativo-em/$bairro"
                  params={{ bairro: b.slug }}
                  className="inline-flex rounded-full border border-border px-4 py-2 text-sm hover:border-ember hover:text-ember"
                >
                  {b.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="mb-8 font-display text-2xl font-semibold md:text-4xl">
            Perguntas frequentes sobre fotografia para clínicas
          </h2>
          <FaqList items={pageFaqs} />
          <div className="mt-12 text-center">
            <Link
              to="/contato"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Pedir orçamento para minha clínica
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
