# Auditoria de proteção do capital orgânico + fortalecimento da entidade Alexandre Machado

Regra que vou seguir: **nenhum slug existente será alterado, traduzido ou "melhorado"**. Nada é deletado. Qualquer mudança de URL só entraria com justificativa apresentada e aprovada por você antes.

## O que já confirmei no projeto agora

- Rotas ativas incluem todas as que você listou: `/fotografo-corporativo` (+ `/$slug` e `/categoria/$slug`), `/foto-profissional-para-linkedin`, `/fotografo-empresarial`, `/eventos-corporativos`, `/servicos`, `/videos`, `/quem-e-o-ale`, `/sobre`, `/foto-profissional`, `/fotografia-executiva`, `/fotografia-para-advogados`, `/fotografia-para-clinicas`, `/fotos-corporativas`, `/fotos-profissionais-medicos`, `/fotografo-de-feira-de-negocios`, `/portfolio`, `/blog`, `/depoimentos`, `/faq`, `/contato`, `/fotografo-corporativo-em/$bairro`.
- `src/lib/legacy-redirects.ts` já cobre mapeamentos exatos, aliases de galeria, vídeos removidos, categorias legadas e rotas próprias protegidas das regras dinâmicas.
- `SITE_ORIGIN` = `https://www.alefotografo.com.br`; canonical auto-referente por rota; `TEAM_SITE_ORIGIN` usado só como `sameAs`/link editorial — **nenhuma canonical cross-domain**.
- `robots.txt` com bloco de bots de IA e um único `Sitemap:` (o índice).

## Fase 1 — Inventário e auditoria (sem alterar código)

1. Enumerar todas as URLs canônicas do site (rotas estáticas + galerias + bairros + posts + vídeos) a partir dos sitemaps e do route tree.
2. Rodar cada regra de `legacy-redirects.ts` contra o domínio no ar verificando: status 301 (nunca 302/307), **um único salto**, destino 200, host final `www.alefotografo.com.br`.
3. Testar as URLs históricas do site antigo de 20 anos que ainda tenham backlinks: extrair a lista das URLs conhecidas (sitemap WordPress de 2021, páginas do `hostinger/`, padrões `/portfolio-do-fotografo/*`, categorias WP, paginação de blog, `?p=`) e checar cada uma.
4. Marcar como **lacuna** toda URL antiga que hoje cai em 404 ou em redirect genérico para a home sem equivalência semântica.
5. Verificar em cada página indexável: canonical absoluto auto-referente, ausência de `noindex`, um único H1, title/description dentro dos limites.

**Entregável:** relatório em `.lovable/auditoria-urls.md` com tabelas: URLs mantidas · redirecionadas (origem → destino → nº de saltos) · 404 · conflitos · canonicals divergentes.

## Fase 2 — Correções de preservação (só o que a auditoria apontar)

- URL antiga sem destino: novo mapeamento 301 direto para a página semanticamente equivalente em `legacy-redirects.ts` (nunca para a home quando existir equivalente).
- Corrente de redirects: encurtar para salto único.
- Redirect apontando para 404: corrigir destino.
- URL do sitemap que não responde 200: corrigir a rota ou remover do gerador.
- Nenhum redirect existente é removido sem antes eu documentar sua finalidade no relatório.

## Fase 3 — Fortalecimento da entidade (prioridade 2)

- Consolidar o grafo de entidade: `Person` (Alexandre Machado) + `Organization`/`LocalBusiness`, ligados por `founder`/`employee`, com `sameAs` (Instagram, LinkedIn, site irmão), `knowsAbout` dos territórios prioritários e `jobTitle`/`description` com os 30+ anos de trajetória.
- `ProfilePage` em `/quem-e-o-ale` e `/sobre`, `author` apontando para a mesma `@id` de Person em todos os `BlogPosting`.
- `Service`/`Offer` nas páginas comerciais e `BreadcrumbList` nas rotas profundas (conferir o que já existe antes de adicionar, sem duplicar).
- Links internos reforçando "quem é o autor": bloco de autoria com foto e credencial nas páginas comerciais e nos posts, apontando para `/quem-e-o-ale`.

## Fase 4 — Relevância semântica e IA

- Revisar `public/llms.txt` com o escopo autoral e a regra de separação dos dois domínios (já parcialmente feito) e garantir que os territórios prioritários apareçam por extenso.
- Reforçar cobertura semântica nas páginas de retrato executivo/C-level, médicos e advogados (blocos de método, o que entra, objeções), sem canibalizar entre si — cada página com uma intenção só.

## Fase 5 — Performance e conversão

- Medir as páginas comerciais principais no preview e no ar (LCP, CLS, INP, peso de imagem) e corrigir o que estiver fora: dimensões explícitas, `fetchpriority` no herói, `srcset` faltando, scripts atrasando o LCP.
- Conferir CTA de WhatsApp/orçamento presente acima da dobra em toda página comercial e o rastreamento de conversão registrando.

## Fase 6 — Verificação final

- Reconferir os redirects alterados ao vivo, revalidar canonicals, publicar e reenviar `sitemap-index.xml` no Search Console.
- Indexação é prazo do Google: eu leio e reporto o estado, sem prometer datas.

## Detalhes técnicos

- Fonte da verdade: `src/lib/legacy-redirects.ts`, `src/lib/seo.ts`, `src/routes/sitemap*.xml.ts`, `src/routeTree.gen.ts` (somente leitura).
- Auditoria por HTTP com `redirect: manual`, seguindo a cadeia salto a salto.
- Nada muda em domínio, host primário (`www`), tema visual ou conteúdo das páginas sem eu apontar o motivo no relatório.

## Ordem de execução

1. Fase 1 (relatório) → eu te mostro os números antes de mexer em qualquer redirect.
2. Fases 2 e 3.
3. Fases 4 e 5.
4. Publicar + Fase 6.
