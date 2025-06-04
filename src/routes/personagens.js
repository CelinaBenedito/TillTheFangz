var express = require("express");
var router = express.Router();

var personagensController = require("../controllers/personagensController");

router.post("/cadastrar", function(req,res) {
    personagensController.cadastrar(req,res);
});
router.post("/cadastrarPontos", function(req,res){
    personagensController.cadastrarPontos(req,res);
});

router.get("/listar", function (req,res){
    personagensController.listar(req,res);
});

router.get("/listar/:idUsuario", function (req,res){
    personagensController.listarPorUsuario(req,res);
});

module.exports = router;