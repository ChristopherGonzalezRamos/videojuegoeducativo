const express = require('express');
const app = express();
const puerto = 80;

const UsuariosController = require('./controllers/UsuariosController');
app.use(express.json());
app.get('/usuarios', UsuariosController.indexGet);

const ProgresoController = require('./controllers/ProgresoController');
app.use(express.json());
app.get('/progreso', ProgresoController.indexGet);
app.get('/progreso/id([0-9]+)', ProgresoController.itemGet);

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola y bienvenid@ a tu perfil');
});

app.listen(puerto, function() {
    console.log("Servidor en espera");
});