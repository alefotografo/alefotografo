# P8 — Consistência de domínio/host (14/09/09-14)

## Referências a `www.alefotografo.com.br` (oficial)

30 arquivos — canonicals, sitemaps, RSS, og:url, redirects, `buildMeta` base. **Classe A — correto.**

## Referências a `alefotografo.com.br` sem www (33 ocorrências)

Classificação por contexto:

| Contexto | Ocorrências | Classe |
|---|---|---|
| E-mails (`comercial@alefotografo.com.br`) | site.ts, contato.tsx | **A** (e-mail legítimo) |
| Comentários/checagens de hostname (`server.ts`, gsc/performance-report heurísticas, comentário no catalog) | 6 | **A** (código, não público) |
| Schema `Person`/`Organization` → `url: "https://alefotografo.com.br"` (sem www) | index.tsx (Person), __root.tsx (Organization), sobre.tsx (Person) | **E — consistência suspeita**: o host canônico é www; o non-www redireciona (301/302 na borda). Não é erro (mesma entidade, redirect seguido por consumidores), mas o ideal é `url` no host canônico. **Registrado, não alterado** (dúvida sobre materialidade → regra noturna: documentar). |

## Referências a `alefotografos.com.br` (plural — site irmão)

Todoras intencionais, confirmando a auditoria 10A:

| Contexto | Arquivos | Classe |
|---|---|---|
| `sameAs` em schemas (Organization/Person) | __root.tsx, index.tsx, sobre.tsx | **C — sameAs intencional** (preservado, não tocado) |
| `teamSiteNote` do ServicePage (link editorial "equipe Alê Fotógrafo em…") | ServicePage.tsx | **B — referência histórica intencional** |
| FAQs explicando a diferença entre os sites | faqs.ts, faqsComerciais.ts, categoryEditorial.ts | **B** |
| llms.txt (seção do site irmão) | llms[.]txt.ts | **B** |

**Zero links internos indevidos ao plural** (todas as referências são externas editoriais ou schema). Host oficial inalterado.
