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
  pronome Varchar(10),
  descricao varchar(500),
  interesse VARCHAR(10),
  email VARCHAR(100),
  senha VARCHAR(50),
  ImagemUsuario VARCHAR(500) default 'null.png',
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
  defesa INT NOT NULL,
  sanidade INT NOT NULL,
  carisma INT NOT NULL,
  inteligencia INT NOT NULL,
  agilidade INT NOT NULL,
  vigor INT NOT NULL,
  SangueAncestral INT NOT NULL,
  PRIMARY KEY (fkpersonagem),
  CONSTRAINT fk_personagem_pontos FOREIGN KEY (fkpersonagem) REFERENCES personagem(id)
);
  
  CREATE TABLE post(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  titulo varchar(50),
  fkusuario INT NOT NULL,
  dataHora timestamp default current_timestamp,
  conteudo VARCHAR(1000),
  tag VARCHAR(50),
  imagem VARCHAR(500),
  CONSTRAINT fk_post_usuario FOREIGN KEY (fkusuario) references usuario(id)
  );
  
  insert into usuario(nickname ,nome, sobrenome, genero, interesse, email, senha, ImagemUsuario)
   values('Lilith','Celina', 'dos Santos Benedito', 'Feminino','Mestre', 'celina.benedito@sptech.school', 'Felina13', '10649d5bb4e2d89cb2ec37b7028084103cd5c683583d08d8abb4077107c49b4fe082ffe166a281d291010a8f39f2c85113dce25474a56d4a967d11f12c6c6db6.jfif'),
   ('BR1ND40', 'Gustavo', 'Alves Oliveira', 'Masculino', 'Player', 'gustavo.aoliveira@sptech.school', '277353', '5781e96ccce5fe26cd00f24484ce6e8786315d20ebc058f6bf6289da94c88ab4b31751b90980d8f7cde481dfb882a1d0847124ee94eb6d0457411e8eef6c708f.jpg'),
   ('LukasCPKIll', 'Lucas', 'Canuto Previtero', 'Masculino', 'Player', 'lucas.previtero@sptech.school', 'canuto123', 'null.png'),
   ('MGTOWRedPill14', 'Vitório', 'Bearari', 'Masculino', 'Player', 'vitorio.bearari@sptech.school', 'sigma123', 'null.png'),
   ('Gusz', 'Gustavo', 'Anthony Menezes', 'Masculino', 'Mestre', 'gustavo.menezes@sptech.school', 'crepusculo', 'null.png'),
   ('Vample', 'Leticia', 'Silva  Santos', 'Feminino', 'Player', 'leticia.ssantos@sptech.school','draculavv', 'null.png'),
   ('Gui','Guilherme',''),
   ('javed386','Nicolas','Barboza Javed','Outro','Player','nicolas.javed@gmail.com','123','null.png');
   
    insert into post(titulo, fkusuario, conteudo, tag)
	values('Como derrotar uma gárgula?', '1', 'Eu estou com uma duvida, tem algum jeito facil de derrotar as gÃ¡rgulas?', 'Monstro');

  create view view_generos as
  select (select count(genero) from usuario where genero like 'Feminino') as "Quantidade de Mulheres", 
  (select count(genero) from usuario where genero like 'Masculino') as "Quantidade de Homens",
  (select count(genero) from usuario where genero like 'Outro') as 'Outros Generos'
  from usuario
  group by "Quantidade de Mulheres" ;
    
select * from view_generos;
select * from post;

select * from usuario;
