import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, featuredPosts, site, videos } from "@/data/catalog";
import { GRID_WIDTHS, imgSrcSet, imgUrl } from "@/lib/img";
import {
  galleryTitle,
  heroPhoto,
  selectedWorks,
  worksCtas,
} from "@/data/homeCuration";

import { buildMeta } from "@/lib/seo";
import { Video, ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { ServiceChooser } from "@/components/site/ServiceChooser";
import { SegmentGrid } from "@/components/site/SegmentGrid";
import { waLink } from "@/lib/whatsapp";
import { homeStats, statsLead } from "@/data/stats";

const homeFaqs = faqsComerciais.slice(0, 6);

import { googleBusinessProfileUrl, googleReviewUrl, googleReviews, googleReviewsSummary } from "@/data/reviews";

const HERO_IMG = heroPhoto.src;

export const Route = createFileRoute("/")({
  loader: () => ({
    recentPosts: featuredPosts.slice(0, 3),
  }),
  head: () => ({
    meta: buildMeta({
      title: "Fotógrafo Corporativo em São Paulo | Alê Fotógrafo",
      description:
        "Fotografia corporativa profissional em SP. Retratos, headshots e eventos. Nota 4,9 com 144 avaliações.",
      path: "/",
    }),
    links: [
      { rel: "canonical", href: "https://www.alefotografo.com.br/" },
      // Sem preload manual do hero: o React já emite automaticamente um
      // <link rel="preload" as="image"> com srcSet/sizes para o <img> eager
      // fetchPriority="high" do hero. Declarar aqui duplicava a tag no <head>.
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(homeFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alexandre Machado",
          alternateName: "Alê Fotógrafo",
          jobTitle: "Fotógrafo Corporativo",
          worksFor: {
            "@type": "Organization",
            name: "Alê Fotógrafo Corporativo",
            url: "https://alefotografo.com.br",
          },
          url: "https://alefotografo.com.br",
          sameAs: [site.instagram, site.linkedin],
        }),
      },
      // A empresa e a pessoa (Alexandre Machado) são declaradas uma única vez
      // no @graph do __root (#business e #person). Repetir aqui como
      // "#organization" criava duas entidades para o mesmo negócio, com
      // aggregateRating duplicado.

    ],
  }),
  component: Home,
});

function Home() {
  // O snapshot do loader mantém SSR e hidratação idênticos quando um post
  // agendado cruza a data de publicação entre builds.
  const { recentPosts } = Route.useLoaderData();
  const recentVideos = videos.slice(0, 3);


  return (
    <>
      {/* Hero — texto + fotografia real */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:items-center md:gap-14 md:px-8 md:py-24">
          <div className="md:col-span-7">
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-ember">
                    Alexandre Machado · 30 anos · São Paulo
                  </p>
                  <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl">
                    Retrato corporativo em São Paulo feito por mim, com{" "}
                    <span className="gradient-text-ember">direção de pose</span> do primeiro ao último
                    clique.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg text-pretty">
                    Sou Alexandre Machado. Fotografo pessoalmente cada ensaio:{" "}
                    <Link to="/foto-profissional" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">retrato profissional</Link>,{" "}
                    <Link to="/foto-profissional-para-linkedin" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">headshot para LinkedIn</Link>,{" "}
                    <Link to="/fotografia-executiva" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">retratos de liderança</Link> e{" "}
                    <Link to="/fotos-corporativas" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">fotos de equipe no escritório</Link>{" "}
                    — sem terceirizar, sem assistente assumindo a câmera.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{statsLead()}</p>
                  <p className="mt-3 text-sm text-muted-foreground/80">
                    Especialista em retratos corporativos e cobertura de eventos corporativos em São Paulo.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={waLink(
                        "Olá Alexandre, quero um orçamento de fotografia corporativa. Pode me ajudar?",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-ember-glow"
                    >
                      Solicitar orçamento no WhatsApp
                      <ArrowUpRight size={16} />
                    </a>
                    <Link
                      to="/fotografo-corporativo"
                      className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur-sm hover:bg-surface"
                    >
                      Ver portfólio corporativo
                    </Link>
                    <Link
                      to="/foto-profissional"
                      className="inline-flex items-center gap-2 self-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                    >
                      Agendar foto profissional
                    </Link>

                  </div>
                  <p className="mt-5 max-w-xl text-sm text-muted-foreground">
                    30+ anos de experiência · Atendimento em São Paulo · Empresas, médicos, advogados e
                    executivos
                  </p>
                  <dl className="mt-14 grid max-w-xl grid-cols-2 gap-5 border-t border-border pt-8 sm:grid-cols-4 sm:gap-6">
                    {homeStats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                          {s.label}
                        </dt>
                        <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
          </div>
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong md:flex md:justify-center">
              <img
                src={imgUrl(HERO_IMG, 720)}
                srcSet={imgSrcSet(HERO_IMG, undefined, heroPhoto.width)}
                sizes="(max-width: 768px) 100vw, 40vw"
                alt={heroPhoto.alt}
                width={heroPhoto.width}
                height={heroPhoto.height}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full md:max-h-[78vh] md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trabalhos selecionados — curadoria real do acervo */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Fotos</p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl text-balance">
              Trabalhos selecionados
            </h2>
          </div>
          <Link
            to="/fotografo-corporativo"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Ver todos os segmentos <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="columns-1 gap-4 md:columns-2">
          {selectedWorks.map((w) => (
            <Link
              key={w.src}
              to="/fotografo-corporativo/$slug"
              params={{ slug: w.gallery }}
              className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <img
                src={imgUrl(w.src, 640)}
                srcSet={imgSrcSet(w.src, GRID_WIDTHS, w.width)}
                sizes="(max-width: 768px) 96vw, 45vw"
                alt={w.alt}
                width={w.width}
                height={w.height}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-5">
                <h3 className="font-display text-sm font-semibold text-foreground md:text-lg">
                  {galleryTitle(w.gallery)}
                </h3>
                <span className="mt-1 hidden items-center gap-1 text-xs text-ember opacity-0 transition-opacity group-hover:opacity-100 md:inline-flex">
                  Ver galeria <ArrowUpRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {worksCtas.map((c) =>
            "categorySlug" in c ? (
              <Link
                key={c.label}
                to="/fotografo-corporativo/$slug"
                params={{ slug: c.categorySlug }}
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-6 py-3.5 text-sm font-medium hover:bg-surface"
              >
                {c.label} <ArrowUpRight size={14} />
              </Link>
            ) : (
              <Link
                key={c.label}
                to="/eventos-corporativos"
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-6 py-3.5 text-sm font-medium hover:bg-surface"
              >
                {c.label} <ArrowUpRight size={14} />
              </Link>
            ),
          )}
        </div>
      </section>

      {/* Prioridade comercial — escolha do serviço */}
      <ServiceChooser />

      {/* Segmentos prioritários */}
      <SegmentGrid />

      {/* Quem está por trás — retrato do Alê */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <img
                src={imgUrl("https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG", 640)}
                alt="Alexandre Machado, fotógrafo corporativo em São Paulo"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 border border-ember md:block" />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Quem está por trás</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance md:text-5xl">
              Alexandre Machado — três décadas traduzindo empresas em imagem.
            </h2>
            <p className="mt-6 text-base text-muted-foreground md:text-lg text-pretty">
              Fotógrafo profissional em São Paulo, especializado em fotografia corporativa, retratos executivos e cobertura de eventos para empresas que precisam de imagens com intenção estratégica — não só estética.
            </p>
            <p className="mt-4 text-muted-foreground">
              Cada produção começa pelo entendimento do posicionamento, do público e do objetivo da comunicação. Resultado: fotos que transmitem autoridade, geram confiança e valorizam a marca.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/sobre" className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-5 py-3 text-sm font-medium hover:bg-surface">
                Conheça a trajetória <ArrowUpRight size={14} />
              </Link>
              <Link to="/depoimentos" className="inline-flex items-center gap-2 text-sm text-ember hover:underline">
                Ver depoimentos de clientes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videos teaser */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Vídeo</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">Produções audiovisuais</h2>
            </div>
            <Link to="/videos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              Todos os vídeos <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {recentVideos.map((v) => (
              <Link
                key={v.slug}
                to="/videos/$slug"
                params={{ slug: v.slug }}
                className="group block overflow-hidden rounded-sm bg-background ring-1 ring-border hover:ring-ember"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {v.youtube ? (
                    <img
                      src={`https://i.ytimg.com/vi/${v.youtube}/hqdefault.jpg`}
                      alt={v.title}
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background">
                      <Video size={36} className="text-ember/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-ember/90 p-4 text-accent-foreground transition-transform group-hover:scale-110">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 font-display text-base font-semibold">{v.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof — depoimentos */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Prova social</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">O que dizem nossos clientes</h2>
            </div>
            <Link to="/depoimentos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              Ver todos os depoimentos <ArrowUpRight size={14} />
            </Link>
          </div>
          <p className="mb-8 text-sm text-muted-foreground">
            Nota {googleReviewsSummary.ratingValue.toLocaleString("pt-BR")} de 5 em{" "}
            {googleReviewsSummary.reviewCount} avaliações no Google.{" "}
            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-ember underline underline-offset-4"
            >
              Ver avaliações no Google
            </a>{" "}
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Avaliar
            </a>
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {googleReviews.slice(0, 3).map((r) => (
              <figure key={r.author} className="rounded-sm border border-border bg-background p-7">
                <div className="flex items-center gap-1 text-ember" aria-label={`${r.rating} de 5 estrelas`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display font-semibold">{r.author}</p>
                  <p className="text-sm text-muted-foreground">Avaliação no Google · {r.when}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <h3 className="font-display text-xl font-semibold md:text-2xl">
              Empresas, profissionais e segmentos atendidos
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Produções realizadas para empresas de tecnologia, indústria, saúde, educação,
              serviços financeiros, jurídico, varejo e para profissionais liberais em São Paulo.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "Executivos e diretoria",
                "Advogados e escritórios",
                "Médicos e clínicas",
                "Indústria",
                "Tecnologia",
                "Educação",
                "Arquitetura e interiores",
                "Eventos corporativos",
                "Palestrantes",
                "Profissionais liberais",
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Insights</p>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Do blog</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Todos os posts <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recentPosts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-sm border border-border bg-surface p-6 transition-colors hover:border-ember"
            >
              {p.date && <time className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</time>}
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember">{p.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">FAQ</p>
          <h2 className="mb-8 font-display text-3xl font-semibold md:text-4xl">
            Dúvidas frequentes antes de contratar
          </h2>
          <FaqList items={homeFaqs} />
          <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Ver todas as perguntas <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl text-balance">
              Pronto para fortalecer a imagem da sua empresa?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Atendimento em toda Grande São Paulo. Envie o briefing pelo WhatsApp e receba o
              orçamento em até 24 horas úteis.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(
                "Olá Alexandre, quero um orçamento de fotografia para a minha empresa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-7 py-4 font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Solicitar orçamento no WhatsApp <ArrowUpRight size={16} />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-sm border border-border-strong px-7 py-4 font-medium hover:bg-surface"
            >
              Outras formas de contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
