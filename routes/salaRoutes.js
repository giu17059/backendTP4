// routes/salaRoutes.js
const express = require('express');
const router = express.Router();
const { createSala, getSalas } = require('../controllers/salaController');

router.post('/', createSala); // Ruta para crear una nueva sala
router.get('/', getSalas); // Ruta para obtener todas las salas

module.exports = router;

