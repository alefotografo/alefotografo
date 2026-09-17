# 06 — Plano de correção de performance (NÃO IMPLEMENTAR — proposta)

Data: 17/09/2026 · Base: 01 (baseline) + 02 (opportunities) + 03/04 (lab) + 05 (CWV). Ordenado por impacto mobile (67% dos cliques no GSC).

## Ordem recomendada de implementação

### FASE 1 — LCP de campo (o CWV que está FAILED)
1. **Reduzir TTFB da home (P1).** Evidência: TTFB p75 2.1–2.3 s (Poor 32–49%); lab frio 1.4–2.0 s vs warm 0.2 s; fase TTFB = 54% do LCP lab. Provável: cold start do deployment Lovable + SSR sem cache de página. Opções (escolher após investigação): cache HTML no Cloudflare (edge TTL curto com purga no deploy), ISR/streaming do SSR, ou reduzir trabalho server-side por rota. Risco: conteúdo dessincronizado — mitigar com TTL ≤ 5 min ou purga por deploy.
2. **Desintermediar o CDN legado no hero LCP (P1).** Evidência: LCP element é `<img>` servida por `/api/public/img?src=...rackcdn.com` (proxy do app); Load Time = 44% do LCP. Fix: hospedar o hero (e preferencialmente as fotos do acervo mais usadas) em asset próprio com cache longo (`/img` ou bucket __l5e), ou cachear a resposta do proxy com TTL. Manter eager + fetchpriority=high (já corretos). Risco: baixo.

### FASE 2 — bytes e revisitas
3. **srcset/sizes do proxy de imagens (P2).** 4 imagens via proxy renderizam maiores que o necessário (~97 KiB mobile). Ajustar widths gerados. Risco: baixo (validar visualmente qualidade).
4. **Cache das fontes self-hosted (P2).** 5 arquivos .woff2 com TTL 0. `cache-control: public, max-age=31536000, immutable` (fontes têm nome versionado). Risco: nulo.
5. **CSP (P2, segurança).** Definir Content-Security-Policy em modo report-only primeiro, depois enforcement. Só depois de mapear gtag/YouTube/img-proxy. Risco: médio se pulsar etapas.

### FASE 3 — preventivo/score-only
6. Code-split do vendor-tanstack (43 KiB não usados) — P3, ganho preventivo de TBT (hoje 0).
7. HSTS preload (P3) — só após validar todos os domínios.
8. Source maps no build (P3) — debuggabilidade.
9. XFO/COOP/Trusted Types (P3) — hardening, sem pressa.
10. Link duplicado "Solicitar orçamento" (P3) — acessibilidade de descrição, score já 100.

## O que NÃO fazer
- Não perseguir score 100 de Performance sacrificando qualidade visual do portfólio (fotografia é o produto — compressão agressiva destrói valor comercial).
- Não remover o proxy de imagens de uma vez (as imagens vivem no rackcdn legado — migração de mídia é projeto próprio, fora desta missão).
- Não mexer em tracking (gtag) sem decisão do proprietário.
- Não tratar score Lighthouse como ranking — o alvo é CWV de campo (LCP ≤ 2.5 s no p75 mobile).

## Métricas de validação pós-implementação (quando autorizado)
- CrUX p75 mobile: LCP ≤ 2.5 s (hoje 3.3) · TTFB ≤ 1.8 s (hoje 2.3) · manter INP ≤ 200 ms e CLS ≤ 0.1.
- Lab mediana (3 runs): LCP mobile ≤ 2.5 s.
- GSC: monitorar estabilidade de cliques/impressões mobile (sanidade de que a mudança não prejudicou SEO).

## Resumo executivo
| Prioridade | Item | Métrica alvo |
|---|---|---|
| P1 | TTFB/home SSR cache | TTFB p75 ≤ 1.8 s |
| P1 | Hero fora do proxy rackcdn | LCP p75 ≤ 2.5 s |
| P2 | srcset proxy + cache de fontes + CSP report-only | FCP ↓ / segurança |
| P3 | bundle split, HSTS preload, source maps, a11y link | score/preventivo |
