# 🚀 GUIA DE DEPLOY AUTOMÁTICO - HOSTINGER

## 📋 Opções Disponíveis

### Opção 1: GitHub Actions (Deploy 100% Automático) ⭐

**Como funciona:**
- Você faz `git push` → GitHub Actions faz build → Deploy automático na Hostinger
- Zero trabalho manual após configuração inicial

**Configuração:**

1. **Obter credenciais FTP da Hostinger:**
   - Acesse painel Hostinger
   - Vá em **Avançado** → **Gerenciador de Arquivos**
   - Anote:
     - Servidor FTP: `ftp.silvaduarteadvogados.com` ou IP
     - Usuário FTP: geralmente `u123456789` ou similar
     - Senha FTP: você define/redefine no painel

2. **Adicionar secrets no GitHub:**
   - Vá em: https://github.com/pontesneto2/sd-adv/settings/secrets/actions
   - Clique em **New repository secret**
   - Adicione 3 secrets:
     ```
     FTP_SERVER = ftp.silvaduarteadvogados.com
     FTP_USERNAME = seu-usuario-ftp
     FTP_PASSWORD = sua-senha-ftp
     ```

3. **Pronto! 🎉**
   - A cada `git push` no main, o site é atualizado automaticamente
   - Acompanhe em: https://github.com/pontesneto2/sd-adv/actions

**Vantagens:**
- ✅ Totalmente automático
- ✅ Histórico de deploys
- ✅ Rollback fácil (voltar versões)
- ✅ Sem dependências locais

---

### Opção 2: Script de Deploy Manual Rápido

**Como funciona:**
- Você roda `npm run deploy` → Build + Upload automático

**Configuração:**

1. **Instalar LFTP (cliente FTP):**
   ```bash
   brew install lftp
   ```

2. **Criar arquivo .env.local:**
   ```bash
   cp .env.example .env.local
   ```

3. **Preencher credenciais em .env.local:**
   ```
   FTP_HOST=ftp.silvaduarteadvogados.com
   FTP_USER=seu-usuario-ftp
   FTP_PASS=sua-senha-ftp
   ```

4. **Adicionar script ao package.json:**
   ```json
   "scripts": {
     "deploy": "./deploy.sh"
   }
   ```

5. **Usar:**
   ```bash
   npm run deploy
   ```

**Vantagens:**
- ✅ Um comando só para tudo
- ✅ Mais rápido que upload manual
- ✅ Não depende de GitHub

---

### Opção 3: FileZilla/Cyberduck (Manual mas rápido)

**Como funciona:**
- Usar cliente FTP gráfico

**Configuração:**

1. **Baixar FileZilla:**
   - https://filezilla-project.org/download.php?type=client

2. **Conectar:**
   - Host: `ftp.silvaduarteadvogados.com`
   - Usuário: seu-usuario-ftp
   - Senha: sua-senha-ftp
   - Porta: 21

3. **Salvar conexão** para reutilizar

4. **Arrastar pasta `out/` para `/public_html`**

**Vantagens:**
- ✅ Interface visual
- ✅ Controle total
- ✅ Fácil de usar

---

## 🎯 Qual escolher?

| Situação | Recomendação |
|----------|--------------|
| Deploy frequente | **GitHub Actions** |
| Rapidez no terminal | **Script deploy.sh** |
| Preferência visual | **FileZilla** |
| Projeto em equipe | **GitHub Actions** |
| Único desenvolvedor | **Script ou FileZilla** |

---

## 📝 Como obter credenciais FTP na Hostinger

### Método 1: Painel Hostinger

1. Login em https://hpanel.hostinger.com/
2. **Websites** → Seu site → **Avançado**
3. **Gerenciador de Arquivos** → Ícone FTP (topo direito)
4. Copie:
   - Servidor FTP
   - Nome de usuário
   - Senha (ou redefina)

### Método 2: Via File Manager

1. File Manager → Topo direito → Ícone **FTP**
2. Todas as informações aparecem na modal

---

## 🚀 Workflow Recomendado (GitHub Actions)

### Configuração Única (10 minutos):

```bash
# 1. O arquivo .github/workflows/deploy.yml JÁ ESTÁ CRIADO! ✅

# 2. Adicionar secrets no GitHub:
# - Acesse: https://github.com/pontesneto2/sd-adv/settings/secrets/actions
# - New secret:
#   FTP_SERVER = ftp.silvaduarteadvogados.com
#   FTP_USERNAME = u123456789 (exemplo)
#   FTP_PASSWORD = sua-senha-segura

# 3. Commit e push:
git add .
git commit -m "Setup GitHub Actions deploy"
git push

# 4. Pronto! A partir de agora:
git push  # → Deploy automático! 🎉
```

### Uso Diário:

```bash
# Fazer alterações no código
code src/components/...

# Commitar
git add .
git commit -m "Atualização do site"
git push

# ✨ GitHub Actions faz:
# 1. npm ci (instala dependências)
# 2. npm run build (gera out/)
# 3. Upload FTP automático
# 4. Site atualizado em 2-3 minutos!
```

---

## 🔒 Segurança

### ✅ BOM (GitHub Actions):
- Secrets criptografados no GitHub
- Nunca expõe credenciais no código
- Histórico de deploys
- Pode ser revogado facilmente

### ⚠️ CUIDADO (.env.local):
- Adicione ao .gitignore (já está)
- Nunca commite credenciais
- Use apenas localmente

### ❌ NUNCA:
- Commitar senhas no código
- Compartilhar .env.local
- Usar senhas fracas

---

## 📊 Comparação de Velocidade

| Método | Tempo Total |
|--------|-------------|
| Manual (File Manager) | ~10-15 min ⏱️ |
| FileZilla | ~5 min 🚀 |
| Script deploy.sh | ~2 min ⚡ |
| GitHub Actions | ~3 min (mas automático!) ✨ |

---

## 🎯 Minha Recomendação para Você:

### Use **GitHub Actions**! 

**Por quê?**
1. ✅ Você já usa Git (commit, push)
2. ✅ Deploy automático sempre que fizer push
3. ✅ Zero trabalho extra depois de configurar
4. ✅ Histórico completo de deploys
5. ✅ Seguro (secrets criptografados)

**Configuração:**
- 10 minutos para configurar os 3 secrets
- Depois nunca mais precisa se preocupar

**Fluxo:**
```bash
# Seu fluxo atual:
git add .
git commit -m "Mudanças"
git push

# Agora + deploy automático:
git add .
git commit -m "Mudanças"
git push  # ← Site atualiza sozinho em 3 min! 🎉
```

---

## 🆘 Troubleshooting

### Erro: "Connection refused"
- Verifique se FTP_SERVER está correto
- Tente usar IP direto em vez de domínio

### Erro: "Authentication failed"
- Redefina senha FTP no painel Hostinger
- Verifique usuário (geralmente começa com 'u')

### Erro: "Permission denied /public_html"
- Verifique se tem permissões de escrita
- Contate suporte Hostinger

### GitHub Actions não roda
- Verifique se adicionou os 3 secrets
- Vá em Actions → Último workflow → Ver log

---

## 📚 Arquivos Criados

1. ✅ `.github/workflows/deploy.yml` - GitHub Actions config
2. ✅ `deploy.sh` - Script de deploy manual
3. ✅ `.env.example` - Template de credenciais
4. ✅ `DEPLOY-AUTO.md` - Este guia

---

## 🎓 Próximos Passos

1. **Escolher método de deploy**
2. **Configurar credenciais FTP**
3. **Testar primeiro deploy**
4. **Automatizar!** 🚀

---

**Precisa de ajuda? Só chamar!** 🤝
