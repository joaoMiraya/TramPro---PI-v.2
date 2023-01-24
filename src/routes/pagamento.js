
const express = require('express');
const router = express.Router();
const path = require('path');


const pagamentoController = require('../controllers/pagamentoController');  


router.get('/detail/:id/', pagamentoController.index);





module.exports = router;