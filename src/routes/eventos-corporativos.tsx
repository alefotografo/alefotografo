import { createFileRoute } from "@tanstack/react-router";
import { buildMeta, SITE_ORIGIN } from "@/lib/seo";
import { ServicePage, servicePageSchema, type ServicePageConfig } from "@/components/site/ServicePage";

const TITLE = "Cobertura de Eventos Corporativos em São Paulo";
const DESCRIPTION =
  "Cobertura de eventos corporativos em São Paulo: congressos, convenções, palestras, premiações e kick-offs em foto e vídeo, com prévia no mesmo dia. Orçamento no WhatsApp.";

const cfg: ServicePageConfig = {
  path: "/eventos-corporativos",
  breadcrumb: "Eventos corporativos",
  eyebrow: "Eventos",
  h1: "Fotógrafo de eventos corporativos em São Paulo",
  subtitle:
    "Cobertura fotográfica e de vídeo para congressos, convenções, palestras, premiações, kick-offs, lançamentos e encontros de negócios, com material pronto para divulgação.",
  intro: [
    "Um evento bem produzido precisa render conteúdo depois: registro do palco, do público, do networking e dos patrocinadores garante material para redes sociais, relatório de resultados e divulgação da próxima edição.",
    "A cobertura é planejada a partir do roteiro do evento, com pontos-chave definidos antes e prévia de imagens liberada ainda durante ou logo após a realização.",
  ],
  serviceType: "Fotografia e vídeo de eventos corporativos",
  description: DESCRIPTION,
  blocks: [
    { h: "Congressos e convenções", p: "Cobertura de palco, plateia, credenciamento, estandes e ativações ao longo de todo o evento." },
    { h: "Palestras e painéis", p: "Registro de palestrantes em ação, reações do público e detalhes de cenografia e projeção." },
    { h: "Premiações e confraternizações", p: "Momentos de entrega, homenagens, fotos de grupo e registro descontraído da equipe." },
    { h: "Kick-offs e convenções de vendas", p: "Imagens de alinhamento, dinâmicas, metas e integração da equipe comercial." },
    { h: "Patrocinadores e marcas", p: "Registro de marca aplicada no evento, entregável essencial para relatório de contrapartidas." },
    { h: "Foto e vídeo na mesma diária", p: "Cobertura integrada que reduz o custo total e gera conteúdo curto para redes e anúncios." },
  ],
  paraQuem: [
    "Empresas e departamentos de marketing",
    "Agências e produtoras de eventos",
    "RH e comunicação interna",
    "Associações e entidades setoriais",
    "Patrocinadores e expositores",
    "Palestrantes e organizadores",
  ],
  ondeUsar: [
    "Redes sociais e divulgação imediata",
    "Relatório para patrocinadores e diretoria",
    "Divulgação da próxima edição",
    "Site institucional e comunicação interna",
    "Imprensa e assessoria",
    "Anúncios e conteúdo em vídeo",
  ],
  comoFunciona: [
    { h: "1. Briefing rápido", p: "Você informa data, local, duração, roteiro e o que é prioridade registrar." },
    { h: "2. Planejamento da cobertura", p: "Definimos horários, pontos de captação e necessidade de segundo fotógrafo ou vídeo." },
    { h: "3. Cobertura no evento", p: "Captação discreta, com iluminação adequada ao ambiente e atenção aos momentos-chave." },
    { h: "4. Prévia rápida", p: "Seleção de imagens liberada no mesmo dia para publicação imediata, quando necessário." },
    { h: "5. Tratamento profissional", p: "Ajuste de cor e luz em todas as imagens entregues, com padrão uniforme." },
    { h: "6. Entrega digital", p: "Galeria online com download em alta resolução e versões otimizadas para web e redes." },
  ],
  gallerySlugs: [
    "fotografo-de-eventos-corporativos",
    "eventos-corporativos",
    "fotografo-feiras-stands",
    "fotografo-festa-de-confraternizacao",
    "fotografo-de-grupos-times-e-equipes",
    "fotografo-de-drinks-coqueteis",
  ],
  faqs: [
    { q: "Fazem cobertura de eventos corporativos?", a: "Sim: congressos, convenções, palestras, premiações, kick-offs, lançamentos e confraternizações, em foto e vídeo." },
    { q: "Quanto custa a cobertura de um evento?", a: "O valor depende da duração, do número de ambientes, da necessidade de vídeo e de segundo fotógrafo. Envie data, local e horário pelo WhatsApp e receba o orçamento fechado." },
    { q: "Atendem fora de São Paulo?", a: "Sim. A base é São Paulo, com atendimento em toda a Grande São Paulo e viagens para eventos em outras cidades quando previsto no orçamento." },
    { q: "Consigo fotos no mesmo dia?", a: "Sim. Uma prévia tratada pode ser liberada durante ou logo após o evento para publicação imediata." },
    { q: "Em quanto tempo recebo o material completo?", a: "Normalmente em 1 a 3 dias úteis, por galeria online com download em alta resolução." },
    { q: "Como pedir orçamento pelo WhatsApp?", a: "Envie a data, o local, o horário de início e fim e se o evento precisa de foto, vídeo ou os dois." },
  ],
  wa: "Olá Alexandre, quero orçamento para cobertura de um evento corporativo em São Paulo.",
  ctaLabel: "Orçar cobertura de evento corporativo",
};

export const Route = createFileRoute("/eventos-corporativos")({
  head: () => ({
    meta: buildMeta({ title: TITLE, description: DESCRIPTION, path: cfg.path }),
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}${cfg.path}` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(servicePageSchema(cfg)) }],
  }),
  component: () => <ServicePage cfg={cfg} />,
});
