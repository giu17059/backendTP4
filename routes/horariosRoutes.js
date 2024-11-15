const express = require('express');
const router = express.Router();
const { getAllHorarios, createHorarios, getHorario, getHorariobyMovie} = require('../controllers/horariosControllers');


router.get('/', getAllHorarios);

router.post('/', createHorarios); 

// Ruta para obtener un horario por ID
router.get('/:id', getHorario);

//Ruta para obtener los horarios de una Pelicula
router.get('/pelicula/:idMovie', getHorariobyMovie);

module.exports = router;