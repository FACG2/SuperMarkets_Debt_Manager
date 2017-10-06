// the core of the nodejs app uses expressjs and some middlewares
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
var bodyParser = require('body-parser'); // SO THAT JS CAN CONNECT THE FORMS FROM HTML
var cookieParser = require('cookie-parser');
const AuthCookies = require('./helpers/Middlewares/cookieAuth.js');
const errorHandler = require('./helpers/Middlewares/serverError.js');
const controller = require('./controller/index.js');
const helpers = require('./views/helpers/index');
const app = express();
app.use(bodyParser.json()); // Middlewares
app.use(bodyParser.urlencoded({ extended: true })); // Middlewares
app.use(cookieParser()); // Middlewares
app.use(express.static('public')); // Middlewares STATIC FILES
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); // WE ARE USING HBS VIEW ENGIN TO RENDER OUR VIEWS
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'), // THE ORDER OF THE SHOWING LIKE:{{{HEAD}}}
    partialsDir: path.join(__dirname, 'views', 'partials'), // THE PART OF THE HTML PARTS FOR EACH PAGE
    defaultLayout: 'main',
    helpers: helpers
  })
);
app.use(AuthCookies);
app.set('port', process.env.PORT || 5050);
app.use(controller);
app.use(errorHandler);

module.exports = app;
