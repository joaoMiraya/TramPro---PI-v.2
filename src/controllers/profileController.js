const path = require('path');

const profileController = {
    profile: (req, res) =>{
       res.render('profile')
    },
    foto: (req, res) => {
        console.log(req.file)
   res.send('Foto alterada')
    },
    edit: (req, res) => {
        res.render('editProfile')
    }
};

module.exports = profileController;