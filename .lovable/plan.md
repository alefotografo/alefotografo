# Painel de SEO e conversões no admin

Novo painel interno em `/admin/desempenho`, protegido por login de administrador (`noindex`), com período padrão de 7 dias e seletor 7/28/90.

## 1. Registro de conversões no banco

Passa a gravar no banco cada ação de contato do visitante, além do envio já existente ao Google Analytics:

- Clique no WhatsApp (botão flutuante, CTAs e rodapé)
- Clique em telefone
- Clique em e-mail
- Envio do formulário de contato

Para cada evento é guardado: tipo, página de origem, referenciador, data/hora e um identificador anônimo de sessão. Nada de nome, e-mail, IP ou dado pessoal.

## 2. O que o painel mostra

**Conversões (dados próprios)**
- Total no período e comparação com o período anterior
- Gráfico por dia
- Quebra por tipo (WhatsApp, telefone, e-mail, formulário)
- Top páginas que mais geram contato

**SEO (Search Console)**
- Cliques, impressões, CTR e posição média no período, com comparação
- Gráfico diário de cliques e impressões
- Top 20 páginas e top 20 consultas de busca
- Páginas com muitas impressões e CTR baixo (oportunidade de melhorar título/descrição)

**Cruzamento**
- Tabela por página: cliques do Google × conversões registradas, para ver quais páginas convertem melhor

Também um atalho para os relatórios do Google Analytics, já que o Google não libera leitura dos relatórios pela nossa conexão — o GA continua ativo no site como hoje.

## 3. Navegação

Barra de links entre os três painéis internos: Desempenho, Indexação e Monitoramento.

## Detalhes técnicos

- Nova tabela `public.conversion_events` (id, event_type, path, referrer, session_id, created_at) com GRANTs; `INSERT` permitido para `anon`/`authenticated` (o site é público), `SELECT` apenas para admin via `user_roles`; sem `UPDATE`/`DELETE`.
- Gravação por server function `trackConversion` em `src/lib/conversions.functions.ts`, validada com Zod e com lista fechada de tipos de evento; escrita pelo cliente admin server-side. Limite simples por sessão para evitar flood.
- Hook `useTrackConversion` usado em `WhatsappCta`, `Footer` e `/contato`, disparando também `gtag('event', ...)` quando o GA já estiver carregado.
- Leitura no painel por `getPerformanceReport` (`src/lib/performance.functions.ts`) com `requireSupabaseAuth` + `assertAdmin`, agregando Search Console (reutilizando o resolvedor de propriedade de `gsc-report.server.ts`, com dimensões `date`, `page` e `query`) e as conversões agregadas do banco.
- Rota `src/routes/_authenticated/admin.desempenho.tsx` com `recharts`, no mesmo padrão visual dos painéis existentes.
- Sem alteração de domínio, DNS, conteúdo público, robots ou sitemaps.
