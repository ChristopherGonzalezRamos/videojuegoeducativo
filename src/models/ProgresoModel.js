const db = require('../dbconnection');

class ProgresoModel{
    static async consultar(){
        let query= db('progreso');
        return await query;
    }
}

module.exports = ProgresoModel;