const UsuariosModel= require("../models/UsuariosModel");

 class UsuariosController{
    static async indexGet(req,res){
        let data = await UsuariosModel.consultar();
        res.send(data);
    }
}

module.exports = UsuariosController;