import { categories, type Post } from "@/data/catalog";

/** Keyword → category slug hints used to pick a relevant fallback cover. */
const HINTS: Array<[RegExp, string]> = [
  [/advocac|advogad|jur[íi]dic/i, "fotografia-para-escritorios-de-advocacia"],
  [/industri|f[áa]brica|manufatur|obra|construtor|canteiro|engenhar/i, "fotografia-industrial"],
  [/a[ée]rea|drone|helic[óo]pter/i, "fotos-aereas"],
  [/culin[áa]ri|gastron|restaurante|comida|hamb[úu]rguer|p[ãa]o|drink/i, "fotografo-de-culinaria"],
  [/dentist|odonto/i, "ensaio-fotografico-para-dentistas"],
  [/cl[íi]nica|sa[úu]de|hospital|m[ée]dic/i, "fotos-para-clinicas-medicas"],
  [/feira|stand/i, "fotografo-feiras-stands"],
  [/evento|congress|palestr|confer|confraterniza/i, "fotografo-de-eventos-corporativos"],
  [/im[óo]vel|imobili|hotel|hotelaria|empreendiment/i, "empreendimentos-imobiliarios"],
  [/arquitet|escrit[óo]rio|interior|ambiente/i, "fotografo-de-arquitetura-e-interiores"],
  [/log[íi]stic|centro de distribui|armaz[ée]m|transport/i, "fotografia-de-logistica"],
  [/escola|educa|universidad/i, "banco-de-imagens-para-escolas"],
  [/equipe|time|grupo|colaborador/i, "fotografo-de-grupos-times-e-equipes"],
  [/redes sociais|instagram/i, "ensaio-fotografico-para-redes-sociais"],
  [/retrato|linkedin|perfil|headshot|executiv|ceo|diretor|pose/i, "retrato-corporativo"],
  [/institucion|banco de imagens|empresa/i, "banco-de-imagens-para-empresas"],
];


function coverFor(slug: string) {
  const c = categories.find((x) => x.slug === slug);
  return c?.cover ?? undefined;
}

function stableIndex(seed: string, len: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 100000;
  return h % Math.max(len, 1);
}

/** Always returns an image for a blog post, falling back to a relevant gallery cover. */
export function postCover(p: Pick<Post, "slug" | "title"> & { cover?: string | null }): string | undefined {
  if (p.cover) return p.cover;
  const haystack = `${p.slug} ${p.title ?? ""}`;
  for (const [re, slug] of HINTS) {
    if (re.test(haystack)) {
      const c = coverFor(slug);
      if (c) return c;
    }
  }
  const withCovers = categories.filter((c) => c.cover);
  if (!withCovers.length) return undefined;
  return withCovers[stableIndex(p.slug, withCovers.length)].cover ?? undefined;
}
