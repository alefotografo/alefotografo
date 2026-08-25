import { useCallback } from "react";
import { useServerFn } from "@tanstack/react-start";
import { trackConversion, type ConversionType } from "@/lib/conversions.functions";

const KEY = "af_sid";
const RATE_KEY = "af_conv_rate";

function sessionId() {
  try {
    let id = localStorage.getItem(KEY);
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return undefined;
  }
}

/** Evita flood: no máximo 1 registro do mesmo tipo a cada 30 segundos. */
function allowed(type: ConversionType) {
  try {
    const raw = sessionStorage.getItem(RATE_KEY);
    const map = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    const now = Date.now();
    if (map[type] && now - map[type] < 30_000) return false;
    map[type] = now;
    sessionStorage.setItem(RATE_KEY, JSON.stringify(map));
    return true;
  } catch {
    return true;
  }
}

/**
 * Registra a conversão no banco do site e também no Google Analytics
 * (quando o gtag já estiver carregado).
 */
export function useTrackConversion() {
  const track = useServerFn(trackConversion);

  return useCallback(
    (type: ConversionType) => {
      if (typeof window === "undefined") return;
      if (!allowed(type)) return;

      const path = window.location.pathname + window.location.search;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      gtag?.("event", "contato", { method: type, page_path: path });

      void track({
        data: {
          type,
          path,
          referrer: document.referrer || undefined,
          sessionId: sessionId(),
        },
      }).catch(() => undefined);
    },
    [track],
  );
}
