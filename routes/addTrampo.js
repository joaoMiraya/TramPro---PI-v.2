
const express = require('express');
const router = express.Router();

const addTrampoController = require('../controllers/addTrampoController');  




router.get('/', addTrampoController.addTrampo);

module.exports = router;