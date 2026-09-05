import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { useTrackConversion } from "@/hooks/useTrackConversion";

const MSG = "Olá Alexandre, gostaria de um orçamento de fotografia corporativa.";

function WhatsappIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.515 5.26l-.999 3.648 3.973-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.298.297-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

/**
 * Mobile: barra fixa de ações (WhatsApp + Orçamento) — não concorre com o rodapé.
 * Desktop: botão flutuante discreto no canto.
 */
export function WhatsappCta() {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(MSG)}`;
  const track = useTrackConversion();

  return (
    <>
      {/* Barra de ações mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-2 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#075E54] text-sm font-medium text-white"
          >
            <WhatsappIcon size={18} />
            WhatsApp
          </a>
          <Link
            to="/contato"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-ember text-sm font-medium text-accent-foreground"
          >
            Orçamento
          </Link>
        </div>
      </div>

      {/* Botão flutuante desktop */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp")}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-7 right-7 z-50 hidden h-12 items-center justify-center gap-2 rounded-full bg-[#075E54] px-4 text-sm font-medium text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 md:inline-flex"
      >
        <WhatsappIcon />
        WhatsApp
      </a>
    </>
  );
}
