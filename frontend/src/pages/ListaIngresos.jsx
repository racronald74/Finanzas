// ============================
// IMPORTACIONES
// ============================

import { useEffect, useState } from "react";

import {
    obtenerIngresos,
    eliminarIngreso
} from "../services/ingresoService";
import TablaIngresos from "../components/TablaIngresos";
import { Link } from "react-router-dom";


// ============================
// COMPONENTE
// ============================

/**
 * Página que muestra el listado de ingresos.
 */
const ListaIngresos = () => {

    // Estado que almacena los ingresos
    const [ingresos, setIngresos] = useState([]);

    /**
     * Obtiene los ingresos desde la API.
     */
    const cargarIngresos = async () => {

        try {

            const response = await obtenerIngresos();

            setIngresos(response.data.data);

        } catch (error) {

            console.error("Error al obtener los ingresos:", error);

        }

    };

    /**
 * Elimina un ingreso.
 *
 * @param {number} id Identificador del ingreso.
 */
const handleEliminar = async (id) => {

    const confirmar = window.confirm(
        "¿Está seguro de eliminar este ingreso?"
    );

    if (!confirmar) {
        return;
    }

    try {

        // Eliminar el ingreso
        await eliminarIngreso(id);

        // Actualizar el listado
        cargarIngresos();

    } catch (error) {

        console.error("Error al eliminar el ingreso:", error);

        alert("No fue posible eliminar el ingreso.");

    }

};

    // Ejecutar al cargar la página
    useEffect(() => {

        cargarIngresos();

    }, []);

    return (

        <div>

            <h1>Gestión de Ingresos</h1>

            <Link to="/ingresos/nuevo">
    <button>Nuevo ingreso</button>
</Link>

<br />
<br />

            <TablaIngresos
    ingresos={ingresos}
    onEliminar={handleEliminar}
/>

        </div>

    );

};

export default ListaIngresos;