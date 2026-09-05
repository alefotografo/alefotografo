# Limpeza de restos da plataforma antiga

Verifiquei o site publicado e o código. Dos cinco pontos, três já estão resolvidos, um não é resto de plataforma antiga, e um é um problema real a corrigir.

## O que já está limpo (confirmado)

- **Rackspace (rackcdn)**: não existe mais nenhum aviso de conexão prévia no cabeçalho — removido na limpeza anterior.
- **images.weserv.nl**: também não existe mais nenhum aviso de conexão prévia.
- **Endereços de imagem**: nenhuma foto do site é carregada pelo navegador a partir do weserv. Todas passam pelo seu próprio domínio (`/api/public/img`). O weserv continua sendo usado apenas nos bastidores, pelo servidor, para gerar a versão leve das fotos — o visitante nunca fala com ele.

## O script `/~flock.js`

Ele existe no site publicado, mas **não é resto da plataforma antiga**: é o contador de visitas da própria hospedagem atual, injetado automaticamente e servido pelo seu domínio. Não está no código do projeto e não pode ser removido por código. Se você quiser desativá-lo, isso é uma configuração da hospedagem — me diga e eu verifico a opção.

## O problema real: pré-carregamento duplicado da foto da capa

Na home, o aviso de pré-carregamento da sua foto de capa aparece **duas vezes**, idêntico. Não quebra nada, mas é ruído no cabeçalho.

Passos:
1. Rastrear a origem da segunda cópia (a home declara apenas uma; a duplicata vem de outro ponto do cabeçalho ou da montagem da página).
2. Eliminar a cópia extra, mantendo exatamente uma — preservando a correspondência com a imagem exibida, para não prejudicar a velocidade de carregamento.
3. Conferir a home publicada e o restante das páginas com foto de capa (sobre, quem é o Alê, clínicas) para garantir que nenhuma tem duplicata.

## Detalhes técnicos

- `src/routes/index.tsx` (linhas 42–49) declara um único `rel="preload"` do hero com `imageSrcSet`/`imageSizes`; a saída do HTML de produção mostra dois `<link rel="preload" as="image" href="/img/ale-hero.jpeg">` idênticos, com o `imageSrcSet` ausente. Investigar se o `links` do route head está sendo emitido duas vezes (SSR + head hidratado) ou se um segundo `<link>` é criado em runtime.
- Nada muda em `src/routes/api/public/img.ts`: `UPSTREAM = https://images.weserv.nl/` é server-side. Se você quiser eliminar essa dependência externa também, é um trabalho separado (conversão de imagem no próprio Worker) que eu posso planejar depois.
- Nenhum conteúdo visível é alterado.
