const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();

const contratanteController = require('../controllers/contratanteController');



router.get('/', contratanteController.contratante);

module.exports = router;