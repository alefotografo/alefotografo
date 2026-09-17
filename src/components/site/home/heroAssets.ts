// Assets locais do hero da home (src/assets/hero/).
// Gerados a partir do original do acervo (grupos-3.jpg, 1920x1275) com a MESMA
// pipeline de qualidade do proxy de produção (WebP q74 via weserv) e fallback
// JPEG (q80, sips). Servidos de /assets/ pelo build do Vite: mesma origem,
// cache immutable de 1 ano, sem proxy /api/public/img e sem CDN legado no
// caminho do LCP. Não editar sem regenerar todos os widths.
import w480 from "@/assets/hero/hero-480.webp";
import w720 from "@/assets/hero/hero-720.webp";
import w900 from "@/assets/hero/hero-900.webp";
import w1200 from "@/assets/hero/hero-1200.webp";
import w1440 from "@/assets/hero/hero-1440.webp";
import w1920 from "@/assets/hero/hero-1920.webp";
import j480 from "@/assets/hero/hero-480.jpg";
import j720 from "@/assets/hero/hero-720.jpg";
import j900 from "@/assets/hero/hero-900.jpg";
import j1200 from "@/assets/hero/hero-1200.jpg";
import j1440 from "@/assets/hero/hero-1440.jpg";
import j1920 from "@/assets/hero/hero-1920.jpg";

export const HERO_WEBP_SRCSET = `${w480} 480w, ${w720} 720w, ${w900} 900w, ${w1200} 1200w, ${w1440} 1440w, ${w1920} 1920w`;
export const HERO_JPG_SRCSET = `${j480} 480w, ${j720} 720w, ${j900} 900w, ${j1200} 1200w, ${j1440} 1440w, ${j1920} 1920w`;
export const HERO_WEBP_480 = w480;
export const HERO_JPG_FALLBACK = j1200;
