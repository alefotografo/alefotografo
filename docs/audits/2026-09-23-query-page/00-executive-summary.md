# 00 — P18Q1 — Foto Profissional Query×Page — Executive Summary

Data: 2026-09-23 · Branch: research/p18q1-foto-profissional-query-page (base origin/main 875ac11) · **Diagnóstico puro: zero alterações de site, código, SEO ou produção.**

## Resultado da FASE 0 (fontes)

**Não existe fonte autenticada de GSC neste ambiente.** Verificado sem contornos:
- `gcloud` não instalado; `~/.config` sem credenciais Google (só `gh` e `configstore`);
- zero variáveis de ambiente Google/GSC;
- nenhum script do histórico (P18A.6/P18A.6R) usa API do GSC — o pipeline sempre trabalhou com **export XLSX manual** (dimensões Consultas e Páginas **separadas**).

Status: **BLOCKED — QUERY×PAGE REQUIRES AUTHENTICATED GSC DATA.** Nenhum número foi inventado; nenhuma associação query→URL foi inferida cruzando relatórios separados (proibição explícita da missão, respeitada em todos os documentos).

## O que esta missão entrega sem o dado real

1. **Pacote de coleta pronto para execução manual** (2 minutos na interface do GSC): filtros exatos, propriedade correta, período, tipo de pesquisa, e um script de API pronto para uso futuro com credencial OAuth — ver 01–05 e 08.
2. **SERP support de hoje (23/09)** — apoio, não substituto: a única URL própria no top 5 de "foto profissional" é a **URL legada /loja** (title: "Foto Profissional em SP | Alexandre Machado"), seguida de 4 resultados de conteúdo sobre IA/prompts. Ver 07.
3. **Análise de candidatos estritamente factual** — os volumes de cada página e de cada query são apresentados **separadamente**, com o cruzamento proibido explicitamente marcado como UNKNOWN. Ver 06.
4. **DECISION: G — INCONCLUSIVO — GSC QUERY×PAGE NÃO DISPONÍVEL** (formato A–G da missão), com próximo passo único: obter o query×page real.

## Fatos ancorados (snapshot 15/06–14/09/2026, Tipo=Web — dimensões SEPARADAS)

| Dimensão CONSULTAS | | Dimensão PÁGINAS | |
|---|---|---|---|
| query "foto profissional" | 17.107 impr · 21 cl · pos 3,92 · CTR 0,12% | / (home) | 25.212 impr · 352 cl · pos 7,05 |
| cluster "foto profissional" (38 queries) | 29.140 impr · 104 cl | /foto-profissional | **~59 impr · 0 cl · pos ~14,83** |
| | | /loja (legada) | 1.197 impr · pos 39,39 |
| | | /loja/pacote-* (legados) | ~2.560 impr |

**Estas duas colunas NÃO se cruzam.** As 25.212 impressões da home são o total de milhares de queries; as 59 de /foto-profissional são o total das queries que a alcançam. Qual parcela das 17.107 pertence a cada URL só o GSC autenticado pode dizer.

## Leitura hipotética (não conclusiva, sem valor de decisão)

Os indícios convergentes — title da legada casando literalmente com a query + única presença owned na SERP de hoje + /foto-profissional com volume residual — são **consistentes com** a URL legada /loja sendo a principal ranqueadora atual, mas isso permanece **hipótese não verificada** até o query×page real. Se confirmado, a decisão será "LEGACY-DOMINATED" com implicação de convergência (não de otimização de title/meta).
