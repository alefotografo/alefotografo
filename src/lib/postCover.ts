import { categories, type Post } from "@/data/catalog";

/** Keyword → category slug hints used to pick a relevant fallback cover. */
const HINTS: Array<[RegExp, string]> = [
  [/industri|f[áa]brica|manufatur/i, "fotografia-industrial"],
  [/a[ée]rea|drone|helic[óo]pter/i, "fotos-aereas"],
  [/culin[áa]ri|gastron|restaurante|comida/i, "fotografo-de-culinaria"],
  [/cl[íi]nica|sa[úu]de|hospital|m[ée]dic|odonto/i, "fotografia-para-clinicas"],
  [/evento|congress|palestr|confer/i, "fotografia-de-eventos"],
  [/arquitet|escrit[óo]rio|im[óo]vel|imobili|hotel|hotelaria/i, "fotografia-de-arquitetura"],
  [/retrato|linkedin|perfil|headshot|executiv|ceo|diretor/i, "retrato-corporativo"],
  [/produto|e-?commerce|packshot/i, "fotografia-de-produtos"],
  [/obra|construtor|canteiro|engenhar/i, "fotografia-industrial"],
];

function coverFor(slug: string) {
  const c = categories.find((x) => x.slug === slug);
  return c?.cover;
}

function stableIndex(seed: string, len: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 100000;
  return h % Math.max(len, 1);
}

/** Always returns an image for a blog post, falling back to a relevant gallery cover. */
export function postCover(p: Pick<Post, "slug" | "title"> & { cover?: string }): string | undefined {
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
  return withCovers[stableIndex(p.slug, withCovers.length)].cover;
}
