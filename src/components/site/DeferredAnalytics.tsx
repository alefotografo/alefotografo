const GA_ID = "G-5TV6CEKT2G";

/**
 * Carrega o Google Analytics somente após o evento load da página,
 * inserindo o script inline no final do <body> para não bloquear a
 * renderização inicial.
 */
export function DeferredAnalytics() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
window.addEventListener('load', function() {
  var s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
});
        `,
      }}
    />
  );
}
