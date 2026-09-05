# Publicar e validar a versão otimizada

## Objetivo
Publicar a versão atual e validar a home no domínio real, em celular 4G e desktop, com estas metas rigorosas:

- FCP abaixo de 1,0 s
- LCP abaixo de 1,5 s
- TTFB abaixo de 400 ms

## Etapas

1. **Validação antes da publicação**
   - Executar as verificações de tipos e a compilação de produção.
   - Confirmar que a home foi pré-gerada e que o pacote inicial não voltou a incluir o catálogo completo ou imagens desnecessárias.
   - Verificar o resultado de segurança exigido para publicação.

2. **Publicar a versão otimizada**
   - Enviar a versão atual para `www.alefotografo.com.br`.
   - Aguardar a propagação e confirmar que o domínio está servindo os novos arquivos, não a versão anterior.

3. **Medir em condições reais**
   - Medir a home publicada em perfil móvel 4G com CPU limitada e em desktop.
   - Registrar FCP, LCP e TTFB; repetir as medições para separar primeira visita de cache aquecido.
   - Conferir também qual elemento é o LCP, tamanho e prioridade dos recursos críticos, tempo de resposta do documento, tarefas longas e mudanças de layout.

4. **Corrigir somente os gargalos comprovados**
   - Se o TTFB falhar, ajustar pré-geração, cache público e comportamento do documento na borda.
   - Se FCP/LCP falharem, corrigir a cadeia crítica real: HTML/CSS, fontes, imagem principal, cabeçalho ou JavaScript inicial, conforme os dados coletados.
   - Preservar busca, SEO, acessibilidade e qualidade visual já implementados.

5. **Republicar e comprovar**
   - Repetir publicação e medições após cada conjunto de ajustes relevante.
   - Encerrar quando celular e desktop atingirem as três metas, ou apresentar o limite externo comprovado caso alguma métrica não possa ser reduzida apenas pelo código do site.

## Critério de conclusão
Uma tabela final mostrará, para celular e desktop, os valores antes/depois de FCP, LCP e TTFB, a condição de cache e as correções aplicadas. Nenhuma métrica será declarada aprovada sem medição no domínio publicado.

## Detalhes técnicos
- A medição principal será feita no domínio canônico, não no ambiente de edição.
- O TTFB será conferido diretamente no documento HTML e comparado entre resposta fria e aquecida.
- As métricas visuais serão capturadas com instrumentação de navegador e auditoria de laboratório reproduzível.
- Se a plataforma ainda entregar arquivos antigos após a publicação, a versão dos arquivos será verificada antes de atribuir qualquer resultado ao código novo.
