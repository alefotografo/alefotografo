import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { MonitorRun, SnapshotRow } from "@/lib/indexing-monitor.server";

export type MonitorPayload = {
  run: MonitorRun;
  history: SnapshotRow[];
};

/** Estado atual + histórico semanal de indexação das URLs monitoradas. */
export const getIndexingMonitor = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { refresh?: boolean } | undefined) => ({ refresh: data?.refresh === true }))
  .handler(async ({ data }): Promise<MonitorPayload> => {
    const { runIndexingSnapshot, readSnapshotHistory } = await import("@/lib/indexing-monitor.server");
    const run = await runIndexingSnapshot(data.refresh);
    let history: SnapshotRow[] = [];
    try {
      history = await readSnapshotHistory(12);
    } catch {
      history = [];
    }
    return { run, history };
  });
