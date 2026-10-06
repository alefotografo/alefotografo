# Missão Noturna — Autoridade, Cases, GEO e Interlinking

## Como isolamos do site no ar
Este ambiente não permite criar branch git manualmente (`git fetch`/`checkout`/`push`). O equivalente seguro é um **rascunho isolado do Lovable**: uma cópia do projeto com ambiente próprio. Nada vai para produção, para a main nem para publicação até você aprovar o rascunho. Cloudflare, DNS, SSL, domínio e hospedagem: **não serão tocados**.

## Travas mantidas
- Title, meta e H1 da Home exatamente como especificado no documento.
- URLs, slugs, rotas, redirects, canonicals, robots, sitemap, llms, galerias e cases de vídeo existentes: inalterados.
- Sem dependências novas, sem redesign visual, sem palavras proibidas, voz institucional ("produzimos / nossa equipe").
- Fatos da entidade: 30+ anos de experiência e empresa desde 1999 (sem equivaler os dois), telefone, endereço e CNPJ oficiais.
- Limite de 10 a 20 arquivos funcionais.

## Etapas
1. **Auditoria somente leitura (fases 1–3, 17–21, 27, 30–31):** inventário das páginas comerciais, hubs, cases e blog; mapa de qual página é dona de cada intenção; prontidão de cada cliente para virar case; canibalização, links quebrados, páginas órfãs e schemas.
2. **Cases existentes (fases 4–5):** enriquecer `/cases/ativa-logistica` (Itapevi e Barueri, estrutura, operação, banco de imagens e vídeo, sem drone, números ou resultados) e `/cases/rocha-e-queiroz-advogados` (retratos, vídeo institucional e depoimento de Vanessa Cantieri), usando apenas fotos cuja origem esteja confirmada.
3. **Novos cases (fase 6):** criar somente os que estiverem "READY" com evidência real no projeto, na ordem SQ Química, Tecnisa, Galena, Germed, Nitriflex, Fiorde e ABRADILAN. Os parciais ficam só documentados. Cada case novo é adicionado ao hub `/cases` e ao sitemap: sitemap como acréscimo, sem alterar entradas existentes.
4. **Interlinking (fases 7–11, 22):** links serviço → case, case → serviço, blog → página comercial e vídeo → serviço, só onde a intenção for inequívoca. `autoLink.tsx` continua como está.
5. **GEO e prova (fases 12–14, 25–26, 33):** blocos curtos de fatos que a IA consegue extrair (quem, o quê, onde, para quem) e blocos de prova de cliente, sem inventar dados.
6. **Validação (fases 35–38, 44):** typecheck, todas as páginas tocadas respondendo 200, títulos, metas e canonicals intactos, galerias e vídeos carregando, verificação no desktop e no celular de 390px.
7. **Relatório (fases 41–42, 45):** `docs/audits/overnight-authority-geo-2026-10-05.md` com inventário, mapa de intenções, prontidão dos cases, mudanças feitas e puladas, achados e as 10 próximas ações, além das perguntas para você.

## Detalhes técnicos
- Isolamento por `drafts--create`; validação dentro do próprio rascunho.
- Cases novos seguem o padrão de `src/routes/cases.ativa-logistica.tsx` (rota própria, head próprio com canonical www, BreadcrumbList).
- Itens de infraestrutura encontrados durante o trabalho entram no relatório como "OUT OF SCOPE — INFRASTRUCTURE FROZEN".
- Ao final: sem merge e sem publicação. Você revisa o rascunho e decide se aceita.
