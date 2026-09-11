# Plano — Home Cirurgia 03

## Alterações

1. **Bloco de experiência**
   - Manter título, texto e os quatro indicadores existentes.
   - Exibir a nota como “4,9 no Google” junto da quantidade real já cadastrada de 144 avaliações, usando a mesma fonte de dados do projeto.
   - Reduzir somente os espaços internos e ajustar a distribuição dos indicadores para deixar o bloco mais compacto no celular, sem alterar o espaçamento padrão entre seções.

2. **Depoimentos na Home**
   - Manter uma única seção “Depoimentos de clientes” e reutilizar o carrossel atual.
   - Na Home, alimentar o carrossel somente com avaliações reais do Google já existentes; os demais depoimentos continuarão preservados nos dados e nas outras páginas.
   - Manter um card visível no celular e até três no desktop, sem instalar biblioteca nem reescrever avaliações.
   - Exibir claramente “4,9 no Google” e “144 avaliações”, ambos vindos dos dados existentes.

3. **Redundância**
   - Preservar a regra atual que já oculta o carrossel global na Home; não remover componentes ou dados.

## Arquivos previstos

- `src/components/site/home/AgilidadeProva.tsx`
- `src/components/site/TestimonialsCarousel.tsx`

## Validação

- Verificar somente o bloco de experiência e a seção de depoimentos.
- Confirmar uma única seção de depoimentos na Home.
- Conferir um card por vez no celular, até três no desktop e ausência de overflow.
- Executar a verificação de tipos.
