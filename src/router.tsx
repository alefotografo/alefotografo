import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // URL canônica com barra final (mesmo padrão do sitemap e dos canonicals).
    // Sem isso o router redireciona /blog/ -> /blog e briga com o
    // redirectTrailingSlash de src/server.ts (loop 301).
    trailingSlash: "always",
  });

  return router;
};
