// the core of the nodejs app uses expressjs and some middlewares
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
const AuthCookies = require('./controller/Middlewares/cookieAuth.js');
const errorHandler = require('./controller/Middlewares/serverError.js');
const controller = require('./controller/index.js');
// const helpers = require('./views/helpers/index');
const app = express();
app.use(bodyParser.json());
app.use(AuthCookies);
app.use(errorHandler);
// app.use(cookieParser);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
    // helpers: helpers
  })
);
app.set('views engine', 'hbs');
app.set('port', process.env.PORT || 4000);
app.use(controller);

module.exports = app;
