import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, site } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Award, Camera, Target, Zap } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: buildMeta({
      title: "Sobre Alexandre Machado — 30 anos de fotografia corporativa",
      description: "Conheça Alexandre Machado, o Alê Fotógrafo. 30 anos especializando em fotografia corporativa em São Paulo, atendendo centenas de empresas e profissionais.",
      path: "/sobre",
      image: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
      type: "article",
    }),
    links: [{ rel: "canonical", href: "https://www.alefotografo.com.br/sobre" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alexandre Machado",
          alternateName: "Alê Fotógrafo",
          jobTitle: "Fotógrafo Corporativo",
          description: site.description,
          image: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
          worksFor: { "@type": "Organization", name: "Alê Fotógrafo" },
          sameAs: [site.linkedin, site.instagram],
        }),
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-24">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">Sobre</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
              Alexandre Machado — o fotógrafo por trás do Alê Fotógrafo
            </h1>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Fotógrafo profissional em São Paulo com mais de 30 anos de experiência, atendendo centenas de empresas com fotografia corporativa, retratos profissionais, cobertura de eventos e produção de vídeo institucional.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <img
                src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG"
                alt="Retrato de Alexandre Machado, Alê Fotógrafo"
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
            Como fotógrafo profissional em São Paulo, seu trabalho é voltado para empresas e profissionais que precisam fortalecer sua imagem, transmitir autoridade e se posicionar com mais consistência no mercado.
          </p>
          <p className="text-muted-foreground">
            Ao longo de três décadas, já produziu imagens para empresas de diferentes segmentos, sempre com foco em resultado: gerar confiança, valor e percepção profissional.
          </p>
          <p className="text-muted-foreground">
            Sua atuação como fotógrafo corporativo em São Paulo é baseada em um método claro: entender o posicionamento do cliente, o público que será impactado e o objetivo da comunicação antes de iniciar qualquer produção. Isso garante que cada fotografia ou vídeo tenha intenção estratégica e não apenas estética.
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
              { icon: Target, title: "Estratégia", desc: "Cada foto tem intenção. Entendemos posicionamento e público antes do clique." },
              { icon: Camera, title: "Técnica", desc: "30 anos de bagagem em iluminação, composição e pós-produção profissional." },
              { icon: Zap, title: "Agilidade", desc: "Entrega rápida, organização de bastidores e respeito pelo seu tempo." },
              { icon: Award, title: "Resultado", desc: "Imagens que convertem, transmitem autoridade e valorizam sua marca." },
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
