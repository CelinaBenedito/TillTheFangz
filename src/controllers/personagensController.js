var personagensModel = require("../models/personagensModel");

function listar(req,res){
    var idUsuario = req.body.idUsuario;
    personagensModel.listar(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarPorUsuario(req,res){
    var idUsuario = req.params.idUsuario;
    personagensModel.listarPorUsuario(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req,res){

    var fkusuario = req.body.fkusuarioServer;
    var nome = req.body.nomeServer;
    var apelido = req.body.apelidoServer;
    var idade = req.body.idadeServer;
    var peso = req.body.pesoServer;
    var genero = req.body.generoServer;
    var altura = req.body.alturaServer;
    var classe = req.body.classeServer;
    var historia = req.body.historiaServer;
    var caracteristicas = req.body.caracteristicasServer;

    personagensModel.cadastrar(fkusuario,nome,apelido,idade,peso,genero,altura,classe,historia,caracteristicas).then(function(resposta){
        res.status(200).send("Personagem Cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarPontos(req,res){
    var fkpersonagem = req.body.fkpersonagem
}
module.exports = {
    listar,
    cadastrar,
    listarPorUsuario,
    cadastrarPontos
}