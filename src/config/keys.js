require('dotenv').config()

module.exports = {
    //* Configurando objeto para inyectarlo en el pool de conexiones
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.PORT_DATABASE,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME
    },

    clave: {
        claveSecreta: process.env.SESSION_KEY,
    },

    web: {
        webService: process.env.WEBSERVICE_URL
    },
}