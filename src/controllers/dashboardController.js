 var dashboardModel = require("../models/dashboardModel");

 function listarPorUsuario(req,res){
     var idUsuario = req.params.idUsuario;
     dashboardModel.listarPorUsuario(idUsuario).then(function(resultado){
         res.status(200).json(resultado);
     }).catch(function(erro){
         res.status(500).json(erro.sqlMessage);
     })
 }