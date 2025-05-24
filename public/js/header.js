if(sessionStorage.ID_USUARIO != undefined){
    header.innerHTML = `
     <div class="logo">
            <a href="">
                <img src="assets/img/logoBranca.png" alt="Logo do Till the Fangz na versão branca">
            </a>
        </div>
        <div class="itens">
            <a href="../index.html">Home</a>
            <a href="livro.html">Livro</a>
            <a href="bestiario.html">Bestiário</a>
            <a href="quiz.html">Quiz</a>
            <a href="ficha.html">Ficha</a>
            <a href="feed.html">Feed</a>
            <a href="user.html" id="imagem_usuario_header" class="img_User"><img src="assets/img/vampireUser.png" alt="user"></a>
        </div>
    `
}
else{
   header.innerHTML = `
  <div class="logo">
      <a href="">
          <img src="../assets/img/logoBranca.png" alt="Logo do Till the Fangz na versão branca">
      </a>
  </div>
  <div class="itens">
      <a href="../index.html">Home</a>
      <a href="../livro.html">Livro</a>
      <a href="../bestiario.html">Bestiário</a>
      <a href="../quiz.html">Quiz</a>
      <a href="../ficha.html">Ficha</a>
      <a href="../feed.html">Feed</a>
      <a href="../login.html" class="login"><img src="../assets/img/vampireUser.png" alt="user"> Login</a>
  </div>
`
}
function buscarPeloId(id_user) {

    fetch(`/usuarios/${id_user}`, {
     method: "GET"
   })
     .then(res => {
       res.json().then(json => {
         const usuario = json[0];
       
         imagem_usuario_header.innerHTML = `<img src='assets/imagensdePerfil/${usuario.ImagemUsuario}'>`

         })
     })
     .catch(err => {
       console.log(err);
     })
 }