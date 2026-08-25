import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, posts, site, videos } from "@/data/catalog";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { buildMeta } from "@/lib/seo";
import { Video, ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { ServiceChooser } from "@/components/site/ServiceChooser";
import { SegmentGrid } from "@/components/site/SegmentGrid";
import { waLink } from "@/lib/whatsapp";

const homeFaqs = faqsComerciais.slice(0, 6);

import { googleReviews, googleReviewsSummary, aggregateRatingSchema } from "@/data/reviews";

const FALLBACK_HERO =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG";
const HERO_IMG = categories.find((c) => c.cover)?.cover ?? FALLBACK_HERO;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Alê Fotógrafo — Fotografia Corporativa em SP (30 Anos)",
      description:
        "Fotos corporativas, retratos executivos, LinkedIn, eventos e vídeo institucional. 30 anos de experiência, orçamento no mesmo dia e atendimento em toda a Grande SP.",
      path: "/",
    }),
    links: [
      { rel: "canonical", href: "https://www.alefotografo.com.br/" },
      { rel: "preload", as: "image", href: imgUrl(HERO_IMG, 1600), fetchPriority: "high" },
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
          "@type": "Organization",
          "@id": "https://www.alefotografo.com.br/#organization",
          name: site.fullName,
          alternateName: site.name,
          url: "https://www.alefotografo.com.br",
          logo: HERO_IMG,
          image: HERO_IMG,
          description: site.description,
          email: site.email,
          telephone: "+55" + site.whatsapp.slice(2),
          sameAs: [site.instagram, site.linkedin],
          founder: { "@type": "Person", name: "Alexandre Machado" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Alameda Santos, 1165",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "01419-002",
            addressCountry: "BR",
          },
          aggregateRating: aggregateRatingSchema,
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = categories.filter((c) => c.cover).slice(0, 6);
  const recentPosts = posts.slice(0, 3);
  const recentVideos = videos.slice(0, 3);
  const hero = featured[0];
  const heroImg = hero?.cover ?? HERO_IMG;


  return (
    <>
      {/* Hero — full-bleed featured image */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img
            src={imgUrl(heroImg, 1600)}
            srcSet={imgSrcSet(heroImg)}
            sizes="100vw"
            alt={hero ? `Fotografia corporativa — ${hero.title}` : "Fotografia corporativa em São Paulo"}
            width={1920}
            height={1280}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-44">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              30 anos · São Paulo
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl">
              Fotografia corporativa em São Paulo para empresas, executivos e profissionais que
              precisam <span className="gradient-text-ember">transmitir autoridade</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg text-pretty">
              <Link to="/foto-profissional" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">Retratos profissionais</Link>,{" "}
              <Link to="/foto-profissional-para-linkedin" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">fotos para LinkedIn</Link>, cobertura de{" "}
              <Link to="/fotos-corporativas" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">eventos corporativos</Link> e{" "}
              <Link to="/videos" className="underline decoration-ember/50 underline-offset-4 hover:text-foreground">vídeos institucionais</Link> com direção, experiência e entrega profissional.
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
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur-sm hover:bg-surface"
              >
                Agendar foto profissional
              </Link>
            </div>
            <p className="mt-5 max-w-xl text-sm text-muted-foreground">
              30+ anos de experiência · Atendimento em São Paulo · Empresas, médicos, advogados e
              executivos
            </p>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-6">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Experiência</dt>
                <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">30+ anos</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Empresas</dt>
                <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">500+</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">Segmentos</dt>
                <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">{categories.length}</dd>
              </div>
            </dl>
          </div>
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
                src={imgUrl("https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG", 800)}
                alt="Alexandre Machado, fotógrafo corporativo em São Paulo"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
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

      {/* Photos preview */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
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

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((c, i) => (
            <Link
              key={c.slug}
              to="/fotografo-corporativo/$slug"
              params={{ slug: c.slug }}
              className="group relative block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <div className={`relative ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden`}>
                <img
                  src={imgUrl(c.cover!, 768)}
                  srcSet={imgSrcSet(c.cover!, [480, 768, 1024])}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  alt={c.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-xs text-ember opacity-0 transition-opacity group-hover:opacity-100">
                  Ver galeria <ArrowUpRight size={12} />
                </span>
              </div>
            </Link>
          ))}
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
              href={googleReviewsSummary.profileUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-ember underline underline-offset-4"
            >
              Ver avaliações no Google
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
