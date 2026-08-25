# Finalizar a migração para o www: sitemap, rotas pendentes e redirects

O Publish já saiu. Verifiquei a produção agora e o essencial está correto: a home, `/videos` e `/fotos-corporativas` respondem **200** com canonical em `https://www.alefotografo.com.br/...`, o `sitemap.xml` traz **340 URLs, todas em www** (incluindo as duas páginas), e o `robots.txt` aponta os sitemaps no www.

Ou seja: **não há 404 real em `/videos` nem em `/fotos-corporativas`**. O 404 que aparece no Search Console é dado antigo, de um rastreamento de abril/2026 feito no site anterior. Não é corrigível por código — só por novo rastreamento. O plano abaixo confirma isso, reenvia o sitemap agora que o HTML publicado é o definitivo, e fecha as pontas que sobraram.

## 1. Reenviar e conferir o sitemap no Search Console

- Reenviar `https://www.alefotografo.com.br/sitemap-index.xml` na propriedade de domínio, para o Google baixar a versão publicada (o download anterior, das 00:42, ainda pegou os endereços sem www).
- Ler o status depois do download e confirmar **0 erros / 0 avisos** nos três sitemaps (índice, páginas, vídeos).
- Se aparecer contagem de erro sem motivo declarado, eu registro isso como "erro reportado, causa não informada" em vez de adivinhar a causa.

## 2. Rotas pendentes

- Reinspecionar `/videos` e `/fotos-corporativas` no URL Inspection para registrar o estado atual no índice do Google.
- Ambas já estão no sitemap e com canonical auto-referente, então a saída do 404 antigo depende só de novo rastreamento — dias para essas páginas, sem ação possível pela API.
- **Correção de código pequena**: hoje `/videos-para-empresas` e `/videos-corporativos` redirecionam 301 para `/videos`, mas duas variações prováveis do site antigo respondem 404 — `/video-corporativo` e `/fotografia-corporativa`. Vou adicionar 301 dessas duas para `/videos` e `/fotos-corporativas`, junto de uma checagem das demais variações no relatório de páginas do Search Console para não deixar nenhuma URL antiga sem destino.

## 3. Revalidar redirects e headers

Refazer a bateria completa em produção e documentar:

- apex → www em http e https, com e sem caminho;
- `http://www` → `https://www`;
- barra final → sem barra;
- legados já mapeados;
- ausência de cadeia com mais de um salto e de loop;
- presença de HSTS, `Referrer-Policy`, `X-Content-Type-Options` em respostas 200 **e** nas de redirect;
- certificado do www válido.

Ponto que permanece por design: o apex sai como **302** (e não 301) porque o redirecionamento acontece na borda da hospedagem, onde o www está marcado como Primary. Não é controlável por código e tem impacto baixo, já que todo canonical aponta para o www.

## 4. Relatório

Atualizar `.lovable/auditoria-seo-www.md` com os resultados pós-Publish, substituindo as pendências que já foram resolvidas.

## Detalhes técnicos

- Os 301 novos entram na mesma tabela de legados já usada em `src/server.ts`, sem tocar na lógica de host canônico (`REDIRECT_WWW_TO_APEX = false` continua correto).
- Nenhuma mudança em `SITE_ORIGIN`, canonical, robots ou geração de sitemap — já estão consistentes.
- O reenvio do sitemap e as inspeções usam a propriedade `sc-domain:alefotografo.com.br`, que cobre apex e www.
