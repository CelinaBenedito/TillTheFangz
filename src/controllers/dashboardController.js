 var dashboardModel = require("../models/dashboardModel");

 function listarPorGeneros(req,res){
     
     dashboardModel.listarPorGeneros().then(function(resultado){
         res.status(200).json(resultado);
     }).catch(function(erro){
         res.status(500).json(erro.sqlMessage);
     })
 }
  function listarPorInteresse(req,res){
     var idUsuario = req.params.idUsuario;
     dashboardModel.listarPorInteresse(idUsuario).then(function(resultado){
         res.status(200).json(resultado);
     }).catch(function(erro){
         res.status(500).json(erro.sqlMessage);
     })
 }

  function listarPorAtributos(req,res){
     var idUsuario = req.params.idUsuario;
     dashboardModel.listarPorGeneros(idUsuario).then(function(resultado){
         res.status(200).json(resultado);
     }).catch(function(erro){
         res.status(500).json(erro.sqlMessage);
     })
 }
   function listarPorClasse(req,res){
     var idUsuario = req.params.idUsuario;
     dashboardModel.listarPorGeneros(idUsuario).then(function(resultado){
         res.status(200).json(resultado);
     }).catch(function(erro){
         res.status(500).json(erro.sqlMessage);
     })
 }

 module.exports = {
    listarPorAtributos,
    listarPorClasse,
    listarPorGeneros,
    listarPorInteresse
}