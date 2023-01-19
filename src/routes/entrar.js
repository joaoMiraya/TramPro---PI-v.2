
const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const validacoes = [
    body('email').notEmpty(),
    body('senha').notEmpty(),
    body('senha').notEmpty(),
]


const entrarController = require('../controllers/entrarController');  



router.get('/',entrarController.entrar);

module.exports = router;