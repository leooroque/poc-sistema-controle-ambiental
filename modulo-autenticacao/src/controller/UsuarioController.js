var md5 = require('md5');
var AdministracaoToken = require('../utils/AdministracaoToken').AdministracaoToken;
var UsuarioDAO = require('../dao/UsuarioDAO').UsuarioDAO;

module.exports = {
    
    autenticar(req,resp){
        let { usuario } = req.body;
        let usuarioDAO = new UsuarioDAO();
        let _usuario = usuarioDAO.consultarUsuario(usuario);
        if(_usuario.password && _usuario.password == md5(usuario.password)){
            let token = new AdministracaoToken();
            return resp.json({"token":token.gerarToken(_usuario)});
        }
        return resp.status(403).json('Usuário ou password inválidos');
    }
}