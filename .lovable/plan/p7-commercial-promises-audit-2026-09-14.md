# P7 — Auditoria de promessas comerciais (14/09/2026) — SOMENTE LEITURA

Nenhuma promessa alterada nesta missão. Objetivo: inventário para a auditoria comercial futura.

Legenda de tipo: **PRAZO** · **PESSOAL** (presença pessoal) · **PREÇO** · **QUANT** (quantidade) · OUTRO.

## Páginas de serviço (ServicePage / rotas próprias)

| URL | Texto exato (trecho) | Arquivo | Tipo |
|---|---|---|---|
| /eventos-corporativos | "entrego a seleção das melhores imagens **no mesmo dia**" (answerBlock) | src/routes/eventos-corporativos.tsx:18 | PRAZO |
| /eventos-corporativos | "Seleção de imagens liberada **no mesmo dia** para publicação imediata" (etapa 4) | :60 | PRAZO |
| /eventos-corporativos | "Consigo fotos no mesmo dia? — Sim. Uma **prévia tratada**…" (FAQ) | :76 área | PRAZO |
| /eventos-corporativos | "material completo? — **Normalmente em 1 dia útil**" (FAQ) | :77 | PRAZO |
| /eventos-corporativos | "Fotografo **pessoalmente**" (answerBlock) | :18 | PESSOAL |
| /eventos-corporativos | formatos: "Imagens tratadas **em 1 dia útil**" (retrato e equipe) | :21-22 | PRAZO |
| /fotografo-corporativo-em/* (páginas locais) | "…a seleção das melhores imagens sai **no mesmo dia** do evento" | src/data/stats.ts:84 | PRAZO |
| /fotografo-corporativo-em/* | "Entrego arquivos nomeados por matrícula… **no mesmo dia**" (contexto bairro) | src/data/bairroContexto.ts:39,42,83,103,135 | PRAZO |
| /servicos e páginas-pilar (PillarLinks) | "…com entrega **em 1 dia útil**" | src/components/site/PillarLinks.tsx:11 | PRAZO |
| /servicos e páginas-pilar (PillarLinks) | "…**prévia no mesmo dia**" | :53 | PRAZO |
| páginas com stats de entrega | "value: **1 dia útil**" / "value: **Mesmo dia**" | src/data/stats.ts:23,28 | PRAZO |

## Galerias (descrições categorySeo — META + visível)

| Slug (vencedor, servido) | Texto | Arquivo | Tipo |
|---|---|---|---|
| retrato-corporativo e 8+ vencedores | "…**orçamento no mesmo dia**" | src/data/categorySeo.ts:14,24,34,63,65,70,75,85,118,138,143,148 | PRAZO |
| (slug perdedor eventos — **não servido**, página 301) | "Seleção no mesmo dia e **entrega em 48h**" | :91 | PRAZO (morto) |
| fotografo-feiras-stands | descrição do catálogo cita "**mesmo dia**" (prévia) | src/data/catalog.cats.json:78 | PRAZO |

## FAQs (pool e comerciais)

| Onde renderiza | Texto | Arquivo | Tipo |
|---|---|---|---|
| /faq + galerias allowlist | "…**devolvo o orçamento no mesmo dia**" | src/lib/faqs.ts:23 | PRAZO |
| /faq + galerias allowlist | "imagens tratadas ficam prontas **em 1 dia útil**" | :31 | PRAZO |
| /faq + galerias allowlist | "gera imagens de ambiente e bastidores **no mesmo dia**?" | :54-59 | PRAZO |
| /faq + galerias allowlist | "Quanto tempo dura um ensaio… 20 a 40 minutos" | :31 | OUTRO (duração fixa) |
| Home FAQ + /faq | "Retratos e projetos corporativos são entregues **em 1 dia útil**… prévia **no mesmo dia**" | src/lib/faqsComerciais.ts:47 | PRAZO |
| /faq | "Empresas costumam contratar **meia diária**…" | :11 | OUTRO |

## Editoriais (categoryEditorial — páginas com bloco editorial)

| Página | Texto | Linha | Tipo |
|---|---|---|---|
| fotografia-corporativa-em-sao-paulo | "Boa parte das pessoas que **eu fotografo**…" (voz pessoal) | :179 | PESSOAL |
| fotografia-corporativa-em-sao-paulo | "Todo projeto contratado por este site é **fotografado, dirigido e finalizado por mim**" (FAQ) | — | PESSOAL |
| retrato-corporativo | FAQ "imagens tratadas ficam prontas **em 1 dia útil**" | :395 | PRAZO |
| (texto morto pós-P1B.1: seção do events removida) | "…**no mesmo dia**: são as imagens que mais circulam" | :292 | não servido |

## Blog (conteúdo — fora de escopo de alteração)

| Onde | Texto | Arquivo | Tipo |
|---|---|---|---|
| pontes entre posts | "Eu sou Alexandre Machado e **fotografo pessoalmente** esse tipo de imagem…" | src/data/postBridges.ts:36 | PESSOAL |
| corpo dos artigos | 9 ocorrências de "mesmo dia / 1 dia útil / 24 horas / orçamento no mesmo dia" | postBodies.json / catalog.posts.json | PRAZO |

## /llms.txt

- "Prazo de entrega de retratos: fotos tratadas **em 1 dia útil**." (:46)
- "…prévia **no mesmo dia**…" (:47) · "**24 horas**" (:85)

## Resumo quantitativo

- Ocorrências mapeadas (fora blog): **40+** em 12 arquivos.
- Promessas de **prazo** dominam (mesmo dia / 1 dia útil / 48h / 24h).
- **Pessoal** ("fotografo pessoalmente" / "por mim") presente em A, editoriais, pontes de blog — a maior page é a de eventos, cuja operação de grande porte é da equipe (alefotografos) — tensão operacional conhecida (registrada na P1).
- **Preço explícito**: nenhum valor em R$ encontrado. "Valor fechado"/"por bloco de horas" = modelo, não preço.
- Recomendação: auditoria comercial dedicada com o Alexandre para decidir quais promessas são operacionalmente seguras (escopo fora desta missão).
