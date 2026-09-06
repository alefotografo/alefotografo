# Publicar as fontes pré-carregadas e medir no celular

## Passos
1. Publicar a versão atual (fontes próprias com nomes fixos, pré-carregadas antes do estilo).
2. Aguardar o domínio real responder à nova versão e confirmar que `/fonts/*.woff2` retornam 200 no site público.
3. Medir três carregamentos no domínio público em condições de celular (rede e processador limitados) e usar a mediana de TTFB, FCP e LCP, além do salto de layout (CLS).
4. Registrar qual elemento é o LCP na medição real (título ou foto) — isso define o próximo ajuste.

## Se a meta não for atingida
- LCP definido pela foto: rever tamanho/qualidade da versão móvel e a ordem dos pré-carregamentos.
- LCP definido pelo título: verificar se o texto pinta antes da fonte chegar; se o texto estiver esperando algum outro recurso, reduzir o que vem antes dele no cabeçalho.
- TTFB alto: conferir se a página está sendo servida já pronta pelo cache de borda no domínio real.

Cada ajuste vem com nova medição e nova publicação, sempre com o seu aval antes de publicar de novo.
