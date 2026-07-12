const express = require("express");
const router = express.Router();

const IngresoController = require("../controllers/IngresoController");

router.get("/", IngresoController.obtenerIngresos);

module.exports = router;