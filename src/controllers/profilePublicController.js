const path = require('path');
const fs = require('fs');

const serviceRequest = require('../requests/serviceRequest');

const workerRequest = require('../requests/usersRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

 /*  VER OS REQUEST CERTINHO SO ALTEREI NOME */


const profilePublicController = {
    index: (req, res) =>{
        serviceRequest.getServices().
        then(servicesReturned => {
         services = servicesReturned.data
            res.render('profilePublic', {
                services,
                toThousand
            })
        })
        .catch(error => {
            res.render('error', {error})
        })
    },
    detail: (req, res) => {
        let id = req.params.id
        serviceRequest.getService(id).
        then(serviceReturn => {
            let service = serviceReturn.data;
            res.render('profilePublic', {
                service,
                toThousand
            })
        })
        .catch(error => {
            res.render('error', {error})
        })
    },       
};

module.exports = profilePublicController;