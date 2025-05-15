var ultimaclasse;
var classe;
let qtdClasse = 0;

function salvarClasse() {
    classe = select_classe.value;
    if (classe == '#') {
        alert("Você não selecionou uma classe")
        return;
    }
    if (qtdClasse >= 1) {
        alert("Você já escolheu uma classe")
        return;
    }
    ultimaclasse = classe;

    if (classe == 1) {
        pontos.agilidade += 3;
        pontos.sangue += 2;
        pontos.carisma -= 2;
        qtdClasse++
    }
    if (classe == 2) {
        pontos.inteligencia += 2
        pontos.sangue += 2
        qtdClasse++
    }
    if (classe == 3) {
        pontos.inteligencia -= 2;
        pontos.vigor += 2
        qtdClasse++
    }
    if (classe == 4) {
        pontos.carisma += 2;
        pontos.inteligencia += 2;
        pontos.vigor -= 3;
        qtdClasse++
    }
    if (classe == 5) {
        pontos.inteligencia += 1;
        pontos.sangue += 2;
        pontos.carisma -= 1;
        qtdClasse++
    }
    if (classe == 6) {
        pontos.carisma += 2;
        pontos.inteligencia += 1;
        pontos.sangue -= 5;
        qtdClasse++
    }
    if (classe == 7) {
        pontos.carisma -= 1;
        pontos.sangue += 3;
        pontos.agilidade += 1;
        qtdClasse++
    }
    if (classe == 8) {
        pontos.carisma -= 2;
        pontos.sangue += 3;
        qtdClasse++
    }

    qtd_carisma.innerHTML = pontos.carisma;
    qtd_inteligencia.innerHTML = pontos.inteligencia;
    qtd_agilidade.innerHTML = pontos.agilidade;
    qtd_vigor.innerHTML = pontos.vigor;
    qtd_sangue_ancestral.innerHTML = pontos.sangue;

    botao_limpar.innerHTML = <button onclick="limparClasse()">Limpar pontos da classe</button>
}

function limparClasse() {
    if (qtdClasse < 1) {
        alert("Não a classe para ser limpar")
        return;
    }
    if (ultimaclasse == 1) {
        pontos.agilidade -= 3;
        pontos.sangue -= 2;
        pontos.carisma += 2;
        qtdClasse--;
    }
    if (ultimaclasse == 2) {
        pontos.inteligencia -= 2
        pontos.sangue -= 2
        qtdClasse--;
    }
    if (ultimaclasse == 3) {
        pontos.inteligencia += 2;
        pontos.vigor -= 2
        qtdClasse--;
    }
    if (ultimaclasse == 4) {
        pontos.carisma -= 2;
        pontos.inteligencia -= 2;
        pontos.vigor += 3;
        qtdClasse--;
    }
    if (ultimaclasse == 5) {
        pontos.inteligencia -= 1;
        pontos.sangue -= 2;
        pontos.carisma += 1;
        qtdClasse--;
    }
    if (ultimaclasse == 6) {
        pontos.carisma -= 2;
        pontos.inteligencia -= 1;
        pontos.sangue += 5;
        qtdClasse--;
    }
    if (ultimaclasse == 7) {
        pontos.carisma += 1;
        pontos.sangue -= 3;
        pontos.agilidade -= 1;
        qtdClasse--;
    }
    if (ultimaclasse == 8) {
        pontos.carisma += 2;
        pontos.sangue -= 3;
        qtdClasse--;
    }
    qtd_carisma.innerHTML = pontos.carisma;
    qtd_inteligencia.innerHTML = pontos.inteligencia;
    qtd_agilidade.innerHTML = pontos.agilidade;
    qtd_vigor.innerHTML = pontos.vigor;
    qtd_sangue_ancestral.innerHTML = pontos.sangue;
}