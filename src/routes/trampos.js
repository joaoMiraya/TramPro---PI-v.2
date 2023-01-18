
const express = require('express');
const router = express.Router();

const tramposController = require('../controllers/tramposController');  



router.get('/', tramposController.index);

module.exports = router;