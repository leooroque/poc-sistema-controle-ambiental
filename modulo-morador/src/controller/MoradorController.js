const MoradorDAO = require('../dao/MoradorDAO').MoradorDAO;
module.exports = {
    consultarManuais(req,resp){
        return resp.json(new MoradorDAO().consultarManuais())
    },
    consultarAlertas(req,resp){
        return resp.json(new MoradorDAO().consultarAlertas());
    }
}