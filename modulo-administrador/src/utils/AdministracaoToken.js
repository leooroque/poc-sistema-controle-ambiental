var jwt = require('jsonwebtoken');

var AdministracaoToken = class AdministracaoToken{
    validarToken(token){
        let validateToken;
        jwt.verify(token, 'supersecret', (err, decodificado) => {
            if (!!decodificado) {
                validateToken = decodificado;
            } else {
                validateToken = err;
            }
        });
        return validateToken;
    }
}

exports.AdministracaoToken = AdministracaoToken;