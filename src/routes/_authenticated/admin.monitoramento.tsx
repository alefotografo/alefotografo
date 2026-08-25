import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getIndexingMonitor } from "@/lib/indexing.functions";
import { SITE_ORIGIN } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AdminNav } from "@/components/site/AdminNav";

export const Route = createFileRoute("/_authenticated/admin/monitoramento")({
  head: () => ({
    meta: [
      { title: "Monitoramento semanal de indexação | Alê Fotógrafo" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Painel interno com o estado de indexação das URLs monitoradas no Search Console.",
      },
    ],
  }),
  component: MonitoramentoPage,
});

function light(verdict?: string | null, coverage?: string | null) {
  const v = (verdict ?? "").toUpperCase();
  const c = (coverage ?? "").toLowerCase();
  if (c.includes("404") || c.includes("not found")) return { color: "bg-destructive", label: "404 no histórico" };
  if (v === "PASS") return { color: "bg-emerald-500", label: "Indexada" };
  if (v === "NEUTRAL" || c.includes("descoberta") || c.includes("discovered") || c.includes("crawled"))
    return { color: "bg-amber-500", label: "Descoberta, não indexada" };
  if (v === "FAIL") return { color: "bg-destructive", label: "Com erro" };
  return { color: "bg-muted-foreground", label: verdict ?? "Sem dados" };
}

function fmt(date?: string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function path(url: string) {
  return url.replace(SITE_ORIGIN, "") || "/";
}

function MonitoramentoPage() {
  const fetchMonitor = useServerFn(getIndexingMonitor);
  const [refresh, setRefresh] = useState(false);
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["indexing-monitor", refresh],
    queryFn: () => fetchMonitor({ data: { refresh } }),
    staleTime: 1000 * 60 * 30,
  });

  const run = data?.run;

  const history = useMemo(() => {
    const byUrl = new Map<string, { checked_at: string; verdict: string | null; coverage_state: string | null }[]>();
    for (const row of data?.history ?? []) {
      const list = byUrl.get(row.url) ?? [];
      list.push(row);
      byUrl.set(row.url, list);
    }
    return byUrl;
  }, [data]);

  return (
    <ma      <AdminNav />

in className="container mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Monitoramento semanal de indexação</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Leitura direta do índice do Google para as URLs-chave. O snapshot é gravado toda semana pelo agendador — o
            histórico mostra quando <code>/videos</code> e <code>/fotos-corporativas</code> deixam de aparecer com 404
            antigo.
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button
            variant="outline"
            onClick={() => {
              setRefresh(true);
              refetch();
            }}
            disabled={isFetching}
          >
            {isFetching ? "Consultando o Google…" : "Consultar e gravar agora"}
          </Button>
        </div>
      </header>

      {isLoading && <p className="text-muted-foreground">Carregando dados do Search Console…</p>}
      {error && (
        <p className="text-destructive">
          {String((error as Error)?.message ?? "").includes("Acesso restrito")
            ? "Acesso restrito: esta área é apenas para administradores."
            : "Falha ao carregar o monitoramento."}
        </p>
      )}
      {run && !run.ok && (
        <div className="mb-8 rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
          <strong>Não foi possível ler o Search Console.</strong>
          <p className="mt-1 text-muted-foreground">{run.error}</p>
        </div>
      )}

      {run?.siteUrl && (
        <p className="mb-6 text-sm text-muted-foreground">
          Propriedade: <span className="font-medium text-foreground">{run.siteUrl}</span> · Consulta:{" "}
          {fmt(run.checkedAt)}
        </p>
      )}

      {!!run?.urls.length && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Estado atual das URLs monitoradas</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3">URL</th>
                  <th className="p-3">Situação</th>
                  <th className="p-3">Cobertura</th>
                  <th className="p-3">Último rastreamento</th>
                  <th className="p-3">Canônica do Google</th>
                  <th className="p-3">Semanas registradas</th>
                </tr>
              </thead>
              <tbody>
                {run.urls.map((u) => {
                  const l = light(u.verdict, u.coverageState);
                  return (
                    <tr key={u.url} className="border-t align-top">
                      <td className="p-3 font-medium">{path(u.url)}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-2">
                          <span className={`inline-block h-2.5 w-2.5 rounded-full ${l.color}`} />
                          {l.label}
                        </span>
                        {u.error && <span className="block text-xs text-destructive">{u.error}</span>}
                      </td>
                      <td className="p-3 text-muted-foreground">{u.coverageState ?? "—"}</td>
                      <td className="p-3 text-muted-foreground">{fmt(u.lastCrawl)}</td>
                      <td className="p-3 text-xs text-muted-foreground">{u.canonicalGoogle ?? "—"}</td>
                      <td className="p-3 text-muted-foreground">{history.get(u.url)?.length ?? 0}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {!!run?.sitemaps.length && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Sitemaps</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3">Sitemap</th>
                  <th className="p-3">Enviado</th>
                  <th className="p-3">Lido pelo Google</th>
                  <th className="p-3">URLs</th>
                  <th className="p-3">Erros</th>
                  <th className="p-3">Avisos</th>
                </tr>
              </thead>
              <tbody>
                {run.sitemaps.map((s) => (
                  <tr key={s.path} className="border-t">
                    <td className="p-3 font-medium">{path(s.path)}</td>
                    <td className="p-3 text-muted-foreground">{fmt(s.lastSubmitted)}</td>
                    <td className="p-3 text-muted-foreground">{fmt(s.lastDownloaded)}</td>
                    <td className="p-3 text-muted-foreground">{s.submitted ?? "—"}</td>
                    <td className={`p-3 ${s.errors ? "text-destructive" : "text-muted-foreground"}`}>
                      {s.errors ?? "—"}
                    </td>
                    <td className="p-3 text-muted-foreground">{s.warnings ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {!!data?.history.length && (
        <section>
          <h2 className="mb-4 text-xl font-semibold">Histórico das últimas semanas</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  <th className="p-3">Data</th>
                  <th className="p-3">URL</th>
                  <th className="p-3">Situação</th>
                  <th className="p-3">Cobertura</th>
                </tr>
              </thead>
              <tbody>
                {data.history.slice(0, 120).map((row, i) => {
                  const l = light(row.verdict, row.coverage_state);
                  return (
                    <tr key={`${row.url}-${row.checked_at}-${i}`} className="border-t">
                      <td className="p-3 text-muted-foreground">{fmt(row.checked_at)}</td>
                      <td className="p-3">{path(row.url)}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-2">
                          <span className={`inline-block h-2.5 w-2.5 rounded-full ${l.color}`} />
                          {l.label}
                        </span>
                      </td>
                      <td className="p-3 text-muted-foreground">{row.coverage_state ?? "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}
