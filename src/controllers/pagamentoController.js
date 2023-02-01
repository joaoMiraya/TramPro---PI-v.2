const path = require('path');
const fs = require('fs');

const usersRequest = require('../requests/usersRequest')
const serviceRequest = require('../requests/serviceRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

          /* STRIPE API KEYS */

const chavePublicavel = "pk_test_51MW9qkGQrwfM9QMce9AhUYHk9bNaVQp9uF5svt8Eq9QK5TY1i0jM17bUqhDI3h1oKcCMsDEoOaNcFG0JUMCYPPXy00ezjUgmuF";
const chaveSecreta = "sk_test_51MW9qkGQrwfM9QMcUS9DBlyMxSUjgqq1uEG5eNrn0Wus5BJbOB9hGfWVYEEJs3LMsZQdGyEBExQPSURhGx3su5Th00NmXJWL0k";


const pagamentoController = {
    index: (req, res) => {
         let id = req.params.id
      serviceRequest.getService(id).
         then(serviceReturn => {
            let services = serviceReturn.data;
       usersRequest.getUser(services.id_usuarios).
        then(userReturn => {
            let users = userReturn.data;
         /*    console.log(users); */
            console.log(services);
            res.render('pagamento', {
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
};


module.exports = pagamentoController;