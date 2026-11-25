import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/catalog";
import { REDIRECTED_CATEGORY_SLUGS } from "@/lib/legacy-redirects";
import { site } from "@/data/site";
import { buildBreadcrumbList, buildMeta } from "@/lib/seo";
import { SmartImage } from "@/components/site/SmartImage";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqList } from "@/components/site/Faq";

const FAQ_ITEMS = [
  {
    q: "Quanto custa uma sessão de fotografia corporativa em São Paulo?",
    a: "Fotografia corporativa em São Paulo começa a partir de R$ 800 para retratos individuais (headshot / foto para LinkedIn), R$ 2.400 para sessões de equipe de até 10 pessoas e R$ 3.500 para cobertura de evento corporativo de 4 horas. O orçamento exato é enviado em até 1 dia útil após o briefing.",
  },
  {
    q: "Quanto tempo dura uma sessão de fotos corporativas?",
    a: "Uma sessão individual de fotografia corporativa dura entre 30 minutos e 1 hora. Para equipes corporativas, planejamos roteiros em geral de 15 a 20 minutos por colaborador para garantir qualidade e eficiência.",
  },
  {
    q: "O fotógrafo atende em toda São Paulo?",
    a: "Sim. O Alê Fotógrafo atende em toda São Paulo e Grande SP, com especialização nos bairros corporativos: Faria Lima, Itaim Bibi, Vila Olímpia, Paulista, Jardins, Moema e Brooklin.",
  },
  {
    q: "As fotos podem ser usadas em LinkedIn, site e materiais de RH?",
    a: "Sim. Todos os pacotes incluem licença de uso comercial completa — LinkedIn, site institucional, materiais de RH, apresentações e imprensa. As fotos são entregues em alta resolução e versão otimizada para web.",
  },
  {
    q: "Qual a diferença entre fotografia corporativa, institucional e retrato executivo?",
    a: "A fotografia corporativa é o guarda-chuva: retratos, equipes e ambientes de trabalho para comunicação da empresa. A institucional documenta a organização como um todo — processos, instalações, cultura. O retrato executivo é individual, focado na imagem de uma pessoa, com direção de pose e luz que transmitem autoridade. Na prática, um mesmo projeto costuma combinar os três.",
  },
  {
    q: "Como funciona o processo, do briefing à entrega?",
    a: "O processo tem quatro etapas: (1) briefing por WhatsApp ou reunião curta para alinhar objetivo, uso das fotos e logística; (2) produção no escritório da empresa, em estúdio ou em locação externa, com direção de pose; (3) tratamento e curadoria das melhores imagens; (4) entrega em galeria privada, em alta resolução e versão para web, em geral no mesmo dia ou em até 1 dia útil conforme o escopo.",
  },
  {
    q: "A empresa recebe nota fiscal e contrato de direitos de uso?",
    a: "Sim. Todo o trabalho corporativo é formalizado com nota fiscal (CNPJ), proposta com escopo e prazo definidos e termo de cessão de direitos de uso das imagens, especificando os canais em que as fotos podem ser publicadas.",
  },
  {
    q: "Com que antecedência devo agendar?",
    a: "Para retratos individuais e equipes, 5 a 10 dias de antecedência costumam ser suficientes. Para eventos corporativos e projetos com múltiplas unidades, o ideal é 15 a 30 dias — períodos de festa de fim de ano (novembro e dezembro) pedem mais antecedência.",
  },
  {
    q: "Quantas fotos cada pessoa recebe?",
    a: "Depende do escopo contratado — combinamos no briefing. Em retratos individuais, a seleção final costuma ter várias opções por pessoa (olhando para a câmera, em ângulos diferentes) para você escolher a que vai usar. Em equipes, entregamos as melhores imagens de cada pessoa e do grupo.",
  },
  {
    q: "Posso fazer as fotos em home office ou preciso ir a um estúdio?",
    a: "As duas formas funcionam. O estúdio móvel vai até o escritório da empresa (ou até a sua casa, em trabalhos individuais), e sessões em estúdio próprio ou em locação externa acontecem quando o briefing pede um fundo ou um estilo específico.",
  },
  {
    q: "Quem fica com o direito das fotos?",
    a: "A autoria das fotos é do fotógrafo (Lei 9.610/98), mas o projeto inclui um termo de cessão de direitos de uso que autoriza a empresa a publicar as imagens nos canais combinados — site, LinkedIn, imprensa, materiais de RH. Ou seja: você usa livremente onde foi contratado, e o uso fora de escopo é conversado antes.",
  },
  {
    q: "Você fotografa eventos também ou só retratos?",
    a: "Os dois. A cobertura de eventos corporativos — confraternizações, premiações, convenções, feiras — é parte do trabalho, inclusive com a opção de fotolembrança impressa na hora para os convidados. Muitos clientes combinam cobertura e retratos no mesmo evento.",
  },
  {
    q: "Você faz vídeo também?",
    a: "Sim. Além da fotografia, há produção de vídeo institucional e de eventos corporativos — o mesmo fornecedor pode entregar as fotos e o vídeo do projeto, com um único briefing. Veja as páginas de vídeo institucional e vídeo de eventos corporativos.",
  },
];

export const Route = createFileRoute("/fotografo-corporativo/")({
  head: () => ({
    meta: buildMeta({
      title: "Fotógrafo Corporativo SP | 30 Anos, Nota 4,9",
      description:
        "Fotógrafo corporativo em São Paulo com mais de 30 anos de experiência. Veja trabalhos para empresas, executivos, indústria, logística, saúde e eventos.",
      path: "/fotografo-corporativo/",
    }),
    links: [{ rel: "canonical", href: "https://alefotografo.com.br/fotografo-corporativo/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbList([
            {
              name: "Fotógrafo Corporativo São Paulo",
              item: "https://alefotografo.com.br/fotografo-corporativo",
            },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "[data-answer-block]", "main p:first-of-type"],
        }),
      },
    ],
  }),
  component: PortfolioIndex,
});

function PortfolioIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Início", to: "/" }, { label: "Fotógrafo Corporativo" }]} />
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-ember">
            Fotógrafo Corporativo
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Fotógrafo corporativo em São Paulo
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground md:text-lg" data-answer-block>
            Fotógrafo corporativo em São Paulo é o profissional que produz retratos de executivos,
            fotos de equipe, ambientes de trabalho e eventos empresariais para comunicação da
            empresa. O Alê Fotógrafo atende há mais de 30 anos empresas de todos os portes em São
            Paulo e Grande SP, com direção de pose, entrega rápida e nota fiscal — do retrato
            individual para o LinkedIn à cobertura completa de convenções.
          </p>
        </div>
      </section>

      {/* Guia: o que faz, quando contratar e como funciona */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          O que faz um fotógrafo corporativo?
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Um fotógrafo corporativo produz as imagens que uma empresa usa para se apresentar:
          retratos individuais de diretores e colaboradores, fotos de equipe, registros do ambiente
          de trabalho, cobertura de eventos internos e externos e bancos de imagens para site,
          LinkedIn, relatórios e materiais de RH. Diferente do fotógrafo de estilo ou de família, o
          trabalho corporativo é conduzido com briefing: cada imagem nasce de um uso definido — a
          foto do diretor para a apresentação a investidores não é tratada como a foto do time para
          a intranet.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A direção de pose e a padronização visual são a parte invisível do serviço. Em um dia de
          produção para 20, 50 ou 100 colaboradores, cada pessoa passa poucos minutos em frente à
          câmera, mas todas saem com o mesmo padrão de luz, fundo e tratamento — para que o site e
          o LinkedIn da empresa transmitam organização, e não um acervo de fotos tiradas em anos e
          estilos diferentes. É esse padrão que faz o visitante do site perceber a empresa como
          sólida antes mesmo de ler uma linha de texto.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Quando contratar fotografia corporativa
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
          <li>
            <strong className="text-foreground">Retratos para LinkedIn e site institucional</strong>{" "}
            — diretoria, equipe comercial e todo colaborador que representa a marca em rede social
            ou material de vendas.
          </li>
          <li>
            <strong className="text-foreground">Atualização de banco de imagens</strong> — fotos
            próprias substituem bancos de imagem genéricos, nos quais concorrentes usam as mesmas
            pessoas e os mesmos cenários.
          </li>
          <li>
            <strong className="text-foreground">Eventos corporativos</strong> — confraternizações,
            premiações, convenções, palestras e feiras, com{" "}
            <Link to="/fotolembranca/" className="text-ember underline">
              fotolembrança impressa na hora
            </Link>{" "}
            como opção para o convidado levar algo para casa.
          </li>
          <li>
            <strong className="text-foreground">Momentos de mudança</strong> — fusões, mudança de
            sede, novo posicionamento de marca, lançamento de produto ou atualização anual do
            relatório.
          </li>
          <li>
            <strong className="text-foreground">Comunicação interna</strong> — murais, intranet,
            campanhas de segurança, endomarketing e materiais de integração de novos colaboradores.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Como funciona o processo, do briefing à entrega
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground leading-relaxed">
          <li>
            <strong className="text-foreground">Briefing</strong> — uma conversa curta por WhatsApp
            ou reunião online: objetivo das fotos, onde serão usadas, quantas pessoas, onde e
            quando. A partir disso chega a proposta com escopo e valor em até 1 dia útil.
          </li>
          <li>
            <strong className="text-foreground">Produção</strong> — o estúdio vai até a empresa
            (escritório, obra, galpão ou unidade) ou a sessão acontece em estúdio ou locação
            externa. Montagem de luz e fundo leva minutos; cada pessoa é dirigida na pose, sem
            improviso.
          </li>
          <li>
            <strong className="text-foreground">Tratamento e curadoria</strong> — as melhores
            imagens passam por correção de cor e tratamento de pele natural, sem filtros que
            denunciam retoque. Todas saem com o mesmo padrão visual.
          </li>
          <li>
            <strong className="text-foreground">Entrega</strong> — galeria privada online com as
            fotos em alta resolução e versão otimizada para web e redes. Retratos individuais em
            geral saem no mesmo dia; projetos maiores, em até 1 dia útil.
          </li>
        </ol>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Contratação B2B: nota fiscal, contrato e direitos de uso
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Empresas compram fotografia corporativa com processo de compra formal — e o serviço está
          preparado para isso. Cada projeto sai com proposta detalhando escopo, prazo e entregas,
          nota fiscal no CNPJ da contratante e termo de cessão de direitos de uso que especifica
          onde as imagens podem ser publicadas (site, LinkedIn, imprensa, materiais de RH) e por
          quanto tempo. Departamentos de compras, jurídico e marketing recebem a documentação
          completa sem precisar perseguir fornecedor.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Fotografia corporativa, institucional ou retrato executivo?
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Fotografia institucional</strong> documenta a empresa
          como organização: instalações, processos, equipe em ação, cultura. Usada em relatórios
          anuais, site institucional e apresentações.{" "}
          <strong className="text-foreground">Fotografia corporativa</strong> é o guarda-chuva:
          inclui os retratos, as fotos de equipe e os ambientes que a empresa usa no dia a dia da
          comunicação. <strong className="text-foreground">Retrato executivo</strong> é individual
          e focado: uma pessoa, uma posição, uma mensagem — com direção de pose e iluminação que
          transmitem confiança e autoridade. Na prática, a maioria dos projetos combina os três:
          retratos dos diretores, fotos de equipe para o site e imagens do ambiente para as redes.
          Veja exemplos em{" "}
          <Link to="/fotografia-executiva/" className="text-ember underline">
            fotografia executiva
          </Link>{" "}
          e em{" "}
          <Link to="/fotos-corporativas/" className="text-ember underline">
            fotos corporativas para empresas
          </Link>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Banco de imagens corporativas: o ativo visual da empresa
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Empresas que fotografam uma vez por ano, cada vez com um profissional diferente, acabam
          com um acervo heterogêneo: luzes diferentes, fundos diferentes, tratamentos diferentes.
          O banco de imagens corporativo resolve isso: um único padrão visual, renovado em ciclos
          planejados, cobrindo retratos da diretoria, fotos de equipe, ambientes, eventos e
          bastidores. Quando o site, o LinkedIn dos colaboradores, o relatório anual e a apresentação
          comercial usam o mesmo padrão, a empresa transmite organização em cada ponto de contato —
          e cada nova foto agrega valor ao acervo em vez de contradizer o que já existe.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A montagem pode ser feita de uma vez ou em fases: primeiro a diretoria e as lideranças,
          depois as equipes de atendimento, por último os times internos. Essa escalonamento
          distribui o investimento ao longo do ano e mantém o acervo atualizado — importante em
          empresas com rotatividade, fusões e novas contratações. Veja a página de{" "}
          <Link to="/fotografo-corporativo/$slug/" params={{ slug: "banco-de-imagens-para-empresas" }} className="text-ember underline">
            banco de imagens para empresas
          </Link>{" "}
          para exemplos de acervos construídos em ciclos.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Um bom banco de imagens também protege a empresa contra imprevistos: quando a empresa é
          citada na imprensa, quando abre uma vaga estratégica, quando um cliente pede o portfólio
          atualizado — a imagem certa já existe, com qualidade e pronta para uso. Quem depende de
          produzir foto sob demanda para cada urgência paga o dobro: o custo da produção de última
          hora mais o custo da oportunidade perdida enquanto a foto não fica pronta.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Onde as fotos corporativas são usadas
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Cada imagem corporativa produzida atende a múltiplos canais: o retrato do executivo vai
          para o site institucional, o LinkedIn pessoal, a assinatura de e-mail e o release para
          imprensa. A foto de equipe ilustra a página "quem somos", o relatório anual e o perfil da
          empresa no LinkedIn. As fotos de ambiente entram no site, nas apresentações comerciais e
          nos materiais de recrutamento. E as imagens de evento alimentam redes sociais, intranet e
          comunicação interna. Por isso o briefing pergunta onde cada foto será usada: a imagem certa
          para o canal certo economiza produção e evita retrabalho.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Vale planejar o ciclo de uso antes da produção: a mesma sessão de retratos que atualiza o
          site alimenta a assinatura de e-mail da diretoria, o perfil do LinkedIn de cada pessoa
          fotografada, a proposta comercial da semana seguinte e o release de imprensa do
          trimestre. Quando o briefing lista todos os canais, os enquadramentos são planejados para
          servir a todos — incluindo recortes verticais para redes sociais e versões horizontais
          para capas e banners. Uma única manhã de produção rende material para meses de comunicação.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Como escolher um fotógrafo corporativo em São Paulo
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O mercado tem fotógrafos excelentes em estilos variados, e a escolha certa depende de
          critérios objetivos — não de indicação genérica. Estes são os pontos que empresas e
          agências avaliam antes de fechar:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
          <li>
            <strong className="text-foreground">Portfólio com trabalhos reais para empresas</strong>{" "}
            — não apenas retratos bonitos, mas projetos com briefing, equipe, prazo e entrega. Peça
            para ver trabalhos completos, não só a seleção de melhores fotos.
          </li>
          <li>
            <strong className="text-foreground">Direção de pose</strong> — o diferencial entre uma
            foto aceitável e uma foto que posiciona é a condução: quem nunca posou precisa de
            direção clara, gestual e de expressão. Em equipes grandes, a direção é o que garante
            consistência entre a foto da pessoa 1 e a da pessoa 100.
          </li>
          <li>
            <strong className="text-foreground">Prazo e formato de entrega</strong> — para uso
            corporativo, o prazo é parte do serviço: foto de evento que chega depois da publicação
            planejada não serve. Confirme prazo contratual e formato de entrega (galeria privada,
            alta resolução, versão web).
          </li>
          <li>
            <strong className="text-foreground">Formalização</strong> — proposta com escopo, nota
            fiscal e termo de cessão de direitos. Sem isso, o jurídico e o financeiro da empresa
            travam a contratação.
          </li>
          <li>
            <strong className="text-foreground">Logística em São Paulo</strong> — quem conhece os
            eixos corporativos da cidade resolve estacionamento, acesso de equipamento e janelas de
            horário sem sobrecarregar o RH.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Preço de fotografia corporativa: o que compõe o valor
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O valor de um projeto corporativo não é "quantas fotos saem", e sim o que está embutido
          em cada etapa: o briefing que define uso e escopo, o dia de produção com deslocamento e
          montagem de equipamento, a direção de cada pessoa fotografada, o tratamento individual das
          imagens selecionadas e a entrega organizada com licença de uso. Projetos com muitas
          pessoas diluem o custo fixo de produção — por isso o valor por pessoa cai em contratos de
          equipe grandes e sobe em retratos individuais com locação externa. A referência prática
          deste estúdio: retratos individuais a partir de R$ 800, equipes de até 10 pessoas a partir
          de R$ 2.400 e cobertura de evento corporativo de 4 horas a partir de R$ 3.500 — sempre com
          proposta detalhada antes do fechamento.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Como se preparar para o dia da sessão
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A preparação decide metade do resultado. No dia anterior: durma bem, hidrate a pele e
          separe a roupa já passada — duas opções no máximo, para não perder tempo decidindo. No
          dia: chegue com a roupa escolhida, evite estampas grandes e listras finas (que brigam com
          a câmera), e prefira tons sólidos. Quem usa óculos pode levar a armação sem lente de
          grau, se tiver. Para equipes, o ideal é distribuir um guia simples de dress code com
          antecedência —{" "}
          <Link to="/blog/decifrando-o-dress-code-masculino/" className="text-ember underline">
            este guia de dress code masculino
          </Link>{" "}
          e o{" "}
          <Link to="/blog/ensaio-feminino-corporativo-como-se-preparar-do-inicio-ao-fim/" className="text-ember underline">
            passo a passo do ensaio feminino
          </Link>{" "}
          podem ser encaminhados direto aos participantes. E lembre: direção de pose faz parte do
          serviço — ninguém precisa chegar sabendo posar.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Erros que fazem foto corporativa parecer amadora
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Os erros mais comuns se repetem em qualquer empresa: luz dura de flash direto, fundo que
          compete com o rosto, roupa com estampa que data a foto, expressão forçada de "foto de
          documento" e tratamento exagerado que deixa a pele plastificada. A soma desses detalhes é
          o que separa uma foto que comunica profissionalismo de uma que comunica pressa. Cada um
          desses pontos é evitado com técnica e direção — nenhum exige equipamento exótico, exige
          critério. O post{" "}
          <Link to="/blog/5-erros-que-fazem-sua-foto-de-perfil-parecer-amadora/" className="text-ember underline">
            5 erros que fazem sua foto parecer amadora
          </Link>{" "}
          detalha cada um com exemplos práticos.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Fotografia corporativa e comunicação interna
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Além do uso externo, as imagens corporativas têm papel central na comunicação interna:
          campanhas de segurança do trabalho com rostos reais da empresa, murais de reconhecimento
          com fotos padronizadas, materiais de integração de novos colaboradores que mostram o time
          que a pessoa vai encontrar, e registros de eventos internos que reforçam a cultura
          organizacional. Fotos de campanhas internas com colaboradores reais geram identificação —
          ninguém se reconhece em um banco de imagem genérico. Para empresas com operações
          industriais, a fotografia de campo e de EPI faz parte desse pacote de comunicação interna.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Fotografia corporativa por segmento
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Cada segmento tem sua dinâmica de produção. Escritórios de advocacia e consultoria pedem
          retratos formais com fundo controlado. Clínicas e hospitais precisam de fotos que
          transmitam acolhimento sem perder o técnico. Indústrias e operadores logísticos exigem
          produção em campo, com EPI e segurança do trabalho respeitados. Restaurantes e marcas de
          alimentação vivem de fotografia de produto e ambiente. Escolas e instituições de ensino
          documentam gerações de alunos. O portfólio abaixo está organizado por essas
          especialidades — cada galeria mostra trabalhos reais do segmento, com a quantidade de
          fotos do acervo.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Do retrato individual ao evento de mil pessoas
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A escala do projeto muda a operação, não o padrão visual. Um retrato individual para o
          LinkedIn é conduzido em 30 minutos. Uma equipe de 50 pessoas é organizada em blocos de 15
          a 20 minutos por colaborador, com cenário montado uma única vez. Um evento corporativo de
          grande porte pode contar com equipe de fotógrafos trabalhando em ambientes simultâneos.
          Em todos os casos, o processo é o mesmo: briefing, produção com direção, tratamento e
          entrega formalizada. Para entender como padronizar o acervo da sua equipe, vale ler{" "}
          <Link to="/blog/por-que-padronizar-as-fotos-da-sua-equipe/" className="text-ember underline">
            por que padronizar as fotos da equipe
          </Link>{" "}
          e{" "}
          <Link to="/blog/ensaio-corporativo-externo-ou-em-estudio/" className="text-ember underline">
            ensaio corporativo: externo ou em estúdio
          </Link>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Retrato corporativo para LinkedIn: o caso mais comum
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O pedido mais frequente em fotografia corporativa é o retrato para LinkedIn — e ele tem
          regras próprias. A foto de perfil do LinkedIn aparece pequena (quase um selo), então o
          rosto precisa ocupar a maior parte do enquadramento, com fundo limpo e contraste suficiente
          para ser reconhecido em um feed. A foto de capa, maior e horizontal, é onde dá para mostrar
          contexto: o escritório, a cidade, o time. Para executivos e profissionais de vendas, o
          retrato do LinkedIn é o primeiro contato do cliente — ele abre ou fecha a conversa antes do
          primeiro texto.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Um detalhe prático: o LinkedIn exibe a foto de perfil em círculo e em miniaturas pequenas
          no feed, nos comentários e nas mensagens. Por isso o enquadramento do retrato para
          LinkedIn é mais fechado que o retrato editorial: ombros para cima, rosto grande no quadro
          e sem elementos importantes nas bordas, que o corte circular pode comer. Quando a mesma
          sessão alimenta site, cartão e LinkedIn, cada canal recebe o recorte certo — é para isso
          que a entrega inclui alta resolução e versões otimizadas. O serviço de{" "}
          <Link to="/foto-profissional-para-linkedin/" className="text-ember underline">
            foto profissional para LinkedIn
          </Link>{" "}
          cobre os dois formatos, com direção de pose para quem não está acostumado a ser
          fotografado.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Confraternizações e fim de ano: o pico da fotografia corporativa
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Entre novembro e dezembro, São Paulo vive a temporada de festas de fim de ano empresariais
          — e é quando a fotografia corporativa aparece em força: a cobertura do evento, as fotos de
          grupo por departamento, o registro da premiação e, cada vez mais, a{" "}
          <Link to="/fotolembranca/" className="text-ember underline">
            fotolembrança impressa na hora
          </Link>
          , em que cada convidado sai com a foto revelada na mão, com a marca do evento. Para essas
          datas, a agenda fecha semanas antes: se a sua empresa está planejando a confraternização,
          trate a fotografia como qualquer outro fornecedor do evento e reserve com 30 a 60 dias.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Como é a entrega: galeria privada, alta resolução e versão web
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Todas as fotos são entregues em galeria privada online, organizada por pessoa, por
          departamento ou por tema — o formato depende do projeto. Cada imagem sai em dois
          arquivos: alta resolução (para impressão, imprensa e materiais gráficos) e versão
          otimizada para web e redes sociais (peso reduzido sem perda visível). A galeria fica
          disponível para a empresa baixar e distribuir internamente, e o prazo de entrega está no
          contrato: retratos em geral no mesmo dia, projetos maiores em até 1 dia útil após a
          produção.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Glossário rápido para quem vai contratar
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
          <li>
            <strong className="text-foreground">Headshot</strong> — o retrato de rosto e ombros,
            usado em LinkedIn, site e assinatura de e-mail.
          </li>
          <li>
            <strong className="text-foreground">Briefing</strong> — a reunião de alinhamento antes
            da produção: objetivo, uso, público, logística e estilo das fotos.
          </li>
          <li>
            <strong className="text-foreground">Banco de imagens</strong> — o acervo visual
            organizado da empresa, construído em ciclos de produção.
          </li>
          <li>
            <strong className="text-foreground">Tratamento</strong> — correção de cor, ajuste de
            pele e acabamento das fotos selecionadas. Tratamento profissional é invisível: ninguém
            percebe que houve retoque.
          </li>
          <li>
            <strong className="text-foreground">Cessão de direitos de uso</strong> — o documento
            que autoriza a empresa a publicar as fotos nos canais combinados.
          </li>
          <li>
            <strong className="text-foreground">Estúdio móvel</strong> — a estrutura de luz e fundo
            que monta no escritório do cliente, sem deslocar os colaboradores.
          </li>
          <li>
            <strong className="text-foreground">CWV (Core Web Vitals)</strong> — métricas de
            velocidade do Google; relevantes porque suas fotos precisam carregar rápido no site da
            empresa — por isso a entrega inclui versão otimizada para web.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Guia rápido: qual serviço para cada objetivo
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          <strong className="text-foreground">"Preciso de uma foto boa para o LinkedIn"</strong> →
          retrato individual, 30 minutos,{" "}
          <Link to="/foto-profissional/" className="text-ember underline">
            foto profissional em São Paulo
          </Link>
          . <strong className="text-foreground">"Nosso site está com fotos antigas e cada uma de um
          jeito"</strong> → projeto de padronização com estúdio móvel no escritório.{" "}
          <strong className="text-foreground">"Vamos fazer a festa de fim de ano"</strong> →
          cobertura de evento, com ou sem fotolembrança.{" "}
          <strong className="text-foreground">"Somos uma indústria e precisamos de foto de
          operação"</strong> → produção em campo com segurança.{" "}
          <strong className="text-foreground">"Somos uma clínica e precisamos transmitir
          confiança"</strong> → fotografia para clínicas, com retratos da equipe e ambientes. Se o
          seu objetivo não está na lista, o briefing resolve em uma conversa curta.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          30 anos de fotografia corporativa em São Paulo
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Experiência em fotografia corporativa não é um número de marketing — é o que resolve o
          problema que ninguém avisa no briefing. Saber posar uma pessoa tímida em dois minutos.
          Saber que a luz da sala de reunião de determinado prédio da Faria Lima muda às 16h e
          planejar a sequência das fotos em volta disso. Saber que um evento de 800 pessoas tem
          três momentos que não podem ser perdidos — e estar posicionado antes de cada um. Três
          décadas fotografando empresas em São Paulo significam um acervo atravessando gerações de
          profissionais: retratos de diretores que hoje são conselheiros, festas de firma que hoje
          são convenções anuais, times que fotografei com dez pessoas e reencontrei com trezentas.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Esse histórico se reflete na forma de trabalhar: sem improviso, com processo definido em
          cada etapa e respeito pelo tempo da empresa. Quem já fotografou milhares de profissionais
          sabe que o dia de produção precisa correr como um cronograma de escritório, não como uma
          sessão criativa aberta — cada minuto de parada de um colaborador é um custo para o RH. A
          rapidez aliada ao padrão é o que mantém empresas fotografando com o mesmo profissional
          ano após ano. Conheça a trajetória completa na página{" "}
          <Link to="/quem-e-o-ale/" className="text-ember underline">
            quem é o Alê
          </Link>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          O que muda quando a empresa investe em fotografia profissional
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A diferença aparece primeiro no site institucional: a página "quem somos" deixa de ser
          uma fileira de retratos heterogêneos e passa a ser um conjunto coeso, com o mesmo fundo,
          a mesma luz e o mesmo tratamento. Depois ela aparece no LinkedIn: quando todos os
          colaboradores da empresa usam fotos do mesmo padrão, o perfil de cada um reforça a marca
          em vez de competir com ela. Depois nos materiais comerciais: propostas e apresentações
          com fotos reais da equipe fecham mais conversas do que as mesmas fotos de banco de
          imagens que os concorrentes também usam. E por fim na rotina do RH: campanhas de
          recrutamento, comunicação interna e eventos passam a ter imagem própria sempre à mão, sem
          correr atrás de foto no último minuto.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O investimento tem vida útil longa: um acervo corporativo bem produzido dura de dois a
          três anos antes de precisar de atualização — e a atualização, quando vem, é incremental
          (só as novas contratações e os novos cenários), não uma reforma completa. Comparado com
          qualquer outra linha do orçamento de marketing — mídia paga, que some quando o investimento
          para, ou evento, que dura uma noite — a fotografia corporativa é o ativo que continua
          rendendo todos os dias, em todos os canais, sem custo recorrente.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Como pedir orçamento (e o que responder em 1 dia útil)
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O orçamento de fotografia corporativa não é tabela de preço — é proposta construída sobre o
          seu briefing. O caminho mais curto: envie pelo WhatsApp (1) o que precisa fotografar
          (retratos, equipe, evento, ambiente), (2) quantas pessoas ou quantas horas de evento,
          (3) onde acontece — endereço ou bairro — e (4) quando, com a data ideal e a data limite.
          Com esses quatro pontos, a proposta chega em até 1 dia útil, com escopo detalhado: o que
          está incluído, o que é entregue, em quanto tempo e por quanto. Sem surpresa depois: o
          valor fechado é o valor cobrado.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Checklist do dia da sessão para equipes
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Para o RH ou marketing que organiza o dia de fotos da equipe, este é o checklist que
          faz a produção correr sem fricção:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
          <li>Reserve uma sala ou área livre de trânsito (2m x 3m já permitem a montagem do estúdio móvel);</li>
          <li>Envie o guia de looks aos participantes com 2 dias de antecedência — tons sólidos, roupa passada, sem estampa grande;</li>
          <li>Organize a ordem das pessoas por disponibilidade, não por hierarquia: quem tem reunião marcada passa no horário dele;</li>
          <li>Avise os participantes de que a direção de pose faz parte do serviço — ninguém precisa saber posar;</li>
          <li>Defina quem recebe e distribui a galeria depois da entrega (comunicação ou RH);</li>
          <li>Em caso de evento, alinhe com a produção do espaço os horários de montagem e desmontação do set.</li>
        </ul>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Com esses pontos resolvidos, uma equipe de 30 pessoas fotografa em uma manhã — cada
          colaborador perde menos de 20 minutos do expediente. O checklist completo, com detalhes
          de look e cuidados pessoais, está no post{" "}
          <Link to="/blog/o-que-levar-para-o-dia-do-ensaio-corporativo/" className="text-ember underline">
            o que levar para o dia do ensaio corporativo
          </Link>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Primeira vez contratando fotografia corporativa?
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Se a sua empresa nunca contratou um fotógrafo corporativo, estas são as dúvidas que todos
          têm — e as respostas diretas. <strong className="text-foreground">"Vai atrapalhar o
          expediente?"</strong> Não: o estúdio móvel monta no escritório e cada pessoa passa poucos
          minutos. <strong className="text-foreground">"E se alguém não gostar da foto?"</strong> A
          seleção inclui várias opções por pessoa, e a direção de pose existe justamente para que a
          foto aprovada seja a que a pessoa gostaria de usar. <strong className="text-foreground">
          "Precisamos decidir tudo antes?"</strong> Não: o briefing define o essencial (objetivo,
          data, local) e os detalhes de estilo são conduzidos no dia. <strong className="text-foreground">
          "Podemos começar pequeno?"</strong> Sim — muitos acervos começam com a diretoria e crescem
          por ciclos. A porta de entrada pode ser uma única manhã de retratos.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Por fim, uma observação que pouca gente faz antes de contratar: fotografia corporativa é
          um serviço de confiança, não de catálogo. Você não está comprando arquivos — está
          contratando alguém que vai conduzir o seu time, o seu diretor e a sua marca em frente à
          câmera, no meio do expediente, com prazo e responsabilidade. Por isso portfólio completo,
          processo formal e histórico verificável pesam mais na escolha do que qualquer tabela de
          preço. O resto — luz, equipamento, tratamento — é a parte que o profissional resolve para
          você não precisar pensar nela.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Produções especiais: aéreas, feiras e stands
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Alguns projetos corporativos pedem operações fora do padrão. A fotografia aérea
          corporativa — de empresas, galpões, frotas e empreendimentos — mostra escala que nenhuma
          foto de chão alcança: a logística inteira de um centro de distribuição em um único
          enquadramento, a frota alinhada vista de cima, o empreendimento em relação à cidade. As
          imagens aéreas ilustram sites institucionais, apresentações para investidores e materiais
          de venda de operações logísticas e industriais. Veja exemplos na galeria de{" "}
          <Link to="/fotografo-corporativo/$slug/" params={{ slug: "fotos-aereas" }} className="text-ember underline">
            fotos aéreas
          </Link>
          .
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Feiras e stands têm dinâmica própria: a janela de produção é curta, o espaço é apertado e
          os momentos de maior movimento definem o valor das fotos. Cobrir um stand em feira como a
          ABRAFID ou a Feira de Logística exige presença nos horários de pico, rapidez de
          configuração entre ambientes e entrega ágil — muitas empresas publicam as fotos ainda
          durante o evento. Já a produção industrial em campo exige outro cuidado: segurança do
          trabalho, EPI e condução junto aos protocolos da planta — a foto certa sem parar a
          operação. Estas três especialidades — aérea, feiras e industrial — completam o espectro da
          fotografia corporativa e aparecem no portfólio abaixo com trabalhos reais de cada tipo.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold md:text-3xl">
          Regiões atendidas em São Paulo
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O atendimento cobre toda a cidade de São Paulo e Grande SP, com produção frequente nos
          eixos corporativos da cidade — Faria Lima, Itaim Bibi, Vila Olímpia, Avenida Paulista,
          Jardins, Moema, Brooklin, Berrini — e deslocamento para unidades no ABC, Osasco, Barueri
          e região. Para empresas com várias unidades, o estúdio móvel monta o mesmo cenário em
          cada endereço, em dias diferentes, mantendo o padrão visual unificado entre sedes. Para
          encontrar o trabalho por especialidade, explore as páginas de{" "}
          <Link to="/fotografo-corporativo/$slug/" params={{ slug: "fotografo-de-eventos-corporativos" }} className="text-ember underline">
            eventos corporativos
          </Link>
          ,{" "}
          <Link to="/fotografo-corporativo/$slug/" params={{ slug: "retrato-corporativo" }} className="text-ember underline">
            retrato corporativo
          </Link>{" "}
          e{" "}
          <Link to="/fotografo-corporativo/$slug/" params={{ slug: "banco-de-imagens-para-empresas" }} className="text-ember underline">
            banco de imagens para empresas
          </Link>{" "}
          no portfólio abaixo.
        </p>
      </section>

      {/* Portfólio por especialidade */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <h2 className="mb-8 font-display text-2xl font-semibold md:text-3xl">
          Portfólio por especialidade
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories
            .filter((c) => !REDIRECTED_CATEGORY_SLUGS.has(c.slug))
            .map((c, i) => (
              <Link
                key={c.slug}
                to="/fotografo-corporativo/$slug/"
                params={{ slug: c.slug }}
                className="group relative block overflow-hidden rounded-sm bg-surface ring-1 ring-border transition-[box-shadow] duration-200 hover:ring-ember [content-visibility:auto] [contain-intrinsic-size:auto_360px]"
              >
                <div
                  className={`relative ${i % 6 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden`}
                >
                  {c.cover ? (
                    <SmartImage
                      src={c.cover}
                      alt={c.title}
                      baseWidth={768}
                      priority={i < 3}
                      width={1200}
                      height={i % 6 === 0 ? 1500 : 900}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="h-full w-full transform-gpu object-cover transition-[opacity,transform] duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface to-background text-muted-foreground">
                      Sem imagem
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight">{c.title}</h3>
                  {c.image_count > 0 && (
                    <p className="mt-1 text-xs text-muted-foreground">{c.image_count} fotos</p>
                  )}
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* FAQ visível */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Perguntas frequentes sobre fotografia corporativa
          </h2>
          <div className="mt-8">
            <FaqList items={FAQ_ITEMS} headingLevel="h3" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Não encontrou seu segmento?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Atendemos demandas customizadas. Fale com {site.name}.
          </p>
          <Link
            to="/contato/"
            className="mt-6 inline-flex rounded-sm bg-ember px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-ember-glow"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </>
  );
}
