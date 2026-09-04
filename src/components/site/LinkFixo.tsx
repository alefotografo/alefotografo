import { useState } from "react";
import { Check, Copy, Link2 } from "lucide-react";

/**
 * Bloco com o link permanente (canônico) da página, para reuso em
 * Google Business Profile, redes sociais, propostas e assinatura de e-mail.
 */
export function LinkFixo({ url, label = "Link fixo desta página" }: { url: string; label?: string }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <div className="rounded-sm border border-border bg-surface p-5">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ember">
        <Link2 size={14} /> {label}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <code className="break-all text-sm text-muted-foreground">{url}</code>
        <button
          type="button"
          onClick={copiar}
          aria-label="Copiar link desta página"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs font-medium hover:border-ember hover:text-ember"
        >
          {copiado ? <Check size={14} /> : <Copy size={14} />}
          {copiado ? "Copiado" : "Copiar"}
        </button>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Use este endereço em Google Business Profile, Instagram, propostas e diretórios locais. Ele
        não muda.
      </p>
    </div>
  );
}
