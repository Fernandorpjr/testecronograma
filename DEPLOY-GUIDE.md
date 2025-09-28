# 🚀 Guia de Deploy - Cronograma USF Apipucos v2.0

## 📋 Arquivos Principais da Versão Melhorada

- `index-melhorado.html` - Arquivo principal com todas as melhorias
- `package-melhorado.json` - Configurações do projeto atualizadas
- `netlify-melhorado.toml` - Configuração otimizada para Netlify
- `manifest.json` - Manifesto PWA para instalação
- `sw.js` - Service Worker para funcionalidade offline
- `README-melhorado.md` - Documentação atualizada

## 🌟 Melhorias Implementadas

### ✨ Interface e UX
- Design responsivo aprimorado
- Animações suaves e transições
- Loading spinner durante carregamento
- Notificações toast para feedback
- Suporte a temas escuro/claro
- Navegação por teclado (Ctrl+S, Ctrl+P, Ctrl+E)

### 🔧 Funcionalidades
- PWA (Progressive Web App) - Instalável no celular
- Funcionalidade offline com Service Worker
- Exportação para CSV
- Backup automático no localStorage
- Validação de dados aprimorada
- Tratamento de erros robusto

### 📱 Mobile-First
- Interface otimizada para dispositivos móveis
- Touch gestures
- Viewport otimizado
- Ícones de alta resolução

### ⚡ Performance
- Lazy loading de recursos
- Cache inteligente
- Compressão de imagens
- Minificação automática

## 🚀 Opções de Deploy

### 1. Netlify (Recomendado)

#### Deploy Manual
1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta
3. Clique em "New site from Git" ou "Deploy manually"
4. Arraste os seguintes arquivos:
   - `index-melhorado.html` (renomeie para `index.html`)
   - `cronograma-dados.json`
   - `logotipo-recife-cuida.jpeg`
   - `logotipo-sus.jpeg`
   - `manifest.json`
   - `sw.js`
   - `netlify-melhorado.toml` (renomeie para `netlify.toml`)
5. Clique em "Deploy site"

#### Deploy via Git
```bash
# 1. Inicializar repositório
git init
git add .
git commit -m "Deploy versão melhorada v2.0"

# 2. Conectar ao GitHub
git remote add origin https://github.com/seu-usuario/cronograma-usf-apipucos.git
git push -u origin main

# 3. No Netlify, conectar ao repositório GitHub
```

### 2. Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

1. Faça upload dos arquivos para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha "main" branch
5. Salve as configurações

### 4. Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar projeto
firebase init hosting

# Deploy
firebase deploy
```

## 🔧 Configurações Pós-Deploy

### 1. Configurar Domínio Personalizado
- No Netlify: Site settings > Domain management
- Adicione seu domínio personalizado
- Configure SSL automático

### 2. Configurar Analytics (Opcional)
Adicione o código do Google Analytics no `index-melhorado.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Configurar PWA
- O manifesto já está configurado
- Os usuários poderão instalar o app no celular
- Funciona offline após primeira visita

## 📱 Como Instalar como App

### Android
1. Abra o site no Chrome
2. Toque no menu (3 pontos)
3. Selecione "Instalar app"
4. Confirme a instalação

### iOS
1. Abra o site no Safari
2. Toque no botão de compartilhar
3. Selecione "Adicionar à Tela de Início"
4. Confirme

## 🔍 Monitoramento e Manutenção

### Verificar Performance
- Use o Lighthouse do Chrome DevTools
- Monitore Core Web Vitals
- Verifique funcionamento offline

### Atualizações
1. Edite os arquivos necessários
2. Atualize a versão no `package-melhorado.json`
3. Faça novo deploy
4. O Service Worker atualizará automaticamente

## 🆘 Solução de Problemas

### PWA não instala
- Verifique se o `manifest.json` está acessível
- Confirme se o site usa HTTPS
- Verifique se o Service Worker está registrado

### Funcionalidade offline não funciona
- Verifique se o `sw.js` está sendo carregado
- Confirme se os arquivos estão sendo cacheados
- Teste em modo incógnito

### Dados não salvam
- Verifique se o localStorage está habilitado
- Confirme se não há erros no console
- Teste a função de backup

## 📞 Suporte

Para suporte técnico:
- Verifique o console do navegador (F12)
- Teste em diferentes navegadores
- Verifique a conexão de internet

## 🎯 Próximos Passos

1. **Monitoramento**: Configure alertas de uptime
2. **Backup**: Configure backup automático dos dados
3. **Integração**: Conecte com sistemas da prefeitura
4. **Notificações**: Implemente push notifications
5. **Relatórios**: Adicione geração de relatórios PDF

---

**Versão**: 2.0.0  
**Data**: $(date)  
**Desenvolvido para**: USF Apipucos - Recife/PE