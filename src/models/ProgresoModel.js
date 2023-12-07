const { connectMysql } = require('../dbconnection');
class ProgresoModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('progreso');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('progreso').where('id_progreso', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('progreso').insert(datos).returning('id_progreso');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('progreso').where('id_progreso', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_progreso'] = id;
        await db('progreso').where('id_progreso', id).del();
        await db.insert(newData).into('progreso');
        return id;
    }
}

module.exports = ProgresoModel;