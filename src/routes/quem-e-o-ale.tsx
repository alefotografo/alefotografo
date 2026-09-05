import { createFileRoute, Link } from "@tanstack/react-router";
import { imgSrcSet, imgUrl } from "@/lib/img";
import { categories, posts } from "@/data/catalog";
import { site } from "@/data/site";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Award, Camera, Target, Zap, ArrowUpRight } from "lucide-react";
import { personFacts, personSchema } from "@/data/person";

const PORTRAIT =
  "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG";

export const Route = createFileRoute("/quem-e-o-ale")({
  head: () => ({
    meta: buildMeta({
      title: "Quem é o Alê — o fotógrafo que dirige o seu retrato",
      description:
        "Alexandre Machado, o Alê Fotógrafo: 30 anos fotografando pessoas em São Paulo. Direção de pose, atendimento direto e retratos que não parecem foto de crachá.",
      path: "/quem-e-o-ale",
      image: PORTRAIT,
      type: "article",
    }),
    links: [
      { rel: "canonical", href: `${SITE_ORIGIN}/quem-e-o-ale` },
      // O preload do retrato é emitido automaticamente pelo React a partir do
      // <img> eager fetchPriority="high"; declarar aqui duplicava a tag.
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE_ORIGIN}/quem-e-o-ale`,
          url: `${SITE_ORIGIN}/quem-e-o-ale`,
          inLanguage: "pt-BR",
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          // Definição única da entidade — src/data/person.ts, o mesmo nó
          // publicado no @graph do root.
          mainEntity: personSchema,
        }),
      },
    ],


  }),
  component: QuemEOAlePage,
});

function QuemEOAlePage() {
  const recentPosts = posts.slice(0, 3);
  const highlightCats = categories
    .filter((c) => c.cover)
    .slice(0, 6);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", to: "/" },
          { label: "Quem é o Alê" },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-16 md:px-8 md:py-24">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              Quem é o Alê
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
              Alexandre Machado — o fotógrafo por trás do Alê Fotógrafo
            </h1>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Conheça Alexandre Machado, o Alê Fotógrafo. 30 anos especializando
              em fotografia corporativa, com centenas de empresas atendidas em
              São Paulo e no Brasil.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <img
                src={imgUrl(PORTRAIT, 720)}
                srcSet={imgSrcSet(PORTRAIT, [480, 720, 1024])}
                sizes="(max-width: 768px) 100vw, 40vw"
                alt="Alexandre Machado, o Alê Fotógrafo — retrato do fotógrafo corporativo em São Paulo"
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

      {/* Fatos verificáveis: espelham o schema Person para leitura direta por
          pessoas e por mecanismos de IA, que leem o texto e não só o JSON-LD. */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ember">
            Ficha do profissional
          </h2>
          <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {personFacts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{fact.term}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Alexandre Machado, conhecido como Alê Fotógrafo, é fotógrafo
            profissional em São Paulo com mais de 30 anos de experiência,
            atendendo centenas de empresas com fotografia corporativa,
            retratos profissionais, cobertura de eventos e produção de vídeo
            institucional.
          </p>
          <p className="text-muted-foreground">
            Como fotógrafo profissional em São Paulo, seu trabalho é voltado
            para empresas e profissionais que precisam fortalecer sua imagem,
            transmitir autoridade e se posicionar com mais consistência no
            mercado. Ao longo de três décadas, já produziu imagens para
            empresas de diferentes segmentos, sempre com foco em resultado:
            gerar confiança, valor e percepção profissional.
          </p>
          <p className="text-muted-foreground">
            Sua atuação como fotógrafo corporativo em São Paulo é baseada em
            um método claro: entender o posicionamento do cliente, o público
            que será impactado e o objetivo da comunicação antes de iniciar
            qualquer produção. Isso garante que cada fotografia ou vídeo
            tenha intenção estratégica — e não apenas estética.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Método
          </p>
          <h2 className="mb-12 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
            Pilares do trabalho
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Estratégia",
                desc: "Cada foto tem intenção. Entendemos posicionamento e público antes do clique.",
              },
              {
                icon: Camera,
                title: "Técnica",
                desc: "30 anos de bagagem em iluminação, composição e pós-produção profissional.",
              },
              {
                icon: Zap,
                title: "Agilidade",
                desc: "Entrega rápida, organização de bastidores e respeito pelo seu tempo.",
              },
              {
                icon: Award,
                title: "Resultado",
                desc: "Imagens que convertem, transmitem autoridade e valorizam sua marca.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-sm border border-border bg-background p-6"
              >
                <p.icon className="text-ember" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">
              Especialidades
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              Onde o Alê atua
            </h2>
          </div>
          <Link
            to="/fotografo-corporativo"
            className="inline-flex items-center gap-2 text-sm text-ember hover:underline"
          >
            Ver todos os segmentos <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlightCats.map((c) => (
            <Link
              key={c.slug}
              to="/fotografo-corporativo/$slug"
              params={{ slug: c.slug }}
              className="group relative block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-all hover:ring-ember"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={imgUrl(c.cover!, 768)}
                  srcSet={imgSrcSet(c.cover!, [480, 768, 1024])}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  alt=""
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Do blog
          </p>
          <h2 className="mb-10 font-display text-3xl font-semibold md:text-4xl">
            Artigos escritos por Alexandre
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block rounded-sm border border-border bg-background p-6 transition-colors hover:border-ember"
              >
                {p.date && (
                  <time className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.date}
                  </time>
                )}
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-ember">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
          <h2 className="max-w-xl font-display text-3xl font-semibold md:text-4xl text-balance">
            Vamos conversar sobre seu próximo projeto?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="rounded-sm bg-ember px-7 py-4 font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Entrar em contato
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-border-strong px-7 py-4 font-medium hover:bg-surface"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
