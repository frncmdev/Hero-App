/*
// Scaffold Prisma to MSSQL database
model Hero {
  id Int @id @default(autoincrement())
  name String @unique
  health Int 
  min_attack Int
  max_attack Int
  img_url String
  matchUps MatchUp[] 

}
model Villain {
  id Int @id @default(autoincrement())
  name String @unique
  health Int 
  min_attack Int
  max_attack Int
  img_url String
  matchUps MatchUp[]
}
model MatchUp {
  id Int @id @default(autoincrement())

  hero Hero @relation(fields: [hero_id], references: [id])
  hero_id Int 
  villain Villain @relation(fields: [villain_id], references: [id])
  villain_id Int
}

-- */
-- drop database if exists ng_assessment
-- go

-- drop login if exists API_Assessment
-- go 

Create Database ng_assess_db
go 

use ng_assess_db
go 
drop table if exists matchUp
go
drop table if exists hero
go
drop table if exists villain
go

-- create login API_Assessment with PASSWORD = 'AngularAssessmentApi1!'
-- go

-- EXEC SP_AddROLEMEMBER 'db_datawriter', 'API_Assessment'
-- EXEC SP_AddROLEMEMBER 'db_datareader', 'API_Assessment'
-- go

create table Hero(
    hero_id Int PRIMARY KEY,
    hero_name NVARCHAR(50) not null unique,
    health Int not null,
    min_attack INT not null,
    max_attack INT not null,
    img_url NVARCHAR(max) not null

);
create table Villain(
    villain_id Int PRIMARY KEY,
    villain_name NVARCHAR(50) not null unique,
    health Int not null,
    min_attack INT not null,
    max_attack INT not null,
    img_url NVARCHAR(max) not null
);
create table MatchUp(
    matchup_id Int PRIMARY KEY,
    matchup_time time not null,
    winner NVARCHAR(7) not null,
    hero_id Int not null,
    villain_id Int not null,
    CONSTRAINT fk_hero_matchup
      FOREIGN KEY (hero_id) REFERENCES hero,
    CONSTRAINT fk_Villain_matchup
      FOREIGN KEY (villain_id) references villain,
    CONSTRAINT valid_winner_matchup 
      check(winner in ('villain','hero', 'draw'))
);








insert into Hero (hero_id, hero_name,health, min_attack, max_attack, img_url) values
  (1, 'Shaq', 8, 3,9, 'https://robohash.org/quisquasvoluptas.png?size=50x50&set=set1'),
  (2, 'Sonny Jins', 15, 2,4, 'https://robohash.org/estidea.png?size=50x50&set=set1'),
  (3, 'Richard Astleigh', 6, 6,12, 'https://robohash.org/ipsamexercitationemsapiente.png?size=50x50&set=set1'),
  (4, 'Angular Wright', 5, 3,9, 'https://robohash.org/esseseddelectus.png?size=50x50&set=set1'),
  (5, 'Jayde Khush', 10, 3,9, 'https://robohash.org/utcorruptilaboriosam.png?size=50x50&set=set1'),
  (6, 'Akira Sas', 9, 3,9, 'https://robohash.org/etdoloribusminus.png?size=50x50&set=set1'),
  (7, 'Amba Singh', 6, 3,9, 'https://robohash.org/nobisquisin.png?size=50x50&set=set1'),
  (8, 'Honourable Jevan', 10, 5,10, 'https://robohash.org/illumtotamexpedita.png?size=50x50&set=set1');

insert into Villain (villain_id, villain_name ,health, min_attack, max_attack, img_url) values
  (1, 'Osama Bin-Ballin', 7, 5,10, 'https://robohash.org/temporaminuscum.png?size=50x50&set=set1'),
  (2, 'Tauri Blache', 2, 5,5, 'https://robohash.org/etabquos.png?size=50x50&set=set1'),
  (3, 'James Vue', 8, 2,7, 'https://robohash.org/temporaasperioresaut.png?size=50x50&set=set1'),
  (4, 'Mi-ya Cauliflower', 9, 1,4, 'https://robohash.org/praesentiummolestiasut.png?size=50x50&set=set1'),
  (5, 'Keith urban', 7, 2,6, 'https://robohash.org/doloremperspiciatisquas.png?size=50x50&set=set1'),
  (6, 'Riley Raid', 15, 2,4, 'https://robohash.org/natusnonsunt.png?size=50x50&set=set1'),
  (7, 'Batu Khan', 6, 2,9, 'https://robohash.org/consequaturconsequunturid.png?size=50x50&set=set1'),
  (8, 'Shell Tonne', 9, 4,9, 'https://robohash.org/inquasqui.png?size=50x50&set=set1');




