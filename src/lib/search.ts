import { categories, posts, videos, type Category, type Post, type Video } from "@/data/catalog";
import { photoTaxonomy, videoTaxonomy, type SearchTaxonomyEntry } from "@/data/searchTaxonomy";
import { videoThumb } from "@/lib/videoThumb";

export function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export const normalizeSearch = normalize;
const STOP_WORDS = new Set(["de", "da", "do", "das", "dos", "para", "em", "e", "a", "o", "as", "os", "com", "no", "na"]);

function tokens(value: string) {
  const all = normalize(value).split(" ").filter((token) => token.length >= 2);
  const useful = all.filter((token) => !STOP_WORDS.has(token));
  return useful.length ? useful : all;
}

function tokenMatch(word: string, query: string) {
  if (word === query) return 1;
  if (word.startsWith(query) || query.startsWith(word)) return 0.72;
  let common = 0;
  while (common < word.length && common < query.length && word[common] === query[common]) common++;
  return common >= 4 ? 0.48 : 0;
}

export function scoreEntry(query: string, fields: { title: string; keywords?: string; description?: string; priority?: number }) {
  const queryText = normalize(query);
  const queryTokens = tokens(query);
  if (!queryText || !queryTokens.length) return 0;
  const title = normalize(fields.title);
  const keywords = normalize(fields.keywords ?? "");
  const description = normalize(fields.description ?? "");
  let score = fields.priority ?? 0;
  if (title === queryText) score += 140;
  else if (title.includes(queryText)) score += 90;
  if (keywords.includes(queryText)) score += 65;
  if (description.includes(queryText)) score += 25;
  const titleWords = title.split(" ");
  const keywordWords = keywords.split(" ");
  const descriptionWords = description.split(" ");
  let tokenSignals = 0;
  for (const token of queryTokens) {
    const titleSignal = Math.max(0, ...titleWords.map((word) => tokenMatch(word, token)));
    const keywordSignal = Math.max(0, ...keywordWords.map((word) => tokenMatch(word, token)));
    const descriptionSignal = Math.max(0, ...descriptionWords.map((word) => tokenMatch(word, token)));
    if (Math.max(titleSignal, keywordSignal, descriptionSignal) > 0) tokenSignals++;
    score += titleSignal * 36;
    score += keywordSignal * 22;
    score += descriptionSignal * 8;
  }
  const matched = queryTokens.filter((token) => `${title} ${keywords} ${description}`.includes(token)).length;
  if (matched === queryTokens.length) score += 30;
  return tokenSignals === queryTokens.length ? Math.round(score * 100) / 100 : 0;
}

function taxonomyForSlug(slug: string, taxonomy: SearchTaxonomyEntry[]) {
  return taxonomy.filter((entry) => entry.slugs.includes(slug));
}

export type PhotoResult = Category & { kind: "photo"; score: number; keywords: string };
export type VideoResult = Video & { kind: "video"; score: number; thumbnail: string | null; keywords: string };
export type BlogResult = Post & { kind: "blog"; score: number };

export function searchPhotos(query: string, limit = 5): PhotoResult[] {
  return categories.map((item) => {
    const taxonomy = taxonomyForSlug(item.slug, photoTaxonomy);
    const keywords = taxonomy.flatMap((entry) => [entry.label, ...entry.keywords]).join(" ");
    return { ...item, kind: "photo" as const, keywords, score: scoreEntry(query, { title: item.title, keywords: `${item.slug} ${keywords}`, description: `${item.subtitle} ${item.description}`, priority: Math.max(0, ...taxonomy.map((entry) => entry.priority)) }) };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "pt-BR")).slice(0, limit);
}

export function searchVideos(query: string, limit = 5): VideoResult[] {
  return videos.map((item) => {
    const taxonomy = taxonomyForSlug(item.slug, videoTaxonomy);
    const keywords = taxonomy.flatMap((entry) => [entry.label, ...entry.keywords]).join(" ");
    return { ...item, kind: "video" as const, keywords, thumbnail: videoThumb(item), score: scoreEntry(query, { title: item.title, keywords: `${item.slug} ${keywords}`, description: `${item.subtitle} ${item.description}`, priority: Math.max(0, ...taxonomy.map((entry) => entry.priority)) }) };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "pt-BR")).slice(0, limit);
}

export function searchBlog(query: string, limit = 5): BlogResult[] {
  return posts.map((item) => ({ ...item, kind: "blog" as const, score: scoreEntry(query, { title: item.title, keywords: `${item.seo_title} ${item.slug}`, description: item.description }) })).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "pt-BR")).slice(0, limit);
}

export type SearchResults = { photos: PhotoResult[]; videos: VideoResult[]; blog: BlogResult[]; total: number };
export function searchSite(query: string, limit = 5): SearchResults {
  const cleanQuery = query.trim().slice(0, 120);
  if (cleanQuery.length < 2) return { photos: [], videos: [], blog: [], total: 0 };
  const photos = searchPhotos(cleanQuery, limit);
  const videoResults = searchVideos(cleanQuery, limit);
  const blog = searchBlog(cleanQuery, limit);
  return { photos, videos: videoResults, blog, total: photos.length + videoResults.length + blog.length };
}

export function trackSearch(query: string, total: number) {
  if (typeof window === "undefined" || query.trim().length < 2) return;
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push({ event: "site_search", search_term: query.trim().slice(0, 120), result_count: total });
}