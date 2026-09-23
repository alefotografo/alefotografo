# 08 — Recommendation (DECISION: G — INCONCLUSIVO) e próximo passo

## Decisão

**G — INCONCLUSIVO — GSC QUERY×PAGE NÃO DISPONÍVEL.** Nenhuma URL foi declarada owner; as hipóteses H1 (/loja legada), H2 (home) e H3 (descartada como owner principal pelos fatos separados) estão registradas em 06 com pesos de evidência. A canibalização e o legacy leakage ficam como UNKNOWN/SUSPEITA.

## O ÚNICO próximo passo (2 minutos — resolve tudo)

### Opção 1 — Interface GSC (manual, mais rápida)

1. Acesse https://search.google.com/search-console
2. Selecione a propriedade **sc-domain:alefotografo.com.br** (Domain Property — cobre http/https/www/apex; se só existir a propriedade de prefixo https://www.alefotografo.com.br/, use-a e declare isso)
3. **Performance** (Desempenho) → Pesquisa na Web
4. Período: **15/06/2026 → 14/09/2026** (customizado)
5. Na tabela de **Consultas**, localize a linha **foto profissional** e **clique nela** (isso aplica o filtro de consulta) — ou use "+ Novo → Consulta → Consultas personalizadas" com regex exato: `^foto profissional$`
6. Com o filtro ativo, abra a aba **PÁGINAS** → esta tabela **É o query×page real**: cada URL com cliques, impressões, CTR e posição para a consulta
7. **Exportar** (botão acima do gráfico → Baixar CSV) e me envie o arquivo
8. Repita com a aba Consultas filtrando por PÁGINA para os docs 04 e 05:
   - filtro de página `https://www.alefotografo.com.br/foto-profissional` → aba Consultas → exportar (top 50)
   - filtro de página `https://www.alefotografo.com.br/` → aba Consultas → exportar (top 50)
9. Para as variantes (02) e o bloco LinkedIn (03): mesmo procedimento, trocando a consulta filtrada — regex sugerido para o bloco de variantes: `^fotos? profissionais?$|^fotografia profissional$|^fot[oó]grafo profissional$|foto profissional (são paulo|sp)|fotos profissionais são paulo|fotografia profissional são paulo`

### Opção 2 — API (para execução futura com credencial OAuth2)

Propriedade: `sc-domain:alefotografo.com.br` · período 2026-06-15→2026-09-14 · searchType `web` · dimensions `["query","page"]`.

```python
# Requer: pip install google-api-python-client google-auth
# Credencial OAuth2 com escopo https://www.googleapis.com/auth/webmasters.readonly
from googleapiclient.discovery import build
svc = build('searchconsole', 'v1', credentials=creds)
req = {
  "startDate": "2026-06-15",
  "endDate": "2026-09-14",
  "searchType": "web",
  "dimensions": ["query", "page"],
  "dimensionFilterGroups": [{"groupType": "and", "filters": [
      {"dimension": "query", "operator": "equals", "expression": "foto profissional"}]}],
  "rowLimit": 100
}
for row in svc.searchanalytics().query(siteUrl="sc-domain:alefotografo.com.br", body=req).execute().get("rows", []):
    q, p = row["keys"]
    print(f"{row['impressions']:>7} impr | {row['clicks']:>4} cl | pos {row['position']:>6.2f} | {p}")
```

## O que farei com o dado (classificação final)

| Resultado esperado possível | Classificação | Ação subsequente (a decidir na missão seguinte) |
|---|---|---|
| Uma URL com >60% das impressões | PRIMARY OWNER (A/B/C/D conforme a URL) | se legada → LEGACY CLEANUP (convergência); se home → avaliação de alinhamento; se página dedicada → STRENGTHEN |
| Duas+ URLs com parcelas materiais | FRAGMENTED (F) | hierarquia de links internos; sem mudança de URL |
| /loja com parcela significativa | LEGACY-DOMINATED (E) | acelerar convergência de índice (já há 301 — verificar exibição) |
| Blog como owner | D | avaliar intent match (FASE 10) antes de qualquer reposicionamento |

## O que NÃO recomendo agora (FASE 19–20)

- NÃO mexer em title/meta/H1 de nenhuma página (SEO LOCK desta missão e das anteriores).
- NÃO concluir "title ruim" pelo CTR 0,12% — primeiro é preciso saber QUAL URL recebe as impressões e QUE TIPO de SERP (hoje: 4/5 resultados sobre IA) explica o CTR.
- NÃO desindexar /loja manualmente — convergência por 301 já está em andamento; qualquer aceleração passa pela missão de decisão com o dado real.

**Nada implementado. Zero alterações no site.**
