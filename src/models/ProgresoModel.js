const db = require('../dbconnection');

class ProgresoModel{
    static async consultar(){
        let query= db('progreso');
        return await query;
    }

    static async consultarPorId(id){
        return await db('progreso').where ('id_progreso', id);
    }

    static async insertar(progreso){
        return await db('progreso').insert(progreso);
    }

    static async indexPost(req,res){
        let data = {
            'tipo_progreso' : req.body.nombre
        };
        await ProgresoModel.insertar(data);
    }

}

module.exports = ProgresoModel;