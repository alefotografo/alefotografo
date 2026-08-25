# Publicação, monitoramento de indexação, Schema e performance

## 1. Publicar e revalidar no Search Console (www)

- Publicar a aplicação para que os 301 legados e o canonical `https://www.alefotografo.com.br` entrem no ar.
- Reenviar `sitemap-index.xml`, `sitemap.xml` e `sitemap-videos.xml` na propriedade com www e confirmar leitura com 0 erros / 0 avisos.
- Conferir na produção (via requisição real ao HTML) que o canonical de `/`, `/videos` e `/fotos-corporativas` aponta para o host com www.

## 2. Monitoramento semanal de indexação

Painel interno em `/_authenticated/indexacao` (área logada), alimentado pelo Search Console:

- Ampliar `src/lib/gsc.functions.ts` com uma função que, para uma lista de URLs-chave (`/videos`, `/fotos-corporativas`, home, principais serviços), lê o estado no índice do Google via URL Inspection e o status do sitemap.
- Guardar um snapshot semanal no banco (tabela `indexing_snapshots`: url, verdict, coverage_state, last_crawl, checked_at) para mostrar evolução — inclusive quando o histórico de 404 desaparecer.
- Rota pública protegida por segredo em `src/routes/api/public/cron-indexing.ts` para o agendador semanal gravar o snapshot; verificação do caller por header secreto.
- Tela mostra tabela com semáforo (indexada / descoberta / erro 404 residual), data do último rastreamento e histórico das últimas semanas.

Observação: a API não força reindexação; ela apenas lê o estado do índice. O painel avisa quando o Google deixar de reportar 404.

## 3. Dados estruturados Schema.org

Já existe JSON-LD de `LocalBusiness` na raiz e schemas por página. O trabalho é consolidar e completar:

- Centralizar helpers de JSON-LD em `src/lib/seo.ts` (organization/localBusiness, serviço, breadcrumb, FAQ, review, vídeo, imagem).
- Corrigir todos os `@id`/URLs para o host com www e garantir um único `LocalBusiness` canônico com endereço, telefone, CNPJ, horário, áreas atendidas (bairros/polos) e `sameAs`.
- Adicionar `ImageObject`/`Photograph` nas galerias de portfólio, `VideoObject` nas páginas de vídeo, `Service` nas páginas de especialidade, `BreadcrumbList` em todas as rotas internas e `AggregateRating`/`Review` na dobra de depoimentos.
- Validar todas as rotas contra o validador de rich results e corrigir avisos.

## 4. Performance (Lighthouse)

- Medir Lighthouse (mobile e desktop) em home, `/fotos-corporativas`, `/videos`, `/portfolio` e um post de blog; registrar baseline.
- Reduzir payload: garantir WebP/AVIF com `srcset`/`sizes` em todas as imagens (inclusive capas de blog e thumbs de vídeo), `loading="lazy"` + `decoding="async"` fora da primeira dobra, e `preload` apenas da imagem LCP de cada rota.
- Cortar JS/CSS não usado: carregar carrosséis, mapa e blocos de depoimentos abaixo da dobra sob demanda; conferir fontes com `display=swap` e preconnect.
- Reservar dimensões (width/height ou aspect-ratio) para eliminar CLS.
- Nova medição após as mudanças, com comparação antes/depois.

## Detalhes técnicos

- Sem alteração de conteúdo editorial nem de rotas existentes; apenas metadados, JSON-LD, carregamento de assets e novo painel/rota de cron.
- Cron semanal via pg_cron chamando a rota pública com segredo; nada de segredo no bundle do cliente.
- Snapshots com RLS: leitura apenas para usuários autenticados, escrita apenas pelo service role.
