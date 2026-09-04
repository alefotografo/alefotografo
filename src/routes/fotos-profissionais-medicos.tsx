import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Fotos para Médicos e Clínicas em SP | Alexandre Machado";
const DESCRIPTION =
  "Retrato profissional de médicos e dentistas em São Paulo, com jaleco ou traje social: confiança sem distância, fotografado pessoalmente por Alexandre Machado. Solicite orçamento.";

const cfg: ServicePageConfig = {
  path: "/fotos-profissionais-medicos",
  breadcrumb: "Fotos para médicos",
  eyebrow: "Saúde",
  h1: "Fotos profissionais para médicos e clínicas em São Paulo",
  subtitle:
    "Fotografias profissionais ajudam médicos, clínicas e profissionais da saúde a transmitirem confiança, acolhimento e autoridade em sites, redes sociais, Google, Doctoralia, apresentações e materiais institucionais.",
  /** Bloco de resposta direta: 40–60 palavras, autocontido. */
  answerBlock:
    "Foto profissional para médicos é o retrato clínico e institucional que transmite confiança antes da primeira consulta: retrato do profissional, da equipe e do consultório. É indicada para médicos, dentistas, psicólogos e clínicas em São Paulo. Fotografo no seu consultório ou em estúdio e entrego as imagens tratadas em 1 dia útil.",
  formats: [
    { formato: "Retrato individual", onde: "Meu estúdio, o seu escritório ou locação externa", duracao: "Cerca de 1 hora de captação", entrega: "Imagens tratadas em 1 dia útil" },
    { formato: "Retratos de equipe ou diretoria", onde: "No escritório da empresa, em blocos de horário", duracao: "Cerca de 15 minutos por pessoa", entrega: "Mesmo padrão visual para todos, em 1 dia útil" },
    { formato: "Ambiente e operação", onde: "Na sede, escritório, clínica ou planta", duracao: "Bloco de horas definido no orçamento", entrega: "Imagens tratadas em 1 dia útil" },
  ],
  intro: [
    "O paciente decide antes de entrar na clínica. Retratos e imagens reais do ambiente reduzem a insegurança de quem pesquisa no Google, compara perfis e agenda pelo celular.",
    "A produção é planejada para respeitar a rotina de atendimento: fotografamos em blocos, com iluminação própria, sem interferir na privacidade dos pacientes.",
  ],
  serviceType: "Fotografia para médicos, clínicas e profissionais da saúde",
  description: DESCRIPTION,
  blocks: [
    { h: "Retrato médico profissional", p: "Retrato com direção de pose e expressão de acolhimento, no padrão usado em site, Doctoralia e redes profissionais." },
    { h: "Fotos da equipe", p: "Retratos padronizados de médicos, enfermagem, recepção e equipe administrativa, com a mesma linguagem visual." },
    { h: "Fotos da clínica", p: "Recepção, consultórios, salas de procedimento e equipamentos fotografados para transmitir estrutura e higiene." },
    { h: "Fotos para site", p: "Imagens em recortes prontos para home, páginas de especialidade, equipe e páginas de conversão." },
    { h: "Fotos para redes sociais", p: "Versões verticais e quadradas para Instagram, anúncios e conteúdo de autoridade médica." },
    { h: "Fotos para Google Business Profile", p: "Conjunto de imagens do ambiente e da equipe para reforçar o perfil local e a decisão de agendamento." },
  ],
  paraQuem: [
    "Médicos e médicas",
    "Clínicas e consultórios",
    "Dentistas e odontologia",
    "Psicólogos e terapeutas",
    "Nutricionistas e fisioterapeutas",
    "Laboratórios e centros de diagnóstico",
  ],
  ondeUsar: [
    "Site da clínica e páginas de especialidade",
    "Google Business Profile e mapas",
    "Doctoralia e plataformas de agendamento",
    "Instagram, LinkedIn e anúncios",
    "Materiais impressos, convênios e apresentações",
    "Imprensa e conteúdo de autoridade",
  ],
  comoFunciona: [
    { h: "1. Briefing rápido", p: "Você informa a especialidade, os ambientes a fotografar, quantos profissionais e onde as imagens serão usadas." },
    { h: "2. Planejamento da agenda", p: "Definimos horário de menor movimento para não impactar os atendimentos." },
    { h: "3. Direção na sessão", p: "Direção de pose, postura e expressão para retratos, além de organização de cena nos ambientes." },
    { h: "4. Seleção", p: "Galeria online com as melhores imagens para escolha por profissional e por ambiente." },
    { h: "5. Tratamento profissional", p: "Ajuste de cor, luz e retoque natural, mantendo credibilidade clínica." },
    { h: "6. Entrega digital", p: "Alta resolução e versões web em 1 dia útil, com uso comercial liberado sem prazo." },
  ],
  gallerySlugs: [
    "retratos-de-medicos",
    "retratos-de-medicas",
    "fotos-para-clinicas-medicas",
    "ensaio-fotografico-para-dentistas",
    "fotos-profissionais-para-medicos",
    "fotografia-institucional-em-saopaulo",
  ],
  faqs: [
    { q: "Fazem fotos para médicos e clínicas?", a: "Sim, é um dos serviços mais procurados: retratos dos profissionais, equipe, ambientes e equipamentos, com imagens prontas para site, Google e redes sociais." },
    { q: "Quanto custa fotografar uma clínica?", a: "O valor depende do número de profissionais retratados, dos ambientes e do tempo de captação. Descreva a clínica pelo WhatsApp e receba a proposta em até 24 horas úteis." },
    { q: "Vocês fotografam no consultório?", a: "Sim. Levamos iluminação e fundo portátil ao consultório ou clínica em toda a Grande São Paulo, sem necessidade de estúdio." },
    { q: "Pacientes aparecem nas fotos?", a: "Somente com autorização. Na maioria dos projetos usamos a própria equipe para simular o atendimento, preservando a privacidade dos pacientes." },
    { q: "Em quanto tempo recebo as fotos?", a: "Em 1 dia útil após a seleção, por galeria online com download em alta resolução." },
    { q: "Como pedir orçamento pelo WhatsApp?", a: "Envie a especialidade, o bairro da clínica, quantos profissionais serão fotografados e a data pretendida." },
  ],
  wa: "Olá Alexandre, quero orçamento de fotos profissionais para médico/clínica em São Paulo.",
  ctaLabel: "Solicitar orçamento para clínica ou médico",
};

export const Route = createFileRoute("/fotos-profissionais-medicos")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: cfg.path }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
