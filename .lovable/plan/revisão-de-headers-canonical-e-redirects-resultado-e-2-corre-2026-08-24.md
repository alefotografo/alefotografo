# Revisão de headers, canonical e redirects — resultado e 2 correções

## O que conferi ao vivo (todas as combinações)

| URL pedida | Resposta | Destino |
|---|---|---|
| `http://alefotografo.com.br/` | 301 | `https://alefotografo.com.br/` |
| `https://alefotografo.com.br/` | 200 | — |
| `http://www.alefotografo.com.br/` | 302 | `https://alefotografo.com.br/` |
| `https://www.alefotografo.com.br/` | 302 | `https://alefotografo.com.br/` |
| `http://alefotografo.com.br/fotos-corporativas` | 301 | mesma path em https |
| `https://www.alefotografo.com.br/blog` | 302 | `https://alefotografo.com.br/blog` |
| `https://alefotografo.com.br/blog/` (barra final) | 301 | `/blog` |
| `https://alefotografo.com.br/videos-para-empresas` (legado) | 301 | `/videos` |

Tudo resolve em **um único salto**, sempre preservando o path, e sempre terminando no domínio sem www em https.

Headers consistentes em todas as combinações:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains` em todas as respostas (inclusive nos redirects).
- `Referrer-Policy: strict-origin-when-cross-origin` e `X-Content-Type-Options: nosniff`.
- SSL do www válido (certificado próprio para `www.alefotografo.com.br`, válido até 22/nov/2026).
- Canonical presente **uma única vez** por página e sempre auto-referente (`/sobre` → `.../sobre`, home → `.../`), igual ao `og:url` e ao `<loc>` do sitemap.

## Duas inconsistências encontradas

### 1. hreflang aponta sempre para a home (corrigir)

Em `src/routes/__root.tsx` as tags `alternate` estão fixas no domínio raiz, então **toda** página declara:

```
<link rel="alternate" hrefLang="pt-BR" href="https://alefotografo.com.br">
<link rel="alternate" hrefLang="x-default" href="https://alefotografo.com.br">
```

Em `/sobre`, `/blog/...`, galerias etc. isso contradiz o canonical auto-referente: o hreflang diz que a versão pt-BR daquela página é a home. Como o site é monolíngue, essas tags não trazem benefício e hoje só geram sinal conflitante.

Correção: **remover** as duas tags `alternate` do `__root.tsx`. Site de idioma único não precisa de hreflang; o `lang="pt-BR"` no `<html>` (já presente) é suficiente. Alternativa, se você preferir mantê-las: torná-las auto-referentes por rota — mais código, sem ganho real.

### 2. Redirect do www sai 302, não 301 (fora do código)

O `www` é resolvido na borda da hospedagem antes de a requisição chegar ao site, com status **302**. O 301 que existe em `src/server.ts` (`redirectCanonicalHost`) nunca é alcançado nesse caminho — ele continua útil apenas como rede de segurança para outros hosts.

Não há como forçar 301 no www pelo código. Impacto prático é baixo: o Google consolida www no apex de qualquer forma, e o canonical de todas as páginas já aponta para o domínio sem www. Registro aqui apenas para ficar documentado; nada a implementar.

## Detalhes técnicos

- Arquivo alterado: `src/routes/__root.tsx` (remoção das duas entradas `rel: "alternate"` do array `links`).
- Nada muda em `src/server.ts`, `src/lib/seo.ts`, sitemaps ou canonicals — já estão corretos e consistentes.
- Depois de publicar, revalido os headers das mesmas combinações e confirmo que nenhuma página emite hreflang divergente.
