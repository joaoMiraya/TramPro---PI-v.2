const express = require('express');
const router = express.Router();
const { check } = require('express-validator');


const validations = require('../middlewares/validationMiddleware')

const entrarController = require('../controllers/entrarController');  


router.get('/' , entrarController.index);

router.post('/',[
    check('email').notEmpty().withMessage('Preencha este campo').bail().trim().bail()
    .normalizeEmail().bail().isEmail().withMessage('Digite um Email valido'),
    check('senha').notEmpty().withMessage('Tem que escrever uma senha').bail()
    .isLength({min: 6}).withMessage('A senha precisa ter 6 caracteres')
], entrarController.login);

router.post('/register', validations, entrarController.register);


module.exports = router;