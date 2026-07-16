// IMPORTACIONES
const connection = require("../database/connection");

// MÉTODOS

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

/**
 * Obtiene un ingreso por su identificador.
 *
 * @param {Number} id Identificador del ingreso.
 * @returns {Promise<Object|null>}
 */
const obtenerIngresoPorId = async (id) => {

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
        WHERE id = ?
    `;

    const [rows] = await connection.query(sql, [id]);

    // Retorna el primer registro encontrado o null
    return rows.length > 0 ? rows[0] : null;

};

/**
 * Actualiza un ingreso existente.
 *
 * @param {Number} id Identificador del ingreso.
 * @param {Object} ingreso Información del ingreso.
 * @returns {Promise<Object>}
 */
const actualizarIngreso = async (id, ingreso) => {

    const sql = `
        UPDATE ingresos
        SET
            fecha = ?,
            descripcion = ?,
            monto = ?,
            categoria = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `;

    const [resultado] = await connection.query(
        sql,
        [
            ingreso.fecha,
            ingreso.descripcion,
            ingreso.monto,
            ingreso.categoria,
            id
        ]
    );

    return resultado;

};

// EXPORTACIONES
module.exports = {
    obtenerIngresos,
    obtenerIngresoPorId,
    crearIngreso,
    actualizarIngreso
};