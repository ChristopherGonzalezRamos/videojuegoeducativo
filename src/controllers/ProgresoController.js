const ProgresoModel = require("../models/ProgresoModel");

 class ProgresoController{
    static async indexGet(req,res){
        let data = await ProgresoModel.consultar();
        res.send(data);
    }

    static async itemGet(req,res){
        let id = req.params.id;
        let data = await ProgresoModel.consultarPorId(id);
        if (data.lenght > 0){
            res.send(data[0]);
            return;
        }
        res.status(404).send({error: 'Not Found'});
        
    }

}

module.exports = ProgresoController;