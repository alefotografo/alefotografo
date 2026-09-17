# 05 — Core Web Vitals (campo × lab)

Data: 17/09/2026 · Fonte campo: relatório PageSpeed compartilhado (CrUX, coleta de 28 dias) · Fonte lab: Lighthouse local (3× mobile, 3× desktop).

## Veredito oficial (campo)

| | MOBILE | DESKTOP |
|---|---|---|
| Core Web Vitals Assessment | **FAILED** | **FAILED** |
| Métrica causadora | **LCP 3.3 s (NI band 2.5–4 s)** | **LCP 3.3 s (NI band)** |
| INP | 92 ms GOOD | 92 ms GOOD |
| CLS | 0.01 GOOD | 0.01 GOOD |
| FCP | 3.2 s POOR | 3.2 s POOR |
| TTFB (experimental) | 2.3 s POOR (49% poor) | 2.1 s POOR (32% poor) |

Bloco origin (exibido no relatório com aviso de dados URL insuficientes): LCP 2.9 s NI · INP 48 ms GOOD · CLS 0.04 GOOD · FCP 2.7 s · TTFB 2.1 s · Assessment FAILED.

Interpretação:
1. Falha de CWV é real e causada **exclusivamente pelo LCP** — INP e CLS são saudáveis.
2. A home performa pior que a origem (LCP 3.3 vs 2.9) → a home é mais pesada que a média do site (hero grande via proxy + SSR).
3. TTFB pobre em campo (metade dos loads mobile > 1.8 s) é o motor do LCP: no lab, a fase TTFB responde por 54% do LCP.
4. FCP 3.2 s em campo reforça o mesmo motor (resposta do servidor + primeiro render).

## Lab vs campo (não confundir)

| Métrica | Lab mobile (med) | Campo mobile (p75) | Lab desktop (med) | Campo desktop (p75) |
|---|---|---|---|---|
| LCP | 3.53 s | 3.3 s | 3.21 s | 3.3 s |
| FCP | 2.48 s | 3.2 s | 1.29 s | 3.2 s |
| TBT | 0 ms | (INP 92 ms good) | 0 ms | (INP 92 ms good) |
| CLS | 0 | 0.01 | 0 | 0.01 |
| TTFB | 0.28 s (frio 1.99 s) | 2.3 s | 0.23 s (frio 1.38 s) | 2.1 s |

O lab subestima o problema de rede (máquina local, cache quente). Decisões devem usar o CAMPO.

## Thresholds oficiais usados

LCP good ≤2.5 s · NI >2.5–≤4 · poor >4 | INP good ≤200 ms · NI ≤500 · poor >500 | CLS good ≤0.1 · NI ≤0.25 · poor >0.25 | FCP good ≤1.8 · NI ≤3.0 · poor >3.0 | TTFB good ≤0.8 · NI ≤1.8 · poor >1.8.

## Cruzamento com GSC (P18A.6)

Mobile responde por 67% dos cliques e a maioria das impressões → **todas as prioridades deste plano são mobile-first**. O CWV mobile FAILED afeta page experience de 49% dos carregamentos (poor) — potencial efeito direto em ranking e, principalmente, em conversão (CTA WhatsApp abaixo do hero).
