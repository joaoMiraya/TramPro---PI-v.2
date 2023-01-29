const express = require('express');
const router = express.Router();
const { check } = require('express-validator');


const validations = require('../middlewares/validationMiddleware')

const entrarController = require('../controllers/entrarController');  


router.get('/' , entrarController.index);

router.post('/', validations, entrarController.login);

router.post('/register', validations, entrarController.register);


module.exports = router;