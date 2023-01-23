const path = require('path');

const profileController = {
    profile: (req, res) =>{
       res.render('profile')
    },
    foto: (req, res) => {
        console.log(req.file)
   res.send('Foto alterada')
    },
    fotoService: (req, res) => {
        console.log(req.file)
   res.send('Foto do serviço alterada')
    },
    edit: (req, res) => {
        res.render('editProfile')
    },
    addTrampo: (req, res) => {
        res.render('addTrampo')
    },

};

module.exports = profileController;