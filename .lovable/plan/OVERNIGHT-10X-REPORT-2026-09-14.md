# MISSÃO NOTURNA 10/10 — CONCLUÍDA
14/09/2026

BRANCH: `overnight/seo-10x-2026-09-14` (criada de main em 79a3f52; **sem merge; main intocada**)

BASE: 79a3f52

COMMITS CRIADOS (4):
- `b7f05e0` fix: prevent unrelated faq fallback
- `eccc413` fix: point internal links to canonical routes
- `8dc8132` chore: remove dead code (inclui docs P5–P10)
- (docs: P3/P4 nos respectivos commits de código)

ARQUIVOS ALTERADOS:
- src/routes/fotografo-corporativo.$slug.tsx (FAQ resolver + prev/next filtrado)
- src/lib/autoLink.tsx (índice sem perdedores)
- src/routes/{servicos,fotos-corporativas,portfolio.index,sobre,fotografo-de-feira-de-negocios}.tsx
- excluídos: 4 componentes mortos da Home; homeCuration.ts (exports órfãos removidos)
- docs: .lovable/plan/p3…p10 + este relatório

P3 FAQ:
- categorias auditadas: 32 públicas
- fallbacks inadequados encontrados: 20 páginas não-retrato com FAQ de retrato + 1 dessincronia visível/schema (retrato-corporativo)
- fallbacks corrigidos: 20 (seção + FAQPage suprimidos); allowlist explícita de 6 slugs retrato; editorial (6) com sync garantido
- páginas sem FAQPage após correção: 20 (as não-retrato sem editorial)
- páginas de retrato preservadas: 12 (6 editorial + 6 allowlist)

LINKS INTERNOS:
- links via 301 encontrados: 3 slugs perdedores linkados de dezenas de páginas (autoLink, listas categories.map, prev/next, gallerySlugs)
- corrigidos: 100% — re-scan final: **nenhuma página** linka perdedores; 334 destinos únicos diretos 200
- 404 encontrados: 0 · corrigidos: 0

SEO TÉCNICO:
- URLs auditadas: 327 (sitemap completo)
- erros críticos: 0 (todas com 200, TITLE, META, H1 único, canonical www próprio)
- corrigidos: 0 necessários
- pendentes: META genérica legada em 14 páginas de vídeo (editorial — doc P5)

IMAGENS:
- assets quebrados: 0 (99/99 internos; externos só YouTube com fallback)
- corrigidos: 0 necessários
- duplicações visuais restantes: 5 pares registrados (doc P6, fora do escopo P2)

PROMESSAS COMERCIAIS:
- quantidade encontrada: 40+ ocorrências (prazo dominante; presença pessoal; zero preço em R$)
- nenhuma alterada: SIM

DOMÍNIOS:
- problemas encontrados: schema Person/Organization com url non-www (consistência, materialidade baixa — registrado)
- nenhuma mudança estratégica: SIM (sameAs plural preservado; host oficial intacto)

BLOG:
- posts auditados: 184 (zero 404, zero capa quebrada na amostra, zero link p/ perdedor)
- problemas: cobertura de pontes editoriais só em 2 posts; 8 posts sem capa (por design)
- oportunidades: logística (1), indústria (2), advocacia (2), médicos (3), banco (3), vídeos (3)

PERFORMANCE:
- problemas: 4 componentes mortos + 3 exports órfãos
- correções seguras: removidos (typecheck/build limpos)
- pendências: docs P5–P10

TYPECHECK: PASSOU
BUILD: PASSOU

HOME P2/P2.1: PRESERVADA (hero grupos-3 intacto; grupos-1 só no tile Instagram; 3 capas de posts; aspect 2/3)
VÍDEOS: PRESERVADO (hub, 3 especializações, FAQ novo, 72 cases, rodapé)
EVENTOS: PRESERVADO (A intacta; B com FAQ de eventos; C→B 301 direto; 47 fotos)

LOVABLE: NÃO PUBLICADO
MAIN: NÃO ALTERADA

PRÓXIMAS DECISÕES QUE EXIGEM ALEXANDRE/CHATGPT:
1. Publicar no Lovable: a branch acumula 4 commits (2 nunca publicados da linha principal incluídos? não — main publicada vai até e6705df; pendentes na main: 62dd35b, 79a3f52; na branch: +4 commits). Ordem sugerida: merge da branch em main quando aprovado, depois sync no Lovable, depois validar produção.
2. META descriptions dos 14 vídeos genéricos — normalizar? (doc P5)
3. Promessas comerciais (mesmo dia / 1 dia útil / 48h / fotografa pessoalmente) — quais são operacionalmente seguras? (doc P7)
4. Duplicações visuais restantes na Home (industrial ×3, logística ×2 etc.) — trocar ou aceitar? (doc P6)
5. Expansão de postBridges e conteúdo para clusters finos (logística/indústria/advocacia) — diretriz de conteúdo (doc P9)
6. Schema url www vs non-www — padronizar? (doc P8)
