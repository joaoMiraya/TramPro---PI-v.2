const { check } = require('express-validator');
const path = require('path')

const validations = [
    check('nome').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('sobrenome').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('cpf').notEmpty().withMessage('Preencha este campo').bail().trim().bail().custom(value =>{
        if(isNaN(value)){
            throw new Error('Você deve digitar um valor numérico')
        } else {
            return true;
        }
    }),
    check('telefone').notEmpty().withMessage('Preencha este campo').bail().trim(),
    check('email').notEmpty().withMessage('Preencha este campo').bail().trim().bail().normalizeEmail().bail().isEmail().withMessage('Digite um Email valido'),
    check('confirmEmail').notEmpty().withMessage('Preencha este campo').bail().trim().bail().normalizeEmail().bail().isEmail().withMessage('Digite um Email valido'),
    check('senha').notEmpty().withMessage('Tem que escrever uma senha').bail().isLength({min: 6}).withMessage('A senha precisa ter 6 caracteres'),
    check('confirmPassword').notEmpty().withMessage('Tem que escrever uma senha').bail().isLength({min: 8}).withMessage('A senha precisa ter 8 caracteres'),
];

module.exports = validations;