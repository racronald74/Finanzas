// ============================
// IMPORTACIONES
// ============================

const IngresoService = require("../services/IngresoService");
const Response = require("../utils/response");
const ValidationError = require("../errors/ValidationError");

// ============================
// MÉTODOS
// ============================

/**
 * Obtiene todos los ingresos registrados.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const obtenerIngresos = async (req, res) => {

    try {

        // Obtiene los ingresos desde el servicio
        const ingresos = await IngresoService.obtenerIngresos();

        // Respuesta exitosa
        Response.success(
            res,
            200,
            "Ingresos obtenidos correctamente",
            ingresos
        );

    } catch (error) {

    Response.error(
        res,
        500,
        "Error interno del servidor",
        error.message
    );

}

};


/**
 * Registra un nuevo ingreso.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const crearIngreso = async (req, res) => {

    try {

        // Datos enviados por el cliente
        const ingreso = req.body;

        // Registra el ingreso
        const resultado = await IngresoService.crearIngreso(ingreso);

        // Respuesta exitosa
        Response.success(
            res,
            201,
            "Ingreso registrado correctamente",
            {
                id: resultado.insertId
            }
        );

    } catch (error) {

    // Error de validación
    if (error instanceof ValidationError) {

        return Response.error(
            res,
            error.statusCode,
            error.message
        );

    }

    // Error interno del servidor
    Response.error(
        res,
        500,
        "Error interno del servidor",
        error.message
    );

}

};


// ============================
// EXPORTACIONES
// ============================

module.exports = {
    obtenerIngresos,
    crearIngreso
};