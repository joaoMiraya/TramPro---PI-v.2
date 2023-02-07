const path = require('path');
const fs = require('fs');

const usersRequest = require('../requests/usersRequest')
const serviceRequest = require('../requests/serviceRequest');
const hiringRequest = require('../requests/hiringRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

          /* STRIPE API KEYS */

const chavePublicavel = "pk_test_51MW9qkGQrwfM9QMce9AhUYHk9bNaVQp9uF5svt8Eq9QK5TY1i0jM17bUqhDI3h1oKcCMsDEoOaNcFG0JUMCYPPXy00ezjUgmuF";
const chaveSecreta = "sk_test_51MW9qkGQrwfM9QMcUS9DBlyMxSUjgqq1uEG5eNrn0Wus5BJbOB9hGfWVYEEJs3LMsZQdGyEBExQPSURhGx3su5Th00NmXJWL0k";


const pagamentoController = {
    index: (req, res) => {
        res.cookie('cartaoInfo', req.body.numeroCartao, { maxAge: 9999999999} )
        console.log(req.cookies.cartaoInfo)
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
                key: chavePublicavel,
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
    numeroCartao: req.body.numeroCartao,
    nomeCartao: req.body.nomeCartao,
    dataValidade: req.body.validadeCartao ,
    id_contratante: id_contratante,
    })
    res.redirect('/')
    }
};


module.exports = pagamentoController;