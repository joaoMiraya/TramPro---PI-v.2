
const express = require('express');
const router = express.Router();

const editProfileController = require('../controllers/editProfileController');  



router.get('/', editProfileController.editProfile);

module.exports = router;