import { createServerFn } from "@tanstack/react-start";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const PREFERRED_HOST = "alefotografos.com.br";

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
  .inputValidator((data: { days?: number } | undefined) => ({
    days: Math.min(Math.max(data?.days ?? 28, 7), 180),
  }))
  .handler(async ({ data }): Promise<GscReport> => {
    try {
      const h = headers();

      const sitesRes = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers: h });
      if (!sitesRes.ok) {
        return { ok: false, error: `Search Console (${sitesRes.status}): ${await sitesRes.text()}`, rows: [] };
      }
      const sites = (await sitesRes.json()) as { siteEntry?: { siteUrl: string }[] };
      const entries = sites.siteEntry ?? [];
      if (!entries.length) return { ok: false, error: "Nenhuma propriedade verificada na conta conectada.", rows: [] };

      const siteUrl =
        entries.find((e) => e.siteUrl.includes(PREFERRED_HOST) && !e.siteUrl.includes("www."))?.siteUrl ??
        entries.find((e) => e.siteUrl.includes(PREFERRED_HOST))?.siteUrl ??
        entries[0].siteUrl;

      const range = { start: daysAgo(data.days + 2), end: daysAgo(2) };

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
        return { ok: false, error: `Search Console (${res.status}): ${await res.text()}`, rows: [], siteUrl };
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
    } catch (e) {
      return { ok: false, error: e instanceof Error ? e.message : "Erro desconhecido", rows: [] };
    }
  });
