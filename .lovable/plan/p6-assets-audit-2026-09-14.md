# P6 — Auditoria de imagens e assets (14/09/2026)

## Método

Extração de todos os `src/href` de imagem das páginas-chave (Home, /fotografo-corporativo, /fotos-corporativas, /eventos-corporativos, /videos, /blog) no HTML SSR; checagem de status de cada asset interno (proxy `/api/public/img`) e inventário de hosts externos.

## Resultados

| Verificação | Resultado |
|---|---|
| Assets únicos coletados | 109 |
| Internos/proxy | 99 — **99 com HTTP 200 (zero quebrados)** |
| Externos | 10 — todos `img.youtube.com` / `i.ytimg.com` (thumbs de vídeo; o código já tem `ytFallback` para o segundo host) |
| `src` vazio | 0 |
| Imagens sem width/height na Home | **0** (40/40 com dimensões — sem CLS por dimensão ausente) |
| grupos-3 (Hero) fora do Hero | **0** (única ocorrência é o próprio Hero + preload) |

## Duplicações exatas restantes na Home (registro — SEM correção nesta missão)

Fora do escopo aprovado P2/P2.1 (proibição de re-curadoria). Registradas como dívida visual futura:

| Imagem | Ocorrências | Blocos |
|---|---|---|
| industrial_dsc7266.jpg | 3 | SegmentGrid "Indústria" · Trabalhos Selecionados "Indústria" · tile Instagram |
| fotografia-de-logistica_fotografo-de-logistica-1.jpg | 2 | SegmentGrid · Trabalhos Selecionados |
| encontro-farmarcas-2022-2467.JPG | 2 | SegmentGrid "Eventos e Feiras" · tile Instagram |
| helio-martins-borges-filho-4.jpg | 2 | capa do post LinkedIn (bloco Do blog) · tile Instagram |
| hqdefault Ativa Logística | 2 | card "Vídeos Corporativos" · seção "Vídeos corporativos com produção completa" (mesmo case) |

Nenhuma envolve os blocos curados em P2/P2.1 (Hero, Fotografia Corporativa, Retratos Profissionais, Empresas e Equipes, posts). Nenhuma é erro técnico — são escolhas editoriais pré-existentes entre seções diferentes.

## Correções

Nenhuma necessária (zero asset quebrado, zero erro técnico comprovado).
