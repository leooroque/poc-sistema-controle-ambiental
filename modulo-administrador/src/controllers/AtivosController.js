const redis = require('redis');
const AtivoDAO = require('../dao/AtivoDAO').AtivoDAO;
const AdministracaoToken = require('../utils/AdministracaoToken').AdministracaoToken;
module.exports ={
    inserir(req,resp){
        const { ativo } = req.body
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AtivoDAO().inserirAtivo(ativo)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        return resp.status(403).json('Token inválido para executar essa ação!'); 
    },
     consultar(req,resp){
        const { id } = req.params;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AtivoDAO().consultarAtivo(id)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        resp.status(403).json('Token inválido para executar essa ação!'); 
    },
    atualizar(req,resp){
        const { ativo } = req.body;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AtivoDAO().atualizarAtivo(ativo)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        resp.status(403).json('Token inválido para executar essa ação!'); 
    },
    remover(req,resp){
        const  { id  } = req.params;
        const { token } = req.headers;
        let validacaoToken = new AdministracaoToken().validarToken(token);
        if(!validacaoToken.message){
            return (validacaoToken.usuario.perfil == 1) ? resp.json(new AtivoDAO().excluirAtivo(id)) : resp.status(403).json('Token inválido para executar essa ação!'); 
        }
        return resp.status(403).json('Token inválido para executar essa ação!'); ;
    },
    validarToken(){

    }
}