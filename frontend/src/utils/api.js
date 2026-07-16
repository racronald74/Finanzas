// ============================
// IMPORTACIONES
// ============================

import axios from "axios";


// ============================
// CONFIGURACIÓN DE AXIOS
// ============================

/**
 * Instancia de Axios para consumir la API del backend.
 */
const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json"
    }
});


// ============================
// EXPORTACIÓN
// ============================

export default api;