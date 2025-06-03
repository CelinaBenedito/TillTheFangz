var database = require("../database/config");

function listar(){
    var instrucao = 
    `
    SELECT * 
    FROM personagem pe
    inner join pontos po on pe.id=po.fkpersonagem;
    `;
    console.log("Executando a intrução SQL LISTAR PERSONAGENS: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkusuario,nome,idade,peso,genero,altura,classe,historia,caracteristicas){
    var instrucao =
    `
    insert into personagem(fkUsuario,nome,idade,peso,genero,altura,classe,historia,caracteristicas)
    values(${fkusuario},'${nome}', ${idade}, ${peso}, '${genero}', ${altura}, '${classe}', '${historia}', '${caracteristicas}');
    `;
    return database.executar(instrucao);
}
module.exports = {
    cadastrar,
    listar
};