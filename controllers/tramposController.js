const path = require('path');


const tramposController = {
    trampos: (req, res) =>{
       res.render('trampos')
    },
profilePublic: (req,res) =>{
res.render('profilePublic')
}
};


module.exports = tramposController;