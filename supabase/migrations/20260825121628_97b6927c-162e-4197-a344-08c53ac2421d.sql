-- 1) Política de leitura dos snapshots deixa de depender de função SECURITY DEFINER
DROP POLICY IF EXISTS "Admins can read indexing snapshots" ON public.indexing_snapshots;

CREATE POLICY "Admins can read indexing snapshots"
ON public.indexing_snapshots
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles r
    WHERE r.user_id = auth.uid() AND r.role = 'admin'
  )
);

-- 2) Funções SECURITY DEFINER não são mais chamáveis por usuários logados/anônimos
REVOKE ALL ON FUNCTION public.is_admin() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO service_role;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;