SET SQL_SAFE_UPDATES = 0;

create database restaurants;

use restaurants;

drop table food;

create table food (
	id int auto_increment primary key not null,
    namex varchar(100) not null,
    done boolean not null
);