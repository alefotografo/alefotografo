import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { PerformanceReport } from "@/lib/performance-report.server";

export type { PerformanceReport };

/** Métricas de SEO (Search Console) + conversões registradas no banco. */
export const getPerformanceReport = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { days?: number } | undefined) => {
    const allowed = [7, 28, 90];
    const days = allowed.includes(data?.days ?? 7) ? (data?.days ?? 7) : 7;
    return { days };
  })
  .handler(async ({ data, context }): Promise<PerformanceReport> => {
    const { getPerformanceReportForDays } = await import("@/lib/performance-report.server");
    return getPerformanceReportForDays(context.supabase, data.days);
  });
