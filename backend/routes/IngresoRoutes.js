// IMPORTACIONES
const express = require("express");
const router = express.Router();

const IngresoController = require("../controllers/IngresoController");

// RUTAS

/**
 * Obtiene todos los ingresos.
 */
router.get("/", IngresoController.obtenerIngresos);

/**
 * Obtiene un ingreso por su identificador.
 */
router.get("/:id", IngresoController.obtenerIngresoPorId);

/**
 * Registra un nuevo ingreso.
 */
router.post("/", IngresoController.crearIngreso);

/**
 * Actualiza un ingreso existente.
 */
router.put("/:id", IngresoController.actualizarIngreso);

/**
 * Elimina un ingreso existente.
 */
router.delete("/:id", IngresoController.eliminarIngreso);

// EXPORTACIONES
module.exports = router;