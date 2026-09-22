# 11 — GEO Content Gaps

Data: 21/09/2026 · Evidência: amostra SERP (12 buscas, 21/09) + GSC (P18A.6R) + citability audit (10) + P18A.4. Cada gap com tipo e nível de evidência.

## Gaps por cluster

| GAP | CLUSTER | TIPO | EVIDÊNCIA | LEITURA |
|---|---|---|---|---|
| Ausência total na amostra para retrato profissional / foto LinkedIn / retrato | portrait, linkedin | CONTENT + EXTERNAL AUTHORITY | MEDIUM (amostra: blogs de IA e apps dominam; zero presença própria) | queries genéricas de perfil foram capturadas por apps de IA e blogs de prompts; o domínio não oferece nada que as IAs possam citar além das páginas de serviço — e elas não ranqueiam aqui |
| Ausência de vídeos corporativos/institucional na amostra, inclusive do VC | video | CONTENT + ENTITY + VIDEO | MEDIUM | videoscorporativos.com.br 0/12; produtoras (ES) e blogs de preço dominam; VC tem blog e /precos mas zero autoridade aparente nessa amostra |
| Drone: página fina (465 palavras) e SERP dominada por mídia/stock | drone | CONTENT | MEDIUM | "acompanhamento de obra com drone" não tem conteúdo dedicado no site; mídia tradicional ocupa o topo |
| Totem/foto lembrança: ausente; locadoras regionais dominam | photo_activation | CONTENT + LOCAL | MEDIUM | página correta existe (-totem-mania, 200) mas não ranqueia na amostra; setor dominado por homepages de locadoras e diretório (casamentos.com.br com reviews) |
| Industrial: página fina (431 palavras), sem case nomeado | industry | CASE + CONTENT | MEDIUM | SQ Química, Nitriflex, TJB são prova real sem página de prova |
| Blog ranqueia acima de money page (fotos corporativas, logística) | corporate, logistics | CITATION | MEDIUM | IAs citarão o post "quanto custa" em vez da página comercial — citável mas converte pior |
| URL legada /loja como único resultado de "foto profissional" | professional_photo | TECHNICAL | HIGH (GSC + amostra) | convergência de índice em andamento; risco de IAs citarem metadados antigos |
| Hub /fotografo-corporativo com apenas 394 palavras | corporate | CONTENT | MEDIUM | galeria pesada, texto mínimo — pouco extratável por IA |
| "foto profissional": intenção de 17.107 impressões sem URL reconhecida | professional_photo | TECHNICAL + CITATION | HIGH (GSC) | decisão pendente (query×page) antes de qualquer otimização |
| Fragmentação saúde (4 URLs) | health | TECHNICAL | HIGH (GSC, P18A.6R) | IAs podem citar qualquer uma das 4; sem hub claro |
| Confusão de domínios próprios (alemachado, ales, legado foto-de-perfil, fotosprofissionais) | entity | OWNED DOMAIN CONFUSION | MEDIUM | fotosprofissionais.com.br reclassificado como OWNED DOMAIN confirmado (P18G.0A, 7º do ecossistema) com OWNED DOMAIN LEAKAGE na busca "foto profissional"; sinais fracionados da mesma entidade; sem decisão estratégica antes do levantamento |
| GBP/local: map pack não avaliável na amostra | local | LOCAL | LOW | ferramenta não reproduz local pack; verificar GBP diretamente com proprietário |

## O que NÃO é gap (evitar desperdício)

- **Acesso de crawlers de IA**: saudável (09) — não gastar esforço.
- **Entidade no domínio principal**: consistente (05) — não reescrever fatos.
- **Eventos corporativos**: presença forte na amostra (~2) — manter, não refazer.
- **Logística**: melhor cluster junto com advocacia — investir em profundidade (Case), não em correção.
