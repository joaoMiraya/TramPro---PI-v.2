const path = require('path');
const fs = require('fs');

const serviceRequest = require('../requests/serviceRequest')
const usersRequest = require('../requests/usersRequest');
const hiringRequest = require('../requests/hiringRequest');


const contratanteController = {
    contratante: async (req, res) => {
        let userLogged = req.session.userLogged;
        let id = userLogged.id;
        let contratacoes = await hiringRequest.getUserHiring(id)
        contratacoes = contratacoes.data;
        res.render('profileContratante', {
            contratacoes
        })
    },
    fotoCont: (req, res) => {
        console.log(req.file)
        res.send('Foto alterada')
    }
};

module.exports = contratanteController;