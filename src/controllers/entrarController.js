const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const axios = require('axios');

const usersRequest = require('../requests/usersRequest')
const serviceRequest = require ('../requests/serviceRequest');
const def = require('../requests/default');



const entrarController = {
    index: (req, res) =>{
       res.render('entrar')
    },
  login: async (req, res) =>  {
    let usuarios = [];

    const userPromise = await usersRequest.getUsers()
        .then(usersReturned =>{
           usuarios = usersReturned.data
        })
       .catch(error => {
          res.render('error', {error})
        })

        let user = req.body.email;
        let pass = req.body.password;

        let userFinded = usuarios.find(usr => usr.email == user)
        if(userFinded){
            if(userFinded.senha === pass){
             delete userFinded.senha
                req.session.userLogged = userFinded;
                res.redirect('/')
            }
        else {
            let errors = [];
        errors.push('Senha incorreta')
        res.render('entrar', {errors, userFinded })
        
        }
      } else {
        let errors = [];
        errors.push('Usuário não encontrado')
        res.render('entrar', {errors, userFinded })
      }
    },
    register: (req, res) =>{
      usersRequest.createUser({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cidade: req.body.cidade,
        rua: req.body.rua,
        numero: req.body.numero,
        cep: req.body.cep,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: req.body.senha,
        cpf: req.body.cpf
    })
    .then(userCreated => {
      res.redirect('/')
    })
      } 
};

module.exports = entrarController;