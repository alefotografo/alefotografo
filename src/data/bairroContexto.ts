/**
 * Texto único por bairro: contexto real da região (perfil de empresas,
 * edifícios, acesso, logística de produção) para evitar conteúdo duplicado
 * entre as páginas /fotografo-corporativo-em/[bairro].
 *
 * Cada entrada tem 2 parágrafos exclusivos daquele bairro.
 */
export const bairroContexto: Record<string, string[]> = {
  "vila-olimpia": [
        "A Vila Olímpia virou endereço corporativo depois da abertura da Ponte Estaiada e da verticalização das ruas Gomes de Carvalho, Fidêncio Ramos e Casa do Ator. O bairro mistura torres de escritório com prédios baixos reformados: no mesmo quarteirão há uma gestora com recepção de vidro e uma agência instalada num sobrado adaptado. Isso muda a produção — em torre trabalho com o que a sala oferece (janela do piso alto, sala de reunião, corredor neutro); em sobrado costumo montar fundo e luz portátil, porque o pé-direito e o mobiliário raramente ajudam.",
    "Na prática, a região concentra clientes de tecnologia, publicidade, saúde estética e escritórios de serviços. Os pedidos mais comuns são retrato individual para LinkedIn de time inteiro em uma manhã, foto de ambiente para site e cobertura de convenção nos hotéis da Nações Unidas e da Funchal. A garagem quase sempre é curta e o acesso passa por portaria com cadastro prévio, então peço nome completo, documento e horário de janela com antecedência para não perder tempo de estúdio no lobby.",
  ],
  "faria-lima": [
    "A Faria Lima é o corredor de bancos de investimento, fundos, fintechs e bancas de advocacia de São Paulo. É a região onde mais recebo pedido de headshot padronizado: sócio, associado e analista com o mesmo fundo, mesmo enquadramento e mesma luz, porque a foto vai aparecer lado a lado na página de equipe e em apresentações a investidores. Esse tipo de trabalho exige controle rígido de altura de câmera e temperatura de cor ao longo de todo o dia.",
    "Os edifícios do eixo — do trecho da Praça Dom Gastão Liberal Pinto até a Hélio Pellegrino — têm segurança fechada, elevador de serviço para equipamento e salas com muito vidro. Vidro é ótimo para clima e péssimo para reflexo, então normalmente combino uma sala interna para o retrato e uso a vista apenas em fotos de contexto. Rodo entre 25 e 60 retratos por dia útil nessa região, com sessões de 5 a 8 minutos por pessoa para não travar a agenda do escritório.",
  ],
  "avenida-paulista": [
    "A Paulista é o endereço mais heterogêneo que atendo: sedes de banco e seguradora, associações setoriais, hospitais e consultórios, além de instituições culturais. Em uma mesma semana faço retrato de diretoria em andar alto de torre bancária e foto de médico em consultório de 12 m² em edifício antigo. O denominador comum é o tempo curto: quem trabalha na avenida raramente libera mais de 10 minutos por pessoa.",
    "Logística pesa mais aqui do que em qualquer outra região. Estacionamento é caro e cheio, então chego de metrô (Consolação, Trianon-Masp ou Brigadeiro) com equipamento em mochila e carrinho quando o volume permite. Para eventos em hotéis e auditórios da avenida, faço visita técnica prévia porque a iluminação de auditório é quase sempre mista e amarelada — resolver isso na hora custa tempo que o congresso não dá.",
  ],
  berrini: [
    "A Engenheiro Luís Carlos Berrini é o corredor de sedes de multinacionais e de operações de tecnologia, telecom e logística. É a região em que mais faço retrato com briefing de manual de marca global: guia de fundo, proporção de crop, distância focal e até faixa de contraste definidos pela matriz. Chego com o setup calibrado e envio prova ainda no local, para o time de comunicação aprovar antes de eu desmontar.",
    "Os prédios são grandes e as equipes são grandes: é comum agendar 60 a 100 pessoas em dois dias, com fila organizada por andar. Monto o estúdio portátil em sala de treinamento ou copa e trabalho com lista nominal e horário por bloco de 6 minutos. A proximidade com a estação Berrini e a ciclovia do Rio Pinheiros ajuda quem vem de outros escritórios, e o acesso pela Marginal facilita descarga de equipamento fora do horário de pico.",
  ],
  "itaim-bibi": [
    "O Itaim reúne consultorias, gestoras, escritórios boutique e startups em fase de série A e B, muitas em prédios de médio porte nas ruas Joaquim Floriano, Bandeira Paulista e Jerônimo da Veiga. O perfil de pedido é diferente do da Faria Lima: aqui a empresa quer parecer contemporânea, não institucional. Uso mais luz natural, cenários de escritório real e retrato de corpo três quartos, em vez do headshot de fundo cinza.",
    "É também a região onde produzo mais conteúdo de cultura organizacional: reunião real, time no café, detalhes do espaço. Esse material rende para LinkedIn, página de carreiras e apresentação comercial ao mesmo tempo. Um cuidado prático: muitos escritórios do Itaim ocupam apenas um ou dois andares de prédios residenciais convertidos, com elevador único e regras de condomínio — combino horário fora do pico de almoço para não disputar o elevador com o restante do edifício.",
  ],
  pinheiros: [
    "Pinheiros concentra empresas de produto, agências digitais e estúdios, boa parte em galpões e casas reformadas entre a Cardeal Arcoverde, a Teodoro Sampaio e a Girassol. Arquitetura de galpão é presente generoso para fotografia: pé-direito alto, tijolo aparente, luz de sheds e áreas de convivência que funcionam como cenário. Aproveito esses elementos em vez de neutralizá-los, porque eles comunicam o posicionamento da empresa.",
    "Os times aqui costumam ser jovens e pouco à vontade diante da câmera, então dedico mais tempo à direção de pose do que em ambiente bancário. Faço aquecimento rápido, mostro a primeira foto na tela e ajusto. Para eventos — meetup, demo day, sprint review — trabalho com luz disponível e flash rebatido discreto, mantendo o clima informal do espaço em vez de transformar a sala em set.",
  ],
  "jardim-paulistano": [
    "O Jardim Paulistano tem um perfil mais reservado: gestoras de patrimônio, family offices, escritórios boutique e sedes regionais em casas e prédios baixos ao redor da Rua Groenlândia, Colômbia e Avenida Nove de Julho. A demanda dominante é retrato sóbrio e discreto, com estética próxima a editorial de revista de negócios, e frequentemente sem divulgação do endereço nas imagens.",
    "Como muitos endereços são casas adaptadas, quase sempre existe um jardim, uma varanda ou uma escada que rendem retrato com luz natural bonita — vale mais do que qualquer fundo de estúdio. Em contrapartida, o espaço interno é limitado e o silêncio é regra, então chego com equipamento reduzido, sem gerador nem estrutura pesada, e trabalho em dupla no máximo.",
  ],
  brooklin: [
    "O Brooklin Novo funciona como extensão do polo da Berrini: sedes de multinacionais, empresas de tecnologia, seguradoras e escritórios em torres nas ruas Verbo Divino, Michigan e Alexandre Dumas. O Brooklin Velho, do outro lado, é residencial e abriga clínicas e escritórios menores em casas. Atendo os dois com abordagens diferentes: torre pede setup padronizado e escala; casa pede leitura do ambiente.",
    "É comum a comunicação interna pedir foto que sirva para o global e para o Brasil ao mesmo tempo, com legenda e crédito em inglês. Entrego arquivos nomeados por matrícula ou e-mail corporativo, em duas proporções (quadrado para intranet e 4x5 para apresentação), porque isso elimina retrabalho do time de RH. A proximidade com o aeroporto de Congonhas também torna a região prática para diretoria que chega e sai no mesmo dia — encaixo o retrato entre reuniões.",
  ],
  "cidade-moncoes": [
    "Cidade Monções é um bairro pequeno, entre a Berrini e a Marginal Pinheiros, com poucas ruas e alta densidade corporativa. Os endereços da Quintana, Doutor Fernandes Coelho e Wady Helu abrigam operações de tecnologia, serviços financeiros e escritórios administrativos de grupos maiores. Por ser compacto, é comum atender dois clientes no mesmo dia a pé, sem remontar o carro.",
    "As torres da região tendem a ter lajes amplas com iluminação fluorescente e pouca janela útil no núcleo, então trabalho com luz própria em praticamente todos os retratos e trato o ambiente como estúdio temporário. Para foto de escritório e arquitetura corporativa, prefiro o fim da tarde: o sol baixo entrando pela face voltada ao rio dá volume às fotos de área comum sem exigir composição artificial.",
  ],
  "vila-madalena": [
    "A Vila Madalena é território de agências criativas, estúdios de design, produtoras e marcas de consumo, instaladas em casas e sobrados nas ruas Harmonia, Fidalga, Girassol e Aspicuelta. O pedido raramente é headshot corporativo clássico — é retrato com personalidade, foto de bastidor e imagem para redes sociais. Aceito isso: fundo colorido, grafite, escada, cozinha do escritório entram na composição.",
    "O grafite do bairro é atrativo e armadilha ao mesmo tempo: parede de terceiros muda ou é repintada, e imagem com obra de arte reconhecível pode gerar questão de uso comercial. Por isso priorizo áreas do próprio cliente ou muros neutros. Estacionar por aqui é difícil, especialmente à tarde e nas sextas, então costumo agendar cedo e trabalhar com equipamento que caiba em duas mochilas.",
  ],
  "cerqueira-cesar": [
    "O Cerqueira César fica entre a Paulista e os Jardins e é um dos endereços mais densos de consultórios médicos e escritórios de advocacia de São Paulo — ruas como Oscar Freire, Bela Cintra, Padre João Manuel e Doutor Melo Alves concentram edifícios comerciais antigos, com salas pequenas e pé-direito baixo.",
    "Sala pequena é o desafio técnico dominante aqui: pouco recuo para lente de retrato e teto baixo que reflete a luz. Resolvo com fundo portátil estreito, luz em softbox retangular posicionado alto e escolha de distância focal que não distorça o rosto mesmo a curta distância. Em prédios de esquina, a janela para a rua arborizada rende retrato com luz natural excelente por volta das 10h.",
  ],
  consolacao: [
    "A Consolação é área de clínicas, consultórios, escritórios e faculdades no entorno da Paulista, com forte presença de saúde nas imediações da Rua Maria Antônia, Avenida Angélica e Rua da Consolação. Boa parte do trabalho aqui é retrato de médico, dentista e psicólogo para site, plano de saúde e redes — com atenção às regras dos conselhos profissionais sobre imagem, que evito violar sugerindo fotos de atendimento sem exposição de paciente.",
    "Também cubro congressos e aulas nos auditórios e hotéis da região. Ambiente acadêmico tem luz de palco desigual e projeção clara na tela, então trabalho com duas câmeras e exposição travada por bloco de fala, para o material sair uniforme. O acesso por metrô Higienópolis-Mackenzie e Consolação torna viável chegar sem carro, o que ajuda em dias de trânsito na Angélica.",
  ],
  republica: [
    "A República é o centro histórico em uso corporativo: edifícios dos anos 1940 a 1960 ocupados por escritórios, associações, sindicatos, órgãos públicos, teatros e instituições culturais. É a região onde encontro os interiores mais fotogênicos da cidade — mármore, elevadores originais, escadas em curva, janelas altas — e onde uso menos luz artificial em foto de ambiente.",
    "Em compensação, é a região que exige mais planejamento de acesso e segurança de equipamento. Ando com mochila fechada, sem tripé aparente na rua, e desembarco na porta quando o volume é grande. Para cobertura de premiação e evento cultural nos teatros do entorno da Praça da República e do Vale do Anhangabaú, faço reconhecimento de saídas e pontos de luz antes de começar, porque a plateia lotada limita muito o deslocamento.",
  ],
  moema: [
    "Moema é predominantemente residencial de alto padrão, com corredores comerciais na Avenida Ibirapuera, Rua Gaivota e Avenida Jamaris. O que atendo aqui é sobretudo clínica — odontologia, dermatologia, fisioterapia, nutrição —, escolas e escritórios pequenos de serviços. O pedido típico é um pacote: retrato dos profissionais, foto do espaço e algumas imagens de atendimento simulado para site e Instagram.",
    "Clínica bem projetada costuma ter parede clara e iluminação embutida quente, que puxa a pele para o amarelo. Trato isso equilibrando com luz própria de temperatura controlada em vez de corrigir tudo na edição. Como o bairro é arborizado e as ruas são calmas, também uso a calçada e a área externa do prédio para retratos mais leves, sem cara de estúdio, algo que funciona bem para profissionais de saúde que querem parecer acessíveis.",
  ],
  "vila-mariana": [
    "A Vila Mariana combina saúde, educação e serviços: o entorno da Rua Domingos de Morais e da Avenida Ana Costa concentra clínicas e consultórios, e o eixo da Vila Clementino puxa demanda ligada ao complexo hospitalar da região. Somam-se escolas, cursinhos e escritórios pequenos, muitos em prédios comerciais de pé-direito modesto.",
    "Boa parte das sessões aqui são individuais e curtas — um profissional, 30 a 40 minutos, retrato e algumas fotos de sala. Para esse formato mantenho um kit compacto de duas luzes e fundo dobrável que monto em cinco minutos. A proximidade do Parque Ibirapuera é um recurso concreto: quando o cliente quer retrato ao ar livre, faço a segunda parte da sessão no parque, com deslocamento curto e sem custo de locação.",
  ],
  perdizes: [
    "Perdizes é um bairro arborizado e vertical da Zona Oeste, com forte presença acadêmica pela PUC-SP e por colégios tradicionais, além de clínicas e escritórios ao longo da Avenida Sumaré, Rua Cardoso de Almeida e Turiaçu. A demanda mais frequente combina retrato de docentes e coordenadores com cobertura de eventos acadêmicos — aulas inaugurais, colações, congressos internos.",
    "Evento acadêmico exige discrição: fotografo sem flash durante fala e reservo o uso de luz para os intervalos e fotos de grupo. Para retrato de professor, prefiro biblioteca, laboratório ou sala de aula vazia a fundo neutro, porque o contexto reforça a autoridade da pessoa. As ruas em declive do bairro e a arborização densa também rendem retratos externos com luz difusa em quase qualquer horário do dia.",
  ],
  lapa: [
    "A Lapa é um entroncamento logístico e industrial: pátio ferroviário, transportadoras, oficinas, indústrias e centros de distribuição convivem com o comércio da Rua Doze de Outubro e escritórios administrativos. O trabalho aqui é bem diferente do de escritório — fotografo galpão, linha de produção, doca, equipe de operação com EPI e frota.",
    "Ambiente industrial impõe regras: integração de segurança, uso de bota, óculos e capacete, e áreas onde não se pode parar para montar luz. Por isso trabalho com luz potente a bateria, sem cabo pelo chão, e planejo o roteiro de fotos junto com o responsável de segurança antes de entrar. Também combino horário de troca de turno para conseguir retratos de equipe sem interromper a produção.",
  ],
  santana: [
    "Santana é o principal centro de negócios da Zona Norte, com escritórios, clínicas e comércio consolidado no eixo da Avenida Cruzeiro do Sul, Rua Voluntários da Pátria e Alfredo Pujol, além do polo de eventos do Anhembi e do Campo de Marte por perto. Atendo empresas locais que raramente têm acesso a fotógrafo corporativo no próprio bairro, e por isso o pacote costuma incluir retrato, ambiente e material para redes de uma só vez.",
    "A presença do distrito de eventos muda a natureza dos trabalhos: cobertura de feira, estande e congresso no Anhembi é recorrente e tem regras próprias de credenciamento, horário de montagem e circulação. Chego na montagem para fotografar o estande limpo, antes do público, e reservo o período de pico para fotos de movimento e de atendimento — a sequência inversa raramente funciona.",
  ],
  tatuape: [
    "O Tatuapé é o polo corporativo da Zona Leste: torres comerciais no entorno da Avenida Radial Leste, Rua Emílio Mallet e Avenida Celso Garcia, shoppings e um grande volume de clínicas e escritórios de serviços. É a região onde mais atendo empresas de médio porte que estão montando site e presença digital pela primeira vez, o que geralmente pede um pacote completo em uma única diária.",
    "A ligação por metrô (Tatuapé e Carrão) e pela Radial facilita agendar sessões de manhã e à tarde em endereços diferentes no mesmo dia. Nas torres mais novas, as salas de reunião de vidro com vista para a avenida rendem retrato com fundo urbano reconhecível — uso isso quando a empresa quer sinalizar que é da Zona Leste, em vez de parecer genericamente paulistana.",
  ],
  mooca: [
    "A Mooca conserva o tecido industrial de galpões e antigas fábricas, muitos convertidos em escritórios, escolas, coworkings e lofts, ao lado de indústrias ainda em operação e de um comércio tradicional forte. Essa mistura dá acesso a cenários que não existem em bairro corporativo novo: tijolo aparente, estrutura metálica, portões grandes, pátio interno.",
    "Fotografo bastante indústria de alimentos, metalurgia leve e serviços em endereços da Rua da Mooca, Avenida Paes de Barros e Presidente Wilson. Nesses trabalhos priorizo foto de processo — mão no maquinário, inspeção, expedição — porque é o que sustenta site e material comercial B2B. Para retrato de equipe, uso o próprio galpão como fundo em vez de fundo neutro, mantendo a identidade do lugar.",
  ],
  "agua-branca": [
    "A Água Branca é uma faixa entre a Lapa e a Barra Funda ocupada por indústrias, transportadoras, concessionárias e escritórios administrativos, com o Jockey Club e o parque como referências. O acesso pela Marginal Tietê e pela Avenida Francisco Matarazzo torna a região prática para trabalhos com equipamento pesado, incluindo carga e descarga direta em pátio.",
    "A maior parte das demandas envolve fotografia de operação: frota, armazém, expedição, equipe técnica em campo. Trabalho com luz a bateria e lentes grande-angulares para dar noção de escala de galpão, e reservo o fim da tarde para fotos externas de pátio, quando o sol baixo separa os veículos do fundo. Para retratos, monto um ponto fixo próximo ao escritório administrativo e giro a equipe por turnos.",
  ],
  morumbi: [
    "O Morumbi combina sedes corporativas e hospitais de referência com condomínios residenciais de alto padrão nas imediações da Avenida Giovanni Gronchi e da Marginal Pinheiros. O perfil de cliente é executivo sênior, médico e escritório que atende esse público, e o tom pedido é sóbrio, com estética próxima a retrato editorial.",
    "É uma região de trajetos longos e portarias rigorosas: condomínio e hospital exigem autorização nominal, e o deslocamento interno entre torre e estacionamento consome tempo real. Por isso trabalho com kit enxuto e agenda folgada entre sessões. Em ambiente hospitalar, sigo protocolo de circulação e faço apenas fotos autorizadas, sem qualquer imagem identificável de paciente.",
  ],
  "santo-amaro": [
    "Santo Amaro é um dos polos corporativos mais antigos da Zona Sul, com escritórios, indústrias leves, hospitais e comércio no entorno da Avenida Santo Amaro, Adolfo Pinheiro e Largo Treze. A região atende tanto empresa de serviços em torre quanto operação instalada em galpão, o que me faz confirmar o tipo de espaço antes de definir o equipamento da diária.",
    "Trânsito é o fator crítico: a Avenida Santo Amaro trava em quase todo horário comercial, então agendo início de manhã ou depois das 14h e uso a estação Largo Treze quando o volume de equipamento permite. Para clientes que ocupam andares em prédios mais antigos, monto o estúdio em sala interna e faço o retrato ali, porque as janelas voltadas para a avenida trazem ruído visual e reflexo difíceis de controlar.",
  ],
  "centro-santo-andre": [
    "O Centro de Santo André é o coração administrativo do ABC: escritórios de contabilidade, advocacia e engenharia, clínicas, agências bancárias e comércio no eixo da Rua Coronel Ibitirama, Avenida Dom Pedro II e Praça do Carmo. Muitas dessas empresas prestam serviço para as indústrias da região, e a demanda reflete isso — imagem sóbria, que transmita confiabilidade técnica.",
    "Trabalho aqui com deslocamento por conta própria a partir de São Paulo, o que permite chegar cedo e cobrir dois endereços no mesmo dia, prática comum em cliente do ABC que quer diluir o custo da diária. Os prédios comerciais do centro são em geral dos anos 1970 e 1980, com salas compactas: uso o mesmo protocolo de espaço reduzido que aplico no Cerqueira César, com fundo estreito e luz alta.",
  ],
  "campestre-santo-andre": [
    "O Bairro Campestre, em Santo André, é residencial de padrão elevado, com forte presença de clínicas, consultórios e escritórios de profissionais liberais instalados em casas adaptadas e prédios baixos perto da Avenida Portugal e da Rua Cel. Fernando Prestes. É um bairro tranquilo, o que facilita produção externa e retrato com luz natural na calçada arborizada.",
    "As sessões costumam ser individuais ou de sociedade pequena — dois a quatro profissionais — e o pedido inclui foto do espaço, porque no ABC o paciente ou cliente pesquisa a estrutura antes de agendar. Nesses casos fotografo recepção, sala de atendimento e detalhes de equipamento, sempre com o ambiente arrumado previamente; combino uma hora de preparação antes da minha chegada para não gastar tempo de sessão organizando o cenário.",
  ],
  "vila-assuncao-santo-andre": [
    "A Vila Assunção é um dos endereços residenciais mais valorizados de Santo André, com ruas largas, casas amplas e escritórios discretos de profissionais liberais, além de clínicas de especialidade. O clima é de bairro-jardim, e isso se traduz na fotografia: prefiro retrato com luz natural em jardim, varanda ou área externa a fundo de estúdio.",
    "Como muitos clientes atendem por indicação e valorizam discrição, evito imagens que identifiquem endereço e trabalho sem equipe de apoio. A produção é enxuta: uma câmera, duas lentes, uma luz de apoio. Para material institucional de consultório, entrego um conjunto pequeno mas completo — retrato vertical, retrato horizontal para site, foto de ambiente e uma imagem de detalhe — que cobre site, Google Business e redes sem sessão extra.",
  ],
  "centro-sao-bernardo": [
    "O Centro de São Bernardo do Campo articula o comércio e os serviços de uma cidade de base industrial: escritórios, clínicas, escolas técnicas e sedes administrativas de empresas cujas plantas ficam no Demarchi, Batistini e na região da Anchieta. Frequentemente o mesmo cliente pede retrato no escritório central e fotografia de operação na planta, em diárias combinadas.",
    "A cultura corporativa automotiva da cidade influencia o resultado esperado: fotos padronizadas, com pouca variação estética, prontas para relatório e comunicação interna. Entrego nomeação por matrícula e recorte fixo por isso. No centro, o entorno da Praça Lauro Gomes e da Marechal Deodoro tem prédios comerciais com salas médias, suficientes para montar um estúdio temporário confortável, o que raramente acontece em planta industrial.",
  ],
  "rudge-ramos": [
    "Rudge Ramos, em São Bernardo, é bairro de passagem entre a Anchieta, a Via Anchieta antiga e o eixo do ABC, com indústrias, centros de distribuição, autopeças e um comércio de serviços consolidado na Avenida Rotary e na Caminho do Mar. Também há presença universitária, o que gera demanda de fotografia institucional e de eventos acadêmicos.",
    "Em galpão e centro de distribuição a fotografia depende de altura: monto tomadas de mezanino ou docas elevadas para mostrar volume de estoque e fluxo de separação. Uso luz a bateria e evito qualquer cabo no piso de circulação de empilhadeira, por regra de segurança. Para retrato de equipe operacional, fotografo no início do turno, com EPI completo, porque é assim que o material será usado em comunicação e em auditoria de cliente.",
  ],
  "baeta-neves": [
    "Baeta Neves é um bairro consolidado de São Bernardo, com perfil residencial e comercial de rua: clínicas, consultórios, escritórios de contabilidade e serviços na Avenida Lucas Nogueira Garcez e no entorno da Praça Baeta Neves. O cliente típico é a empresa familiar de segunda geração que está profissionalizando comunicação e site.",
    "Nesses projetos o valor está em mostrar as pessoas, não apenas o serviço: fotografo a família à frente do negócio, a equipe completa e o espaço em funcionamento. Trabalho com sessão única de meio dia, roteiro definido por e-mail antes e retorno de seleção em galeria online, formato que se encaixa melhor na rotina de quem não tem departamento de marketing. Estacionar é simples aqui, o que permite trazer estrutura um pouco maior de luz do que em bairro central.",
  ],
  "centro-sao-caetano": [
    "O Centro de São Caetano do Sul tem a maior renda média do ABC e um comércio de serviços denso na Rua Manoel Coelho, Avenida Goiás e Rua Amazonas, além de sedes administrativas de indústrias e uma forte concentração de clínicas de especialidade. O padrão de exigência estética é alto — muitos clientes chegam com referência visual pronta.",
    "Por isso começo com alinhamento de referência antes da diária: definimos fundo, faixa de cor e nível de retoque por escrito, o que evita retrabalho. As salas comerciais do centro são bem acabadas e claras, o que permite trabalhar com luz mista e resultado mais natural. A cidade é compacta: consigo cobrir escritório, clínica e uma foto externa de fachada em um único período, sem tempo perdido em deslocamento.",
  ],
  "santa-paula-sao-caetano": [
    "O bairro Santa Paula, em São Caetano do Sul, é residencial e verticalizado, com prédios recentes e um conjunto de clínicas e escritórios de profissionais liberais no entorno da Avenida Presidente Kennedy e da Rua Alegre. É uma das áreas mais bem cuidadas do ABC, com calçadas largas e arborização — cenário externo utilizável na maior parte do ano.",
    "As demandas concentram-se em retrato individual de alto padrão para site, LinkedIn e material de sociedade. Nesse formato trabalho com sessão mais longa que a média, entre 60 e 90 minutos, com troca de roupa e duas ou três abordagens de luz, porque a imagem vai durar anos. Entrego seleção reduzida e bem tratada, em vez de volume grande de arquivos, que é o que esse tipo de cliente efetivamente usa.",
  ],
  "centro-diadema": [
    "O Centro de Diadema serve uma cidade de matriz industrial e logística: plantas, transportadoras e prestadores de serviço para a cadeia automotiva e química ocupam o entorno da Avenida Antônio Piranga, Praça Lauro Michels e do eixo para a Rodovia dos Imigrantes. O centro concentra a parte administrativa dessas operações, além de clínicas e comércio.",
    "A combinação típica de trabalho é retrato de diretoria e equipe administrativa no escritório e, no mesmo dia, fotografia de produção na planta. Para a parte industrial, faço integração de segurança, uso EPI e planejo o roteiro com o responsável de operação, evitando parar linha. Como Diadema tem alta densidade de galpões, também produzo imagens de fachada e frota, muito usadas em proposta comercial e habilitação de fornecedor.",
  ],
  "alphaville-barueri": [
    "Alphaville, em Barueri, é um dos maiores polos corporativos do país fora de capital: torres de escritório nos Alphavilles Industrial e Empresarial abrigam sedes brasileiras de multinacionais de tecnologia, farmacêutica, bens de consumo e serviços financeiros, além do polo do Tamboré. É a região onde recebo mais briefing em inglês e mais exigência de padrão global de headshot.",
    "A logística é peculiar: distâncias internas grandes, condomínios corporativos fechados com controle de acesso por veículo e necessidade de cadastro prévio de equipamento. Vou de carro, com autorização enviada com antecedência, e reservo uma hora de margem para acesso. Como muitos times trabalham em regime híbrido, o formato mais eficiente aqui é o day of photos: monto um estúdio temporário em sala de reunião num dia de presença obrigatória e fotografo 40 a 80 pessoas com agendamento por link, entregando arquivos nomeados conforme o padrão do RH global.",
  ],
};
