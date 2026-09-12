import { categories, posts, type Category, type Post } from "@/data/catalog";
import { REDIRECTED_CATEGORY_SLUGS } from "@/lib/legacy-redirects";

const STOP = new Set([
  "de","da","do","das","dos","a","o","e","em","para","com","sem","por","no","na","nos","nas","um","uma","uns","umas",
  "que","como","ou","se","sua","seu","suas","seus","ao","aos","as","os","à","às","mais","menos","ser","ter","foto",
  "fotos","fotografia","fotografo","fotógrafo","profissional","profissionais","são","paulo","sp","você","voce","the","of","and",
]);

function tokens(s: string): string[] {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 3 && !STOP.has(t));
}

function score(a: string, b: string): number {
  const A = new Set(tokens(a));
  let n = 0;
  for (const t of tokens(b)) if (A.has(t)) n++;
  return n;
}

export function relatedCategories(seed: string, exclude?: string, limit = 4): Category[] {
  return categories
    .filter((c) => c.slug !== exclude && !REDIRECTED_CATEGORY_SLUGS.has(c.slug))
    .map((c) => ({ c, s: score(seed, `${c.title} ${c.subtitle} ${c.description}`) }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .slice(0, limit)
    .map((x) => x.c);
}

export function relatedPosts(seed: string, exclude?: string, limit = 4): Post[] {
  return posts
    .filter((p) => p.slug !== exclude)
    .map((p) => ({ p, s: score(seed, `${p.title} ${p.description}`) }))
    .sort((a, b) => b.s - a.s)
    .filter((x) => x.s > 0)
    .slice(0, limit)
    .map((x) => x.p);
}
