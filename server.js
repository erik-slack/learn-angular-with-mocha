var http = require('http');
var fs = require('fs');

// Cria o serviço
http.createServer(function(req, res) {

  // lê o arquivo passado via URL
  fs.readFile(__dirname+req.url, 'utf8', function(error, data){
    
    // Página nao encontrada
    if (error){
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }

    // Saída HTML
    res.end(data);
  });

  // Ouvindo a porta:
}).listen(8080);

console.log('Server running on http://localhost:8080');
