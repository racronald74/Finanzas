// IMPORTACIONES
const IngresoModel = require("../models/IngresoModel");
const IngresoValidator = require("../validators/IngresoValidator");
const ValidationError = require("../errors/ValidationError");
const NotFoundError = require("../errors/NotFoundError");

// MÉTODOS

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

/**
 * Actualiza un ingreso existente.
 *
 * @param {Number} id Identificador del ingreso.
 * @param {Object} ingreso Información del ingreso.
 * @returns {Promise<Object>}
 */
const actualizarIngreso = async (id, ingreso) => {

    // Verificar que el ingreso exista
    await obtenerIngresoPorId(id);

    // Validar la información del ingreso
    const error = IngresoValidator.validarIngreso(ingreso);

    // Si existe un error de validación, lanzar una excepción personalizada
    if (error) {
        throw new ValidationError(error);
    }

    // Actualizar el ingreso
    return await IngresoModel.actualizarIngreso(id, ingreso);

};

/**
 * Elimina un ingreso existente.
 *
 * @param {Number} id Identificador del ingreso.
 * @returns {Promise<Object>}
 */
const eliminarIngreso = async (id) => {

    // Verificar que el ingreso exista
    await obtenerIngresoPorId(id);

    // Eliminar el ingreso
    return await IngresoModel.eliminarIngreso(id);

};

/**
 * Obtiene un ingreso por su identificador.
 *
 * @param {Number} id Identificador del ingreso.
 * @returns {Promise<Object>}
 */
const obtenerIngresoPorId = async (id) => {

    // Buscar el ingreso
    const ingreso = await IngresoModel.obtenerIngresoPorId(id);

    // Verificar si existe
    if (!ingreso) {
        throw new NotFoundError("El ingreso no existe.");
    }

    return ingreso;

};

// EXPORTACIONES
module.exports = {
    obtenerIngresos,
    obtenerIngresoPorId,
    crearIngreso,
    actualizarIngreso,
    eliminarIngreso
};