import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { site } from "@/data/catalog";

const LAT = Number(site.geo.lat);
const LON = Number(site.geo.lon);
const FULL_ADDRESS = `${site.address.street} - ${site.address.district}, ${site.address.locality} - ${site.address.region}, ${site.address.postalCode}`;

const PLACE_URL = `https://www.google.com/maps/search/?api=1&query=${LAT},${LON}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LON}`;

type Status = "loading" | "ready" | "error";

declare global {
  interface Window {
    google?: any;
    __aleMapsReady?: () => void;
    __aleMapsPromise?: Promise<void>;
    __aleMapsAuthFailed?: boolean;
    gm_authFailure?: () => void;
  }
}


function loadMapsScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.google?.maps?.Map) return Promise.resolve();
  if (window.__aleMapsPromise) return window.__aleMapsPromise;

  const key = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'] as
    | string
    | undefined;
  if (!key) return Promise.reject(new Error("missing google maps browser key"));
  const channel = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID'] as
    | string
    | undefined;

  window.__aleMapsPromise = new Promise<void>((resolve, reject) => {
    window.__aleMapsReady = () => resolve();
    const s = document.createElement("script");
    const params = new URLSearchParams({
      key,
      loading: "async",
      callback: "__aleMapsReady",
      language: "pt-BR",
      region: "BR",
    });
    if (channel) params.set("channel", channel);
    s.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    s.async = true;
    s.onerror = () => reject(new Error("failed to load google maps"));
    document.head.appendChild(s);
    // Se a chave for rejeitada (referrer/API restritos), o callback nunca dispara.
    window.setTimeout(() => reject(new Error("google maps timeout")), 8000);
  }).catch((err) => {
    window.__aleMapsPromise = undefined;
    throw err;
  });

  return window.__aleMapsPromise;
}

export default function GoogleMapCard() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;
    // Google chama gm_authFailure quando a chave é inválida/restrita ao domínio.
    window.gm_authFailure = () => {
      window.__aleMapsAuthFailed = true;
      if (!cancelled) setStatus("error");
    };
    if (window.__aleMapsAuthFailed) {
      setStatus("error");
      return () => {
        cancelled = true;
      };
    }
    loadMapsScript()
      .then(() => {
        if (cancelled || !mapRef.current || !window.google?.maps?.Map) return;
        const position = { lat: LAT, lng: LON };
        const map = new window.google.maps.Map(mapRef.current, {
          center: position,
          zoom: 16,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          gestureHandling: "cooperative",
        });
        new window.google.maps.Marker({
          position,
          map,
          title: "Alê Fotógrafo — Alexandre Machado",
        });
        if (!window.__aleMapsAuthFailed) setStatus("ready");
        // Se a chave for restrita ao domínio, o Google injeta seu próprio painel
        // de erro (.gm-err-container) sem tiles: trocamos pelo cartão de endereço.
        const checkHealth = () => {
          if (cancelled || !mapRef.current) return;
          const failed =
            window.__aleMapsAuthFailed ||
            !!mapRef.current.querySelector(".gm-err-container") ||
            !mapRef.current.querySelector(".gm-style");
          if (failed) setStatus("error");
        };
        window.setTimeout(checkHealth, 2500);
        window.setTimeout(checkHealth, 6000);

      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });


    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface">
      {status === "error" ? (
        <div className="flex h-[220px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-background px-6 text-center sm:h-[280px]">
          <MapPin className="text-ember" size={24} />
          <p className="text-sm font-medium">{site.address.street}</p>
          <p className="text-xs text-muted-foreground">
            {site.address.district}, {site.address.locality} — {site.address.region}
          </p>
        </div>
      ) : (
        <div className="relative h-[220px] w-full sm:h-[280px]">
          <div
            ref={mapRef}
            aria-label="Mapa da localização do estúdio no Jardim Paulista, São Paulo"
            role="application"
            className="h-full w-full"
          />
          {status === "loading" && (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface to-background"
            />
          )}
        </div>
      )}

      <div className="space-y-3 p-6">
        <p className="text-sm text-muted-foreground">
          {site.address.street}
          <br />
          {site.address.district}, {site.address.locality} — {site.address.region}
          <br />
          CEP {site.address.postalCode}
        </p>
        <a
          href={PLACE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${FULL_ADDRESS} no Google Maps`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-4 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-ember-glow"
        >
          <MapPin size={16} />
          Abrir no Google Maps
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-ember hover:text-ember"
        >
          <Navigation size={16} />
          Traçar rota
        </a>
      </div>
    </div>
  );
}
