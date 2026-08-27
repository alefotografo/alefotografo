# Relatório completo de URLs: title, description, H1, canonical, intenção e links internos

Objetivo: gerar um inventário auditável de **todas as URLs indexáveis** do site no ar (https://www.alefotografo.com.br), sem alterar nenhuma linha de código do site.

## O que entra no relatório

Uma linha por URL, com estas colunas:

1. **URL** (canônica, host `www`)
2. **Tipo** (home · comercial · galeria · bairro · post · vídeo · institucional · utilitária)
3. **Title** (com contagem de caracteres, marcando > 60)
4. **Meta description** (com contagem, marcando > 160)
5. **H1** (texto real renderizado; marcando ausência ou H1 duplicado)
6. **Canonical** (marcando divergência do próprio endereço)
7. **Palavra-chave / intenção principal** (extraída do title + H1 + slug, classificada como informacional · comercial · transacional · institucional)
8. **Links internos recebidos** (quantidade + de quais páginas partem)
9. **Status HTTP** e presença de `noindex`

## Como será feito

- Enumerar as URLs a partir de `sitemap.xml` e `sitemap-videos.xml` (fonte da verdade das canônicas).
- Buscar cada URL no ar e extrair title, description, canonical, robots, H1 e todos os `href` internos do HTML servido (SSR já entrega o conteúdo).
- Montar o grafo de links internos invertido: para cada URL, contar quantas outras páginas apontam para ela e listar as origens. Isso revela **páginas órfãs** (0 links recebidos) e **páginas sobrecarregadas**.
- Classificar a intenção por página e sinalizar **canibalização**: duas ou mais URLs disputando a mesma palavra-chave principal.

## Entregáveis

1. `.lovable/relatorio-urls.md` — relatório legível, com resumo executivo no topo (totais, órfãs, títulos/descrições fora do limite, canonicals divergentes, pares canibalizando) e as tabelas por tipo de página.
2. `.lovable/relatorio-urls.csv` — a mesma tabela em CSV para abrir no Excel/Sheets e ordenar como quiser.

## Observações

- Fase de leitura apenas: **nenhum slug, redirect, título ou conteúdo é alterado** neste passo. As correções que o relatório apontar entram depois, com sua aprovação, uma a uma.
- O relatório reflete o site publicado. Se preferir que eu rode contra o preview (para ver alterações ainda não publicadas), me diga.
