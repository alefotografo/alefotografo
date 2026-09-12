# Cirurgia 09J — Reposicionar "Retratos de Médicos" (página B)

Escopo: somente dados da galeria `retratos-de-medicos`. Sem redirect, sem mudança de URL/canonical. A, C, D, Home e demais páginas intocados.

## Estado atual confirmado
- `src/data/categorySeo.ts` (linha 47): TITLE e META já são exatamente os pedidos — nada a alterar.
- `src/data/catalog.cats.json`: `title` = "Retratos de Médicos" (H1, preservar); `subtitle` e `description` atuais carregam a sobreposição (abrem com "Fotos Profissionais para Médicos em São Paulo", citam clínicas, equipe, recepção, vídeo institucional) — substituir.
- `src/data/categoryEditorial.ts`: B não tem entrada (herda FAQ genérica). Estrutura da entrada: `eyebrow`, `sections` (h + paragraphs), `faqs`, `ctaLabel`, `waMessage`.
- Galeria: 25 imagens em `categoryImages` — intocada.

## Alterações (2 arquivos de dados)

### 1. `src/data/catalog.cats.json` (somente o objeto `retratos-de-medicos`)
- `subtitle`: esvaziar (remove "vídeos institucionais").
- `description`: substituir pela introdução fornecida:
  "Retratos profissionais para médicos produzidos em consultório, clínica ou estúdio, com direção durante a sessão para criar imagens adequadas à comunicação profissional, sites, perfis, imprensa e materiais de apresentação."
- `title`, `seo_title`, `cover`, `image_count`: preservados.

### 2. `src/data/categoryEditorial.ts` (nova entrada `retratos-de-medicos`)
- 3 seções com os H2 e textos fornecidos:
  - "Retratos profissionais para médicos"
  - "No consultório ou em estúdio"
  - "Imagens para diferentes canais profissionais"
- FAQ exclusiva com as 5 perguntas fornecidas, respostas objetivas baseadas só em capacidades já confirmadas no site (consultório/estúdio Alameda Santos, direção durante a sessão, uso em LinkedIn/site) — sem prazo, preço ou condições comerciais.
- `ctaLabel`/`waMessage` no padrão das demais entradas.

## Verificação pós-mudança (somente leitura)
- Confirmar âncoras recebidas por B; reportar como pendência as ligadas a clínicas/hospitais/operadoras/vídeo (já identificada no 09I: card "Hospitais e operadoras" em `/fotografia-para-clinicas` → B). Não corrigir.

## Validação
- Typecheck; B 200; canonical próprio; TITLE/META/H1 preservados; H1 único; nova introdução e 3 H2 renderizados; nenhuma referência a vídeo institucional/clínicas no corpo de B; galeria 25 imagens; FAQ específica + FAQPage válido; A, C, D inalteradas.
