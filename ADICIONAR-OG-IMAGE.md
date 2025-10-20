# 🎯 Como adicionar a imagem OG para compartilhamento

## 📸 A imagem que você enviou precisa ser salva como:

**Nome do arquivo:** `og-image.jpg`  
**Localização:** `/Users/franciscopontes/Documents/sd-adv/sd-adv/public/og-image.jpg`

---

## 📋 PASSO A PASSO:

### 1️⃣ Salvar a imagem

1. **Baixe/Salve** a imagem que você enviou (logo verde com dourado)
2. **Renomeie** para: `og-image.jpg`
3. **Mova** para a pasta:
   ```
   /Users/franciscopontes/Documents/sd-adv/sd-adv/public/
   ```

### 2️⃣ Tamanho ideal para OG Image

**Dimensões recomendadas:** 1200x630px

Se precisar redimensionar:
- Use https://www.iloveimg.com/pt/redimensionar-imagem
- Configure para: 1200 x 630 pixels
- Salve como `og-image.jpg`

---

## ✅ Depois de salvar a imagem:

### 1. Fazer novo build
```bash
cd /Users/franciscopontes/Documents/sd-adv/sd-adv
npm run build
```

### 2. Enviar para Hostinger

Você tem **2 opções**:

#### Opção A: Enviar só a imagem nova (RÁPIDO)
1. File Manager da Hostinger
2. Navegue até `/public_html`
3. Upload do arquivo `og-image.jpg`
4. **Pronto!** Não precisa enviar tudo de novo

#### Opção B: Atualizar tudo (se quiser)
1. Delete conteúdo de `/public_html`
2. Envie nova pasta `out/` completa
3. Inclui a nova imagem `og-image.jpg`

---

## 🎨 Como ficará quando compartilhar:

### No WhatsApp, Facebook, LinkedIn:
```
┌─────────────────────────────────┐
│  [Imagem logo verde com dourado]│
│                                  │
│  Silva & Duarte Advocacia       │
│  Direito Trabalhista,           │
│  Previdenciário e Cível         │
│                                  │
│  Referência em Direito...       │
│                                  │
│  silvaduarteadvogados.com       │
└─────────────────────────────────┘
```

---

## 🧪 Testar se está funcionando:

### Depois de fazer deploy:

1. **Facebook Debugger:**
   https://developers.facebook.com/tools/debug/
   - Cole o link: `https://silvaduarteadvogados.com`
   - Clique em "Depurar"
   - Deve mostrar a imagem!

2. **Twitter Card Validator:**
   https://cards-dev.twitter.com/validator
   - Cole o link
   - Deve mostrar preview

3. **LinkedIn Post Inspector:**
   https://www.linkedin.com/post-inspector/
   - Cole o link
   - Valida o preview

---

## 📝 O que já foi configurado:

✅ Meta tags SEO completas  
✅ Open Graph (Facebook, WhatsApp, LinkedIn)  
✅ Twitter Cards  
✅ Keywords para Google  
✅ Robots para indexação  
✅ Favicon  
✅ metadataBase configurado  

**Só falta:** Adicionar o arquivo `og-image.jpg` na pasta `public/`

---

## 🔄 Fluxo completo:

1. ✅ Código atualizado com meta tags
2. ⏳ **VOCÊ FAZ:** Salva `og-image.jpg` em `public/`
3. ⏳ **VOCÊ FAZ:** `npm run build`
4. ⏳ **VOCÊ FAZ:** Upload da pasta `out/` (ou só `og-image.jpg`)
5. ✅ Link compartilhável com imagem e descrição!

---

## 💡 Dica:

Se você **só adicionar** a imagem `og-image.jpg` na pasta `public/` e fazer upload dela para `/public_html`, **já funciona**!

Não precisa refazer todo o deploy, só adicionar este arquivo novo.

---

**Próximo passo:** Salve a imagem como `og-image.jpg` e me avise! 🚀
