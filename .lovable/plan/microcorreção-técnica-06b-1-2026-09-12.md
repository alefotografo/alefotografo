# Microcorreção técnica 06B-1

## Implementação
- **FAQ:** gerar identificadores únicos e estáveis por item; ligar cada botão à resposta correspondente com `aria-controls` e `id`, preservando conteúdo, abertura e aparência atuais.
- **Áreas de toque mobile:** ampliar apenas os links de texto confirmados no diagnóstico para pelo menos 44px quando aplicável, usando área clicável/padding somente no mobile. Preservar cards que já têm área clicável ampliada, além do layout e estilos desktop.
- **Avaliação por estrelas:** manter as cinco estrelas visuais e remover o conflito que atualmente oculta do leitor de tela o rótulo acessível da avaliação real.

## Escopo técnico
- Alterar somente `Faq.tsx` e os componentes da Home já associados no diagnóstico aos links pequenos e às estrelas: `SolucoesEmpresa.tsx`, `AgilidadeProva.tsx`, `TestimonialsCarousel.tsx`, `HomeSelectedWorks.tsx`, `HomeAbout.tsx` e `HomeBlog.tsx`.
- Não tocar em FaixaClientes, Hero, miniaturas, imagens, performance, SEO, conteúdo, URLs, ordem ou estilos globais.

## Validação
- Confirmar no DOM a relação `aria-controls`/`id` do FAQ e o nome acessível das estrelas.
- Medir no mobile os alvos alterados e verificar ausência de regressão visual em mobile e desktop.
- Executar somente o typecheck do projeto.
