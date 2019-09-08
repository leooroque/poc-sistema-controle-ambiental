var jwt = require('jsonwebtoken');

var AdministracaoToken = class AdministracaoToken{
    gerarToken(usuario){
        return jwt.sign({
            usuario
        }, 'supersecret', {
                expiresIn: 10000
            });
    }
}

exports.AdministracaoToken = AdministracaoToken;