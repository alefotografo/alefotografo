# Domínio validado — finalizar configuração definitiva

## Estado verificado agora

| Item | Resultado |
|---|---|
| TXT público `_lovable.alefotografo.com.br` | `lovable_verify=a8940494177c04d214f8c9718445cd08dd08c10bf53c8628c93fa10bc34a80bc` |
| Valor que a Lovable pediu | `lovable_verify=a8940494177c04d214f8c9718445cd08dd08c10bf53c8628c93fa10bc34a80bc` |
| `alefotografo.com.br` na Lovable | **active / connected** |
| Projeto publicado | **sim** |
| `https://alefotografo.com.br/` | **302 → `https://www.alefotografo.com.br/`** |
| `https://www.alefotografo.com.br/` | **200** |
| HSTS / headers básicos | presentes |

Sim: o valor é exatamente o mesmo que está no TXT, e o domínio já validou.

## Plano para encerrar de vez

1. Manter `www.alefotografo.com.br` como host final, já que o apex agora redireciona para o `www` e o `www` responde 200.
2. Revisar o código atual para garantir que canonical, sitemap, RSS, robots e JSON-LD apontem todos para `https://www.alefotografo.com.br`.
3. Se ainda houver algum ajuste temporário criado durante a falha de DNS, remover esse ajuste e deixar o redirecionamento coerente com o domínio final.
4. Revalidar em produção:
   - apex → `www` sem loop;
   - `www` → 200;
   - canonical no HTML;
   - sitemap com URLs `www`;
   - headers HTTP.
5. Reenviar/confirmar o sitemap no Search Console do domínio com `www`.

## Detalhes técnicos

- O DNS não precisa de nova alteração neste momento.
- A resposta 302 do apex para o `www` está vindo da configuração de domínio/host primário.
- A prioridade agora é alinhar SEO e redirects para não misturar apex e `www` novamente.
