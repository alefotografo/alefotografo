# Meta description de /fotografo-corporativo — não há problema de encoding

## O que eu verifiquei ao vivo (produção e código)

| Checagem | Resultado |
|---|---|
| `Content-Type` de `https://www.alefotografo.com.br/fotografo-corporativo` | `text/html; charset=utf-8` |
| Primeira tag do `<head>` | `<meta charSet="utf-8"/>` (declarada em `src/routes/__root.tsx`) |
| Meta description servida hoje | "Veja 35 galerias reais: retrato executivo, equipes, **escritórios, clínicas, advocacia, indústria** e eventos. **Orçamento** no mesmo dia em São Paulo." — acentos corretos |
| Galerias internas (`/fotografo-corporativo/<slug>`) | acentos corretos também ("lembrança", "padrão", "fotográfico", "experiência") |

Ou seja: o charset está certo, o content-type está certo e a descrição publicada **tem acentos**. O texto do relatório ("Alexandre Machado, o Ale Fotografo, e fotografo profissional…") **não existe em nenhuma meta description do site atual** — ele vem do conteúdo do site WordPress antigo. É um snippet velho no índice do Google, do mesmo tipo do resultado `http://` que você trouxe antes. Não há nada de encoding para corrigir, e não existe CMS por trás: as descrições estão no código.

Mas ao investigar apareceram dois problemas reais de qualidade de snippet, e esses valem corrigir.

## Problema real 1: 15 galerias sem descrição própria

Das 35 galerias, 20 têm meta description escrita à mão. As outras 15 usam um recorte automático do texto raspado do site antigo — e o recorte começa no meio de uma frase e termina em "…":

- `fotos-aereas` → "Imagens que mostram escala, localização e impacto do seu projeto Fotografia e vídeo aéreo com drone entregam o que foto no chão não consegue: visão do…"
- `foto-impressa-na-hora` → "A lembrança do seu evento entregue no momento certo, com padrão profissional A foto lembrança, também conhecida como foto recordação, é uma forma eficiente…"
- `totem-fotografico-totem-mania` → "Fotos impressas na hora que geram experiência e reforçam sua marca O totem fotográfico é uma solução estratégica para eventos corporativos e feiras de…"

Duas frases coladas sem pontuação e corte no meio da ideia: exatamente a "aparência descuidada" que derruba CTR — só que a causa é o recorte automático, não acento.

**O que farei:** escrever descrição e título de busca à mão para essas 15 galerias, em `src/data/categorySeo.ts` (mesmo padrão das 20 já feitas): até 158 caracteres, benefício + cidade + gancho de contato, sem cortes. As demais 15 galerias já prontas não serão tocadas.

Galerias a receber texto: `fotos-aereas`, `fotografo-de-culinaria`, `fotografo-de-arquitetura-e-interiores`, `banco-de-imagens-para-escolas`, `foto-impressa-na-hora`, `fotografo-de-grupos-times-e-equipes`, `fotografo-festa-de-confraternizacao`, `fotografo-festa-de-confraternizacao-1-1`, `totem-fotografico-totem-mania`, `fotografo-de-drinks-coqueteis`, `ensaio-feminino`, `fotos-de-hamburguer`, `fotos-para-restaurantes`, `ensaio-fotografico-para-redes-sociais`, `fotos-de-paes`.

## Problema real 2: "Ale Fotógrafo" sem acento no corpo do texto

O texto de 13 galerias, herdado do site antigo, escreve **"Ale Fotógrafo"** em vez de **"Alê Fotógrafo"** — no corpo da página, visível ao leitor e ao Google. É provavelmente daí que saiu o "Ale Fotografo" do relatório. Corrigir só essa grafia do nome próprio, sem mexer em mais nada do texto.

## O que eu não vou fazer

- Não vou mexer em charset, content-type ou em `__root.tsx`: estão corretos.
- Não vou reescrever as 20 descrições já feitas à mão.
- Não vou trocar nenhum slug, URL, canonical ou título de página existente.

## Detalhes técnicos

- Descrições ficam em `src/data/categorySeo.ts` (`categorySeo[slug]`); sem override, `src/routes/fotografo-corporativo.$slug.tsx` cai no `cleanDescription()` do texto raspado — é esse fallback que gera o recorte truncado. Com as 15 entradas escritas, o fallback deixa de ser usado por qualquer galeria.
- A grafia do nome sai de `src/data/catalog.json` (campo `description` das 13 galerias), aplicada por script para não tocar em outro conteúdo.
- Depois: `bunx tsgo --noEmit` e conferência do `<meta name="description">` renderizado nas 15 galerias.
- Como toda mudança de head, isso só aparece no endereço público **no próximo publish** — que também é o publish que ainda falta para tirar os 156 artigos do blog do 404.
