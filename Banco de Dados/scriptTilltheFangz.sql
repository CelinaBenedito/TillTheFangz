CREATE DATABASE IF NOT EXISTS TillTheFangz;
USE TillTheFangz;

-- -----------------------------------------------------
-- Tabela usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS usuario(
  id INT  PRIMARY KEY AUTO_INCREMENT,
  nickname varchar(40),
  nome VARCHAR(40),
  sobrenome VARCHAR(70),
  genero VARCHAR(17),
  interesse VARCHAR(10),
  email VARCHAR(100),
  senha VARCHAR(50),
  ImagemUsuario VARCHAR(500),
  UNIQUE INDEX ix_email(email)
  );
  -- -----------------------------------------------------
-- Tabela personagem
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS personagem(
  id INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  nome VARCHAR(50) ,
  idade INT,
  peso INT,
  genero VARCHAR(17),
  altura INT,
  classe varchar(23),
  Historia VARCHAR(200),
  caracteristicas VARCHAR(150),
  CONSTRAINT chk_classe check (classe in('Caçador Sombrio', 'Senhor das Sombras',
  'Bárbaro Noturno', 'Ilusionista Vampírico', 'Vampiro Cultista', 'Vampiro iluminado',
  'Vampiro Flagelador', 'Vampiro Canibal')),
  CONSTRAINT fkpersonagem_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
    );

  -- -----------------------------------------------------
-- Tabela pontos
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS pontos(
  fkpersonagem INT NOT NULL,
  fkusuario INT NOT NULL,
  defesa INT NOT NULL,
  sanidade INT NOT NULL,
  carisma INT NOT NULL,
  inteligencia INT NOT NULL,
  agilidade INT NOT NULL,
  vigor INT NOT NULL,
  SangueAncestral INT NOT NULL,
  PRIMARY KEY (fkpersonagem, fkusuario),
  CONSTRAINT fk_personagem_pontos FOREIGN KEY (fkpersonagem) REFERENCES personagem(id)
);

-- -----------------------------------------------------
-- Tabela pergunta
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TillTheFangz.pergunta(
  idpergunta INT PRIMARY KEY AUTO_INCREMENT,
  descricao VARCHAR(45) NOT NULL,
  UNIQUE INDEX ix_pergunta (descricao)
  );

CREATE TABLE IF NOT EXISTS TillTheFangz.resposta(
  idresposta INT NOT NULL,
  descricao VARCHAR(45) NOT NULL,
  fkpergunta INT NOT NULL,
  PRIMARY KEY (idresposta, fkpergunta),
  INDEX idxresposta (fkpergunta),
  CONSTRAINT fk_resposta_pergunta1 FOREIGN KEY (fkpergunta) REFERENCES pergunta(idpergunta)
    );
    
-- -----------------------------------------------------
-- Tabela respostas_usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TillTheFangz.respostas_usuario (
  fkusuario INT NOT NULL,
  fkresposta INT NOT NULL,
  fkpergunta INT NOT NULL,
  PRIMARY KEY (fkusuario, fkresposta, fkpergunta),
  INDEX idxresposta_pergunta (fkresposta, fkpergunta),
  INDEX idxusuario (fkusuario),
  CONSTRAINT fk_usuarioresposta FOREIGN KEY (fkusuario) REFERENCES usuario (id),
  CONSTRAINT fk_pergunta_resposta FOREIGN KEY (fkresposta , fkpergunta) REFERENCES resposta (idresposta , fkpergunta)
  );
  
	select * from TillTheFangz.usuario;
  insert into usuario(nickname ,nome, sobrenome, genero, interesse, email, senha)
   values('Lilith','Celina', 'dos Santos Benedito', 'Feminino','Mestre', 'celina.benedito@sptech.school', 'Felina13'),
   ('BR1ND40', 'Gustavo', 'Alves Oliveira', 'Masculino', 'Player', 'gustavo.aoliveira@sptech.school', '277353'),
   ('LukasCPKIll', 'Lucas', 'Canuto Previtero', 'Masculino', 'Player', 'lucas.previtero@sptech.school', 'canuto123'),
   ('MGTOWRedPill14', 'Vitório', 'Bearari', 'Masculino', 'Player', 'vitorio.bearari@sptech.school', 'sigma123'),
   ('Gusz', 'Gustavo', 'Anthony Menezes', 'Masculino', 'Mestre', 'gustavo.menezes@sptech.school', 'crepusculo'),
   ('Vample', 'Leticia', 'Silva  Santos', 'Feminino', 'Player', 'leticia.ssantos@sptech.school','draculavv')