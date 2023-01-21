
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const profileController = require('../controllers/profileController');  



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       const folder =  path.join(__dirname, '../public/profile');
       cb(null, folder);
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    },
});

const fileUpload = multer({ storage: storage })

router.get('/',profileController.profile);

router.post('/foto', fileUpload.single('inputAvatar'), profileController.foto);

router.get('/edit', profileController.edit)


module.exports = router;