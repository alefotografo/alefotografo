# H1 e título padronizados nas páginas de bairro

## Situação atual (verificada)

As 33 páginas `/fotografo-corporativo-em/{bairro}` já têm **exatamente um H1**, gerado dinamicamente com o nome completo do bairro — mas usando a preposição natural de cada bairro e sem "São Paulo":

- H1 hoje: "Fotógrafo Corporativo na Vila Olímpia", "Fotógrafo Corporativo em Pinheiros", "Fotógrafo Corporativo no Brooklin"
- Título hoje: "Fotógrafo Corporativo na Vila Olímpia — SP"

## O que muda

1. **H1** passa a seguir o padrão pedido, com o nome completo do bairro e a cidade:
   "Fotógrafo Corporativo em {Bairro Nome}, São Paulo"
2. **Título da aba/Google**:
   "Fotógrafo Corporativo em {Bairro Nome} SP | Alê Fotógrafo"
3. O nome no caminho de navegação (breadcrumb) e no schema passa a usar a mesma frase, para o Google ver o mesmo texto em todos os lugares.
4. Nenhuma outra página recebe H1 novo; nenhum conteúdo visível além do H1 é alterado.

## Observação de português

O padrão fixo com "em" gera formas menos naturais em alguns bairros ("em Brooklin" em vez de "no Brooklin", "em Avenida Paulista" em vez de "na Avenida Paulista"). Aplico o padrão pedido literalmente, para manter a consistência com os exemplos. Se preferir, mantenho a preposição natural de cada bairro e acrescento apenas ", São Paulo" — basta dizer.

## Detalhes técnicos

- Arquivo: `src/routes/fotografo-corporativo-em.$bairro.tsx`
- No `head()`: `title = \`Fotógrafo Corporativo em ${nome} SP | Alê Fotógrafo\``; descrição e canonical inalterados; nome do breadcrumb alinhado ao H1.
- No componente: H1 renderiza `Fotógrafo Corporativo em {b.nome}, São Paulo`.
- `prep` continua no dado, sem uso nesse título/H1.
- Validação: typecheck e `curl` do HTML de 3 bairros (vila-olimpia, itaim-bibi, faria-lima) conferindo um único `<h1>` e o `<title>`.
