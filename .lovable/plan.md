# Ajustar link "Ver todos os serviços" para /portfolio

## Objetivo
Alterar o link "Ver todos os serviços" no menu do cabeçalho para apontar para `/portfolio`, conforme solicitado.

## Escopo mínimo
- `src/components/site/Header.tsx`: trocar `to: "/servicos"` para `to: "/portfolio"` no item de menu "Ver todos os serviços".
- Preservar label "Ver todos os serviços" e hint "Panorama completo com fotos".

## Fora de escopo
- Não alterar a rota `/servicos` (continua existindo e indexada).
- Não alterar o link "Todos os serviços" do rodapé a menos que o usuário peça.
- Não mudar domínio, canonical, DNS, sitemap, SEO ou conteúdo visível.

## Validação
- Executar `bunx tsgo --noEmit` após a edição.
- Verificar no preview se o item de menu abre `/portfolio`.
