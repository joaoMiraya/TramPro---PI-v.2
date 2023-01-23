const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');


const serviceRequest = require('../requests/servicosRequest')
const def = require('../requests/default');



const entrarController = {
    register: (req, res) =>{
       res.render('entrar')
    },
    processRegister: (req, res) =>{
      const resultValidations =  validationResult(req);

      if(resultValidations.errors.lenght > 0) {
        return res.render('entrar', {
            errors: resultValidations.mapped(),
            oldData: req.body
        })
      }
return res.send('Ok, as validações estão corretas')
      
    },

login: (req, res) => {
return res.render('entrar')
},
loginProcess: (req, res) => {
return res.render('entrar')
},
profile: (req, res) => {
return res.render('profile')
},
logout: (req, res) => {
     res.clearCookie('entrar')
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