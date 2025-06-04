 var database = require("../database/config");
 
 function listarPorGenero(){
    var instrucao = 
    `
       select * from view_generos;
    `;
    console.log("Executando a intrução SQL LISTAR PERSONAGENS: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarPorGenero
};