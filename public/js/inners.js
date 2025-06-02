
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
                        <li><a onclick="habilidades()">Habilidades</a></li>
                    <ul>
                </div>
            <div class="cards">
                <div class="card">
                    <h3>Caçador Sombrio</h3>
                    <img src="assets/img/cacadorSombrio.png">
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
                    <img src="" alt="">
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
                    <img src="" alt="">
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
                <img src="" alt="">

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
                    <img src="" alt="">

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
                    <img src="" alt="">
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
                    <img src="" alt="">
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
                    <img src="" alt="">
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
    <div class="containerTotal">
        <a onclick="aparicoes(1)">
            <div class="cabecalho gerais">
                <h3><i class='bx bx-chevron-down'></i>Habilidades Gerais</h3>
            </div>
        </a>
        <div class="containerTotalHabilidades" id="div_containerhabilidadesGerais">
            <h1>Habilidades Gerais</h1>
            <p>Todos os jogadores começam com 4 pontos de habilidades para distribuir</p>
            <div class="pontos" id="pontos_Habilidade">
                
            </div>

            <div class="habilidadesGerais">

                <div class="container">
                    <div class="habilidadeGeral">
                        <div class="item vertical trilha-esquerda">
                          <button onclick="atualizarPontosHabilidades(-2, 'geral', 'Corte rápido')">Corte rápido</button>
                            <button onclick="atualizarPontosHabilidades(-3, 'geral', 'Frenesi de garras')">Frenesi de garras</button>
                            <button onclick="atualizarPontosHabilidades(-4, 'geral', 'Rasgo da destruição')">Rasgo da destruição</button>
                        </div>
                        <div class="item vertical trilha-direita">
                            <button onclick="atualizarPontosHabilidades(-2, 'geral', 'Garras envenedadas')">Garras envenedadas</button>
                            <button onclick="atualizarPontosHabilidades(-3, 'geral', 'Destruidor de armaduras')">Destruidor de armaduras</button>
                            <button onclick="atualizarPontosHabilidades(-4, 'geral', 'Rasgo Sombrio')">Rasgo Sombrio</button>
                        </div>
                    </div>
                    <div class="item vertical">
                        <button onclick="atualizarPontosHabilidades(-1, 'geral', 'Garras Sobrenaturais')">Garras Sobrenaturais</button>
                    </div>
                <div>

                        <div class="item inicial">
                            <button onclick="garras.showModal()">Descrição Garras</button>
                            <dialog id="garras">
                                <div id="containerHabilidades">
                                    <h2>Trilha das Garras</h2>
                                    <h4>Esquematização</h4>
                                    <img src="assets/img/TrilhaGarras.png">
                                    <h4>Nível 1:</h4>
                                    <p>
                                        <strong>Garras Sobrenaturais:</strong> Você sente uma mudança em seu corpo —
                                        suas unhas
                                        crescem e se tornam afiadas como lâminas, respondendo à sua vontade. Agora, elas
                                        são uma
                                        extensão natural do seu ser, prontas para rasgar carne e ossos.
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Dano:</strong> Cortante 1D12.
                                        </li>
                                        <li>
                                            <strong>Crítico:</strong> Multiplicador adicional de 1D4.
                                        </li>
                                    </ul>
                                    <h4>Nível 2:</h4>
                                    <div class="opcoes">
                                        <div class="opcao">
                                            <strong>Opção 1:</strong>
                                            <p>
                                                <strong>Garras Envenenadas:</strong> Os ataques do vampiro causam veneno
                                                sobrenatural, drenando
                                                lentamente a vida dos inimigos.

                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Dano:</strong> cortante 1D12.
                                                </li>
                                                <li>
                                                    <strong>Crítico: </strong>1D4 multiplicador. rodadas: 1D4.
                                                </li>
                                            </ul>
                                        </div>
                                        <hr>
                                        <STRONG>OU</STRONG>
                                        <HR>
                                        <div class="opcao">
                                            <strong>Opção 2:</strong>

                                            <p>
                                                <strong>Corte Rápido:</strong> O vampiro ataca com golpes em alta
                                                velocidade,
                                                atingindo múltiplos
                                                inimigos em um curto intervalo. (5 golpes seguidos)
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Dano:</strong> cortante 1D4.
                                                </li>
                                                <li>
                                                    <strong>Crítico:</strong> adiciona mais 3 golpes.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4>Nível 3:</h4>
                                    <div class="opcoes">
                                        <div class="opcao">
                                            <strong>Opção 1:</strong>
                                            <p>
                                                <strong>Destruidor de armaduras:</strong> As garras podem atravessar
                                                armaduras
                                                ou barreiras mágicas, atigindo diretamente o alvo
                                            </p>
                                        </div>
                                        <hr>
                                        <strong>OU</strong>
                                        <hr>
                                        <div class="opcao">
                                            <strong>Opção 2:</strong>
                                            <p>
                                                <strong>Frenesi de garras:</strong> O vampiro entra em um estado de
                                                furia,
                                                aumentando a cadencia e o dano dos ataques enquanto ignora parte da
                                                defesa do
                                                inimigo
                                            </p>
                                        </div>
                                    </div>
                                    <h4>Nível 4:</h4>
                                    <div class="opcoes">
                                        <div class="opcao">
                                            <Strong>Opção 1:</Strong>
                                            <p>
                                                <strong>Rasgo sombrio:</strong> Os ataques do vampiro liberam energia
                                                sombria
                                                que causa dano adicional em inimigos próximos ao impacto
                                            </p>
                                        </div>
                                        <hr>
                                        <strong>OU</strong>
                                        <div class="opcao">
                                            <Strong>Opção 2:</Strong>
                                            <p>
                                                <strong>Rasgo da destruição:</strong> O vampiro desfere um atsaaque
                                                massivo em
                                                área, destruindo inimigos ao redor e dexando um terreno devastado
                                            </p>
                                        </div>
                                    </div>
                                    <div class="quebraDelinha">
                                        <br>
                                        <hr><img src="assets/img/morcegoVermelho.png">
                                        <hr>
                                        <br>
                                    </div>
                                </div>
                                <div class="btn-fechar">
                                    <button onclick="garras.close()">X</button>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="habilidadeGeral">
                        <div class="item vertical trilha-esquerda">
                           <button onclick="atualizarPontosHabilidades(-3, 'geral', 'Mergulho aéreo')">Mergulho aéreo</button>
                            <button onclick="atualizarPontosHabilidades(-4, 'geral', 'Teleporte sombrio')">Teleporte sombrio</button>
                        </div>
                        <div class="item vertical trilha-direita">
                            <button onclick="atualizarPontosHabilidades(-3, 'geral', 'Investida aérea')">Investida aérea</button>
                            <button onclick="atualizarPontosHabilidades(-4, 'geral', 'Voô profano')">Voô profano</button>
                        </div>
                    </div>
                    <div class="item vertical">
                        <button onclick="atualizarPontosHabilidades(-1, 'geral', 'Super Salto')">Super Salto</button>
                        <button onclick="atualizarPontosHabilidades(-2, 'geral', 'Flutuar')">Flutuar</button>
                    </div>
                    <div class="item inicial">
                        <button onclick="voo.showModal()">Descrição Voô</button>
                    </div>
                    <dialog id="voo">
                        <div id="containerHabilidades">

                            <h2>Trilha do voô</h2>
                            <h4>Esquematização</h4>
                            <img src="assets/img/TrilhaVoo.png">
                            <h4><strong>Nível 1:</strong></h4>
                            <p><strong>Super salto:</strong> O vampiro pode saltar mais alto e por distâncias
                                maiores</p>
                            <h4>Nível 2:</h4>
                            <p><strong>Flutuar:</strong> O vampiro sente as sombras o auxiliando, agora se pode
                                planar por pequenas distâncias e um curto período de tempo</p>
                            <h4>Nível 3:</h4>
                            <div class="opcoes">
                                <div class="opcao">
                                    <strong>Opção 1:</strong>
                                    <p>
                                        <strong>Investida aérea:</strong> O vampiro quando estando no ar pode lançar
                                        a si mesmo na direção desejada de maneira rápida
                                    </p>

                                </div>
                                <hr>
                                <strong>OU</strong>
                                <hr>
                                <div class="opcao">
                                    <strong>Opção 2:</strong>
                                    <p>
                                        <strong>Mergulho aéreo:</strong> O vampiro quando estando no ar pode dar uma
                                        investida poderosa em direção ao chão
                                    </p>
                                </div>

                            </div>
                            <h4>Nível 4:</h4>
                            <div class="opcoes">
                                <div class="opcao">
                                    <Strong>Opção 1:</Strong>
                                    <p><strong>Vôo profano:</strong> As forças sombrias o reconhecem e lhe concedem
                                        o poder de se impor pelos céus como bem entender, o vampiro agora pode voar
                                        por tempo indeterminado e por distâncias inimagináveis</p>
                                </div>
                                <hr>
                                <strong>OU</strong>
                                <hr>
                                <div class="opcao">
                                    <strong>Opção 2:</strong>
                                    <p>
                                        <strong>Teleporte sombrio:</strong> Você sente as trevas fluírem por suas
                                        veias, você se tornou um com a escuridão. O vampiro pode teleportar para
                                        todos os lugares no alcance de sua visão
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="quebraDelinha">
                            <br>
                            <hr><img src="assets/img/morcegoVermelho.png">
                            <hr>
                            <br>
                        </div>
                        <div class="btn-fechar">
                            <button onclick="voo.close()">X</button>
                        </div>
                        </dialog>
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
            <p id="pontos_HabilidadeSensoriais">6</p>
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
                    <button>Pressentir</button>
                    <button>Empatia vampirica </button>
                    <button>Domínio sobrenatural</button>
                </div>
                <div class="item inicial">
                    <button>Descrição Sensação</button>
                </div>
            </div>
        </div>
    </div>
    </div>
`
