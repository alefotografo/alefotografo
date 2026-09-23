# 01 — Evidência GSC autenticada (fonte e método)

## Origem dos dados

Os números desta pasta NÃO foram obtidos pelo ambiente do Kimi (que não possui
credencial Google — ver P18Q1, decisão G). Foram fornecidos pelo proprietário,
que conectou **Google Search Console → Windsor.ai → ChatGPT** e extraiu o
cruzamento **query × page** da propriedade autenticada:

- **Propriedade:** `sc-domain:alefotografo.com.br` (cobre http/https, www, apex)
- **Período:** 15/06/2026 → 14/09/2026
- **Search type:** web
- **Data da coleta:** 2026-09-23

## Integridade

- Fonte primária: GSC da propriedade de domínio (dados de primeira mão do Google).
- Consulta e página foram cruzadas **diretamente** na mesma extração — nada foi
  inferido cruzando relatórios separados de Queries e de Pages.
- Os dados foram transcritos para esta documentação sem agregação ou recálculo,
  exceto onde explicitamente sinalizado (médias de posição já vêm do GSC).

## Limitação conhecida (declarada, não escondida)

Não temos acesso ao arquivo bruto da extração (CSV/XLSX do Windsor.ai) neste
ambiente; os valores foram informados no briefing da missão pelo proprietário.
Por isso, métricas derivadas (shares, comparativos) usam apenas aritmética
simples sobre os números informados, e cada tabela registra seus valores-fonte.
O addendum da P18Q1 (`../2026-09-23-query-page/11-authenticated-gsc-result.md`)
preserva essa cadeia de custódia.

## Aviso metodológico — dimensão PAGE

Impressões por página para uma mesma query **podem somar mais que o total da
query**, pois uma busca pode exibir várias URLs do mesmo site. Por isso:

- NUNCA calculamos `impressões da página / 17.107` como "share de usuários";
- usamos apenas **dominância relativa entre páginas** (ordenação por
  impressões e cliques) para classificar o owner.

## Decisão atualizada (registro formal)

| Campo | Valor |
|---|---|
| Decisão P18Q1 anterior | G — INCONCLUSIVO (GSC indisponível no ambiente) |
| Decisão atualizada | **D — BLOG É O OWNER PRINCIPAL** |
| Subclassificação | Fragmentação entre posts; money pages secundárias |
| Confiança | HIGH (query×page real, período de 3 meses, volume alto) |
| Primary page | /blog/fotografo-5-poses-para-retrato-corporativo |
| Secondary page | /blog/11-ideias-para-o-plano-de-fundo-de-seu-retrato-profissional |
| Tertiary | /blog/7-dicas-para-voce-nunca-mais-errar-na-aparencia-ao-tirar-fotos-profissionais |
| /foto-profissional owner? | **NÃO** — 9 impressões no período (www 5 + apex 4) |
