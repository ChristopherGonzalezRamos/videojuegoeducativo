const ProgresoModel = require("../models/ProgresoModel");

 class ProgresoController{
    static async indexGet(req,res){
        let data = await ProgresoModel.consultar();
        res.send(data);
    }
}

module.exports = ProgresoController;