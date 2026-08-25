CREATE TABLE public.cron_tokens (
  name text PRIMARY KEY,
  token text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.cron_tokens TO service_role;

ALTER TABLE public.cron_tokens ENABLE ROW LEVEL SECURITY;

INSERT INTO public.cron_tokens (name, token)
VALUES ('indexing', encode(gen_random_bytes(32), 'hex'))
ON CONFLICT (name) DO NOTHING;

CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

SELECT cron.schedule(
  'monitoramento-indexacao-semanal',
  '0 9 * * 1',
  $$
  SELECT net.http_post(
    url := 'https://project--0d78f8bf-6fb0-4a87-a065-0e5ed176f8df.lovable.app/api/public/cron-indexing',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-cron-secret', (SELECT token FROM public.cron_tokens WHERE name = 'indexing')
    ),
    body := '{}'::jsonb
  );
  $$
);