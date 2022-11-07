const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();

const tramposController = require('../controllers/tramposController');  



router.get('/', tramposController.trampos);

module.exports = router;