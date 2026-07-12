const connection = require("../database/connection");
//Modelo para obtener todos los ingresos
const obtenerIngresos = (callback) => {
  const sql = `
    SELECT
      id,
      fecha,
      descripcion,
      monto,
      categoria,
      created_at,
      updated_at
    FROM ingresos
    ORDER BY fecha DESC
  `;

  connection.query(sql, callback);
};
//Modelo para crear un nuevo ingreso
const crearIngreso = (ingreso, callback) => {
  const sql = `
    INSERT INTO ingresos (
      fecha,
      descripcion,
      monto,
      categoria
    )
    VALUES (?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [
      ingreso.fecha,
      ingreso.descripcion,
      ingreso.monto,
      ingreso.categoria,
    ],
    callback
  );
};
//Exportar las funciones del modelo
module.exports = {
  obtenerIngresos,
  crearIngreso,
};