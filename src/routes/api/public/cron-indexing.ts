import { createFileRoute } from "@tanstack/react-router";

function unauthorized() {
  return new Response("Unauthorized", { status: 401 });
}

/**
 * Endpoint do agendador semanal: grava um snapshot do estado de indexação
 * das URLs monitoradas no Search Console.
 * Protegido por segredo enviado no header `x-cron-secret`.
 */
export const Route = createFileRoute("/api/public/cron-indexing")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const provided = request.headers.get("x-cron-secret") ?? "";
        if (!provided) return unauthorized();

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: tokenRow } = await supabaseAdmin
          .from("cron_tokens")
          .select("token")
          .eq("name", "indexing")
          .maybeSingle();

        const accepted = [process.env.INDEXING_CRON_SECRET, tokenRow?.token].filter(
          (v): v is string => typeof v === "string" && v.length > 0,
        );
        if (!accepted.length) return new Response("Not configured", { status: 503 });
        if (!accepted.some((s) => s.length === provided.length && s === provided)) return unauthorized();

        const { runIndexingSnapshot } = await import("@/lib/indexing-monitor.server");
        const result = await runIndexingSnapshot(true);

        return new Response(JSON.stringify(result), {
          status: result.ok ? 200 : 502,
          headers: { "Content-Type": "application/json" },
        });
      },

    },
  },
});
