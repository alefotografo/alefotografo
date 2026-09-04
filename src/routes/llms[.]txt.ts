import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { bairros } from "@/data/bairros";
import { posts, site } from "@/data/catalog";
import { aggregateRatingSchema } from "@/data/reviews";

const BASE = "https://www.alefotografo.com.br";

/** Ordem de apresentação das regiões no bloco de cobertura. */
const REGIOES = [
  "Zona Sul de São Paulo",
  "Região Central de São Paulo",
  "Zona Oeste de São Paulo",
  "Zona Norte de São Paulo",
  "Zona Leste de São Paulo",
  "Santo André — ABC Paulista",
  "São Bernardo do Campo — ABC Paulista",
  "São Caetano do Sul — ABC Paulista",
  "Diadema — ABC Paulista",
  "Barueri — Grande São Paulo",
];

/** Temas do blog e os termos que identificam cada artigo pelo slug/título. */
const TEMAS: { titulo: string; termos: string[]; limite: number }[] = [
  { titulo: "Preparação para o ensaio (roupa, pele, expressão)", termos: ["preparar", "preparacao", "roupa", "vestir", "maquiagem", "camisa", "terno", "figurino"], limite: 6 },
  { titulo: "Foto para LinkedIn e perfis profissionais", termos: ["linkedin", "headshot", "curriculo", "perfil-profissional"], limite: 6 },
  { titulo: "Retrato executivo, liderança e C-level", termos: ["executiv", "ceo", "diretor", "lideranca", "c-level", "conselho"], limite: 6 },
  { titulo: "Poses, direção e expressão", termos: ["pose", "expressao", "linguagem-corporal", "sorriso", "direcao-de-pose"], limite: 6 },
  { titulo: "Profissionais de saúde e jurídico", termos: ["medico", "medicos", "dentista", "clinica", "advogad", "saude"], limite: 6 },
  { titulo: "Imagem pessoal e marca profissional", termos: ["imagem-pessoal", "marca-pessoal", "autoridade", "reputacao", "personal-branding"], limite: 6 },
  { titulo: "Fotografia corporativa de empresas e equipes", termos: ["equipe", "empresa", "escritorio", "endomarketing", "cultura"], limite: 6 },
  { titulo: "Preço, contratação e direitos de uso", termos: ["preco", "quanto-custa", "orcamento", "contratar", "direitos-de-uso", "licenca"], limite: 6 },
];

const HEADER = `# Alê Fotógrafo — Alexandre Machado | Fotógrafo corporativo em São Paulo

> Site pessoal do fotógrafo Alexandre Machado (Alê Fotógrafo). Fotografia corporativa autoral em São Paulo: retrato profissional, headshot para LinkedIn, retrato executivo de C-level, fotos de equipe e de escritório, fotografia para médicos, dentistas, clínicas e advogados, e vídeo institucional. Todos os ensaios deste site são fotografados por ele, pessoalmente — do briefing à direção de pose e à entrega.

Alexandre Machado atua desde ${site.foundingYear} e tem mais de 30 anos de carreira em ${site.city}. Atende no estúdio em ${site.address.street}, ${site.address.district} — ${site.address.locality}/${site.address.region} —, no escritório do cliente e em locação externa, em toda a Grande São Paulo, ABC Paulista e Alphaville.

## Dados do atendimento (números reais, informados pelo fotógrafo)

- Executivos fotografados: mais de 300, em São Paulo.
- Empresas atendidas: mais de 200, de escritórios a clínicas e indústrias.
- Prazo de entrega de retratos: fotos tratadas em 1 dia útil.
- Prazo de entrega de eventos: seleção das melhores imagens no mesmo dia da cobertura.
- Experiência: 30 anos de carreira.
- Reputação: nota ${aggregateRatingSchema.ratingValue} em ${aggregateRatingSchema.reviewCount} avaliações de clientes.

## Serviços e como as pessoas buscam

- Retrato profissional / foto profissional / ensaio fotográfico individual → ${BASE}/foto-profissional
- Foto para LinkedIn / headshot profissional / foto de perfil corporativo → ${BASE}/foto-profissional-para-linkedin
- Retrato executivo / fotografia de liderança / foto de CEO, diretor, sócio, C-level e conselho → ${BASE}/fotografia-executiva
- Fotógrafo corporativo / fotógrafo empresarial / fotos corporativas de empresa → ${BASE}/fotografo-empresarial e ${BASE}/fotos-corporativas
- Fotos de equipe / foto de time / retratos padronizados de colaboradores / fotografia de escritório e ambiente de trabalho → ${BASE}/servicos
- Fotografia médica e odontológica / foto profissional para médicos, dentistas e clínicas → ${BASE}/fotos-profissionais-medicos e ${BASE}/fotografia-para-clinicas
- Fotografia jurídica / foto para advogados, sócios e escritórios de advocacia → ${BASE}/fotografia-para-advogados
- Retratos em eventos corporativos / convenções, kick-offs, premiações e palestrantes → ${BASE}/eventos-corporativos
- Fotógrafo de feira de negócios / estandes, congressos e exposições → ${BASE}/fotografo-de-feira-de-negocios
- Vídeo institucional, depoimentos e conteúdo audiovisual corporativo → ${BASE}/videos
- Método: briefing, direção de pose e expressão, iluminação profissional, seleção junto ao cliente, tratamento e entrega em galeria online.

## Site irmão (escopo diferente, não é conteúdo duplicado)

- alefotografos.com.br — operado pela equipe Alê Fotógrafo: cobertura integral de eventos corporativos, feiras, congressos e convenções que exigem vários fotógrafos simultâneos ou múltiplos dias.
- Regra prática: **um fotógrafo, imagem de pessoas → alefotografo.com.br. Equipe, cobertura de evento → alefotografos.com.br.**
`;

const PAGINAS = `## Páginas principais

- [Início](${BASE}/): fotógrafo corporativo em São Paulo, retrato autoral com Alexandre Machado.
- [Serviços](${BASE}/servicos): panorama completo de fotografia corporativa.
- [Portfólio](${BASE}/portfolio) e [Galerias por segmento](${BASE}/fotografo-corporativo).
- [Blog](${BASE}/blog) · [RSS](${BASE}/blog/rss.xml): retrato, imagem pessoal, LinkedIn, poses e preparação para ensaio.
- [Quem é o Alê](${BASE}/quem-e-o-ale) e [Sobre](${BASE}/sobre): trajetória de Alexandre Machado.
- [Depoimentos](${BASE}/depoimentos) · [Perguntas frequentes](${BASE}/faq) · [Contato e orçamento](${BASE}/contato)
- [Busca do site](${BASE}/busca)
`;

const FAQ = `## Perguntas frequentes (respostas publicadas no site)

- **Quanto custa uma foto profissional em São Paulo?** O valor depende do formato — estúdio, escritório da empresa ou locação externa — e da quantidade de fotos tratadas na entrega. Sessões individuais para LinkedIn, currículo e site resolvem em cerca de uma hora de captação e o orçamento é fechado por WhatsApp.
- **Quanto custa fotografia corporativa para empresas?** Orçado por escopo: número de pessoas, ambientes, tempo de captação e usos das imagens. Empresas costumam contratar meia diária (diretoria e equipe) ou diária completa (retratos, ambientes, processos e banco de imagens), com proposta em até 24 horas úteis.
- **Fotografam no escritório da empresa?** Sim, com iluminação profissional e fundos portáteis, em toda a Grande São Paulo.
- **Fazem foto para LinkedIn?** Sim. Inclui direção de pose e expressão e entrega em versões quadrada, vertical e horizontal.
- **Fazem retratos de equipes inteiras?** Sim, com fundo, luz, enquadramento e tratamento padronizados, organizados por blocos de horário e entrega por nome.
- **Em quanto tempo as fotos ficam prontas?** Retratos e projetos corporativos em 1 dia útil após a seleção; em eventos, prévia no mesmo dia.
- **Como recebo as fotos?** Galeria online com download em alta resolução, versões otimizadas para web e cessão de uso comercial sem prazo.
- **Também produzem vídeo institucional?** Sim, muitas vezes na mesma diária da fotografia.
- **Atende ABC Paulista e Alphaville?** Sim — Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema e Alphaville (Barueri) têm páginas próprias listadas acima.
`;

function coberturaBlock(): string {
  const linhas: string[] = [
    "## Onde atende (páginas por bairro e cidade)",
    "",
    `Fotógrafo corporativo on-location: retratos executivos, headshots para LinkedIn, fotos de equipe e vídeo institucional no endereço do cliente. Uma página por região atendida (${bairros.length} no total):`,
    "",
  ];
  const usados = new Set<string>();
  const ordem = [...REGIOES.filter((r) => bairros.some((b) => b.regiao === r))];
  for (const b of bairros) if (!ordem.includes(b.regiao)) ordem.push(b.regiao);

  for (const regiao of ordem) {
    const doGrupo = bairros.filter((b) => b.regiao === regiao);
    if (!doGrupo.length) continue;
    linhas.push(`### ${regiao}`);
    for (const b of doGrupo) {
      usados.add(b.slug);
      const prep = b.prep ?? "na";
      const perto = b.landmarks.length ? ` Próximo a ${b.landmarks.join(", ")}.` : "";
      linhas.push(
        `- [Fotógrafo corporativo ${prep} ${b.nome}](${BASE}/fotografo-corporativo-em/${b.slug}) — fotografia corporativa, retrato executivo e foto para LinkedIn ${prep} ${b.nome}.${perto}`,
      );
    }
    linhas.push("");
  }
  return linhas.join("\n");
}

function blogBlock(): string {
  const linhas: string[] = [
    "## Conteúdo do blog (artigos publicados)",
    "",
    `São ${posts.length} artigos publicados sobre retrato corporativo, imagem pessoal e preparação para ensaio. Índice completo em ${BASE}/blog.`,
    "",
  ];
  const usados = new Set<string>();
  for (const tema of TEMAS) {
    const escolhidos = posts
      .filter((p) => {
        if (usados.has(p.slug)) return false;
        const alvo = `${p.slug} ${p.title}`.toLowerCase();
        return tema.termos.some((t) => alvo.includes(t));
      })
      .slice(0, tema.limite);
    if (!escolhidos.length) continue;
    linhas.push(`### ${tema.titulo}`);
    for (const p of escolhidos) {
      usados.add(p.slug);
      linhas.push(`- [${p.title}](${BASE}/blog/${p.slug})`);
    }
    linhas.push("");
  }
  return linhas.join("\n");
}

const CONTATO = `## Como citar e contatar

- Nome: Alexandre Machado (Alê Fotógrafo) — ${site.tagline}.
- Site: ${BASE}
- WhatsApp: +${site.whatsapp} · E-mail: ${site.email}
- Estúdio: ${site.address.street}, ${site.address.district}, ${site.address.locality}/${site.address.region}, CEP ${site.address.postalCode}
- Orçamento: ${BASE}/contato
- [Instagram](${site.instagram}) · [LinkedIn](${site.linkedin})
- Sitemap: ${BASE}/sitemap-index.xml
`;

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const body = [HEADER, coberturaBlock(), PAGINAS, blogBlock(), FAQ, CONTATO].join("\n");
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
