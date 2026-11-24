import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import {
  ServicePage,
  servicePageSchema,
  type ServicePageConfig,
} from "@/components/site/ServicePage";

const TITLE = "Fotolembrança em SP — Impressão de Fotos na Hora em Eventos";
const DESCRIPTION =
  "Fotolembrança é a impressão da foto do convidado na hora do evento, em São Paulo: revelação rápida em papel fotográfico profissional, com ou sem a marca do evento. Ideal para confraternizações, premiações e eventos corporativos. Orçamento em até 1 dia útil.";

const cfg: ServicePageConfig = {
  path: "/fotolembranca/",
  breadcrumb: "Fotolembrança",
  eyebrow: "Impressão de fotos em eventos",
  h1: "Fotolembrança — impressão de fotos na hora do seu evento",
  subtitle:
    "O convidado é fotografado em um set profissional e sai do evento com a foto revelada na mão, com ou sem a marca da empresa. A lembrança que fica — e que ninguém joga fora.",
  answerBlock:
    "Fotolembrança é o serviço de impressão de fotos na hora em eventos: o convidado é fotografado em um set profissional e sai do evento com a foto revelada na mão, com ou sem a marca do evento. É indicado para empresas, agências e organizadores em São Paulo. Dirijo a operação completa: set, fotografia, revelação e entrega na mão.",
  intro: [
    "Em festa de empresa, o convidado já ganhou caneca, squeeze e chaveiro — e não guardou nenhum. A fotolembrança funciona porque é pessoal: é a foto dele, revelada ali mesmo, com a qualidade de uma foto profissional e o carinho de uma lembrança de família.",
    "Atendo em festas de fim de ano, confraternizações, premiações, formaturas e ativações em São Paulo e Grande SP, com revelação rápida e a opção de levar o logotipo da empresa impresso em cada foto.",
  ],
  formats: [
    {
      formato: "Fotolembrança na hora",
      onde: "No local do evento, em São Paulo e Grande SP",
      duracao: "Período contratado durante o evento",
      entrega: "Foto revelada em segundos, entregue na mão ainda no evento",
    },
    {
      formato: "Foto com a marca do evento",
      onde: "No local do evento, com moldura ou arte personalizada",
      duracao: "Período contratado durante o evento",
      entrega: "Fotolembrança impressa com logo, data ou identidade visual do evento",
    },
    {
      formato: "Fotolembrança + cobertura completa",
      onde: "No local do evento, com cobertura do evento inteiro",
      duracao: "Período contratado, do recepção ao encerramento",
      entrega: "Fotos impressas na hora + galeria privada online com as melhores imagens",
    },
  ],
  serviceType: "Impressão de fotos em eventos corporativos",
  description: DESCRIPTION,
  blocks: [
    {
      h: "Set profissional no evento",
      p: "Iluminação, impressora e backdrop (quando contratado) montados antes do primeiro convidado chegar, em qualquer espaço de evento em São Paulo.",
    },
    {
      h: "Revelação rápida",
      p: "Cada foto sai impressa em segundos em papel fotográfico profissional — sem fila travada, sem espera longa, sem foto amadora de celular.",
    },
    {
      h: "A marca do evento em cada foto",
      p: "Moldura personalizada com logotipo, data ou arte do evento: a lembrança vai para casa do convidado e fica exposta — virando marketing contínuo.",
    },
    {
      h: "Fluxo organizado de convidados",
      p: "Fila conduzida individualmente, em duplas ou grupos, com ritmo dimensionado ao número de convidados e ao tempo de evento.",
    },
    {
      h: "Galeria digital complementar",
      p: "Contratando junto a cobertura, todas as fotos do evento vão para uma galeria privada online após a entrega — um único fornecedor para as duas entregas.",
    },
    {
      h: "Experiência que o convidado lembra",
      p: "A fotolembrança cria um momento dentro do evento: posar, rir, receber a foto na mão. É o que as pessoas comentam depois.",
    },
  ],
  paraQuem: [
    "Empresas que fazem festa de confraternização de fim de ano e querem uma lembrança que o colaborador realmente guarde.",
    "Agências e produtoras que cuidam de eventos corporativos e precisam de impressão na hora confiável em São Paulo.",
    "RH e marketing que organizam premiações, formaturas internas, datas comemorativas e eventos de integração.",
    "Quem já contrata cobertura fotográfica e quer agregar um diferencial perceptível para os convidados.",
  ],
  ondeUsar: [
    "Festas de fim de ano e confraternizações empresariais",
    "Premiações e cerimônias de reconhecimento",
    "Formaturas e eventos de colaboradores",
    "Feiras, ativações de marca e ações promocionais",
    "Eventos de integração e comemorações internas",
  ],
  comoFunciona: [
    {
      h: "Alinhamento do formato",
      p: "Definimos o formato da foto impressa, a moldura com ou sem marca, o número de convidados e a logística do espaço.",
    },
    {
      h: "Montagem do set",
      p: "Chego antes do evento com iluminação, impressora e backdrop para o set ficar pronto antes da primeira foto.",
    },
    {
      h: "Fotografia dos convidados",
      p: "Durante o evento, os convidados são fotografados em sequência organizada, individualmente, em duplas ou grupos.",
    },
    {
      h: "Revelação na hora",
      p: "Cada foto é impressa em segundos em papel fotográfico profissional, com a moldura do evento quando contratada.",
    },
    {
      h: "Entrega na mão",
      p: "O convidado recebe a fotolembrança ainda no evento — sem esperar link, galeria ou envio depois.",
    },
    {
      h: "Galeria digital complementar",
      p: "Com a cobertura completa, as fotos do evento inteiro seguem para uma galeria privada online após a realização.",
    },
  ],
  gallerySlugs: [
    "totem-fotografico-totem-mania",
    "fotografo-festa-de-confraternizacao",
    "fotografo-de-eventos-corporativos",
    "fotografo-de-grupos-times-e-equipes",
  ],
  caseLinks: [
    {
      to: "/cases/bmx-logistica",
      label: "Case BMX Logística",
      desc: "Evento corporativo com registro das pessoas e entrega de fotos para os colaboradores.",
    },
  ],
  faqs: [
    {
      q: "O que é fotolembrança em evento?",
      a: "É a impressão da foto do convidado ainda durante o evento. Em vez de receber um brinde genérico, a pessoa é fotografada em um set profissional e sai com a foto revelada na mão, em segundos.",
    },
    {
      q: "Quantas fotos dá para imprimir por hora?",
      a: "Depende do formato e do perfil do público. Em eventos corporativos com set único e fila organizada, a produção é contínua durante o período contratado. O dimensionamento é feito no orçamento, com base no número de convidados e no tempo de evento.",
    },
    {
      q: "A foto impressa pode levar o logo da empresa?",
      a: "Sim. A moldura ou a arte da fotolembrança pode levar logotipo, nome do evento, data ou qualquer identidade visual aprovada. É o que transforma a lembrança em marketing.",
    },
    {
      q: "Você atende em qualquer espaço em São Paulo?",
      a: "Sim, atendo em espaços de eventos em toda a cidade de São Paulo e Grande SP: hotéis, espaços de eventos, sedes de empresas, restaurantes e áreas abertas com estrutura adequada.",
    },
    {
      q: "Fotolembrança substitui a cobertura fotográfica do evento?",
      a: "Não — são serviços complementares. A fotolembrança entrega a experiência na hora; a cobertura registra o evento completo (palestras, premiações, ambiente, grupos). Os dois podem ser contratados juntos com um único fornecedor.",
    },
    {
      q: "Com quanta antecedência devo reservar?",
      a: "Para datas de fim de ano (novembro e dezembro), o ideal é reservar com 30 a 60 dias de antecedência, pois é o período mais disputado para confraternizações em São Paulo.",
    },
  ],
  wa: "Olá Alexandre, quero orçamento de fotolembrança (impressão de fotos na hora) para um evento em São Paulo.",
  ctaLabel: "Orçar fotolembrança para meu evento",
};

export const Route = createFileRoute("/fotolembranca")({
  head: () => ({
    meta: buildMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: cfg.path,
    }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
