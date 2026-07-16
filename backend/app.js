require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
const IngresoRoutes = require("./routes/IngresoRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/ingresos", IngresoRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
res.json({
    mensaje: "API Finanzas funcionando correctamente"
});
});

const PORT = process.env.PORT || 3000;

// VERIFICAR CONEXIÓN A MYSQL

/**
 * Verifica que la conexión con la base de datos
 * se pueda establecer correctamente al iniciar la aplicación.
 */
const verificarConexion = async () => {

    try {

        // Obtiene una conexión del pool
        const conexion = await connection.getConnection();

        console.log("Conexión exitosa a MySQL");

        // Libera la conexión para que vuelva al pool
        conexion.release();

    } catch (error) {

        console.error("Error al conectar con MySQL:", error.message);

    }

};

verificarConexion();

app.listen(PORT, () => {
console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});