// ============================
// IMPORTACIONES
// ============================

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

                toast.success("Ingreso actualizado correctamente.");

            } else {

                // Crear
                await crearIngreso(formulario);

                toast.success("Ingreso registrado correctamente.");

            }

    setTimeout(() => {

    navigate("/ingresos");

}, 1500);

        } catch (error) {

            console.error(error);

            toast.error("Ocurrió un error.");

        }

    };

    return (

        <>
        <form
    className="form-container"
    onSubmit={handleSubmit}
>

            <div className="form-group">

    <label>Fecha</label>

    <input
        type="date"
        name="fecha"
        value={formulario.fecha}
        onChange={handleChange}
    />

</div>

            <br />

            <div className="form-group">

                <label>Descripción</label><br />

                <input
                    type="text"
                    name="descripcion"
                    value={formulario.descripcion}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div className="form-group">

                <label>Monto</label><br />

                <input
                    type="number"
                    name="monto"
                    value={formulario.monto}
                    onChange={handleChange}
                />

            </div>

            <br />

            <div className="form-group">

                <label>Categoría</label><br />

                <input
                    type="text"
                    name="categoria"
                    value={formulario.categoria}
                    onChange={handleChange}
                />

            </div>

            <br />

<div className="form-buttons">

    <button
        type="submit"
        className="btn-guardar"
    >
        {ingreso ? "Actualizar" : "Guardar"}
    </button>

    <button
        type="button"
        className="btn-cancelar"
        onClick={() => navigate("/ingresos")}
    >
        Cancelar
    </button>

</div>

        </form>
        
        </>

    );

};

export default IngresoForm;