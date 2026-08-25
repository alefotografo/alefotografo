CREATE TABLE public.indexing_snapshots (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url text NOT NULL,
  site_url text,
  verdict text,
  coverage_state text,
  robots_state text,
  indexing_state text,
  last_crawl timestamptz,
  canonical_google text,
  canonical_user text,
  error text,
  checked_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX indexing_snapshots_url_checked_at_idx ON public.indexing_snapshots (url, checked_at DESC);

GRANT SELECT ON public.indexing_snapshots TO authenticated;
GRANT ALL ON public.indexing_snapshots TO service_role;

ALTER TABLE public.indexing_snapshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read indexing snapshots"
ON public.indexing_snapshots FOR SELECT TO authenticated USING (true);