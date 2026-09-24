# Teste automático: menu mobile/tablet abre páginas no topo

## Restrição
O projeto não tem nenhuma ferramenta de teste instalada, e as regras proíbem instalar dependências. Por isso o teste usa o Playwright em Python que já existe no ambiente, sem mexer em package.json.

## O que será criado
Um único arquivo novo: `scripts/test-menu-scroll.py`. Nenhum arquivo existente é alterado.

## O que o teste faz
Para dois tamanhos de tela — celular (390x844) e tablet (820x1180):
1. Abre a Home e rola até o final.
2. Abre o menu e toca em cada link direto: Vídeos, Blog, Contato.
3. Abre o menu e expande cada grupo (Serviços, Portfólio, Sobre), tocando em um link de cada grupo (ex.: Retrato profissional, Depoimentos, Quem é o Alê).
4. Também toca em "Solicitar orçamento" no fim do menu.
5. Depois de cada navegação, confirma que a página mudou e que a rolagem está no topo (menor que 5px).
6. Caso de controle: abrir e fechar o menu sem navegar deve manter a rolagem original.

Ao final imprime PASSOU/FALHOU por link e tamanho de tela, e sai com código de erro se algum falhar.

## Como rodar
`python3 scripts/test-menu-scroll.py` com o site rodando em localhost:8080 (ou outra URL via variável `BASE_URL`).

## Validação
Rodo o teste uma vez contra o preview e reporto o resultado.
