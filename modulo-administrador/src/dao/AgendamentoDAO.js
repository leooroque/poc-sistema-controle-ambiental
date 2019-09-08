var agendamentos = [];
var AgendamentoDAO = class AgendamentoDAO{
    
    inserirAgendamento(agendamento){
        let listagemAgendamentos =  agendamentos.filter((_agedamento)=>_agedamento.id == agedamento.id);
        if(listagemAgendamentos.length > 0){
            return 'Esse ID já esta cadastrado em outro agendamento.'
        }
        agendamentos.push(agendamento);
        return 'Agendamento cadastrado com sucesso !';
    }

    excluirAgendamento(id){
        var listagemAgendamentos =  agendamentos.filter((agendamento)=>agendamento.id != id);
        agendamentos = listagemAgendamentos;
        return 'Agendamento excluido com sucesso';
    }

    consultarAgendamentoPorAtivo(id_ativo){
        var listagemAgendamentos =  agendamentos.filter((agendamento)=>agendamento.id_ativo == id_ativo);
            return listagemAgendamentos;
    }

    atualizarAgendamento(agendamento){
        var listagemAgendamentos =  agendamentos.filter((_agendamento)=>_agendamento.id != agendamento.id);
        listagemAgendamentos.push(agendamento);
        agendamentos = listagemAgendamentos;
        return 'Ativo atualizado com sucesso';
    }
}

exports.AgendamentoDAO = AgendamentoDAO;