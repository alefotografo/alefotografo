# Cirurgia 09K — Correção cirúrgica de links internos de saúde

Escopo: somente `src/routes/fotografia-para-clinicas.tsx`. Nenhuma página de saúde (A/B/C/D) alterada.

## Diagnóstico de destinos candidatos

Busca no catálogo (35 galerias) e nas rotas do projeto: **não existe** página dedicada a hospitais/operadoras, psicologia/nutrição/terapias ou estética/dermatologia. As únicas galerias de saúde são A, B, C, D e `ensaio-fotografico-para-dentistas`.

## Alterações (1 arquivo)

1. **Card "Hospitais e operadoras" (linhas 201-206)** — sem destino existente adequado: **REMOVER o card** do array `segmentos`, preservando o texto somente se houvesse destino (não há). Não aponta mais para B.
2. **Listagem de galerias de clínicas (linha 53)** — remover `"retratos-de-medicos"` de `clinicCategorySlugs`. B deixa de aparecer como galeria de clínica; B não é removida de nenhum outro contexto.
3. **Card "Psicologia, nutrição e terapias" (linhas 195-200)** — sem página mais adequada existente: **PRESERVAR destino A** e reportar.
4. **Card "Estética e dermatologia" (linhas 189-194)** — sem página mais adequada existente: **PRESERVAR destino C** e reportar.

## Não alterar

A/B/C/D, titles, metas, H1/H2, FAQ, schemas, canonical, galerias, imagens, URLs, redirects, sitemap, robots, Home, Header, Footer, autoLink, CSS, componentes globais. Nenhuma página/slug novo. Nenhum refactor.

## Validação

- B ausente da listagem de galerias de clínicas; "Hospitais e operadoras" ausente dos cards.
- A/B/C/D respondem 200 (Playwright ou curl).
- Nenhum redirect criado; nenhuma URL nova.
- Typecheck passou.

## Resposta final no formato pedido

HOSPITAIS E OPERADORAS / B NA LISTAGEM / PSICOLOGIA / ESTÉTICA / ARQUIVOS ALTERADOS / A/B/C/D / VALIDAÇÃO / PENDÊNCIA.
