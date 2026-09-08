import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { site } from "@/data/site";
import { buildMeta } from "@/lib/seo";
import { faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { lazyAfterInteractive } from "@/lib/deferredLazy";
import HomeHeroNovo from "@/components/site/home/HomeHeroNovo";
import FaixaClientes from "@/components/site/home/FaixaClientes";
import SolucoesEmpresa from "@/components/site/home/SolucoesEmpresa";

const homeFaqs = faqsComerciais.slice(0, 6);

const BancoDeImagens = lazyAfterInteractive(() => import("@/components/site/home/BancoDeImagens"));
const VideoProducao = lazyAfterInteractive(() => import("@/components/site/home/VideoProducao"));
const EventoCompleto = lazyAfterInteractive(() => import("@/components/site/home/EventoCompleto"));
const PontualOuPlano = lazyAfterInteractive(() => import("@/components/site/home/PontualOuPlano"));
const AgilidadeProva = lazyAfterInteractive(() => import("@/components/site/home/AgilidadeProva"));
const RetratoProfissional = lazyAfterInteractive(() =>
  import("@/components/site/home/RetratoProfissional"),
);
const ChamadaFinal = lazyAfterInteractive(() => import("@/components/site/home/ChamadaFinal"));
const HomeSelectedWorks = lazyAfterInteractive(() => import("@/components/site/home/HomeSelectedWorks"));
const ServiceChooser = lazyAfterInteractive(() =>
  import("@/components/site/ServiceChooser").then((module) => ({ default: module.ServiceChooser })),
);
const SegmentGrid = lazyAfterInteractive(() =>
  import("@/components/site/SegmentGrid").then((module) => ({ default: module.SegmentGrid })),
);
const HomeAbout = lazyAfterInteractive(() => import("@/components/site/home/HomeAbout"));
const HomeVideos = lazyAfterInteractive(() => import("@/components/site/home/HomeVideos"));
const HomeSocialProof = lazyAfterInteractive(() => import("@/components/site/home/HomeSocialProof"));
const HomeBlog = lazyAfterInteractive(() => import("@/components/site/home/HomeBlog"));
const HomeFaq = lazyAfterInteractive(() => import("@/components/site/home/HomeFaq"));
const HomeCta = lazyAfterInteractive(() => import("@/components/site/home/HomeCta"));


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
      <HomeHeroNovo />
      <FaixaClientes />
      <SolucoesEmpresa />

      <Suspense fallback={null}>
        <BancoDeImagens />
        <VideoProducao />
        <EventoCompleto />
        <PontualOuPlano />
        <AgilidadeProva />
        <RetratoProfissional />
        <ChamadaFinal />
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
