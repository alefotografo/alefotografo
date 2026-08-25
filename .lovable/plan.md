# Plano para corrigir o e-mail do domínio no Registro.br

## Objetivo
Fazer os e-mails `@alefotografo.com.br` funcionarem com Gmail/Google Workspace, mantendo o site publicado sem alterações nos registros do site.

## O que fazer no Registro.br

1. **Manter os registros do site como estão**
   - Não alterar os registros `A` de `@` e `www`.

2. **Conferir o MX do Gmail**
   - O registro MX deve apontar para o servidor informado pelo Google.
   - Se o Google orientou usar o MX novo, manter somente ele.
   - Não misturar o MX novo com a lista antiga de servidores `ASPMX`.

3. **Adicionar SPF como TXT**
   - No Registro.br, SPF não aparece como tipo separado.
   - Clicar em **Nova entrada** e escolher o tipo **TXT**.
   - Nome/host: `@` ou deixar em branco, conforme o campo do Registro.br.
   - Valor típico para Google Workspace:
     ```text
     v=spf1 include:_spf.google.com ~all
     ```

4. **Adicionar DKIM como TXT**
   - DKIM também não aparece como tipo separado.
   - Primeiro gerar a chave no Google Admin.
   - Caminho: Google Admin → Apps → Google Workspace → Gmail → Autenticar e-mail.
   - Gerar chave DKIM de 2048 bits.
   - Depois criar uma entrada **TXT** no Registro.br.
   - Nome normalmente será:
     ```text
     google._domainkey
     ```
   - Valor será o texto longo gerado pelo Google.

5. **Adicionar DMARC como TXT**
   - DMARC também é uma entrada **TXT**.
   - Nome:
     ```text
     _dmarc
     ```
   - Valor inicial recomendado:
     ```text
     v=DMARC1; p=none; rua=mailto:comercial@alefotografo.com.br
     ```

6. **Validar depois da propagação**
   - Após salvar, aguardar alguns minutos.
   - Conferir MX, SPF, DKIM e DMARC publicados.
   - Testar recebimento e envio pelo Gmail.

## Resultado esperado
- O domínio continua carregando o site normalmente.
- Os e-mails `@alefotografo.com.br` passam a receber via Gmail.
- SPF, DKIM e DMARC melhoram a autenticação e reduzem chance de cair em spam.

## Observação importante
No Registro.br, os tipos que você deve procurar são principalmente **MX** e **TXT**. SPF, DKIM e DMARC entram todos como **TXT**.
