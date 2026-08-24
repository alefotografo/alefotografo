import { useEffect } from "react";

const GA_ID = "G-5TV6CEKT2G";

/**
 * Carrega o Google Analytics só depois do primeiro momento livre (ou da primeira
 * interação), para não competir com a renderização inicial da página.
 */
export function DeferredAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as Record<string, unknown>;
    if (w.__gaLoaded) return;

    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      w.__gaLoaded = true;
      cleanup();

      const s = document.createElement("script");
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      s.async = true;
      document.head.appendChild(s);

      const dataLayer = ((w.dataLayer as unknown[]) ||= []);
      const gtag = (...args: unknown[]) => dataLayer.push(args);
      w.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_ID);
    };

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, load));
      if (timer) window.clearTimeout(timer);
    };
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));

    const idle = (w.requestIdleCallback as ((cb: () => void, o?: { timeout: number }) => number)) || null;
    let timer: number | undefined;
    if (idle) idle(load, { timeout: 5000 });
    else timer = window.setTimeout(load, 3000);

    return cleanup;
  }, []);

  return null;
}
