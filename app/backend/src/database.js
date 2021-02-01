/*
 Conexion de Base de Datos relacional
*/

const mysql = require('mysql');
const { promisify }= require('util');

const { database } = require('./keysmysql');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }

  if (connection) connection.release();
  console.log('MySQL DB is Connected');

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;

/*
 Conexion de Base de Datos no relacional
*/

const mongoose = require('mongoose');
const config = require("./keysmongoDB");

const MONGODB_URI = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

mongoose.connect('mongodb://localhost/wafflestop',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
  .then(db => console.log('MongoDB is connected'))
  .catch(err => console.error(err));
