# Cronograma USF Apipucos

Sistema de agendamento e visualização de cronograma para a Unidade de Saúde da Família Apipucos.

## Como executar localmente

1. Certifique-se de ter o Node.js instalado
2. Navegue até a pasta do projeto
3. Execute o comando:
   ```
   node server.js
   ```
4. Acesse http://localhost:8080 no seu navegador

## Como publicar no Netlify

1. Crie uma conta em [Netlify](https://netlify.com)
2. Faça login na sua conta
3. Clique em "New site from Git" ou "Import an existing project"
4. Escolha a opção de deploy manual
5. Arraste e solte todos os arquivos do projeto (index.html, server.js, cronograma-dados.json, etc.) na área indicada
6. Clique em "Deploy site"
7. Seu site estará disponível em um URL fornecido pelo Netlify

## Funcionalidades

- Visualização do cronograma por dia da semana
- Resumo semanal do cronograma
- Edição das informações do cronograma
- Salvamento local das edições
- Envio de lembretes via WhatsApp
- Impressão do cronograma
- Personalização das cores da legenda

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js (para servidor local)
- LocalStorage (para persistência de dados)
- Font Awesome (para ícones)

## Personalização

### Agentes de Saúde
Os agentes de saúde incluídos são:
- Débora Ellen
- Margareth Lopes
- Simone Firmino
- Jadilene Paz
- Sandra Cristina
- Sandra Tavares
- Márcia Araújo

### Cores da Legenda
As cores da legenda podem ser personalizadas clicando nelas. Ao clicar, uma paleta de cores será exibida para seleção.

## Suporte

Para suporte, entre em contato com o desenvolvedor do sistema.