let textoInicio = `
<div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                        <li><a onclick="habilidades()">Habilidades</a></li>
                    <ul>
                </div>

                <h2>Seja bem vindo ao criador de personagem!
                <br> Vamos começar pelo básico</h2>

                <div id="campos" class="camposiniciais">
                    <div class="inicio">
                        <div class="coluna1">
                            <input rows="1" placeholder="Nome..." id="ipt_nome" class="campo">  
                            <input type="number" placeholder="Altura..." id="ipt_altura" class="campo" >
                            <input type="number" placeholder="Peso..." id="ipt_peso" class="campo">
                            <input type="number" placeholder="Pontos sombrios" class="campo">

                        </div>
                        <div class="coluna2">
                            <input type="text" placeholder="Apelido..." id="ipt_apelido" class="campo">
                            <select id="select_genero" class="campo" >
                                    <option value="#">Gênero:</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="outro">Outro</option>
                                    <option value="nao">Prefiro não dizer</option>
                            </select>
                            <input type="number" placeholder="Idade..." id="ipt_idade" class="campo" >
                            <input type="number" placeholder="Pontos de luz" class="campo">

                        </div>
                    </div>
                     <div class="detalhes">
                        <textarea placeholder="História do personagem" id="ipt_historia" class="campo"></textarea>
                        <textarea placeholder="Características do personagem" id="" class="campo"></textarea>
                    </div>
                </div>
                `
let textoClasse = ` 
<div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                        <li><a onclick="habilidades()">Habilidades</a></li>
                    <ul>
                </div>
            <div class="cards">
                <div class="card">
                    <h3>Caçador Sombrio</h3>
                    <img src="assets/cacadorSombrio.png">
                <button onclick="aparecer('cacador')">Ver especificações</button>
                <dialog id="cacador">
                    <div class="modal" id="desc_cacador">
                    
                    </div>
                </dialog>
                <br>
                <button>Escolher Este</button>
                </div>

                <div class="card">
                    <h3>Senhor das Sombras</h3>
                    <img src="" alt="">
                <button onclick="aparecer('senhor')">Ver especificações</button>
                <dialog id="senhor">
                    <div class="modal" id="desc_senhor">
    
                    </div>
                </dialog>
                <br>
                <button>Escolher Este</button> 

                </div>

                <div class="card">
                    <h3>Bárbaro Noturno</h3>
                    <img src="" alt="">
                <button onclick="aparecer('barbaro')">Ver especificações</button>
                <dialog id="barbaro">
                    <div class="modal" id="desc_barbaro">
                    
                    </div>
                </dialog>
                <br>
                <button>Escolher Este</button> 

                </div>
                <div class="card">
                <h3>Ilusionista Vampírico</h3>
                <img src="" alt="">

                <button onclick="aparecer('ilusionista')">Ver especificações</button>
                <dialog id="ilusionista">
                    <div class="modal" id="desc_ilusionista">
                    
                    </div>
                </dialog>
                <br>
                <button>Escolher Este</button> 
                </div>

                <div class="card">
                    <h3>Vampiro Cultista</h3>
                    <img src="" alt="">

                <button onclick="aparecer('cultista')">Ver especificações</button>
                <dialog id="cultista">
                    <div class="modal" id="desc_cultista">
                    
                    </div>
                </dialog>
                <br>
                <button>Escolher Este</button> 
                </div>

                <div class="card">
                    <h3>Vampiro iluminado</h3>
                    <img src="" alt="">
                    <button onclick="aparecer('iluminado')">Ver especificações</button>
                    <dialog id="iluminado">
                        <div class="modal" id="iluminado">
                        
                        </div>
                    </dialog>
                    <br>
                    <button>Escolher Este</button> 
                </div>
                <div class="card">
                    <h3>Vampiro Flagelador</h3>
                    <img src="" alt="">
                    <button onclick="aparecer('flagelador')">Ver especificações</button>
                    <dialog id="flagelador">
                        <div class="modal" id="desc_flagelador">
                        
                        </div>
                    </dialog>
                    <br>
                    <button>Escolher Este</button> 
                </div>
                <div class="card">
                    <h3>Vampiro Canibal</h3>
                    <img src="" alt="">
                    <button onclick="aparecer('canibal')">Ver especificações</button>
                    <dialog id="canibal">
                        <div class="modal" id="desc_canibal">
                        
                        </div>
                    </dialog>
                    <br>
                    <button>Escolher Este</button> 
                </div>
            </div>
            `
let textoAtributos = `
<div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                        <li><a onclick="habilidades()">Habilidades</a></li>
                    <ul>
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
let textoHabilidades = `
            <div class="navbar">
                    <ul>
                        <li><a onclick="inicio()">Inicio</a></li>
                        <li><a onclick="classe()">Classe</a></li>
                        <li><a onclick="atributos()">Atributos</a></li>
                        <li><a onclick="habilidades()">Habilidades</a></li>
                    <ul>
            </div>
    <a onclick="aparicoes(1)">
        <div class="cabecalho gerais">
            <h3><i class='bx bx-chevron-down'></i>Habilidades Gerais</h3>
        </div>
    </a>

    <div class="containerTotalHabilidades" id="div_containerhabilidadesGerais">
        <h1>Habilidades Gerais</h1>
        <p>Todos os jogadores começam com 4 pontos de habilidades para distribuir</p>
        <div class="pontos">
            <h3>Pontos de habilidade</h3>
            <p id="pontos_Habilidade">4</p>
        </div>

        <div class="habilidadesGerais">

            <div class="container">
                <div class="habilidadeGeral">
                    <div class="ramificacao lado1">
                        <button onclick="habilidades(-2)">Corte rápido</button>
                        <button onclick="habilidades(-3)">Frenesi de garras</button>
                        <button onclick="habilidades(-4)">Rasgo da destruição</button>
                    </div>

                    <div class="ramificacao lado2">
                        <button onclick="habilidades(-2)">Garras envenedadas</button>
                        <button onclick="habilidades(-3)">Destruidor de armaduras</button>
                        <button onclick="habilidades(-4)">Rasgo Sombrio</button>
                    </div>
                </div>
                <div>
                    <div class="botoes">
                        <button onclick="habilidades(-1)">Garras Sobrenaturais</button>
                        <button onclick="abrirGarras()">Descrição Garras</button>
                        <dialog id="garras">
                            <div id="container_garras"></div>
                        </dialog>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="habilidadeGeral">
                    <div class="ramificacao lado1">
                        <button onclick="habilidades(-3)">Mergulho aéreo</button>
                        <button onclick="habilidades(-4)">Teleporte sombrio</button>
                    </div>
                    <div class="ramificacao lado2">
                        <button onclick="habilidades(-3)">Investida aérea</button>
                        <button onclick="habilidades(-4)">Voô profano</button>
                    </div>
                </div>
                <div class="botoes">
                    <button onclick="habilidades(-2)">Flutuar</button>
                    <button onclick="habilidades(-1)">Super Salto</button>
                    <button>Descrição Voô</button>
                </div>
            </div>
        </div>
    </div>

    <a onclick="aparicoes(2)">
        <div class="cabecalho transforma">
            <h3><i class='bx bx-chevron-down'></i>Transformações</h3>
        </div>
    </a>


    <div class="containerTotalTransformacoes" id="div_containerTransformacoes">
        <h1>Transformações</h1>
        <p>Desde o momento em que ingressam no mundo das trevas, os vampiros despertam um poder ancestral: a habilidade
            de se transformar. Essa metamorfose não é apenas física, mas espiritual — um elo entre o instinto da
            criatura e sua vontade.
        </p>
        <div class="pontos">
            <h3>Pontos de Transformação</h3>
            <p id="pontos_Transformacao">2</p>
        </div>
        <div class="transformacoes">
            <div class="container">
                <div class="item horizontal">
                    <button>Furia lupina</button>
                    <button>Caninos sombrios</button>
                </div>
                <div class="item vertical">
                    <button>Sentidos aprimorados</button>
                    <button>Velocidade lupina</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Lobo</button>
                </div>
            </div>

            <div class="container">
                <div class="item horizontal">
                    <button>Olhos do Predador</button>
                    <button>Garras Venenosas</button>
                </div>
                <div class="item vertical">
                    <button>Agilidade Felina</button>
                    <button>Furtividade animal</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Gato</button>
                </div>
            </div>

            <div class="container">
                <div class="item horizontal">
                    <button>Convocar enxame</button>
                    <button>Mestre das sombras</button>
                </div>
                <div class="item vertical">
                    <button>Asas noturnas</button>
                    <button>Frenesi do morcego</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Morcego</button>
                </div>
            </div>



        </div>
    </div>
    <a onclick="aparicoes(3)">
        <div class="cabecalho sensitivas">
            <h3><i class='bx bx-chevron-down'></i>Habilidades Sensoriais</h3>
        </div>
    </a>


    <div class="containerTotalSensoriais" id="div_containerSensoriais">
        <h1>Evolução Sensorial</h1>
        <p>Em Till the FangZ, os vampiros não apenas veem, ouvem e sentem — eles vivenciam o mundo de forma ampliada,
            quase mística. Seus sentidos vão além dos limites mortais, despertando gradualmente à medida que mergulham
            mais fundo em sua natureza sombria.</p>
        <div class="pontos">
            <h3>Pontos Sensoriais</h3>
            <p id="pontos_Habilidade">6</p>
        </div>
        <div class="sensoriais">
            <div class="container">
                <div class="item vertical">
                    <button>Toque refinado</button>
                    <button>Detecção por vibração </button>
                    <button>Controle do toque</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Tato</button>
                </div>
            </div>
            <div class="container">
                <div class="item vertical">
                    <button>Rastreamento olfativo</button>
                    <button>Identificação de presa</button>
                    <button>Perfume mortal</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Olfato</button>
                </div>
            </div>
            <div class="container">
                <div class="item vertical">
                    <button>Atenção focada</button>
                    <button>Audição amplificada</button>
                    <button>Expansão auditiva</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Audição</button>
                </div>
            </div>
        </div>
        <div class="sensoriais">
            <div class="container">
                <div class="item vertical">
                    <button>Ajuda das sombras</button>
                    <button>Percepção de energias</button>
                    <button>Olhar hipnótico </button>
                </div>
                <div class="item inicial">
                    <button>Descrição Visão</button>
                </div>
            </div>
            <div class="container">
                <div class="item vertical">
                    <button>Sussurros sombrios</button>
                    <button>Berro ensurdecedor</button>
                    <button>Onda sonora</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Fala</button>
                </div>
            </div>
            <div class="container">
                <div class="item vertical">
                    <button>Pressentimento </button>
                    <button>Empatia vampirica </button>
                    <button>Domínio sobrenatural</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Sensação</button>
                </div>
            </div>
        </div>
    </div>
`