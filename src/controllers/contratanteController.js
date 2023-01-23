const path = require('path');

const contratanteController = {
    contratante: (req, res) =>{
       res.render('profileContratante')
    },
    fotoCont: (req, res) => {
        console.log(req.file)
   res.send('Foto alterada')
    }
};

module.exports = contratanteController;