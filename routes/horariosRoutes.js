const express = require('express');
const router = express.Router();
const { getAllHorarios, createHorarios, getHorario} = require('../controllers/horariosControllers');


router.get('/', getAllHorarios);

router.post('/', createHorarios); 

// Ruta para obtener un horario por ID
router.get('/:id', getHorario);

module.exports = router;