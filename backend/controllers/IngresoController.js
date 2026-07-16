// IMPORTACIONES
const IngresoService = require("../services/IngresoService");
const Response = require("../utils/response");
const ValidationError = require("../errors/ValidationError");
const NotFoundError = require("../errors/NotFoundError");

// MÉTODOS
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
 * Obtiene un ingreso por su identificador.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const obtenerIngresoPorId = async (req, res) => {

    try {

        // Obtener el identificador enviado en la URL
        const { id } = req.params;

        // Consultar el ingreso
        const ingreso = await IngresoService.obtenerIngresoPorId(id);

        // Respuesta exitosa
        Response.success(
            res,
            200,
            "Ingreso obtenido correctamente",
            ingreso
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

        // Recurso no encontrado
        if (error instanceof NotFoundError) {

            return Response.error(
                res,
                error.statusCode,
                error.message
            );

        }

        // Error interno
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

/**
 * Actualiza un ingreso existente.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const actualizarIngreso = async (req, res) => {

    try {

        // Obtener el identificador enviado en la URL
        const { id } = req.params;

        // Obtener la información enviada por el cliente
        const ingreso = req.body;

        // Actualizar el ingreso
        await IngresoService.actualizarIngreso(id, ingreso);

        // Respuesta exitosa
        Response.success(
            res,
            200,
            "Ingreso actualizado correctamente"
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

        // Recurso no encontrado
        if (error instanceof NotFoundError) {

            return Response.error(
                res,
                error.statusCode,
                error.message
            );

        }

        // Error interno
        Response.error(
            res,
            500,
            "Error interno del servidor",
            error.message
        );

    }

};

/**
 * Elimina un ingreso existente.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const eliminarIngreso = async (req, res) => {

    try {

        // Obtener el identificador enviado en la URL
        const { id } = req.params;

        // Eliminar el ingreso
        await IngresoService.eliminarIngreso(id);

        // Respuesta exitosa
        Response.success(
            res,
            200,
            "Ingreso eliminado correctamente"
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

        // Recurso no encontrado
        if (error instanceof NotFoundError) {

            return Response.error(
                res,
                error.statusCode,
                error.message
            );

        }

        // Error interno
        Response.error(
            res,
            500,
            "Error interno del servidor",
            error.message
        );

    }

};

// EXPORTACIONES

module.exports = {
    obtenerIngresos,
    obtenerIngresoPorId,
    crearIngreso,
    actualizarIngreso,
    eliminarIngreso
};