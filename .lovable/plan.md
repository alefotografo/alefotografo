# Auditoria e correção de recursos que bloqueiam a renderização

## Alterações

1. **Fontes**
   - Manter `font-display: optional` nas seis fontes próprias, que já estão corretas.
   - Adicionar `font-display: optional` às duas declarações locais de fallback, garantindo que todas as oito declarações `@font-face` atendam à regra.
   - Atualizar o comentário do cabeçalho que ainda menciona `swap`.

2. **Scripts de terceiros**
   - Manter o Google Analytics fora do HTML inicial: hoje ele é criado somente depois do evento `load`, durante tempo ocioso, com carregamento assíncrono.
   - Não adicionar `defer` ao script criado dinamicamente, pois scripts dinâmicos não bloqueiam a análise do documento e `defer` não produz efeito útil nesse caso.
   - Confirmar no HTML gerado que não há Analytics, GTM, Hotjar ou Meta Pixel no `<head>` antes da primeira pintura.

3. **Divisão do JavaScript**
   - Preservar a estratégia atual de `manualChunks`, que já separa React, React DOM e Scheduler em `vendor-react` e também isola TanStack, Radix, ícones, galeria, gráficos e acesso à nuvem.
   - Não substituir essa função pelo objeto simplificado `vendor: ['react', 'react-dom']`, pois isso eliminaria as divisões adicionais já implementadas.
   - Validar no resultado final que o pacote React continua separado.

4. **Cache de arquivos estáticos**
   - Atualizar `/img/*` para `public, max-age=31536000, immutable`.
   - Adicionar `/fonts/*` com `public, max-age=31536000, immutable`.
   - Adicionar `/*.js` e `/*.css` com `public, s-maxage=86400, stale-while-revalidate=86400`.
   - Manter as regras existentes de segurança, `/assets/*`, WebP e HTML.

## Validação e publicação

- Executar a verificação de tipos e a geração completa das páginas.
- Auditar o HTML e os arquivos finais para confirmar fontes, ausência de rastreadores bloqueantes, divisão React e regras de cache.
- Publicar todas as alterações juntas no domínio do site e conferir a resposta pública após a publicação.
