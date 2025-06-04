
let textoInicio = `
<div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                    <ul>
                </div>
                <div class="voltar">
                    <a onclick= "botaozao.style.display = 'none',div_conteudo.style.display = '',div_conteudoInicio.style.display = 'none', div_conteudoClasse.style.display = 'none',div_conteudoAtributos.style.display = 'none',div_conteudoHabilidades.style.display = 'none'">Voltar</a>
                </div>
                <h2>Seja bem vindo ao criador de personagem!
                <br> Vamos começar pelo básico</h2>

                <div id="campos" class="camposiniciais">
                    <div class="inicio">
                        <div class="coluna1">
                            <input rows="1" placeholder="Nome..." id="ipt_nome" class="campo">  
                            <input type="number" placeholder="Altura..." id="ipt_altura" class="campo" >
                            <input type="number" placeholder="Peso..." id="ipt_peso" class="campo">

                        </div>
                        <div class="coluna2">
                            <input type="text" placeholder="Apelido..." id="ipt_apelido" class="campo">
                            <select id="select_genero" class="campo" >
                                    <option value="#">Gênero:</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="outro">Outro</option>
                            </select>
                            <input type="number" placeholder="Idade..." id="ipt_idade" class="campo" >

                        </div>
                    </div>
                     <div class="detalhes">
                        <textarea placeholder="História do personagem" id="ipt_historia" class="campo"></textarea>
                        <textarea placeholder="Características do personagem" id="ipt_caracteristicas" class="campo"></textarea>
                    </div>
                </div>
                `
let textoClasse = `
<div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                    <ul>
                </div>
                <div class="voltar">
                    <a onclick= "botaozao.style.display = 'none',div_conteudo.style.display = '',div_conteudoInicio.style.display = 'none', div_conteudoClasse.style.display = 'none',div_conteudoAtributos.style.display = 'none',div_conteudoHabilidades.style.display = 'none'">Voltar</a>
                </div>
            <div class="cards">
                <div class="card">
                    <h3>Caçador Sombrio</h3>
                   
                <button onclick="aparecer('cacador')">Ver especificações</button>
                <dialog id="cacador">
                    <div class="modal" id="desc_cacador">
                    
                    </div>
                </dialog>
                <br>
                <button onclick="salvarClasse('Caçador Sombrio')">Escolher Este</button>
                </div>

                <div class="card">
                    <h3>Senhor das Sombras</h3>
                
                <button onclick="aparecer('senhor')">Ver especificações</button>
                <dialog id="senhor">
                    <div class="modal" id="desc_senhor">
    
                    </div>
                </dialog>
                <br>
                <button onclick="salvarClasse('Senhor das Sombras')">Escolher Este</button> 

                </div>

                <div class="card">
                    <h3>Bárbaro Noturno</h3>
                
                <button onclick="aparecer('barbaro')">Ver especificações</button>
                <dialog id="barbaro">
                    <div class="modal" id="desc_barbaro">
                    
                    </div>
                </dialog>
                <br>
                <button onclick="salvarClasse('Bárbaro Noturno')">Escolher Este</button> 

                </div>
                <div class="card">
                <h3>Ilusionista Vampírico</h3>
            

                <button onclick="aparecer('ilusionista')">Ver especificações</button>
                <dialog id="ilusionista">
                    <div class="modal" id="desc_ilusionista">
                    
                    </div>
                </dialog>
                <br>
                <button onclick="salvarClasse('Ilusionista Vampírico')">Escolher Este</button> 
                </div>

                <div class="card">
                    <h3>Vampiro Cultista</h3>
                

                <button onclick="aparecer('cultista')">Ver especificações</button>
                <dialog id="cultista">
                    <div class="modal" id="desc_cultista">
                    
                    </div>
                </dialog>
                <br>
                <button onclick="salvarClasse('Vampiro Cultista')">Escolher Este</button> 
                </div>

                <div class="card">
                    <h3>Vampiro iluminado</h3>
                
                    <button onclick="aparecer('iluminado')">Ver especificações</button>
                    <dialog id="iluminado">
                        <div class="modal" id="desc_iluminado">
                        
                        </div>
                    </dialog>
                    <br>
                    <button onclick="salvarClasse('Vampiro iluminado')">Escolher Este</button> 
                </div>
                <div class="card">
                    <h3>Vampiro Flagelador</h3>
                
                    <button onclick="aparecer('flagelador')">Ver especificações</button>
                    <dialog id="flagelador">
                        <div class="modal" id="desc_flagelador">
                        
                        </div>
                    </dialog>
                    <br>
                    <button onclick="salvarClasse('Vampiro Flagelador')">Escolher Este</button> 
                </div>
                <div class="card">
                    <h3>Vampiro Canibal</h3>
                
                    <button onclick="aparecer('canibal')">Ver especificações</button>
                    <dialog id="canibal">
                        <div class="modal" id="desc_canibal">
                        
                        </div>
                    </dialog>
                    <br>
                    <button onclick="salvarClasse('Vampiro Canibal')">Escolher Este</button> 
                </div>
            </div>
            `
let textoAtributos = `
<div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                    <ul>
    </div>
    <div class="voltar">
                    <a onclick= "botaozao.style.display = 'none',div_conteudo.style.display = '',div_conteudoInicio.style.display = 'none', div_conteudoClasse.style.display = 'none',div_conteudoAtributos.style.display = 'none',div_conteudoHabilidades.style.display = 'none'">Voltar</a>
                </div>
    <div class="Horizontal">
        <div class="ConteudoAtributo">
            <h3>Pontos Totais</h3>
            <p id="pontos_totais"></p>
            <h3>Atributos</h3>

            <div class="atributo carisma">
                <p>Carisma</p>
                <p id="qtd_carisma"></p>
                <div class="botoes">
                    <button onclick="pontuação(1, 'carisma')">+</button>
                    <button onclick="pontuação(-1, 'carisma')">-</button>
                </div>
            </div>

            <div class="atributo inteligencia">
                <p>Inteligência</p>
                <p id="qtd_inteligencia"></p>
                <div class="botoes">
                    <button onclick="pontuação(1, 'inteligencia')">+</button>
                    <button onclick="pontuação(-1, 'inteligencia')">-</button>
                </div>
            </div>

            <div class="atributo agilidade">
                <p>Agilidade</p>
                <p id="qtd_agilidade"></p>
                <div class="botoes">
                    <button onclick="pontuação(1, 'agilidade')">+</button>
                    <button onclick="pontuação(-1, 'agilidade')">-</button>
                </div>
            </div>

            <div class="atributo vigor">
                <p>Vigor</p>
                <p id="qtd_vigor"></p>
                <div class="botoes">
                    <button onclick="pontuação(1, 'vigor')">+</button>
                    <button onclick="pontuação(-1, 'vigor')">-</button>
                </div>
            </div>

            <div class="atributo sangueAncestral">
                <p>Sangue Ancestral</p>
                <p id="qtd_sangue_ancestral"></p>
                <div class="botoes">
                    <button onclick="pontuação(1, 'sangue')">+</button>
                    <button onclick="pontuação(-1, 'sangue')">-</button>
                </div>
            </div>
        </div>
        <div class="ConteudoAtributo">
            <h3>Pontos de vida</h3>
            <p id="qtd_vida"></p>

            <h3>Pontos de Sanidade</h3>
            <p id="qtd_sanidade"></p>

            <h3>Pontos de Defesa</h3>
            <p id="qtd_defesa"></p>
        </div>
    </div>
    `

