const express = require('express');
const router = express.Router();
const { getAllHorarios, createHorarios, getHorario, getHorariobyMovie, deleteHorario} = require('../controllers/horariosControllers');


router.get('/', getAllHorarios);

router.post('/', createHorarios); 

// Ruta para obtener un horario por ID
router.get('/:id', getHorario);

//Ruta para obtener los horarios de una Pelicula
router.get('/pelicula/:idMovie', getHorariobyMovie);

// Ruta para eliminar un horario
router.delete('/:id', deleteHorario);

module.exports = router;