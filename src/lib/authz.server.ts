import type { SupabaseClient } from "@supabase/supabase-js";

export const FORBIDDEN_MESSAGE = "Acesso restrito: apenas administradores.";

/**
 * Confirma que o usuário autenticado é administrador.
 *
 * A checagem usa o cliente autenticado do próprio usuário (RLS ativo) lendo a
 * tabela de papéis — nunca o cliente admin, que ignora RLS e não pode ser usado
 * para decidir permissão. Não existe função SECURITY DEFINER exposta na API
 * para usuários logados chamarem.
 *
 * A lista `admin_emails` continua funcionando como semente: na primeira vez que
 * um e-mail autorizado entra, o papel `admin` é gravado em `user_roles`.
 */
export async function assertAdmin(supabase: SupabaseClient<any, any, any>) {
  const { data: roles, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("role", "admin")
    .limit(1);

  if (error) throw new Error(FORBIDDEN_MESSAGE);
  if (roles && roles.length > 0) return;

  // Semente: e-mail presente em admin_emails recebe o papel admin.
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  const email = user?.email;
  if (!user || !email) throw new Error(FORBIDDEN_MESSAGE);

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data: allowed } = await supabaseAdmin
    .from("admin_emails")
    .select("email")
    .ilike("email", email)
    .maybeSingle();

  if (!allowed) throw new Error(FORBIDDEN_MESSAGE);

  const { error: grantError } = await supabaseAdmin
    .from("user_roles")
    .insert({ user_id: user.id, role: "admin" });
  if (grantError && !grantError.message.includes("duplicate")) {
    throw new Error(FORBIDDEN_MESSAGE);
  }
}
