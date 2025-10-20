# 🚀 Deploy na Hostinger - Silva & Duarte Advocacia

## ⚠️ PRÉ-REQUISITOS

A Hostinger precisa ter suporte a **Node.js**. Verifique seu plano:
- ✅ **Business Hosting** ou superior: TEM Node.js
- ❌ **Shared Hosting básico**: NÃO TEM Node.js (só PHP/HTML)

### Como verificar:
1. Acesse o painel Hostinger (hpanel)
2. Procure por "Node.js" ou "Node.js App Manager"
3. Se NÃO encontrar, seu plano não suporta Next.js

---

## 📦 OPÇÃO 1: Deploy Node.js (Plano Business+)

### Passo 1: Preparar o projeto

O build já foi feito! Você precisa enviar estes arquivos para Hostinger:

**Arquivos/Pastas Essenciais:**
- `.next/` (pasta gerada pelo build)
- `public/` (imagens, favicon, etc)
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `node_modules/` (OU instalar no servidor)

### Passo 2: Acessar Hostinger

1. Login no hPanel da Hostinger
2. Vá em **"Advanced" > "Node.js"** ou **"Node.js App Manager"**
3. Clique em **"Create Application"**

### Passo 3: Configurar Aplicação Node.js

Configure assim:
- **Application Mode**: Production
- **Node.js Version**: 18.x ou 20.x (a mais recente disponível)
- **Application Root**: `/home/usuario/public_html` (ou pasta específica)
- **Application URL**: Seu domínio
- **Application Startup File**: `node_modules/next/dist/bin/next`
- **Application Startup Command**: `start`
- **Environment Variables** (adicione):
  - `NODE_ENV`: `production`
  - `PORT`: `3000` (ou porta fornecida pela Hostinger)

### Passo 4: Upload dos Arquivos

**Via FTP (FileZilla, WinSCP, etc):**
1. Host: Fornecido pela Hostinger
2. Usuário: Fornecido pela Hostinger
3. Senha: Senha FTP
4. Porta: 21

Envie para a pasta configurada (ex: `/public_html`):
- Pasta `.next/`
- Pasta `public/`
- `package.json`
- `package-lock.json`
- `next.config.mjs`

### Passo 5: Instalar Dependências

No **Terminal SSH** da Hostinger (se disponível):
```bash
cd /home/usuario/public_html
npm install --production
```

OU use o botão "Run NPM Install" no painel Node.js da Hostinger.

### Passo 6: Iniciar Aplicação

No painel Node.js, clique em **"Start Application"** ou **"Restart"**

### Passo 7: Configurar Domínio

1. Vá em "Domains" no hPanel
2. Configure seu domínio para apontar para a aplicação Node.js
3. Ative SSL (Let's Encrypt gratuito)

---

## 📦 OPÇÃO 2: Export Estático (Plano Básico - SEM Node.js)

⚠️ **LIMITAÇÕES**: Sem otimização de imagens, sem Server Components

### Modificar next.config.mjs

Abra o arquivo e altere para:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera HTML estático
  images: {
    unoptimized: true, // Desabilita otimização Next.js
  },
  trailingSlash: true, // Melhor compatibilidade com hosting
};

export default nextConfig;
```

### Build estático
```bash
npm run build
```

Isso vai gerar uma pasta `out/` com HTML/CSS/JS estáticos.

### Upload para Hostinger

1. Acesse o **File Manager** da Hostinger
2. Vá para `/public_html`
3. Delete o conteúdo existente (se houver)
4. Envie TUDO da pasta `out/` para `/public_html`

Estrutura final em `/public_html`:
```
/public_html
  ├── index.html
  ├── _next/
  ├── favicon.ico
  ├── og.jpg
  ├── hero.mp4
  ├── casal.jpeg
  └── (outros arquivos...)
```

### Configurar .htaccess (importante!)

Crie arquivo `.htaccess` em `/public_html`:
```apache
# Forçar HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Fallback para index.html (SPA)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compressão Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript
</IfModule>
```

---

## 🎯 Qual opção escolher?

### Use OPÇÃO 1 (Node.js) se:
✅ Plano Business ou superior
✅ Quer funcionalidades completas Next.js
✅ Otimização de imagens automática
✅ Melhor performance

### Use OPÇÃO 2 (Estático) se:
⚠️ Plano compartilhado básico (sem Node.js)
⚠️ Aceita limitações de imagens
⚠️ Site relativamente simples

---

## 📝 Checklist Final

Antes de fazer o deploy:

- [ ] Verificar se plano Hostinger tem Node.js
- [ ] Fazer backup do código
- [ ] Testar build localmente (`npm run build`)
- [ ] Configurar variáveis de ambiente se necessário
- [ ] Ter credenciais FTP/SSH da Hostinger
- [ ] Domínio configurado e apontando para Hostinger

---

## 🆘 Problemas Comuns

**Erro: "Cannot find module 'next'"**
→ Rode `npm install` no servidor

**Erro 500 Internal Server Error**
→ Verifique logs no painel Hostinger
→ Cheque se Node.js version é compatível (18+)

**Imagens não carregam**
→ Verifique se pasta `public/` foi enviada corretamente
→ Para export estático, use `images.unoptimized: true`

**Página em branco**
→ Abra console do navegador (F12) para ver erros
→ Verifique se todos os arquivos `.next/` foram enviados

---

## 💡 Dica Extra

Se seu plano Hostinger NÃO tem Node.js e você quer funcionalidades completas:
1. **Vercel (grátis)** + apontar domínio Hostinger = Melhor solução
2. **Upgrade plano Hostinger** para Business
3. **Migrar para VPS** (mais caro, mais controle)

Quer que eu te ajude com qual opção específica?
