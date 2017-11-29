CREATE DATABASE teetime_db;
USE teetime_db;

CREATE TABLE days(
	id INT NOT NULL AUTO_INCREMENT, 
	weekday VARCHAR(9) NOT NULL,
	openTime VARCHAR(8) NOT NULL,
	closeTime VARCHAR(8) NOT NULL,
	iteration INT NOT NULL,
	isOpen BOOLEAN default true,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	primary key (id)
);

CREATE TABLE reservations(
	id INT NOT NULL AUTO_INCREMENT, 
	teeTime VARCHAR(8) NOT NULL,
	weekday VARCHAR(9) NOT NULL,
	firstPlayerName VARCHAR(50) NOT NULL, 
	secondPlayerName VARCHAR(50) NOT NULL, 
	thirdPlayerName VARCHAR(50) NOT NULL, 
	fourthPlayerName VARCHAR(50) NOT NULL, 
	isFull BOOLEAN default false, 
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	primary key (id)
);

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(20) NOT NULL,
	firstName VARCHAR(20) NOT NULL,
	lastName VARCHAR(20) NOT NULL,
	isAdmin BOOLEAN default false,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	primary key (id)
);