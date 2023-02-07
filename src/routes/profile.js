
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {body, check} = require('express-validator');

const verifyUserLogged = require('../middlewares/verifyUserLogged');

const profileController = require('../controllers/profileController');  

                     /*  STORAGE FOR PROFILE */

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },   
    destination: function (req, file, cb)  {
       cb(null, __dirname + '../../../public' + '/images/profiles');
    }  
});

const fileUpload = multer({ storage: storage })

                   /*  STORAGE FOR SERVICE */

const Servicestorage = multer.diskStorage({
    destination: function (req, file, cb)  {
       cb(null, __dirname + '../../../public' + '/images/servicesImg');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },      
});

const ServicefileUpload = multer({ storage: Servicestorage })


                          /* RENDERIZA O ADDTRAMPO */
router.get('/addTrampo', verifyUserLogged, profileController.addTrampo);

                          /*   CRIAR SERVICO */
 router.post('/fotoService', ServicefileUpload.any(), profileController.createTrampo)


                  /* RENDERIZA PROFILE */
router.get('/', verifyUserLogged, profileController.profile);

                /* EDITA USUARIO */
router.get('/formEdit', profileController.formEdit)
router.put('/edit', profileController.edit)

                   /* DELETA SERVICO */
router.delete('/delete/:id', profileController.delete)

                /* EDITA FOTO USUARIO */
router.put('/fotoEdit', profileController.fotoEdit)
router.post('/foto', fileUpload.any(), profileController.foto);

                /* LOGOUT */
router.get('/logout', profileController.logout)


module.exports = router;