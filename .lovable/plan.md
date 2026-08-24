# Auditoria sênior de UX, responsividade e performance

Revisão completa da arquitetura de navegação, do comportamento em cada tamanho de tela e do carregamento do site — sem mudar o conteúdo comercial nem o SEO já conquistado.

## 1. Arquitetura de navegação (o ponto mais crítico hoje)

O menu tem 9 itens em uma linha só, com rótulos que se sobrepõem em significado: "Foto profissional", "Corporativo" e "Fotos" competem entre si e o visitante não sabe onde clicar. Além disso, dezenas de páginas fortes (executiva, médicos, advogados, clínicas, eventos, bairros) não têm nenhuma entrada no menu.

Nova estrutura, com 5 entradas de primeiro nível e submenus:

```text
Serviços ▾        Portfólio ▾       Vídeos     Blog     Contato
 Fotos corporativas  Por segmento
 Foto executiva      Fotos avulsas
 LinkedIn            Depoimentos
 Médicos / Clínicas
 Advogados
 Eventos corporativos
 Ver todas →
                    Sobre ▾ (Quem é o Alê, FAQ, Atendimento por região)
```

- Submenus acessíveis por teclado (foco, Esc, aria-expanded) e por toque no mobile (acordeão, não hover).
- Item ativo destacado inclusive quando a página é filha de um grupo.
- Botão "Orçamento" sempre visível, com tamanho contido para não colidir com o menu.

## 2. Responsividade por faixa de tela

- **≤400px:** logo menor, CTA "Orçamento" como ícone+texto curto, tipografia dos títulos reduzida, botões com área de toque mínima de 44px.
- **401–767px:** menu em acordeão de tela cheia com rolagem e agrupamento por seção; grades em 1 coluna.
- **768–1023px (tablet — hoje mal servido):** hoje esse tamanho ainda cai no hamburguer; passará a ter menu condensado horizontal e grades de 2 colunas com espaçamento próprio.
- **1024–1279px:** menu completo com submenus; grades de 3 colunas.
- **≥1280px:** contêiner mais largo e respiro maior, sem esticar texto além de leitura confortável.
- Revisão de todas as páginas para eliminar rolagem horizontal, textos cortados e cards de altura desigual.

## 3. Navegabilidade inteligente

- Breadcrumbs em todas as páginas internas, com hierarquia coerente com o novo menu.
- Bloco "próximo passo" no fim de cada página: serviço relacionado + orçamento, em vez de apenas listas de links.
- Barra fixa inferior no mobile (WhatsApp + Orçamento) substituindo o botão flutuante solto, que hoje concorre com o rodapé.
- Busca do blog acessível a partir do menu.
- Rolagem ao topo em toda troca de rota e foco movido para o conteúdo (acessibilidade).

## 4. Carregamento rápido

- **Analytics:** carregar o GA somente após a primeira interação/idle, para não competir com a renderização inicial.
- **Depoimentos e rodapé:** hoje são montados em toda rota; passam a carregar sob demanda quando entram na viewport.
- **Imagens:** apenas a primeira imagem visível com prioridade alta (hoje a galeria marca três), `sizes` corrigidos por faixa de tela para não baixar pixels extras no mobile, e proporção reservada em todos os cards para eliminar salto de layout.
- **Vídeos:** miniatura leve com play sob clique em todas as listagens (sem iframe do YouTube antes do clique).
- **Fontes e ícones:** evitar bloqueio de renderização e importar ícones individualmente.
- Verificação final com build de produção e medição das páginas mais acessadas (home, /fotos-corporativas, /fotografo-corporativo, /videos, /blog).

## 5. Detalhes técnicos

- `Header.tsx` reescrito com estrutura de grupos e submenus; breakpoint de troca de menu passa de 1000px para faixas 768/1024.
- `__root.tsx`: envolver `TestimonialsCarousel` e `Footer` em carregamento diferido (`LazySection`), mover o script do GA para carregamento pós-idle, adicionar restauração de rolagem/foco por rota.
- `Masonry.tsx` e `SmartImage.tsx`: ajuste de prioridade, `sizes` e proporção padrão.
- `WhatsappCta.tsx` convertido em barra de ação mobile + botão flutuante no desktop.
- Nenhuma URL, canônico, sitemap, redirecionamento 301 ou JSON-LD será alterado.
