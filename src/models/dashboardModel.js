var database = require("../database/config");

function listarPorGeneros() {
    console.log("Entrei na função listar por Gênero");

    var instrucao =
        `
       select * from view_generos;
    `;
    console.log("Executando a intrução SQL LISTAR PERSONAGENS: \n" + instrucao);
    return database.executar(instrucao);
}
function listarPorAtributos() {
    console.log("Enrei na função listar por Atribtos")
    var instrucao =
        `
        select SUM(po.carisma) as TotalCarisma, SUM(po.inteligencia) as TotalInteligencia, SUM(po.agilidade) as TotalAgilidade, SUM(po.vigor) as TotalVigor, SUM(po.SangueAncestral) as TotalSangueAncestral
        from TillTheFangz.personagem pe
        left join TillTheFangz.pontos po on pe.id=po.fkpersonagem;
        `;
        console.log("Executando a instrução SQL Listar Atributos: \n" + instrucao);
        return database.executar(instrucao);
}

    function listarPorClasse(){
        console.log("Entrei na função listar por Classe");
        var instrucao = 
        `
    SELECT (SELECT count(classe)
    FROM TillTheFangz.personagem
    where classe like "Caçador Sombrio") as cacador,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Senhor das Sombras") as senhor,  
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Bárbaro Noturno") as barbaro,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Ilusionista Vampírico") as ilusionita,
     (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro Cultista") as cultista,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro iluminado") as iluminado,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro Flagelador") as flagelador,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro Canibal") as canibal,
     (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Nenhuma") as nenhuma
    FROM TillTheFangz.personagem
    group by cacador;
        `

        return database.executar(instrucao);
    }

module.exports = {
    listarPorGeneros,
    listarPorAtributos,
    listarPorClasse
};