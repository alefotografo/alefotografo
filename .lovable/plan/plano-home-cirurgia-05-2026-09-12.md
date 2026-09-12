# Plano — Home Cirurgia 05

## Escopo confirmado
Alterar exclusivamente os três componentes que renderizam o fechamento da Home:
- `HomeBlog`
- `HomeFaq`
- `HomeCta`

## Alterações
1. **Blog**
   - Limitar a exibição aos três artigos recentes já fornecidos pela origem atual, sem alterar artigos ou seus dados.
   - Manter imagem destacada, título, resumo existente, destino do artigo e o acesso para todos os posts.
   - Exibir a categoria somente quando ela já estiver disponível nos dados atuais.
   - Ajustar apenas o layout local: três cards por linha no desktop, um por linha no mobile, com imagem e título em destaque e altura contida.

2. **FAQ**
   - Manter as perguntas e respostas atuais e reutilizar o accordion existente, sem tocar no schema.
   - Compactar somente a apresentação mobile, preservando comportamento, área de toque, leitura, espaçamento consistente e ausência de overflow.
   - Não alterar o componente compartilhado do accordion; os ajustes ficarão restritos ao bloco da Home.

3. **CTA final**
   - Preservar exatamente o título, texto, botão e destino de WhatsApp solicitados, que já aparecem no componente atual.
   - Reduzir somente o espaço vertical no mobile e manter o botão adequado à largura disponível.
   - Não há segundo CTA renderizado atualmente nesse bloco.

## Validação
- Conferir somente Blog, FAQ e CTA final em desktop e mobile.
- Confirmar ausência de rolagem horizontal nesses três blocos.
- Executar o typecheck.
- Não alterar qualquer seção anterior, conteúdo de artigo, SEO, navegação, rodapé ou estilo global.
