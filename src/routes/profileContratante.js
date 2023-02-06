
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const contratanteController = require('../controllers/contratanteController');



const storage = multer.diskStorage({
    destination: function (req, file, cb)  {
       cb(null, __dirname + '../../../public' + '/images/profiles');
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    },      
});

const fileUpload = multer({ storage: storage })


router.get('/', contratanteController.contratante);

router.post('/fotoCont', fileUpload.any(), contratanteController.fotoCont);

module.exports = router;