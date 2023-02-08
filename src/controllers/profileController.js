const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator')

const serviceRequest = require('../requests/serviceRequest')
const usersRequest = require('../requests/usersRequest');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");




const profileController = {
    profile: async (req, res) =>{
        let userLogged = req.session.userLogged;
                
        let services = await serviceRequest.getUserService(userLogged.id)
        services = services.data;
        
        if (services.length > 0){
            let users = await usersRequest.getUser(userLogged.id);
            users = users.data;
            res.render('profile', {
                userLogged,
                services,
                users
             })         
        }else{
            let users = await usersRequest.getUser(userLogged.id);
            users = users.data;
            res.render('profile', {
                userLogged,
                services: [],
                users
             })    
        }
    },  
    foto: (req, res) => {
        let userLogged = req.session.userLogged;
        let id = userLogged.id;
        let userToEdit;
    
          usersRequest.getUser(id)
           .then( userReturn =>{
            userToEdit = userReturn.data;
            
        let foto;
        if(req.files[0]!= undefined){
            foto = req.files[0].filename
        } else{
            foto = userToEdit.foto
        }
        userToEdit = {
            foto: foto,
            ...req.body,
        }
            return userToEdit
    })
    .then(userToEdit => {
        usersRequest.editUser(userToEdit, id)
        .then(edited => {
            res.redirect('/profile')
        })
    })
    .catch(error => {
        res.render('error',{error});
    }) 
    },
    addTrampo: (req, res) => {
        res.render('addTrampo')
    },

 createTrampo: (req, res) => {
  let userLogged = req.session.userLogged;
  let { estilo, nome, preco, categorias, serviceDescricao } = req.body;
  if (!estilo || !nome || !preco || !categorias || !serviceDescricao) {
    return res.render('error', { error: 'Todos os campos são obrigatórios' });
  }
  
  let imagem;  
  if (req.files[0] != undefined){
       imagem = req.files[0].filename;
  }else{
       imagem = 'default-image.png'
  }
  serviceRequest.createService({
    presencialOuRemoto: estilo,
    nome: nome,
    valor: preco,
    classe: categorias,
    descricao: serviceDescricao,
    imagem: imagem,
    id_usuarios: userLogged.id
  })
    .then(serviceCreated => {
      res.redirect('/profile');
    })
    .catch(error => {
      res.render('error', { error, message:"Erro ao criar serviço" });
    });
},
editServiceForm: (req, res) => {
        let id = req.params.id;
        let service;
        serviceRequest.getService(id)
        .then(serviceReturn =>{
        service = serviceReturn.data; 
        res.render('editTrampo', {
            service
        })
        })    
    },
    updateTrampo: (req, res) => {
        let id = req.params.id;
        let serviceToEdit;
     serviceRequest.getService(id)
    .then(serviceReturn => {
        serviceToEdit = serviceReturn.data;

        let imagem;  
        if (req.files[0] != undefined){
             imagem = req.files[0].filename;
        }else{
             imagem = 'default-image.png'
        }

      let { estilo, nome, preco, categorias, serviceDescricao } = req.body;
  if (!estilo || !nome || !preco || !categorias || !serviceDescricao) {
    return res.render('error', { error: 'Todos os campos são obrigatórios' });
  }
            return serviceToEdit;
    })
    .then(serviceToEdit => {
        serviceRequest.editService(serviceToEdit, id)
        .then(edited => {
            res.redirect('/profile')
        })
    })
    .catch(error => {
        res.render('error',{error});
    })
 
    },
    formEdit: (req, res) => {
        res.render('editProfile')
    },
    edit: (req, res) => {
        let userLogged = req.session.userLogged;
        let userToEdit = [];
        usersRequest.getUser(userLogged.id)
        .then(userReturn => {
            userToEdit = userReturn.data;
        })
        .then(userToEdit =>{
            usersRequest.editUser(userToEdit, userLogged.id)
            .then(edited =>{
                res.redirect('/profile')
            })
        })
        .catch(error => {
			res.render('error',{error});
		})
    },
    delete: (req, res) => {
        let id = req.params.id;
        serviceRequest.deleteService(id)
        .then(serviceDeleted => {
         res.redirect('/profile')
        })
        .catch(error => {
            res.render('error',{error});
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

};

module.exports = profileController;