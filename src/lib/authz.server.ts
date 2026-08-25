import type { SupabaseClient } from "@supabase/supabase-js";

export const FORBIDDEN_MESSAGE = "Acesso restrito: apenas administradores.";

/**
 * Confirma que o usuário autenticado é administrador.
 *
 * A checagem usa o cliente autenticado do próprio usuário (RLS ativo) e a
 * função `is_admin()` do banco — nunca o cliente admin, que ignora RLS e não
 * pode ser usado para decidir permissão.
 */
export async function assertAdmin(supabase: SupabaseClient<any, any, any>) {
  const { data, error } = await supabase.rpc("is_admin");
  if (error) throw new Error(FORBIDDEN_MESSAGE);
  if (data !== true) throw new Error(FORBIDDEN_MESSAGE);
}
