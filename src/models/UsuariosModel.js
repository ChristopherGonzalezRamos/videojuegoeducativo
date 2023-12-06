const db = require('../dbconnection');

class UsuariosModel{
    static async consultar(){
        let query= db('usuarios');
        return await query;
    }
}

module.exports = UsuariosModel;