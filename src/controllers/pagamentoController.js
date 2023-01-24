const path = require('path');
const fs = require('fs');

const serviceRequest = require('../requests/servicosRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const pagamentoController = {
    index: (req, res) => {
        let id = req.params.id
        serviceRequest.getService(id).
        then(serviceReturn => {
            let service = serviceReturn.data;
            res.render('pagamento', {
                service,
                toThousand
            })
        })
        .catch(error => {
            res.render('error', {error})
        })
    },
};


module.exports = pagamentoController;