const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');

const servicoRequest = require('../requests/servicosRequest')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");




const tramposController = {
    index: (req, res) =>{
        res.render('servicos')
        servicoRequest.getServicos().
        then(servicosReturned => {
            trampos = servicosReturned.data
            res.render('servicos', {
                servico,
                toThousand
            })
        })
        .catch(error => {
            res.render('error', {error})
        })
    },
    detail: (req, res) => {
        let id = req.params.id
        servicoRequest.getServicos(id).
        then(servicosReturn => {
            let servico = servicosReturn.data;
            res.render('pagamento', {
                servico,
                toThousand
            })
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