# Publicar e conferir no domínio real

## O que será feito

1. **Publicar a versão atual** (rolagem otimizada, barra do topo sem vidro fosco, fotos em lotes menores).
2. **Confirmar que o domínio já serve a nova versão** antes de medir, para não atribuir resultado antigo à nova versão.

## Conferências no domínio real

1. **Rolagem suave** — simular um celular com processador limitado rolando a página de fotos e registrar: quadros lentos, pior travamento e percentual de tempo dentro do ideal. Comparar com a medição local (8 quadros lentos, pior travamento 0,28 s).
2. **Busca** — digitar um termo e confirmar que o resultado leva para a página de busca com o termo aplicado, sem erro no caminho.
3. **LCP** — medir a home em celular, 3 carregamentos, e registrar a mediana de primeira pintura, LCP e resposta do servidor. Verificar se o LCP fica abaixo de 0,7 s.

## Se o LCP não atingir 0,7 s

Não vou ajustar por suposição. Registro qual elemento é o LCP, o que o precede na cadeia (documento, estilo, fonte, imagem) e o tempo de cada etapa; só então proponho a correção do gargalo comprovado — e informo claramente se o limite restante é rede/processador do cenário simulado, não do site.

## Fora do escopo

Sem mudanças de conteúdo, endereços de páginas, textos ou o que o Google lê.

## Detalhes técnicos

- Publicação via ferramenta de deploy; checagem de segurança antes.
- Medição em `https://www.alefotografo.com.br` (domínio canônico), Playwright com viewport 390×844, CPU 4x, perfil 4G.
- Rolagem medida com `requestAnimationFrame`/long tasks em 60 passos de scroll; mediana de 3 rodadas.
- LCP/FCP/TTFB por `PerformanceObserver` + Navigation Timing, cache frio e cache aquecido separados.
