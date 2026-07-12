require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
res.json({
    mensaje: "API Finanzas funcionando correctamente"
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});