const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const axios = require('axios');

const hirerRequest = require('../requests/contratanteRequest');
const workerRequest = require('../requests/trabalhadorRequest');
const def = require('../requests/default');



const entrarController = {
    index: (req, res) =>{
       res.render('entrar')
    },
  login: (req, res) => {
const {email, password} = req.body;
console.log(body);
/*     const workerPromise =  workerRequest.getWorkers();
    const hirerPromise =  hirerRequest.getHirers();
let usuarios = [];
    Promise.all([workerPromise, hirerPromise])

        .then(workersReturned =>{
            usuarios = workersReturned.data
            console.log(usuarios);
        })
        .then(hiresReturned =>{
            usuarios = hiresReturned.data
        })
        .then(console.log(usuarios))

        .catch(error => {
          res.render('error', {error})
        }) */

     /*    let user = req.body.email;
        let pass = req.body.password;

        let userFinded = usuarios.find(usr => usr.email == user)

        if(userFinded){
            if(userFinded.senha === pass){
                req.session.userLogged = user;
                res.redirect('/')
            }
        } else {
            let errors = [];
        errors.push('Usuario não encontrado')
        res.render('entrar', {errors})
        } */
    },
    register: (req, res) =>{
        const resultValidations =  validationResult(req);
        if(resultValidations.errors.lenght > 0) {
          return res.render('entrar', {
              errors: resultValidations.mapped(),
              oldData: req.body
          })
          return res.send('Ok, as validações estão corretas')
        }
        
      }
};

module.exports = entrarController;