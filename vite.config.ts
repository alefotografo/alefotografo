// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { bairros } from "./src/data/bairros";

// Páginas com HTML idêntico para todo visitante: geradas no build e servidas
// como arquivo estático pela borda (TTFB ~50ms em vez de 1,2s de SSR).
// Nada de área logada aqui — e autoStaticPathsDiscovery fica desligado para
// que /auth e /admin/* nunca entrem por descoberta automática.
const staticPages = [
  "/",
  "/servicos",
  "/quem-e-o-ale",
  "/sobre",
  "/contato",
  "/faq",
  "/depoimentos",
  "/foto-profissional",
  "/foto-profissional-para-linkedin",
  "/fotografia-executiva",
  "/fotografia-para-advogados",
  "/fotografia-para-clinicas",
  "/fotografo-de-feira-de-negocios",
  "/fotografo-empresarial",
  "/fotos-corporativas",
  "/fotos-profissionais-medicos",
  "/eventos-corporativos",
  "/fotografo-corporativo",
  "/fotografo-corporativo-em",
  "/blog",
  "/videos",
  "/portfolio",
  ...bairros.map((b) => `/fotografo-corporativo-em/${b.slug}`),
].map((path) => ({ path }));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: staticPages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },

  vite: {
    build: {
      target: "es2020",
      minify: "esbuild",
      rollupOptions: {
        output: {
          // Divide o bundle do cliente: dependências estáveis (React, router,
          // Radix, ícones) ficam em chunks próprios e cacheáveis, separados do
          // catálogo de dados, reduzindo o JS analisado no primeiro carregamento.
          manualChunks(id: string) {
            // Nada de agrupar src/data: cada rota carrega apenas o recorte de
            // catálogo que usa, e um chunk único somaria centenas de KB na home.
            if (!id.includes("node_modules")) return undefined;

            if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "vendor-react";
            if (id.includes("node_modules/@tanstack/")) return "vendor-tanstack";
            if (id.includes("node_modules/@radix-ui/")) return "vendor-radix";
            if (id.includes("node_modules/lucide-react/")) return "vendor-icons";
            if (id.includes("node_modules/@supabase/")) return "vendor-supabase";
            if (id.includes("node_modules/embla-carousel")) return "vendor-carousel";
            if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-"))
              return "vendor-charts";
            return undefined;
          },
        },
      },
    },
  },
});
