import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Fotos para Advogados em SP | Alexandre Machado — Sócios e Banca";
const DESCRIPTION =
  "Retratos de sócios e da banca inteira em São Paulo, feitos no próprio escritório: postura sóbria, luz de retrato e padrão único para site, LinkedIn e imprensa. Peça orçamento.";

const cfg: ServicePageConfig = {
  path: "/fotografia-para-advogados",
  breadcrumb: "Fotos para advogados",
  eyebrow: "Jurídico",
  h1: "Fotografia profissional para advogados e escritórios de advocacia",
  subtitle:
    "Retratos profissionais e fotografias institucionais ajudam escritórios de advocacia a transmitirem seriedade, confiança e posicionamento premium.",
  intro: [
    "No jurídico, a percepção de solidez começa antes da primeira reunião. Retratos padronizados de sócios e equipe, somados a imagens reais do escritório, sustentam o posicionamento do escritório em site, LinkedIn e propostas.",
    "A produção acontece no próprio escritório, em toda a Grande São Paulo, com roteiro definido para aproveitar arquitetura, salas de reunião e ambientes de trabalho como cenário.",
  ],
  serviceType: "Fotografia para advogados e escritórios de advocacia",
  description: DESCRIPTION,
  blocks: [
    { h: "Retratos de sócios", p: "Retrato corporativo de sócios e fundadores, com luz e fundo consistentes em todo o quadro societário." },
    { h: "Fotos da equipe", p: "Retratos individuais de advogados, associados e áreas de apoio, no mesmo padrão visual." },
    { h: "Fotos para LinkedIn", p: "Enquadramento adequado ao perfil, prontos para uso em publicações, artigos e propostas." },
    { h: "Fotos para o site do escritório", p: "Imagens de páginas institucionais, áreas de atuação e página de equipe." },
    { h: "Fotos para apresentações e propostas", p: "Retratos e ambientes para pitches, RFPs e materiais comerciais." },
    { h: "Banco de imagens do escritório", p: "Acervo próprio de arquitetura, salas de reunião, biblioteca e rotina de trabalho." },
  ],
  paraQuem: [
    "Sócios e fundadores",
    "Advogados e associados",
    "Escritórios boutique e full service",
    "Departamentos jurídicos",
    "Consultores e compliance",
    "Profissionais liberais",
  ],
  ondeUsar: [
    "Site do escritório e página de equipe",
    "LinkedIn e publicações de autoridade",
    "Propostas comerciais e RFPs",
    "Rankings, guias e imprensa jurídica",
    "Apresentações institucionais",
    "Recrutamento e comunicação interna",
  ],
  comoFunciona: [
    { h: "1. Briefing rápido", p: "Você informa quantos advogados serão retratados, os ambientes e os usos previstos das imagens." },
    { h: "2. Orientação de imagem", p: "Cada profissional recebe orientação de figurino para manter coerência entre os retratos." },
    { h: "3. Direção na sessão", p: "Fotografamos por blocos de horário, com direção de pose e postura, sem interromper a operação." },
    { h: "4. Seleção", p: "Galeria online organizada por nome e por área para escolha das imagens." },
    { h: "5. Tratamento profissional", p: "Ajuste de cor, luz e retoque discreto, adequado ao tom sóbrio do setor." },
    { h: "6. Entrega digital", p: "Alta resolução e versões web em 1 a 3 dias úteis, com uso comercial liberado sem prazo." },
  ],
  gallerySlugs: [
    "fotografia-para-escritorios-de-advocacia",
    "retrato-corporativo",
    "fotografo-de-retratos-corporativos",
    "fotografo-de-arquitetura-e-interiores",
    "fotografia-institucional-em-saopaulo",
    "fotografo-de-grupos-times-e-equipes",
  ],
  faqs: [
    { q: "Fazem fotos para advogados?", a: "Sim. Produzimos retratos de sócios e equipe, além de fotos do escritório para site, LinkedIn, propostas e imprensa." },
    { q: "Quanto custa fotografar um escritório de advocacia?", a: "O orçamento é por escopo: número de advogados, ambientes e tempo de captação. Meia diária cobre sócios e parte da equipe; diária completa inclui ambientes e banco de imagens." },
    { q: "Vocês atendem no escritório?", a: "Sim, em toda a Grande São Paulo, com iluminação e fundo portátil levados ao local." },
    { q: "Fazem retratos para equipes?", a: "Sim. Padronizamos fundo, luz, enquadramento e tratamento para que todos os retratos tenham a mesma linguagem visual." },
    { q: "As fotos recebem tratamento?", a: "Sim, com ajuste de cor, luz e retoque profissional discreto, preservando a naturalidade." },
    { q: "Como pedir orçamento pelo WhatsApp?", a: "Envie o número de advogados, o bairro do escritório e a data pretendida para receber a proposta fechada." },
  ],
  wa: "Olá Alexandre, quero orçamento de fotos profissionais para o meu escritório de advocacia.",
  ctaLabel: "Solicitar orçamento para escritório",
};

export const Route = createFileRoute("/fotografia-para-advogados")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: cfg.path }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
