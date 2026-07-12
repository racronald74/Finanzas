// ============================
// IMPORTACIONES
// ============================

const IngresoModel = require("../models/IngresoModel");
const IngresoValidator = require("../validators/IngresoValidator");
const ValidationError = require("../errors/ValidationError");


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

   // Validar la información del ingreso
const error = IngresoValidator.validarIngreso(ingreso);

// Si existe un error de validación, lanzar una excepción personalizada
if (error) {
    throw new ValidationError(error);
}

    // Registrar el ingreso
    return await IngresoModel.crearIngreso(ingreso);

};


// ============================
// EXPORTACIONES
// ============================

module.exports = {
    obtenerIngresos,
    crearIngreso
};