# Corrigir o erro de DNS: falta 1 registro TXT do www

## O que eu verifiquei agora (ao vivo)

| Endereço | Resposta | Estado na Lovable |
|---|---|---|
| `https://alefotografo.com.br/` | **200** (site no ar) | conectado / active |
| `https://www.alefotografo.com.br/` | **421 "Project not found"** | **drifted** (desconectado) |

DNS de ambos aponta certo para `185.158.133.1`. O problema é um único registro que sumiu:

- `TXT` `_lovable.www.alefotografo.com.br` → **ausente**
- Valor esperado: `lovable_verify=13bedda2e7bf7cac31866d7d937fd09dc895f32dbac63ef3e808132595385fc8`

Sem esse TXT a Lovable não reconhece mais o `www`, e como o `www` está marcado como **Primary**, o painel considera o domínio principal desconectado — daí a mensagem de problema de DNS.

Agravante encontrado: o HTML servido no apex declara canônica `https://www.alefotografo.com.br/`, ou seja, o Google está sendo apontado para o endereço que hoje responde 421.

## O que você faz (2 minutos, no Registro.br)

Na zona DNS de `alefotografo.com.br`, criar:

| Tipo | Nome | Valor |
|---|---|---|
| TXT | `_lovable.www` | `lovable_verify=13bedda2e7bf7cac31866d7d937fd09dc895f32dbac63ef3e808132595385fc8` |

Manter os A records existentes (`@` e `www` → `185.158.133.1`) e os registros de e-mail intactos. Depois de salvar, o status vai de *Verifying* → **Active** sozinho.

## O que eu faço

1. Acompanhar o status do `www` até ficar Active e confirmar 200 + SSL válido.
2. Enquanto o `www` estiver fora, evitar que o Google siga apontando para uma URL quebrada: trocar temporariamente a origem canônica para o apex (`https://alefotografo.com.br`), que está no ar, e reverter para o `www` assim que ele voltar. Isso mexe em `src/lib/seo.ts`, `robots.txt` e nos sitemaps.
3. Revalidar redirects (apex ↔ www, http → https), headers e canônica em produção.
4. Reenviar os sitemaps no Search Console com o host que ficar valendo.

## Alternativa (se preferir não mexer mais no DNS)

Abandonar o `www` de vez: remover `www.alefotografo.com.br` do painel, marcar `alefotografo.com.br` como **Primary** e deixar todo o SEO no apex. Nesse caso não há TXT para criar, mas o Google leva algumas semanas para reconsolidar a indexação, que hoje está no `www`.

## Detalhes técnicos

- Origem canônica única em `src/lib/seo.ts` (`SITE_ORIGIN`), consumida por todas as rotas, sitemaps e RSS — a troca é em um ponto só.
- `src/server.ts` mantém o force-HTTPS e o kill switch `REDIRECT_WWW_TO_APEX`, ajustado conforme o host que ficar canônico.
- 421 vem da borda da hospedagem (host não reconhecido), não do app; nenhuma correção de código resolve sem o TXT.
