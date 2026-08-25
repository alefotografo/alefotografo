import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
import { getPerformanceReport } from "@/lib/performance.functions";
import { AdminNav } from "@/components/site/AdminNav";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/admin/desempenho")({
  head: () => ({
    meta: [
      { title: "Desempenho: SEO e conversões | Alê Fotógrafo" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Painel interno com métricas de busca do Google e conversões registradas no site.",
      },
    ],
  }),
  component: PerformancePage;
});

const PERIODS = [7, 28, 90] as const;

const TYPE_LABEL: Record<string, string> = {
  whatsapp: "WhatsApp",
  telefone: "Telefone",
  email: "E-mail",
  formulario: "Formulário",
};

function pathOf(url: string) {
  try {
    return new URL(url).pathname.replace(/\/$/, "") || "/";
  } catch {
    return url;
  }
}

function pct(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function delta(current: number, previous: number) {
  if (!previous) return current ? "novo" : "—";
  const diff = ((current - previous) / previous) * 100;
  const sign = diff > 0 ? "+" : "";
  return `${sign}${diff.toFixed(0)}%`;
}

function dayLabel(date: string) {
  const [, m, d] = date.split("-");
  return `${d}/${m}`;
}

function Card({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function PerformancePage() {
  const fetchReport = useServerFn(getPerformanceReport);
  const [days, setDays] = useState<number>(7);

  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["performance", days],
    queryFn: () => fetchReport({ data: { days } }),
    staleTime: 1000 * 60 * 15,
  });

  const search = data?.search;
  const conv = data?.conversions;

  const combinedDaily = useMemo(() => {
    const map = new Map<string, { date: string; cliques: number; impressoes: number; conversoes: number }>();
    for (const row of search?.byDay ?? []) {
      map.set(row.date, {
        date: row.date,
        cliques: row.clicks,
        impressoes: row.impressions,
        conversoes: 0,
      });
    }
    for (const row of conv?.current.byDay ?? []) {
      const prev = map.get(row.date);
      map.set(row.date, {
        date: row.date,
        cliques: prev?.cliques ?? 0,
        impressoes: prev?.impressoes ?? 0,
        conversoes: row.count,
      });
    }
    return [...map.values()]
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((r) => ({ ...r, label: dayLabel(r.date) }));
  }, [search, conv]);

  const crossTable = useMemo(() => {
    const conversions = new Map<string, number>();
    for (const row of conv?.current.byPath ?? []) {
      const key = pathOf(`https://x${row.path}`);
      conversions.set(key, (conversions.get(key) ?? 0) + row.count);
    }
    const rows = new Map<string, { path: string; clicks: number; impressions: number; conversions: number }>();
    for (const page of search?.pages ?? []) {
      const key = pathOf(page.page);
      const prev = rows.get(key);
      rows.set(key, {
        path: key,
        clicks: (prev?.clicks ?? 0) + page.clicks,
        impressions: (prev?.impressions ?? 0) + page.impressions,
        conversions: conversions.get(key) ?? 0,
      });
    }
    for (const [key, count] of conversions) {
      if (!rows.has(key)) rows.set(key, { path: key, clicks: 0, impressions: 0, conversions: count });
    }
    return [...rows.values()]
      .sort((a, b) => b.conversions - a.conversions || b.clicks - a.clicks)
      .slice(0, 25);
  }, [search, conv]);

  const opportunities = useMemo(
    () =>
      (search?.pages ?? [])
        .filter((p) => p.impressions >= 100 && p.ctr < 0.02)
        .sort((a, b) => b.impressions - a.impressions)
        .slice(0, 15),
    [search],
  );

  return (
    <main className="container mx-auto max-w-6xl px-4 py-10">
      <AdminNav />

      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Desempenho: SEO e conversões</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Cliques e impressões vindos do Google somados às ações de contato registradas no próprio site.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          {PERIODS.map((p) => (
            <Button key={p} variant={p === days ? "default" : "outline"} onClick={() => setDays(p)}>
              {p} dias
            </Button>
          ))}
          <Button variant="outline" onClick={() => refetch()} disabled={isFetching}>
            {isFetching ? "Atualizando…" : "Atualizar"}
          </Button>
        </div>
      </header>

      {isLoading && <p className="text-muted-foreground">Carregando dados…</p>}
      {error && (
        <p className="text-destructive">
          {String((error as Error)?.message ?? "").includes("Acesso restrito")
            ? "Acesso restrito: esta área é apenas para administradores."
            : "Falha ao carregar o painel."}
        </p>
      )}

      {data && (
        <>
          <p className="mb-6 text-sm text-muted-foreground">
            Período: {data.range.start} a {data.range.end} · comparado com {data.previousRange.start} a{" "}
            {data.previousRange.end}
            {search?.siteUrl ? ` · propriedade ${search.siteUrl}` : ""}
          </p>

          <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Card
              label="Conversões"
              value={String(conv?.current.total ?? 0)}
              hint={`vs. período anterior: ${delta(conv?.current.total ?? 0, conv?.previousTotal ?? 0)}`}
            />
            <Card
              label="Cliques no Google"
              value={String(search?.totals.clicks ?? 0)}
              hint={`vs. anterior: ${delta(search?.totals.clicks ?? 0, search?.previousTotals.clicks ?? 0)}`}
            />
            <Card
              label="Impressões"
              value={String(search?.totals.impressions ?? 0)}
              hint={`vs. anterior: ${delta(search?.totals.impressions ?? 0, search?.previousTotals.impressions ?? 0)}`}
            />
            <Card label="CTR" value={pct(search?.totals.ctr ?? 0)} hint={`anterior: ${pct(search?.previousTotals.ctr ?? 0)}`} />
            <Card
              label="Posição média"
              value={(search?.totals.position ?? 0).toFixed(1)}
              hint={`anterior: ${(search?.previousTotals.position ?? 0).toFixed(1)}`}
            />
          </section>

          {search && !search.ok && (
            <div className="mb-8 rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
              <strong>Não foi possível ler o Search Console.</strong>
              <p className="mt-1 text-muted-foreground">{search.error}</p>
            </div>
          )}
          {conv && !conv.ok && (
            <div className="mb-8 rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
              <strong>Não foi possível ler as conversões.</strong>
              <p className="mt-1 text-muted-foreground">{conv.error}</p>
            </div>
          )}

          {!!combinedDaily.length && (
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">Evolução diária</h2>
              <div className="h-72 w-full rounded-xl border p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={combinedDaily}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="label" fontSize={12} />
                    <YAxis yAxisId="left" fontSize={12} />
                    <YAxis yAxisId="right" orientation="right" fontSize={12} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="right" type="monotone" dataKey="impressoes" name="Impressões" dot={false} stroke="#94a3b8" />
                    <Line yAxisId="left" type="monotone" dataKey="cliques" name="Cliques" dot={false} stroke="#0ea5e9" />
                    <Line yAxisId="left" type="monotone" dataKey="conversoes" name="Conversões" dot={false} stroke="#f97316" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>
          )}

          <section className="mb-10 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Conversões por tipo</h2>
              <div className="h-64 w-full rounded-xl border p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={(conv?.current.byType ?? []).map((t) => ({
                      tipo: TYPE_LABEL[t.type] ?? t.type,
                      total: t.count,
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="tipo" fontSize={12} />
                    <YAxis fontSize={12} allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="total" name="Conversões" fill="#f97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Páginas que mais geram contato</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3">Página</th>
                      <th className="p-3">Conversões</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(conv?.current.byPath ?? []).slice(0, 10).map((row) => (
                      <tr key={row.path} className="border-t">
                        <td className="p-3">{row.path}</td>
                        <td className="p-3 font-medium">{row.count}</td>
                      </tr>
                    ))}
                    {!conv?.current.byPath.length && (
                      <tr>
                        <td colSpan={2} className="p-3 text-muted-foreground">
                          Nenhuma conversão registrada no período.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-10 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Top páginas na busca</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3">Página</th>
                      <th className="p-3">Cliques</th>
                      <th className="p-3">Impr.</th>
                      <th className="p-3">CTR</th>
                      <th className="p-3">Pos.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(search?.pages ?? [])
                      .slice()
                      .sort((a, b) => b.clicks - a.clicks)
                      .slice(0, 20)
                      .map((p) => (
                        <tr key={p.page} className="border-t">
                          <td className="p-3">{pathOf(p.page)}</td>
                          <td className="p-3 font-medium">{p.clicks}</td>
                          <td className="p-3 text-muted-foreground">{p.impressions}</td>
                          <td className="p-3 text-muted-foreground">{pct(p.ctr)}</td>
                          <td className="p-3 text-muted-foreground">{p.position.toFixed(1)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Top consultas de busca</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3">Consulta</th>
                      <th className="p-3">Cliques</th>
                      <th className="p-3">Impr.</th>
                      <th className="p-3">CTR</th>
                      <th className="p-3">Pos.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(search?.queries ?? [])
                      .slice()
                      .sort((a, b) => b.clicks - a.clicks)
                      .slice(0, 20)
                      .map((q) => (
                        <tr key={q.query} className="border-t">
                          <td className="p-3">{q.query}</td>
                          <td className="p-3 font-medium">{q.clicks}</td>
                          <td className="p-3 text-muted-foreground">{q.impressions}</td>
                          <td className="p-3 text-muted-foreground">{pct(q.ctr)}</td>
                          <td className="p-3 text-muted-foreground">{q.position.toFixed(1)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {!!opportunities.length && (
            <section className="mb-10">
              <h2 className="mb-2 text-xl font-semibold">Oportunidades: muita impressão, CTR baixo</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Páginas que aparecem muito no Google mas recebem poucos cliques — vale revisar título e descrição.
              </p>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3">Página</th>
                      <th className="p-3">Impressões</th>
                      <th className="p-3">Cliques</th>
                      <th className="p-3">CTR</th>
                      <th className="p-3">Posição</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opportunities.map((p) => (
                      <tr key={p.page} className="border-t">
                        <td className="p-3">{pathOf(p.page)}</td>
                        <td className="p-3 font-medium">{p.impressions}</td>
                        <td className="p-3 text-muted-foreground">{p.clicks}</td>
                        <td className="p-3 text-destructive">{pct(p.ctr)}</td>
                        <td className="p-3 text-muted-foreground">{p.position.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {!!crossTable.length && (
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold">Busca × conversões por página</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-left">
                    <tr>
                      <th className="p-3">Página</th>
                      <th className="p-3">Cliques do Google</th>
                      <th className="p-3">Conversões</th>
                      <th className="p-3">Taxa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crossTable.map((row) => (
                      <tr key={row.path} className="border-t">
                        <td className="p-3">{row.path}</td>
                        <td className="p-3 text-muted-foreground">{row.clicks}</td>
                        <td className="p-3 font-medium">{row.conversions}</td>
                        <td className="p-3 text-muted-foreground">
                          {row.clicks ? pct(row.conversions / row.clicks) : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section className="rounded-xl border p-4 text-sm text-muted-foreground">
            O Google Analytics continua ativo no site, mas não libera leitura de relatórios pela nossa conexão. Para
            funis e públicos, abra{" "}
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline"
            >
              os relatórios do Google Analytics
            </a>
            .
          </section>
        </>
      )}
    </main>
  );
}
