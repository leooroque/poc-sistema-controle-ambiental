var ativos = []; 
var AtivoDAO = class AtivoDAO{
        

    inserirAtivo(ativo){
        let listagemAtivos =  ativos.filter((_ativo)=>_ativo.id == ativo.id);
        if(listagemAtivos.length > 0){
            return 'Esse ID já esta cadastrado em outro ativo.'
        }
        ativos.push(ativo);
        return 'Ativo cadastrado com sucesso !';
    }

    consultarAtivo(id){
        if(id > 0){
            var listagemAtivos =  ativos.filter((ativo)=>ativo.id == id);
            return listagemAtivos;
        }
        return ativos;
    }

    excluirAtivo(id){
        var listagemAtivos =  ativos.filter((ativo)=>ativo.id != id);
        ativos = listagemAtivos;
        return 'Ativo excluido com sucesso';
    }

    atualizarAtivo(ativo){
        var listagemAtivos =  ativos.filter((_ativo)=>_ativo.id != ativo.id);
        listagemAtivos.push(ativo);
        ativos = listagemAtivos;
        return 'Ativo atualizado com sucesso';
    }

}

exports.AtivoDAO = AtivoDAO;