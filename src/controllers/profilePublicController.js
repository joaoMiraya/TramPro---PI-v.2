const path = require('path');
const fs = require('fs');

const serviceRequest = require('../requests/serviceRequest');

const usersRequest = require('../requests/usersRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const profilePublicController = {
    detail: (req, res) => {
        let id = req.params.id
      serviceRequest.getService(id).
         then(serviceReturn => {
            let services = serviceReturn.data;
       usersRequest.getUser(services.id_usuarios).
        then(userReturn => {
            let users = userReturn.data;
            res.render('profilePublic', {
                services,
                users,
                toThousand
            })
        })
    })
      .catch(error => {
            res.render('error', {error})
        })
    }
};

module.exports = profilePublicController;