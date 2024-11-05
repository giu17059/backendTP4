const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database'); // Importar la configuración de la base de datos
const userRoutes = require('./routes/userRoutes'); // Importar las rutas de usuario
const categoryRoutes = require('./routes/categoryRoutes'); // Importa las rutas de categorías
const reservationRoutes = require('./routes/reservationRoutes');
const salaRoutes = require('./routes/salaRoutes');
const horariosRoutes = require('./routes/horariosRoutes'); 



const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors()); // Permitir CORS
app.use(bodyParser.json());
app.use('/api/users', userRoutes); // Define el prefijo para las rutas de usuarios
app.use('/api/categories', categoryRoutes); // Define el prefijo para las rutas de categorías
app.use('/api/reservations', reservationRoutes);
app.use('/api/salas', salaRoutes);
app.use('/api/horarios', horariosRoutes);


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
