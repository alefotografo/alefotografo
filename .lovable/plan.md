# Conectar o www sem depender do código por e-mail do Registro.br

## O que está acontecendo

O botão "Conectar" abriu o fluxo **automático**, que tenta logar na sua conta do Registro.br e criar os registros DNS por você. Esse fluxo exige o código de verificação por e-mail do Registro.br — e ele não está chegando. Não é problema do site nem da Lovable: é o envio de e-mail do próprio registrador.

A boa notícia: esse fluxo é **opcional**. Conferi o DNS agora:

- `www.alefotografo.com.br` → A `185.158.133.1` (já correto)
- `alefotografo.com.br` → A `185.158.133.1` (já correto, domínio ativo no projeto)

Ou seja, o DNS do www já está pronto. Só falta cadastrar o subdomínio pelo caminho **manual**.

## Caminho recomendado: setup manual

1. **Project Settings → Project → Domains → Connect Domain**.
2. Digite `www.alefotografo.com.br`.
3. Na tela seguinte, **não** use a opção automática de login no registrador. Escolha a alternativa de configuração manual / "já tenho acesso ao meu DNS" / "adicionar registros manualmente" (o texto varia: é a opção que apenas **mostra** os registros em vez de pedir login).
4. A tela vai listar os registros exigidos. Compare com o que já existe no Registro.br:
   - A `www` → `185.158.133.1` — já está lá, nada a fazer.
   - TXT `_lovable` com valor `lovable_verify=...` — se a tela pedir, copie o valor e cadastre no Registro.br (hoje esse TXT não está publicado na zona).
5. Confirme. O status vai para *Verifying* → *Setting up* → **Active**, e o SSL é emitido automaticamente.
6. Mantenha `alefotografo.com.br` como **Primary**.

## Se o código do Registro.br for realmente necessário

Antes de insistir no fluxo automático:

- Verifique a caixa de entrada do e-mail **cadastrado como titular** no Registro.br (não necessariamente o comercial@), incluindo spam e lixeira.
- Confira se esse e-mail ainda existe/recebe: se o domínio de e-mail do titular estava hospedado no site antigo, ele pode ter parado de funcionar na migração — nesse caso o código nunca chega e a única saída é atualizar o e-mail do titular no Registro.br ou usar o caminho manual acima.

## Depois que ficar Active

Eu valido para você:

- `www.alefotografo.com.br` respondendo 301 para `https://alefotografo.com.br` em um único salto (o redirect já está implementado em `src/server.ts`).
- Certificado SSL cobrindo o www.
- Canonical de todas as páginas apontando para o domínio sem www.

Nenhuma alteração de código é necessária — o site já está preparado para o www.
