import { site } from "@/data/catalog";

// Link direto para o WhatsApp com mensagem pré-preenchida.
// Usado nos CTAs comerciais do site (hero, cards de serviço, segmentos, FAQ).
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT =
  "Olá Alexandre, gostaria de um orçamento de fotografia profissional. Pode me ajudar?";
