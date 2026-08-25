import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getIndexingReportForDays, type GscReport, type GscRow } from "@/lib/gsc-report.server";

export type { GscReport, GscRow };

export const getIndexingReport = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { days?: number } | undefined) => ({
    days: Math.min(Math.max(data?.days ?? 28, 7), 180),
  }))
  .handler(async ({ data, context }): Promise<GscReport> => {
    return getIndexingReportForDays(context.supabase, data.days);
  });
