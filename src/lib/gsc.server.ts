const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const PREFERRED_HOST = "www.alefotografo.com.br";

export type InspectionResult = {
  url: string;
  verdict?: string;
  coverageState?: string;
  robotsState?: string;
  indexingState?: string;
  lastCrawl?: string | null;
  canonicalGoogle?: string;
  canonicalUser?: string;
  error?: string;
};

export type SitemapStatus = {
  path: string;
  isPending?: boolean;
  lastSubmitted?: string;
  lastDownloaded?: string;
  errors?: number;
  warnings?: number;
  submitted?: number;
  indexed?: number;
  error?: string;
};

export function gscHeaders() {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const connKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovableKey || !connKey) throw new Error("Conexão do Google Search Console não configurada.");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connKey,
    "Content-Type": "application/json",
  };
}

/** Lista as propriedades verificadas e devolve as candidatas em ordem de preferência (www primeiro). */
export async function listVerifiedSites(): Promise<string[]> {
  const res = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers: gscHeaders() });
  if (!res.ok) throw new Error(`Search Console (${res.status}): ${await res.text()}`);
  const json = (await res.json()) as { siteEntry?: { siteUrl: string; permissionLevel?: string }[] };
  const entries = (json.siteEntry ?? []).filter((e) => e.permissionLevel !== "siteUnverifiedUser");
  const score = (u: string) => {
    let s = 0;
    if (u.includes(PREFERRED_HOST)) s += 12; // canônico atual: com www
    if (u.includes("alefotografo.com.br")) s += 6;
    if (u.startsWith("https://")) s += 4;
    if (u.startsWith("sc-domain:")) s += 1;
    return s;
  };
  return entries.map((e) => e.siteUrl).sort((a, b) => score(b) - score(a));
}

export async function inspectUrl(siteUrl: string, inspectionUrl: string): Promise<InspectionResult> {
  try {
    const res = await fetch(`${GATEWAY}/v1/urlInspection/index:inspect`, {
      method: "POST",
      headers: gscHeaders(),
      body: JSON.stringify({ inspectionUrl, siteUrl, languageCode: "pt-BR" }),
    });
    if (!res.ok) {
      return { url: inspectionUrl, error: `URL Inspection (${res.status}): ${await res.text()}` };
    }
    const json = (await res.json()) as {
      inspectionResult?: {
        indexStatusResult?: {
          verdict?: string;
          coverageState?: string;
          robotsTxtState?: string;
          indexingState?: string;
          lastCrawlTime?: string;
          googleCanonical?: string;
          userCanonical?: string;
        };
      };
    };
    const r = json.inspectionResult?.indexStatusResult ?? {};
    return {
      url: inspectionUrl,
      verdict: r.verdict,
      coverageState: r.coverageState,
      robotsState: r.robotsTxtState,
      indexingState: r.indexingState,
      lastCrawl: r.lastCrawlTime ?? null,
      canonicalGoogle: r.googleCanonical,
      canonicalUser: r.userCanonical,
    };
  } catch (e) {
    return { url: inspectionUrl, error: e instanceof Error ? e.message : "Erro desconhecido" };
  }
}

export async function sitemapStatus(siteUrl: string, sitemapUrl: string): Promise<SitemapStatus> {
  try {
    const res = await fetch(
      `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
      { headers: gscHeaders() },
    );
    if (!res.ok) {
      return { path: sitemapUrl, error: `Sitemap (${res.status}): ${await res.text()}` };
    }
    const json = (await res.json()) as {
      isPending?: boolean;
      lastSubmitted?: string;
      lastDownloaded?: string;
      errors?: string | number;
      warnings?: string | number;
      contents?: { submitted?: string | number; indexed?: string | number }[];
    };
    const contents = json.contents ?? [];
    const sum = (k: "submitted" | "indexed") =>
      contents.reduce((s, c) => s + Number(c[k] ?? 0), 0);
    return {
      path: sitemapUrl,
      isPending: json.isPending,
      lastSubmitted: json.lastSubmitted,
      lastDownloaded: json.lastDownloaded,
      errors: Number(json.errors ?? 0),
      warnings: Number(json.warnings ?? 0),
      submitted: sum("submitted"),
      indexed: sum("indexed"),
    };
  } catch (e) {
    return { path: sitemapUrl, error: e instanceof Error ? e.message : "Erro desconhecido" };
  }
}
