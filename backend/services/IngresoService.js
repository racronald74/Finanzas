const IngresoModel = require("../models/IngresoModel");
//Modelo para obtener todos los ingresos
const obtenerIngresos = (callback) => {
  IngresoModel.obtenerIngresos(callback);
};
//Modelo para crear un nuevo ingreso
const crearIngreso = (ingreso, callback) => {
  IngresoModel.crearIngreso(ingreso, callback);
};
//Exportar las funciones del servicio
module.exports = {
  obtenerIngresos,
  crearIngreso,
};