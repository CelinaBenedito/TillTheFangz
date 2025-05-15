CREATE DATABASE IF NOT EXISTS TillTheFangz;
USE TillTheFangz;

-- -----------------------------------------------------
-- Tabela usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TillTheFangz.usuario(
  id INT  PRIMARY KEY AUTO_INCREMENT,
  nickname varchar(40),
  nome VARCHAR(40),
  sobrenome VARCHAR(70),
  genero VARCHAR(17),
  interesse VARCHAR(10),
  dataNasc date,
  email VARCHAR(100),
  senha VARCHAR(50),
  UNIQUE INDEX ix_email(email)
  );
  -- -----------------------------------------------------
-- Tabela personagem
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TillTheFangz.personagem(
  id INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  nome VARCHAR(50) ,
  idade INT,
  peso INT,
  genero VARCHAR(17),
  altura INT,
  historia VARCHAR(200),
  caracteristicas VARCHAR(150),
  INDEX ixpersonagem_usuario (fkUsuario),
  CONSTRAINT fkpersonagem_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
    );
    
-- -----------------------------------------------------
-- Tabela pontos
-- -----------------------------------------------------
create table TillTheFangz.pontos(
fkPersonagem int primary key,
defesa INT,
sanidade INT,
  carisma INT,
  inteligencia INT,
  agilidade INT,
  vigor INT,
  SangueAncestral INT,
  constraint fkPersonagem_pontos foreign key (fkPersonagem) references personagem(id)
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