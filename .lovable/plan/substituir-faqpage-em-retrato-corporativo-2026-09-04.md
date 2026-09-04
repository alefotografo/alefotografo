# Substituir FAQPage em `/retrato-corporativo`

## O que vamos fazer
Na rota dinâmica `/fotografo-corporativo/$slug`, quando o slug for `retrato-corporativo`, trocar o bloco `FAQPage` genérico pelo bloco com as 3 perguntas e respostas exatas fornecidas. Nenhum conteúdo visível será alterado, e nenhuma outra galeria ou página será afetada.

## Arquivo a alterar
- `src/routes/fotografo-corporativo.$slug.tsx`: ajustar o terceiro script `application/ld+json` do `head()` para usar um `FAQPage` condicional.

## Detalhes técnicos
- O `head()` já retorna 3 scripts: `ImageGallery`, `Service` e `FAQPage`.
- O terceiro script atualmente publica:
  ```tsx
  mainEntity: (editorialFor(params.slug)?.faqs ?? faqs.slice(0, 5)).map(...)
  ```
- Vou manter esse comportamento para todos os slugs, exceto `retrato-corporativo`, que receberá o `mainEntity` fixo com as 3 questões solicitadas.
- As perguntas/respostas serão inseridas textualmente, sem alterar a redação.
- Canônica, `ImageGallery` e `Service` permanecem inalterados.

## Fora do escopo
- Nenhuma alteração no componente `CategoryPage` (conteúdo visível).
- Nenhuma alteração em outras galerias (`/fotografo-corporativo/$slug` com slug diferente).
- Nenhuma alteração em `src/routes/__root.tsx`, páginas de serviço, home, `/faq` etc.

## Validação
- `bunx tsgo --noEmit` para garantir tipagem correta.
- `curl -s http://localhost:8080/fotografo-corporativo/retrato-corporativo | tr -d '\0' | rg -o 'Qual a diferença entre headshot e retrato corporativo?'` para confirmar que as perguntas específicas aparecem no JSON-LD.
- `curl -s http://localhost:8080/fotografo-corporativo/fotografia-industrial | tr -d '\0' | rg -o 'Qual a diferença entre headshot e retrato corporativo?' || echo "NOT_FOUND"` para confirmar que outra galeria não recebeu o bloco.
- `curl -s http://localhost:8080/retrato-corporativo -I` para verificar que o redirecionamento 301 para `/fotografo-corporativo/retrato-corporativo` permanece válido (já configurado em `legacy-redirects.ts`).
