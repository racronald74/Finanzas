// ============================
// IMPORTACIONES
// ============================

import api from "../utils/api";


// ============================
// SERVICIOS
// ============================

/**
 * Obtiene todos los ingresos.
 */
export const obtenerIngresos = () => {
    return api.get("/ingresos");
};

/**
 * Obtiene un ingreso por su identificador.
 *
 * @param {number} id Identificador del ingreso.
 */
export const obtenerIngresoPorId = (id) => {
    return api.get(`/ingresos/${id}`);
};

/**
 * Registra un nuevo ingreso.
 *
 * @param {Object} ingreso Información del ingreso.
 */
export const crearIngreso = (ingreso) => {
    return api.post("/ingresos", ingreso);
};

/**
 * Actualiza un ingreso existente.
 *
 * @param {number} id Identificador del ingreso.
 * @param {Object} ingreso Información del ingreso.
 */
export const actualizarIngreso = (id, ingreso) => {
    return api.put(`/ingresos/${id}`, ingreso);
};

/**
 * Elimina un ingreso existente.
 *
 * @param {number} id Identificador del ingreso.
 */
export const eliminarIngreso = (id) => {
    return api.delete(`/ingresos/${id}`);
};