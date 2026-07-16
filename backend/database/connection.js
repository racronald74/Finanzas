// IMPORTACIONES
const mysql = require("mysql2/promise");
require("dotenv").config();

// CONEXIÓN A LA BASE DE DATOS

/**
 * Pool de conexiones a MySQL.
 *
 * Utilizar un pool permite reutilizar conexiones,
 * mejora el rendimiento y es la práctica recomendada
 * para aplicaciones con Express.
 */
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// EXPORTACIONES
module.exports = pool;