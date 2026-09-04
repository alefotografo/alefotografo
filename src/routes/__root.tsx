import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
// Fontes críticas pré-carregadas: sem isso o swap tardio gerava CLS (~0,09) na home.
import fontBody400 from "@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2?url";
import fontBody500 from "@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2?url";
import fontDisplay600 from "@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsappCta } from "../components/site/WhatsappCta";
import { TestimonialsCarousel } from "../components/site/TestimonialsCarousel";
import { LazySection } from "../components/site/LazySection";
import { DeferredAnalytics } from "../components/site/DeferredAnalytics";
import { site } from "../data/catalog";
import { aggregateRatingSchema } from "../data/reviews";


function NotFoundComponent() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center md:px-8">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-ember">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Página não encontrada</h1>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          O conteúdo que você procura foi movido ou nunca existiu. Talvez alguma destas páginas ajude:
        </p>
        <ul className="mt-8 grid w-full gap-3 sm:grid-cols-2">
          <li>
            <Link to="/fotografo-corporativo" className="block rounded-sm border border-border bg-surface p-4 text-left hover:border-ember">
              <span className="text-xs uppercase tracking-wider text-ember">Fotos</span>
              <p className="mt-1 font-display font-semibold">Galeria por segmento</p>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="block rounded-sm border border-border bg-surface p-4 text-left hover:border-ember">
              <span className="text-xs uppercase tracking-wider text-ember">Blog</span>
              <p className="mt-1 font-display font-semibold">Artigos sobre fotografia</p>
            </Link>
          </li>
          <li>
            <Link to="/quem-e-o-ale" className="block rounded-sm border border-border bg-surface p-4 text-left hover:border-ember">
              <span className="text-xs uppercase tracking-wider text-ember">Sobre</span>
              <p className="mt-1 font-display font-semibold">Quem é o Alê</p>
            </Link>
          </li>
          <li>
            <Link to="/contato" className="block rounded-sm border border-border bg-surface p-4 text-left hover:border-ember">
              <span className="text-xs uppercase tracking-wider text-ember">Contato</span>
              <p className="mt-1 font-display font-semibold">Solicitar orçamento</p>
            </Link>
          </li>
        </ul>
        <Link
          to="/"
          className="mt-10 inline-flex rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
        >
          Voltar para o início
        </Link>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Tente recarregar ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm bg-ember px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-sm border border-border px-4 py-2 text-sm">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a1a1a" },
      { name: "google-site-verification", content: "v9fgg9CFkZcU72isBJ8We8unyyHJmM9vtA140QnDzpY" },
      { name: "author", content: "Alexandre Machado" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:site", content: "@alefotografo" },
      { title: site.name },
      { name: "description", content: "Alexandre Machado fotografa pessoalmente retratos profissionais, headshots para LinkedIn e fotos de executivos e equipes em São Paulo. 30 anos de carreira." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "llms.txt", href: "/llms.txt", type: "text/plain" },
      // Feed anunciado em todas as páginas: agregadores e crawlers de IA
      // descobrem publicação nova sem passar pelo hub /blog.
      { rel: "alternate", type: "application/rss+xml", title: "Alê Fotógrafo — Blog RSS", href: "https://www.alefotografo.com.br/blog/rss.xml" },
      { rel: "preload", as: "font", type: "font/woff2", href: fontBody400, crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: fontBody500, crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: fontDisplay600, crossOrigin: "anonymous" },
      // Site monolíngue (lang="pt-BR" no <html>): sem hreflang, que antes
      // apontava toda página para a home e conflitava com o canonical.
      { rel: "preconnect", href: "https://images.weserv.nl", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://images.weserv.nl" },
      { rel: "dns-prefetch", href: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com" },
      { rel: "dns-prefetch", href: "https://i.ytimg.com" },
      { rel: "dns-prefetch", href: "https://www.youtube-nocookie.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["PhotographyBusiness", "LocalBusiness"],
              "@id": "https://www.alefotografo.com.br/#business",
              name: site.fullName,
              alternateName: site.name,
              legalName: "Alexandre Machado Fotografia",
              taxID: site.cnpj,
              description: site.description,
              slogan: site.tagline,
              image:
                "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
              url: "https://www.alefotografo.com.br",
              telephone: "+55-11-91355-0533",
              email: site.email,
              foundingDate: String(site.foundingYear),
              currenciesAccepted: "BRL",
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: site.address.locality,
                addressRegion: site.address.region,
                postalCode: site.address.postalCode,
                addressCountry: site.address.country,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: site.geo.lat,
                longitude: site.geo.lon,
              },
              hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lon}`,
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "São Paulo" },
                { "@type": "City", name: "Santo André" },
                { "@type": "City", name: "São Bernardo do Campo" },
                { "@type": "City", name: "São Caetano do Sul" },
                { "@type": "City", name: "Diadema" },
                { "@type": "City", name: "Barueri" },
              ],
              knowsLanguage: ["pt-BR", "en"],
              knowsAbout: [
                "Retrato corporativo",
                "Headshot profissional",
                "Foto para LinkedIn",
                "Retrato executivo",
                "Fotografia de equipe em escritório",
                "Direção de pose",
              ],
              founder: { "@id": "https://www.alefotografo.com.br/quem-e-o-ale#person" },
              employee: { "@id": "https://www.alefotografo.com.br/quem-e-o-ale#person" },
              sameAs: [site.instagram, site.linkedin, "https://alefotografos.com.br"],
              aggregateRating: aggregateRatingSchema,
              // Avaliações reais publicadas por clientes no Perfil da Empresa
              // no Google — mesma fonte da nota agregada.
              review: reviewSchema,

              priceRange: "$$",
              makesOffer: [
                "Fotografia corporativa",
                "Retrato executivo e foto para LinkedIn",
                "Fotografia de eventos corporativos",
                "Fotografia de produto",
                "Vídeo corporativo e institucional",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name, provider: { "@id": "https://www.alefotografo.com.br/#business" } },
              })),
            },
            {
              // Entidade principal do domínio: Alexandre Machado. Nó único,
              // referenciado por @id em todas as páginas (autor dos posts,
              // fundador do negócio, mainEntity das páginas de trajetória).
              "@type": "Person",
              "@id": "https://www.alefotografo.com.br/quem-e-o-ale#person",
              name: "Alexandre Machado",
              alternateName: ["Alê Fotógrafo", "Alê"],
              jobTitle: "Fotógrafo de retrato corporativo",
              description:
                "Fotógrafo em São Paulo com mais de 30 anos de carreira. Fotografa pessoalmente retratos corporativos, headshots para LinkedIn, retratos de executivos, médicos e advogados, e dirige produções audiovisuais institucionais.",
              image:
                "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
              url: "https://www.alefotografo.com.br/quem-e-o-ale",
              mainEntityOfPage: { "@id": "https://www.alefotografo.com.br/quem-e-o-ale" },
              worksFor: { "@id": "https://www.alefotografo.com.br/#business" },
              founderOf: { "@id": "https://www.alefotografo.com.br/#business" },
              knowsLanguage: ["pt-BR", "en"],
              knowsAbout: [
                "Retrato corporativo",
                "Retrato executivo",
                "Foto profissional",
                "Foto para LinkedIn",
                "Headshot profissional",
                "Retratos de médicos",
                "Retratos de advogados",
                "Retrato de CEOs e C-levels",
                "Direção de pose",
                "Iluminação de retrato",
                "Fotografia corporativa em São Paulo",
                "Direção de vídeo institucional",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Fotógrafo corporativo",
                occupationLocation: { "@type": "City", name: "São Paulo" },
                skills:
                  "Retrato corporativo, retrato executivo, headshot para LinkedIn, direção de pose, iluminação de estúdio e locação, direção de vídeo institucional",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: site.address.locality,
                addressRegion: site.address.region,
                postalCode: site.address.postalCode,
                addressCountry: site.address.country,
              },
              sameAs: [site.instagram, site.linkedin],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.alefotografo.com.br/#website",
              url: "https://www.alefotografo.com.br",
              name: site.name,
              inLanguage: "pt-BR",
              publisher: { "@id": "https://www.alefotografo.com.br/#business" },
              author: { "@id": "https://www.alefotografo.com.br/quem-e-o-ale#person" },
            },

          ],
        }),
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideTestimonials = pathname.replace(/\/+$/, "") === "/depoimentos";

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="conteudo" className="pb-24 md:pb-0">
        <Outlet />
      </main>
      {!hideTestimonials && (
        <LazySection minHeight={320} rootMargin="300px">
          <TestimonialsCarousel />
        </LazySection>
      )}
      {/* Rodapé fica no HTML (links internos importam para indexação) */}
      <Footer />
      <WhatsappCta />
      <DeferredAnalytics />
    </QueryClientProvider>
  );
}

