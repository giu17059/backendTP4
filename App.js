const express = require('express');
const sequelize = require('./config/database'); // Importar la configuración de la base de datos
const userRoutes = require('./routes/userRoutes'); // Importar las rutas de usuario

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // Para parsear JSON
app.use('/api/users', userRoutes); // Define el prefijo para las rutas de usuarios

// Conectar a la base de datos y sincronizar modelos
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });
