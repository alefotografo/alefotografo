import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { site } from "@/data/site";
import { heroPhoto } from "@/data/homeCuration";
import { buildMeta } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import { faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { waLink } from "@/lib/whatsapp";
import { homeStats, statsLead } from "@/data/stats";

const homeFaqs = faqsComerciais.slice(0, 6);

const HomeSelectedWorks = lazy(() => import("@/components/site/home/HomeSelectedWorks"));
const ServiceChooser = lazy(() =>
  import("@/components/site/ServiceChooser").then((module) => ({ default: module.ServiceChooser })),
);
const SegmentGrid = lazy(() =>
  import("@/components/site/SegmentGrid").then((module) => ({ default: module.SegmentGrid })),
);
const HomeAbout = lazy(() => import("@/components/site/home/HomeAbout"));
const HomeVideos = lazy(() => import("@/components/site/home/HomeVideos"));
const HomeSocialProof = lazy(() => import("@/components/site/home/HomeSocialProof"));
const HomeBlog = lazy(() => import("@/components/site/home/HomeBlog"));
const HomeFaq = lazy(() => import("@/components/site/home/HomeFaq"));
const HomeCta = lazy(() => import("@/components/site/home/HomeCta"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Fotógrafo Corporativo em São Paulo | Alê Fotógrafo",
      description:
        "Fotografia corporativa profissional em SP. Retratos, headshots e eventos. Nota 4,9 com 144 avaliações.",
      path: "/",
    }),
    links: [
      { rel: "canonical", href: "https://www.alefotografo.com.br/" },
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
            <div className="grid w-full overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <picture
                className="col-start-1 row-start-1"
                style={{ display: "block", aspectRatio: "1217 / 1600", width: "100%" }}
              >
                <source
                  media="(max-width: 768px)"
                  srcSet={heroPhoto.mobileSrc}
                  type="image/webp"
                  width="480"
                  height="630"
                />
                <source
                  srcSet={heroPhoto.webpSrc}
                  type="image/webp"
                  width="1217"
                  height="1600"
                />
                <img
                  src={heroPhoto.fallbackSrc}
                  alt={heroPhoto.alt}
                  width={heroPhoto.width}
                  height={heroPhoto.height}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </picture>

            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <HomeSelectedWorks />
        <ServiceChooser />
        <SegmentGrid />
        <HomeAbout />
        <HomeVideos />
        <HomeSocialProof />
        <HomeBlog />
        <HomeFaq />
        <HomeCta />
      </Suspense>
    </>
  );
}
