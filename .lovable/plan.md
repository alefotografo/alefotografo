# Registros DNS para alefotografo.com.br no registro.br

Este projeto (remix, fundo preto) ainda não está publicado e o domínio ainda não está conectado a ele. Os registros abaixo são os da Lovable; o único valor que só aparece depois de conectar o domínio é o TXT de verificação.

## Registros a criar na zona DNS do registro.br

| Tipo | Nome | Valor |
|---|---|---|
| A | `@` (ou em branco) | `185.158.133.1` |
| A | `www` | `185.158.133.1` |
| TXT | `_lovable` | `lovable_verify=...` (valor exibido ao conectar o domínio) |

Observações:
- No registro.br, use "Alterar zona DNS" (DNS do próprio registro.br). Não é necessário trocar nameservers para os da Lovable.
- Remova os registros A/CNAME antigos da raiz e do `www` que hoje apontam para a hospedagem WordPress, senão o domínio continua servindo o site antigo.
- Mantenha intactos os registros de e-mail (MX, SPF, DKIM, DMARC) para não derrubar `comercial@alefotografo.com.br`.
- Se algum dia o domínio passar por Cloudflare, o setup muda para modo proxy (CNAME) em vez dos A records.
- Propagação: normalmente minutos, podendo levar até 72h. O SSL (Let's Encrypt) é emitido automaticamente depois da verificação — nada a configurar.

## Sequência recomendada

1. Publicar este projeto (gera a URL `.lovable.app`).
2. Em Project Settings → Domains → Connect Domain, adicionar `alefotografo.com.br` e `www.alefotografo.com.br` (o `www` não é automático) e definir o primário.
3. Copiar o valor real do TXT `_lovable` mostrado no fluxo.
4. Criar os registros da tabela acima no registro.br e remover os antigos.
5. Aguardar verificação + SSL; o status no painel passa por Verifying → Setting up → Active.

## Depois do DNS ativo (SEO)

- Enviar `https://alefotografo.com.br/sitemap-index.xml` na propriedade `sc-domain:alefotografo.com.br` do Search Console e remover o envio antigo de 2021.
- Conferir os 301 do site WordPress antigo para as novas URLs.
