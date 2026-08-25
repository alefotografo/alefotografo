// Títulos e descrições de busca escritos à mão para os posts com maior volume
// de impressões no Google e CTR baixo. Sem override, o fallback do próprio post
// (título + descrição) continua valendo.

export interface PostSeo {
  title: string;
  description: string;
}

export const postSeo: Record<string, PostSeo> = {
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
