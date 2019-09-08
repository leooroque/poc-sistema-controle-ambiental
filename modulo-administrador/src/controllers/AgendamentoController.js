const AgendamentoDAO = require('../dao/AgendamentoDAO').AgendamentoDAO;
const AdministracaoToken = require('../utils/AdministracaoToken').AdministracaoToken;
module.exports = {
    agendarCorrecao(req,resp){
        const { agendamento } = req.body;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AgendamentoDAO().inserirAgendamento(agendamento)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        return resp.status(403).json('Token inválido para executar essa ação!'); 
    },
    excluirAgendamento(req,resp){
        const { id } = req.params;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AgendamentoDAO().excluirAgendamento(id)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        return resp.status(403).json('Token inválido para executar essa ação!'); 
    },
    consultarAgendamento(req,resp){
        const { id_ativo } = req.params;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AgendamentoDAO().consultarAgendamentoPorAtivo(id_ativo)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        return resp.status(403).json('Token inválido para executar essa ação!'); 
    },
    atualizarAgendamento(req,resp){
        const { agendamento } = req.body;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AgendamentoDAO().atualizarAgendamento(agendamento)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        return resp.status(403).json('Token inválido para executar essa ação!'); 
    }
}