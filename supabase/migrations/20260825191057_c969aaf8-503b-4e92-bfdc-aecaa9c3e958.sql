CREATE TABLE public.conversion_events (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type text NOT NULL,
  path text NOT NULL,
  referrer text,
  session_id text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.conversion_events TO authenticated;
GRANT ALL ON public.conversion_events TO service_role;

ALTER TABLE public.conversion_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read conversion events"
ON public.conversion_events
FOR SELECT
TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.user_roles r
  WHERE r.user_id = auth.uid() AND r.role = 'admin'
));

CREATE INDEX conversion_events_created_at_idx ON public.conversion_events (created_at DESC);
CREATE INDEX conversion_events_path_idx ON public.conversion_events (path);