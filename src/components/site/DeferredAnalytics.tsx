const GA_ID = "G-5TV6CEKT2G";

/**
 * Carrega o Google Analytics somente na primeira interação do visitante
 * (toque, clique, rolagem ou teclado) ou, se nada acontecer, 10 segundos
 * depois do carregamento. O gtag.js custa ~350 ms de processamento no celular;
 * fora da janela inicial ele não pesa na experiência nem na medição.
 */
export function DeferredAnalytics() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  var started = false;
  function startAnalytics() {
    if (started) return;
    started = true;
    events.forEach(function(ev) { window.removeEventListener(ev, startAnalytics); });
    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  }
  var events = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll'];
  events.forEach(function(ev) {
    window.addEventListener(ev, startAnalytics, { once: true, passive: true });
  });
  var arm = function() { window.setTimeout(startAnalytics, 10000); };
  if (document.readyState === 'complete') arm();
  else window.addEventListener('load', arm, { once: true });
})();
        `,
      }}
    />
  );
}
