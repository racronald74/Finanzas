// ============================
// CLASE DE ERROR DE VALIDACIÓN
// ============================

/**
 * Representa un error causado por datos inválidos
 * enviados por el cliente.
 */
class ValidationError extends Error {

    /**
     * Constructor de la clase.
     *
     * @param {String} message Mensaje del error.
     */
    constructor(message) {

        super(message);

        this.name = "ValidationError";
        this.statusCode = 400;

    }

}


// ============================
// EXPORTACIONES
// ============================

module.exports = ValidationError;