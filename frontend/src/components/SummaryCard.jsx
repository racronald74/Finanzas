// ============================
// IMPORTACIONES
// ============================

import formatoMoneda from "../utils/formatoMoneda";


// ============================
// COMPONENTE
// ============================

/**
 * Tarjeta de resumen.
 *
 * @param {Object} props
 * @param {string} props.titulo
 * @param {number} props.valor
 */
const SummaryCard = ({ titulo, valor }) => {

    return (

        <div className="summary-card">

            <h3>{titulo}</h3>

            <p>

                {formatoMoneda(valor)}

            </p>

        </div>

    );

};

export default SummaryCard;