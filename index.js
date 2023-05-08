var express = require('express');
var server = express();

server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.sendFile(__dirname +  '/apple-app-site-association');
});

server.get('/*', function(request, response) {
  response.send(request.originalUrl);
});

// server.get('/vc/*', function(request, response) {
//   const text = request.params[0];
//   response.send(text);
// });

// server.get('/skip-app/vc/*', function(request, response) {
//   const text = request.params[0];
//   response.send(text);
// });

server.listen(8080);