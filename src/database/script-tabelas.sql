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
  interesse VARCHAR(10) CONSTRAINT chk_interesse check (interesse in('Player', 'Mestre', 'Outro')),
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
  nome VARCHAR(50),
  apelido Varchar(50),
  idade INT,
  peso INT,
  genero VARCHAR(17),
  altura INT,
  classe varchar(23),
  historia VARCHAR(350),
  caracteristicas VARCHAR(150),
  CONSTRAINT chk_classe check (classe in('Caçador Sombrio', 'Senhor das Sombras',
  'Bárbaro Noturno', 'Ilusionista Vampírico', 'Vampiro Cultista', 'Vampiro iluminado',
  'Vampiro Flagelador', 'Vampiro Canibal', 'Nenhuma')),
  CONSTRAINT fkpersonagem_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
    );

  -- -----------------------------------------------------
-- Tabela pontos
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS pontos(
  fkpersonagem INT NOT NULL,
  vida INT NOT NULL,
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
   ('Vample', 'Leticia', 'Silva Santos', 'Feminino', 'Player', 'leticia.ssantos@sptech.school','draculavv', '23fd7c21b9fb2941a813ded01ab0ae5d8629e7f86308c0d201cfcad4c338d39786a06b01f7ad703e42571a3b5c0c1be1c200897bcef4fcb8eabf751bea07d197.jpg'),
   ('javed386','Nicolas','Barboza Javed','Outro','Player','nicolas.javed@gmail.com','123','null.png'),
   ('Martins69','Guilherme','Martins Nascimento', 'Masculino', 'Player', 'guillherme.mnascimneto@sptech.school', '123', 'null.png');
   
   update usuario set pronome = 'Ela/Dela' where id = 1;
   
   INSERT INTO post (titulo, fkusuario, conteudo, tag, dataHora) VALUES
('Como derrotar uma gárgula?', 1, 'Eu estou com uma dúvida, tem algum jeito fácil de derrotar as gárgulas?', 'Monstro', '2025-05-05 12:30:00'),
('Transformações mais úteis', 2, 'Qual transformação é melhor para escapar de caçadores?', 'Vampiro', '2025-05-06 10:00:00'),
('Ajuda com NPCs', 3, 'Preciso de dicas para criar NPCs interessantes para os jogadores.', 'O Mestre', '2025-05-07 14:45:00'),
('Como ser um bom narrador?', 2, 'Quero começar a narrar, o que é essencial saber?', 'O Narrador', '2025-05-08 18:20:00'),
('Barbaro ou Cultista?', 1, 'Qual dessas classes vocês acham mais divertida de jogar?', 'Barbaro', '2025-05-09 21:00:00'),
('Melhor raça para iniciantes', 4, 'Entre vampiro, anjo ou bruxa, qual é mais equilibrada?', 'Bruxa', '2025-05-10 16:30:00'),
('Combos de habilidades', 5, 'Quais combinações de habilidades são mais apelonas?', 'O Engajado', '2025-05-11 11:00:00'),
('Como narrar cenas de combate?', 2, 'Quero deixar os combates mais emocionantes, dicas?', 'O Narrador', '2025-05-12 13:15:00'),
('Interpretação de vilões', 3, 'Alguma dica pra criar vilões carismáticos e assustadores?', 'O Ator', '2025-05-13 09:40:00'),
('Sistemas de medo', 5, 'Alguém criou uma mecânica legal pra simular medo nos personagens?', 'O Investigador', '2025-05-14 17:00:00'),
('Ideias para campanhas noturnas', 2, 'Quais temas vocês gostam de explorar em missões à noite?', 'Demonio', '2025-05-15 20:30:00'),
('Aparência dos monstros', 1, 'Descrevam seu monstro mais grotesco, quero me inspirar.', 'Monstro', '2025-05-16 23:50:00'),
('Sugestão de cenário urbano', 4, 'Preciso de ideias para um cenário urbano com vampiros.', 'O Observador', '2025-05-17 08:20:00'),
('O uso do silêncio', 3, 'Como o silêncio pode ser usado para causar tensão?', 'O Mestre', '2025-05-18 12:10:00'),
('Caçadores em grupo', 2, 'Como vocês equilibram uma equipe de caçadores contra um vampiro?', 'Caçador', '2025-05-19 14:00:00'),
('Flagelador vale a pena?', 1, 'Tô em dúvida se crio um personagem dessa classe.', 'Flagelador', '2025-05-20 09:30:00'),
('Narrar sessões solo', 5, 'Dicas pra narrar sessões para um único jogador?', 'O Solitario', '2025-05-21 19:10:00'),
('Bruxas e pactos', 3, 'Alguém tem ideias de pactos bizarros para bruxas?', 'Bruxa', '2025-05-22 16:45:00'),
('Como usar flashbacks?', 4, 'Flashbacks funcionam em RPG de terror? Como aplicar?', 'O Investigador', '2025-05-23 13:35:00'),
('Anjos como antagonistas', 2, 'Já colocaram anjos como vilões? Como foi?', 'Anjo', '2025-05-24 11:50:00'),
('O uso de sonhos', 1, 'Quero usar sonhos como pistas, alguma sugestão?', 'O Comentador', '2025-05-25 10:25:00'),
('Mistérios lentos ou rápidos?', 3, 'Vocês preferem campanhas investigativas curtas ou longas?', 'O Investigador', '2025-05-26 15:40:00'),
('Item amaldiçoado', 4, 'Ideias criativas de itens amaldiçoados para dar aos jogadores?', 'O Piadista', '2025-05-27 22:10:00'),
('Criar um Cultista', 2, 'Quais motivações deixam um cultista mais interessante?', 'Cultista', '2025-05-28 17:55:00'),
('Dúvidas sobre Iluminado', 5, 'O Iluminado tem alguma vantagem contra sombras?', 'Iluminado', '2025-05-29 09:05:00'),
('Narrativa em flashback', 4, 'Já jogaram uma sessão toda em flashback? Recomendações?', 'O Narrador', '2025-05-30 21:45:00'),
('Combate contra demônios', 1, 'Qual classe lida melhor com inimigos demoníacos?', 'Demonio', '2025-05-31 13:20:00'),
('Sugestões de enigmas', 3, 'Quero deixar o grupo confuso com um bom enigma.', 'O Investigador', '2025-06-01 18:35:00'),
('Vantagens do Canibal', 5, 'Essa classe é meio doida, mas alguém já jogou com ela?', 'Canibal', '2025-06-02 10:00:00'),
('Jogo sem combate', 2, 'Já fizeram campanhas sem combates? Como mantiveram o ritmo?', 'O Observador', '2025-06-03 16:15:00');

	insert into TillTheFangz.personagem(fkUsuario,nome,apelido,idade,peso,genero,altura,classe,historia,caracteristicas)
    values('2', 'Sr.micosmicos','psps', '2', '10', 'masculino', '0', 'Caçador Sombrio', 
    'Sr.micos micos era um lendário vampiro na vida passada. Reencarnou como um gato, mas suas lembranças continuaram e seus poderes também.
    Tornando o sr.micosmicos o primeiro e único gato vampiro da história.',
    'Astuto, lindo, fofo e manipulador.');
	insert into TillTheFangz.pontos(fkpersonagem,carisma, inteligencia, agilidade, vigor, SangueAncestral, vida, sanidade, defesa)
		values(1,2,1,2,1,4,20,30,7);
    
  create view view_generos as
  select (select count(genero) from usuario where genero like 'Feminino') as QtdMulheres, 
  (select count(genero) from usuario where genero like 'Masculino') as QtdHomens,
  (select count(genero) from usuario where genero like 'Outro') as QtdOutros
  from usuario
  group by QtdMulheres;
  
    select * 
    from usuario us
    left join personagem pe on us.id = pe.fkUsuario
    left join pontos po on pe.id = po.fkpersonagem
    where us.id = 2;
    
	select * from view_generos;
	select * from post;
	select * from usuario;
	select * from TillTheFangz.personagem;
    select * from pontos;
    
	SELECT * 
    FROM TillTheFangz.personagem pe
    left join TillTheFangz.pontos po on pe.id=po.fkpersonagem;

    
    SELECT ROUND(COUNT(*) / COUNT(DISTINCT DATE(dataHora)),2) AS mediaPosts FROM TillTheFangz.post;
    SELECT count(id) from TillTheFangz.usuario;
    select SUM(po.carisma) as TotalCarisma, SUM(po.inteligencia) as TotalInteligencia, SUM(po.agilidade) as TotalAgilidade, SUM(po.vigor) as TotalVigor, SUM(po.SangueAncestral) as TotalSangueAncestral
    from TillTheFangz.personagem pe
    left join TillTheFangz.pontos po on pe.id=po.fkpersonagem;
    
    SELECT 
    (SELECT count(classe) FROM TillTheFangz.personagem where classe like "Caçador Sombrio") as cacador,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Senhor das Sombras") as senhor,  
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Bárbaro Noturno") as barbaro,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Ilusionista Vampírico") as ilusionita,
	(SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro Cultista") as cultista,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro iluminado") as iluminado,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro Flagelador") as flagelador,
    (SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Vampiro Canibal") as canibal,
	(SELECT count(classe)
    from TillTheFangz.personagem
    where classe like "Nenhuma") as nenhuma
    FROM TillTheFangz.personagem
    group by cacador;
    
    SELECT 
  (SELECT COUNT(interesse) FROM TillTheFangz.usuario WHERE interesse LIKE "Player") AS Player,
  (SELECT COUNT(interesse) FROM TillTheFangz.usuario WHERE interesse LIKE "Mestre") AS Mestre,
  (SELECT COUNT(interesse) FROM TillTheFangz.usuario WHERE interesse LIKE "Outro") AS Outros
  FROM TillTheFangz.usuario 
  GROUP BY Player;
  
  SELECT count(id) as qtdUsuarios from TillTheFangz.usuario;
  
   SELECT *
        FROM TillTheFangz.post a
            INNER JOIN TillTheFangz.usuario u
                ON a.fkusuario = u.id 
        WHERE u.id = 2;
  