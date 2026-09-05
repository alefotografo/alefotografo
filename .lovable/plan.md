# Deixar o celular mais rápido (nota 71 → alvo 90+)

Antes de planejar, conferi cada item da sua lista no site real. Boa parte já está feita no projeto — mas **não está publicada**: o site ao vivo ainda responde sem cache de borda, ou seja, ele está rodando uma versão antiga, de antes das últimas melhorias.

## O que já está pronto (não vou refazer)

- **Cache de borda do HTML**: já ativo no projeto (24h no servidor de borda, revalidação em segundo plano). O arquivo `_headers` não controla o HTML aqui, e o site não está na Netlify — ele roda na borda da hospedagem Lovable, onde a regra já foi aplicada no servidor.
- **Fontes próprias**: Space Grotesk e DM Sans já são servidas pelo próprio site, em woff2, com `font-display: optional`. Nada vem do Google Fonts.
- **Imagem de capa em WebP com versão de celular**: já existe `<picture>` com variantes de 480, 720, 1024 e 1217 px. No celular carrega 9,7 KB; no desktop, 17 KB — muito abaixo dos 150 KB.
- **Um único preload da capa**, com prioridade alta, apontando exatamente para a variante que a tela vai usar.
- **55 páginas geradas prontas no build** (início, serviços, bairros, hubs), o que já eliminou a maior parte do tempo de resposta.

## O que vou fazer

1. **Publicar o site.** Esta é a mudança de maior impacto: o cache de borda, o Google Analytics no fim da página e as correções de acessibilidade só valem depois da publicação. Só isso deve derrubar o tempo de resposta de ~1,6 s para menos de 0,4 s, o que puxa direto o "primeiro conteúdo" e a "maior imagem".

2. **Reforçar a prioridade da foto de capa.** Acrescentar prioridade alta e decodificação imediata na própria foto, para o navegador não deixá-la atrás de nada.

3. **Reduzir o JavaScript inicial (os 182 KB apontados).** Na página inicial, carregar de imediato apenas o topo (menu, título, foto, números) e adiar o restante — escolha de serviços, blocos de segmentos, trabalhos selecionados, depoimentos, artigos, vídeos e perguntas frequentes — para depois da primeira pintura, sem alterar o conteúdo nem a ordem visual. Isso baixa o tempo de bloqueio (220 ms) e o "índice de velocidade".

4. **Remover o que não é usado.** Varredura das importações da página inicial e dos componentes do topo, tirando bibliotecas e componentes que entram no pacote sem serem exibidos.

5. **Medir de novo.** Depois de publicar, conferir tempo de resposta ao vivo e rodar uma medição no navegador (tempo até a maior imagem e tarefas longas), para confirmar os alvos.

## Detalhes técnicos

- `src/routes/index.tsx`: adicionar `fetchPriority="high"` e `decoding="sync"` no `<img>` do hero (o `<picture>`, `srcSet`, `sizes` e o preload único já estão corretos).
- `src/routes/index.tsx`: converter as seções abaixo da dobra em `React.lazy` + `<Suspense fallback={null}>`, mantendo o HTML gerado pelo prerender intacto para as seções acima da dobra. Como as páginas são pré-renderizadas, usar limites de Suspense que não quebrem a hidratação (fallback `null`, sem mudança de altura → CLS segue 0).
- Auditar imports em `src/routes/index.tsx` e em `src/routes/__root.tsx` (o carrossel de depoimentos já é lazy) e confirmar que `recharts`, `embla`, `cmdk`, `react-day-picker` e afins só entram por rotas de admin, nunca pelo pacote da home.
- Cache de borda: já em `src/server.ts` (`public, max-age=0, s-maxage=86400, stale-while-revalidate=86400`, exceto `/auth`, `/admin*`, `/api/*`). Nada a mudar; falta apenas publicar.
- Verificação: `bunx tsgo --noEmit`, relatório de prerender no build, `curl -w "%{time_starttransfer}"` no domínio ao vivo e medição de LCP/long tasks via Playwright.
