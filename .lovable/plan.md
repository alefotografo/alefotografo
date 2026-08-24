# Ativar SSL e submeter o sitemap em alefotografo.com.br

## Situação verificada agora

- Zona no registro.br: serial `2026236840` — **inalterado** desde a tentativa anterior.
- Registros `A` (raiz), `A` (www) e `TXT _lovable`: **ausentes** no autoritativo `a.auto.dns.br` e no Google (8.8.8.8).
- `https://alefotografo.com.br/`: não resolve (host inexistente).

Conclusão: os registros da tela do registro.br continuam **não salvos**. Sem eles, a Lovable não verifica o domínio e o SSL não pode ser emitido — logo, o sitemap ainda não pode ser submetido no endereço novo.

## Sequência obrigatória

```text
1. Salvar zona no registro.br  ->  2. DNS propagar  ->  3. Lovable verificar + emitir SSL
   ->  4. https://alefotografo.com.br responder 200  ->  5. Submeter sitemap no Search Console
   ->  6. Acompanhar indexação e 301
```

## Etapa 1 — Você no registro.br (bloqueio atual)

Na tela "Configurar zona DNS" (modo avançado), gravar de fato as três entradas:

| Tipo | Nome | Dados |
|---|---|---|
| A | alefotografo.com.br | 185.158.133.1 |
| A | www.alefotografo.com.br | 185.158.133.1 |
| TXT | _lovable.alefotografo.com.br | lovable_verify=a8940494177c04d214f8c9718445cd08dd08c10bf53c8628c93fa10bc34a80bc |

Se **SALVAR ALTERAÇÕES** estiver cinza: remova uma linha pelo × verde, recadastre em **NOVA ENTRADA** e o botão ativa. Se seguir cinza, é o bloqueio temporário do modo avançado avisado na própria tela — aguardar e salvar.

Observação: o valor do TXT deve ir **sem aspas** ao redor; aspas literais fazem a verificação falhar.

## Etapa 2 e 3 — Eu verifico (após você salvar)

- Confirmo que o serial da zona mudou e que os três registros aparecem no autoritativo, no Google e no Cloudflare.
- Confiro o status do domínio no projeto (verificando → configurando → ativo) e a emissão do certificado.
- Testo `https://` na raiz e no `www`: status 200, cadeia TLS válida, validade do certificado e ausência de conteúdo misto.
- Confirmo que `www` redireciona para a versão primária escolhida (ou vice-versa), sem loop.

Se a verificação travar, diagnostico a causa concreta (registro divergente, TXT com aspas, CAA bloqueando Let's Encrypt) em vez de apenas repetir a tentativa.

## Etapa 4 — Sitemap no Search Console

A propriedade `sc-domain:alefotografo.com.br` já está verificada com permissão de proprietário — não precisa de meta tag nem de TXT extra.

1. Confirmo que `https://alefotografo.com.br/sitemap-index.xml`, `/sitemap.xml` e `/sitemap-videos.xml` respondem 200 no domínio novo com XML válido.
2. Submeto `https://alefotografo.com.br/sitemap-index.xml` na propriedade verificada.
3. Leio o status retornado pelo Google (URLs enviadas, erros, avisos) e reporto o que ele efetivamente diz.
4. Trato o sitemap antigo `https://www.alefotografo.com.br/sitemap.xml` (WordPress, 131 URLs, submetido em 2021): removo da propriedade para não acumular erro de busca depois que o site antigo sair do ar.

## Etapa 5 — Conferência de 301 e indexação

- Rodo a varredura das rotas legadas contra o domínio no ar e confirmo cada redirecionamento como 301 (não 302, não corrente de dois saltos, não 404).
- Confirmo canonical, `robots.txt` e ausência de `noindex` nas 340 URLs servidas pelo domínio novo.
- Leio o estado de indexação disponível na propriedade e reporto os números reais.

Importante sobre expectativa: a indexação das 340 URLs é decisão e prazo do Google — leva de dias a semanas e não é algo que a submissão garanta. Posso ler e reportar o estado no Search Console, mas **não** existe API para forçar reindexação ou re-crawl; isso só é possível manualmente na interface do Search Console. Não vou prometer "todas indexadas" como resultado desta etapa.

## Detalhes técnicos

- SSL na Lovable é automático (Let's Encrypt) assim que a verificação de domínio conclui; nada a configurar no código.
- `SITE_ORIGIN` em `src/lib/seo.ts` e os sitemaps já apontam para `https://alefotografo.com.br`.
- Redirecionamentos legados vivem em `src/lib/legacy-redirects.ts`.
- Nenhuma alteração de código é necessária para as etapas de SSL e sitemap; se a conferência de 301/canonical revelar divergência, trato como correção pontual nesses arquivos.
