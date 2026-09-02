import { posts, videos } from "@/data/catalog";

/** Normaliza para busca: sem acentos, minúsculo. */
export function normalizeSearch(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export type SearchHit = {
  to: string;
  title: string;
  description: string;
  group: "Serviços e páginas" | "Artigos do blog" | "Vídeos";
};

/** Páginas fixas do site — títulos e termos alinhados às páginas comerciais. */
const PAGES: Array<{ to: string; title: string; description: string; terms?: string }> = [
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
];

export function searchSite(query: string, limitPerGroup = 8): SearchHit[] {
  const q = normalizeSearch(query.trim());
  if (q.length < 2) return [];

  const pageHits: SearchHit[] = PAGES.filter((p) =>
    normalizeSearch(`${p.title} ${p.description} ${p.terms ?? ""}`).includes(q),
  )
    .slice(0, limitPerGroup)
    .map((p) => ({ to: p.to, title: p.title, description: p.description, group: "Serviços e páginas" }));

  const postHits: SearchHit[] = posts
    .filter((p) => normalizeSearch(`${p.title} ${p.description}`).includes(q))
    .slice(0, limitPerGroup * 3)
    .map((p) => ({
      to: `/blog/${p.slug}`,
      title: p.title,
      description: p.description,
      group: "Artigos do blog",
    }));

  const videoHits: SearchHit[] = videos
    .filter((v) => normalizeSearch(`${v.title} ${v.subtitle} ${v.description}`).includes(q))
    .slice(0, limitPerGroup)
    .map((v) => ({
      to: `/videos/${v.slug}`,
      title: v.title,
      description: v.subtitle || v.description,
      group: "Vídeos",
    }));

  return [...pageHits, ...postHits, ...videoHits];
}
