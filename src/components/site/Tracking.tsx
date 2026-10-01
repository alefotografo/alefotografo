const GTM_ID = "GTM-WLQWBP2";

/**
 * Trackeamento de campanhas — Alê Fotógrafo.
 *
 * - Carrega o Google Tag Manager (container "Alefotografo") com a mesma
 *   filosofia do GA4: só na primeira interação do visitante (ou 10 s),
 *   para não pesar na janela inicial de renderização.
 * - Os cliques em links de WhatsApp são empurrados para o dataLayer como
 *   'whatsapp_click' (processado pelo GTM quando ele carrega — a fila do
 *   dataLayer acumula eventos antes do carregamento) e disparados como
 *   'Contact' no Pixel do Meta quando disponível.
 *
 * Nota: o ID do Meta Pixel é carregado via GTM (tag base do Pixel), não
 * aqui — centraliza o trackeamento no container.
 */
export function Tracking() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  window.dataLayer = window.dataLayer || [];

  var started = false;
  function startTracking() {
    if (started) return;
    started = true;
    events.forEach(function(ev) { window.removeEventListener(ev, startTracking); });
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';
    s.async = true;
    document.head.appendChild(s);
  }
  var events = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll'];
  events.forEach(function(ev) {
    window.addEventListener(ev, startTracking, { once: true, passive: true });
  });
  var arm = function() { window.setTimeout(startTracking, 10000); };
  if (document.readyState === 'complete') arm();
  else window.addEventListener('load', arm, { once: true });

  // Clique em WhatsApp: nosso evento de conversão de lead.
  // Delegado no documento cobre todos os botões/links do site, SPA incluído.
  document.addEventListener('click', function(e) {
    var t = e.target;
    var a = t && t.closest ? t.closest('a[href*="wa.me"],a[href*="api.whatsapp.com"],a[href*="whatsapp.com"]') : null;
    if (!a) return;
    window.dataLayer.push({ event: 'whatsapp_click', link_url: a.href, page_path: location.pathname });
    if (window.fbq) window.fbq('track', 'Contact', { content_name: 'whatsapp_click' });
  }, true);
})();
        `,
      }}
    />
  );
}
