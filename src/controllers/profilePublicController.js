const path = require('path');
const fs = require('fs');

const serviceRequest = require('../requests/servicosRequest');

const workerRequest = require('../requests/trabalhadorRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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