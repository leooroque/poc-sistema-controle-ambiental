const express = require('express');
const UsuarioController = require('../controller/UsuarioController');
const routes = express.Router();

/**Usuario Controller */
routes.post('/auth',UsuarioController.autenticar);


module.exports = routes;