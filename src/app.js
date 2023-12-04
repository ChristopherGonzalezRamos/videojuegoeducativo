const express = require('express');
const app = express();
const port = 80;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola y bienvenid@ a tu perfil');
});

app.listen(puerto, function() {
    console.log("Servidor en espera");
});