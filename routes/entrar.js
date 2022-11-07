const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();

const entrarController = require('../controllers/entrarController');  



router.get('/',entrarController.entrar);

module.exports = router;