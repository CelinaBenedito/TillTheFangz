var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarGeneros", function (req,res){
    personagensController.listar(req,res);
});
router.get("/listarAtributos", function (req,res){
    personagensController.listar(req,res);
});
router.get("/listarInteresse", function (req,res){
    personagensController.listar(req,res);
});
router.get("/listarClasse", function (req,res){
    personagensController.listar(req,res);
});

module.exports = router;