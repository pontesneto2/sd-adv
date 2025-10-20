# ✅ DEPLOY ESTÁTICO - HOSTINGER (Hospedagem Compartilhada)

## 🎯 Situação:
- ✅ Build estático gerado com sucesso
- ✅ Pasta `out/` pronta para upload
- ✅ Seu plano: Hospedagem Compartilhada (sem Node.js)
- ⚠️ Limitação: Imagens não serão otimizadas automaticamente

---

## 📦 O QUE FAZER AGORA:

### 1️⃣ ACESSE O FILE MANAGER DA HOSTINGER

**Caminho no hPanel:**
```
Menu Principal 
  → Arquivos (ou Files)
    → File Manager (Gerenciador de arquivos)
```

OU acesse direto: `https://hpanel.hostinger.com.br/file-manager`

---

### 2️⃣ NAVEGUE ATÉ A PASTA public_html

1. No File Manager, abra a pasta `public_html`
2. **DELETE** tudo que está lá dentro (faça backup antes se tiver algo importante!)
3. A pasta deve ficar **completamente vazia**

---

### 3️⃣ FAÇA UPLOAD DOS ARQUIVOS

#### Opção A: Via File Manager (Mais fácil)

1. Clique em **"Upload"** no File Manager
2. Selecione **TODOS** os arquivos da pasta `out/` do seu computador:
   ```
   /Users/franciscopontes/Documents/sd-adv/sd-adv/out/
   ```
3. Arquivos a enviar:
   - `index.html` ⭐ (principal)
   - `404.html`
   - `favicon.ico`
   - `logo.png`
   - Todas as imagens (casal.jpeg, gabriel.jpeg, etc)
   - Pasta `_next/` (COMPLETA!)
   - Todos os arquivos .svg

#### Opção B: Via FTP (Mais rápido para muitos arquivos)

**Credenciais FTP:**
- Host: Veja em "Arquivos" → "FTP Accounts" no hPanel
- Usuário: Seu usuário FTP
- Senha: Sua senha FTP
- Porta: 21

**Usando FileZilla:**
1. Conecte-se ao FTP
2. Navegue até `/public_html`
3. Arraste TUDO da pasta `out/` para `/public_html`

---

### 4️⃣ ENVIE O ARQUIVO .htaccess

**IMPORTANTE:** O arquivo `.htaccess` já está pronto!

1. No File Manager, dentro de `/public_html`
2. Clique em "Upload"
3. Envie o arquivo `.htaccess` de:
   ```
   /Users/franciscopontes/Documents/sd-adv/sd-adv/.htaccess
   ```

**Este arquivo é ESSENCIAL para:**
- Forçar HTTPS
- Redirecionar URLs corretamente
- Cache de imagens
- Compressão Gzip

---

### 5️⃣ ESTRUTURA FINAL EM public_html

Deve ficar assim:
```
/public_html/
  ├── .htaccess          ⭐ IMPORTANTE!
  ├── index.html         ⭐ Página principal
  ├── 404.html
  ├── favicon.ico
  ├── logo.png
  ├── casal.jpeg
  ├── gabriel.jpeg
  ├── jessica.jpeg
  ├── natalia.jpeg
  ├── sabrinny.jpeg
  ├── file.svg
  ├── globe.svg
  ├── next.svg
  ├── vercel.svg
  ├── window.svg
  ├── index.txt
  └── _next/             ⭐ Pasta completa com subpastas
      └── static/
          └── chunks/
              └── (arquivos CSS, JS, etc)
```

---

### 6️⃣ CONFIGURE SSL (HTTPS)

1. No hPanel, vá em **"Segurança"** ou **"SSL"**
2. Ative **SSL gratuito** (Let's Encrypt)
3. Aguarde 5-10 minutos para ativar
4. O `.htaccess` vai redirecionar automaticamente HTTP → HTTPS

---

### 7️⃣ TESTE SEU SITE

Acesse seu domínio:
```
https://silvaduarteadvogados.com
```

**Deve funcionar!** 🎉

---

## ✅ CHECKLIST FINAL

Antes de considerar finalizado:

- [ ] Todos arquivos de `out/` foram enviados para `/public_html`
- [ ] Arquivo `.htaccess` está em `/public_html`
- [ ] Pasta `_next/` está completa em `/public_html/_next/`
- [ ] `index.html` está na raiz de `/public_html`
- [ ] SSL está ativo (cadeado verde no navegador)
- [ ] Site abre corretamente no domínio
- [ ] Imagens carregam (todas as fotos da equipe)
- [ ] Menu funciona e scroll suave funciona
- [ ] WhatsApp float aparece
- [ ] Animações funcionam ao rolar

---

## 🚨 PROBLEMAS COMUNS

### Site não abre / Página em branco
❌ **Causa:** `index.html` não está na raiz
✅ **Solução:** Mova `index.html` para `/public_html/index.html`

### Erro 404 em páginas
❌ **Causa:** `.htaccess` não foi enviado
✅ **Solução:** Envie `.htaccess` para `/public_html/.htaccess`

### Imagens não carregam
❌ **Causa:** Imagens não foram enviadas
✅ **Solução:** Certifique-se de enviar TODAS as imagens da pasta `out/`

### CSS não funciona / site sem estilo
❌ **Causa:** Pasta `_next/` incompleta
✅ **Solução:** Delete tudo e envie novamente, incluindo TODAS subpastas de `_next/`

### Erro de permissão
❌ **Causa:** Permissões incorretas
✅ **Solução:** No File Manager, selecione todos arquivos → Permissions → 644 para arquivos, 755 para pastas

### SSL não ativa
❌ **Causa:** Propagação DNS
✅ **Solução:** Aguarde até 24h, geralmente ativa em 10 minutos

---

## 📊 DIFERENÇAS: Este deploy vs Node.js

### ⚠️ O que você PERDE (deploy estático):
- Otimização automática de imagens (Next.js Image)
- Server Side Rendering (SSR)
- API Routes

### ✅ O que você TEM (deploy estático):
- Site funcional completo ✅
- Todas animações ✅
- Menu e navegação ✅
- WhatsApp e formulários ✅
- Performance ótima (arquivos estáticos são rápidos) ✅
- SSL grátis ✅

**As imagens já estão otimizadas manualmente, então não há problema!**

---

## 💰 UPGRADE FUTURO (Opcional)

Se quiser otimização completa no futuro:
1. **Upgrade para Business Hostinger** (~R$ 15/mês) = Node.js incluso
2. **Migrar para Vercel** (grátis) = Todas funcionalidades + CDN global

---

## 🆘 PRECISA DE AJUDA?

**Comandos úteis:**

Ver pasta out no computador:
```bash
cd /Users/franciscopontes/Documents/sd-adv/sd-adv
ls -la out/
```

Recompilar se fizer mudanças:
```bash
npm run build
```

---

## 📞 PRONTO PARA COMEÇAR?

1. Acesse File Manager da Hostinger
2. Limpe `/public_html`
3. Envie conteúdo de `out/`
4. Envie `.htaccess`
5. Ative SSL
6. Teste o site

**Boa sorte! Qualquer dúvida, me chame!** 🚀✨

---

_Data do build: 20/10/2025_
_Pasta a enviar: /Users/franciscopontes/Documents/sd-adv/sd-adv/out/_
