create database constsolucion; #Confere o nome do banco na API que enviei e troca na moral
use constsolucion;

/*
mudanças que fiz no banco:

alterei o nome de alguns dados, para melhor compreensão;
defini a chave primaria direto na coluna;
criei, alterei e adicionei algumas tabelas/colunas
não acho que a necessidade de haver algumas chaves estrageiras;
*/

create table tbl_usuario(
	id_usuario		int primary Key auto_increment,
	nome_usuario 	varchar(256) not null,
	email 			varchar(256) not null,
	senha			varchar(15) not null
);

create table tbl_resolutor(
	id_resolutor 	int primary key auto_increment,
	email 			varchar(256) not null,
	senha 			varchar(15) not null,
    
    cnpj 			int(14) not null,
	cpf 			int(11) not null,
	telefone 		int(14) null,
    
	e_id_usuario 	int,

	constraint fk_id_usuario foreign key (e_id_usuario) references tbl_usuario(id_usuario) 
);

create table tbl_admin(
	id_admin 	int primary key auto_increment,
	nome 		varchar(100) not null,
    email 		varchar(100) not null,
    senha 		varchar(15) not null
);

create table tbl_endereco(
	cep 		int(8) primary key not null,
	rua 		varchar(100),
	bairro 		varchar(100),
	municipio 	varchar(50),
    latitude 	float not null,
    logitude 	float not null
);

create table tbl_denuncia(
	id_denuncia 	int primary key auto_increment,
	qnt_denuncia 	int not null,
	descrição 		text,
	tipo_problema 	varchar(50),
    e_cep 			int,
    
    constraint fk_cep foreign key (e_cep) references tbl_endereco(cep)
);

create table tbl_imagem(
	id_imagem 		int primary key auto_increment,
    cod_imagem 		varchar(250) not null,
    e_id_denuncia 	int,
    
    constraint fk_id_denuncia foreign key(e_id_denuncia) references tbl_denuncia(id_denuncia)
);