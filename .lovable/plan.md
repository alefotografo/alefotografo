# Publicar o site e fixar um link por bairro

## O que será feito

### 1. Publicar
Publicar a versão atual (com os 3 artigos novos e o `/llms.txt` dinâmico) no domínio `www.alefotografo.com.br`.

### 2. Link fixo por bairro (o que já existe e o que falta)
Cada um dos 35 bairros já tem uma URL permanente própria no padrão:

```text
https://www.alefotografo.com.br/fotografo-corporativo-em/vila-olimpia
https://www.alefotografo.com.br/fotografo-corporativo-em/itaim-bibi
...
```

Essas URLs já saem no sitemap, no `llms.txt`, têm canonical e dados estruturados de serviço local. O que falta para elas performarem em busca local:

- **Página-índice `/fotografo-corporativo-em`**: hoje esse endereço não existe (só as páginas filhas). Criar um hub que lista os 35 bairros agrupados por região (Zona Sul, Centro, Oeste, Norte, Leste, Santo André, São Bernardo, São Caetano, Diadema, Barueri), com `head()` próprio e link para cada bairro. Isso dá um ponto único de entrada e distribui autoridade para as 35 páginas.
- **Link permanente visível na própria página do bairro**: bloco "Link desta página" com a URL completa e botão de copiar, para você reusar em Google Business Profile, Instagram, propostas e assinatura de e-mail sem inventar variações.
- **Navegação entre bairros vizinhos**: em cada página, lista dos outros bairros da mesma região (hoje o LinkHub é genérico). Reduz página órfã e ajuda o Google a entender a cobertura geográfica.
- **Rodapé/menu**: incluir o hub `/fotografo-corporativo-em` para que todas as páginas de bairro fiquem a 2 cliques da home.
- **Sitemap**: adicionar a URL do hub (os bairros já estão lá).

### 3. Como usar os links depois (entrego junto)
Uma lista pronta em texto com os 35 links completos, para colar em Google Business Profile (posts e serviços), diretórios locais e redes sociais — links diretos ao bairro, nunca à home.

## Regras que serão respeitadas
- Nenhum slug ou URL existente será alterado (capital orgânico preservado).
- Sem mudança de layout global; só adição do hub e de blocos internos.

## Detalhes técnicos
- Novo arquivo `src/routes/fotografo-corporativo-em.index.tsx` (rota `/fotografo-corporativo-em`), com `buildMeta` e JSON-LD `CollectionPage` + `ItemList` dos bairros.
- Agrupamento por `regiao` a partir de `src/data/bairros.ts` (sem novo dado).
- Em `fotografo-corporativo-em.$bairro.tsx`: bloco de link permanente (copiar via `navigator.clipboard`) e lista de bairros da mesma região.
- `src/routes/sitemap[.]xml.ts`: entrada do hub.
- `src/components/site/Footer.tsx`: link do hub.
