# Microcorreção técnica 06B-2

## Alterações
- **Hero entre 320px e 375px:** ajustar somente as classes responsivas da grade de métricas em `HomeHeroNovo.tsx`, mantendo três métricas, textos, números e apresentação desktop intactos. A mudança será mínima e local para impedir quebra ruim, sobreposição ou overflow.
- **Miniatura da Ativa Logística:** confirmar pelas referências já localizadas que ambas usam o mesmo vídeo `nkHJbeXx5Qo` e uniformizar a URL da miniatura em `SolucoesEmpresa.tsx` e `VideoProducao.tsx`, sem trocar imagem, texto, alt, vídeo, link ou layout.

## Validação
- Conferir visualmente o Hero em 320px, 375px e desktop.
- Confirmar ausência de overflow e quebra inadequada nas métricas estreitas.
- Confirmar que a miniatura da Ativa usa uma única referência de download nas duas ocorrências.
- Executar somente o typecheck do projeto.

## Limites
- Nenhum outro componente, conteúdo, SEO, rota, configuração, dependência ou asset físico será alterado.
