function abrirGarras() {
    garras.showModal()
    container_garras.innerHTML = `Funciona oh meu deus
    <button onclick="fecharGarras()">Fechar</button>`
}
function fecharGarras() {
    garras.close()
}