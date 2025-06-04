var personagensModel = require("../models/personagensModel");

function listar(req, res) {
    var idUsuario = req.body.idUsuario;
    personagensModel.listar(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;
    personagensModel.listarPorUsuario(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {

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

    personagensModel.cadastrar(fkusuario, nome, apelido, idade, peso, genero, altura, classe, historia, caracteristicas)
    .then(function (resposta) {
        const id = resposta.insertId;
        res.status(200).json({ idPersonagem: id });
    })

}

function cadastrarPontos(req, res) {
    console.log("Cheguei em cadastrar pontos controller")
    var fkpersonagem = req.body.fkpersonagemServer;
    var pontosCarisma = req.body.pontosCarismaServer;
    var pontosInteligencia = req.body.pontosInteligenciaServer;
    var pontosAgilidade = req.body.pontosAgilidadeServer;
    var pontosVigor = req.body.pontosVigorServer
    var pontosSangue = req.body.pontosSangueServer;
    var pontosVida = req.body.pontosVidaServer;
    var pontosDefesa = req.body.pontosDefesaServer;
    var pontosSanidade = req.body.pontosSanidadeServer;
console.log('aaaaaaaa ',fkpersonagem)

    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', function (erro) {
        ;
    })
    personagensModel.cadastrarPontos(fkpersonagem, pontosVida, pontosDefesa, pontosSanidade, pontosCarisma, pontosInteligencia, pontosAgilidade, pontosVigor, pontosSangue)
    .then(function (resposta) {
       // res.status.send("Pontos cadastrados com sucesso");
        console.log("Pontos cadastrados com sucesso", resposta)

        res.status(200);
    }).catch(function (erro) {
        console.log("Pontos cadastrados com err6", erro)
        res.status(500).json(erro.sqlMessage);
    })
}
module.exports = {
    listar,
    cadastrar,
    listarPorUsuario,
    cadastrarPontos
}