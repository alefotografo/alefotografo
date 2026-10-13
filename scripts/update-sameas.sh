#!/usr/bin/env bash
# Atualiza sameAs em person.ts após criar os perfis externos.
# Uso: edite as variáveis abaixo com as URLs reais e execute: bash scripts/update-sameas.sh

WIKIDATA_URL="https://www.wikidata.org/wiki/Q"     # ex: Q123456789
CRUNCHBASE_URL="https://www.crunchbase.com/person/alexandre-machado-ale"
CLUTCH_URL="https://clutch.co/profile/ale-fotografo"
LINKEDIN_COMPANY_URL="https://www.linkedin.com/company/ale-fotografo-corporativo"

echo "URLs a adicionar em src/data/person.ts → personSameAs:"
echo ""
echo "  \"$WIKIDATA_URL\","
echo "  \"$CRUNCHBASE_URL\","
echo "  \"$CLUTCH_URL\","
echo "  \"$LINKEDIN_COMPANY_URL\","
echo ""
echo "Abra o arquivo e adicione as linhas acima ao array personSameAs."
echo ""
echo "Depois faça: git add src/data/person.ts && git commit -m 'geo: add external profile sameAs URLs'"
