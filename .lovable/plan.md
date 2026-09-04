# Adicionar JSON-LD FAQPage em `/foto-profissional-para-linkedin`

## O que vamos fazer
Inserir o bloco `FAQPage` fornecido no `<head>` da página `/foto-profissional-para-linkedin`, e apenas nela. Nenhum conteúdo visível da página será alterado, e nenhuma outra rota será afetada.

## Arquivo a alterar
- `src/routes/foto-profissional-para-linkedin.tsx`: adicionar um segundo objeto `application/ld+json` no array `scripts` do `head()`, logo após o bloco `@graph` existente, contendo as 3 perguntas/respostas exatas do pedido.

## Detalhes técnicos
- Preservar o JSON-LD `@graph` já existente (Service, FAQPage atual, WebPage e BreadcrumbList).
- O novo bloco será um item independente em `head().scripts`, com `type: "application/ld+json"` e `children: JSON.stringify({ ... })`, usando exatamente o objeto fornecido sem alterar textos.
- Não usar `faqJsonLd()` do projeto porque essas perguntas são específicas desta página e não constam do repositório central de FAQs.

## Fora do escopo
- Nenhuma alteração em outras páginas (incluindo `/`, `/faq`, `/sobre`, outras páginas de serviço ou galerias).
- Nenhuma alteração de conteúdo renderizado na tela.
- Nenhuma remoção ou alteração do bloco JSON-LD existente.

## Validação
- `bunx tsgo --noEmit` para garantir que a tipagem do `head().scripts` esteja correta.
- `curl -s http://localhost:8080/foto-profissional-para-linkedin | tr -d '\0' | rg -o '<script type="application/ld\+json">[^<]*FAQPage[^<]*</script>'` para confirmar que o novo bloco aparece.
- `curl -s http://localhost:8080/ | tr -d '\0' | rg -o '<script type="application/ld\+json">[^<]*Por que ter uma foto profissional no LinkedIn[^<]*</script>'` para confirmar que a home **não** recebeu o bloco.
