
const express = require('express');
const router = express.Router();
/* 
const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
    const folder = path.join(__dirname, '../public/images/avatars');
    cb(null, folder);
    },
    filename: (req, file, cb) => {
       const imageName = Date.now() + file.originalname;
       cb(null, imageName);
    }
})

const upload = multer({storage: multerDiskStorage});

router.post('/register', upload.single('userImage'),
registerController.saveRegister); */

const profileController = require('../controllers/profileController');  



router.get('/',profileController.profile);

module.exports = router;