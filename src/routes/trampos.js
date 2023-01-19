
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body, check } = require('express-validator');


const tramposController = require('../controllers/tramposController');  

const verifyUserLogged = require('../middlewares/verifyUserLogged')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/images/avatars')
    },
    filename: function(req, file, cb) {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})




router.get('/', tramposController.index);

router.get('/detail/:id/', tramposController.detail);



module.exports = router;