# Plano — Home Cirurgia 02

## Alterações

1. **Trabalhos selecionados**
   - Reorganizar a seção como um portfólio visual B2B com seis destaques: Fotografia Corporativa, Retratos Profissionais, Indústria, Transportes e Logística, Eventos e Feiras, Saúde e Advocacia.
   - Reutilizar fotografias, textos alternativos e destinos já existentes no projeto.
   - Manter a seção compacta, preservar os links internos relevantes e usar um grid equilibrado no desktop e legível no celular.

2. **Case de vídeo**
   - Substituir Hausy Robotton pelo vídeo institucional existente da Ativa Logística usado como destaque na página de vídeos, sem criar URL ou pesquisar externamente.

3. **Card “Vídeos Corporativos”**
   - Alterar exclusivamente a imagem e o texto alternativo desse card em `SolucoesEmpresa.tsx`, conforme autorizado.
   - Trocar a foto aérea pela capa do vídeo institucional existente da Ativa Logística; todo o restante do arquivo permanecerá intacto.

## Arquivos previstos

- `src/components/site/home/HomeSelectedWorks.tsx`
- `src/data/homeCuration.ts`, somente se necessário para a curadoria dos seis destaques
- `src/components/site/home/VideoProducao.tsx`
- `src/components/site/home/SolucoesEmpresa.tsx`, exclusivamente no asset e alt do card de vídeos

## Validação

- Executar a verificação de tipos.
- Conferir somente os componentes alterados na Home em desktop e celular, incluindo links, imagens e ausência de overflow.
- Não alterar a Cirurgia 01, SEO técnico, textos aprovados ou qualquer outra página/seção.
