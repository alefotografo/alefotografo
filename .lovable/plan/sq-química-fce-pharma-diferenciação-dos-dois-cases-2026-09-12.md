# SQ Química / FCE Pharma — diferenciação dos dois cases

Manter as duas URLs e os dois vídeos. A única alteração é de conteúdo editorial: cada case passa a ter título, subtítulo, descrição e SEO title próprios, com foco distinto.

## Evidência de conteúdo — limite importante

Dentro do projeto existem apenas os dados de catálogo: slug, título, SEO title e o ID do vídeo no YouTube. Não há sinopse, lista de cenas, ficha técnica, data ou legenda de nenhum dos dois vídeos. Portanto não é possível confirmar a presença de stand, produtos, equipe, entrevistas, depoimentos, demonstrações ou circulação de visitantes.

Consequência prática, seguindo a sua própria regra de não inventar cenas: os textos novos vão descrever apenas o que já está afirmado nos títulos atuais, que é a única evidência existente no projeto.

- Case A: o título atual afirma cobertura de feira de negócios com fotografia **e** vídeo. Foco: a participação da SQ Química na FCE Pharma registrada em produção conjunta de foto e vídeo.
- Case B: o título atual afirma cobertura profissional **em vídeo** para feiras e eventos corporativos. Foco: o material em vídeo da presença da empresa no evento.

Nada além disso será afirmado. Se você tiver as informações reais de cena de cada vídeo, envie e os textos ficam bem mais específicos.

## Case A — /videos/sq-quimica-na-fce-pharma-cobertura-profissional-de-feira-de-negocios-com-fotogra

Vídeo XQOVxSLj6q0 preservado.

- Título/H1: "SQ Química na FCE Pharma: fotografia e vídeo na mesma cobertura de feira"
- SEO title: "SQ Química na FCE Pharma | Fotografia e Vídeo de Feira de Negócios | Alê Fotógrafo"
- Subtítulo: "Cobertura conjunta de foto e vídeo da participação da SQ Química na FCE Pharma."
- Descrição: dois períodos curtos, em voz empresarial ("produzimos", "nossa equipe"), sobre a cobertura integrada de foto e vídeo em feira de negócios, sem citar cenas não confirmadas.

## Case B — /videos/sq-quimica-na-fce-pharma-cobertura-profissional-em-video-para-feiras-e-eventos-c

Vídeo WGtAZjK5v9Q preservado.

- Título/H1: "SQ Química na FCE Pharma: vídeo da participação da empresa no evento"
- SEO title: "SQ Química na FCE Pharma | Vídeo de Feiras e Eventos Corporativos | Alê Fotógrafo"
- Subtítulo: "Produção em vídeo da presença da SQ Química na FCE Pharma."
- Descrição: dois períodos curtos, foco exclusivo em produção de vídeo para feiras e eventos corporativos, sem citar cenas não confirmadas.

## Detalhes técnicos

- Único arquivo alterado: `src/data/catalog.vids.json`, apenas os dois objetos correspondentes (campos `title`, `subtitle`, `description`, `seo_title`). `slug`, `youtube` e `vimeo` intactos.
- A rota `videos.$slug.tsx` já monta title, meta description, canonical próprio, VideoObject e H1 a partir desses campos — nenhuma alteração de código é necessária, e as descrições novas passam a alimentar meta e `description` do VideoObject automaticamente.
- O sitemap de vídeos é gerado do mesmo catálogo, então as duas URLs continuam presentes, agora com descrição própria.
- Dívida técnica registrada, sem correção nesta cirurgia: `uploadDate` do VideoObject usa a data genérica `2024-01-01` para todos os 72 cases, porque o catálogo não guarda data. Nenhuma data nova será inventada.
- Validação: status 200 nas duas URLs, IDs de vídeo conferidos, títulos/metas/descrições diferentes entre si, e typecheck.
