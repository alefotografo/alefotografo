// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    build: {
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
