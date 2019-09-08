const redis = require('redis');
const AtivoDAO = require('../dao/AtivoDAO').AtivoDAO;
module.exports ={
    inserir(req,resp){
        const { ativo } = req.body
        return resp.json(new AtivoDAO().inserirAtivo(ativo));
    },
     consultar(req,resp){
        const { id } = req.params;
        var ativos = new AtivoDAO().consultarAtivo(id);
        return resp.json(ativos);
    },
    atualizar(req,resp){
        const { ativo } = req.body;
        return resp.json(new AtivoDAO().atualizarAtivo(ativo));
    },
    remover(req,resp){
        const  { id  } = req.params;
        return resp.json(new AtivoDAO().excluirAtivo(id));
    }
}