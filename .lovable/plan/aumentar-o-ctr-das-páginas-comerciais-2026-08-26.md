# Aumentar o CTR das páginas comerciais

Os dados do Search Console (últimos 28 dias) mostram muita impressão e pouco clique nos termos que trazem cliente: "foto profissional" (7.766 impressões, 7 cliques, CTR 0,09%) e "fotos profissionais" (5.405 impressões, 7 cliques, CTR 0,13%). As páginas estão bem posicionadas — o problema é o título e a descrição que aparecem no Google, que hoje são genéricos ("Foto Profissional em São Paulo", "Fotos Corporativas em São Paulo") e não dão motivo para clicar.

## O que muda

Reescrevo o título e a meta description (o texto que o Google exibe no resultado) das páginas comerciais, incluindo diferenciais concretos que já usamos no site: 30 anos de experiência, nota 4,9 com 144 avaliações, orçamento no mesmo dia, entrega em 1 a 3 dias, atendimento em estúdio ou na empresa.

Páginas incluídas:

- `/foto-profissional`
- `/fotos-corporativas`
- `/fotografia-executiva`
- `/foto-profissional-para-linkedin`
- `/fotos-profissionais-medicos`
- `/fotografia-para-clinicas`
- `/fotografia-para-advogados`
- `/fotografo-empresarial`
- `/eventos-corporativos`
- `/fotografo-de-feira-de-negocios`
- `/servicos`

Exemplos do novo padrão:

```text
Foto Profissional em SP | Entrega em 48h, Nota 4,9
Foto profissional em São Paulo para LinkedIn, currículo e imprensa. 30 anos
de experiência, nota 4,9 (144 avaliações) e orçamento no mesmo dia.

Fotos Corporativas em SP | Orçamento no Mesmo Dia
Fotos corporativas em São Paulo: equipe, escritório, retratos e eventos na
sua empresa. 30 anos de experiência e entrega em 1 a 3 dias úteis.
```

## O que NÃO muda

- Nenhum texto visível das páginas, nenhuma imagem, nenhum layout.
- Nenhuma URL, canonical, domínio, DNS, robots ou sitemap.
- Nada de conteúdo inventado: só usamos números e prazos que já estão no site.

## Detalhes técnicos

- Ajuste apenas das constantes `TITLE`/`DESCRIPTION` (e do `buildMeta` de `/servicos`) nos arquivos de rota listados. `buildMeta` já propaga para `og:title`/`og:description`.
- Títulos com até ~60 caracteres e descrições até ~158, para não truncar no Google.
- Verificação: `bunx tsgo --noEmit` e leitura do `<head>` das rotas no preview confirmando os novos textos.

## Depois de publicar

O Google leva de alguns dias a 2 semanas para reexibir os novos títulos. Vale acompanhar o CTR desses termos no painel `/admin/desempenho` após ~14 dias e refinar os que continuarem abaixo de 1%.
