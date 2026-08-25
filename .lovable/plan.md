# Como saber se seus MX do Gmail são "antigos" — e o que usar

## Situação confirmada agora

Consulta ao DNS público de `alefotografo.com.br`:

| Registro | Estado |
|---|---|
| MX | nenhum |
| SPF (TXT na raiz) | nenhum |
| DKIM (`google._domainkey`) | não existe |
| DMARC (`_dmarc`) | não existe |

Ou seja: hoje não existe MX nenhum na zona — nem antigo nem novo. Não há como o MX "estar antigo": ele simplesmente não está publicado, e por isso nenhum e-mail chega em `@alefotografo.com.br`.

## Como identificar antigo vs. novo (referência)

- **Formato antigo (ainda válido):** 5 registros MX `ASPMX.L.GOOGLE.COM`, `ALT1..ALT2.ASPMX.L.GOOGLE.COM` (prioridade 5), `ALT3..ALT4` (prioridade 10). O Google continua aceitando, mas não recomenda para novas configurações.
- **Formato atual recomendado:** um único MX `smtp.google.com` com prioridade 1.
- Regra prática: se você vê 5 linhas `ASPMX`, é o formato antigo; se vê 1 linha `smtp.google.com`, é o atual. Os dois não devem coexistir.

## O que fazer

1. No Registro.br, na zona DNS de `alefotografo.com.br`, criar **um** MX: nome vazio/`@`, prioridade `1`, valor `smtp.google.com`.
2. Criar o TXT de SPF na raiz: `v=spf1 include:_spf.google.com ~all`.
3. Criar o TXT de DMARC em `_dmarc`: `v=DMARC1; p=none; rua=mailto:comercial@alefotografo.com.br`.
4. Gerar o DKIM no painel do Google (Apps → Google Workspace → Gmail → Autenticar e-mail, chave 2048 bits) e criar o TXT em `google._domainkey` com o valor exibido lá.
5. Não alterar os registros A (`@` e `www` → `185.158.133.1`) — são o site e estão corretos.

## Verificação depois de salvar

Eu consulto novamente MX, SPF, DKIM e DMARC no DNS público e confirmo se o formato publicado é o atual (`smtp.google.com`) e se o recebimento/envio está autenticado. Nada de código do site muda neste trabalho.
