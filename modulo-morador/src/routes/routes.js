const express = require('express');
const MoradorController = require('../controller/MoradorController');
const routes = express.Router();

routes.get('/consultar/manuais',MoradorController.consultarManuais);
routes.get('/consultar/alertas',MoradorController.consultarAlertas);

module.exports = routes;