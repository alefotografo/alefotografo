# Remover a foto de grupo da seção "Retratos profissionais" na Home

## O que será feito

Remover a primeira foto do array `FOTOS` em `src/components/site/home/RetratoProfissional.tsx`:

- A foto de grupo ("Equipe executiva em reunião em sala corporativa em São Paulo", asset `retratos-equipe.png.asset.json`) sai da seção.
- A seção passa a exibir apenas o retrato masculino (foto vertical, rackcdn).
- Nenhum outro arquivo é tocado: alt, link, textos, tokens, hierarquia de títulos (h3) permanecem iguais.

## Layout após a remoção

A grade interna da coluna de fotos (`sm:grid-cols-2`) fica com um único item; a foto ocupa metade da largura da coluna em tablet e a largura da coluna no desktop, mantendo a proporção 2/3 e o corte atual.

## Validação

- Renderizar a Home no preview (desktop 1280px e mobile 390px) e confirmar que a foto de grupo sumiu e o retrato masculino carrega.
- Typecheck (`bunx tsc --noEmit`).

## Relatório

1. Arquivos criados: nenhum.
2. Arquivos alterados: `src/components/site/home/RetratoProfissional.tsx`.
3. Títulos: sem alteração — um h3 ("Retratos profissionais").
4. Imagens: restante apenas o retrato masculino (rackcdn), origem `/foto-profissional`.
5. Imagens pendentes: nenhuma.
6. Links inexistentes: nenhum.
7. Regras contornadas: nenhuma.
