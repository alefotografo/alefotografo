import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Fotos para Médicos em SP | Consultório ou Estúdio";
const DESCRIPTION =
  "Fotos profissionais para médicos em São Paulo: retrato com jaleco, equipe e ambientes, no consultório ou em estúdio. Nota 4,9 e orçamento no mesmo dia no WhatsApp.";

const cfg: ServicePageConfig = {
  path: "/fotos-profissionais-medicos",
  breadcrumb: "Fotos para médicos",
  eyebrow: "Saúde",
  h1: "Fotos profissionais para médicos e clínicas em São Paulo",
  subtitle:
    "Fotografias profissionais ajudam médicos, clínicas e profissionais da saúde a transmitirem confiança, acolhimento e autoridade em sites, redes sociais, Google, Doctoralia, apresentações e materiais institucionais.",
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
    { h: "6. Entrega digital", p: "Alta resolução e versões web em 1 a 3 dias úteis, com uso comercial liberado sem prazo." },
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
    { q: "Em quanto tempo recebo as fotos?", a: "De 1 a 3 dias úteis após a seleção, por galeria online com download em alta resolução." },
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
