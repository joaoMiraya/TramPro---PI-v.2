
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

/* const Servicestorage = multer.diskStorage({
    destination: function (req, file, cb)  {
       cb(null, __dirname + '../../../public' + '/images/servicesImg');
    },
    filename: (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname));
    },      
});

const ServicefileUpload = multer({ storage: Servicestorage }) */


                          /*   CRIAR SERVICO */

router.get('/addTrampo', /* verifyUserLogged, */ profileController.addTrampo);

/* router.post('/fotoService', ServicefileUpload.single('image'),[
check('nome').isEmpty().withMessage('Defina um nome para seu serviço'),
check('categorias').isEmpty().withMessage('Escolha uma categoria'),
check('estilo').isEmpty().withMessage('Defina se o seu serviço é presencial ou remoto'),
body('preco').isEmpty().withMessage('Preencha este campo com o valor cobrado pelo seu serviço').bail()
.custom(value =>{
    if(isNaN(value)){
        throw new Error('Você deve digitar um valor numérico')
    } else {
        return true;
    }
}),
check('serviceDescricao').isEmpty().withMessage('Insira a desrição do seu serviço, não poupe detalhes')
], profileController.store)
 */



router.get('/',/*  verifyUserLogged,  */profileController.profile);

router.get('/edit', profileController.edit)

router.post('/foto', fileUpload.any(), profileController.foto);




module.exports = router;