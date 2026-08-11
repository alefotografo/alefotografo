import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { bairros } from "@/data/bairros";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { FaqList } from "@/components/site/Faq";
import type { Faq } from "@/lib/faqs";

const URL_PATH = "/fotografia-para-clinicas";
const CANONICAL = `${SITE_ORIGIN}${URL_PATH}`;

const TITLE = "Fotografia para Clínicas em São Paulo";
const DESCRIPTION =
  "Fotografia para clínicas em São Paulo: ambientes, equipe, procedimentos e retratos de médicos com padrão de credibilidade. Entrega em 1 a 3 dias úteis.";

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
    links: [{ rel: "canonical", href: CANONICAL }],
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
              provider: {
                "@type": "LocalBusiness",
                name: site.name,
                url: SITE_ORIGIN,
                telephone: `+${site.whatsapp}`,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "São Paulo",
                  addressRegion: "SP",
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

function FotografiaParaClinicasPage() {
  const cats = clinicCategorySlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <section className="border-b border-border">
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
            {bairros.slice(0, 16).map((b) => (
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
