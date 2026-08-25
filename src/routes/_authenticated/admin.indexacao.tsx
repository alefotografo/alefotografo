import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getIndexingReport } from "@/lib/gsc.functions";
import { getBatches } from "@/lib/batches";
import { SITE_ORIGIN } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { AdminNav } from "@/components/site/AdminNav";

export const Route = createFileRoute("/_authenticated/admin/indexacao")({
  head: () => ({
    meta: [
      { title: "Relatório de indexação por lote | Alê Fotógrafo" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Painel interno de acompanhamento de indexação dos lotes de posts." },
    ],
  }),
  component: IndexingReportPage,
});

function pathOf(url: string) {
  try {
    return new URL(url).pathname.replace(/\/$/, "") || "/";
  } catch {
    return url;
  }
}

function IndexingReportPage() {
  const fetchReport = useServerFn(getIndexingReport);
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["gsc-indexing", 28],
    queryFn: () => fetchReport({ data: { days: 28 } }),
    staleTime: 1000 * 60 * 30,
  });

  const batches = useMemo(() => getBatches(), []);

  const byPath = useMemo(() => {
    const map = new Map<string, { clicks: number; impressions: number; position: number }>();
    for (const r of data?.rows ?? []) {
      const key = pathOf(r.page);
      const prev = map.get(key);
      map.set(key, {
        clicks: (prev?.clicks ?? 0) + r.clicks,
        impressions: (prev?.impressions ?? 0) + r.impressions,
        position: r.position,
      });
    }
    return map;
  }, [data]);

  const batchStats = useMemo(
    () =>
      batches.map((b) => {
        const rows = b.posts.map((p) => ({
          ...p,
          ...(byPath.get(p.path) ?? { clicks: 0, impressions: 0, position: 0 }),
        }));
        const visible = rows.filter((r) => r.impressions > 0).length;
        return {
          ...b,
          rows,
          total: rows.length,
          visible,
          coverage: rows.length ? Math.round((visible / rows.length) * 100) : 0,
          impressions: rows.reduce((s, r) => s + r.impressions, 0),
          clicks: rows.reduce((s, r) => s + r.clicks, 0),
        };
      }),
    [batches, byPath],
  );

  const chartData = useMemo(
    () => [...batchStats].reverse().map((b) => ({
      name: b.label.replace("Semana de ", ""),
      Cobertura: b.coverage,
      Impressões: b.impressions,
      Cliques: b.clicks,
    })),
    [batchStats],
  );

  const topUrls = useMemo(() => {
    const all = batchStats.flatMap((b) => b.rows.map((r) => ({ ...r, batch: b.label })));
    return [...all].sort((a, b) => b.impressions - a.impressions).slice(0, 25);
  }, [batchStats]);

  const zeroUrls = useMemo(
    () =>
      batchStats
        .flatMap((b) => b.rows.map((r) => ({ ...r, batch: b.label })))
        .filter((r) => r.impressions === 0)
        .slice(0, 40),
    [batchStats],
  );

  const totals = useMemo(() => {
    const total = batchStats.reduce((s, b) => s + b.total, 0);
    const visible = batchStats.reduce((s, b) => s + b.visible, 0);
    return {
      total,
      visible,
      coverage: total ? Math.round((visible / total) * 100) : 0,
      impressions: batchStats.reduce((s, b) => s + b.impressions, 0),
      clicks: batchStats.reduce((s, b) => s + b.clicks, 0),
    };
  }, [batchStats]);

  return (
    <ma      <AdminNav />

in className="container mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Relatório semanal de indexação</h1>
          <p className="mt-2 text-muted-foreground">
            Dados do Google Search Console dos últimos 28 dias, agrupados pelos lotes semanais de publicação.
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => refetch()} disabled={isFetching}>
            {isFetching ? "Atualizando…" : "Atualizar"}
          </Button>
          <Button onClick={() => window.print()}>Salvar em PDF</Button>
        </div>
      </header>

      {isLoading && <p className="text-muted-foreground">Carregando dados do Search Console…</p>}
      {error && (
        <p className="text-destructive">
          {String((error as Error)?.message ?? "").includes("Acesso restrito")
            ? "Acesso restrito: esta área é apenas para administradores."
            : "Falha ao carregar o relatório."}
        </p>
      )}
      {data && !data.ok && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
          <strong>Não foi possível ler o Search Console.</strong>
          <p className="mt-1 text-muted-foreground">{data.error}</p>
        </div>
      )}

      {data?.ok && (
        <>
          <p className="mb-6 text-sm text-muted-foreground">
            Propriedade: <span className="font-medium text-foreground">{data.siteUrl}</span> · Período:{" "}
            {data.range?.start} a {data.range?.end}
          </p>

          <section className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "URLs no cronograma", value: totals.total },
              { label: "Com impressões", value: `${totals.visible} (${totals.coverage}%)` },
              { label: "Impressões", value: totals.impressions.toLocaleString("pt-BR") },
              { label: "Cliques", value: totals.clicks.toLocaleString("pt-BR") },
            ].map((k) => (
              <div key={k.label} className="rounded-xl border bg-card p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{k.label}</p>
                <p className="mt-1 text-2xl font-semibold">{k.value}</p>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Cobertura de indexação por lote (%)</h2>
            <div className="h-72 w-full rounded-xl border bg-card p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(v: number) => `${v}%`} />
                  <Bar dataKey="Cobertura" fill="oklch(0.68 0.18 38)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Impressões e cliques por lote</h2>
            <div className="h-72 w-full rounded-xl border bg-card p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Impressões" stroke="oklch(0.68 0.18 38)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="Cliques" stroke="oklch(0.78 0 0)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Resumo por lote</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="p-3">Lote</th>
                    <th className="p-3">Posts</th>
                    <th className="p-3">Com impressões</th>
                    <th className="p-3">Cobertura</th>
                    <th className="p-3">Impressões</th>
                    <th className="p-3">Cliques</th>
                  </tr>
                </thead>
                <tbody>
                  {batchStats.map((b) => (
                    <tr key={b.id} className="border-t">
                      <td className="p-3 font-medium">{b.label}</td>
                      <td className="p-3">{b.total}</td>
                      <td className="p-3">{b.visible}</td>
                      <td className="p-3">{b.coverage}%</td>
                      <td className="p-3">{b.impressions.toLocaleString("pt-BR")}</td>
                      <td className="p-3">{b.clicks.toLocaleString("pt-BR")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">URLs mais impactadas</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="p-3">URL</th>
                    <th className="p-3">Lote</th>
                    <th className="p-3">Impressões</th>
                    <th className="p-3">Cliques</th>
                    <th className="p-3">Posição média</th>
                  </tr>
                </thead>
                <tbody>
                  {topUrls.map((r) => (
                    <tr key={r.slug} className="border-t">
                      <td className="p-3">
                        <Link to="/blog/$slug" params={{ slug: r.slug }} className="hover:underline">
                          {r.title}
                        </Link>
                        <span className="block text-xs text-muted-foreground">
                          {SITE_ORIGIN}
                          {r.path}
                        </span>
                      </td>
                      <td className="p-3 whitespace-nowrap">{r.batch}</td>
                      <td className="p-3">{r.impressions.toLocaleString("pt-BR")}</td>
                      <td className="p-3">{r.clicks.toLocaleString("pt-BR")}</td>
                      <td className="p-3">{r.position ? r.position.toFixed(1) : "—"}</td>
                    </tr>
                  ))}
                  {!topUrls.length && (
                    <tr>
                      <td className="p-3 text-muted-foreground" colSpan={5}>
                        Ainda sem dados de impressão no período.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Sem impressões (revisar indexação)</h2>
            <ul className="grid gap-2 md:grid-cols-2">
              {zeroUrls.map((r) => (
                <li key={r.slug} className="rounded-lg border bg-card p-3 text-sm">
                  <Link to="/blog/$slug" params={{ slug: r.slug }} className="font-medium hover:underline">
                    {r.title}
                  </Link>
                  <span className="block text-xs text-muted-foreground">
                    {r.batch} · publicado em {r.iso}
                  </span>
                </li>
              ))}
              {!zeroUrls.length && <li className="text-sm text-muted-foreground">Todos os posts já têm impressões. 🎉</li>}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
