var personagensModel = require("../models/personagensModel");

function listar(req,res){
    personagensModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req,res){
    var fkusuario = req.body.fkusuario;
    // var fkpersonagem = req.body.fkpersonagem
    var nome = req.body.nome;
    var idade = req.body.idade;
    var peso = req.body.peso;
    var genero = req.body.genero;
    var altura = req.body.altura;
    var classe = req.body.altura;
    var historia = req.body.historia;
    var caracteristicas = req.body.caracteristicas;
    // var defesa = req.body.defesa;
    // var sanidade = req.body.sanidade;
    // var carisma = req.body.carisma;
    // var inteligencia = req.body.inteligencia;
    // var agilidade = req.body.agilidade;
    // var vigor = req.body.vigor;
    // var sangueAncestral = req.body.sangue;

    personagensModel.cadastrar(fkusuario,nome,idade,peso,genero,altura,classe,historia,caracteristicas).then(function(resposta){
        res.status(200).send("Personagem Cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}