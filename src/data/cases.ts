// Cases publicados — fonte única usada pelo hub /cases e pelos blocos de
// prova nas páginas de galeria. Só entra case com produção real comprovada
// no catálogo (vídeo/fotos publicados). Nunca inventar resultado ou cliente.
export type CasePath =
  | "/cases/ativa-logistica"
  | "/cases/rocha-e-queiroz-advogados"
  | "/cases/sq-quimica"
  | "/cases/abradilan"
  | "/cases/tecnisa"
  | "/cases/nitriflex"
  | "/cases/fiorde"
  | "/cases/germed"
  | "/cases/galena";

export type CaseSummary = {
  to: CasePath;
  client: string;
  segment: string;
  services: string;
  proof: "video";
  videoSlug: string;
};

export const CASES: CaseSummary[] = [
  {
    to: "/cases/ativa-logistica",
    client: "ATIVA Logística",
    segment: "Logística",
    services: "Fotografia corporativa e produção de vídeo",
    proof: "video",
    videoSlug: "ativa-log-estrutura-operacao-e-eficiencia-logistica",
  },
  {
    to: "/cases/rocha-e-queiroz-advogados",
    client: "Rocha & Queiroz Advogados Associados",
    segment: "Advocacia",
    services: "Vídeo institucional e fotografia",
    proof: "video",
    videoSlug: "video-institucional-rocha-queiroz-advogados",
  },
  {
    to: "/cases/sq-quimica",
    client: "SQ Química",
    segment: "Indústria",
    services: "Vídeo institucional e cobertura de feiras com foto e vídeo",
    proof: "video",
    videoSlug: "sq-quimica-unidade-vinhedo",
  },
  {
    to: "/cases/abradilan",
    client: "ABRADILAN",
    segment: "Eventos corporativos",
    services: "Cobertura de fóruns, convenções e eventos em vídeo",
    proof: "video",
    videoSlug: "11-forum-abradilan-2026",
  },
  {
    to: "/cases/tecnisa",
    client: "Tecnisa",
    segment: "Eventos corporativos",
    services: "Cobertura de convenção, almoço com fornecedores e confraternização",
    proof: "video",
    videoSlug: "convencao-de-vendas-2023-tecnisa",
  },
  {
    to: "/cases/nitriflex",
    client: "Nitriflex",
    segment: "Indústria",
    services: "Vídeo institucional da planta industrial",
    proof: "video",
    videoSlug: "nitriflex-industria-quimica-de-polimeros-especiais-e-borrachas-nitrilicas",
  },
  {
    to: "/cases/fiorde",
    client: "Fiorde Logística",
    segment: "Logística",
    services: "Vídeo institucional da operação logística",
    proof: "video",
    videoSlug: "fiorde-logistica-solucoes-logisticas-integradas-para-empresas",
  },
  {
    to: "/cases/germed",
    client: "Germed",
    segment: "Eventos corporativos",
    services: "Cobertura de evento corporativo em vídeo",
    proof: "video",
    videoSlug: "encontro-de-craques-germed-1",
  },
  {
    to: "/cases/galena",
    client: "Galena",
    segment: "Eventos corporativos",
    services: "Vídeo de eventos comemorativos e institucionais",
    proof: "video",
    videoSlug: "galena-35-anos",
  },
];

// Galeria (slug) → case de prova do mesmo segmento. Bloco renderizado na
// página da galeria reforça a owner sem tocar em URL/Frozen.
export const CASE_PROOF_BY_GALLERY: Record<string, CasePath> = {
  "fotografia-de-logistica": "/cases/ativa-logistica",
  "fotografia-industrial-em-sp": "/cases/sq-quimica",
  "fotografo-de-eventos-corporativos": "/cases/abradilan",
  "fotografia-para-escritorios-de-advocacia": "/cases/rocha-e-queiroz-advogados",
  "fotografo-festa-de-confraternizacao": "/cases/tecnisa",
  "fotografo-festa-de-confraternizacao-1-1": "/cases/tecnisa",
};

export function caseByPath(to: CasePath): CaseSummary | undefined {
  return CASES.find((c) => c.to === to);
}
