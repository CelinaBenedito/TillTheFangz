  div_Alerta.style.display = "none"

    function funcao_alerta(texto) {
        div_Alerta.style.display = "block"
        requestAnimationFrame(() => {
            div_Alerta.classList.add('aparecer');
        });
        conteudo_alerta.innerHTML =
            `
        ${texto}
        <br>
        <br>
        <button onclick="div_Alerta.style.display= 'none'">OK</button>
        `
    }