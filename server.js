const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080; // Changed from 8000 to 8080

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
  console.log(`Requisição: ${req.url}`);
  
  // Decodificar a URL para lidar com espaços e caracteres especiais
  let filePath = '.' + decodeURIComponent(req.url);
  
  // Se for a raiz, servir o index.html
  if (filePath === './' || filePath === '.') {
    filePath = './index.html';
  }
  
  // Normalizar o caminho do arquivo
  filePath = path.resolve(filePath);
  const rootPath = path.resolve('.');
  
  // Verificar se o arquivo está dentro do diretório raiz
  if (!filePath.startsWith(rootPath)) {
    res.writeHead(403);
    res.end('Acesso negado');
    return;
  }
  
  // Obter a extensão do arquivo
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  // Log para debug
  console.log(`Servindo arquivo: ${filePath}`);
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error(`Erro ao ler arquivo ${filePath}:`, error);
      if (error.code === 'ENOENT') {
        // Arquivo não encontrado
        fs.readFile('./404.html', (err, content404) => {
          if (err) {
            // Se nem a página 404 existir, enviar uma resposta simples
            res.writeHead(404, { 
              'Content-Type': 'text/html',
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
            });
            res.end('<h1>404 - Página não encontrada</h1><p>O arquivo solicitado não foi encontrado.</p>', 'utf-8');
          } else {
            res.writeHead(404, { 
              'Content-Type': 'text/html',
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
            });
            res.end(content404, 'utf-8');
          }
        });
      } else {
        // Outro erro do servidor
        res.writeHead(500, {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        });
        res.end(`Erro do servidor: ${error.code}`);
      }
    } else {
      // Sucesso
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
  console.log(`Acesse http://${hostname}:${port}/ para visualizar o cronograma`);
  console.log(`Diretório atual: ${process.cwd()}`);
});