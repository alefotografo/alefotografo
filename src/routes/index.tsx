import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { site } from "@/data/site";
import { buildMeta } from "@/lib/seo";
import { faqJsonLd } from "@/lib/faqs";
import { faqsComerciais } from "@/lib/faqsComerciais";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { lazyAfterInteractive } from "@/lib/deferredLazy";
import HomeHeroNovo from "@/components/site/home/HomeHeroNovo";
import FaixaClientes from "@/components/site/home/FaixaClientes";
import SolucoesEmpresa from "@/components/site/home/SolucoesEmpresa";

// Fonte da imagem principal da home (mantida em sincronia com HomeHeroNovo).
const HERO_IMAGE_SRC =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/77681/grupos-fotos-de-grupos-ou-equipes_grupos-3.jpg";

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
const HomeVideos = lazyAfterInteractive(() => import("@/components/site/home/HomeVideos"));
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
      // Foto principal da home: inicia download o mais cedo possível,
      // reduzindo LCP. O imagesrcset/imageSizes deixa o navegador escolher
      // a largura correta para cada viewport, igual ao <img> do hero.
      {
        rel: "preload",
        as: "image",
        href: imgUrl(HERO_IMAGE_SRC, 480),
        imageSrcSet: imgSrcSet(HERO_IMAGE_SRC, [480, 720, 900, 1200, 1440, 1920], 1920),
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
        <AgilidadeProva />
        <RetratoProfissional />
        <HomeSelectedWorks />
        <SegmentGrid />
        <HomeAbout />
        <HomeVideos />
        <HomeBlog />
        <HomeFaq />
        <HomeCta />
      </Suspense>
    </>
  );
}
