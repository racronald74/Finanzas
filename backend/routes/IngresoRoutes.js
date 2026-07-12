// ============================
// IMPORTACIONES
// ============================

const express = require("express");
const router = express.Router();

const IngresoController = require("../controllers/IngresoController");

// ============================
// RUTAS
// ============================

/**
 * Obtiene todos los ingresos.
 */
router.get("/", IngresoController.obtenerIngresos);

/**
 * Registra un nuevo ingreso.
 */
router.post("/", IngresoController.crearIngreso);

// ============================
// EXPORTACIONES
// ============================

module.exports = router;