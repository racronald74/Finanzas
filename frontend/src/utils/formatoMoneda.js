// ============================
// FORMATEAR MONEDA
// ============================

/**
 * Formatea un número como moneda colombiana.
 *
 * @param {number|string} valor
 * @returns {string}
 */
const formatoMoneda = (valor) => {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }
    ).format(valor);

};

export default formatoMoneda;