// Controlador para manejar las operaciones relacionadas con los ingresos
const IngresoService = require("../services/IngresoService");
const Response = require("../utils/response");
/**
 * Obtiene todos los ingresos registrados.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const obtenerIngresos = (req, res) => {

    IngresoService.obtenerIngresos((error, resultados) => {

        // Error al consultar la base de datos
        if (error) {
            return Response.error(
                res,
                500,
                "Error al obtener los ingresos",
                error.message
            );
        }

        // Respuesta exitosa
        Response.success(
            res,
            200,
            "Ingresos obtenidos correctamente",
            resultados
        );

    });

};
/**
/**
 * Registra un nuevo ingreso.
 *
 * @param {Object} req Objeto de la petición HTTP.
 * @param {Object} res Objeto de la respuesta HTTP.
 */
const crearIngreso = (req, res) => {

    // Datos enviados por el cliente
    const ingreso = req.body;

    IngresoService.crearIngreso(ingreso, (error, resultado) => {

        // Error al registrar
        if (error) {
            return Response.error(
                res,
                500,
                "Error al registrar el ingreso",
                error.message
            );
        }

        // Registro exitoso
        Response.success(
            res,
            201,
            "Ingreso registrado correctamente",
            {
                id: resultado.insertId
            }
        );

    });

};
// Exporta los métodos del controlador para que puedan ser utilizados en otras partes de la aplicación
module.exports = {
  obtenerIngresos,
  crearIngreso
};