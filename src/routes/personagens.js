var express = require("express");
var router = express.Router();

var personagensController = require("../controllers/personagensController");

router.post("/cadastrar", function(req,res) {
    personagensController.cadastrar(req,res);
});
router.get("/listar", function (req,res){
    personagensController.listar(req,res);
})

module.exports = router;