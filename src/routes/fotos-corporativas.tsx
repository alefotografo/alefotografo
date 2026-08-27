import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, categoryBySlug, site } from "@/data/catalog";
import { imgUrl } from "@/lib/img";
import { bairros } from "@/data/bairros";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { FaqList } from "@/components/site/Faq";
import type { Faq } from "@/lib/faqs";

const URL_PATH = "/fotos-corporativas";
const CANONICAL = `${SITE_ORIGIN}${URL_PATH}`;

const TITLE = "Fotos Corporativas em SP | Retratos de Equipe — Alexandre Machado";
const DESCRIPTION =
  "Eu fotografo o time inteiro no seu escritório com o mesmo fundo, luz e enquadramento: 15 a 25 pessoas em meio período, padrão visual igual para site e LinkedIn. Peça orçamento.";

const pageFaqs: Faq[] = [
  {
    q: "O que são fotos corporativas?",
    a: "Fotos corporativas são imagens produzidas para uso profissional da empresa e das pessoas que a representam: retratos de executivos e colaboradores, fotos de equipe, do escritório, dos processos, de eventos e de produtos. Elas padronizam a comunicação visual da marca no site, LinkedIn, apresentações, mídia e materiais de recrutamento.",
  },
  {
    q: "Quanto custa uma sessão de fotos corporativas em São Paulo?",
    a: "O valor depende do número de pessoas fotografadas, do tempo de captação, do local e dos direitos de uso. Retratos em estúdio para pequenos times têm valor por pessoa; produções em escritório, fábrica ou evento são orçadas por hora ou por projeto. Envie o briefing pelo WhatsApp e receba um orçamento em até 24 horas.",
  },
  {
    q: "As fotos corporativas podem ser feitas na minha empresa?",
    a: "Sim. Atendemos em toda a Grande São Paulo levando iluminação profissional, fundos portáteis e direção de poses. Fotografar no próprio escritório reduz o tempo de afastamento dos executivos e mantém a identidade visual da marca nas imagens.",
  },
  {
    q: "Em quanto tempo recebo as fotos tratadas?",
    a: "De 1 a 3 dias úteis para retratos, ambientes e produtos, já com ajuste de cor, retoque profissional e padronização. Em eventos corporativos há entrega em tempo real, com reconhecimento facial para que cada participante encontre suas fotos ainda durante o evento.",
  },
  {
    q: "A empresa fica com os direitos das imagens?",
    a: "Sim. O contrato cede o uso comercial e institucional das imagens sem limite de prazo ou plataforma — site, redes sociais, anúncios, apresentações e mídia.",
  },
];

export const Route = createFileRoute("/fotos-corporativas")({
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
              name: "Fotos corporativas em São Paulo",
              serviceType: "Fotografia corporativa",
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
                { "@type": "ListItem", position: 2, name: "Fotos corporativas", item: CANONICAL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: FotosCorporativasPage,
});

const FALLBACK_IMG =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/102590/fotografia-corporativa-em-sao-paulo_antonio-logigo-120.jpg";

const catCover = (slug: string) => categoryBySlug(slug)?.cover || FALLBACK_IMG;

type Bloco = {
  h: string;
  p: string;
  img: string;
  catSlug?: string;
  to?: "/videos";
  linkLabel: string;
};

const blocos: Bloco[] = [
  {
    h: "Retratos profissionais e headshots",
    p: "Retratos padronizados de executivos e times inteiros, com direção de pose, luz de estúdio e fundo consistente — prontos para LinkedIn, site institucional e apresentações.",
    img: catCover("retrato-corporativo"),
    catSlug: "retrato-corporativo",
    linkLabel: "Ver retratos corporativos",
  },
  {
    h: "Fotos de equipe e cultura",
    p: "Registros do dia a dia, reuniões, bastidores e ambiente de trabalho: o material que sustenta páginas de carreira, employer branding e recrutamento.",
    img: catCover("fotografia-corporativa-em-sao-paulo"),
    catSlug: "fotografia-corporativa-em-sao-paulo",
    linkLabel: "Ver fotografia corporativa",
  },
  {
    h: "Escritórios, fábricas e operação",
    p: "Fotografia de ambientes corporativos, indústria e processos produtivos, mostrando escala, tecnologia e cuidado operacional da empresa.",
    img: catCover("fotografia-industrial"),
    catSlug: "fotografia-industrial",
    linkLabel: "Ver fotografia industrial",
  },
  {
    h: "Eventos corporativos",
    p: "Convenções, kick-offs, congressos e premiações com entrega em tempo real e reconhecimento facial para os participantes.",
    img: catCover("fotografo-de-eventos-corporativos"),
    catSlug: "fotografo-de-eventos-corporativos",
    linkLabel: "Ver cobertura de eventos",
  },
  {
    h: "Produtos e institucional",
    p: "Fotos de produto, packshots e imagens institucionais para catálogos, e-commerce, relatórios e campanhas.",
    img: catCover("banco-de-imagens-para-empresas"),
    catSlug: "banco-de-imagens-para-empresas",
    linkLabel: "Ver banco de imagens",
  },
  {
    h: "Vídeo corporativo integrado",
    p: "A mesma diária pode gerar fotos e vídeo institucional, depoimentos de clientes e cortes verticais para redes sociais — com a mesma direção e identidade visual.",
    img: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/66911/banco-de-imagem-de-empresa_banco-de-imagens-empresas-negocios-alefotografo-fotografo0002.jpg",
    to: "/videos",
    linkLabel: "Ver vídeos corporativos",
  },
];

const maisEspecialidades: { slug: string; label: string }[] = [
  { slug: "fotografia-industrial", label: "Fotografia industrial" },
  { slug: "fotos-aereas", label: "Fotos aéreas" },
  { slug: "fotografo-de-arquitetura-e-interiores", label: "Arquitetura e interiores" },
  { slug: "fotografo-feiras-stands", label: "Feiras de negócios e stands" },
  { slug: "empreendimentos-imobiliarios", label: "Empreendimentos imobiliários" },
  { slug: "fotografo-de-culinaria", label: "Fotografia de culinária" },
  { slug: "fotografo-de-drinks-coqueteis", label: "Fotografia de drinks" },
  { slug: "totem-fotografico-totem-mania", label: "Totem fotográfico" },
  { slug: "fotografo-festa-de-confraternizacao", label: "Festa de confraternização" },
  { slug: "banco-de-imagens-para-empresas", label: "Banco de imagens para empresas" },
];


function FotosCorporativasPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Fotografia corporativa
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fotos corporativas em São Paulo que passam confiança
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg">
            Retratos profissionais, equipes, escritório, eventos e produtos — produzidos por{" "}
            {site.fullName}, com 30 anos fotografando empresas na Grande São Paulo. Tratamento
            profissional e entrega em 1 a 3 dias úteis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/fotografo-corporativo"
              className="inline-flex rounded-sm border border-border px-6 py-3 text-sm font-medium hover:border-ember"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">
          O que entra em um projeto de fotos corporativas
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blocos.map((b) => (
            <article
              key={b.h}
              className="flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-ember"
            >
              <div className="aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={imgUrl(b.img, 480)}
                  alt={b.h}
                  width={480}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold">{b.h}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{b.p}</p>
                {b.to ? (
                  <Link to={b.to} className="mt-5 text-sm font-medium text-ember hover:underline">
                    {b.linkLabel} →
                  </Link>
                ) : b.catSlug ? (
                  <Link
                    to="/fotografo-corporativo/$slug"
                    params={{ slug: b.catSlug }}
                    className="mt-5 text-sm font-medium text-ember hover:underline"
                  >
                    {b.linkLabel} →
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">
            Mais especialidades de fotografia para empresas
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Além dos retratos e da cobertura institucional, atendemos demandas específicas de
            indústria, arquitetura, feiras, produtos e confraternizações.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {maisEspecialidades.map((e) => (
              <Link
                key={e.slug}
                to="/fotografo-corporativo/$slug"
                params={{ slug: e.slug }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-colors hover:border-ember"
              >
                <div className="aspect-[16/10] overflow-hidden bg-surface">
                  <img
                    src={imgUrl(catCover(e.slug), 480)}
                    alt={e.label}
                    width={480}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold group-hover:text-ember">
                    {e.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="border-t border-border">

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">
            Galerias por segmento
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Veja trabalhos reais em cada especialidade de fotografia corporativa.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
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
                to="/fotografia-para-clinicas"
                className="inline-flex rounded-full border border-border px-4 py-2 text-sm hover:border-ember hover:text-ember"
              >
                Fotografia para clínicas
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">
          Atendimento nos principais polos empresariais
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
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="mb-8 font-display text-2xl font-semibold md:text-4xl">
            Perguntas frequentes sobre fotos corporativas
          </h2>
          <FaqList items={pageFaqs} />
          <div className="mt-12 text-center">
            <Link
              to="/contato"
              className="inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Pedir orçamento de fotos corporativas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
