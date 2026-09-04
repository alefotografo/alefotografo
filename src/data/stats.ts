/**
 * Números reais do negócio, confirmados por Alexandre Machado.
 * Fonte única: alterar aqui atualiza home, páginas de serviço e llms.txt.
 * Regra: nada entra aqui sem confirmação do fotógrafo. Sem estimativas.
 */

import { googleReviewsSummary } from "./reviews";

export type BusinessStat = {
  /** Número em destaque. */
  value: string;
  /** Rótulo curto do indicador. */
  label: string;
  /** Contexto de uma linha, lido por humanos e por mecanismos de IA. */
  detail: string;
};

/** Prazo de entrega por tipo de serviço. */
export type DeliveryKind = "retrato" | "evento";

export const deliveryStat: Record<DeliveryKind, BusinessStat> = {
  retrato: {
    value: "1 dia útil",
    label: "Entrega das fotos",
    detail: "Imagens tratadas, com cor e retoque natural, entregues em 1 dia útil.",
  },
  evento: {
    value: "Mesmo dia",
    label: "Entrega da seleção",
    detail: "Seleção das melhores imagens do evento entregue no mesmo dia da cobertura.",
  },
};

export const experienceStat: BusinessStat = {
  value: "30 anos",
  label: "De carreira",
  detail: "Trinta anos fotografando em São Paulo, sempre com câmera na mão.",
};

export const executivesStat: BusinessStat = {
  value: "300+",
  label: "Executivos fotografados",
  detail: "Mais de 300 executivos fotografados em São Paulo.",
};

export const companiesStat: BusinessStat = {
  value: "200+",
  label: "Empresas atendidas",
  detail: "Mais de 200 empresas atendidas, de escritórios a clínicas e indústrias.",
};

export const ratingStat: BusinessStat = {
  value: googleReviewsSummary.ratingValue.toString().replace(".", ","),
  label: `Nota em ${googleReviewsSummary.reviewCount} avaliações`,
  detail: `Nota ${googleReviewsSummary.ratingValue
    .toString()
    .replace(".", ",")} em ${googleReviewsSummary.reviewCount} avaliações de clientes.`,
};

/** Faixa de indicadores usada na home. */
export const homeStats: BusinessStat[] = [
  executivesStat,
  companiesStat,
  deliveryStat.retrato,
  experienceStat,
];

/** Faixa de indicadores de uma página de serviço, com o prazo daquele serviço. */
export function serviceStats(kind: DeliveryKind = "retrato"): BusinessStat[] {
  return [executivesStat, companiesStat, deliveryStat[kind], ratingStat];
}

/** Páginas de serviço cuja entrega é de cobertura de evento. */
const EVENT_PATHS = new Set(["/eventos-corporativos", "/fotografo-de-feira-de-negocios"]);

export function deliveryKindForPath(path: string): DeliveryKind {
  return EVENT_PATHS.has(path) ? "evento" : "retrato";
}

/** Frase de abertura com dados concretos, extraível por mecanismos de IA. */
export function statsLead(kind: DeliveryKind = "retrato"): string {
  const entrega =
    kind === "evento"
      ? "a seleção das melhores imagens sai no mesmo dia do evento"
      : "as fotos tratadas são entregues em 1 dia útil";
  return `Em 30 anos de carreira já fotografei mais de 300 executivos e atendi mais de 200 empresas em São Paulo. Todo ensaio é fotografado por mim, pessoalmente, e ${entrega}.`;
}
