import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { MONITORED_SITEMAPS, MONITORED_URLS } from "@/lib/monitored-urls";
import {
  inspectUrl,
  listVerifiedSites,
  sitemapStatus,
  type InspectionResult,
  type SitemapStatus,
} from "@/lib/gsc.server";

export type MonitorRun = {
  ok: boolean;
  error?: string;
  siteUrl?: string;
  checkedAt?: string;
  urls: InspectionResult[];
  sitemaps: SitemapStatus[];
  saved?: number;
};

/** Roda uma leitura completa do estado de indexação e grava o snapshot semanal. */
export async function runIndexingSnapshot(persist = true): Promise<MonitorRun> {
  try {
    const candidates = await listVerifiedSites();
    if (!candidates.length) {
      return { ok: false, error: "Nenhuma propriedade verificada na conta conectada.", urls: [], sitemaps: [] };
    }

    // Escolhe a primeira propriedade que consegue inspecionar a home.
    let siteUrl = candidates[0];
    let probe = await inspectUrl(siteUrl, MONITORED_URLS[MONITORED_URLS.length - 1]);
    for (const candidate of candidates.slice(1)) {
      if (!probe.error) break;
      siteUrl = candidate;
      probe = await inspectUrl(siteUrl, MONITORED_URLS[MONITORED_URLS.length - 1]);
    }

    const urls: InspectionResult[] = [];
    for (const url of MONITORED_URLS) {
      urls.push(await inspectUrl(siteUrl, url));
    }

    const sitemaps: SitemapStatus[] = [];
    for (const sm of MONITORED_SITEMAPS) {
      sitemaps.push(await sitemapStatus(siteUrl, sm));
    }

    const checkedAt = new Date().toISOString();
    let saved = 0;
    if (persist) {
      const rows = urls.map((u) => ({
        url: u.url,
        site_url: siteUrl,
        verdict: u.verdict ?? null,
        coverage_state: u.coverageState ?? null,
        robots_state: u.robotsState ?? null,
        indexing_state: u.indexingState ?? null,
        last_crawl: u.lastCrawl ?? null,
        canonical_google: u.canonicalGoogle ?? null,
        canonical_user: u.canonicalUser ?? null,
        error: u.error ?? null,
        checked_at: checkedAt,
      }));
      const { error } = await supabaseAdmin.from("indexing_snapshots").insert(rows);
      if (error) return { ok: false, error: error.message, siteUrl, urls, sitemaps, checkedAt };
      saved = rows.length;
    }

    return { ok: true, siteUrl, checkedAt, urls, sitemaps, saved };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Erro desconhecido",
      urls: [],
      sitemaps: [],
    };
  }
}

export type SnapshotRow = {
  url: string;
  verdict: string | null;
  coverage_state: string | null;
  last_crawl: string | null;
  canonical_google: string | null;
  checked_at: string;
};

export async function readSnapshotHistory(weeks = 12): Promise<SnapshotRow[]> {
  const since = new Date();
  since.setUTCDate(since.getUTCDate() - weeks * 7);
  const { data, error } = await supabaseAdmin
    .from("indexing_snapshots")
    .select("url, verdict, coverage_state, last_crawl, canonical_google, checked_at")
    .gte("checked_at", since.toISOString())
    .order("checked_at", { ascending: false })
    .limit(2000);
  if (error) throw new Error(error.message);
  return (data ?? []) as SnapshotRow[];
}
