const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');

const serviceRequest = require('../requests/servicosRequest')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const tramposController = {
    index: (req, res) =>{
        serviceRequest.getServices().
        then(servicesReturned => {
         services = servicesReturned.data
            res.render('servicos', {
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
            res.render('pagamento', {
                service,
                toThousand
            })
        })
        .catch(error => {
            res.render('error', {error})
        })
    },
    destroy : (req, res) => {
		let id = req.params.id
		serviceRequest.deleteService(id)
		.then(deleted => {
			res.redirect('/')
		})	
		.catch(error => {
			res.render('error',{error});
		})	
	},
    profilePublic: (req,res) =>{
        res.render('profilePublic')
        } 
};


module.exports = tramposController;