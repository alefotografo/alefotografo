import { site } from "@/data/catalog";
import { MapPin, Navigation } from "lucide-react";

const LAT = Number(site.geo.lat);
const LON = Number(site.geo.lon);
const FULL_ADDRESS = `${site.address.street} - ${site.address.district}, ${site.address.locality} - ${site.address.region}, ${site.address.postalCode}`;

// Botões apontam para o Google Maps — são deep links gratuitos, sem chave de API.
const PLACE_URL = `https://www.google.com/maps/search/?api=1&query=${LAT},${LON}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LON}`;

// Mapa interativo gratuito via OpenStreetMap embed — zoom e arraste, sem chave, sem custo.
const D = 0.006;
const BBOX = `${LON - D},${LAT - D},${LON + D},${LAT + D}`;
const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${LAT},${LON}`;

export default function GoogleMapCard() {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface">
      <div className="relative h-[240px] w-full sm:h-[300px]">
        <iframe
          title="Mapa da localização do estúdio no Jardim Paulista, São Paulo"
          src={OSM_EMBED}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

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
