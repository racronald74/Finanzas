// ============================
// MÉTODOS
// ============================

/**
 * Valida la información de un ingreso.
 *
 * @param {Object} ingreso Información del ingreso.
 * @returns {String|null} Mensaje de error o null si la información es válida.
 */
const validarIngreso = (ingreso) => {

    // Validar fecha
    if (!ingreso.fecha) {
        return "La fecha es obligatoria.";
    }

    // Validar descripción
    if (!ingreso.descripcion || ingreso.descripcion.trim() === "") {
        return "La descripción es obligatoria.";
    }

    if (ingreso.descripcion.length > 255) {
        return "La descripción no puede superar los 255 caracteres.";
    }

    // Validar monto
    if (ingreso.monto === undefined || ingreso.monto === null) {
        return "El monto es obligatorio.";
    }

    if (Number(ingreso.monto) <= 0) {
        return "El monto debe ser mayor que cero.";
    }

    // Validar categoría
    if (!ingreso.categoria || ingreso.categoria.trim() === "") {
        return "La categoría es obligatoria.";
    }

    if (ingreso.categoria.length > 100) {
        return "La categoría no puede superar los 100 caracteres.";
    }

    return null;

};


// ============================
// EXPORTACIONES
// ============================

module.exports = {
    validarIngreso
};