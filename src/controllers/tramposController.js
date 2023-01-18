const path = require('path');

const servicoRequest = require('../requests/servicosRequest')


const tramposController = {
    index: (req, res) =>{
        servicoRequest.getServicos().
        then(servicosReturned => {
            trampos = servicosReturned.data
            res.render('trampos')
        })
        .catch(error => {
            res.render('error', {error})
        })
    },
    profilePublic: (req,res) =>{
        res.render('profilePublic')
        }
};


module.exports = tramposController;