const express = require('express');
const router = express.Router();

const profilePublicController = require('../controllers/profilePublicController');  



router.get('/detail/:id/', profilePublicController.detail);

module.exports = router;