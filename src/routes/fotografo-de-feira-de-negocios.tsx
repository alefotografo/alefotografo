import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Fotógrafo de Feiras em SP | Stand e Prévia no Mesmo Dia";
const DESCRIPTION =
  "Fotógrafo de feiras de negócios em São Paulo: stand, expositores, palestras e networking no São Paulo Expo, Expo Center Norte e Anhembi. Prévia das fotos no mesmo dia.";

const cfg: ServicePageConfig = {
  path: "/fotografo-de-feira-de-negocios",
  breadcrumb: "Fotógrafo de feira de negócios",
  eyebrow: "Feiras e stands",
  h1: "Fotógrafo de feira de negócios em São Paulo",
  subtitle:
    "Cobertura fotográfica de feiras, exposições e congressos: stand, produtos, equipe, visitantes, palestras e reuniões comerciais, com prévia para publicar durante o evento.",
  intro: [
    "Feira é um investimento de poucos dias que precisa render conteúdo por meses. A cobertura registra o stand pronto antes da abertura, o movimento de visitantes, as demonstrações de produto, os atendimentos comerciais e a equipe em ação.",
    "Atendemos os principais pavilhões de São Paulo — São Paulo Expo, Expo Center Norte, Distrito Anhembi, Transamerica Expo e Pro Magno — com prévia de imagens no mesmo dia para redes sociais e assessoria.",
  ],
  serviceType: "Fotografia de feiras de negócios, stands e congressos",
  description: DESCRIPTION,
  blocks: [
    { h: "Stand pronto", p: "Registro do stand antes da abertura, com visão geral, detalhes de marca, sinalização e ambientação." },
    { h: "Movimento e visitantes", p: "Fluxo de público, atendimentos, filas e interação com o espaço, mostrando o stand cheio." },
    { h: "Produtos e demonstrações", p: "Fotos dos produtos expostos e das demonstrações técnicas, prontas para catálogo e site." },
    { h: "Equipe em ação", p: "Time comercial atendendo, reuniões e apresentações — imagens úteis para LinkedIn e relatórios." },
    { h: "Palestras e painéis", p: "Cobertura de palestras, mesas e premiações com registro do palco, plateia e telão." },
    { h: "Prévia no mesmo dia", p: "Seleção tratada entregue durante o evento para publicação em tempo real." },
  ],
  paraQuem: [
    "Expositores e patrocinadores",
    "Organizadores de feiras e congressos",
    "Agências de eventos e marketing",
    "Indústrias e distribuidores",
    "Empresas de tecnologia",
    "Associações e entidades setoriais",
  ],
  ondeUsar: [
    "Redes sociais durante e depois da feira",
    "Relatório de resultados para diretoria e patrocinadores",
    "Site, catálogo e propostas comerciais",
    "Assessoria de imprensa e mídia setorial",
    "Material de venda da edição seguinte",
    "Campanhas de mídia paga e e-mail marketing",
  ],
  comoFunciona: [
    { h: "1. Briefing do evento", p: "Você informa pavilhão, número do stand, dias, horários e prioridades de registro." },
    { h: "2. Roteiro por dia", p: "Definimos os blocos de cobertura: montagem pronta, horários de pico, palestras e reuniões." },
    { h: "3. Cobertura", p: "Captação discreta com equipamento adequado à iluminação mista dos pavilhões." },
    { h: "4. Prévia no mesmo dia", p: "Uma seleção tratada é enviada ainda durante o evento para publicação imediata." },
    { h: "5. Tratamento completo", p: "Ajuste de cor, luz e retoque em todas as imagens selecionadas." },
    { h: "6. Entrega final", p: "Galeria online com download em alta resolução em 1 a 3 dias úteis e uso comercial liberado." },
  ],
  gallerySlugs: [
    "fotografo-feiras-stands",
    "fotografo-de-eventos-corporativos",
    "eventos-corporativos",
    "fotografia-corporativa-em-sao-paulo",
    "banco-de-imagens-para-empresas",
    "fotografo-de-grupos-times-e-equipes",
  ],
  faqs: [
    { q: "Quanto custa a cobertura de uma feira de negócios?", a: "O valor é calculado por período (algumas horas, meia diária ou diária) e pelo número de dias do evento. Envie o pavilhão e as datas pelo WhatsApp e receba o orçamento fechado." },
    { q: "Consigo fotos para publicar durante a feira?", a: "Sim. Uma prévia tratada é entregue no mesmo dia, geralmente em poucas horas após o bloco de cobertura." },
    { q: "Em quais pavilhões vocês atendem?", a: "São Paulo Expo, Expo Center Norte, Distrito Anhembi, Transamerica Expo, Pro Magno e outros espaços da Grande São Paulo." },
    { q: "Também fazem vídeo na feira?", a: "Sim. É possível combinar foto e vídeo — teaser curto para redes sociais e depoimentos de clientes gravados no stand." },
    { q: "É preciso credenciamento?", a: "A maioria dos eventos exige credencial de fotógrafo. Você envia os dados solicitados pela organização e cuidamos do restante." },
    { q: "Quantas fotos são entregues?", a: "Depende do tempo de cobertura; uma diária costuma gerar algumas centenas de imagens tratadas, entregues em galeria organizada." },
  ],
  wa: "Olá Alexandre, preciso de cobertura fotográfica em uma feira de negócios. Pode me passar valores?",
  ctaLabel: "Pedir orçamento para a feira",
};

export const Route = createFileRoute("/fotografo-de-feira-de-negocios")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: cfg.path }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
