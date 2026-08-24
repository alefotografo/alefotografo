# Auditoria dos 301 e do estado de indexação das 412 URLs

## Situação verificada agora

- `https://alefotografo.com.br/` responde **200** e já serve este projeto.
- `sitemap-index.xml` responde 200 e aponta para os dois sitemaps.
- `sitemap.xml`: **340** URLs. `sitemap-videos.xml`: **72** URLs. Total **412**.
- Amostra de rotas legadas testada no domínio no ar: `/loja`, `/orcamento`, `/portfolio-do-fotografo`, `/videos-para-empresas`, `/foto-para-linkedin` — todas **301** para o destino correto, em um único salto.

Ou seja: o bloqueio anterior (domínio fora do ar) acabou. A auditoria completa já pode rodar.

## O que vou fazer

### 1. Auditoria de todas as regras 301
Rodo cada padrão de `src/lib/legacy-redirects.ts` contra o domínio no ar (mapeamentos exatos, `/portfolio-do-fotografo/{slug}`, vídeos removidos, aliases de galeria, categorias do WordPress, paginação do blog, barra final). Para cada URL confirmo:
- status exatamente **301** (não 302, não 307);
- destino final em **um único salto** (sem corrente);
- destino respondendo **200** (nenhum 301 apontando para 404);
- host de destino igual ao canônico `alefotografo.com.br` sem `www`.

Também confiro `www.alefotografo.com.br` → raiz e `http://` → `https://`.

### 2. Auditoria das 412 URLs do sitemap
Varredura completa de cada `<loc>` dos dois sitemaps verificando:
- status 200 (nenhuma URL do sitemap podendo estar em 301/404);
- `<link rel="canonical">` apontando para a própria URL no domínio novo;
- ausência de `noindex` na página e no cabeçalho `X-Robots-Tag`;
- título e descrição presentes e dentro dos limites.

### 3. Sitemap no Search Console
- Submeto `https://alefotografo.com.br/sitemap-index.xml` na propriedade já verificada `sc-domain:alefotografo.com.br`.
- Removo o sitemap antigo `https://www.alefotografo.com.br/sitemap.xml` (WordPress, 131 URLs, de 2021) para não acumular erro depois que o site antigo sair do ar.
- Leio o status retornado pelo Google e reporto os números reais.

### 4. Leitura do estado de indexação
Leio na propriedade verificada os dados de cobertura/desempenho disponíveis e reporto o que o Google efetivamente informa.

Importante sobre expectativa: **indexação é prazo e decisão do Google** — leva de dias a semanas após a submissão. Não existe API para forçar re-crawl ou reindexação; isso só é possível manualmente na interface do Search Console. Posso ler e reportar o estado, mas não prometo "412 indexadas" como resultado desta etapa.

## Correções previstas

Se a auditoria encontrar divergência, trato como correção pontual:
- redirect em corrente, com status errado ou apontando para 404 → ajuste em `src/lib/legacy-redirects.ts`;
- URL do sitemap que não responde 200 → remoção do gerador em `src/routes/sitemap[.]xml.ts` ou correção da rota;
- canonical divergente → ajuste em `src/lib/seo.ts`.

Se tudo estiver correto, não altero código e apenas reporto os números.

## Detalhes técnicos

- Auditoria feita por requisições HTTP com `redirect: manual`, seguindo a cadeia salto a salto para detectar correntes.
- Fonte da verdade das rotas legadas: `src/lib/legacy-redirects.ts`; canônicas: `SITE_ORIGIN` em `src/lib/seo.ts`.
- Search Console via a propriedade verificada existente; nenhuma nova verificação ou registro DNS é necessário.
