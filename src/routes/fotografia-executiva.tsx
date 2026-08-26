import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Fotografia Executiva em SP | Retratos de Diretoria";
const DESCRIPTION =
  "Retratos executivos em São Paulo para diretoria, sócios e palestrantes, no seu escritório ou em estúdio. 30 anos de experiência e orçamento no mesmo dia.";

const cfg: ServicePageConfig = {
  path: "/fotografia-executiva",
  breadcrumb: "Fotografia executiva",
  eyebrow: "Retrato executivo",
  h1: "Fotografia executiva em São Paulo para diretoria, sócios e lideranças",
  subtitle:
    "Retratos executivos ajudam líderes, sócios, diretores, médicos, advogados e empresários a fortalecerem sua presença profissional em canais digitais e materiais institucionais.",
  intro: [
    "A fotografia executiva trata o retrato como parte da comunicação da empresa: mesma luz, mesmo fundo e mesmo enquadramento para toda a liderança, com direção de pose e expressão adequada ao cargo.",
    "A produção pode acontecer no escritório da empresa, em estúdio ou em locação externa em toda a Grande São Paulo, com blocos de horário para não interromper a agenda dos executivos.",
  ],
  serviceType: "Fotografia executiva e retrato corporativo",
  description: DESCRIPTION,
  blocks: [
    { h: "Retratos para diretoria", p: "Retrato corporativo padronizado para conselho, C-level e diretoria, com linguagem visual única em todos os materiais." },
    { h: "Fotos para sócios", p: "Retratos de sócios e fundadores para site, propostas comerciais, apresentações e comunicação com investidores." },
    { h: "Fotos para equipe comercial", p: "Retratos consistentes para time de vendas, consultores e pré-venda, prontos para assinatura de e-mail e LinkedIn." },
    { h: "Fotos para palestrantes", p: "Retratos de autoridade e imagens em ação para divulgação de eventos, releases e material de palco." },
    { h: "Fotos para imprensa", p: "Versões em recorte vertical, horizontal e quadrado, em alta resolução, para uso editorial e assessoria." },
    { h: "Fotos para LinkedIn", p: "Enquadramento correto para o formato circular da plataforma, com expressão profissional e fundo neutro." },
  ],
  paraQuem: [
    "Diretores e C-level",
    "Sócios e fundadores",
    "Gestores e coordenadores",
    "Equipes comerciais",
    "Palestrantes e porta-vozes",
    "Médicos, advogados e consultores",
  ],
  ondeUsar: [
    "LinkedIn e redes profissionais",
    "Site institucional e página de equipe",
    "Apresentações, propostas comerciais e relatórios",
    "Imprensa, releases e entrevistas",
    "Material de eventos e palestras",
    "Comunicação interna e recrutamento",
  ],
  comoFunciona: [
    { h: "1. Briefing rápido", p: "Você informa quantas pessoas serão fotografadas, os cargos e onde as imagens serão usadas." },
    { h: "2. Orientação de imagem", p: "Cada executivo recebe orientação de figurino e preparação antes da sessão." },
    { h: "3. Direção na sessão", p: "Direção contínua de pose, postura e expressão — não é necessário saber posar." },
    { h: "4. Seleção", p: "As imagens ficam em galeria online para escolha por pessoa ou por área." },
    { h: "5. Tratamento profissional", p: "Ajuste de cor, luz e retoque sem descaracterizar o rosto, com padrão igual para toda a liderança." },
    { h: "6. Entrega digital", p: "Download em alta resolução e versões para web em 1 a 3 dias úteis, com uso comercial liberado." },
  ],
  gallerySlugs: [
    "retrato-corporativo",
    "fotografo-de-retratos-corporativos",
    "fotografo-de-retratos-profissionais",
    "fotografia-institucional-em-saopaulo",
    "fotografo-de-grupos-times-e-equipes",
    "fotografia-corporativa-em-sao-paulo",
  ],
  faqs: [
    { q: "Quanto custa um retrato executivo em São Paulo?", a: "Depende do número de pessoas, do local e da quantidade de imagens tratadas. Retratos individuais resolvem em cerca de uma hora; para diretoria e equipe trabalhamos por meia diária ou diária. Envie o cenário pelo WhatsApp e receba o valor fechado." },
    { q: "Vocês atendem no escritório da empresa?", a: "Sim. Levamos iluminação profissional e fundo portátil até o seu endereço em toda a Grande São Paulo, reduzindo o tempo de afastamento dos executivos." },
    { q: "Quanto tempo dura a sessão?", a: "Cerca de uma hora para retratos individuais e de 10 a 15 minutos por pessoa em sessões de equipe, organizadas por blocos de horário." },
    { q: "As fotos recebem tratamento?", a: "Sim. Todas as imagens entregues passam por ajuste de cor, luz e retoque profissional, mantendo a naturalidade do rosto." },
    { q: "Em quanto tempo recebo as fotos?", a: "De 1 a 3 dias úteis após a sua seleção, por galeria online com download em alta resolução." },
    { q: "Como pedir orçamento pelo WhatsApp?", a: "Envie quantas pessoas serão fotografadas, o bairro ou cidade e a data pretendida. Com isso o orçamento sai fechado, sem reunião prévia." },
  ],
  wa: "Olá Alexandre, quero agendar um retrato executivo. Pode me passar valores e disponibilidade?",
  ctaLabel: "Agendar retrato executivo",
};

export const Route = createFileRoute("/fotografia-executiva")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: cfg.path }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
