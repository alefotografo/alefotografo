# Revisão de segurança sênior — resultado e correções propostas

## O que a varredura automática disse

Rodei a varredura de segurança do backend: **nenhum problema encontrado** (o único alerta anterior, da tabela de tokens do agendador, já está documentado como intencional na @security-memory).

Além da varredura, revisei manualmente o código com olhar de especialista e encontrei **3 pontos reais** que a varredura automática não cobre, porque são regras de negócio e não configuração de banco.

## Achados da revisão manual

### 1. Área administrativa aceita qualquer conta logada (prioridade alta)
As telas internas (`/admin/indexacao`, `/admin/monitoramento`) e as duas funções de servidor que leem o Search Console exigem apenas "estar logado" — não exigem "ser administrador". A tabela de snapshots de indexação também libera leitura para qualquer usuário autenticado.

Consequência: se um dia existir qualquer outra conta no projeto (ou se o cadastro por e-mail estiver aberto), essa conta vê os relatórios internos de SEO e consegue disparar consultas ao Google usando as credenciais do site.

**Correção:** criar controle de papéis de verdade — tabela separada `user_roles` (enum `admin`/`user`) e função `has_role` do tipo *security definer*, atribuir `admin` à sua conta, exigir esse papel nas duas funções de servidor, na política de leitura dos snapshots e no acesso às telas de admin (quem não é admin vê "acesso restrito", sem vazar dados).

### 2. Proxy do mapa aberto sem validação (prioridade média)
`/api/public/staticmap` é público e repassa `center`, `zoom` e `size` direto para o Google usando as credenciais do projeto. Como não há validação, qualquer pessoa pode usar essa rota como proxy gratuito de mapas de qualquer coordenada do mundo e consumir a cota/faturamento da conta Google.

**Correção:** validar os parâmetros antes de chamar o Google — coordenadas no formato numérico esperado, `zoom` entre 3 e 20, `size` restrito a um conjunto de tamanhos usados pelo site, e limitar as coordenadas à região atendida (Grande São Paulo). Valor inválido cai no padrão do estúdio em vez de ir ao Google. Comportamento visual do site não muda.

### 3. Comparação do segredo do agendador (prioridade baixa, defesa em profundidade)
A rota semanal `/api/public/cron-indexing` compara o segredo com igualdade simples. O risco prático é mínimo, mas o padrão correto é comparação de tempo constante.

**Correção:** comparar byte a byte em tempo constante (`timingSafeEqual`), mantendo o mesmo 401 para segredo ausente ou errado.

## Confirmação adicional

Vou verificar se o cadastro público de novos usuários está desativado no login (a página `/auth` é só entrada, sem "criar conta") e desativá-lo caso esteja aberto — com a área administrativa é o comportamento correto.

## Detalhes técnicos

- Migração: `app_role` enum, `public.user_roles` (com GRANT para `authenticated`/`service_role`, RLS, policy de leitura própria), `public.has_role(uuid, app_role)` *security definer* com `search_path = public`, INSERT do papel `admin` para a conta do Alexandre, e substituição da policy de SELECT de `indexing_snapshots` por `has_role(auth.uid(), 'admin')`.
- `src/lib/gsc.functions.ts` e `src/lib/indexing.functions.ts`: após `requireSupabaseAuth`, checar `has_role` via `context.supabase` (RLS do usuário) e lançar erro 403 quando não for admin — nunca usar o cliente admin para decidir permissão.
- `src/routes/_authenticated/admin.*.tsx`: estado de "sem permissão" ao receber 403, sem expor dados.
- `src/routes/api/public/staticmap.ts`: validação/allowlist dos parâmetros + limites geográficos.
- `src/routes/api/public/cron-indexing.ts`: `timingSafeEqual` na comparação do token.
- @security-memory atualizada ao final: modelo de acesso baseado em papéis, o que nunca deve acontecer (usuário comum lendo relatórios internos; proxy de mapa aceitando coordenadas arbitrárias) e o risco aceito da tabela de tokens sem policies.

Nada disso altera o site público, o SEO ou o desempenho.
