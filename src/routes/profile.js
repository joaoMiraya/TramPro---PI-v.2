
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const profileController = require('../controllers/profileController');  

                     /*  STORAGE FOR PROFILE */

const storage = multer.diskStorage({
    destination: function (req, file, cb)  {
       cb(null, __dirname + '../../../public' + '/images/profiles');
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    },      
});

const fileUpload = multer({ storage: storage })

                   /*  STORAGE FOR SERVICE */

const Servicestorage = multer.diskStorage({
    destination: function (req, file, cb)  {
       cb(null, __dirname + '../../../public' + '/images/servicesImg');
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    },      
});

const ServicefileUpload = multer({ storage: Servicestorage })


router.get('/',profileController.profile);

router.get('/addTrampo', profileController.addTrampo);

router.get('/edit', profileController.edit)

router.post('/fotoService', ServicefileUpload.single('serviceImage'), profileController.fotoService)

router.post('/foto', fileUpload.single('inputAvatar'), profileController.foto);




module.exports = router;