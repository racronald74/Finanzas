// ============================
// IMPORTACIONES
// ============================

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import IngresoForm from "../components/IngresoForm";
import { obtenerIngresoPorId } from "../services/ingresoService";


// ============================
// COMPONENTE
// ============================

/**
 * Página para registrar o editar un ingreso.
 */
const FormularioIngreso = () => {

    // Obtener el parámetro id de la URL
    const { id } = useParams();

    // Estado del ingreso
    const [ingreso, setIngreso] = useState(null);

    /**
     * Obtiene un ingreso por su identificador.
     */
    const cargarIngreso = async () => {

        try {

            const response = await obtenerIngresoPorId(id);

            setIngreso(response.data.data);

        } catch (error) {

            console.error("Error al obtener el ingreso:", error);

        }

    };

    useEffect(() => {

        // Solo consultar si existe un id
        if (id) {

            cargarIngreso();

        }

    }, [id]);

    return (

        <div>

            <h1>

                {id
                    ? "Editar ingreso"
                    : "Nuevo ingreso"}

            </h1>

            <IngresoForm ingreso={ingreso} />

        </div>

    );

};

export default FormularioIngreso;