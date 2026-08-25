# Nova página "Todos os serviços" (/servicos) e correção do menu

## O problema

No cabeçalho, em **Serviços → Ver todos os serviços**, o link aponta para `/foto-profissional`. O visitante que quer ver o panorama de serviços cai numa landing de um único serviço (galeria de retratos, FAQ de foto profissional). Não existe hoje nenhuma página que liste todos os serviços. As páginas existentes hoje: `/fotos-corporativas`, `/fotografia-executiva`, `/foto-profissional`, `/foto-profissional-para-linkedin`, `/fotos-profissionais-medicos`, `/fotografia-para-clinicas`, `/fotografia-para-advogados`, `/eventos-corporativos`, `/fotografo-de-feira-de-negocios`, `/fotografo-empresarial`, `/videos`, além das galerias por especialidade em `/fotografo-corporativo`.

## Solução

Criar uma página nova **`/servicos`** — um hub visual, com foto em cada item e pouco texto — e apontar o item "Ver todos os serviços" do menu para ela.

```text
/servicos
 ┌───────────────────────────────────────────────┐
 │ H1: Todos os serviços de foto e vídeo         │
 │ 1 linha de apoio + CTA WhatsApp               │
 ├───────────────────────────────────────────────┤
 │ Serviços principais (cards grandes com foto)  │
 │ [Foto profissional] [Corporativa] [Executiva] │
 │ [LinkedIn] [Eventos] [Vídeo institucional]    │
 ├───────────────────────────────────────────────┤
 │ Por público (cards com foto, texto curto)     │
 │ [Médicos] [Clínicas] [Advogados] [Empresas]   │
 │ [Feiras de negócios]                          │
 ├───────────────────────────────────────────────┤
 │ Especialidades (galerias) — grid de fotos      │
 │ todas as categorias do catálogo, com capa      │
 ├───────────────────────────────────────────────┤
 │ CTA final: orçamento pelo WhatsApp             │
 └───────────────────────────────────────────────┘
```

Princípio de design: **mais foto, menos texto**. Cada card = capa + título + uma frase curta (máx. ~10 palavras). Sem parágrafos longos, sem FAQ nesta página (o FAQ continua em `/faq` e nas landings).

## Mudanças

1. **Nova rota** `src/routes/servicos.tsx`
   - `head()` próprio: título, description, og:title, og:description, canonical `https://www.alefotografo.com.br/servicos`.
   - Grids reutilizando `SmartImage` (capas do catálogo/landings) e `waLink` para CTAs.
   - Grid de especialidades gerado a partir de `categories` de `@/data/catalog` (nada hardcoded), linkando para `/fotografo-corporativo/$slug`.
2. **Cabeçalho** `src/components/site/Header.tsx`
   - "Ver todos os serviços" → `/servicos`.
   - Manter os 7 atalhos atuais acima dele.
3. **Rodapé** `src/components/site/Footer.tsx`
   - Adicionar "Todos os serviços" (`/servicos`) na coluna de fotografia.
4. **Sitemap** `src/routes/sitemap[.]xml.ts`
   - Incluir `/servicos`.

Não mexer em domínio, DNS, robots, canonicals existentes, nem no conteúdo das landings nesta etapa.

## Etapa 2 (opcional, depois de aprovar a página)

Reduzir texto e aumentar foto nas landings de público (executivos/gestores, advogados e consultores): trocar blocos de parágrafo por grid de imagens com legenda curta. Faço depois, página por página, para não mudar SEO de várias rotas de uma vez.

## Validação

- `/servicos` responde 200 no preview, com H1 único e metadados próprios.
- Menu "Ver todos os serviços" leva a `/servicos`.
- Todos os cards e chips levam a rotas existentes (sem 404).
- Mobile: grids sem estouro horizontal.
