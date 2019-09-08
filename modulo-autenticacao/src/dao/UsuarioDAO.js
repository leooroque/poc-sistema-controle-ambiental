var users = [{"id":"Administrador", "password":"7cfdd07889b3295d6a550914ab35e068","perfil":1},{"id":"Morador", "password":"5289df737df57326fcdd22597afb1fac","perfil":2}]
var UsuarioDAO = class UsuarioDAO{

    consultarUsuario(usuario){
        var _usuario =  users.filter((_usuario)=>_usuario.id == usuario.id);
        return (_usuario.length > 0) ? _usuario[0] : _usuario;
    }
}

exports.UsuarioDAO = UsuarioDAO;