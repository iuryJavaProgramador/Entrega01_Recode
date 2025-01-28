CREATE DATABASE agencia_travel;
USE agencia_travel;

-- Gera��o de Modelo f�sico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Agencia (
    Id_agencia INTEGER PRIMARY KEY,
    Nome VARCHAR(100),
    Telefone CHAR(15),
    Endereco VARCHAR(255)
);


CREATE TABLE Servico (
    Id_servico INTEGER PRIMARY KEY,
    Pacotes_viagem VARCHAR(255),
    Id_agencia INTEGER,
    FOREIGN KEY (Id_agencia) REFERENCES Agencia(Id_agencia)
);


CREATE TABLE Cliente (
    Id_cliente INTEGER PRIMARY KEY,
    Nome VARCHAR(100),
    Telefone CHAR(15),
    Email VARCHAR(150)
);


CREATE TABLE Agendamento (
    Id_agendamento INTEGER PRIMARY KEY,
    Local_viagem VARCHAR(100),
    Hora DATETIME,
    Data DATE,
    Mensagem VARCHAR(255),
    Id_cliente INTEGER,
    Id_servico INTEGER,
    FOREIGN KEY (Id_cliente) REFERENCES Cliente(Id_cliente),
    FOREIGN KEY (Id_servico) REFERENCES Servico(Id_servico)
);