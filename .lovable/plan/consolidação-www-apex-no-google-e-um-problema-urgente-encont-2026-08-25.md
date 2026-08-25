# Consolidação www/apex no Google — e um problema urgente encontrado

## O que eu verifiquei agora (fatos, não suposições)

**Search Console — propriedades existentes:**
- Existe apenas `sc-domain:alefotografo.com.br` (verificada, dono). Ela cobre http, https, apex e www.
- **Não existem** propriedades separadas de `http://www` ou `https://www` para este domínio. Portanto não há nada a "consolidar" no nível de propriedade — uma única propriedade de domínio já reúne todas as variações.

**Estado no índice do Google (URL Inspection, via a propriedade de domínio):**
- `https://www.alefotografo.com.br/` → "Submitted and indexed", canônica escolhida pelo Google = **a versão com www**.
- `https://alefotografo.com.br/` → "Duplicate without user-selected canonical", canônica escolhida pelo Google = **a versão com www**.
- Ou seja: hoje o Google ainda indexa o www e trata o apex como duplicata. **Há indexação residual do www.**

**Causa provável que descobri no meio da checagem (urgente):**
- `https://www.alefotografo.com.br/` responde **301 → https://alefotografo.com.br/` (correto).
- `https://alefotografo.com.br/` responde **HTTP 421 "Project not found"** — o domínio raiz está com status *drifted* (desconectado) nas configurações de domínio do projeto.
- `https://alefotografo.lovable.app/` responde 200 normalmente.

Resultado prático: todo tráfego do www é redirecionado para um endereço que está fora do ar. Enquanto isso durar, o Google não consegue trocar a canônica para o apex — e o site está inacessível no domínio próprio.

## Plano

### 1. Religar o domínio raiz (você, no painel — prioridade máxima)
Em **Project Settings → Domains**: reconectar / revalidar `alefotografo.com.br` até ficar **Active** e como **Primary**, mantendo `www.alefotografo.com.br` conectado apenas para o redirecionamento. O DNS já aponta para o IP correto, então é só refazer a conexão no painel. Nada de código resolve isso.

### 2. Eu revalido em produção
Depois que ficar Active, eu confiro: apex 200 com SSL válido, `www` em um único salto 301 para o apex, canonical auto-referente no HTML servido, `robots.txt` e `sitemap-index.xml` acessíveis no apex.

### 3. Eu reforço a consolidação no Search Console
- Reenvio o `sitemap-index.xml` na propriedade `sc-domain:alefotografo.com.br` (só depois do apex voltar).
- Releio a inspeção de um conjunto de URLs representativas (home, blog, páginas de serviço, bairros) para acompanhar a troca da canônica de www para apex.

### 4. O que fica por conta do prazo do Google
Não existe API para forçar re-crawl. Com o apex no ar, 301 do www e canonical auto-referente, o Google migra a canônica sozinho — normalmente dias, podendo levar semanas nas URLs de cauda longa. Eu posso reler o progresso quando você quiser.

## Detalhes técnicos
- Redirecionamento www → apex já está em `src/server.ts` e retorna 301 em produção (confirmado por header).
- Normalização de barra final em `src/lib/legacy-redirects.ts` já é 301.
- `hreflang` já foi removido; canonical é auto-referente por rota.
- Nenhuma mudança de código é necessária para esta etapa: o bloqueio é a conexão do domínio raiz no painel.
