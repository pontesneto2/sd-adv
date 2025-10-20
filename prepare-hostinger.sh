#!/bin/bash

echo "🚀 Preparando deploy para Hostinger..."
echo ""

# Verifica se existe .next
if [ ! -d ".next" ]; then
  echo "❌ Pasta .next não encontrada. Rodando build..."
  npm run build
else
  echo "✅ Build já existe"
fi

echo ""
echo "📦 Criando pacote para Hostinger..."

# Cria pasta de deploy
mkdir -p hostinger-deploy

# Copia arquivos essenciais
echo "Copiando arquivos..."
cp -r .next hostinger-deploy/
cp -r public hostinger-deploy/
cp package.json hostinger-deploy/
cp package-lock.json hostinger-deploy/
cp next.config.mjs hostinger-deploy/

echo ""
echo "✅ Arquivos prontos na pasta 'hostinger-deploy/'"
echo ""
echo "📋 Próximos passos:"
echo "1. Conecte via FTP na Hostinger"
echo "2. Envie TODO o conteúdo de 'hostinger-deploy/' para o servidor"
echo "3. No servidor, rode: npm install --production"
echo "4. Configure Node.js App Manager na Hostinger"
echo ""
echo "📖 Veja o arquivo HOSTINGER-DEPLOY.md para instruções detalhadas"
