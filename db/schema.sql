DROP DATABASE IF EXISTS dnd_db;
CREATE DATABASE dnd_db;

CREATE TABLE character (
    id INT NOT NULL AUTO_INCREMENT,
    race VARCHAR(30) NOT NULL,
    class VARCHAR(30) NOT NULL,
    equipment VARCHAR(30) NOT NULL,
    spells VARCHAR(30) NOT NULL,


)

SELECT * FROM dnd_db.characters;

INSERT INTO characters (id,race,class,equipment,spells)
VALUES (1,"dwarf","wizard","staff","light")
