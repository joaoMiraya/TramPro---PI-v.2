const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator')

const serviceRequest = require('../requests/serviceRequest')
const usersRequest = require('../requests/usersRequest');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");




const profileController = {
    profile: (req, res) =>{
let userLogged = req.session.userLogged;
let services = [];
let users = [];
serviceRequest.getService(userLogged.id).
         then(serviceReturn => {
            return serviceReturn;
         })
         .then(services =>{
            usersRequest.getUser(userLogged.id).
            then(userReturn => {
                let users = userReturn.data;
          res.render('profile', {
            userLogged,
            services,
            users
                })
         })
         .catch(error => {
            console.log(userLogged)
 /*            let services = null;
            usersRequest.getUser(userLogged.id).
            then(userReturn => {
                let users = userReturn.data;
          res.render('profile', {
            userLogged,
            services,
            users
                })
         }) */
        })
      
         })
        },  
    foto: (req, res) => {
        console.log(req.file)
   res.send('Foto alterada')
    },
    addTrampo: (req, res) => {
        res.render('addTrampo')
    },
    store: (req, res) => {
    let image = [];
        if(req.files[0] != undefined){
            image = req.files[0].filename
        } else {
            image  = 'default-image.jpg'
        }
        let newService = {
            image: image,
            ...req.body,
        }
        serviceRequest.createService(newService)
        .then(serviceReturn => {
            res.redirect('/profile')
        })
        .catch(error => {
            res.render('error', {error});
        })
    },
    edit: (req, res) => {
        res.render('editProfile')
    },


};

module.exports = profileController;