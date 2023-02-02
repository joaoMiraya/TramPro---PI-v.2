const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chatController');

router.get('/', chatController.index)
router.get('/detail/:id', chatController.userChat)



module.exports = router;