# Mostrar outras especialidades na dobra "Serviços" da home

## Contexto atual

A home (`src/routes/index.tsx`) monta a dobra comercial assim:

1. **Hero**
2. **`<ServiceChooser />`** — 5 cards grandes com foto, texto, CTA de WhatsApp e link "ver":
   - Retrato profissional → `/foto-profissional`
   - Fotografia corporativa → `/fotos-corporativas`
   - Eventos corporativos → categoria `fotografo-de-eventos-corporativos`
   - Vídeo institucional → `/videos`
   - Foto para LinkedIn → `/foto-profissional-para-linkedin`
3. **`<SegmentGrid />`** — 6 cards de segmento (advogados, médicos, executivos, empresas, eventos, palestrantes)

Os 5 cards cobrem os serviços mais vendáveis, mas o catálogo (`src/data/catalog.json`) tem **dezenas de outras especialidades** com galerias próprias que ficam invisíveis nessa dobra: fotografia industrial, aérea, culinária, arquitetura, feiras de negócios, imobiliária, festas/confraternizações, totem fotográfico, drinks, logística, banco de imagens, etc. Um lead que precise de outra especialidade sai da home sem saber que ela existe.

## Problema a resolver

O lead enxerga apenas 5 serviços. Adicionar mais cards grandes competiria com os CTAs principais e dilui o funil. A meta é **sinalizar amplitude** sem roubar atenção das 5 conversões prioritárias.

## Solução proposta

Acrescentar logo abaixo dos 5 cards — dentro do mesmo `<section>` do `ServiceChooser` — uma faixa compacta **"Também atendemos"** com chips clicáveis das especialidades secundárias, cada um linkando para sua galeria (`/fotografo-corporativo/$slug`) ou landing page própria quando existir.

```text
┌─────────────────────────────────────────────────────────────┐
│  5 cards grandes (atuais)                                    │
│  [Retrato] [Corporativa] [Eventos] [Vídeo] [LinkedIn]        │
├─────────────────────────────────────────────────────────────┤
│  Também atendemos                                            │
│  (chip) (chip) (chip) (chip) (chip) (chip) ...  → ver tudo    │
│  Industrial · Aérea · Culinária · Arquitetura · Feiras ...   │
└─────────────────────────────────────────────────────────────┘
```

### Por que essa abordagem

- **Peso visual baixo**: chips de texto/borda, sem imagem nem CTA de WhatsApp, não competem com os 5 cards.
- **Sinaliza amplitude** rapidamente (escaneabilidade), sem obrigar o lead a rolar até o fim.
- **Roteia para o conteúdo certo**: cada chip vai para a galeria ou landing page já existente.
- **Não duplica** o `SegmentGrid` (que fala em "segmentos/público": advogados, médicos, executivos) — esta faixa fala em **especialidades técnicas** (industrial, aérea, culinária...), um eixo diferente.

### Especialidades a listar (seleção comercial)

Selecionar de `categories` as que têm `cover` e não estão já nos 5 cards, priorizando as mais distintas e conversoras. Candidatos fortes:

- Fotografia Industrial (`fotografia-industrial`)
- Fotos Aéreas (`fotos-aereas`)
- Fotografia de Culinária (`fotografo-de-culinaria`)
- Fotografia de Arquitetura e Interiores (`fotografo-de-arquitetura-e-interiores`)
- Fotógrafo de Feiras de Negócios (`fotografo-feiras-stands`) — ou landing `/fotografo-de-feira-de-negocios`
- Empreendimentos Imobiliários (`empreendimentos-imobiliarios`)
- Fotografia de Drinks (`fotografo-de-drinks-coqueteis`)
- Totem Fotográfico (`totem-fotografico-totem-mania`)
- Festa da Firma / Confraternização (`fotografo-festa-de-confraternizacao`)
- Banco de Imagens Empresarial (`banco-de-imagens-para-empresas`)

Mostrar ~10 chips (cabem em 1–2 linhas no desktop) + um link "ver todas as especialidades →" apontando para `/fotografo-corporativo`.

## Implementação

Editar **apenas** `src/components/site/ServiceChooser.tsx`:

1. Importar `categories` de `@/data/catalog` (e `Link` já vem importado).
2. Construir a lista de especialidades secundárias a partir de `categories`, excluindo os slugs já representados nos 5 cards (`fotografo-de-eventos-corporativos` etc.) e pegando as 10 mais relevantes (hardcode de slugs prioritários para curadoria comercial, depois complementa com `categories` para o restante).
3. Renderizar após o `grid` dos 5 cards:
   - Um `<p>` pequeno: "Também atendemos"
   - Uma `<ul className="flex flex-wrap gap-2">` de chips `<Link to="/fotografo-corporativo/$slug" params={{ slug }}>` com classe `rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:border-ember hover:text-ember`.
   - Um link final "Ver todas as especialidades →" para `/fotografo-corporativo`.

Não mexer no `SegmentGrid`, no hero, nem em outras rotas. Sem alterações de schema ou backend.

## Validação

- Abrir `/` no preview e confirmar a faixa "Também atendemos" aparece logo abaixo dos 5 cards.
- Clicar em 2–3 chips e confirmar que levam à galeria correta (status 200).
- Conferir que o build segue OK (`/tmp/observability/build-errors.log`).
- Conferir mobile: chips quebram em múltiplas linhas sem estouro horizontal.
