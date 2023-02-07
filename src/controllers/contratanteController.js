const path = require('path');
const fs = require('fs');

const serviceRequest = require('../requests/serviceRequest')
const usersRequest = require('../requests/usersRequest');
const hiringRequest = require('../requests/hiringRequest');


const contratanteController = {
    contratante: async (req, res) =>{
        let userLogged = req.session.userLogged;
                
        let contratacoes = await hiringRequest.getUserHiring(userLogged.id)
        contratacoes = contratacoes.data;
        
        let services = await serviceRequest.getService(contratacoes.id_servicos)
        services = services.data;
        
        if (services.length > 0){
            let users = await usersRequest.getUser(userLogged.id);
            users = users.data;
            res.render('profileContratante', {
                userLogged,
                contratacoes,
                services,
                users
             })         
        }else{
            let users = await usersRequest.getUser(userLogged.id);
            users = users.data;
            res.render('profileContratante', {
                userLogged,
                contratacoes: [],
                services: [],
                users
             })    
        }
       res.render('profileContratante')
    },
    fotoCont: (req, res) => {
        console.log(req.file)
   res.send('Foto alterada')
    }
};

module.exports = contratanteController;