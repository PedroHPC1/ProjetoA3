const mysql = require ('mysql2/promise')

// Configura o dotenv
require('dotenv').config()

// Passa os parametros que serão utilizados para conexão com o banco de dados
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

// Exporta a conexão
module.exports = connection