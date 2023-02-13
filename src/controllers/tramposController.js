const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

const serviceRequest = require('../requests/serviceRequest');

const usersRequest = require('../requests/usersRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const tramposController = {
    index: (req, res) => {
        serviceRequest.getServices()
            .then(servicesReturned => {
                let services = servicesReturned.data;
                res.render('servicos', {
                    services,
                    toThousand
                })
            }),
            usersRequest.getUsers()
                .then(usersReturned => {
                    let users = usersReturned.data
                })
                .catch(error => {
                    res.render('error', { error })
                })
    },
    destroy: (req, res) => {
        let id = req.params.id
        serviceRequest.deleteService(id)
            .then(deleted => {
                res.redirect('/')
            })
            .catch(error => {
                res.render('error', { error });
            })
    },

};


module.exports = tramposController;