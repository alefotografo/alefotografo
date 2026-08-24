# Depoimentos em todas as páginas

## Objetivo
Corrigir a página `/depoimentos` e criar uma dobra padrão, com carrossel de depoimentos, que aparece em todas as páginas do site — reforçando credibilidade e conversão.

## O que será feito

### 1. Fonte única de depoimentos
- Novo arquivo `src/data/testimonials.ts` reunindo os 6 depoimentos do LinkedIn (hoje escritos dentro da página `/depoimentos`) + as avaliações do Google já existentes em `src/data/reviews.ts`, num formato único (nome, cargo/origem, texto, nota, link).
- A página `/depoimentos` passa a ler dessa fonte, sem textos duplicados no código.

### 2. Dobra global com carrossel
- Novo componente `TestimonialsCarousel` usando o carrossel já disponível no projeto (embla), com:
  - fundo `bg-surface` e borda superior, mesmo padrão visual das outras dobras;
  - selo "Nota 4,9 de 5 · 144 avaliações no Google" e link para o perfil;
  - 1 card no mobile, 2 no tablet, 3 no desktop; setas, bullets, autoplay suave com pausa no hover e respeito a "reduzir movimento";
  - cards com estrelas, citação, nome e cargo — visual igual ao dos depoimentos atuais.
- A dobra é inserida uma única vez em `src/routes/__root.tsx`, logo antes do rodapé, aparecendo automaticamente em todas as rotas.
- Exceção: não é exibida na própria `/depoimentos` (para não repetir o conteúdo da página).
- Onde já existe o bloco `Testimonials` em grade (`/foto-profissional`, `/fotografia-para-clinicas`, páginas de serviço), esse bloco é removido para não duplicar.

### 3. Página /depoimentos
- Mantém o hero e o CTA, mas os cards passam a exibir também as avaliações do Google (LinkedIn + Google na mesma listagem), com filtro visual por origem.
- Adiciona dados estruturados `Review` + `AggregateRating` na página, reforçando as estrelas na busca.

### 4. Cabeçalho fixo
- O cabeçalho já é fixo (sticky) e global em todas as páginas. Será feita uma verificação de que ele permanece visível ao rolar em desktop e mobile, incluindo com o menu aberto, e ajustado se algum ponto falhar.

## Detalhes técnicos
- Arquivos novos: `src/data/testimonials.ts`, `src/components/site/TestimonialsCarousel.tsx`.
- Arquivos alterados: `src/routes/__root.tsx`, `src/routes/depoimentos.tsx`, `src/components/site/Testimonials.tsx` (ou sua remoção dos usos), `src/routes/foto-profissional.tsx`, `src/routes/fotografia-para-clinicas.tsx`, `src/components/site/ServicePage.tsx`.
- Somente tokens semânticos de cor (`bg-surface`, `text-ember`, `border-border`), sem cores fixas.
- Carrossel client-side com renderização estática segura em SSR (sem quebra de layout / CLS).
- Verificação final: build sem erros e conferência visual em desktop e mobile.
