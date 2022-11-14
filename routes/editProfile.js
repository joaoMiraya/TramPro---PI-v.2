const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');  



router.get('/', mainController.editProfile);

module.exports = router;