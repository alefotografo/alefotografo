# Tags de compartilhamento (Facebook/WhatsApp/LinkedIn/X)

## O que já existe

Todas as páginas de conteúdo do site já publicam as tags pedidas, com título e descrição próprios de cada página, imagem real do site (1200x630), `og:type`, `og:site_name`, `og:url`, `twitter:card` e `twitter:image`. Verificado na home agora.

Um detalhe: o título e a descrição da home aparecem cortados com "…" porque o texto atual passa do limite recomendado (60 caracteres no título, 160 na descrição). É isso que o WhatsApp e o LinkedIn mostram hoje.

## O que ainda falta

1. **Home** — usar título e descrição que caibam sem corte, como você escreveu:
   - Título: "Fotógrafo Corporativo em São Paulo | Alê Fotógrafo"
   - Descrição: "Fotografia corporativa profissional em SP. Retratos, headshots e eventos. Nota 4,9 com 144 avaliações."
2. **Rede de segurança global** — hoje, se alguma página futura esquecer as tags, ela fica sem imagem de compartilhamento. Vou definir imagem e `twitter:card` padrão no cabeçalho global, que cada página continua sobrescrevendo com a sua.
3. **Página de acesso restrito** — hoje sem tags de compartilhamento; recebe as padrão (não é indexada, então só aparece se alguém colar o link).

## Fora do escopo

- Nenhum texto visível, foto, endereço ou endereço de página muda.
- Os endereços continuam com `www.alefotografo.com.br`, padrão já usado no site e no Search Console.
- Não vou alterar título/descrição das outras páginas: cada uma já tem os seus.

## Detalhes técnicos

- `src/lib/seo.ts` (`buildMeta`) já gera todas as tags; nenhuma mudança de estrutura necessária.
- `src/routes/index.tsx`: ajustar `title`/`description` passados ao `buildMeta` para caber em 60/160 sem `clampText` cortar.
- `src/routes/__root.tsx`: acrescentar `og:image`, `og:image:width/height`, `twitter:card` e `twitter:image` com `DEFAULT_OG_IMAGE` como fallback global (o router faz merge por `property`/`name`, então as páginas sobrescrevem).
- Validação: `bunx tsgo --noEmit` e `curl` na home, numa página de serviço, num artigo e numa página de bairro para conferir as tags renderizadas.
- A mudança só vale no site ao vivo depois de publicar.
