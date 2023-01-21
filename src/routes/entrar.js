const express = require('express');
const router = express.Router();


const validations = require('../middlewares/validationMiddleware')

const entrarController = require('../controllers/entrarController');  


router.get('/',entrarController.register);

router.post('/', validations, entrarController.processRegister);


module.exports = router;