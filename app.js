const http = require('http');

const puerto = 80;

const servidor = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola y bienvenid@ a tu perfil');
});

servidor.listen(puerto, function(){
    console.log('Servidor Iniciado')
});