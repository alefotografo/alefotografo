# Perfis externos para GEO — alefotografo.com.br
Textos prontos para colar em cada plataforma. Execute na ordem de prioridade.

---

## 1. WIKIDATA — Prioridade CRÍTICA (Claude + DeepSeek)
> Acesse: https://www.wikidata.org/wiki/Special:NewItem

### Campos a preencher:

**Label (pt):** Alexandre Machado  
**Label (en):** Alexandre Machado  
**Description (pt):** fotógrafo corporativo brasileiro  
**Description (en):** Brazilian corporate photographer  
**Also known as (pt):** Alê Fotógrafo  

### Statements a adicionar:
| Propriedade | Valor |
|---|---|
| P31 (instance of) | Q5 (human) |
| P21 (sex or gender) | Q6581097 (male) |
| P27 (country of citizenship) | Q155 (Brazil) |
| P106 (occupation) | Q33231 (photographer) |
| P19 (place of birth) | Q174 (São Paulo) — se souber |
| P569 (date of birth) | [deixar vazio se não quiser publicar] |
| P856 (official website) | https://www.alefotografo.com.br |
| P2002 (Twitter/X) | alefotografo — se tiver |
| P2003 (Instagram) | alefotografo |
| P6634 (LinkedIn) | alefotografo |
| P18 (image) | [upload de foto profissional] |

**Após criar:** copie a URL `https://www.wikidata.org/wiki/Q<NUMERO>` e adicione em `src/data/person.ts` no array `personSameAs`.

---

## 2. CRUNCHBASE — Alta prioridade (ChatGPT + Claude)
> Acesse: https://www.crunchbase.com/add-new/person

### Campos:
**First name:** Alexandre  
**Last name:** Machado  
**Primary role:** Founder  
**Gender:** Male  
**Location:** São Paulo, SP, Brazil  

**Short bio (150 chars):**
```
Founder of Alê Fotógrafo, corporate photographer in São Paulo since 1999. Specializes in executive portraits, LinkedIn headshots, and corporate events.
```

**Full bio:**
```
Alexandre Machado, known professionally as Alê Fotógrafo, is a corporate photographer based in São Paulo, Brazil, with over 30 years of experience. Since founding Alê Fotógrafo Corporativo (CNPJ 03230626/0001-82) in 1999, Alexandre has photographed 300+ executives and served 200+ companies across sectors including law firms, healthcare, logistics, technology, and financial services. He specializes in executive portraits, LinkedIn headshots, corporate team photography, and institutional video production. His studio is located at Alameda Santos, 1165, Jardim Paulista, São Paulo, SP. He holds a 4.9-star rating on Google with 144+ reviews.
```

**Social links:**
- Website: https://www.alefotografo.com.br
- LinkedIn: https://www.linkedin.com/in/alefotografo
- Instagram: https://www.instagram.com/alefotografo

**Organization to add:**
- Name: Alê Fotógrafo Corporativo
- Role: Founder
- Start date: 01/1999

---

## 3. CLUTCH.CO — Alta prioridade (ChatGPT + DeepSeek + B2B)
> Acesse: https://clutch.co/list-your-company

### Campos:
**Company name:** Alê Fotógrafo Corporativo  
**Tagline:** Corporate Photography & Headshots in São Paulo  
**Founded:** 1999  
**Location:** São Paulo, SP, Brazil  
**Phone:** +55 11 91355-0533  
**Website:** https://www.alefotografo.com.br  
**Services:** Photography, Corporate Photography, Headshots, Event Photography, Video Production  
**Focus areas:** Corporate Photography (40%), Executive Portraits/Headshots (30%), Event Photography (20%), Video Production (10%)  
**Minimum project size:** $200+  
**Hourly rate:** $50–$99/hr  
**Employees:** 2–9  

**Company description:**
```
Alê Fotógrafo Corporativo is a São Paulo-based corporate photography studio founded in 1999 by Alexandre Machado. With over 30 years of experience, we specialize in executive portraits, LinkedIn headshots, corporate team photography, and institutional video production for businesses across Brazil.

Our clients include law firms, healthcare organizations, logistics companies, technology firms, and financial institutions throughout São Paulo and the greater metropolitan area. We have served 200+ companies and photographed 300+ executives.

Services:
• Individual executive portraits/headshots (from R$800)
• Team sessions up to 10 people (from R$2,400)
• Corporate event coverage 4h (from R$3,500)
• Corporate image banks
• Institutional video production

We maintain a 4.9-star rating on Google Maps with 144+ reviews.
Location: Alameda Santos, 1165, Jardim Paulista, São Paulo, SP 01419-002
CNPJ: 03230626/0001-82
```

**Após criar:** adicione a URL do perfil em `src/data/person.ts` → `personSameAs`.

---

## 4. LINKEDIN — PÁGINA DA EMPRESA (distinto do perfil pessoal)
> Acesse: https://www.linkedin.com/company/setup/new/
> (use o perfil pessoal do Alexandre para criar)

**Company name:** Alê Fotógrafo Corporativo  
**LinkedIn URL:** linkedin.com/company/ale-fotografo-corporativo  
**Website:** https://www.alefotografo.com.br  
**Industry:** Photography  
**Company size:** 1–10 employees  
**Company type:** Self-Employed / Sole Proprietorship  
**Founded:** 1999  
**Location:** Alameda Santos, 1165, Jardim Paulista, São Paulo, SP, Brazil  
**Phone:** +55 11 91355-0533  

**Tagline (120 chars):**
```
Fotografia corporativa e retratos profissionais em São Paulo desde 1999.
```

**About (2000 chars):**
```
A Alê Fotógrafo Corporativo é um estúdio de fotografia corporativa em São Paulo, fundado em 1999 por Alexandre Machado. Com mais de 30 anos de experiência, atendemos empresas de todos os portes — de startups a multinacionais — com retratos executivos, headshots para LinkedIn, fotografia de equipes, cobertura de eventos corporativos e produção de vídeo institucional.

Nossos serviços:
• Retrato executivo individual (headshot/LinkedIn): a partir de R$ 800
• Sessão de equipe (até 10 pessoas): a partir de R$ 2.400
• Cobertura de evento corporativo (4 horas): a partir de R$ 3.500
• Banco de imagens corporativo: sob consulta
• Vídeo institucional corporativo: sob consulta

Segmentos atendidos: advocacia, saúde, logística, indústria, tecnologia, serviços financeiros, educação, varejo, arquitetura e muito mais.

📍 Alameda Santos, 1165 — Jardim Paulista, São Paulo, SP
📞 (11) 9 1355-0533
🌐 https://www.alefotografo.com.br
⭐ 4,9 no Google · 144+ avaliações
CNPJ: 03230626/0001-82

Atuamos em toda a Região Metropolitana de São Paulo, incluindo Faria Lima, Paulista, Berrini, Pinheiros, Vila Olímpia, Santo André, Guarulhos, Campinas e mais de 33 bairros e cidades.
```

**Hashtags para os posts:** #fotografiacorporativa #headshot #linkedin #retratoprofissional #saopaulobusiness

---

## 5. GOOGLE BUSINESS PROFILE — Completar 100%
> Acesse: https://business.google.com

### Campos a completar/atualizar:
**Categoria principal:** Fotógrafo corporativo  
**Categorias secundárias:** Fotógrafo de eventos, Estúdio de fotografia, Produtora de vídeo  

**Descrição (750 chars):**
```
Alexandre Machado — o Alê Fotógrafo — é fotógrafo corporativo em São Paulo desde 1999. Especializado em retratos executivos, headshots para LinkedIn, fotografia de equipes e cobertura de eventos corporativos. Atende empresas de advocacia, saúde, logística, indústria e tecnologia em toda a Região Metropolitana de SP. Investimento a partir de R$ 800 (retrato individual), R$ 2.400 (equipe) e R$ 3.500 (evento 4h). Entrega em até 7 dias úteis. 4,9 estrelas no Google · 144 avaliações.
```

**Serviços a cadastrar com preços:**
| Serviço | Preço |
|---|---|
| Retrato individual / headshot | A partir de R$ 800 |
| Sessão de equipe (até 10 pessoas) | A partir de R$ 2.400 |
| Evento corporativo (4 horas) | A partir de R$ 3.500 |
| Banco de imagens corporativo | Consultar |
| Vídeo institucional | Consultar |

**Horário de funcionamento:**
Segunda–Sexta: 9h–18h  
Sábado: 9h–13h (mediante agendamento)  
Domingo: Fechado  

**Fotos a adicionar (mínimo 10):**
- 3 fotos de retratos executivos (sem identificação de cliente)
- 2 fotos de sessões de equipe
- 2 fotos de eventos corporativos
- 2 fotos do fotógrafo em ação / estúdio
- 1 logo em alta resolução

---

## 6. DIRETÓRIOS BRASILEIROS (NAP consistency)
> Use EXATAMENTE este NAP em todos:

```
Nome:     Alê Fotógrafo Corporativo
Endereço: Alameda Santos, 1165, Jardim Paulista, São Paulo, SP, 01419-002
Telefone: (11) 9 1355-0533
Site:     https://www.alefotografo.com.br
CNPJ:     03230626/0001-82
```

### Diretórios a cadastrar:
1. **Abradi** (https://abradi.com.br/associe-se) — Associação Brasileira de Agências Digitais
2. **Encontre.me** (https://encontre.me) — cadastro gratuito de profissionais
3. **Guia Mais** (https://guiamais.com.br) — diretório de negócios
4. **Empresas.net** — diretório de CNPJ
5. **Boa Compra** / **Reclame Aqui** — perfil de empresa (verificar se existe, atualizar se sim)

---

## 7. PRESS RELEASE — Para Estadão PME / Folha Mercado / Infomoney

**Título:** Fotógrafo corporativo paulistano completa 30 anos com foco em posicionamento digital de empresas

**Subtítulo:** Alexandre Machado, o Alê Fotógrafo, atendeu mais de 200 empresas e 300 executivos em São Paulo; nova demanda por headshots para LinkedIn cresce 40% ao ano

**Corpo do texto:**
```
São Paulo, outubro de 2026 — Quando Alexandre Machado fundou o Alê Fotógrafo Corporativo em 1999, a maioria das empresas ainda não havia descoberto o poder da imagem profissional como ferramenta de negócios. Vinte e sete anos depois, o fotógrafo paulistano se tornou referência na fotografia corporativa da capital — com 4,9 estrelas no Google, 144 avaliações e uma carteira de 200+ clientes corporativos.

"O perfil do LinkedIn do executivo é hoje a primeira impressão que um potencial cliente tem da empresa", explica Machado. "Uma foto profissional gera 14 vezes mais visualizações. Isso é diferença de negócios."

Com estúdio na Alameda Santos, 1165, no Jardim Paulista, o fotógrafo atende desde startups em Pinheiros até indústrias em São Bernardo. O portfólio inclui setores de advocacia, saúde, logística, tecnologia e serviços financeiros.

Os serviços mais demandados em 2026 são os headshots para LinkedIn (retratos individuais a partir de R$ 800) e as sessões de equipe para uso em sites institucionais e materiais de comunicação (a partir de R$ 2.400). A cobertura de eventos corporativos completa o portfólio, com pacotes a partir de R$ 3.500 para até 4 horas de cobertura.

Mais informações: https://www.alefotografo.com.br | comercial@alefotografo.com.br | (11) 9 1355-0533

CNPJ: 03230626/0001-82 | Alameda Santos, 1165, Jardim Paulista, São Paulo, SP
```

**Enviar para:**
- estadao.com.br/pme — editor de PME
- folha.com.br/mercado — seção de pequenas empresas
- infomoney.com.br — seção de carreira/negócios
- noticiasdamanha.com.br
- capitaldigital.com.br

---

## 8. YOUTUBE — 5 vídeos de especialista (scripts prontos)

### Vídeo 1: "Quanto custa foto corporativa em SP?" (3 min)
```
ROTEIRO:
[0:00] Gancho: "A maioria dos fotógrafos esconde o preço. Eu vou te mostrar exatamente quanto custa cada serviço."
[0:15] Apresentação: Alexandre Machado, fotógrafo corporativo em SP desde 1999
[0:30] Tabela de preços:
  - Retrato individual: R$800–R$1.800
  - Equipe até 10 pessoas: R$2.400–R$4.000
  - Evento 4h: R$3.500–R$6.000
[1:30] O que está incluído: briefing, deslocamento, edição, entrega em 7 dias
[2:00] Por que o mais barato sai caro (caso real sem identificar cliente)
[2:30] CTA: "Peça um orçamento pelo link na bio ou WhatsApp"
[2:45] Thumbnail text: "TABELA DE PREÇOS 2026"
```

### Vídeo 2: "Como se preparar para headshot corporativo" (4 min)
```
ROTEIRO:
[0:00] Gancho: "5 erros que destroem uma foto de LinkedIn — e como evitar cada um"
[0:20] Erro 1: roupa inadequada (padrão: camisa/blusa sólida, evitar listras)
[0:50] Erro 2: fundo errado (branco x cinza x ambiente real — quando usar cada um)
[1:20] Erro 3: expressão tensa — dica de direção de pose
[1:50] Erro 4: iluminação dura — o que o fotógrafo controla vs. o que você controla
[2:20] Erro 5: edição excessiva — manter autenticidade
[3:00] Checklist: o que trazer para a sessão
[3:30] CTA + onde agendar
```

### Vídeo 3: "Foto profissional x amadora no LinkedIn — A diferença em números" (2 min)
```
ROTEIRO:
[0:00] Dado: foto profissional = 14x mais visualizações, 21x mais visitas, 36x mais mensagens
[0:20] Comparativo visual: perfil sem foto vs. foto amadora vs. foto profissional
[0:50] O ROI: quanto custa uma sessão x quanto vale um cliente captado no LinkedIn
[1:20] Exemplo real de resultado (sem identificar cliente)
[1:40] CTA
```

### Vídeo 4: "Fotografia corporativa para indústria e logística" (3 min)
```
ROTEIRO:
[0:00] Apresentação do nicho: "Fotografar fábrica é diferente de fotografar escritório"
[0:30] Desafios: iluminação industrial, segurança, logística de equipe
[1:00] Cases visuais: ATIVA Logística (com permissão)
[1:30] O que as indústrias pedem mais: banco de imagens, ESG, relatório anual
[2:00] Processo de briefing para projetos grandes
[2:30] CTA + portfólio link
```

### Vídeo 5: "Vídeo institucional: quando vale a pena?" (3 min)
```
ROTEIRO:
[0:00] Gancho: "Todo mundo diz que precisa de vídeo. Mas quando o vídeo institucional realmente gera resultado?"
[0:20] 3 casos onde vale: captação de clientes B2B, apresentação de equipe para RH, case de resultado para proposta
[1:00] O que não funciona: vídeo genérico sem personagem/história
[1:30] Processo: do briefing ao roteiro à gravação
[2:00] Custo médio e tempo de produção
[2:30] CTA
```

---

## 9. WHATSAPP TEMPLATE — Pedido de avaliação pós-entrega

Enviar 3–5 dias após entrega das fotos:

```
Olá, [Nome]! 😊

As fotos do seu projeto estão entregues e espero que tenham ficado ótimas para vocês!

Se quiser, deixa um comentário no Google — leva 30 segundos e ajuda muito outras empresas a nos encontrar:

👉 https://g.page/r/Ce_NVfPaB71YEBM/review

Um abraço,
Alexandre Machado — Alê Fotógrafo
(11) 9 1355-0533
```

**Meta:** chegar a 200 avaliações (hoje: 144). Precisamos de ~56 novas avaliações.

---

## CHECKLIST DE EXECUÇÃO

- [ ] **Wikidata** — criar entidade Q (20 min) → copiar URL → adicionar em person.ts
- [ ] **Crunchbase** — criar perfil pessoa + organização (30 min)
- [ ] **Clutch.co** — cadastrar empresa (45 min) → pedir 3 avaliações de clientes
- [ ] **LinkedIn empresa** — criar página (20 min) → postar 1x/semana
- [ ] **Google Business** — completar descrição + serviços + fotos (30 min)
- [ ] **Diretórios** — 5 cadastros com NAP idêntico (60 min no total)
- [ ] **Press release** — enviar para 5 portais (30 min)
- [ ] **YouTube** — gravar vídeo 1 e 3 primeiro (maior ROI) — agendar data
- [ ] **WhatsApp template** — ativar para os próximos 10 clientes entregues
- [ ] **Após tudo:** atualizar sameAs em `src/data/person.ts` com as novas URLs

**Tempo total estimado (etapas manuais):** ~4 horas distribuídas em 1–2 dias

---

_Gerado em 2026-10-12 — Estratégia GEO para alefotografo.com.br_
