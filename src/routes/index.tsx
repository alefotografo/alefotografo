import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { site } from "@/data/site";
import { buildMeta } from "@/lib/seo";
import { faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { lazyAfterInteractive } from "@/lib/deferredLazy";
import HomeHeroNovo from "@/components/site/home/HomeHeroNovo";
import SolucoesEmpresa from "@/components/site/home/SolucoesEmpresa";
import { HERO_WEBP_480, HERO_WEBP_SRCSET } from "@/components/site/home/heroAssets";

const homeFaqs = faqsComerciais.slice(0, 6);

const BancoDeImagens = lazyAfterInteractive(() => import("@/components/site/home/BancoDeImagens"));
const VideoProducao = lazyAfterInteractive(() => import("@/components/site/home/VideoProducao"));
const EventoCompleto = lazyAfterInteractive(() => import("@/components/site/home/EventoCompleto"));
const AgilidadeProva = lazyAfterInteractive(() => import("@/components/site/home/AgilidadeProva"));
const RetratoProfissional = lazyAfterInteractive(() =>
  import("@/components/site/home/RetratoProfissional"),
);
const HomeSelectedWorks = lazyAfterInteractive(() => import("@/components/site/home/HomeSelectedWorks"));
const SegmentGrid = lazyAfterInteractive(() =>
  import("@/components/site/SegmentGrid").then((module) => ({ default: module.SegmentGrid })),
);
const HomeAbout = lazyAfterInteractive(() => import("@/components/site/home/HomeAbout"));
const HomeBlog = lazyAfterInteractive(() => import("@/components/site/home/HomeBlog"));
const HomeFaq = lazyAfterInteractive(() => import("@/components/site/home/HomeFaq"));
const HomeCta = lazyAfterInteractive(() => import("@/components/site/home/HomeCta"));


const HOME_TITLE = "Fotógrafo Corporativo em São Paulo | Fotografia Profissional";
const HOME_DESCRIPTION =
  "Fotografia corporativa em São Paulo para empresas, executivos e equipes. Retratos profissionais, eventos, indústria, logística e vídeos corporativos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }).map((m) => {
      if ("title" in m) return { title: HOME_TITLE };
      if (m.name === "description") return { name: "description", content: HOME_DESCRIPTION };
      if (m.property === "og:title") return { property: "og:title", content: HOME_TITLE };
      if (m.property === "og:description") return { property: "og:description", content: HOME_DESCRIPTION };
      return m;
    }),
    links: [
      { rel: "canonical", href: "https://www.alefotografo.com.br/" },
      // Foto principal da home: inicia download o mais cedo possível,
      // reduzindo LCP. O imagesrcset/imageSizes deixa o navegador escolher
      // a largura correta para cada viewport, igual ao <img> do hero.
      {
        rel: "preload",
        as: "image",
        href: HERO_WEBP_480,
        imageSrcSet: HERO_WEBP_SRCSET,
        imageSizes: "100vw",
        fetchPriority: "high",
      },
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
            url: "https://www.alefotografo.com.br",
          },
          url: "https://www.alefotografo.com.br",
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
      <HomeHeroNovo />
      <SolucoesEmpresa />

      <Suspense fallback={null}>
        <BancoDeImagens />
        <VideoProducao />
        <EventoCompleto />
        <AgilidadeProva />
        <RetratoProfissional />
        <HomeSelectedWorks />
        <SegmentGrid />
        <HomeAbout />
        <HomeBlog />
        <HomeFaq />
        <HomeCta />
      </Suspense>
    </>
  );
}
