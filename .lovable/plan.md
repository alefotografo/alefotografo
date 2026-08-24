# Enquanto o DNS propaga: preparar a troca de domínio

O DNS do registro.br ainda não publicou os registros (A e TXT). Nada no site depende disso para ser preparado, então abaixo está o que vale fazer nesse intervalo, em ordem de impacto.

## 1. Conferir se o conteúdo do site aponta para o domínio novo
Revisar todas as referências de domínio no código (canônicos, sitemap, robots, dados estruturados, links absolutos, Open Graph) e garantir que usem `https://alefotografo.com.br`, sem sobras do domínio plural.

## 2. Validar sitemap e robots antes de submeter ao Google
Gerar/conferir o `sitemap-index.xml` e os sitemaps filhos: nenhuma URL 404, nenhuma URL do domínio antigo, todas com o host novo. Assim que o domínio ficar ativo, é só submeter no Search Console — sem retrabalho.

## 3. Mapa de redirecionamentos 301 do domínio antigo
Consolidar em uma lista única as URLs antigas rankeadas e o destino correspondente no site novo, para que nenhuma autoridade seja perdida na virada.

## 4. Checagem de SEO on-page por página
Conferir título único (<60 caracteres), meta description (<160), um único H1, alt em imagens e dados estruturados válidos em cada rota de conteúdo.

## 5. Verificação técnica final
Rodar uma varredura de links internos e imagens quebradas, e checar o tempo de carregamento das páginas principais no build publicado.

## Depois que o DNS propagar (fora deste plano)
- Confirmar verificação do domínio e emissão automática do SSL.
- Submeter o `sitemap-index.xml` no Search Console e remover o sitemap antigo de 2021.
- Solicitar indexação das páginas principais.

## Detalhes técnicos
- Origem canônica única em `src/lib/seo.ts` (`SITE_ORIGIN`), usada por todas as rotas.
- Sitemaps e `robots.txt` derivados dessa mesma constante, evitando divergência.
- Redirecionamentos 301 mantidos em uma tabela única de mapeamento, sem duplicidade de regras.
