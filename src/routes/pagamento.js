
const express = require('express');
const router = express.Router();
const path = require('path');


const pagamentoController = require('../controllers/pagamentoController');  


router.get('/detail/:id/', pagamentoController.index);

router.get('/pagamento/detail/payment', pagamentoController.payment);





module.exports = router;