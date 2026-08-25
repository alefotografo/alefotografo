# DMARC: relatórios ativos e caminho até p=quarantine

## Situação atual (verificada no DNS público)

- `_dmarc.alefotografo.com.br` → `v=DMARC1; p=none; rua=mailto:comercial@alefotografo.com.br`
- SPF: `v=spf1 include:_spf.google.com ~all`
- MX: `smtp.google.com` (prioridade 1), DKIM 2048 bits ativo em `google._domainkey`

Ou seja: os relatórios agregados (RUA) **já estão ativos** e chegando na sua caixa. O que falta é deixá-los legíveis e definir o cronograma de endurecimento.

## O que proponho (tudo no Registro.br, nenhuma mudança no site)

### 1. Deixar o registro DMARC mais informativo

Substituir o valor do TXT `_dmarc` por:

```text
v=DMARC1; p=none; rua=mailto:comercial@alefotografo.com.br; fo=1; adkim=r; aspf=r; pct=100
```

- `fo=1` — recebe relatório também quando SPF **ou** DKIM falha (hoje só falha total).
- `adkim=r` / `aspf=r` — alinhamento relaxado, correto para Google Workspace.
- `pct=100` — explícito, evita ambiguidade na fase de quarentena.

### 2. Tornar os relatórios legíveis

Os relatórios RUA chegam como XML zipado — ilegíveis manualmente. Duas opções:

- **Opção A (recomendada, gratuita):** usar um analisador DMARC gratuito (ex.: Postmark DMARC Digest ou dmarcian free) e apontar o `rua` para o endereço que ele fornece, mantendo também o seu e-mail. Você recebe um resumo semanal por e-mail em linguagem simples.
- **Opção B:** manter só `comercial@` e eu leio/interpreto os XMLs quando você me encaminhar.

### 3. Janela de observação (2 a 4 semanas)

O que vamos observar nos relatórios:
- Quais remetentes usam seu domínio (Gmail, formulários, ferramentas de disparo, site antigo).
- Se todos passam por SPF **e/ou** DKIM alinhado.
- Se aparece uso não autorizado do domínio.

### 4. Endurecimento em duas etapas

Só depois de 100% dos envios legítimos passando:

1. `p=quarantine; pct=25` por ~1 semana (amostragem, risco baixo).
2. `p=quarantine; pct=100` por 2 a 4 semanas.
3. Opcional, mais tarde: `p=reject`.

Se em qualquer etapa um remetente legítimo cair, voltamos para `p=none` e corrigimos SPF/DKIM daquele remetente antes de seguir.

## Limites

- Não altero MX, SPF, DKIM nem os registros A do site.
- Não altero domínio primário (`www.alefotografo.com.br` segue canônico).
- Nenhuma alteração de código: DMARC é 100% DNS.

## Sua decisão

Antes de eu detalhar os passos exatos no Registro.br: prefere a **Opção A** (analisador externo com resumo legível) ou a **Opção B** (só o seu e-mail)?
