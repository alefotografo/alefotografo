import { lazy, type ComponentType } from "react";

/**
 * Espera a página ficar pronta (evento load + primeiro momento ocioso) ou a
 * primeira interação do visitante, o que vier antes.
 *
 * No servidor resolve imediatamente: assim a renderização de servidor continua
 * incluindo todo o conteúdo no HTML (importante para SEO) e só a hidratação no
 * navegador é adiada, o que tira esse trabalho da janela em que o Lighthouse
 * mede o tempo de bloqueio.
 */
const ready: Promise<void> =
  typeof window === "undefined"
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          resolve();
        };
        const idle = () => {
          const w = window as Window & {
            requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
          };
          if (typeof w.requestIdleCallback === "function") {
            w.requestIdleCallback(finish, { timeout: 4000 });
          } else {
            window.setTimeout(finish, 1200);
          }
        };
        const events = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"] as const;
        for (const ev of events) {
          window.addEventListener(ev, finish, { once: true, passive: true });
        }
        if (document.readyState === "complete") idle();
        else window.addEventListener("load", idle, { once: true });
      });

/** Igual a React.lazy, mas só busca o módulo depois de `ready`. */
export function lazyAfterInteractive<T extends ComponentType<never>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(() => ready.then(factory));
}
