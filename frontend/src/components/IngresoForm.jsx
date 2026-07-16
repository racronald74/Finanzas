// ============================
// IMPORTACIONES
// ============================

import { useState } from "react";
import { crearIngreso } from "../services/ingresoService";
import { useNavigate } from "react-router-dom";


// ============================
// COMPONENTE
// ============================

/**
 * Formulario para registrar o editar un ingreso.
 */
const IngresoForm = () => {

    // Estado del formulario
    const [ingreso, setIngreso] = useState({
        fecha: "",
        descripcion: "",
        monto: "",
        categoria: ""
    });

    const navigate = useNavigate();

    /**
     * Actualiza el estado cuando cambia un campo.
     */
    const handleChange = (event) => {

        const { name, value } = event.target;

        setIngreso({
            ...ingreso,
            [name]: value
        });

    };

/**
 * Envía el formulario.
 */
const handleSubmit = async (event) => {

    event.preventDefault();

    try {

        // Registrar el ingreso
        await crearIngreso(ingreso);

        // Informar al usuario
        alert("Ingreso registrado correctamente.");

// Regresar al listado
navigate("/ingresos");

    } catch (error) {

        console.error(error);

        alert("Ocurrió un error al registrar el ingreso.");

    }

};

    return (

        <form onSubmit={handleSubmit}>

            <div>
                <label>Fecha</label><br />
                <input
                    type="date"
                    name="fecha"
                    value={ingreso.fecha}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Descripción</label><br />
                <input
                    type="text"
                    name="descripcion"
                    value={ingreso.descripcion}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Monto</label><br />
                <input
                    type="number"
                    name="monto"
                    value={ingreso.monto}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Categoría</label><br />
                <input
                    type="text"
                    name="categoria"
                    value={ingreso.categoria}
                    onChange={handleChange}
                />
            </div>

            <br />

            <button type="submit">
                Guardar
            </button>

        </form>

    );

};

export default IngresoForm;