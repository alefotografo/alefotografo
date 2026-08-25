# Vários e-mails no domínio + estado atual do DMARC

## 1. O que verifiquei agora no DNS público

- `_dmarc.alefotografo.com.br` → `v=DMARC1; p=none; rua=mailto:comercial@alefotografo.com.br`
  (ainda o valor **antigo**, sem `fo=1; adkim=r; aspf=r; pct=100`)
- SPF na raiz → `v=spf1 include:_spf.google.com ~all` (correto)

Então a atualização do DMARC ou ainda não foi salva, ou está propagando. TTL curto (~8 min), então eu reconfiro depois.

## 2. Os endereços adicionais não dependem de DNS

Você quer estes funcionando, além de `comercial@`:

- `alefotografo@alefotografo.com.br`
- `ale@alefotografo.com.br`
- `atendimento@alefotografo.com.br`

Ponto importante: MX, SPF, DKIM e DMARC valem para **todo o domínio**. Como `comercial@` já recebe e autentica, o DNS já está certo para todos os endereços. O que falta é **criar cada endereço dentro do Google Workspace** — sem isso o Google recusa a mensagem mesmo com o MX correto.

Duas formas, e a escolha muda o custo:

- **Alias (grátis):** o endereço vira apelido de uma conta existente (`comercial@`). Tudo cai na mesma caixa, e você pode enviar como se fosse aquele endereço. Até 30 aliases por usuário, sem custo extra.
- **Usuário próprio (pago por licença):** caixa de entrada separada, senha própria, ideal se outra pessoa vai usar.

Recomendação: `ale@` e `alefotografo@` como **alias** da sua conta; `atendimento@` como alias também, a menos que outra pessoa vá responder — nesse caso, usuário próprio ou um **grupo** (grátis) com você e ela como membros.

## 3. Passos no Google Admin (você executa, eu confiro depois)

Para cada alias:
1. Google Admin → Diretório → Usuários → abrir sua conta.
2. "Informações do usuário" → **E-mails alternativos (alias de e-mail)** → Adicionar um alias.
3. Digitar `ale`, escolher o domínio `alefotografo.com.br`, salvar. Repetir para `alefotografo` e `atendimento`.
4. Aguardar até ~24 h (normalmente minutos) para o alias ficar ativo.

Para poder **enviar** com esses endereços no Gmail:
1. Gmail → Configurações → Ver todas as configurações → Contas e importação.
2. "Enviar e-mail como" → Adicionar outro endereço de e-mail → digitar o alias → tratar como alias → confirmar.

Se preferir `atendimento@` como grupo: Admin → Diretório → Grupos → Criar grupo com esse endereço e adicionar os membros.

## 4. Finalizar o DMARC (passo pendente do plano anterior)

No Registro.br, na entrada TXT `_dmarc`, o valor deve ficar:

```text
v=DMARC1; p=none; rua=mailto:comercial@alefotografo.com.br; fo=1; adkim=r; aspf=r; pct=100
```

Depois disso, janela de observação de 2 a 4 semanas antes de `p=quarantine; pct=25`.

## 5. O que eu faço depois que você salvar

- Reconfiro o DMARC no DNS público e confirmo o valor novo.
- Testo a resolução do MX/SPF/DKIM novamente (nada deve mudar).
- Confirmo, com um envio de teste que você me reporta, se cada endereço recebe e sai autenticado.

## Limites

- Nenhuma mudança de código: e-mail é 100% DNS + Google Workspace.
- Não altero registros A do site, MX, SPF, DKIM, nem o domínio primário (`www.alefotografo.com.br` segue canônico).
- Criação de alias/usuário só você pode fazer, dentro do painel do Google Workspace.
