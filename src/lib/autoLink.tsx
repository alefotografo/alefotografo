import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { categories, type Category } from "@/data/catalog";

// Normalize string: lowercase + strip accents
function norm(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Generate ranked keyword phrases for a category.
// Returns phrases in normalized form (matched case/accent-insensitive).
function phrasesFor(c: Category): string[] {
  const out = new Set<string>();
  const t = c.title;
  out.add(t);

  let s = t
    .replace(/^Fot[óo]grafo de\s+/i, "")
    .replace(/^Fot[óo]grafo\s+/i, "")
    .replace(/^Fotografia (de|para|em)\s+/i, "")
    .replace(/^Fotografia\s+/i, "")
    .replace(/^Fotografias de\s+/i, "")
    .replace(/^Fotos? (profissionais )?(de|para)\s+/i, "")
    .replace(/^Fotos?\s+/i, "")
    .replace(/^Foto (de|para)\s+/i, "")
    .replace(/^Foto\s+/i, "")
    .replace(/^Ensaio (fotogr[áa]fico )?(para )?/i, "")
    .replace(/^Banco de Imagens (para )?/i, "Banco de imagens ")
    .replace(/\s+em (S[ãa]o Paulo|SP|saopaulo)\s*$/i, "")
    .trim();
  if (s && s.length > 3) out.add(s);

  // Curated extras per slug
  const extras: Record<string, string[]> = {
    "fotografia-para-escritorios-de-advocacia": ["escritórios de advocacia", "advogados", "escritório de advocacia"],
    "retrato-corporativo": ["retrato corporativo", "retratos corporativos", "retrato profissional"],
    "retratos-de-medicos": ["retrato de médico", "médicos", "fotos de médicos"],
    "retratos-de-medicas": ["retratos de médicas", "médicas"],
    "fotos-para-clinicas-medicas": ["clínica médica", "clínicas médicas", "consultório médico"],
    "fotografia-corporativa-em-sao-paulo": ["fotografia corporativa", "corporativo em são paulo"],
    "fotografo-de-eventos-corporativos": ["eventos corporativos", "evento corporativo", "evento empresarial", "eventos empresariais"],
    "fotografo-feiras-stands": ["feiras e stands", "feira de negócios", "stand"],
    "totem-fotografico-totem-mania": ["totem fotográfico", "totem mania"],
    "foto-impressa-na-hora": [
      "foto lembrança impressa na hora",
      "foto lembrança impressa",
      "foto lembrança",
      "foto impressa na hora",
      "fotos impressas na hora",
      "foto recordação",
    ],
    "fotografia-de-logistica": ["logística", "armazém", "operação logística"],
    "ensaio-fotografico-para-dentistas": ["dentistas", "dentista", "consultório odontológico"],
    "fotografo-de-arquitetura-e-interiores": ["arquitetura", "interiores", "arquitetura e interiores"],
    "banco-de-imagens-para-empresas": ["banco de imagens", "banco de imagens corporativo"],
    "fotografia-institucional-em-saopaulo": ["fotografia institucional", "institucional"],
    "ensaio-fotografico-para-redes-sociais": ["redes sociais", "instagram", "linkedin"],
    "fotos-aereas": ["fotos aéreas", "drone", "imagens aéreas"],
    "empreendimentos-imobiliarios": ["empreendimentos imobiliários", "imobiliário", "incorporadora"],
    "fotografo-festa-de-confraternizacao": ["festa da firma", "confraternização"],
    "fotografo-festa-de-confraternizacao-1-1": ["festa de confraternização", "confraternização da empresa"],
    "fotografo-profissional-em-sao-paulo": ["fotógrafo profissional", "fotografia empresarial"],
    "banco-de-imagens-para-escolas": ["escolas", "escola", "instituição de ensino"],
    "fotografo-de-grupos-times-e-equipes": ["grupos", "times", "equipes", "time da empresa"],
    "fotografia-industrial-em-sp": ["fotografia industrial", "indústria"],
    "fotos-de-paes": ["pães", "padaria", "panificação"],
    "fotos-de-hamburguer": ["hambúrguer", "burger"],
    "fotografo-de-drinks-coqueteis": ["drinks", "coquetéis", "coquetel"],
    "fotografo-de-culinaria": ["culinária", "gastronomia", "food"],
    "fotos-para-restaurantes": ["restaurantes", "restaurante"],
    "fotografo-de-retratos-corporativos": ["retratos", "retrato"],
    "fotos-profissionais-para-medicos": ["fotos profissionais para médicos", "médico profissional"],
  };
  for (const e of extras[c.slug] ?? []) out.add(e);

  return Array.from(out).filter((p) => p && p.length > 3);
}

// Páginas-pilar: recebem crosslinks dos posts do blog para concentrar autoridade
// nos termos de maior volume de busca.
const PILLAR_PAGES: Array<{ path: string; phrases: string[] }> = [
  {
    path: "/fotos-corporativas",
    phrases: ["fotos corporativas", "foto corporativa", "fotografia corporativa em são paulo"],
  },
  {
    path: "/foto-profissional-para-linkedin",
    phrases: ["foto para linkedin", "foto profissional para linkedin", "foto de perfil do linkedin", "headshot para linkedin"],
  },
  {
    path: "/fotografia-para-clinicas",
    phrases: ["fotografia para clínicas", "fotografia para clínica", "fotos para clínica", "foto em clínica", "fotos de clínica"],
  },
];

interface PhraseEntry {
  slug: string;
  path?: string; // rota fixa (páginas-pilar) em vez de categoria
  phrase: string; // original
  normalized: string;
}

let PHRASE_INDEX: PhraseEntry[] | null = null;
function getIndex(): PhraseEntry[] {
  if (PHRASE_INDEX) return PHRASE_INDEX;
  const list: PhraseEntry[] = [];
  for (const c of categories) {
    for (const p of phrasesFor(c)) {
      list.push({ slug: c.slug, phrase: p, normalized: norm(p) });
    }
  }
  for (const pillar of PILLAR_PAGES) {
    for (const phrase of pillar.phrases) {
      list.push({ slug: pillar.path, path: pillar.path, phrase, normalized: norm(phrase) });
    }
  }
  // Longest first to ensure greedy matching prefers specific phrases.
  list.sort((a, b) => b.normalized.length - a.normalized.length);
  PHRASE_INDEX = list;
  return list;
}

export interface AutoLinkOptions {
  excludeSlug?: string;
  maxLinks?: number; // per text segment
  usedSlugs?: Set<string>; // shared across paragraphs to avoid repetition
  usedPhrases?: Set<string>; // shared across paragraphs
}

/**
 * Auto-link keyword phrases in plain text to category pages.
 * Returns an array of ReactNodes (mix of strings and <Link>s).
 */
export function autoLink(text: string, opts: AutoLinkOptions = {}): ReactNode[] {
  if (!text) return [text];
  const { excludeSlug, maxLinks = 3, usedSlugs, usedPhrases } = opts;
  const localUsedSlugs = usedSlugs ?? new Set<string>();
  const localUsedPhrases = usedPhrases ?? new Set<string>();
  const index = getIndex();
  const normText = norm(text);

  type Match = { start: number; end: number; slug: string; path?: string; phrase: string };
  const matches: Match[] = [];
  const taken: Array<[number, number]> = [];
  let linksLeft = maxLinks;

  for (const entry of index) {
    if (linksLeft <= 0) break;
    if (excludeSlug && entry.slug === excludeSlug) continue;
    if (localUsedSlugs.has(entry.slug)) continue;
    if (localUsedPhrases.has(entry.normalized)) continue;

    // Find first occurrence with word boundary check
    let idx = 0;
    while (idx <= normText.length) {
      const found = normText.indexOf(entry.normalized, idx);
      if (found === -1) break;
      const end = found + entry.normalized.length;
      // word boundary check
      const before = found === 0 ? " " : normText[found - 1];
      const after = end >= normText.length ? " " : normText[end];
      const isBoundary = /[^a-z0-9]/.test(before) && /[^a-z0-9]/.test(after);
      const overlap = taken.some(([s, e]) => found < e && end > s);
      if (isBoundary && !overlap) {
        matches.push({ start: found, end, slug: entry.slug, path: entry.path, phrase: entry.phrase });
        taken.push([found, end]);
        localUsedSlugs.add(entry.slug);
        localUsedPhrases.add(entry.normalized);
        linksLeft--;
        break;
      }
      idx = found + 1;
    }
  }

  if (matches.length === 0) return [text];

  matches.sort((a, b) => a.start - b.start);
  const nodes: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start > cursor) nodes.push(text.slice(cursor, m.start));
    const anchor = text.slice(m.start, m.end);
    const className =
      "text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember";
    nodes.push(
      m.path ? (
        <Link key={`al-${i}-${m.slug}`} to={m.path} className={className}>
          {anchor}
        </Link>
      ) : (
        <Link
          key={`al-${i}-${m.slug}`}
          to="/fotografo-corporativo/$slug"
          params={{ slug: m.slug }}
          className={className}
        >
          {anchor}
        </Link>
      ),
    );
    cursor = m.end;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
