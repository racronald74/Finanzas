import { Link } from "react-router-dom";

// ============================
// COMPONENTE TABLA DE INGRESOS
// ============================

/**
 * Muestra el listado de ingresos.
 *
 * @param {Object} props Propiedades del componente.
 * @param {Array} props.ingresos Lista de ingresos.
 */
const TablaIngresos = ({ ingresos, onEliminar }) => {

    return (

        <table border="1" cellPadding="8">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Monto</th>
                    <th>Categoría</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>

                {ingresos.length === 0 ? (

                    <tr>
                        <td colSpan="6">
                            No existen ingresos registrados.
                        </td>
                    </tr>

                ) : (

                    ingresos.map((ingreso) => (

                        <tr key={ingreso.id}>

                            <td>{ingreso.id}</td>
                            <td>{ingreso.fecha}</td>
                            <td>{ingreso.descripcion}</td>
                            <td>{ingreso.monto}</td>
                            <td>{ingreso.categoria}</td>

<td>

    <Link to={`/ingresos/editar/${ingreso.id}`}>
        <button>
            Editar
        </button>
    </Link>

    {" "}

    <button
        onClick={() => onEliminar(ingreso.id)}
    >
        Eliminar
    </button>

</td>

                        </tr>

                    ))

                )}

            </tbody>

        </table>

    );

};

export default TablaIngresos;