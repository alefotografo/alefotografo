# 10 — Plano P18Q3 (pré-requisitos e escopo proposto)

> **Atualização P18Q2R (2026-09-23):** gate de entrada ATENDIDO com dados
> reais (detalhes e números em `12-p18q2r-corrections.md`). Resultado: a
> demanda "ensaio" existe no domínio (799 impressões somadas nas 4 queries),
> mas tem ZERO linhas para `/foto-profissional`; queries exatas "são paulo"
> não retornam linha. **Decisão provisória: NÃO alterar title/meta/H1/URL/
> schema/estrutura.** O item 1 abaixo fica suspenso. As bridges do item 2
> foram executadas na missão P18Q2I.

P18Q3 = missão seguinte: definir e executar o reforço comercial de
`/foto-profissional`. Esta missão (P18Q2) entrega o diagnóstico; P18Q3 decide
com dados de validação.

## Gate de entrada (dados a obter antes de qualquer mudança)

1. **Top 50 queries da página** `/foto-profissional` no GSC (page filter).
2. **Queries contendo "ensaio"** e **"são paulo"** no cluster (para validar as
   4 hipóteses de `09`).
3. **Comparativo de CTR** dos posts vencedores por faixa de posição
   (alimenta `07` e decide se existe teste de snippet viável).

Sem esses dados: P18Q3 fica em modo diagnóstico, sem alteração de title.

## Escopo proposto para P18Q3 (a aprovar)

### 1. Pacote de busca (title/meta) — condicional aos dados
- Se as top queries da página confirmarem intenção "são paulo/ensaio":
  title curto na linha "Foto Profissional em São Paulo — Ensaio com Direção
  de Pose" (≤60), description com prova (entrega 1 dia útil, galeria real).
- NÃO usar nenhuma palavra da lista de proibidas; tom da marca
  (produzimos/realizamos/entrega).

### 2. Internal links de entrada — depende de aprovação do plano `06`
- Implementar as 4 bridges novas (11-ideias, 7-dicas, 7-lugares, 14-vezes)
  seguindo `06-internal-link-plan.csv`.
- Avaliar pillar page: incluir `/foto-profissional` no `PILLAR_PAGES` do
  `autoLink.tsx` com phrases ["foto profissional em são paulo", "ensaio
  profissional"] — decisão de código com revisão de risco (mudança global
  em 187 posts; hoje a página já recebe 6–8 links por post via LinkHub).

### 3. Prova
- Incluir 1 vídeo curto (bastidor de sessão real) se houver material próprio
  disponível no acervo.
- Link para galeria já existe; avaliar menção a cases quando publicados
  (P18-NIGHT docs 17–22 — ainda pendentes de briefing).

### 4. Explicitamente FORA de escopo
- Reformular H1, seções ou FAQ (estão corretos)
- Criar nova página
- Competir com os posts vencedores por "foto profissional" head

## Dependências externas
- Aprovação do proprietário do plano de links (`06`)
- Briefing de cases (se prova nomeada entrar no escopo)
- Extração GSC (2 min, mesmo fluxo Windsor.ai usado nesta missão)
