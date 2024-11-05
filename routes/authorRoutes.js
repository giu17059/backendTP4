const express = require('express');
const router = express.Router();
const { createAuthor, getAuthor } = require('../controllers/authorControllers');

router.post('/', createAuthor);
router.get('/', getAuthor);

module.exports = router;