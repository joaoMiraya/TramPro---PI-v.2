
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body, check } = require('express-validator');


const tramposController = require('../controllers/tramposController');  

const verifyUserLogged = require('../middlewares/verifyUserLogged')






router.get('/', tramposController.index);

router.delete('/delete/:id', tramposController.destroy)

module.exports = router;