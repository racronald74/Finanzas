// ============================
// IMPORTACIONES
// ============================

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ListaIngresos from "../pages/ListaIngresos";
import FormularioIngreso from "../pages/FormularioIngreso";


// ============================
// RUTAS
// ============================

/**
 * Define las rutas principales de la aplicación.
 */
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ingresos" element={<ListaIngresos />} />
                <Route path="/ingresos/nuevo" element={<FormularioIngreso />} />
                <Route path="/ingresos/editar/:id" element={<FormularioIngreso />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;