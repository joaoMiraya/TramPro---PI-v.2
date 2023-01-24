const express = require('express');
const router = express.Router();

const profilePublicController = require('../controllers/profilePublicController');  



router.get('/', profilePublicController.index);
router.get('/detail/:id/', profilePublicController.detail);

module.exports = router;