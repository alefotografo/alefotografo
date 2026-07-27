import { posts } from "@/data/catalog";
import { postDateISO } from "@/lib/postDate";

export type BatchPost = { slug: string; title: string; iso: string; path: string };
export type Batch = { id: string; label: string; start: string; posts: BatchPost[] };

/** Segunda-feira da semana ISO da data informada */
function weekStart(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  const dow = (d.getUTCDay() + 6) % 7; // 0 = segunda
  d.setUTCDate(d.getUTCDate() - dow);
  return d.toISOString().slice(0, 10);
}

function fmt(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
}

/** Agrupa os posts do blog em lotes semanais, conforme o cronograma de publicação. */
export function getBatches(): Batch[] {
  const groups = new Map<string, BatchPost[]>();
  for (const p of posts) {
    const iso = postDateISO(p.date);
    if (!iso) continue;
    const key = weekStart(iso);
    const list = groups.get(key) ?? [];
    list.push({ slug: p.slug, title: p.title, iso, path: `/blog/${p.slug}` });
    groups.set(key, list);
  }
  return [...groups.entries()]
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([start, items]) => ({
      id: start,
      label: `Semana de ${fmt(start)}`,
      start,
      posts: items.sort((a, b) => (a.iso < b.iso ? -1 : 1)),
    }));
}
