# Fase 4 — Arquitetura de autoridade e linkagem interna

Regra desta fase: **nenhum slug, redirect ou canonical é alterado**. Nada é excluído. Só mexemos em navegação, linkagem interna, conteúdo e hierarquia de intenção.

## 1. /portfolio deixa de ser órfã e passa a ser hub de prova

- Reestruturar `/portfolio` em blocos por categoria/intenção: retrato corporativo, executivos, médicos, advogados, empresas, eventos corporativos, feiras, institucional, indústria e logística, vídeos.
- Cada bloco aponta para **(a)** a página comercial correspondente e **(b)** as galerias/cases relevantes — nunca só imagens soltas.
- Links contextuais visíveis para `/portfolio` a partir de: home, `/servicos`, páginas comerciais principais (retratos, executiva, corporativas, eventos, feira, empresarial), `/videos` e `/sobre`.

## 2. Zerar as 81 páginas órfãs

- **65 vídeos:** `/videos` passa a listar todos os vídeos com link HTML real para `/videos/$slug` (paginação/abas que renderizam links no HTML servido, sem depender de JS). Em cada vídeo, bloco "Outros vídeos" com 6 links temáticos.
- **15 posts:** `/blog` com listagem/paginação completa, garantindo ≥1 link interno por post. Bloco "Continue explorando" (componente já existente) nos posts que não o exibem.
- **/portfolio:** resolvido no item 1 + entrada no rodapé.

## 3. Equilibrar autoridade das páginas comerciais

- Rodapé passa a incluir `/fotografo-empresarial` e `/fotografo-de-feira-de-negocios` (hoje com ~156 e ~89 links contra ~340 das demais).
- Reduzir dependência do rodapé: links **dentro do conteúdo**, com âncora descritiva e contexto real:
  - páginas de serviço → comerciais relacionadas;
  - blog → comercial correspondente (retrato executivo → `/fotografia-executiva`; LinkedIn → `/foto-profissional-para-linkedin`; feira → `/fotografo-de-feira-de-negocios`; empresas → `/fotografo-empresarial`; vídeo institucional → `/videos`);
  - vídeos → comercial equivalente;
  - `/portfolio` → comerciais;
  - comerciais → cases/galerias.
- Nenhum link sem contexto só para inflar contagem.

## 4. Separar intenção nos 4 pares canibalizados

Médicos · advocacia · eventos corporativos · industrial. Em cada par, a **página comercial** assume a intenção de contratação (H1, copy, CTA, objeções, o que entra no projeto) e a **galeria** assume intenção de prova visual (H1 e copy de case/portfólio, apontando para a comercial). Sem redirect, sem canonical entre elas, sem mudança de slug — só title/H1/copy e direção dos links.

## 5. Meta descriptions curtas (por último)

Depois dos itens acima, reescrever as 10 descriptions entre 42 e 64 caracteres para ~110–155, com intenção, benefício e contexto. Sem repetir o title, sem enchimento, sem keyword stuffing.

## 6. Relatório final

Entrego em `.lovable/fase4-linkagem.md`: órfãs antes/depois · links adicionados para `/portfolio`, `/fotografo-de-feira-de-negocios` e `/fotografo-empresarial` · paginação corrigida em `/blog` e `/videos` · mapa dos 4 pares canibalizados · mudanças de title/H1/copy · as 10 descriptions alteradas · comerciais que ganharam links contextuais · confirmação de que nenhum slug, canonical ou redirect mudou.

## Detalhes técnicos

- Arquivos previstos: `src/routes/portfolio.index.tsx`, `videos.index.tsx`, `videos.$slug.tsx`, `blog.index.tsx`, `blog.$slug.tsx`, `servicos.tsx`, comerciais (`fotos-corporativas`, `fotografia-executiva`, `eventos-corporativos`, `fotografo-empresarial`, `fotografo-de-feira-de-negocios`, `fotos-profissionais-medicos`, `fotografia-para-advogados`, `fotografia-para-clinicas`), `fotografo-corporativo.$slug.tsx`, `src/components/site/Footer.tsx`, `RelatedLinks.tsx`, `src/data/postSeo.ts`/`categorySeo.ts` para descriptions.
- Navegação sempre com `<Link to>` + `params` (SSR + preload preservados).
- Validação: recrawl do grafo interno confirmando 0 órfãs antes de publicar.

## Ordem de execução

1. Rodapé + `/portfolio` (impacto imediato).
2. Vídeos e posts órfãos.
3. Links contextuais e separação de intenção.
4. Descriptions + relatório + publicação.
