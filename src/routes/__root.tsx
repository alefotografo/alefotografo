import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsappCta } from "../components/site/WhatsappCta";
import { site } from "../data/catalog";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-ember">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold">Página não encontrada</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            O conteúdo que você procura foi movido ou nunca existiu.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-sm bg-ember px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Voltar para o início
          </Link>
        </div>
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
      { title: "Alê Fotógrafo — Fotografia Corporativa e Retratos Profissionais em SP" },
      { property: "og:title", content: "Alê Fotógrafo — Fotografia Corporativa e Retratos Profissionais em SP" },
      { name: "twitter:title", content: "Alê Fotógrafo — Fotografia Corporativa e Retratos Profissionais em SP" },
      { name: "description", content: "Alê Fotógrafo Revamped is a modern, SEO-optimized website showcasing photography services." },
      { property: "og:description", content: "Alê Fotógrafo Revamped is a modern, SEO-optimized website showcasing photography services." },
      { name: "twitter:description", content: "Alê Fotógrafo Revamped is a modern, SEO-optimized website showcasing photography services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a5a4fdc-b255-4f09-8088-c92014440653/id-preview-bd6bb498--2dc765d9-205e-4d9f-bfdd-b63c09176756.lovable.app-1780579928643.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3a5a4fdc-b255-4f09-8088-c92014440653/id-preview-bd6bb498--2dc765d9-205e-4d9f-bfdd-b63c09176756.lovable.app-1780579928643.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://i.ytimg.com" },
      { rel: "dns-prefetch", href: "https://www.youtube-nocookie.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://alefotografo.com.br/#business",
          name: site.fullName,
          alternateName: site.name,
          description: site.description,
          image: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PaginaConteudo/alexandre-machado-1.JPG",
          url: "https://alefotografo.com.br",
          telephone: "+5511",
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          areaServed: ["São Paulo", "Grande São Paulo", "Brasil"],
          founder: { "@type": "Person", name: "Alexandre Machado" },
          sameAs: [site.instagram, site.linkedin],
          priceRange: "$$",
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

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="conteudo" className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsappCta />
    </QueryClientProvider>
  );
}
