/**
 * Mapeia um texto (título de galeria, vídeo ou post) para a página comercial
 * que atende aquela demanda. Usado para separar intenção: galerias e vídeos são
 * prova visual e apontam para a página de serviço, que concentra a conversão.
 */
export interface ServiceMatch {
  to: string;
  label: string;
}

const MATCHES: { re: RegExp; to: string; label: string }[] = [
  { re: /feira|stand|expo/i, to: "/fotografo-de-feira-de-negocios", label: "fotografia em feiras de negócios" },
  { re: /evento|congresso|convenç|palestra|confratern|premiaç/i, to: "/eventos-corporativos", label: "retratos em eventos corporativos" },
  { re: /médic|medic|hospital|saúde|saude/i, to: "/fotos-profissionais-medicos", label: "fotos profissionais para médicos" },
  { re: /clínic|clinic|consultóri|consultori|odonto|estétic|estetic/i, to: "/fotografia-para-clinicas", label: "fotografia para clínicas" },
  { re: /advoc|jurídic|juridic|advogad/i, to: "/fotografia-para-advogados", label: "fotografia para advogados" },
  { re: /linkedin|perfil|headshot/i, to: "/foto-profissional-para-linkedin", label: "headshot para LinkedIn" },
  { re: /executiv|liderança|lideranca|c-level|ceo|diretor|president/i, to: "/fotografia-executiva", label: "fotografia executiva" },
  { re: /indústria|industria|logístic|logistic|fábrica|fabrica|operaç|obra|engenhar/i, to: "/fotografo-empresarial", label: "fotografia empresarial e industrial" },
  { re: /equipe|escritóri|escritori|ambiente|empresa/i, to: "/fotos-corporativas", label: "fotos corporativas de equipe" },
  { re: /retrato|book|pessoa/i, to: "/foto-profissional", label: "foto profissional" },
];

const FALLBACK: ServiceMatch = { to: "/fotos-corporativas", label: "fotografia corporativa" };

export function serviceFor(text: string): ServiceMatch {
  const m = MATCHES.find((x) => x.re.test(text));
  return m ? { to: m.to, label: m.label } : FALLBACK;
}
