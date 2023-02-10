const path = require('path');
const fs = require('fs');

const usersRequest = require('../requests/usersRequest')
const serviceRequest = require('../requests/serviceRequest');
const hiringRequest = require('../requests/hiringRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const pagamentoController = {
    index: (req, res) => {
        let userLogged = req.session.userLogged;
         let id = req.params.id
      serviceRequest.getService(id)
      .then(serviceReturn => {
            let services = serviceReturn.data;
       usersRequest.getUser(services.id_usuarios)
       .then(userReturn => {
            let users = userReturn.data;
            res.render('pagamento', {
                idServico: req.params.id,
                services,
                users,
                userLogged,
                toThousand
            })
        })
    })
      .catch(error => {
            res.render('error', {error})
        })
    },
    payment: async (req, res) => {
    let userLogged = req.session.userLogged;
    let id_contratante = userLogged.id;
    let id_trabalhador = req.body.idServico;
    let services = await serviceRequest.getService(id_trabalhador)
     services = services.data;
   let hiring = await hiringRequest.createHiring({
    id_servicos: services.id,
    dataServico: req.body.dataServico,
    dataPagamento: Date.now(),
    numeroCartao: req.body.numeroCartao.trim().slice(-4),
    nomeCartao: req.body.nomeCartao,
    dataValidade: req.body.validadeCartao,
    id_contratante: id_contratante,
    })
    res.redirect('/')
    }
};


module.exports = pagamentoController;