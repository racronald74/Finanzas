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
import { toast } from "react-toastify";
import ConfirmDialog from "../ui/ConfirmDialog";
import SummaryCard from "../components/SummaryCard";


// ============================
// COMPONENTE
// ============================

/**
 * Página que muestra el listado de ingresos.
 */
const ListaIngresos = () => {

// Estado que almacena los ingresos
const [ingresos, setIngresos] = useState([]);

// Controla la visibilidad del diálogo
const [dialogOpen, setDialogOpen] = useState(false);

// Guarda el id del ingreso a eliminar
const [ingresoSeleccionado, setIngresoSeleccionado] = useState(null);

/**
 * Total de ingresos.
 */
const totalIngresos = ingresos.reduce((total, ingreso) => total + Number(ingreso.monto),0);

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
 * Abre el cuadro de confirmación.
 *
 * @param {number} id
 */
const abrirDialogoEliminar = (id) => {

    setIngresoSeleccionado(id);

    setDialogOpen(true);

};

    /**
 * Elimina un ingreso.
 *
 * @param {number} id Identificador del ingreso.
 */
const handleEliminar = async () => {

// Cerrar el diálogo
setDialogOpen(false);

    try {

        // Eliminar el ingreso
        await eliminarIngreso(ingresoSeleccionado);

        // Actualizar el listado
        cargarIngresos();

        toast.success("Ingreso eliminado correctamente.");

    } catch (error) {

    console.error(error);

    toast.error("No fue posible eliminar el ingreso.");

}

// Limpiar el ingreso seleccionado
setIngresoSeleccionado(null);

};

    // Ejecutar al cargar la página
    useEffect(() => {

        cargarIngresos();

    }, []);

    return (
        <>

        <div>

            <div className="page-header">

    <div>

        <h1>Gestión de Ingresos</h1>

        <br />

        <Link
            to="/ingresos/nuevo"
            className="btn-nuevo"
        >
            Nuevo ingreso
        </Link>

    </div>

    <SummaryCard
        titulo="Total ingresos"
        valor={totalIngresos}
    />

</div>

<br />

            <TablaIngresos
    ingresos={ingresos}
    onEliminar={abrirDialogoEliminar}
/>

        </div>

        <ConfirmDialog
            open={dialogOpen}
            title="Confirmar eliminación"
            message="¿Está seguro de eliminar este ingreso?"
            onConfirm={handleEliminar}
            onCancel={() => setDialogOpen(false)}
        />

        </>

    );

};

export default ListaIngresos;