const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');

const { database } = require('./keysmysql');

// Intializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*
app.use(session({
  secret: 'wafflestop',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//app.use(validator);

// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash('message');
  app.locals.success = req.flash('success');
  app.locals.user = req.user;
  next();
});
*/

// Routes
app.use(require('./routes/index'));
//app.use(require('./routes/authentication'));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});