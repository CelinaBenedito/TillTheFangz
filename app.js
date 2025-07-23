// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var personagensRouter = require("./src/routes/personagens");
var dashboardRouter = require("./src/routes/dashboard");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/personagens", personagensRouter);
app.use("/dashboard", dashboardRouter)

//-------------------------SOCKET-------------------------

var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('criarSala', (dados) => {
  const { nomeSala, descricao, maxJogadores, senha, criador } = dados;
   if (salas[nomeSala]) {
    socket.emit('erroSala', 'Já existe uma sala com esse nome.');
    return;
  }
   salas[nomeSala] = {
    nomeSala,
    descricao,
    senha: senha || null,
    maxJogadores,
    criador,
    jogadores: [criador]
  };
  console.log(`Sala "${nomeSala}" criada por ${criador}`);

  socket.join(nomeSala);
  socket.emit('salaCriada', salas[nomeSala]);
});
  console.log('Novo jogador conectado:', socket.id);

  socket.on('entrarNaSala', ({ sala, nome }) => {
      const salaInfo = salas[sala];
      if (!salaInfo) {
    socket.emit('mensagem', 'Essa sala não existe.');
    return;
  }
  // Verifica limite de jogadores
  if (salaInfo.jogadores.length >= salaInfo.maxJogadores) {
    socket.emit('mensagem', 'Sala cheia.');
    return;
  }
   // Adiciona jogador
  salaInfo.jogadores.push(nome);
  socket.join(sala);
  socket.emit('infoSala', salaInfo);
  socket.to(sala).emit('mensagem', `${nome} entrou na sala.`);
  socket.emit('mensagem', `Você entrou na sala: ${sala}`);
  });

  socket.on('enviarMensagem', ({ sala, nome, texto }) => {
    io.to(sala).emit('mensagem', `${nome}: ${texto}`);
  });

  socket.on('disconnect', () => {
    console.log('Jogador desconectado:', socket.id);
  });
});

http.listen(PORTA_APP, function () {
  console.log(`Servidor do seu site já está rodando com socket.io em http://${HOST_APP}:${PORTA_APP}`);
});

const salas = {}; // chave = nome da sala
