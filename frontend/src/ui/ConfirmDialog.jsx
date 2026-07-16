// ============================
// COMPONENTE CONFIRMACIÓN
// ============================

/**
 * Muestra un cuadro de diálogo de confirmación.
 *
 * @param {Object} props
 * @param {boolean} props.open Indica si el diálogo está visible.
 * @param {string} props.title Título del diálogo.
 * @param {string} props.message Mensaje de confirmación.
 * @param {Function} props.onConfirm Acción al confirmar.
 * @param {Function} props.onCancel Acción al cancelar.
 */
const ConfirmDialog = ({
    open,
    title,
    message,
    onConfirm,
    onCancel
}) => {

    if (!open) {

        return null;

    }

    return (

        <div className="dialog-overlay">

            <div className="dialog">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="dialog-buttons">

                    <button
                        className="btn-cancelar"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>

                    <button
                        className="btn-eliminar"
                        onClick={onConfirm}
                    >
                        Eliminar
                    </button>

                </div>

            </div>

        </div>

    );

};

export default ConfirmDialog;