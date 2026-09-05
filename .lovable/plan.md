# Deixar o título da home aparecer mais rápido no celular

## O que muda para você

No teste de celular, o título grande da home ("Sou Alexandre Machado...") é o elemento medido pelo Google e hoje demora ~1,1s. O objetivo é reduzir esse tempo com ajustes de carregamento, sem mudar o texto nem o layout.

## Antes de mexer: medir a causa real

O texto do título já vem pronto no HTML enviado pelo servidor, então ele não depende do código de comportamento para aparecer. Por isso, antes de aplicar mudanças no empacotamento, vou medir no celular simulado qual recurso está de fato atrasando a pintura do título: a folha de estilos, a fonte usada no título, ou o código carregado no início. A medição é rápida e evita otimizar a coisa errada.

## Mudanças previstas

1. Fonte do título: garantir que o texto apareça imediatamente com a fonte do sistema e troque pela fonte final quando ela chegar (sem "pisca-pisca" de layout), com pré-carregamento apenas do arquivo realmente usado no primeiro rolar.
2. Estilos: manter só o CSS necessário para a primeira tela como bloqueante e adiar o restante.
3. Código: a divisão em partes menores já existe no projeto (React, roteador, ícones e componentes visuais em pacotes separados). Vou revisar o que a home puxa sem precisar no primeiro instante — carrossel, gráficos, blocos abaixo da dobra e listas de catálogo — e passar esses trechos para carregamento posterior, reduzindo o peso inicial.
4. Confirmar que nenhum script externo (incluindo o de estatísticas de visitas) roda antes da primeira pintura.

## Como vou validar

- Medição em celular simulado (390px) antes e depois, registrando o tempo do título e o peso do código inicial.
- Conferência visual da home para garantir que nada mudou de aparência.
- Verificação de tipos e, se você quiser, publicação em seguida.

## Detalhes técnicos

- Medição com Playwright + PerformanceObserver (`largest-contentful-paint`) em 390x844, DPR 3, CPU/rede afuniladas; comparação do `element` reportado.
- `manualChunks` já cobre react/router/radix/lucide/supabase/embla/recharts em `vite.config.ts`; próximo ganho vem de `React.lazy` + `Suspense` nas seções abaixo da dobra de `src/routes/index.tsx` e de evitar importar `@/data/catalog` inteiro no módulo da rota.
- `@fontsource` woff2 importados em `__root.tsx`: revisar `font-display: swap` e manter um único `<link rel="preload">` por arquivo de fonte.
- Nada de `ssr.external`/`resolve.external`; nada de novo plugin no config.
