// ============================
// CLASE DE ERROR NO ENCONTRADO
// ============================

/**
 * Representa un error cuando un recurso
 * solicitado no existe.
 */
class NotFoundError extends Error {

    /**
     * Constructor de la clase.
     *
     * @param {String} message Mensaje del error.
     */
    constructor(message) {

        super(message);

        this.name = "NotFoundError";
        this.statusCode = 404;

    }

}


// ============================
// EXPORTACIONES
// ============================

module.exports = NotFoundError;