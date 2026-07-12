const IngresoModel = require("../models/IngresoModel");

const obtenerIngresos = (callback) => {
  IngresoModel.obtenerIngresos(callback);
};

module.exports = {
  obtenerIngresos,
};