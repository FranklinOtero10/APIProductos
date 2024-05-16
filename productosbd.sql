create database productos; 
use productos;

create table user_login(
	id int primary key auto_increment,
    email varchar(200) not null,
    user_name varchar(200) not null,
    user_password varchar(200) not null
);

create table categorias(
	idCategoria int primary key auto_increment,
    categoria varchar(100) not null
);

create table productos(
	idProducto int primary key auto_increment,
    producto varchar(100) not null,
    idCategoria int not null,
    
    foreign key (idCategoria) references categorias(idCategoria)
);

-- Inserciones para la tabla 'categorias'
INSERT INTO categorias (categoria) VALUES
('Electrónica'),
('Ropa'),
('Hogar'),
('Alimentos'),
('Juguetes');

-- Inserciones para la tabla 'productos'
INSERT INTO productos (producto, idCategoria) VALUES
('Teléfono móvil', 1),
('Televisor LED', 1),
('Camiseta de algodón', 2),
('Sofá de cuero', 3),
('Mesa de comedor', 3),
('Arroz blanco', 4),
('Leche entera', 4),
('Muñeca de peluche', 5),
('Bloques de construcción', 5);

SELECT a.idProducto, a.producto as Productos, b.categoria as Categorias 
FROM productos a, categorias b 
WHERE a.idCategoria = b.idCategoria ORDER BY producto ASC;
