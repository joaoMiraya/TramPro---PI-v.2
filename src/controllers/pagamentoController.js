const path = require('path');
const fs = require('fs');

const userRequest = require('../requests/usersRequest')
const serviceRequest = require('../requests/serviceRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

 /*  VER OS REQUEST CERTINHO SO ALTEREI NOME */

const pagamentoController = {
    index: (req, res) => {
        let service = [];
        let usuarios = [];

        let id = req.params.id
        serviceRequest.getService(id).
        then(serviceReturn => {
         service = serviceReturn.data;
            res.render('pagamento', {
                service,
                toThousand
            })
        }),
        userRequest.getUsers()
        .then(userReturn => {
            usuarios = userReturn.data;
        })
        .catch(error => {
            res.render('error', {error})
        })
    },
};


module.exports = pagamentoController;