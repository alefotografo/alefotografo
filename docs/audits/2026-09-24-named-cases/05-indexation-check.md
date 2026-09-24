# 05 — Indexation check

| URL | HTTP | index,follow | canonical próprio | sitemap | llms.txt |
|---|---|---|---|---|---|
| /cases | 200 | default | sim | sim | sim |
| /cases/ativa-logistica | 200 | default | sim | sim | (hub citado) |
| /cases/rocha-e-queiroz-advogados | 200 | default | sim | sim | (hub citado) |

- Conteúdo principal em HTML servido (SSR): resumo em <dl>, seções, galeria,
  vídeos (thumbnails reais no HTML; player facade por clique), FAQ — tudo
  presente sem depender de JS para o conteúdo textual.
- Links internos rastreáveis: <a href> padrão (Link do TanStack renderiza href
  no SSR).
- Nenhum noindex adicionado. Nenhuma URL existente removida do sitemap.
- Sitemap: validado em /sitemap.xml — 3 entradas /cases presentes.
- llms.txt: seção "Cases" em Páginas principais, com descrição factual de cada
  case e link do hub.
