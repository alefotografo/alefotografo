# Verificação do Search Console — projeto remixado

## O que foi confirmado agora

**Conta conectada:** Google Search Console do Alexandre, vinculado a este projeto.

**Propriedade do domínio de destino:** `sc-domain:alefotografo.com.br` existe e está **verificada** (nível: proprietário). Ela cobre o domínio e todos os subdomínios (com e sem `www`, http e https). Não é preciso verificar nada de novo.

**Sitemap detectado:** sim, mas é o sitemap do **site antigo**, não deste projeto:

- Arquivo: `https://www.alefotografo.com.br/sitemap.xml`
- Enviado em: abril/2021
- Última leitura pelo Google: 23/08/2026
- 131 URLs enviadas, 0 erros, 2 avisos
- Indexadas segundo o relatório: 0 (o número de indexadas nesse relatório costuma ficar defasado; não é evidência isolada de falha)

## Pontos de atenção encontrados no projeto

1. Este projeto remixado **ainda não está publicado**, então nada dele responde em `alefotografo.com.br` hoje. O que o Google lê nesse domínio é o site antigo.
2. Os sitemaps deste projeto ainda apontam para o domínio **plural**: `src/routes/sitemap[.]xml.ts`, `src/routes/sitemap-videos[.]xml.ts` e `src/routes/sitemap-index[.]xml.ts` usam `BASE_URL = "https://alefotografos.com.br"`. Se o projeto for publicado assim no domínio singular, o sitemap declarará URLs de outro domínio e o Google o rejeitará.

## Próximos passos sugeridos (quando você aprovar)

1. Trocar `BASE_URL` para `https://alefotografo.com.br` nos três arquivos de sitemap deste projeto, e conferir canônicos/og:url que ainda citem o domínio plural.
2. Publicar o projeto e apontar o DNS de `alefotografo.com.br` para ele.
3. Depois de publicado, enviar `https://alefotografo.com.br/sitemap-index.xml` na propriedade `sc-domain:alefotografo.com.br` e remover o envio antigo de 2021.
4. Confirmar o status de leitura do novo sitemap no Search Console.

Nada foi alterado no projeto nesta verificação.
