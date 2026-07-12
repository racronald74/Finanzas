const IngresoService = require("../services/IngresoService");

const obtenerIngresos = (req, res) => {
  IngresoService.obtenerIngresos((error, resultados) => {
    if (error) {
      return res.status(500).json({
        mensaje: "Error al obtener los ingresos",
        error: error.message,
      });
    }

    res.status(200).json(resultados);
  });
};

module.exports = {
  obtenerIngresos,
};