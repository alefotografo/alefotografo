import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const PREFERRED_HOST = "alefotografo.com.br";

export type GscRow = {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export type GscReport = {
  ok: boolean;
  error?: string;
  siteUrl?: string;
  range?: { start: string; end: string };
  rows: GscRow[];
};

function headers() {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const connKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovableKey || !connKey) throw new Error("Conexão do Google Search Console não configurada.");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connKey,
    "Content-Type": "application/json",
  };
}

function daysAgo(n: number) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

export const getIndexingReport = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { days?: number } | undefined) => ({
    days: Math.min(Math.max(data?.days ?? 28, 7), 180),
  }))
  .handler(async ({ data, context }): Promise<GscReport> => {
    try {
      const { assertAdmin } = await import("@/lib/authz.server");
      await assertAdmin(context.supabase);

      const h = headers();

      const sitesRes = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers: h });
      if (!sitesRes.ok) {
        return { ok: false, error: `Search Console (${sitesRes.status}): ${await sitesRes.text()}`, rows: [] };
      }
      const sites = (await sitesRes.json()) as { siteEntry?: { siteUrl: string }[] };
      const entries = sites.siteEntry ?? [];
      if (!entries.length) return { ok: false, error: "Nenhuma propriedade verificada na conta conectada.", rows: [] };

      const score = (u: string) => {
        let s = 0;
        if (u.includes(`www.${PREFERRED_HOST}`)) s += 12; // canônico atual: com www
        if (u.includes(PREFERRED_HOST)) s += 6;
        if (u.startsWith("https://")) s += 4; // prefixo de URL costuma ter permissão
        return s;
      };

      const candidates = [...entries.map((e) => e.siteUrl)].sort((a, b) => score(b) - score(a));

      const range = { start: daysAgo(data.days + 2), end: daysAgo(2) };
      let lastError = "";

      for (const siteUrl of candidates) {
        const res = await fetch(
          `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
          {
            method: "POST",
            headers: h,
            body: JSON.stringify({
              startDate: range.start,
              endDate: range.end,
              dimensions: ["page"],
              rowLimit: 5000,
            }),
          },
        );
        if (!res.ok) {
          lastError = `Search Console (${res.status}) em ${siteUrl}: ${await res.text()}`;
          continue; // sem permissão nessa propriedade — tenta a próxima
        }
        const json = (await res.json()) as {
          rows?: { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[];
        };
        const rows: GscRow[] = (json.rows ?? []).map((r) => ({
          page: r.keys[0],
          clicks: r.clicks ?? 0,
          impressions: r.impressions ?? 0,
          ctr: r.ctr ?? 0,
          position: r.position ?? 0,
        }));
        return { ok: true, siteUrl, range, rows };
      }

      return { ok: false, error: lastError || "Nenhuma propriedade acessível.", rows: [] };

    } catch (e) {
      return { ok: false, error: e instanceof Error ? e.message : "Erro desconhecido", rows: [] };
    }
  });
