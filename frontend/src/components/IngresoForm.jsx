// ============================
// IMPORTACIONES
// ============================

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    crearIngreso,
    actualizarIngreso
} from "../services/ingresoService";


// ============================
// COMPONENTE
// ============================

/**
 * Formulario para registrar o editar un ingreso.
 *
 * @param {Object} props
 * @param {Object|null} props.ingreso Datos del ingreso cuando se edita.
 */
const IngresoForm = ({ ingreso }) => {

    const navigate = useNavigate();

    // Estado del formulario
    const [formulario, setFormulario] = useState({
        fecha: "",
        descripcion: "",
        monto: "",
        categoria: ""
    });

    /**
     * Carga la información cuando se está editando.
     */
    useEffect(() => {

        if (ingreso) {

            setFormulario({
                fecha: ingreso.fecha
                    ? ingreso.fecha.substring(0, 10)
                    : "",
                descripcion: ingreso.descripcion,
                monto: ingreso.monto,
                categoria: ingreso.categoria
            });

        }

    }, [ingreso]);

    /**
     * Actualiza el estado del formulario.
     */
    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        });

    };

    /**
     * Envía el formulario.
     */
    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            if (ingreso) {

                // Actualizar
                await actualizarIngreso(
                    ingreso.id,
                    formulario
                );

                alert("Ingreso actualizado correctamente.");

            } else {

                // Crear
                await crearIngreso(formulario);

                alert("Ingreso registrado correctamente.");

            }

            navigate("/ingresos");

        } catch (error) {

            console.error(error);

            alert("Ocurrió un error.");

        }

    };

    return (

        <form onSubmit={handleSubmit}>

            <div>

                <label>Fecha</label><br />

                <input
                    type="date"
                    name="fecha"
                    value={formulario.fecha}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Descripción</label><br />

                <input
                    type="text"
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Monto</label><br />

                <input
                    type="number"
                    name="monto"
                    value={formulario.monto}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div>

                <label>Categoría</label><br />

                <input
                    type="text"
                    name="categoria"
                    value={formulario.categoria}
                    onChange={handleChange}
                />

            </div>

            <br />

            <button type="submit">
                {ingreso ? "Actualizar" : "Guardar"}
            </button>

        </form>

    );

};

export default IngresoForm;