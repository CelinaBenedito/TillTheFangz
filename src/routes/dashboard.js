var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarGeneros", function (req, res) {
    dashboardController.listarPorGeneros(req, res);
});
router.get("/listarInteresse", function (req, res) {
    dashboardController.listarPorInteresse(req, res);
});

router.get("/listarAtributos", function (req, res) {
    dashboardController.listarPorAtributos(req, res);
});
router.get("/listarClasse", function (req, res) {
    dashboardController.listarPorClasse(req, res);
});

module.exports = router;