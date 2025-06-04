var dashboardModel = require("../models/dashboardModel");

function listarPorGeneros(req, res) {

    dashboardModel.listarPorGeneros().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function listarPorInteresse(req, res) {

    dashboardModel.listarPorInteresse().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarPorAtributos(req, res) {

    dashboardModel.listarPorAtributos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function listarPorClasse(req, res) {

    dashboardModel.listarPorClasse().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function listarPorUsuario(req, res) {
    dashboardModel.listarPorUsuario().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function listarPorPost(req, res) {
    dashboardModel.listarPorPost().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    listarPorAtributos,
    listarPorClasse,
    listarPorGeneros,
    listarPorInteresse,
    listarPorUsuario,
    listarPorPost
}