import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, posts, site, videos } from "@/data/catalog";
import { buildMeta } from "@/lib/seo";
import { Camera, Video, Users, ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { faqs, faqJsonLd } from "@/lib/faqs";

const homeFaqs = faqs.slice(0, 6);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Fotógrafo Corporativo em São Paulo | Alê Fotógrafo",
      description: site.description,
      path: "/",
    }),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(homeFaqs)),
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
  const heroImg = hero?.cover ?? "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG";

  return (
    <>
      {/* Hero — full-bleed featured image */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt={hero ? `Fotografia corporativa — ${hero.title}` : "Fotografia corporativa em São Paulo"}
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
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-7xl">
              Fotografia e vídeo que <span className="gradient-text-ember">posicionam sua marca</span> com autoridade.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg text-pretty">
              Retratos corporativos, fotografia para empresas, cobertura de eventos e vídeo institucional em São Paulo e Brasil.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-ember-glow"
              >
                Solicitar orçamento
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/fotografo-corporativo"
                className="inline-flex items-center gap-2 rounded-sm border border-border-strong bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur-sm hover:bg-surface"
              >
                Ver portfólio
              </Link>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experiência</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">30+ anos</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Empresas</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">500+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Segmentos</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{categories.length}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden md:grid-cols-3">
          {[
            { icon: Camera, title: "Fotografia corporativa", desc: "Retratos profissionais, equipes, ambientes e produtos para fortalecer sua marca." },
            { icon: Users, title: "Cobertura de eventos", desc: "Registros estratégicos para palestras, kick-offs, lançamentos e convenções." },
            { icon: Video, title: "Vídeo institucional", desc: "Vídeos corporativos, depoimentos e conteúdo audiovisual para empresas." },
          ].map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <s.icon className="text-ember" size={28} strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quem está por trás — retrato do Alê */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface ring-1 ring-border-strong">
              <img
                src="https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG"
                alt="Alexandre Machado, fotógrafo corporativo em São Paulo"
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

      {/* Portfolio preview */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ember">Portfólio</p>
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
                  src={c.cover!}
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
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: "Leandro Capolupo", role: "Gerente de Planejamento Financeiro", text: "Profissional super ágil, competente e focado na qualidade. O resultado foi ótimo." },
              { name: "Maria Clara Cardoso", role: "Psicóloga e Palestrante", text: "Alexandre fez minhas fotos profissionais e o resultado foi incrível. Pontualidade, compromisso e amor ao trabalho marcam o profissional." },
            ].map((t) => (
              <figure key={t.name} className="rounded-sm border border-border bg-background p-7">
                <blockquote className="text-base leading-relaxed text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
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
              Atendimento em toda Grande São Paulo. Entrega rápida e foco em resultado.
            </p>
          </div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-sm bg-ember px-7 py-4 font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
