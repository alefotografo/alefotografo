# Google Maps interativo em /contato com sua própria chave

Hoje o mapa da página de contato é do OpenStreetMap. Vamos trocar por um mapa Google interativo (zoom, arraste, marcador no endereço da Alameda Santos, 1165), usando uma chave sua do Google Cloud para funcionar no domínio final alefotografos.com.br.

## O que você precisa fazer primeiro (uma vez)

1. Acessar o Google Cloud Console e criar/escolher um projeto (é só um espaço da sua conta onde a chave vai viver).
2. Ativar o faturamento no projeto — o Google exige cartão mesmo dentro do uso gratuito (o volume deste site fica folgado no free tier).
3. Ativar a API "Maps JavaScript API".
4. Criar uma chave de API.
5. Restringir a chave por referenciador HTTP, incluindo os 4 padrões:
   - `https://alefotografos.com.br/*`
   - `https://*.alefotografos.com.br/*`
   - `https://*.lovable.app/*`
   - `https://*.lovableproject.com/*`

Quando a chave estiver em mãos, eu abro o card de conexão e você escolhe "Nova conexão" → "Usar suas próprias credenciais" e cola a chave. Te acompanho nesse passo e ajudo a depurar se algo der erro.

## O que eu implemento no site

- Novo componente de mapa interativo carregado só no navegador (sem travar o carregamento da página), com marcador no endereço do estúdio e zoom adequado ao bairro.
- Carregamento sob demanda: o mapa só inicializa quando entra na tela, para não afetar a velocidade da página.
- Fallback seguro: se a chave falhar ou o script não carregar, aparece um card com o endereço e o botão "Abrir no Google Maps" — nunca uma área em branco.
- Botão "Abrir no Google Maps" mantido, agora abrindo direto o ponto exato (coordenadas), e novo botão "Traçar rota".
- O bloco `LocalBusiness` (JSON-LD) da página de contato continua igual, com o endereço e coordenadas já cadastrados.

## Detalhes técnicos

- Conexão pelo conector `google_maps` em modo "suas próprias credenciais"; o mapa usa `VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY` no navegador.
- Script carregado com `loading=async` + `callback` global e o `channel` de tracking; `google.maps.Map` + `google.maps.Marker` (sem `mapId`, sem AdvancedMarker).
- Componente novo em `src/components/site/GoogleMapCard.tsx`, importado via `React.lazy` dentro de `ClientOnly` + `LazySection` para não entrar no bundle de SSR.
- `src/routes/contato.tsx`: substitui o iframe do OpenStreetMap por esse componente; coordenadas e endereço vindos de `src/data/catalog.ts`.
- Teste final: verificar render do mapa e ausência de erros de console em desktop e mobile no preview.
