const AgendamentoDAO = require('../dao/AgendamentoDAO').AgendamentoDAO;
module.exports = {
    agendarCorrecao(req,resp){
        const { agendamento } = req.body;
        return resp.json(new AgendamentoDAO().inserirAgendamento(agendamento));
    },
    excluirAgendamento(req,resp){
        const { id } = req.params;
        return resp.json(new AgendamentoDAO().excluirAgendamento(id));
    },
    consultarAgendamento(req,resp){
        const { id_ativo } = req.params;
        return resp.json(new AgendamentoDAO().consultarAgendamentoPorAtivo(id_ativo));
    },
    atualizarAgendamento(req,resp){
        const { agendamento } = req.body;
        return resp.json(new AgendamentoDAO().atualizarAgendamento(agendamento));
    }
}