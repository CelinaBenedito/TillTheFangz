var express = require("express");
const upload = require('../config/configUpload'); 
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro/:ID_USUARIO', upload.single('foto'), (req, res) => {
  usuarioController.salvar(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  usuarioController.buscarUsuarioPeloId(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});
router.post("/atualizar", function (req,res){
  usuarioController.atualizar(req,res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;