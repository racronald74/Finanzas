// ============================
// IMPORTACIONES
// ============================

const IngresoModel = require("../models/IngresoModel");


// ============================
// MÉTODOS
// ============================

/**
 * Obtiene todos los ingresos registrados.
 *
 * @returns {Promise<Array>}
 */
const obtenerIngresos = async () => {

    return await IngresoModel.obtenerIngresos();

};


/**
 * Registra un nuevo ingreso.
 *
 * @param {Object} ingreso Información del ingreso.
 * @returns {Promise<Object>}
 */
const crearIngreso = async (ingreso) => {

    return await IngresoModel.crearIngreso(ingreso);

};


// ============================
// EXPORTACIONES
// ============================

module.exports = {
    obtenerIngresos,
    crearIngreso
};