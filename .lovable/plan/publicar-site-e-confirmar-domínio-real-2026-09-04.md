# Publicar site e confirmar domínio real

## O que será feito

1. Re-publicar o projeto para aplicar a troca da foto no hero e demais alterações recentes.
2. Verificar e, se necessário, corrigir a configuração DNS do domínio `www.alefotografo.com.br` (registro TXT de verificação pendente).
3. Confirmar que ambos `alefotografo.com.br` e `www.alefotografo.com.br` respondem corretamente.

## Estado atual

- O projeto já está publicado em `https://alefotografo.lovable.app`.
- Os domínios customizados já estão conectos:
  - `alefotografo.com.br`: ativo, verificado, DNS ok.
  - `www.alefotografo.com.br`: ativo e apontando corretamente (A record ok), mas a verificação TXT `_lovable.www.alefotografo.com.br` ainda está pendente.
- Não há findings críticos de segurança bloqueando a publicação.

## Passos

1. **Publicar**
   - Executar `preview_ui--publish` para republicar o projeto.
   - Isso atualiza `https://alefotografo.lovable.app` e os domínios customizados conectados.

2. **Corrigir verificação do domínio www**
   - Adicionar o registro TXT `_lovable.www.alefotografo.com.br` com o valor `lovable_verify=13bedda2e7bf7cac31866d7d937fd09dc895f32dbac63ef3e808132595385fc8` no provedor DNS onde o domínio é gerenciado.
   - Re-verificar o status após a propagação.

3. **Validar**
   - Confirmar que `https://alefotografo.com.br/` e `https://www.alefotografo.com.br/` respondem com o novo hero.
   - Confirmar que o redirecionamento entre apex e www está funcionando conforme configurado.

## Fora do escopo

- Não alteraremos slugs, URLs, canonicals ou conteúdo do site.
- Não criaremos/editaremos perfis do Google Business Profile nem do Bing Places (isso exige acesso às contas Google/Microsoft do proprietário).
- Não faremos alterações no Search Console; apenas confirmaremos que o domínio canônico está acessível.

## Ressalva

A troca da foto no hero já está no código-fonte. A publicação aplica essa mudança ao site ao vivo. A configuração DNS do TXT record depende do acesso ao painel do registrador/provedor DNS do domínio.
