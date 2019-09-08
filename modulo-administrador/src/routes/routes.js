const express = require('express');
const AtivosController = require('../controllers/AtivosController');
const AgendamentoController = require('../controllers/AgendamentoController');
const routes = express.Router();

/**Ativos Controller */
routes.post('/ativo/inserir',AtivosController.inserir);
routes.post('/ativo/atualizar',AtivosController.atualizar);
routes.get('/ativo/consultar/:id',AtivosController.consultar);
routes.get('/ativo/excluir/:id',AtivosController.remover);

/**Agendamento Controller */
routes.post('/agendamento/inserir',AgendamentoController.agendarCorrecao);
routes.post('/agendamento/atualizar',AgendamentoController.atualizarAgendamento);
routes.get('/agendamento/consultar/:id_ativo',AgendamentoController.consultarAgendamento);
routes.get('/agendamento/excluir/:id',AgendamentoController.excluirAgendamento);

module.exports = routes;