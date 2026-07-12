// ============================
// IMPORTACIONES
// ============================

const connection = require("../database/connection");


// ============================
// MÉTODOS
// ============================

/**
 * Obtiene todos los ingresos registrados.
 *
 * @returns {Promise<Array>}
 */
const obtenerIngresos = async () => {

    const sql = `
        SELECT
            id,
            fecha,
            descripcion,
            monto,
            categoria,
            created_at,
            updated_at
        FROM ingresos
        ORDER BY fecha DESC
    `;

    const [rows] = await connection.query(sql);

    return rows;

};


/**
 * Registra un nuevo ingreso.
 *
 * @param {Object} ingreso Información del ingreso.
 * @returns {Promise<Object>}
 */
const crearIngreso = async (ingreso) => {

    const sql = `
        INSERT INTO ingresos
        (
            fecha,
            descripcion,
            monto,
            categoria
        )
        VALUES (?, ?, ?, ?)
    `;

    const [resultado] = await connection.query(
        sql,
        [
            ingreso.fecha,
            ingreso.descripcion,
            ingreso.monto,
            ingreso.categoria
        ]
    );

    return resultado;

};


// ============================
// EXPORTACIONES
// ============================

module.exports = {
    obtenerIngresos,
    crearIngreso
};