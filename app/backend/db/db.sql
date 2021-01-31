CREATE DATABASE db_links;

USE db_links;

-- TABLA USUARIO
-- all pasword wil be encrypted using SHA1
CREATE TABLE usuario (
  idUsuario VARCHAR(11) NOT NULL,
  celular VARCHAR(16) NOT NULL,
  telefono VARCHAR(16) NOT NULL,
  correo VARCHAR(16) NOT NULL,
  usuario VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  tipoUsuario VARCHAR(16) NOT NULL,
  PRIMARY KEY (idUsuario)
);

ALTER TABLE usuario
  MODIFY idUsuario int(11) NOT NULL AUTO_INCREMENT;

DESCRIBE usuario;

-- TABLA TIENDAVIRTUAL
CREATE TABLE tiendaVirtual (
  idTiendaVirtual VARCHAR(11) NOT NULL,
  idPedido VARCHAR(11) NOT NULL,
  idUsuario VARCHAR(11) NOT NULL,
  PRIMARY KEY (idTiendaVirtual),
  FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido),
  FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
);

-- TABLA PEDIDOS
CREATE TABLE pedidos (
  idPedido VARCHAR(11) NOT NULL,
  fecha Date NOT NULL,
  direccion VARCHAR(16) NOT NULL,
  subtotal float NOT NULL,
  costoEnvio float NOT NULL,
  total float NOT NULL,
  estadoPagado boolean NOT NULL,
  estadoEntregado boolean NOT NULL,
  idUsuario VARCHAR(11) NOT NULL,
  idTiendaVirtual VARCHAR(11) NOT NULL,
  PRIMARY KEY (idPedido),
  FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
  FOREIGN KEY (idTiendaVirtual) REFERENCES tiendaVirtual(idTiendaVirtual)
);

-- TABLA TIPOPRODUCTO
CREATE TABLE tipoProducto (
  idTipo VARCHAR(11) NOT NULL,
  tipo VARCHAR(16) NOT NULL,
  descripcion VARCHAR(16) NOT NULL,
  PRIMARY KEY (idTipo)
);

-- TABLA PRODUCTO
CREATE TABLE producto (
  idProducto VARCHAR(11) NOT NULL,
  precio float VARCHAR(16) NOT NULL,
  cantidad int NOT NULL,
  disponible boolean NOT NULL,
  idTipo VARCHAR(11) NOT NULL,
  PRIMARY KEY (idProducto),
  FOREIGN KEY (idTipo) REFERENCES tipoProducto(idTipo)
);

-- TABLA DETALLEPEDIDO
CREATE TABLE detallePedido (
  idDetallePedido VARCHAR(11) NOT NULL,
  precio float VARCHAR(16) NOT NULL,
  cantidad int NOT NULL,
  idProducto VARCHAR(11) NOT NULL,
  idPedido VARCHAR(11) NOT NULL,
  PRIMARY KEY (idDetallePedido),
  FOREIGN KEY (idProducto) REFERENCES producto(idProducto),
  FOREIGN KEY (idPedido) REFERENCES pedidos(idPedido)
);
