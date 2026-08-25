import type { SupabaseClient } from "@supabase/supabase-js";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const PREFERRED_HOST = "www.alefotografo.com.br";

export type SearchTotals = { clicks: number; impressions: number; ctr: number; position: number };
export type DayRow = { date: string; clicks: number; impressions: number };
export type PageRow = { page: string; clicks: number; impressions: number; ctr: number; position: number };
export type QueryRow = { query: string; clicks: number; impressions: number; ctr: number; position: number };

export type ConversionTotals = {
  total: number;
  byType: { type: string; count: number }[];
  byDay: { date: string; count: number }[];
  byPath: { path: string; count: number }[];
};

export type PerformanceReport = {
  days: number;
  range: { start: string; end: string };
  previousRange: { start: string; end: string };
  search: {
    ok: boolean;
    error?: string;
    siteUrl?: string;
    totals: SearchTotals;
    previousTotals: SearchTotals;
    byDay: DayRow[];
    pages: PageRow[];
    queries: QueryRow[];
  };
  conversions: {
    ok: boolean;
    error?: string;
    current: ConversionTotals;
    previousTotal: number;
  };
};

function headers() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connKey = process.env["GOOGLE_SEARCH_CONSOLE_API_KEY"];
  if (!lovableKey || !connKey) throw new Error("Conexão do Google Search Console não configurada.");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connKey,
    "Content-Type": "application/json",
  };
}

function dayISO(offset: number) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - offset);
  return d.toISOString().slice(0, 10);
}

const EMPTY_TOTALS: SearchTotals = { clicks: 0, impressions: 0, ctr: 0, position: 0 };

function sumTotals(rows: { clicks: number; impressions: number; position: number }[]): SearchTotals {
  const clicks = rows.reduce((a, r) => a + r.clicks, 0);
  const impressions = rows.reduce((a, r) => a + r.impressions, 0);
  const weighted = rows.reduce((a, r) => a + r.position * r.impressions, 0);
  return {
    clicks,
    impressions,
    ctr: impressions ? clicks / impressions : 0,
    position: impressions ? weighted / impressions : 0,
  };
}

type GscApiRow = { keys?: string[]; clicks?: number; impressions?: number; ctr?: number; position?: number };

async function query(
  siteUrl: string,
  body: Record<string, unknown>,
  h: Record<string, string>,
): Promise<GscApiRow[]> {
  const res = await fetch(
    `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    { method: "POST", headers: h, body: JSON.stringify(body) },
  );
  if (!res.ok) throw new Error(`Search Console (${res.status}): ${await res.text()}`);
  const json = (await res.json()) as { rows?: GscApiRow[] };
  return json.rows ?? [];
}

async function resolveSite(h: Record<string, string>) {
  const res = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers: h });
  if (!res.ok) throw new Error(`Search Console (${res.status}): ${await res.text()}`);
  const json = (await res.json()) as { siteEntry?: { siteUrl: string; permissionLevel?: string }[] };
  const entries = (json.siteEntry ?? []).filter((e) => e.permissionLevel !== "siteUnverifiedUser");
  if (!entries.length) throw new Error("Nenhuma propriedade verificada na conta conectada.");
  const score = (u: string) => {
    let s = 0;
    if (u.includes(PREFERRED_HOST)) s += 12;
    if (u.includes("alefotografo.com.br")) s += 6;
    if (u.startsWith("https://")) s += 4;
    return s;
  };
  return entries.map((e) => e.siteUrl).sort((a, b) => score(b) - score(a));
}

async function searchSection(days: number) {
  const range = { start: dayISO(days + 2), end: dayISO(2) };
  const previousRange = { start: dayISO(days * 2 + 2), end: dayISO(days + 3) };

  try {
    const h = headers();
    const candidates = await resolveSite(h);
    let lastError = "";

    for (const siteUrl of candidates) {
      try {
        const base = { startDate: range.start, endDate: range.end };
        const [dateRows, pageRows, queryRows, prevRows] = await Promise.all([
          query(siteUrl, { ...base, dimensions: ["date"], rowLimit: 500 }, h),
          query(siteUrl, { ...base, dimensions: ["page"], rowLimit: 2000 }, h),
          query(siteUrl, { ...base, dimensions: ["query"], rowLimit: 2000 }, h),
          query(
            siteUrl,
            { startDate: previousRange.start, endDate: previousRange.end, dimensions: ["date"], rowLimit: 500 },
            h,
          ),
        ]);

        const byDay: DayRow[] = dateRows
          .map((r) => ({
            date: r.keys?.[0] ?? "",
            clicks: r.clicks ?? 0,
            impressions: r.impressions ?? 0,
          }))
          .sort((a, b) => a.date.localeCompare(b.date));

        const norm = <T extends string>(rows: GscApiRow[], key: T) =>
          rows.map((r) => ({
            [key]: r.keys?.[0] ?? "",
            clicks: r.clicks ?? 0,
            impressions: r.impressions ?? 0,
            ctr: r.ctr ?? 0,
            position: r.position ?? 0,
          }));

        return {
          range,
          previousRange,
          search: {
            ok: true,
            siteUrl,
            totals: sumTotals(
              dateRows.map((r) => ({
                clicks: r.clicks ?? 0,
                impressions: r.impressions ?? 0,
                position: r.position ?? 0,
              })),
            ),
            previousTotals: sumTotals(
              prevRows.map((r) => ({
                clicks: r.clicks ?? 0,
                impressions: r.impressions ?? 0,
                position: r.position ?? 0,
              })),
            ),
            byDay,
            pages: norm(pageRows, "page") as unknown as PageRow[],
            queries: norm(queryRows, "query") as unknown as QueryRow[],
          },
        };
      } catch (e) {
        lastError = e instanceof Error ? e.message : "Erro desconhecido";
      }
    }
    throw new Error(lastError || "Nenhuma propriedade acessível.");
  } catch (e) {
    return {
      range,
      previousRange,
      search: {
        ok: false,
        error: e instanceof Error ? e.message : "Erro desconhecido",
        totals: EMPTY_TOTALS,
        previousTotals: EMPTY_TOTALS,
        byDay: [] as DayRow[],
        pages: [] as PageRow[],
        queries: [] as QueryRow[],
      },
    };
  }
}

async function conversionsSection(days: number) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const start = new Date();
  start.setUTCDate(start.getUTCDate() - days);
  const prevStart = new Date();
  prevStart.setUTCDate(prevStart.getUTCDate() - days * 2);

  const { data, error } = await supabaseAdmin
    .from("conversion_events")
    .select("event_type, path, created_at")
    .gte("created_at", prevStart.toISOString())
    .order("created_at", { ascending: false })
    .limit(20000);

  if (error) {
    return {
      ok: false,
      error: error.message,
      current: { total: 0, byType: [], byDay: [], byPath: [] } as ConversionTotals,
      previousTotal: 0,
    };
  }

  const rows = (data ?? []) as { event_type: string; path: string; created_at: string }[];
  const startISO = start.toISOString();
  const current = rows.filter((r) => r.created_at >= startISO);
  const previous = rows.filter((r) => r.created_at < startISO);

  const count = <K extends string>(list: { [key: string]: unknown }[], key: K) => {
    const map = new Map<string, number>();
    for (const row of list) {
      const k = String(row[key] ?? "");
      map.set(k, (map.get(k) ?? 0) + 1);
    }
    return [...map.entries()].map(([k, v]) => ({ key: k, count: v })).sort((a, b) => b.count - a.count);
  };

  const byDayMap = new Map<string, number>();
  for (let i = days - 1; i >= 0; i--) {
    byDayMap.set(dayISO(i), 0);
  }
  for (const row of current) {
    const d = row.created_at.slice(0, 10);
    if (byDayMap.has(d)) byDayMap.set(d, (byDayMap.get(d) ?? 0) + 1);
  }

  return {
    ok: true,
    current: {
      total: current.length,
      byType: count(current, "event_type").map((r) => ({ type: r.key, count: r.count })),
      byDay: [...byDayMap.entries()].map(([date, c]) => ({ date, count: c })),
      byPath: count(current, "path")
        .slice(0, 20)
        .map((r) => ({ path: r.key, count: r.count })),
    } as ConversionTotals,
    previousTotal: previous.length,
  };
}

export async function getPerformanceReportForDays(
  supabase: SupabaseClient<any, any, any>,
  days: number,
): Promise<PerformanceReport> {
  const { assertAdmin } = await import("@/lib/authz.server");
  await assertAdmin(supabase);

  const [searchPart, conversions] = await Promise.all([searchSection(days), conversionsSection(days)]);

  return {
    days,
    range: searchPart.range,
    previousRange: searchPart.previousRange,
    search: searchPart.search as PerformanceReport["search"],
    conversions: conversions as PerformanceReport["conversions"],
  };
}
