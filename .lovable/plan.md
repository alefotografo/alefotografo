# Corrigir www.alefotografo.com.br

## O que está acontecendo

Verifiquei agora:

- `alefotografo.com.br` (sem www): conectado ao projeto, status **active**, servindo o site novo.
- `www.alefotografo.com.br`: **não está conectado** ao projeto. O DNS aponta para o IP da Lovable (185.158.133.1), mas como o subdomínio `www` não foi adicionado na lista de domínios do projeto, a Lovable não o reconhece nem emite certificado para ele. O que responde hoje nesse endereço é conteúdo antigo (título "Fotografo Corporativo em Sao Paulo com 30 Anos de Experiencia"), não o site atual.

Ou seja: o problema não é DNS nem propagação — falta cadastrar o `www` como domínio do projeto. Isso só pode ser feito por você no painel; não existe ferramenta de código que adicione domínios.

## O que você precisa fazer (2 minutos)

1. Abra **Project Settings → Project → Domains**.
2. Clique em **Connect Domain** e digite exatamente `www.alefotografo.com.br`.
3. Siga o fluxo: o registro A já existe no Registro.br (`www` → `185.158.133.1`), então a verificação deve passar direto usando o mesmo TXT `_lovable` já publicado.
4. Deixe `alefotografo.com.br` marcado como **Primary**. Assim o `www` passa a redirecionar para a versão sem www.
5. Aguarde o status ir de *Verifying* → *Setting up* → **Active** (SSL é emitido automaticamente).

## Do meu lado (já pronto, sem mudança necessária)

O código já trata o caso: `src/server.ts` faz redirect 301 de `www` para o domínio raiz e força HTTPS em um único salto. Assim que o `www` estiver Active na Lovable, quem acessar `www.alefotografo.com.br` cai em `https://alefotografo.com.br` — sem conteúdo duplicado e sem perder SEO.

## Depois que ficar Active

Eu confiro para você:

- Resposta do `www` (deve ser 301 → apex, um salto só).
- Certificado SSL válido cobrindo `www`.
- Canonical das páginas apontando sempre para o domínio sem www.

Nada a implementar em código agora — a ação é a conexão do subdomínio no painel. Aprove se quiser que eu fique responsável pela verificação final assim que você concluir.
