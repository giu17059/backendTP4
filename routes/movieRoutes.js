const express = require('express');
const router = express.Router();
const { crearMovie, obtenerMovie } = require('../controllers/movieControllers');

router.post('/', crearMovie);
router.get('/', obtenerMovie);

module.exports = router;