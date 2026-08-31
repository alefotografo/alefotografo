// Título e descrição de busca escritos à mão para cada post do blog.
//
// Motivo: 127 dos 142 títulos originais passam de 60 caracteres e apareciam
// cortados com "…" no Google. Aqui cada artigo recebe um título curto com a
// palavra-chave real na frente e uma descrição específica, feita para ganhar
// o clique. O H1 e a URL do post NÃO mudam — o capital orgânico das URLs já
// rankeadas é preservado.
//
// Sem override, o fallback do próprio post (título + descrição) continua
// valendo.

export interface PostSeo {
  title: string;
  description: string;
}

export const postSeo: Record<string, PostSeo> = {
  "linkedin-como-criar-um-perfil-campeao-e-bombar-na-rede-de-negocios": {
    title: "LinkedIn: Como Criar um Perfil Campeão",
    description:
      "Foto, headline, resumo e palavras-chave: o passo a passo para montar um perfil de LinkedIn que recrutadores encontram e clientes levam a sério.",
  },
  "linkedin-e-emprego-7-dicas-de-como-usar-essa-rede-social-para-conseguir-um": {
    title: "LinkedIn para Conseguir Emprego: 7 Dicas",
    description:
      "Como usar o LinkedIn para ser achado por recrutadores: perfil completo, foto profissional, rede ativa e candidaturas que realmente recebem resposta.",
  },
  "fotografo-da-dica-de-como-a-fotografia-de-comidas-e-bebidas-pode-te-ajudar": {
    title: "Fotografia de Comidas e Bebidas: Por Que Vale",
    description:
      "Bar, restaurante ou evento: veja como a foto profissional de pratos e drinks aumenta o valor percebido do cardápio e o movimento nas redes sociais.",
  },
  "12-dicas-de-como-planejar-sua-festa-de-confraternizacao-fotografo-de-eventos": {
    title: "Festa de Confraternização: 12 Dicas de Planejamento",
    description:
      "Data, local, orçamento, fornecedores e registro fotográfico: o roteiro completo para organizar a confraternização da empresa sem correria de última hora.",
  },
  "dicas-de-cursos-e-aulas-online-para-voce-se-inspirar-e-capacitar": {
    title: "Cursos e Aulas Online para se Capacitar",
    description:
      "Seleção de cursos e aulas online, muitos gratuitos, para quem quer se atualizar em fotografia, comunicação e imagem profissional sem sair de casa.",
  },
  "jpeg-ou-png-vantagens-e-desvantagens-dos-dois-formatos-de-imagens": {
    title: "JPEG ou PNG: Qual Formato Usar em Cada Caso",
    description:
      "Peso, transparência, qualidade e perda de dados: entenda as diferenças entre JPEG e PNG e saiba qual formato usar em site, apresentação e impressão.",
  },
  "fotografo-5-poses-para-retrato-corporativo": {
    title: "5 Melhores Poses para Retrato Corporativo",
    description:
      "Postura, ângulo do ombro, queixo e mãos: cinco poses que funcionam no retrato corporativo e melhoram sua imagem no LinkedIn e nos materiais da empresa.",
  },
  "fotografo-explica-porque-sua-empresa-deve-obter-fotos-tiradas-com-drones": {
    title: "Fotos com Drone: Por Que Sua Empresa Deve Ter",
    description:
      "Fotos aéreas mostram estrutura, escala e localização como nenhuma imagem no chão consegue. Veja onde usar imagens de drone na comunicação da empresa.",
  },
  "banco-de-imagens-a-importancia-de-desenvolver-um-para-sua-empresa": {
    title: "Banco de Imagens Próprio: Por Que Sua Empresa Precisa",
    description:
      "Ter fotos próprias reduz custo de comunicação, dá coerência à marca e acaba com a dependência de imagens genéricas de stock. Entenda como montar o seu.",
  },
  "7-dicas-para-maximizar-seu-perfil-no-linkedin": {
    title: "7 Dicas para Maximizar Seu Perfil no LinkedIn",
    description:
      "Ajustes simples que fazem seu perfil aparecer mais nas buscas de recrutadores: foto, título, palavras-chave, recomendações e frequência de publicação.",
  },
  "entenda-qual-a-importancia-da-identidade-visual-para-o-seu-negocio": {
    title: "Identidade Visual: Por Que Ela Importa no Negócio",
    description:
      "Cor, tipografia e imagem coerentes fazem a empresa ser reconhecida e lembrada. Entenda o papel da identidade visual e onde a fotografia entra nela.",
  },
  "fotografo-dica-como-a-luz-pode-transformar-suas-fotos": {
    title: "Como a Luz Transforma Suas Fotos",
    description:
      "Direção, intensidade e qualidade da luz definem se a foto valoriza ou estraga. Aprenda a ler a luz disponível e usar isso a favor da sua imagem.",
  },
  "profissional-liberal-conheca-7-dicas-para-superar-os-desafios-na-carreira": {
    title: "Profissional Liberal: 7 Dicas para a Carreira",
    description:
      "Captação de clientes, precificação, imagem e disciplina: sete formas de enfrentar os principais desafios de quem trabalha por conta própria.",
  },
  "fotografo-da-dicas-de-3-formas-de-destacar-seus-eventos": {
    title: "3 Formas de Destacar Seus Eventos",
    description:
      "Registro profissional, conteúdo em tempo real e material pós-evento: três formas de fazer o seu evento render muito além do dia em que acontece.",
  },
  "5-fatores-que-influenciam-o-seu-perfil-no-linkedin-fotografo-alexandre-machado": {
    title: "5 Fatores que Influenciam Seu Perfil no LinkedIn",
    description:
      "Retrato corporativo, título, resumo, rede e atividade: os cinco fatores que decidem se o seu perfil transmite ou não autoridade profissional.",
  },
  "os-6-melhores-aplicativos-para-editar-videos-pelo-celular": {
    title: "6 Melhores Aplicativos para Editar Vídeo no Celular",
    description:
      "Cortes, legendas, filtros e trilha direto do celular: seis aplicativos de edição de vídeo que dão acabamento profissional ao conteúdo das suas redes.",
  },
  "personal-branding-como-estabelecer-sua-marca-pessoal": {
    title: "Personal Branding: Como Construir Sua Marca Pessoal",
    description:
      "Marca pessoal não é autopromoção: é coerência entre o que você faz, fala e mostra. Veja como construir a sua e onde a imagem profissional entra.",
  },
  "uso-de-drones-e-eventos-corporativos-tem-feito-toda-a-diferenca": {
    title: "Drone em Eventos Corporativos: O Que Muda",
    description:
      "Imagens aéreas mostram público, estrutura e dimensão do evento em um único quadro. Veja como o drone amplia o resultado da cobertura corporativa.",
  },
  "7-lugares-incriveis-para-tirar-fotos-profissionais-em-sao-paulo": {
    title: "7 Lugares para Fotos Profissionais em São Paulo",
    description:
      "Locações reais em São Paulo que funcionam como fundo de foto profissional: luz, contexto urbano e discrição para retratos corporativos e de LinkedIn.",
  },
  "como-manter-sua-imagem-profissional-em-tempos-de-home-office": {
    title: "Imagem Profissional no Home Office: Como Manter",
    description:
      "Fundo, luz, enquadramento e postura em reuniões remotas. Veja como manter uma imagem profissional consistente trabalhando de casa.",
  },
  "fotografo-ensina-que-foto-profissional-aparece-14-vezes-mais-do-que-uma-foto-amadora-no-linkedin": {
    title: "Foto Profissional Aparece 14x Mais no LinkedIn",
    description:
      "Perfis com foto profissional recebem muito mais visualizações do que perfis com foto amadora. Entenda o porquê e o que muda no seu retrato.",
  },
  "fotografo-de-retrato-corporativo": {
    title: "Retratos Corporativos da Diretoria da ASUS",
    description:
      "Bastidores do ensaio de retrato corporativo com executivos da ASUS: direção de pose, luz controlada e padrão único para toda a diretoria.",
  },
  "retratos-da-equipe-de-colaboradores": {
    title: "Retratos da Equipe de Colaboradores da Meltwater",
    description:
      "Como foi padronizar os retratos de toda a equipe da Meltwater em São Paulo: mesma luz, mesmo enquadramento e agilidade para não travar a operação.",
  },
  "instituto-rauen": {
    title: "Instituto Rauen: Ensaio Institucional",
    description:
      "Registro institucional do Instituto Rauen: ambientes, equipe e atendimento fotografados para site, redes sociais e materiais de comunicação.",
  },
  "o-que-vestir-sessao-de-fotos-corporativa": {
    title: "O Que Vestir na Sessão de Fotos Corporativa",
    description:
      "Cores, estampas, camadas e acessórios: o guia de vestuário para orientar sua equipe antes do ensaio e evitar retrabalho por roupa errada.",
  },
  "retrato-posado-ou-fotografia-documental": {
    title: "Retrato Posado ou Fotografia Documental?",
    description:
      "Posado e documental servem a objetivos diferentes. Veja quando usar cada linguagem e como combiná-las sem quebrar a identidade visual da empresa.",
  },
  "manual-de-uso-de-imagem-corporativa": {
    title: "Manual de Uso de Imagem Corporativa",
    description:
      "Acervo sem regra vira acervo distorcido. Veja como um manual simples orienta áreas e fornecedores a usarem as fotos sem quebrar a identidade da marca.",
  },
  "calibracao-perfil-de-cor-monitores": {
    title: "Calibração de Monitor e Perfil de Cor na Prática",
    description:
      "A mesma foto muda de cor em cada tela e trava aprovações. Entenda calibração, perfis de cor e como padronizar o que a equipe enxerga.",
  },
  "quanto-tempo-leva-projeto-fotografia-corporativa": {
    title: "Quanto Tempo Leva um Projeto de Fotografia",
    description:
      "Briefing, produção, captação, seleção e tratamento: os prazos reais de cada etapa da fotografia corporativa para você planejar sem atropelo.",
  },
  "fotografia-integracao-pos-fusao-aquisicao": {
    title: "Fotografia na Integração Pós-Fusão",
    description:
      "Depois da fusão, a imagem das empresas continua dividida. Veja como a fotografia unifica a identidade e simboliza a integração para dentro e para fora.",
  },
  "digitalizacao-restauracao-acervo-historico-empresa": {
    title: "Digitalização e Restauração do Acervo da Empresa",
    description:
      "Fotos antigas se deterioram em caixas e álbuns. Veja como digitalizar e restaurar esse acervo transforma memória em material de marca utilizável hoje.",
  },
  "fotografia-entrega-no-cliente-antes-e-depois": {
    title: "Fotografia de Entrega: o Antes e Depois em B2B",
    description:
      "Registrar o resultado entregue na casa do cliente cria a prova mais persuasiva que existe. Veja como estruturar o antes e depois em projetos B2B.",
  },
  "fotografia-processo-tecnico-metodo": {
    title: "Fotografia de Processo Técnico: Mostre Seu Método",
    description:
      "Processos bem fotografados comunicam método, rigor e competência — e sustentam o seu preço. Veja o que vale registrar dentro da sua operação.",
  },
  "como-medir-retorno-fotografia-corporativa": {
    title: "Como Medir o Retorno da Fotografia Corporativa",
    description:
      "Fotografia parece imensurável, mas há indicadores concretos. Veja como reportar à diretoria o resultado do investimento em imagem sem inventar número.",
  },
  "onde-publicar-suas-fotos-pontos-de-contato": {
    title: "Onde Publicar as Fotos da Sua Empresa",
    description:
      "Empresas usam uma fração das imagens que produzem. Conheça os pontos de contato esquecidos que deveriam receber fotografia própria e multiplicar o uso.",
  },
  "fotos-mudam-de-cor-na-impressao-cmyk": {
    title: "Por Que Suas Fotos Mudam de Cor ao Imprimir",
    description:
      "Imagens aprovadas na tela decepcionam no papel. Entenda RGB, CMYK e prova de cor para o impresso sair como a equipe aprovou.",
  },
  "fotografia-ambientes-com-clientes-privacidade-lgpd": {
    title: "Fotografia com Clientes: Privacidade e LGPD",
    description:
      "Fotografar ambientes com clientes exige cuidado com privacidade e dados pessoais. Veja como planejar a produção e evitar risco jurídico na publicação.",
  },
  "fotografia-grande-formato-banners-backdrops": {
    title: "Fotografia para Grande Formato: Banners e Painéis",
    description:
      "Ampliar uma foto comum para três metros revela todos os defeitos. Veja os requisitos técnicos de imagens para banners, backdrops e painéis de estande.",
  },
  "fotografia-comunicacao-interna-murais-paredes": {
    title: "Fotografia para Comunicação Interna e Murais",
    description:
      "Murais e ambientação interna comunicam cuidado ou descuido. Veja como imagens próprias fortalecem cultura, reconhecimento e orgulho de pertencer.",
  },
  "imagem-topo-do-site-hero-conversao": {
    title: "Imagem do Topo do Site: os 3 Segundos Decisivos",
    description:
      "A imagem de topo é o elemento mais visto do site. Veja como escolher e produzir a foto que segura o visitante e aumenta a conversão da página.",
  },
  "fotografia-divulgacao-eventos-inscricoes": {
    title: "Fotografia para Divulgação de Eventos",
    description:
      "Arte genérica reduz inscrições. Veja como imagens próprias de edições anteriores e retratos de palestrantes aumentam a conversão da divulgação.",
  },
  "retratos-para-conteudo-autoral-artigos": {
    title: "Retratos para Conteúdo Autoral e Artigos",
    description:
      "Conteúdo autoral ilustrado com foto de banco perde autoridade. Veja como retratos próprios sustentam a credibilidade do que a sua empresa publica.",
  },
  "fotografia-criativos-anuncio-performance": {
    title: "Fotografia para Criativos de Anúncio",
    description:
      "Foto institucional e foto de anúncio têm lógicas opostas. Veja como produzir imagens feitas para campanha e reduzir o custo por resultado.",
  },
  "shot-list-lista-de-fotos-sessao-corporativa": {
    title: "Shot List: a Lista de Fotos da Sessão Corporativa",
    description:
      "Sessão sem shot list gera lacunas caras no acervo. Veja como montar a lista de imagens necessárias antes da produção e aproveitar cada minuto do dia.",
  },
  "foto-funciona-em-miniatura-tela-pequena": {
    title: "Sua Foto Funciona em Miniatura? Faça o Teste",
    description:
      "Imagens complexas viram borrão em tela pequena e perdem alcance. Veja como produzir fotos legíveis na miniatura sem perder qualidade no tamanho grande.",
  },
  "espaco-negativo-fotos-com-area-para-texto": {
    title: "Espaço Negativo: Fotos com Área para Texto e Logo",
    description:
      "Fotos sem área livre travam o trabalho do design. Veja como o espaço negativo planejado na captação viabiliza capas, campanhas e materiais institucionais.",
  },
  "fotografia-campanhas-seguranca-epi-prevencao": {
    title: "Fotografia para Campanhas de Segurança e EPI",
    description:
      "Campanha de segurança com imagem genérica é ignorada. Veja como fotografar a própria operação aumenta a adesão às práticas de prevenção no dia a dia.",
  },
  "fotografia-certificacoes-conformidade-qualidade": {
    title: "Fotografia de Certificações e Conformidade",
    description:
      "Certificação vira selo esquecido no rodapé. Veja como fotografar estrutura e processos transforma conformidade em argumento comercial de verdade.",
  },
  "registro-fotografico-periodico-de-obra": {
    title: "Registro Fotográfico Periódico de Obra",
    description:
      "O acompanhamento periódico documenta a evolução da obra, tranquiliza compradores e vira portfólio de execução. Veja como estruturar esse registro.",
  },
  "portfolio-visual-projetos-entregues-concorrencias": {
    title: "Portfólio Visual de Projetos Entregues",
    description:
      "Em concorrência, atestado técnico é só texto. Veja como o portfólio fotográfico de projetos entregues comprova capacidade e diferencia a sua proposta.",
  },
  "fotografia-produtos-digitais-software-mockup": {
    title: "Fotografia para Produtos Digitais e Software",
    description:
      "Software não tem o que fotografar, mas precisa de imagem. Veja como device shots e contexto de uso criam valor percebido para produtos digitais.",
  },
  "fotografia-conceitual-corporativa-abstrato": {
    title: "Fotografia Conceitual Corporativa",
    description:
      "Segurança, agilidade e escala são conceitos invisíveis. Veja como a fotografia conceitual traduz atributos abstratos em imagem própria e memorável.",
  },
  "fotografia-materiais-integracao-onboarding": {
    title: "Fotografia para Onboarding e Integração",
    description:
      "Material de integração com imagem própria transmite cuidado e acelera o pertencimento do novo colaborador. Veja o que produzir para o seu onboarding.",
  },
  "fotografia-um-dia-na-vida-recrutamento": {
    title: "Ensaio 'Um Dia na Vida' para Recrutamento",
    description:
      "Mostrar a rotina real aumenta candidaturas qualificadas e reduz desistências. Veja como produzir um ensaio de rotina para atrair o candidato certo.",
  },
  "fotografia-golden-hour-noturna-corporativa": {
    title: "Golden Hour e Fotografia Noturna Corporativa",
    description:
      "O horário da captação muda o impacto das imagens externas. Entenda por que golden hour e blue hour valorizam fachadas, estruturas e sedes de empresa.",
  },
  "foto-e-video-juntos-producao-integrada": {
    title: "Foto e Vídeo Juntos: Produção Integrada",
    description:
      "Produzir foto e vídeo separados custa mais e gera materiais que não conversam. Veja as vantagens de planejar as duas entregas numa única produção.",
  },
  "fotografia-visita-tecnica-clientes-planta": {
    title: "Fotografia de Visita Técnica de Clientes",
    description:
      "Registrar a visita do cliente à sua operação gera conteúdo de relacionamento, prova social e material comercial. Veja como aproveitar esse momento.",
  },
  "30-anos-fotografia-corporativa-licoes": {
    title: "30 Anos de Fotografia Corporativa: o Que Importa",
    description:
      "Experiência se traduz em previsibilidade, leitura de contexto e capacidade de resolver imprevisto. O que três décadas ensinam sobre imagem de empresa.",
  },
  "fotografia-inauguracao-marcos-empresa": {
    title: "Fotografia de Inaugurações e Marcos da Empresa",
    description:
      "Inaugurações, aniversários e marcos são registro histórico da empresa. Veja por que a cobertura profissional desses momentos rende material por anos.",
  },
  "variedade-visual-redes-sociais-corporativas": {
    title: "Variedade Visual nas Redes Sociais da Empresa",
    description:
      "Repetir sempre a mesma imagem cansa o público e derruba o engajamento. Veja como construir variedade visual sem perder a identidade da marca.",
  },
  "fotografia-convencao-de-vendas": {
    title: "Fotografia de Convenção de Vendas",
    description:
      "A convenção reúne o time uma vez por ano. Veja como a cobertura fotográfica preserva a energia do encontro e sustenta a motivação nos meses seguintes.",
  },
  "luz-escritorio-fotos-internas-corporativas": {
    title: "Luz de Escritório: Por Que as Fotos Internas Falham",
    description:
      "Escritório mistura luz de janela e lâmpada, gerando fotos escuras ou estouradas. Entenda o desafio técnico e como ele é resolvido em produção profissional.",
  },
  "fotografia-treinamentos-workshops-corporativos": {
    title: "Fotografia de Treinamentos e Workshops",
    description:
      "Registrar capacitações prova o investimento em pessoas, aumenta a adesão aos próximos programas e alimenta o employer branding. Veja o que fotografar.",
  },
  "fotografo-pontual-ou-parceiro-continuo": {
    title: "Fotógrafo Pontual ou Parceiro Contínuo?",
    description:
      "Trocar de fotógrafo a cada projeto custa consistência e tempo. Veja o que muda quando o profissional já conhece a empresa, o time e os seus padrões.",
  },
  "fotografia-premiacoes-cerimonias-corporativas": {
    title: "Fotografia de Premiações e Cerimônias",
    description:
      "Em premiação, o momento decisivo dura segundos e não se repete. Veja como a cobertura profissional garante as imagens que valorizam o reconhecimento.",
  },
  "rebranding-fotografia-nova-identidade": {
    title: "Rebranding e Fotografia: a Marca Nova Precisa de Fotos",
    description:
      "Rebranding com imagem antiga não convence. Veja por que a fotografia precisa acompanhar a nova identidade para o reposicionamento realmente pegar.",
  },
  "tour-virtual-360-fotografia-imersiva": {
    title: "Tour Virtual 360 da Sua Estrutura",
    description:
      "O tour 360 leva cliente e candidato à sua estrutura sem sair da mesa, encurtando o ciclo de decisão. Veja quando esse formato faz sentido de verdade.",
  },
  "fotografia-acoes-sociais-esg-impacto": {
    title: "Fotografia de Ações Sociais e ESG",
    description:
      "Ação social mal fotografada parece propaganda e gera desconfiança. Veja como registrar impacto real com dignidade, contexto e credibilidade.",
  },
  "fotos-google-perfil-empresa-conversao": {
    title: "Fotos no Perfil da Empresa no Google",
    description:
      "O Perfil da Empresa no Google é a primeira vitrine de quem busca você. Veja como fotos profissionais aumentam cliques, ligações e visitas ao local.",
  },
  "fotografia-estande-feiras-eventos-setor": {
    title: "Fotografia de Estande em Feiras de Negócios",
    description:
      "Estande custa caro e desaparece em três dias. Veja como o registro fotográfico transforma a feira em prova, relacionamento e material de prospecção.",
  },
  "fotografia-embalagem-packaging-marca": {
    title: "Fotografia de Embalagem e Packaging",
    description:
      "A foto profissional revela textura, acabamento e detalhe que justificam o investimento em embalagem. Veja o que muda na produção desse tipo de imagem.",
  },
  "enquadramento-multiplos-formatos-redes-sociais": {
    title: "Enquadramento para Vertical, Quadrado e Horizontal",
    description:
      "Fotos produzidas sem pensar nos formatos ficam cortadas nas redes e no site. Veja como planejar o enquadramento para usar a mesma imagem em todo canal.",
  },
  "packshot-fundo-branco-ecommerce-b2b": {
    title: "Packshot em Fundo Branco para E-commerce B2B",
    description:
      "O packshot padroniza o catálogo, transmite qualidade e aumenta a conversão no e-commerce B2B. Veja o que muda na produção desse padrão de imagem.",
  },
  "cor-fotografia-corporativa-identidade-visual": {
    title: "Cor na Fotografia Corporativa e Identidade Visual",
    description:
      "Cor inconsistente quebra a identidade da marca. Entenda como o tratamento de cor alinha fotografia e branding em site, impresso e redes sociais.",
  },
  "fotografia-palestrantes-speakers-corporativos": {
    title: "Fotografia para Palestrantes e Speakers",
    description:
      "Organizadores contratam palestrante pela imagem. Veja quais fotos todo speaker precisa ter para transmitir autoridade e fechar mais convites.",
  },
  "produto-evolui-imagem-desatualizada-catalogo": {
    title: "Catálogo Desatualizado: o Custo da Imagem Antiga",
    description:
      "O produto evolui e a imagem fica para trás, gerando expectativa errada e retrabalho comercial. Veja como manter o acervo alinhado ao produto atual.",
  },
  "fotografia-press-kit-assessoria-imprensa": {
    title: "Fotografia para Press Kit e Assessoria de Imprensa",
    description:
      "Um press kit com imagens profissionais garante que a imprensa publique a sua empresa bem. Veja o que todo kit de imprensa precisa ter pronto.",
  },
  "apresentacao-comercial-imagem-material-vendas": {
    title: "Apresentação Comercial: o Papel da Imagem",
    description:
      "Apresentação visualmente pobre enfraquece o discurso comercial. Veja como imagens próprias fortalecem a proposta e aumentam a confiança do cliente.",
  },
  "retrato-executivo-lideranca-feminina": {
    title: "Retrato Executivo de Liderança Feminina",
    description:
      "Retrato de executiva exige direção que transmita autoridade e naturalidade, longe de estereótipo. Veja o que faz um retrato de liderança funcionar.",
  },
  "vagas-poucos-candidatos-qualificados-imagem": {
    title: "Por Que Suas Vagas Atraem Poucos Candidatos",
    description:
      "Vaga sem material visual compete em desvantagem por talento qualificado. Veja como a imagem própria aumenta a atratividade das suas oportunidades.",
  },
  "fotografia-conselho-administracao-board": {
    title: "Fotografia do Conselho de Administração",
    description:
      "Retratos padronizados do conselho reforçam a percepção de governança e solidez para investidores e stakeholders. Veja como produzir esse material.",
  },
  "gargalo-marketing-falta-de-imagem-propria": {
    title: "Quando a Campanha Para por Falta de Imagem",
    description:
      "Time de marketing perde velocidade sem imagem própria. Veja como um acervo planejado destrava campanhas e reduz a dependência de banco de imagens.",
  },
  "fotografia-coworking-espacos-compartilhados": {
    title: "Fotografia para Coworking e Espaços Compartilhados",
    description:
      "Quem escolhe um coworking compra ambiente e pertencimento. Veja como a fotografia transmite o clima do espaço e aumenta visitas e contratos.",
  },
  "imagem-do-ceo-ativo-da-empresa": {
    title: "A Imagem do CEO como Ativo da Empresa",
    description:
      "A imagem pública do líder influencia parcerias, convites e captação. Veja por que o posicionamento visual do CEO é decisão estratégica, não vaidade.",
  },
  "fotografia-franquias-padronizacao-imagem": {
    title: "Fotografia para Franquias: Padronizar a Rede",
    description:
      "Cada unidade produzindo seu próprio material descaracteriza a marca. Veja como um padrão fotográfico protege a identidade em toda a rede de franquias.",
  },
  "fotografia-casos-de-sucesso-depoimentos": {
    title: "Fotografia para Casos de Sucesso e Depoimentos",
    description:
      "Depoimento só em texto convence pouco. Veja como a fotografia de clientes reais transforma prova social em argumento de venda concreto e confiável.",
  },
  "fotografia-cooperativas-associacoes": {
    title: "Fotografia para Cooperativas e Associações",
    description:
      "Cooperativa se sustenta em pertencimento. A fotografia mostra cooperados e impacto real, fortalecendo o vínculo e a comunicação institucional.",
  },
  "fotografo-corporativo-especializacao-importa": {
    title: "Por Que a Especialização do Fotógrafo Importa",
    description:
      "Fotografia corporativa exige repertório próprio: ambiente difícil, agenda apertada e sensibilidade empresarial. Entenda por que especialização importa.",
  },
  "fotografia-concessionarias-setor-automotivo": {
    title: "Fotografia para Concessionárias e Setor Automotivo",
    description:
      "A foto profissional aumenta o valor percebido do veículo e acelera a venda. Veja o que muda entre a foto de pátio e a imagem feita com produção.",
  },
  "custo-real-contratar-fotografia-menor-preco": {
    title: "O Custo Real de Contratar Fotografia Barata",
    description:
      "Contratar pelo menor preço costuma gerar retrabalho, atraso e material inutilizável. Entenda o custo total de uma produção fotográfica malsucedida.",
  },
  "fotografia-laboratorios-industria-farmaceutica": {
    title: "Fotografia para Laboratórios e Farmacêutica",
    description:
      "Imagem profissional em laboratório comunica rigor, controle de qualidade e confiança. Veja como registrar ambientes controlados sem quebrar protocolo.",
  },
  "com-que-frequencia-atualizar-fotos-da-empresa": {
    title: "Com Que Frequência Atualizar as Fotos da Empresa",
    description:
      "Foto desatualizada gera ruído e prejudica a credibilidade. Veja os sinais objetivos de que chegou a hora de renovar o acervo visual da sua empresa.",
  },
  "fotografia-varejo-redes-de-lojas": {
    title: "Fotografia para Varejo e Redes de Lojas",
    description:
      "Rede de lojas precisa de imagem padronizada em todos os pontos. Veja como a fotografia profissional fortalece a marca no varejo e nas campanhas.",
  },
  "fotografia-despesa-ou-investimento-orcamento": {
    title: "Fotografia é Despesa ou Investimento?",
    description:
      "Fotografia costuma ser tratada como despesa e cortada primeiro. Veja como apresentar a imagem como ativo com vida útil longa e defender o orçamento.",
  },
  "fotografia-instituicoes-ensino-educacao-corporativa": {
    title: "Fotografia para Instituições de Ensino",
    description:
      "Mostrar a experiência de aprendizado, e não só o prédio, atrai alunos e participantes. Veja o que registrar em escolas e educação corporativa.",
  },
  "representatividade-imagens-corporativas": {
    title: "Representatividade nas Imagens Corporativas",
    description:
      "Falar de diversidade e usar imagem que não representa ninguém gera incoerência. Veja como construir um acervo visual coerente com o time real.",
  },
  "fotografia-energia-infraestrutura-usinas": {
    title: "Fotografia para Energia e Infraestrutura",
    description:
      "Usinas, subestações e grandes ativos exigem imagem à altura. Veja como registrar magnitude e rigor técnico para clientes, órgãos e investidores.",
  },
  "storytelling-visual-fotografia-corporativa": {
    title: "Storytelling Visual na Fotografia Corporativa",
    description:
      "Foto isolada informa; sequência conta história. Veja como estruturar uma narrativa visual que faz a marca ser lembrada e não apenas vista.",
  },
  "fotografia-agronegocio-corporativo": {
    title: "Fotografia para o Agronegócio Corporativo",
    description:
      "O agro moderno é tecnologia e escala, mas costuma ser comunicado com imagem genérica. Veja como traduzir essa operação em fotografia própria.",
  },
  "seo-de-imagens-fotos-site-corporativo": {
    title: "SEO de Imagens: Fotos que Ajudam o Site a Ranquear",
    description:
      "Imagem mal otimizada derruba a velocidade e o SEO do site. Veja como preparar fotos corporativas para performance, acessibilidade e busca por imagem.",
  },
  "fotografia-logistica-centros-distribuicao": {
    title: "Fotografia para Logística e Centros de Distribuição",
    description:
      "No B2B logístico, o cliente precisa ver a estrutura antes de confiar volume. Veja como fotografar CD e frota para fortalecer propostas comerciais.",
  },
  "calendario-producao-fotografica-anual": {
    title: "Calendário de Produção Fotográfica Anual",
    description:
      "Planejar as imagens ao longo do ano acaba com o improviso e alinha o material às campanhas. Veja como montar o seu calendário de produção.",
  },
  "fotografia-construtoras-canteiro-de-obras": {
    title: "Fotografia para Construtoras e Canteiros de Obra",
    description:
      "A imagem de obra prova capacidade de execução a clientes, investidores e parceiros. Veja como registrar canteiro e entrega com força comercial.",
  },
  "organizacao-acervo-fotografico-corporativo": {
    title: "Organização de Acervo Fotográfico Corporativo",
    description:
      "Empresa perde imagem que já pagou por falta de organização. Veja como estruturar um acervo fotográfico acessível e realmente útil para o time.",
  },
  "fotografia-bancos-fintechs-instituicoes-financeiras": {
    title: "Fotografia para Bancos, Fintechs e Gestoras",
    description:
      "No setor financeiro, imagem comunica segurança. Veja como a fotografia profissional transmite solidez e proximidade em bancos, fintechs e gestoras.",
  },
  "selecao-aprovacao-fotos-corporativas": {
    title: "Seleção e Aprovação de Fotos Corporativas",
    description:
      "A etapa de seleção costuma travar projetos. Veja como organizar a aprovação interna e escolher as imagens com critério, agilidade e menos reunião.",
  },
  "fotografia-startups-empresas-tecnologia": {
    title: "Fotografia para Startups e Empresas de Tecnologia",
    description:
      "Startup com imagem própria atrai talento e investidor com mais facilidade. Veja o acervo essencial para empresas de tecnologia em crescimento.",
  },
  "como-equipe-relaxar-frente-camera": {
    title: "Como Fazer Sua Equipe Relaxar na Frente da Câmera",
    description:
      "Expressão dura em foto corporativa é problema de direção, não de quem é fotografado. Veja o que faz uma equipe parecer natural diante da câmera.",
  },
  "fotografia-consultorias-auditorias": {
    title: "Fotografia para Consultorias e Auditorias",
    description:
      "Consultoria vende conhecimento, algo invisível. A fotografia dá forma visual à competência e ao método, aumentando a confiança do cliente na proposta.",
  },
  "como-preparar-empresa-sessao-fotos-corporativa": {
    title: "Como Preparar a Empresa para a Sessão de Fotos",
    description:
      "A preparação define o resultado do ensaio corporativo. Veja o checklist do que organizar antes do fotógrafo chegar e aproveitar cada minuto do dia.",
  },
  "fotografia-escritorios-advocacia": {
    title: "Fotografia para Escritórios de Advocacia",
    description:
      "Escritório com fotografia profissional transmite solidez antes da primeira reunião. Veja o que registrar em sócios, equipe e ambiente do escritório.",
  },
  "fotografo-interno-ou-profissional-contratado": {
    title: "Fotógrafo Interno ou Profissional Contratado?",
    description:
      "Alguém do time fotografando ajuda no dia a dia, mas não substitui produção profissional em material estratégico. Veja onde traçar essa linha.",
  },
  "guia-estilo-visual-consistencia-imagem-empresa": {
    title: "Guia de Estilo Visual para as Fotos da Empresa",
    description:
      "Luz, cor, enquadramento e tom padronizados dão consistência à marca em todos os canais. Veja como construir o guia de estilo visual da sua empresa.",
  },
  "como-comparar-orcamentos-fotografia-corporativa": {
    title: "Como Comparar Orçamentos de Fotografia",
    description:
      "Orçamentos de fotografia variam muito e nem sempre comparam a mesma coisa. Veja os critérios que revelam o que está realmente incluso em cada proposta.",
  },
  "direitos-uso-licenca-imagem-corporativa": {
    title: "Direitos de Uso e Licença de Imagem Corporativa",
    description:
      "Entender licença de uso e autorização de imagem evita problema jurídico com as fotos da empresa. Veja o que todo gestor precisa saber antes de publicar.",
  },
  "retrato-ambientado-executivo-contexto": {
    title: "Retrato Ambientado: o Executivo no Contexto Real",
    description:
      "O retrato ambientado mostra o executivo no ambiente de trabalho e conta o que o fundo neutro não conta. Veja quando usar cada um dos dois formatos.",
  },
  "pos-producao-retoque-profissional-nao-e-filtro": {
    title: "Pós-Produção: Por Que Filtro Não é Tratamento",
    description:
      "Filtro automático não substitui tratamento profissional, que é o que dá acabamento de marca à foto corporativa. Entenda a diferença na prática.",
  },
  "fotografia-bastidores-behind-the-scenes-redes": {
    title: "Fotografia de Bastidores para as Redes Sociais",
    description:
      "O conteúdo de bastidores mostra o lado humano da empresa, gera engajamento e aproxima o público. Veja por que esse material funciona tão bem.",
  },
  "fotografia-fachada-arquitetura-sede-corporativa": {
    title: "Fotografia de Fachada e Arquitetura Corporativa",
    description:
      "A imagem da fachada e dos espaços transmite solidez e cuidado, valorizando a marca no site, nos materiais e na recepção de clientes. Veja como produzir.",
  },
  "fotografia-relatorio-anual-materiais-institucionais": {
    title: "Fotografia para Relatório Anual e Institucionais",
    description:
      "Fotografia profissional dá nível ao relatório anual e transmite a solidez da empresa a investidores e parceiros. Veja o que produzir para esse material.",
  },
  "fotografia-equipe-comercial-confianca-proposta": {
    title: "Fotografia da Equipe Comercial na Proposta",
    description:
      "Mostrar o rosto da equipe na proposta reduz o risco percebido e aumenta a confiança no fechamento. Veja por que a foto certa faz diferença na venda.",
  },
  "headshots-equipe-escala-50-colaboradores-um-dia": {
    title: "Headshots de Equipe: 50+ Pessoas em Um Dia",
    description:
      "É possível padronizar headshots de 50 ou mais colaboradores em um único dia, com a mesma luz e estética, sem travar a operação. Veja como funciona.",
  },
  "fotografia-pitch-deck-apresentacoes-investidores": {
    title: "Fotografia para Pitch Deck e Investidores",
    description:
      "Imagem própria dá credibilidade ao pitch deck e às apresentações para investidores. Veja por que foto de banco enfraquece a sua narrativa.",
  },
  "fotografia-lifestyle-corporativa-produto-em-uso": {
    title: "Fotografia Lifestyle: o Produto Sendo Usado",
    description:
      "A imagem lifestyle mostra produto e serviço no mundo real, gerando identificação que a foto posada não gera. Veja a diferença entre os dois caminhos.",
  },
  "30-poses-para-fotos-profissionais": {
    title: "30+ Poses para Fotos Profissionais: Guia Completo",
    description:
      "Mais de 30 poses para foto profissional, com direção por perfil: retrato corporativo, LinkedIn, advogados, médicos, executivos e fotos de equipe.",
  },
  "retratos-executivos-linkedin-guia-definitivo": {
    title: "Retratos Executivos para LinkedIn: Guia Definitivo",
    description:
      "Da pose à iluminação e ao tratamento: como produzir um retrato executivo que comunica autoridade, confiança e atualidade no perfil do LinkedIn.",
  },
  "retrato-corporativo-percepacao-negocio": {
    title: "Retrato Corporativo e a Percepção do Negócio",
    description:
      "Por que diretores e C-levels precisam de retrato corporativo atualizado e o que muda nas decisões de clientes quando a foto passa credibilidade.",
  },
  "fotografia-medica-clinicas-hospitais": {
    title: "Fotografia Médica para Clínicas e Hospitais",
    description:
      "Como fotografar médicos, equipes e ambientes clínicos respeitando as diretrizes do CFM e construindo a autoridade que faz o paciente marcar consulta.",
  },
  "fotografia-imobiliaria-corporativa-aceleracao-vendas": {
    title: "Fotografia Imobiliária Corporativa Acelera Vendas",
    description:
      "Imóvel com fotografia profissional vende mais rápido. Para incorporadoras e imobiliárias, isso significa fluxo de caixa e menos tempo de estoque.",
  },
  "foto-perfil-linkedin-gestor-contratos": {
    title: "A Foto do LinkedIn do Seu Gestor Custa Contratos",
    description:
      "Uma foto de perfil profissional pode decidir entre fechar ou perder um negócio no LinkedIn. Veja por que isso acontece e como resolver ainda hoje.",
  },
  "fotografia-cultura-organizacional": {
    title: "Fotografia de Cultura Organizacional",
    description:
      "Ensaios de cultura interna atraem os talentos certos, fortalecem o employer branding e dão veracidade à comunicação institucional. Veja como produzir.",
  },
  "fotografia-eventos-corporativos-briefing": {
    title: "Briefing de Fotografia de Eventos Corporativos",
    description:
      "Briefing ruim é a causa número 1 de decepção com fotógrafo de evento. Veja o checklist que garante imagens que contam a história do seu evento.",
  },
  "retratos-corporativos-advogados-contadores": {
    title: "Retratos Corporativos para Advogados e Contadores",
    description:
      "Como sócios de escritórios jurídicos e contábeis devem se posicionar visualmente no LinkedIn, no site e nos materiais de captação de clientes.",
  },
  "fotografia-escritorios-contabilidade": {
    title: "Fotografia para Escritórios de Contabilidade",
    description:
      "Contador com imagem profissional transmite credibilidade e ganha mais contratos. Veja como a fotografia funciona na captação de clientes contábeis.",
  },
  "como-escolher-fotografo-corporativo": {
    title: "Como Escolher um Fotógrafo Corporativo",
    description:
      "Sete critérios objetivos para contratar um fotógrafo corporativo em São Paulo sem se decepcionar com o resultado, o prazo ou o uso das imagens.",
  },
  "retrato-corporativo-diretores-ceos": {
    title: "Retrato Corporativo para Diretores e CEOs",
    description:
      "A foto do líder comunica cultura, valores e ambição da organização, muito além da aparência. Veja como acertar no retrato de diretoria e CEO.",
  },
  "banco-de-imagens-corporativo": {
    title: "Banco de Imagens Corporativo Próprio",
    description:
      "Um banco de imagens próprio reduz custo de comunicação, melhora a coerência visual e elimina a dependência de fotos genéricas de stock. Veja como montar.",
  },
  "fotografia-hotelaria-imagens-que-enchem-quartos": {
    title: "Fotografia de Hotelaria que Enche Quartos",
    description:
      "Hotel com fotografia profissional gera mais reserva direta e depende menos das OTAs. Veja o que faz uma imagem de hotelaria realmente converter.",
  },
  "fotografia-produto-corporativo-lancamento": {
    title: "Fotografia de Produto para Lançamento Corporativo",
    description:
      "Em B2B e produto premium, a imagem do lançamento define a percepção de valor. Veja o que muda entre uma foto técnica e uma foto de campanha.",
  },
  "fotografia-industrial-fabrica-operacao": {
    title: "Fotografia Industrial e de Fábrica em Operação",
    description:
      "Mostrar a operação com imagem profissional aumenta a credibilidade com clientes B2B, investidores e parceiros — sem parar a linha de produção.",
  },
  "quanto-custa-sessao-fotos-corporativas": {
    title: "Quanto Custa uma Sessão de Fotos Corporativas",
    description:
      "Faixas de preço, o que influencia o orçamento de fotografia corporativa em São Paulo e como evitar comparar propostas que não são equivalentes.",
  },
  "quanto-custa-sessao-fotos-corporativas-sao-paulo": {
    title: "Preço de Fotos Corporativas em São Paulo",
    description:
      "Tabela orientativa de preços para fotografia corporativa em São Paulo: o que está incluído em cada faixa e por que o barato quase sempre sai caro.",
  },
  "fotografia-em-preto-e-branco-como-tirar-fotos-lindas": {
    title: "Fotografia em Preto e Branco: 7 Dicas Práticas",
    description:
      "Como fazer fotos em preto e branco marcantes: leitura de luz, contraste, textura e conversão sem perder detalhe. Guia prático de um fotógrafo com 30 anos de estrada.",
  },
  "como-criar-conteudo-envolvente-para-suas-redes-sociais-a-partir-do-seu-proprio-banco-de-imagens":
    {
      title: "Conteúdo para Redes Sociais com Banco de Imagens Próprio",
      description:
        "Como transformar o banco de imagens da sua empresa em conteúdo constante para redes sociais: temas, formatos, cortes verticais e calendário de publicação.",
    },
};
