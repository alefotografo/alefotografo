import { posts, videos } from "@/data/catalog";

/** Normaliza para busca: sem acentos, minúsculo. */
export function normalizeSearch(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export type SearchGroup = "Serviços e páginas" | "Artigos do blog" | "Vídeos";

export type SearchHit =
  | { kind: "page"; to: PagePath; title: string; description: string; group: SearchGroup }
  | { kind: "post" | "video"; slug: string; title: string; description: string; group: SearchGroup };

/** Páginas fixas do site — títulos e termos alinhados às páginas comerciais. */
const PAGES = [
  { to: "/foto-profissional", title: "Retrato profissional", description: "Ensaio individual com direção de pose em estúdio ou na empresa.", terms: "foto profissional retrato headshot ensaio" },
  { to: "/foto-profissional-para-linkedin", title: "Foto para LinkedIn", description: "Headshot de perfil para LinkedIn e redes profissionais.", terms: "linkedin perfil headshot rede social curriculo" },
  { to: "/fotografia-executiva", title: "Fotografia executiva", description: "Retratos de liderança, CEOs e C-levels.", terms: "executivo ceo diretor lideranca c-level presidente" },
  { to: "/fotos-corporativas", title: "Fotos corporativas e de equipe", description: "Retratos de time e imagens do ambiente de escritório.", terms: "equipe time corporativo empresa escritorio" },
  { to: "/fotos-profissionais-medicos", title: "Fotos para médicos", description: "Retratos profissionais para a área da saúde.", terms: "medico medica saude consultorio hospital" },
  { to: "/fotografia-para-advogados", title: "Fotografia para advogados", description: "Retratos de sócios e escritórios de advocacia.", terms: "advogado advocacia juridico socio escritorio direito" },
  { to: "/fotografia-para-clinicas", title: "Fotografia para clínicas", description: "Equipe, ambientes e retratos para clínicas.", terms: "clinica consultorio saude estetica odonto" },
  { to: "/eventos-corporativos", title: "Eventos corporativos", description: "Retratos e cobertura de pessoas em eventos de empresa.", terms: "evento congresso palestra convencao feira" },
  { to: "/fotografo-empresarial", title: "Fotógrafo empresarial", description: "Fotografia para empresas em São Paulo.", terms: "empresarial empresa negocios business" },
  { to: "/fotografo-de-feira-de-negocios", title: "Fotógrafo de feira de negócios", description: "Cobertura fotográfica em feiras e estandes.", terms: "feira estande expo negocios" },
  { to: "/servicos", title: "Todos os serviços", description: "Panorama completo dos serviços de fotografia.", terms: "servicos precos pacotes" },
  { to: "/portfolio", title: "Portfólio", description: "Trabalhos selecionados por especialidade.", terms: "portfolio galeria trabalhos fotos" },
  { to: "/fotografo-corporativo", title: "Galerias por segmento", description: "Fotos organizadas por segmento e especialidade.", terms: "galeria segmento categorias fotos" },
  { to: "/videos", title: "Vídeos", description: "Produções audiovisuais e vídeos institucionais.", terms: "video institucional audiovisual filmagem" },
  { to: "/depoimentos", title: "Depoimentos", description: "O que os clientes dizem sobre o trabalho.", terms: "depoimento avaliacao clientes review" },
  { to: "/quem-e-o-ale", title: "Quem é o Alê", description: "Trajetória de Alexandre Machado, 30 anos de fotografia.", terms: "alexandre machado ale sobre biografia fotografo" },
  { to: "/sobre", title: "Sobre o estúdio", description: "Como o estúdio trabalha e o que esperar do ensaio.", terms: "sobre estudio historia" },
  { to: "/faq", title: "Perguntas frequentes", description: "Dúvidas sobre ensaios, prazos e entrega.", terms: "faq duvidas perguntas prazo entrega preco" },
  { to: "/blog", title: "Blog", description: "Artigos sobre fotografia e imagem profissional.", terms: "blog artigos dicas" },
  { to: "/contato", title: "Contato e orçamento", description: "Fale com o estúdio e solicite um orçamento.", terms: "contato orcamento whatsapp telefone email endereco" },
] as const;

type PagePath = (typeof PAGES)[number]["to"];

/** Palavras muito comuns que não devem restringir a busca. */
const STOP_WORDS = new Set(["de", "da", "do", "das", "dos", "para", "em", "e", "a", "o", "as", "os", "com", "no", "na"]);

/** Divide a consulta em termos normalizados, ignorando palavras vazias. */
function tokenize(query: string): string[] {
  const all = normalizeSearch(query.trim())
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2);
  const meaningful = all.filter((t) => !STOP_WORDS.has(t));
  return meaningful.length ? meaningful : all;
}

/** Verdadeiro quando todos os termos aparecem no texto (em qualquer ordem, com raiz comum). */
function matchesTokens(haystack: string, tokens: string[]): boolean {
  const text = normalizeSearch(haystack);
  const words = text.split(/[^a-z0-9]+/).filter(Boolean);
  return tokens.every(
    (t) =>
      text.includes(t) ||
      // "fotos" encontra "fotografia" e vice-versa (raiz de 4+ caracteres)
      words.some((w) => {
        const min = Math.min(w.length, t.length);
        return min >= 4 && (w.startsWith(t.slice(0, min)) || t.startsWith(w.slice(0, min)));
      }),
  );
}

export function searchSite(query: string, limitPerGroup = 8): SearchHit[] {
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const pageHits: SearchHit[] = PAGES.filter((p) =>
    matchesTokens(`${p.title} ${p.description} ${p.terms ?? ""}`, tokens),
  )
    .slice(0, limitPerGroup)
    .map((p) => ({
      kind: "page" as const,
      to: p.to,
      title: p.title,
      description: p.description,
      group: "Serviços e páginas" as const,
    }));

  const postHits: SearchHit[] = posts
    .filter((p) => matchesTokens(`${p.title} ${p.description}`, tokens))
    .slice(0, limitPerGroup * 3)
    .map((p) => ({
      kind: "post" as const,
      slug: p.slug,
      title: p.title,
      description: p.description,
      group: "Artigos do blog" as const,
    }));

  const videoHits: SearchHit[] = videos
    .filter((v) => matchesTokens(`${v.title} ${v.subtitle} ${v.description}`, tokens))
    .slice(0, limitPerGroup)
    .map((v) => ({
      kind: "video" as const,
      slug: v.slug,
      title: v.title,
      description: v.subtitle || v.description,
      group: "Vídeos" as const,
    }));

  return [...pageHits, ...postHits, ...videoHits];
}
