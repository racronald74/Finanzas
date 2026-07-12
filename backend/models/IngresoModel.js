const connection = require("../database/connection");

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

module.exports = {
  obtenerIngresos,
};