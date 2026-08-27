import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Fotógrafo Empresarial em SP | Pessoas no Trabalho";
const DESCRIPTION =
  "Imagens de gente trabalhando em São Paulo: equipe, liderança, escritório e operação, com retratos individuais na mesma visita. Atendimento direto comigo.";

const cfg: ServicePageConfig = {
  path: "/fotografo-empresarial",
  breadcrumb: "Fotógrafo empresarial",
  eyebrow: "Fotografia empresarial",
  h1: "Fotógrafo empresarial em São Paulo para equipe, escritório e operação",
  subtitle:
    "Cobertura fotográfica completa da sua empresa em um único dia: retratos da equipe, ambientes, processos, indústria, logística e imagens de bastidor para todos os canais.",
  intro: [
    "A fotografia empresarial documenta a empresa como ela realmente é: pessoas trabalhando, ambientes organizados, operação em andamento e lideranças em retratos padronizados. É o material que substitui banco de imagens genérico no site, no LinkedIn e nas apresentações comerciais.",
    "Atendemos escritórios, indústrias, centros de distribuição, clínicas e prestadores de serviço em toda a Grande São Paulo, com roteiro de captação definido antes da visita para aproveitar cada hora no local.",
  ],
  serviceType: "Fotografia empresarial e institucional",
  description: DESCRIPTION,
  blocks: [
    { h: "Retratos da equipe", p: "Retratos individuais padronizados de todo o time, com mesma luz e fundo, prontos para site e LinkedIn." },
    { h: "Escritório e ambientes", p: "Recepção, salas de reunião, estações de trabalho e áreas de convivência com enquadramento arquitetônico." },
    { h: "Indústria e produção", p: "Linha de produção, maquinário e equipes em operação, com atenção a normas de segurança e EPI." },
    { h: "Logística e armazém", p: "Centro de distribuição, expedição, frota e movimentação de carga para site e propostas comerciais." },
    { h: "Bastidor e cultura", p: "Imagens de rotina, reuniões e interação entre equipes para páginas de carreira e recrutamento." },
    { h: "Banco de imagens próprio", p: "Um acervo autoral organizado por temas, com uso comercial liberado para toda a comunicação da empresa." },
  ],
  paraQuem: [
    "Indústrias e fábricas",
    "Transportadoras e operadores logísticos",
    "Escritórios e empresas de serviços",
    "Startups e empresas de tecnologia",
    "Construtoras e incorporadoras",
    "Times de marketing e RH",
  ],
  ondeUsar: [
    "Site institucional e landing pages",
    "LinkedIn e redes sociais da empresa",
    "Propostas comerciais e apresentações",
    "Materiais de recrutamento e employer branding",
    "Relatórios anuais e comunicação com investidores",
    "Anúncios e campanhas de mídia paga",
  ],
  comoFunciona: [
    { h: "1. Briefing", p: "Você informa o endereço, o que precisa ser fotografado e onde as imagens serão usadas." },
    { h: "2. Roteiro de captação", p: "Montamos a lista de ambientes, pessoas e processos, com tempo estimado por etapa." },
    { h: "3. Visita e produção", p: "Captação com iluminação profissional, respeitando a rotina e as normas de segurança da empresa." },
    { h: "4. Seleção", p: "Galeria online organizada por tema para a sua escolha, com acesso compartilhável." },
    { h: "5. Tratamento", p: "Ajuste de cor, luz e retoque profissional, mantendo a naturalidade das pessoas e dos ambientes." },
    { h: "6. Entrega", p: "Download em alta resolução e versões web em 1 a 3 dias úteis, com uso comercial liberado." },
  ],
  gallerySlugs: [
    "fotografia-corporativa-em-sao-paulo",
    "fotografia-industrial-em-sp",
    "fotografia-de-logistica",
    "banco-de-imagens-para-empresas",
    "fotografo-de-grupos-times-e-equipes",
    "fotografia-institucional-em-saopaulo",
  ],
  faqs: [
    { q: "Quanto custa contratar um fotógrafo empresarial em São Paulo?", a: "O valor depende do tempo de captação (meia diária ou diária), do número de ambientes e de pessoas e da quantidade de imagens tratadas. Envie o cenário pelo WhatsApp e receba o orçamento fechado no mesmo dia." },
    { q: "Vocês fotografam dentro da indústria ou do centro de distribuição?", a: "Sim. Levamos iluminação portátil, seguimos as normas internas de segurança e usamos os EPIs exigidos pela empresa." },
    { q: "É possível fotografar equipe e ambientes no mesmo dia?", a: "Sim, e é o formato mais comum: os retratos da equipe são feitos em blocos de horário enquanto os ambientes e processos são captados nos intervalos." },
    { q: "As imagens podem ser usadas em anúncios?", a: "Sim. A entrega inclui uso comercial liberado para site, redes sociais, mídia paga e materiais impressos da empresa." },
    { q: "Em quanto tempo recebo as fotos?", a: "De 1 a 3 dias úteis após a sua seleção. Para campanhas com prazo curto é possível entrega expressa." },
    { q: "Atende fora da cidade de São Paulo?", a: "Sim, atendemos toda a Grande São Paulo e viagens para outras cidades e estados sob orçamento." },
  ],
  wa: "Olá Alexandre, preciso de um fotógrafo empresarial para minha empresa. Pode me passar valores?",
  ctaLabel: "Pedir orçamento empresarial",
};

export const Route = createFileRoute("/fotografo-empresarial")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: cfg.path }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
