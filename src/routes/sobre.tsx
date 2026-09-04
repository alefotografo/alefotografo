import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { Award, Camera, Target, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const PORTRAIT =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG";


export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: buildMeta({
      title: "Alexandre Machado — fotógrafo de retrato corporativo",
      description: "Sou Alexandre Machado e fotografo pessoalmente cada retrato profissional em São Paulo: direção de pose, 30 anos de carreira e atendimento direto comigo.",
      path: "/sobre",
      image: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
      type: "article",
    }),
    links: [
      { rel: "canonical", href: "https://www.alefotografo.com.br/sobre" },
      {
        rel: "preload",
        as: "image",
        href: imgUrl(PORTRAIT, 720),
        imageSrcSet: imgSrcSet(PORTRAIT, [480, 720, 1024]),
        imageSizes: "(max-width: 768px) 100vw, 40vw",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://www.alefotografo.com.br/sobre",
          url: "https://www.alefotografo.com.br/sobre",
          inLanguage: "pt-BR",
          isPartOf: { "@id": "https://www.alefotografo.com.br/#website" },
          about: { "@id": "https://www.alefotografo.com.br/quem-e-o-ale#person" },
          mainEntity: {
            "@type": "Person",
            "@id": "https://www.alefotografo.com.br/quem-e-o-ale#person",
            name: "Alexandre Machado",
            alternateName: "Alê Fotógrafo",
            jobTitle: "Fotógrafo de retrato corporativo",
            description:
              "Fotógrafo com mais de 30 anos de carreira em São Paulo, especializado em retrato profissional, headshot para LinkedIn e retratos de executivos e equipes.",
            image:
              "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
            url: "https://www.alefotografo.com.br/quem-e-o-ale",
            knowsAbout: [
              "Retrato corporativo",
              "Headshot profissional",
              "Foto para LinkedIn",
              "Direção de pose",
              "Iluminação de retrato",
            ],
            worksFor: { "@id": "https://www.alefotografo.com.br/#business" },
            sameAs: [site.linkedin, site.instagram],
          },
        }),
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
    ],

  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Sobre" }]} />
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-24">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Sobre</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
              Sou Alexandre Machado e fotografo pessoalmente cada retrato
            </h1>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Mais de 30 anos fotografando pessoas em São Paulo: retrato profissional, headshot para
              LinkedIn, executivos, sócios e equipes. Quem atende, dirige o ensaio e entrega as
              imagens é sempre eu — não há repasse para terceiros.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <img
                src={imgUrl(PORTRAIT, 720)}
                srcSet={imgSrcSet(PORTRAIT, [480, 720, 1024])}
                sizes="(max-width: 768px) 100vw, 40vw"
                alt="Retrato de Alexandre Machado, Alê Fotógrafo"
                width={800}
                height={1000}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />

            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Meu trabalho é imagem de pessoas. Executivos que precisam de um retrato à altura do
            cargo, profissionais liberais que vivem de credibilidade, médicos e advogados que são
            escolhidos pela primeira impressão, times inteiros que precisam de padrão visual no site
            e no LinkedIn.
          </p>
          <p className="text-muted-foreground">
            A maior parte das pessoas que fotografo diz, no começo, que não se sai bem em foto. Isso
            é direção, não genética: eu conduzo postura, ângulo de rosto, olhar e respiração durante
            todo o ensaio. É a parte que não dá para delegar, e é por isso que sou eu quem está atrás
            da câmera em todos os projetos deste site.
          </p>
          <p className="text-muted-foreground">
            Antes de fotografar, alinho o objetivo: onde a imagem vai ser usada, que público vai
            olhar e que percepção precisa provocar. Retrato para conselho, para perfil comercial ou
            para recrutamento pedem enquadramento, luz e expressão diferentes.
          </p>
          <p className="text-muted-foreground">
            Coberturas de grande porte — feiras, congressos e convenções com vários fotógrafos
            simultâneos — são atendidas pela equipe, em{" "}
            <a
              href="https://alefotografos.com.br"
              className="underline decoration-ember/50 underline-offset-4 hover:text-foreground"
            >
              alefotografos.com.br
            </a>
            . Aqui o foco é o trabalho autoral de retrato.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <h2 className="mb-12 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
            Pilares do trabalho
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Target, title: "Direção de pose", desc: "Eu conduzo postura, ângulo, olhar e expressão do início ao fim do ensaio." },
              { icon: Camera, title: "Luz de retrato", desc: "30 anos de bagagem em iluminação de rosto, composição e retoque natural de pele." },
              { icon: Zap, title: "Agenda enxuta", desc: "10 a 15 minutos por pessoa no seu escritório, sem travar a operação do time." },
              { icon: Award, title: "Atendimento direto", desc: "Você fala comigo do orçamento à entrega — sem intermediários e sem substituição." },
            ].map((p) => (
              <div key={p.title} className="rounded-sm border border-border bg-background p-6">
                <p.icon className="text-ember" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-4xl">
            Segmentos atendidos
          </h2>
          <Link to="/fotografo-corporativo" className="text-sm text-ember hover:underline">
            Ver fotos completas →
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/fotografo-corporativo/$slug"
              params={{ slug: c.slug }}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground hover:border-ember hover:text-foreground"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
          <h2 className="max-w-xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Vamos conversar sobre seu próximo projeto?
          </h2>
          <Link to="/contato" className="rounded-sm bg-ember px-7 py-4 font-medium text-accent-foreground hover:bg-ember-glow">
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}
