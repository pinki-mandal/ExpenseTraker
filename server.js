var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

app = express();

//Cargar rutas
var appRoutes = require('./app/route/appRoute');



//cors
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', appRoutes);

module.exports = app;