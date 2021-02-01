ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

flush privileges;

CREATE DATABASE wafflestop;

USE wafflestop;

-- TABLA USUARIO
-- all pasword wil be encrypted using SHA1
CREATE TABLE usuario (
  idUsuario int(11) NOT NULL AUTO_INCREMENT,
  celular VARCHAR(16) NOT NULL,
  telefono VARCHAR(16) NOT NULL,
  correo VARCHAR(16) NOT NULL,
  usuario VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  tipoUsuario VARCHAR(16) NOT NULL,
  PRIMARY KEY (idUsuario)
);

DESCRIBE usuario;

-- TABLA PEDIDOS
CREATE TABLE pedidos (
  idPedido int(11) NOT NULL,
  fecha Date NOT NULL,
  direccion VARCHAR(16) NOT NULL,
  subtotal float NOT NULL,
  costoEnvio float NOT NULL,
  total float NOT NULL,
  estadoPagado boolean NOT NULL,
  estadoEntregado boolean NOT NULL,
  idUsuario int(11) NOT NULL ,
  idTiendaVirtual int(11) NOT NULL ,
  PRIMARY KEY (idPedido),
  FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

-- TABLA TIPOPRODUCTO
CREATE TABLE tipoProducto (
  idTipo int(11) NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(16) NOT NULL,
  descripcion VARCHAR(16) NOT NULL,
  PRIMARY KEY (idTipo)
);

-- TABLA TIENDAVIRTUAL
CREATE TABLE tiendaVirtual (
  idTiendaVirtual int(11) NOT NULL AUTO_INCREMENT,
  idPedido int(11) NOT NULL ,
  idUsuario int(11) NOT NULL ,
  PRIMARY KEY (idTiendaVirtual),
  FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
  FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);


-- TABLA PRODUCTO
CREATE TABLE producto (
  idProducto int(11) NOT NULL AUTO_INCREMENT,
  precio float NOT NULL,
  cantidad int NOT NULL,
  disponible boolean NOT NULL,
  idTipo int(11) NOT NULL ,
  PRIMARY KEY (idProducto),
  FOREIGN KEY (idTipo) REFERENCES tipoProducto(idTipo)
);

-- TABLA DETALLEPEDIDO
CREATE TABLE detallePedido (
  idDetallePedido int(11) NOT NULL AUTO_INCREMENT,
  precio float NOT NULL,
  cantidad int NOT NULL,
  idProducto int(11) NOT NULL ,
  idPedido int(11) NOT NULL ,
  PRIMARY KEY (idDetallePedido),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto),
  FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido)
);