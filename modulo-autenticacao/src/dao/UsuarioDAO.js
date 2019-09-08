var users = [{"id":"Administrador", "password":"827ccb0eea8a706c4c34a16891f84e7b","perfil":1},{"id":"Morador", "password":"202cb962ac59075b964b07152d234b70","perfil":2}]
var UsuarioDAO = class UsuarioDAO{

    consultarUsuario(usuario){
        var _usuario =  users.filter((_usuario)=>_usuario.id == usuario.id);
        return (_usuario.length > 0) ? _usuario[0] : _usuario;
    }
}

exports.UsuarioDAO = UsuarioDAO;