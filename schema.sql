CREATE DATABASE IF NOT EXISTS burgers_DB;	
USE bugers_DB;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(300) NOT NULL,
    devoured BOOL DEFAULT false, 
    PRIMARY KEY (id), 
    );

