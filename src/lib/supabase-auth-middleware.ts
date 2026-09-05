import { createMiddleware } from "@tanstack/react-start";

/**
 * Substitui o `attachSupabaseAuth` gerado: mesmo comportamento (anexa o bearer
 * token do usuário nas chamadas de server function), mas o cliente Supabase é
 * importado dinamicamente. Sem isso, ~200 KB de JS de autenticação entravam no
 * bundle de entrada de todas as páginas públicas, que nunca chamam serverFn.
 */
export const attachSupabaseAuthLazy = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },
);
