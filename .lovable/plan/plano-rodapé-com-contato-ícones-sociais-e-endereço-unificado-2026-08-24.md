# Plano: Rodapé com contato, ícones sociais e endereço unificado

## Contexto confirmado
- Endereço atual no site: **R. Gomes de Carvalho, 1629, Vila Olímpia, 04547-006** (`contato.tsx` schema + texto visível + mapa).
- E-mail atual: `contato@alefotografo.com.br` (`site.email`).
- LinkedIn atual: `https://www.linkedin.com/in/alexandremachadofotografo`.
- Rodapé (`Footer.tsx`): tem colunas marca/Serviços/Conecte-se, faixa de bairros e barra inferior com 2 linhas de copyright genéricas — sem bloco de contato e sem ícones sociais.
- URLs sociais do rodapé do `alefotografo.com.br` (extraídas do HTML):
  - Instagram: `https://www.instagram.com/alefotografo/` (já igual ao atual)
  - LinkedIn: `https://www.linkedin.com/in/alefotografo/` (difere do atual — usar esta)
- Geolocalização do novo endereço (Nominatim/OSM, CEP 01419-002): lat `-23.5640870`, lon `-46.6553543`.

## Novo endereço de referência (todo o site)
- **Rua:** Alameda Santos, 1165
- **Bairro/localidade:** Jardim Paulista, São Paulo — SP
- **CEP:** 01419-002
- **País:** Brasil
- **Coordenadas:** -23.5640870, -46.6553543

---

## 1. `src/data/catalog.ts` — centralizar dados
Atualizar o objeto `site`:
- `email`: `comercial@alefotografo.com.br`
- `linkedin`: `https://www.linkedin.com/in/alefotografo` (URL do rodapé do site antigo)
- Adicionar campos novos usados pelo rodapé e schemas:
  - `address`: `{ street: "Alameda Santos, 1165", district: "Jardim Paulista", locality: "São Paulo", region: "SP", postalCode: "01419-002", country: "BR" }`
  - `geo`: `{ lat: "-23.5640870", lon: "-46.6553543" }`
  - `cnpj`: "03230626/0001-82"
  - `foundingYear`: 1995
  - `phoneDisplay`: "11913550533"

## 2. `src/components/site/Footer.tsx` — bloco de contato + ícones
- Na coluna "Conecte-se", adicionar um bloco de **Contato** com:
  - E-mail: `comercial@alefotografo.com.br` (link `mailto:`)
  - Endereço: Alameda Santos, 1165 — Jardim Paulista, São Paulo — SP, 01419-002
  - Telefone/WhatsApp: 11913550533 (link `wa.me`)
- Substituir a barra inferior (2 `<p>` genéricos) por:
  - Linha de **2 ícones** Instagram + LinkedIn (lucide-react), linkando para `site.instagram` e `site.linkedin`.
  - Texto: **"Alexandre Machado Fotografia — CNPJ 03230626/0001-82 — Desde 1995 atendendo clientes especiais"**
- Manter o `© {ano}` à direita no desktop.

## 3. `src/routes/contato.tsx` — endereço + mapa + schema
- `localBusinessSchema`: `streetAddress` → "Alameda Santos, 1165", `postalCode` → "01419-002", `email` → `comercial@alefotografo.com.br`, `geo` → novas coordenadas, `addressLocality` → "São Paulo".
- Texto visível (card e mapa): "Alameda Santos, 1165 / Jardim Paulista, São Paulo — SP / CEP 01419-002".
- OpenStreetMap iframe: atualizar `bbox` e `marker` para as novas coordenadas.
- Link "Abrir no Google Maps": query do novo endereço.
- Meta description: "Estúdio na Vila Olímpia" → "Estúdio no Jardim Paulista".

## 4. Schemas `LocalBusiness` em todas as rotas — endereço completo
Adicionar `streetAddress` + `postalCode` (e `addressLocality` já existe) em:
- `src/routes/__root.tsx` (PostalAddress principal)
- `src/routes/fotos-corporativas.tsx`
- `src/routes/foto-profissional.tsx`
- `src/routes/foto-profissional-para-linkedin.tsx`
- `src/routes/fotografia-para-clinicas.tsx`
- `src/routes/index.tsx`
- `src/routes/quem-e-o-ale.tsx`
- `src/routes/depoimentos.tsx` (adicionar bloco `address`)

Valores: `streetAddress: "Alameda Santos, 1165"`, `postalCode: "01419-002"`, `addressLocality: "São Paulo"`, `addressRegion: "SP"`, `addressCountry: "BR"`.
Onde já existe `telephone`, manter `+55-11-91355-0533`. Onde o `email` aparece no schema, trocar para `comercial@alefotografo.com.br`.

## 5. Verificação
- Build sem erros (`/tmp/observability/build-errors.log`).
- Conferir rodapé no preview (desktop e mobile): bloco de contato, ícones sociais e texto de CNPJ.
- Conferir `/contato`: novo endereço, mapa e link do Google Maps.

## Notas
- O WhatsApp atual (`site.whatsapp = 5511913550533`) já corresponde ao telefone pedido (11913550533) — sem mudança.
- A troca do LinkedIn para `…/in/alefotografo` segue a instrução de puxar a URL do rodapé do site antigo. Se preferir manter `alexandremachadofotografo`, é só avisar.
