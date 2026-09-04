# FAQ: preencher as lacunas de intenção de compra (o schema já existe)

## O que verifiquei agora

O diagnóstico está errado na parte do schema. O `FAQPage` **já está publicado**:

- `src/routes/index.tsx` (linha 54) injeta `faqJsonLd(homeFaqs)`. No HTML renderizado de `/` conferi: 1 nó `FAQPage` com 6 nós `Question` — exatamente as 6 perguntas exibidas na seção "Dúvidas frequentes antes de contratar".
- `src/routes/faq.tsx` publica o FAQPage com a lista completa (10 comerciais + 14 gerais).
- Também existe FAQPage em `/foto-profissional`, `/fotos-corporativas`, `/foto-profissional-para-linkedin`, `/fotografia-para-clinicas`, nas galerias (`fotografo-corporativo.$slug`) e em todas as páginas de serviço via `ServicePage.tsx`.

O helper `faqJsonLd()` em `src/lib/faqs.ts` já gera `Question` + `acceptedAnswer`. Não há nada a criar nessa frente.

**O que é lacuna real**, das 4 perguntas sugeridas:

| Pergunta sugerida | Situação |
| --- | --- |
| Quanto custa um ensaio de retrato executivo em São Paulo? | já coberta ("Quanto custa uma foto profissional em São Paulo?" e "Quanto custa um retrato profissional em São Paulo?") |
| Posso fazer no meu escritório? | já coberta ("Vocês fotografam no escritório da empresa?") |
| Qual a diferença entre headshot e retrato corporativo? | **não existe** |
| Quantas fotos são entregues? | **não existe** — só existe "quando recebo" e "como recebo" |

## O que fazer

### 1. Duas perguntas novas em `src/lib/faqsComerciais.ts`

Escritas na primeira pessoa, no mesmo tom das existentes, e com resposta direta na primeira frase (é o que faz o bloco ser extraído por IA):

- **"Qual a diferença entre headshot e retrato corporativo?"** — headshot é o enquadramento fechado do rosto para foto de perfil; retrato corporativo é o conjunto mais amplo (meio corpo, ambiente de trabalho, uso institucional). Cita que no mesmo ensaio saem os dois enquadramentos.
- **"Quantas fotos são entregues?"** — número por formato de ensaio. **Preciso da sua confirmação:** quantas imagens finalizadas saem de um retrato individual e quantas por pessoa em ensaio de equipe? Sem isso não escrevo número — mesma regra que aplicamos em `src/data/stats.ts`.

Como `homeFaqs = faqsComerciais.slice(0, 6)`, vou posicionar as duas novas dentro das 6 primeiras (a de headshot em 3º, a de entrega em 5º), deslocando para depois as que já têm cobertura em outra pergunta. Assim elas aparecem na home e entram no FAQPage da home automaticamente — sem tocar em `index.tsx`.

### 2. `speakable` no FAQPage

Acrescentar `speakable` ao helper `faqJsonLd()` apontando para as perguntas, e `inLanguage: "pt-BR"`. Ajuda extração por assistentes de voz e por parsers que usam esse campo como sinal de bloco citável.

### 3. Ligar o FAQ à entidade

No helper, adicionar `about: { "@id": ".../#business" }` e `author: { "@id": ".../quem-e-o-ale#person" }` — o mesmo `@id` da Person consolidada no passo anterior. Isso amarra as respostas a uma entidade identificável em vez de texto anônimo.

## Detalhes técnicos

Arquivos: `src/lib/faqsComerciais.ts` (2 entradas novas + reordenação), `src/lib/faqs.ts` (helper `faqJsonLd`). Nenhuma rota nova, nenhuma mudança de URL. Verificação: `bunx tsgo --noEmit` e contagem de nós `Question` no HTML renderizado de `/` e `/faq`, confirmando que as duas perguntas novas aparecem tanto no texto quanto no JSON-LD.

Ressalva: o rich result de FAQ no Google está restrito a sites de saúde e governo desde 2023 — não espere as sanfonas nos resultados. O ganho aqui é de extração por ChatGPT/Perplexity/Gemini e de cobertura de intenção de compra no texto da página, que valem por si.
