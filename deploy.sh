#!/bin/bash

# 🚀 Script de Deploy Automático para Hostinger
# Uso: npm run deploy

echo "🎯 Iniciando deploy para Hostinger..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Build do projeto
echo "${YELLOW}📦 Gerando build...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo "${RED}❌ Erro no build!${NC}"
    exit 1
fi

echo "${GREEN}✅ Build gerado com sucesso!${NC}"

# 2. Verificar se as credenciais FTP existem
if [ ! -f ".env.local" ]; then
    echo "${RED}❌ Arquivo .env.local não encontrado!${NC}"
    echo "${YELLOW}Crie o arquivo .env.local com:${NC}"
    echo "FTP_HOST=seu-servidor.hostinger.com"
    echo "FTP_USER=seu-usuario"
    echo "FTP_PASS=sua-senha"
    exit 1
fi

# 3. Upload via FTP usando lftp (você precisa instalar: brew install lftp)
echo "${YELLOW}📤 Enviando arquivos para Hostinger...${NC}"

# Carregar variáveis do .env.local
source .env.local

# Upload via lftp
lftp -c "
set ftp:ssl-allow no;
open -u $FTP_USER,$FTP_PASS $FTP_HOST;
mirror --reverse --delete --verbose ./out /public_html;
bye
"

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Deploy concluído com sucesso!${NC}"
    echo "${GREEN}🌐 Site atualizado: https://silvaduarteadvogados.com${NC}"
else
    echo "${RED}❌ Erro no upload FTP!${NC}"
    exit 1
fi
