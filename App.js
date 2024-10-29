// Importar express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Definir una ruta
app.get('/', (req, res) => {
    res.send("¡Servidor funcionando correctamente!");
});

// Escuchar en el puerto 8000
app.listen(8000, () => {
    console.log("Servidor corriendo en http://localhost:8000");
});
