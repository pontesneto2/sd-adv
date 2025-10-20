# 🎯 DECISÃO: Como fazer deploy na Hostinger?

## ❓ Primeiro: Descubra seu tipo de plano

### Acesse o painel da Hostinger e verifique:

**TEM Node.js?** → Siga o **CAMINHO A** (Melhor opção!)  
**NÃO TEM Node.js?** → Siga o **CAMINHO B** (Limitado)

---

## 🟢 CAMINHO A: Hostinger COM Node.js (Business+)

### ✅ Vantagens:
- Otimização de imagens automática
- Performance máxima
- Todas funcionalidades Next.js
- SEO melhor

### 📋 Passos:

1. **Prepare os arquivos:**
   ```bash
   ./prepare-hostinger.sh
   ```
   Isso cria a pasta `hostinger-deploy/` com tudo que precisa

2. **Envie via FTP:**
   - Use FileZilla, WinSCP ou File Manager da Hostinger
   - Envie TODO conteúdo de `hostinger-deploy/` para `/public_html`

3. **Configure Node.js App Manager:**
   - No hPanel: Advanced > Node.js
   - Create Application
   - Node version: 18.x ou 20.x
   - Application Root: `/home/usuario/public_html`
   - Startup File: `node_modules/next/dist/bin/next`
   - Command: `start`
   - Environment: `NODE_ENV=production`

4. **Instale dependências:**
   - SSH: `npm install --production`
   - OU use botão no painel Node.js

5. **Inicie a aplicação:**
   - Clique em "Start" no painel Node.js

6. **Configure domínio e SSL:**
   - Aponte domínio para a aplicação
   - Ative SSL (Let's Encrypt grátis)

**✅ PRONTO!** Seu site estará no ar com todas funcionalidades.

📖 **Guia completo:** `HOSTINGER-DEPLOY.md` (seção OPÇÃO 1)

---

## 🟡 CAMINHO B: Hostinger SEM Node.js (Básico)

### ⚠️ Limitações:
- Sem otimização automática de imagens
- Imagens podem carregar mais devagar
- Sem Server Components
- Site totalmente estático

### 📋 Passos:

1. **Modifique `next.config.mjs`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     trailingSlash: true,
   };
   export default nextConfig;
   ```

2. **Faça build estático:**
   ```bash
   npm run build
   ```
   Isso cria a pasta `out/`

3. **Envie para Hostinger:**
   - Via FTP ou File Manager
   - Envie TUDO de `out/` para `/public_html`

4. **Configure .htaccess:**
   - O arquivo `.htaccess` já está pronto na raiz
   - Copie ele para `/public_html` também

5. **Configure SSL:**
   - No hPanel, ative SSL gratuito

**✅ PRONTO!** Site no ar (com limitações de imagem).

📖 **Guia completo:** `HOSTINGER-DEPLOY.md` (seção OPÇÃO 2)

---

## 🤔 Ainda em dúvida?

### Como saber se tenho Node.js na Hostinger?

1. Faça login no **hPanel** (painel.hostinger.com.br)
2. Procure por:
   - "Node.js"
   - "Node.js App Manager"
   - "Node.js Application"
3. **Encontrou?** → Tem Node.js (use CAMINHO A)
4. **NÃO encontrou?** → Não tem (use CAMINHO B)

### Posso testar antes?

Sim! Teste localmente:

```bash
# Para produção completa (Caminho A):
npm run build
npm start

# Para estático (Caminho B):
# (modifique next.config.mjs primeiro)
npm run build
# Teste abrindo out/index.html no navegador
```

---

## 💰 E se meu plano não tem Node.js?

### Opções:

1. **Upgrade Hostinger** para Business (~R$ 15/mês)
   - Vale a pena para performance
   - SSL grátis
   - Node.js ilimitado

2. **Usar CAMINHO B** (export estático)
   - Funciona, mas com limitações
   - Imagens não otimizadas
   - Ok para sites pequenos

3. **Vercel + Domínio Hostinger** (grátis!)
   - Deploy na Vercel (grátis)
   - Aponta DNS da Hostinger para Vercel
   - Todas funcionalidades + CDN global
   - Melhor performance

---

## 🆘 Precisa de ajuda?

Abra issue no GitHub ou envie mensagem com:
- Qual plano Hostinger você tem?
- Tem acesso a Node.js App Manager?
- Preferência de deploy

**Boa sorte com o deploy!** 🚀
