const { check } = require('express-validator');
const path = require('path')

const validations = [
    check('nome').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('sobrenome').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('cpf').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('telefone').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('email').notEmpty().withMessage('Preencha este campo').bail().trim().bail().normalizeEmail().bail().isEmail().withMessage('Digite um Email valido'),
    check('confirm-email').notEmpty().withMessage('Preencha este campo').bail().trim().bail().normalizeEmail().bail().isEmail().withMessage('Digite um Email valido'),
    check('senha').notEmpty().withMessage('Tem que escrever uma senha').bail().isLength({min: 8}).withMessage('A senha precisa ter 8 caracteres'),
    check('confirm-password').notEmpty().withMessage('Tem que escrever uma senha').bail().isLength({min: 8}).withMessage('A senha precisa ter 8 caracteres'),
];

module.exports = validations;