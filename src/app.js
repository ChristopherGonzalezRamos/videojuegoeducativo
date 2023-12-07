const express = require('express');
const app = express();
const puerto = 80;

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola y bienvenid@ a tu perfil');
});

const UsuariosController = require('./controllers/UsuariosController');
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

const ProgresoController = require('./controllers/ProgresoController');
app.get('/progreso', ProgresoController.indexGet);
app.get('/progreso/:id([0-9]+)', ProgresoController.itemGet);
app.post('/progreso', ProgresoController.indexPost);
app.put('/progreso/:id([0-9]+)', ProgresoController.itemPut);
app.patch('/progreso/:id([0-9]+)', ProgresoController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera");
});