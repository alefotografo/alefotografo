# 11 — Próximas ações (saída da P18Q2)

Ordem sugerida. Nenhuma item abaixo foi executado nesta missão.

## Imediatas (proprietário, ~30 min)

1. **Aprovar ou ajustar** `06-internal-link-plan.csv` (4 bridges novas,
   âncoras variadas, zero risco estrutural — adição pura via `postBridges.ts`).
2. **Extrair do GSC** (mesmo fluxo Windsor.ai): top 50 queries de
   `/foto-profissional`, queries com "ensaio", CTR dos 5 posts por faixa de
   posição. Alimenta o gate da P18Q3.
3. Registrar execução do GEO Test Pack v2 (pendente desde a P18-NIGHT) — sem
   relação direta, mas é o maior buraco de evidência do pipeline.

## P18Q3 (próxima missão)

4. Definir pacote de busca de `/foto-profissional` condicionado aos dados.
5. Implementar bridges aprovadas.
6. Avaliar pillar page do autoLink com revisão de risco global.
7. Avaliar 1 vídeo de prova (se houver material próprio).

## Registros técnicos pendentes (não esquecer)

8. **FAQ mismatch em `/fotografo-corporativo`** — NEXT TECHNICAL TASK
   registrado nesta missão; correção fica para depois deste diagnóstico.
   Escopo sugerido futuro: revisar se o FAQ da página reflete o serviço real
   (auditoria P4 registrou inconsistência; detalhar na missão técnica).
9. **HISTORICAL HOST SPLIT** (www+apex no período): consolidação www já
   implementada; apenas aguardar GSC consolidar. Sem ação.
10. Title truncado do post 7-dicas: incluir em lote futuro controlado de
    `postSeo` (ver `08`), nunca como mudança reativa isolada.

## Não fazer (reforço)

- Não reescrever posts vencedores (lock em `05`)
- Não mudar title/meta agora (`08`)
- Não tratar a head query como oportunidade comercial direta (`07`)
- Não alterar H1 da Home (validado pelos dados: `fotógrafo profissional`
  676 impr pos 7,58; `fotógrafo corporativo são paulo` 348 impr pos 1,84)
