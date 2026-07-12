// ============================
// RESPUESTAS EXITOSAS
// ============================

/**
 * Envía una respuesta exitosa.
 *
 * @param {Object} res Objeto de respuesta de Express.
 * @param {Number} status Código HTTP.
 * @param {String} message Mensaje de la respuesta.
 * @param {Object|Array|null} data Información a retornar.
 */
const success = (res, status, message, data = null) => {
    res.status(status).json({
        success: true,
        message,
        data
    });
};


// ============================
// RESPUESTAS DE ERROR
// ============================

/**
 * Envía una respuesta de error.
 *
 * @param {Object} res Objeto de respuesta de Express.
 * @param {Number} status Código HTTP.
 * @param {String} message Mensaje del error.
 * @param {String|null} error Error técnico.
 */
const error = (res, status, message, error = null) => {
    res.status(status).json({
        success: false,
        message,
        error
    });
};


// ============================
// EXPORTACIONES
// ============================

module.exports = {
    success,
    error
};