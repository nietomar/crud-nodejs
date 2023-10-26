# crud-nodejs

-Ejecutar:

npm install ejs express nodemon mysql mysql2

nodemon app

-Base de datos

create database alumnos;
use alumnos;

create table usuarios(
bol char(10) primary key,
nom varchar(60) not null,
appat varchar(60) not null,
apmat varchar(60) not null,
tel varchar(60) not null
);
