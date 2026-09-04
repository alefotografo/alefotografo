# Schema.org: o que já existe e o único ajuste real pendente

## Verificação feita agora no código

A auditoria diz "nenhuma página possui marcação estruturada". Isso não corresponde ao site atual: 24 rotas emitem JSON-LD. Ponto por ponto dos 5 itens pedidos:

1. **LocalBusiness na home** — existe. No `__root` há um `@graph` com `["PhotographyBusiness","LocalBusiness"]` (`#business`), com nome, endereço, telefone, geo, `openingHoursSpecification`, `areaServed` (São Paulo, Santo André, São Bernardo, São Caetano, Diadema, Barueri), catálogo de serviços e `sameAs`.
2. **Person em /quem-e-o-ale** — existe. `ProfilePage` + `Person` com `jobTitle`, `Occupation`, endereço e `sameAs` para Instagram e LinkedIn.
3. **FAQPage na home** — existe (`faqJsonLd(homeFaqs)` no `head()` da home).
4. **BreadcrumbList em todas as páginas** — **parcial**. Só 11 rotas usam o componente `Breadcrumbs`. É o item legítimo a corrigir.
5. **AggregateRating nos depoimentos** — existe, em `/depoimentos` (com `Review`) e no `#business` do `__root`.

Sobre o "CMS da Epic": o site não usa CMS externo; os metadados vêm do próprio código, e nada sobrescreve o JSON-LD globalmente.

## O que será feito

Adicionar a trilha de navegação (visual + `BreadcrumbList`) nas rotas que ainda não têm, usando o componente `Breadcrumbs` já existente — mesmo padrão visual das páginas que já o exibem:

- `/servicos`, `/fotos-corporativas`, `/foto-profissional-para-linkedin`, `/fotografia-para-clinicas`
- `/fotografo-corporativo`, `/fotografo-corporativo/categoria/$slug`
- `/portfolio`, `/portfolio/$slug`
- `/blog`, `/depoimentos`, `/contato`, `/sobre`

Não recebem breadcrumb (correto assim): home (é a raiz), `/busca` e `/auth`.

Trilhas seguindo a hierarquia real do site, por exemplo:
`Início / Fotos / Retrato executivo` e `Início / Serviços / Foto para LinkedIn`.

## Detalhes técnicos

- Reuso de `src/components/site/Breadcrumbs.tsx` (já gera `BreadcrumbList` com URLs absolutas em `www.alefotografo.com.br`); nenhum schema novo duplicado.
- Nenhuma URL, slug, título ou canonical é alterado.
- Verificação final: typecheck limpo e conferência do JSON-LD renderizado nas rotas alteradas.
- Após aprovar e publicar, vale reenviar as URLs no Search Console para releitura.
