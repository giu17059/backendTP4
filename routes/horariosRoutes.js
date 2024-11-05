const express = require('express');
const router = express.Router();
const { getAllHorarios, createHorarios} = require('../controllers/horariosControllers');


router.get('/', getAllHorarios);


router.post('/', createHorarios); 


module.exports = router;