# 11 — Arquitetura dos Cases (alefotografo.com.br)

Data: 16/09/2026 · **NENHUMA página de case foi criada** (esta missão é planejamento).

## Rotas planejadas (premissa do proprietário — não questionar)

- `/portfolio` → hub geral (já existe; ganhará entrada para cases)
- `/portfolio/cases` → hub Cases de Sucesso
- `/portfolio/cases/all-facilities-seu-mart`
- `/portfolio/cases/ativa-logistica`
- `/portfolio/cases/alfa-silk`
- `/portfolio/cases/clinica-odontologica-dra-luciana-xavier`

### Atenção técnica (risco de rota)
O router atual usa `portfolio.$slug.tsx` dinâmico. O segmento literal `cases` precisa de precedência sobre `$slug` (rota estática `portfolio.cases.tsx` vence dinâmico no TanStack Router por especificidade — confirmar na implementação e garantir que `/portfolio/cases` não seja capturado como slug "cases"). Registrar como item de verificação obrigatória na missão de implementação.

## Template editorial do Case

1. **H1:** padrão `[Cliente] — [tipo de trabalho] em [cidade]` (ex.: "ATIVA Logística — Fotografia e vídeo corporativo de logística em São Paulo"). Só fatos comprovados.
2. **Bloco identificação:** cliente · setor · local (se confirmado) · ano (se confirmado).
3. **Contexto:** quem é o cliente, o momento (aniversário, campanha, reforma de marca...).
4. **Objetivo visual:** o que as imagens/vídeo precisavam comunicar.
5. **Desafio:** limitações reais (espaço, tempo, luz, operação em andamento...).
6. **Abordagem:** direção de Alexandre, equipe envolvida (se houver), equipamento (só se confirmado).
7. **Execução:** como foi feito, em campo/estúdio.
8. **Entregáveis:** fotos, vídeos, reels, banco de imagem — só o que foi entregue de fato.
9. **Galeria:** imagens reais do trabalho (já existem no acervo/banco do Alexandre).
10. **Vídeo:** embed YouTube quando houver (player, não autoplay).
11. **Aplicações:** onde as imagens foram usadas (site, LinkedIn, materiais) — só se confirmado.
12. **Serviços relacionados:** links internos para as páginas de serviço correspondentes.
13. **CTA:** orçamento via WhatsApp 5511913550533.

## LOCK editorial — nunca inventar

ROI, resultado comercial (% de conversão, faturamento), depoimentos, métricas, datas, locais, equipamentos, nomes de equipe — sem evidência em material fornecido pelo Alexandre. Se o briefing não trouxer, o campo fica de fora.

## Schema recomendado por case

- `Article` (ou `CreativeWork`) com `author` = Person Alexandre Machado
- `ImageObject`/`VideoObject` na galeria (já é padrão do site: VideoObject em 144 páginas)
- `BreadcrumbList` (padrão existente: 411 páginas)
- `FAQPage` apenas se houver FAQ real do case
- **NÃO usar** `Review`/`AggregateRating` sem avaliações reais; não existe `CaseStudy` schema padronizado no Schema.org — usar Article + propriedades corretas em vez de inventar tipo.

## Indexação e linking interno

- Cada case entra no sitemap.xml com `lastmod` real.
- Hub `/portfolio/cases` lista todos com thumbnails reais.
- Links naturais: case → serviços → nicho → (quando houver) blog com bastidores.
- Cross-domain: 1 link contextual para VC quando o case incluir vídeo entregue (ver 06-cross-domain-crosslink-plan.csv).
