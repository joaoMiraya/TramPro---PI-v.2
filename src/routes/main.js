const express = require('express');
const router = express.Router();
const path = require('path');
const { check } = require('express-validator');


const validations = require('../middlewares/validationMiddleware')

const entrarController = require('../controllers/entrarController');  



const mainController = require('../controllers/mainController');


router.get('/', mainController.index);
router.get('/search', mainController.search);

router.post('/', validations, entrarController.login);


module.exports = router;
