# Guia Completo para Publicar o Cronograma USF Apipucos

## Correções Realizadas

1. **Problema do cronograma desaparecendo após salvar**:
   - Corrigido o bug na função `saveSchedule()` que fazia o cronograma desaparecer
   - Implementada a função `applySavedSchedule()` para manter o cronograma visível após salvar
   - Aprimorada a função `loadSavedSchedule()` para carregar dados salvos corretamente

2. **Restauração do botão de confirmação do WhatsApp**:
   - Adicionado o botão "Enviar Confirmação via WhatsApp" com ícone
   - Mantida a funcionalidade do formulário de lembrete personalizado

3. **Adição do botão "Compartilhe no WhatsApp"**:
   - Adicionado novo botão para compartilhar o cronograma diretamente pelo WhatsApp
   - Implementada a função `shareViaWhatsApp()` para gerar e enviar o conteúdo

4. **Melhoria na seleção de cores da legenda**:
   - Substituída a entrada de texto por um prompt simples (devido a limitações técnicas)
   - As cores selecionadas continuam sendo salvas no localStorage

5. **Correção na funcionalidade de edição e salvamento**:
   - Aprimorada a função `editSchedule()` para ativar o modo de edição corretamente
   - Melhorada a função `saveSchedule()` para coletar e salvar todos os dados editados
   - Adicionada a capacidade de carregar dados salvos automaticamente

## Como Publicar no Netlify (Método Recomendado)

### Passo 1: Preparar os arquivos
1. Certifique-se de que todos os arquivos estão na pasta do projeto:
   - `index.html`
   - `cronograma-dados.json`
   - `logotipo-recife-cuida.jpeg`
   - `logotipo-sus.jpeg`
   - `server.js`
   - `package.json`
   - `README.md`

### Passo 2: Criar conta no Netlify
1. Acesse [https://netlify.com](https://netlify.com)
2. Clique em "Sign up" e crie uma conta (pode usar GitHub, Google ou email)

### Passo 3: Publicar o site
1. Faça login na sua conta do Netlify
2. Clique em "New site from Git" ou "Import an existing project"
3. Escolha a opção "Deploy manually" (implantar manualmente)
4. Arraste e solte todos os arquivos do projeto na área indicada
5. Clique em "Deploy site"
6. Aguarde alguns minutos até que o site seja publicado
7. O Netlify fornecerá um URL para acessar seu site

## Como Publicar no GitHub Pages

### Passo 1: Criar repositório no GitHub
1. Acesse [https://github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Dê um nome ao repositório (ex: `cronograma-usf-apipucos`)
4. Deixe como público
5. Não inicialize com README

### Passo 2: Enviar arquivos para o repositório
1. No terminal, navegue até a pasta do projeto:
   ```
   cd c:\Users\ferna\CRONOGRAMA
   ```
2. Inicialize o repositório Git:
   ```
   git init
   git add .
   git commit -m "Primeira versão do cronograma"
   ```
3. Conecte ao repositório remoto (substitua `seu-usuario` pelo seu nome de usuário do GitHub):
   ```
   git remote add origin https://github.com/seu-usuario/cronograma-usf-apipucos.git
   git branch -M main
   git push -u origin main
   ```

### Passo 3: Ativar GitHub Pages
1. No GitHub, vá para a página do seu repositório
2. Clique em "Settings" (Configurações)
3. No menu lateral, clique em "Pages"
4. Em "Source", selecione "Deploy from a branch"
5. Em "Branch", selecione "main" e "/ (root)"
6. Clique em "Save"
7. Aguarde alguns minutos e o site estará disponível no URL fornecido

## Como Publicar em Hospedagem Tradicional

### Requisitos
- Hospedagem com suporte a HTML/CSS/JavaScript
- Acesso FTP ou gerenciador de arquivos

### Passo 1: Preparar os arquivos
1. Compacte todos os arquivos do projeto em um arquivo ZIP
2. Ou selecione todos os arquivos individualmente

### Passo 2: Enviar para a hospedagem
1. Acesse o painel de controle da sua hospedagem
2. Use o gerenciador de arquivos ou cliente FTP para enviar os arquivos
3. Envie todos os arquivos para a pasta pública (geralmente `public_html` ou `www`)

### Passo 3: Testar o site
1. Acesse o domínio fornecido pela sua hospedagem
2. Verifique se todos os elementos estão funcionando corretamente

## Funcionalidades Disponíveis

### Visualização do Cronograma
- Visualização por dia da semana (Segunda a Sexta)
- Resumo semanal do cronograma
- Cores diferenciadas para cada tipo de atividade

### Edição e Personalização
- Edição das informações do cronograma
- Salvamento local das edições
- Personalização das cores da legenda
- Edição das datas

### Comunicação
- Envio de agenda via WhatsApp
- Envio de confirmações personalizadas via WhatsApp
- **Compartilhamento do cronograma via WhatsApp**
- Número de WhatsApp editável

### Utilitários
- Impressão do cronograma
- Profissionais da unidade listados
- Legenda com cores personalizáveis

## Suporte Técnico

### Problemas Comuns e Soluções

1. **Cronograma não aparece**:
   - Verifique se o arquivo `cronograma-dados.json` está presente
   - Limpe o cache do navegador
   - Recarregue a página (F5 ou Ctrl+R)

2. **Logos não aparecem**:
   - Verifique se os arquivos de imagem estão na pasta correta
   - Confirme se os nomes dos arquivos estão corretos

3. **Dados não são salvos**:
   - Verifique se o navegador permite o uso do localStorage
   - Certifique-se de clicar em "Salvar Alterações" após editar

4. **WhatsApp não funciona**:
   - Verifique se o número está no formato correto (+5511999999999)
   - Confirme se o WhatsApp está instalado no dispositivo

### Contato para Suporte
Para suporte técnico adicional, entre em contato com o desenvolvedor do sistema.

## Manutenção

### Atualizando os Dados
1. Edite o arquivo `cronograma-dados.json` com as novas informações
2. Ou use a função de edição no próprio site e salve as alterações

### Atualizando o Design
1. Modifique o arquivo `index.html` para alterar o layout
2. Edite o CSS embutido na seção `<style>` para mudar as cores e estilos

### Adicionando Novos Profissionais
1. Edite a seção "Profissionais da Unidade" no arquivo `index.html`
2. Adicione os novos profissionais nas listas apropriadas

## Considerações Finais

O sistema de cronograma USF Apipucos está pronto para ser publicado e utilizado. Todas as correções foram implementadas e testadas para garantir o funcionamento correto de todas as funcionalidades.

Para qualquer dúvida ou problema adicional, consulte este guia ou entre em contato com o suporte técnico.