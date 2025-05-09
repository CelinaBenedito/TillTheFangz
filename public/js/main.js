let cadastrado = false;

if(cadastrado==true){
    header.innerHTML = `
        <div class="logo">
            <a href="">
                <img src="assets/logoBranca.png" alt="Logo do Till the Fangz na versão branca">
            </a>
        </div>
        <div class="itens">
            <a href="index.html">Home</a>
            <a href="quiz.html">Quiz</a>
            <a href="ficha.html">Crie sua ficha</a>
            <a href="bestiario.html">Bestiário</a>
            <a href="livro.html">Livro</a>
        </div>`
}
let nome;
let sobrenome;
let genero;
let email;
let confEmail;
let senha;
let confSenha;

function validarCadastro(){
    nome = ipt_nome.value;
    sobrenome = ipt_sobrenome.value;
    genero = select_genero.value;
    email = ipt_email.value;
    confEmail = ipt_confEmail.value;
    senha = ipt_senha.value;
    confSenha = ipt_confSenha;

    

    console.log("Esta página diz:" + nome);
   
    if(nome  == false || sobrenome == false || genero == '#' || email == false || Confemail == false){
        alert('Por favor preencha todos os campos');
        return;
    }
}