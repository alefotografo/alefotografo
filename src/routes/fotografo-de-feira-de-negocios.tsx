import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Retratos da Equipe Comercial em Feiras — São Paulo";
const DESCRIPTION =
  "Fotos do time comercial em feiras de negócios em São Paulo: retratos no stand, atendimentos e apresentações, prontos para LinkedIn e propostas. Prévia no mesmo dia.";

const cfg: ServicePageConfig = {
  path: "/fotografo-de-feira-de-negocios",
  breadcrumb: "Fotógrafo de feira de negócios",
  eyebrow: "Time comercial em feiras",
  h1: "Retratos da equipe comercial em feiras de negócios",
  subtitle:
    "Retratos individuais no stand, foto do time completo e registro de atendimentos reais — material de imagem profissional aproveitando o dia em que todos estão juntos.",
  intro: [
    "Feira é o raro momento em que o time comercial inteiro está no mesmo lugar, arrumado e em ação. Aproveito isso para produzir retratos individuais no stand, fotos do time completo e imagens de atendimento real — material que serve o ano inteiro em LinkedIn, propostas e apresentações.",
    "Atendo os principais pavilhões de São Paulo — São Paulo Expo, Expo Center Norte, Distrito Anhembi, Transamerica Expo e Pro Magno — com prévia de imagens no mesmo dia.",
  ],
  teamSiteNote:
    "Cobertura completa da feira, com vários dias, múltiplos ambientes e mais de um fotógrafo simultâneo, é atendida pela equipe Alê Fotógrafo em",
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
