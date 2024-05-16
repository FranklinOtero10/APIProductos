
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config()

app.set('port', process.env.PORT || 4500);
app.use(morgan('dev')); // Configurando el middleware morgan para visualizar que esta llegando al servidor

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

//* Configuracion de rutas
app.use('/api/categorias',require('./routes/categorias')); // Configuracion de ruta 
app.use('/',require('./routes/rutas')); // Configuracion de ruta  


//* Iniciar el servidor 
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
});