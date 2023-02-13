const path = require('path');
const fs = require('fs');


const serviceRequest = require('../requests/serviceRequest');

const usersRequest = require('../requests/usersRequest');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const chatController = {
    index: (req, res) => {
        res.render('chatMessages')
    },
    userChat: (req, res) => {
        let id = req.params.id
        usersRequest.getUser(id).
            then(userReturn => {
                let users = userReturn.data;
                res.render('chatMessages', {
                    userLogged: req.session.userLogged,
                    users,
                    toThousand
                })
            })
            .catch(error => {
                res.render('error', { error })
            })
    }
}



module.exports = chatController;