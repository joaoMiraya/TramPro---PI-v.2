
const express = require('express');
const router = express.Router();

const pagamentoController = require('../controllers/pagamentoController');  



router.get('/', pagamentoController.pagamento);

module.exports = router;