# Adicionar FAQPage JSON-LD em `/fotografo-corporativo`

## O que vamos fazer
Inserir o bloco `FAQPage` solicitado no `<head>` da página `/fotografo-corporativo`, e apenas nela. Nenhum conteúdo visível da página será alterado, e nenhuma outra rota será afetada.

## Arquivo a alterar
- `src/routes/fotografo-corporativo.index.tsx`: adicionar um segundo objeto `application/ld+json` no array `scripts` do `head()`, logo após o `buildMeta` existente, contendo as 4 perguntas/respostas exatas do pedido.

## Detalhes técnicos
- Manter a canonical já corrigida (`https://alefotografo.com.br/fotografo-corporativo`).
- O bloco JSON-LD usará `@context`, `@type: "FAQPage"` e `mainEntity` com as 4 questões fornecidas, sem alterar os textos.
- Não usar `faqJsonLd()` do projeto porque essas perguntas são específicas desta página e não constam do repositório central de FAQs.

## Fora do escopo
- Nenhuma alteração em outras páginas (incluindo `/`, `/faq`, `/sobre`, páginas de serviço ou galerias).
- Nenhuma alteração de conteúdo renderizado na tela.
- Nenhuma alteração de schema existente em `src/routes/__root.tsx`.

## Validação
- `bunx tsgo --noEmit` para garantir que a tipagem do `head().scripts` esteja correta.
- `curl -s http://localhost:8080/fotografo-corporativo | tr -d '\0' | rg -o '<script type="application/ld\+json">[^<]*FAQPage[^<]*</script>'` para confirmar que o bloco aparece.
- `curl -s http://localhost:8080/ | tr -d '\0' | rg -o '<script type="application/ld\+json">[^<]*FAQPage[^<]*</script>'` para confirmar que a home **não** recebeu o bloco.
