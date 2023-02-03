
const express = require('express');
const router = express.Router();
const path = require('path');

const verifyUserLogged = require('../middlewares/verifyUserLogged');

const pagamentoController = require('../controllers/pagamentoController');  


router.get('/detail/:id/', verifyUserLogged, pagamentoController.index);

router.get('/pagamento/detail/payment', pagamentoController.payment);





module.exports = router;