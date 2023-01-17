
const express = require('express');
const router = express.Router();

const contratanteController = require('../controllers/contratanteController');



router.get('/', contratanteController.contratante);

module.exports = router;