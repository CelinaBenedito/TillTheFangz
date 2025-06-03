var database = require("../database/config");

function listar(idUsuario){
    var instrucao = 
    `
       select * 
    from usuario us
    left join personagem pe on us.id = pe.fkUsuario
    left join pontos po on pe.id = po.fkpersonagem
    where us.id = ${idUsuario};
    `;
    console.log("Executando a intrução SQL LISTAR PERSONAGENS: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkusuario,nome,idade,peso,genero,altura,classe,historia,caracteristicas){

    console.log(nome)

    var instrucao =
    `
    insert into personagem(fkUsuario,nome,idade,peso,genero,altura,classe,historia,caracteristicas)
    values(${fkusuario},'${nome}', ${idade}, ${peso}, '${genero}', ${altura}, '${classe}', '${historia}', '${caracteristicas}');`

    console.log(instrucao)

    return database.executar(instrucao);
}
module.exports = {
    cadastrar,
    listar
};