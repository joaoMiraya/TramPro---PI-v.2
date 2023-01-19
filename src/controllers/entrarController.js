const path = require('path');
const fs = require('fs');


const entrarController = {
    entrar: (req, res) =>{
       res.render('entrar')
       
    },
    login: (req, res) =>{
        let user = req.body.user;
        let pass = req.body.password;

        let userFinded = user.find(usr => usr.username == user)

        if(userFinded){
            if(userFinded.password === pass){
                req.session.userLogged = user;
                res.redirect('/')
            }
        } else {
            let errors = [];
        errors.push('Usuario não encontrado')
        res.render('login', {errors})
        }
    }
};

module.exports = entrarController;