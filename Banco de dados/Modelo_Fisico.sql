CREATE DATABASE agencia_viagens;

USE agencia_viagens;

CREATE TABLE cliente (
id_cliente int unsigned primary key auto_increment,
cpf varchar(14) NOT NULL,
nome varchar(100) NOT NULL,
telefone varchar(20) NOT NULL,
email varchar(100) NOT NULL,
endereco varchar(255) NOT NULL
);

CREATE TABLE pacote (
id_pacote int primary key auto_increment,
nome varchar(100),
preco_original decimal(10,2),
preco_promocional decimal(10,2),
status varchar(20) default 'Disponível'
);

CREATE TABLE agendamento (
    id_agendamento int PRIMARY KEY AUTO_INCREMENT,
    id_cliente int unsigned NOT NULL,
    id_pacote int NOT NULL,
    data_agendamento datetime NOT NULL,
    hora_agendamento time NOT NULL,
    mensagem text,
    status_agendamento varchar(20) default 'Pendente',
    data_criacao datetime default current_timestamp,
    data_atualizacao datetime default current_timestamp on update current_timestamp,

    foreign key (id_cliente) references cliente(id_cliente) on delete cascade,
    foreign key (id_pacote) references pacote(id_pacote) on delete cascade
);

