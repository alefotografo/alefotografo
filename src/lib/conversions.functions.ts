import { createServerFn } from "@tanstack/react-start";

export const CONVERSION_TYPES = ["whatsapp", "telefone", "email", "formulario"] as const;
export type ConversionType = (typeof CONVERSION_TYPES)[number];

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed.length ? trimmed : null;
}

/**
 * Registra uma ação de contato do visitante (WhatsApp, telefone, e-mail, formulário).
 * Não guarda nome, e-mail, IP ou qualquer dado pessoal — apenas tipo, página,
 * referenciador e um identificador anônimo de sessão gerado no navegador.
 */
export const trackConversion = createServerFn({ method: "POST" })
  .inputValidator((data: { type: string; path?: string; referrer?: string; sessionId?: string }) => {
    const type = CONVERSION_TYPES.find((t) => t === data?.type);
    if (!type) throw new Error("Tipo de conversão inválido.");
    return {
      type,
      path: clean(data?.path, 300) ?? "/",
      referrer: clean(data?.referrer, 300),
      sessionId: clean(data?.sessionId, 64),
    };
  })
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("conversion_events").insert({
      event_type: data.type,
      path: data.path,
      referrer: data.referrer,
      session_id: data.sessionId,
    });
    if (error) return { ok: false as const };
    return { ok: true as const };
  });
