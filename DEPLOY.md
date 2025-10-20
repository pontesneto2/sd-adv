# 🚀 Guia de Deploy - Silva & Duarte Advocacia

## Opção 1: Vercel (Recomendado - Mais Fácil)

### Passo 1: Deploy na Vercel
1. Acesse: https://vercel.com
2. Clique em "Sign up" e faça login com sua conta GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `pontesneto2/sd-adv`
5. Clique em "Deploy" (a Vercel detecta automaticamente que é Next.js)
6. Aguarde o deploy finalizar (2-3 minutos)

### Passo 2: Configurar Domínio da Hostinger
1. No painel da Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio (ex: `silvaduarteadvocacia.com.br`)
3. A Vercel vai te dar registros DNS para configurar

### Passo 3: Configurar DNS na Hostinger
1. Acesse o painel da Hostinger
2. Vá em "Domínios" > Seu domínio > "DNS/Nameservers"
3. Adicione os registros que a Vercel forneceu:
   - Tipo: `A` ou `CNAME`
   - Nome: `@` (para domínio principal) ou `www`
   - Valor: fornecido pela Vercel (ex: `76.76.21.21`)
4. Aguarde propagação DNS (pode levar até 48h, geralmente 1-2 horas)

✅ **Vantagens:**
- Grátis e ilimitado
- SSL automático (HTTPS)
- CDN global (site super rápido)
- Deploy automático a cada push no GitHub
- Suporte oficial Next.js

---

## Opção 2: Hostinger com Node.js (Mais Complexo)

⚠️ **Requer plano Hostinger Business ou superior** (que tenha Node.js)

### Passo 1: Build do Projeto
```bash
cd /Users/franciscopontes/Documents/sd-adv/sd-adv
npm run build
```

### Passo 2: Preparar arquivos
Você precisa enviar para a Hostinger:
- Pasta `.next` (gerada pelo build)
- Pasta `public`
- Pasta `node_modules` OU apenas o `package.json` + rodar `npm install` no servidor
- Arquivo `next.config.mjs`
- Arquivo `package.json`

### Passo 3: Configurar na Hostinger
1. Acesse o painel Hostinger
2. Vá em "Node.js App Manager"
3. Crie nova aplicação Node.js
4. Versão: 18.x ou superior
5. Modo de aplicação: Production
6. Comando de inicialização: `npm start`
7. Porta: (a Hostinger fornece automaticamente)

### Passo 4: Upload dos arquivos
Via FTP ou File Manager da Hostinger, envie todos os arquivos

### Passo 5: Instalar dependências (se não enviou node_modules)
No terminal SSH da Hostinger:
```bash
npm install --production
```

⚠️ **Desvantagens:**
- Mais complexo de configurar
- Precisa plano pago mais caro
- Sem deploy automático
- Você gerencia atualizações manualmente

---

## Opção 3: Build Estático (Limitado)

⚠️ **Não recomendado** - Next.js precisa de servidor Node.js para funcionalidades completas

Se REALMENTE precisar usar hospedagem compartilhada básica:

1. Modifique `next.config.mjs`:
```js
const nextConfig = {
  output: 'export', // Gera HTML estático
  images: {
    unoptimized: true // Desabilita otimização de imagens
  }
};
```

2. Build:
```bash
npm run build
```

3. Envie a pasta `out` para a Hostinger via FTP

❌ **Limitações:**
- Perde otimizações de imagem
- Sem API Routes
- Sem Server Components
- Sem ISR/SSR

---

## 🎯 Recomendação Final

**Use a Opção 1 (Vercel)** porque:
- ✅ Grátis
- ✅ Super rápido (CDN global)
- ✅ SSL automático
- ✅ Deploy automático
- ✅ Suporte Next.js completo
- ✅ Você mantém o domínio da Hostinger

O cliente continua pagando a Hostinger apenas pelo domínio, e o site fica hospedado na Vercel (muito melhor para Next.js).

---

## 📞 Próximos Passos

1. **Agora**: Fazer deploy na Vercel (5 minutos)
2. **Depois**: Apontar domínio da Hostinger para Vercel (configurar DNS)
3. **Opcional**: Adicionar variáveis de ambiente na Vercel se necessário

Precisa de ajuda com algum passo específico?
