const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator')

const serviceRequest = require('../requests/serviceRequest')
const usersRequest = require('../requests/usersRequest');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");




const profileController = {
    profile: async (req, res) => {
        let userLogged = req.session.userLogged;

        let services = await serviceRequest.getUserService(userLogged.id)
        services = services.data;

        if (services.length > 0) {
            let users = await usersRequest.getUser(userLogged.id);
            users = users.data;
            res.render('profile', {
                userLogged,
                services,
                users
            })
        } else {
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
            .then(userReturn => {
                userToEdit = userReturn.data;

                let foto;
                if (req.files[0] != undefined) {
                    foto = req.files[0].filename
                } else {
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
                res.render('error', { error });
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
        if (req.files[0] != undefined) {
            imagem = req.files[0].filename;
        } else {
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
                res.render('error', { error, message: "Erro ao criar serviço" });
            });
    },
    editServiceForm: (req, res) => {
        let id = req.params.id;
        let service;
        serviceRequest.getService(id)
            .then(serviceReturn => {
                service = serviceReturn.data;
                res.render('editTrampo', {
                    service
                })
            })
    },
    updateTrampo: async (req, res) => {
        let id = req.params.id;
        let serviceToEdit = await serviceRequest.getService(id)
        serviceToEdit = serviceToEdit.data;

        let imagem;
        if (req.files[0] != undefined) {
            imagem = req.files[0].filename;
        } else {
            imagem = 'default-image.png'
        }
        serviceToEdit = {
            imagem: imagem,
            nome: req.body.nome,
            classe: req.body.categorias,
            estilo: req.body.estilo,
            valor: req.body.preco,
            descricao: req.body.serviceDescricao,
        }
        let edited = await serviceRequest.editService(serviceToEdit, id)
        edited = edited.data
        res.redirect('/profile')
    },
    formEdit: (req, res) => {
        let userLogged = req.session.userLogged;
        let id = userLogged.id;
        let user;
        usersRequest.getUser(id)
            .then(userReturn => {
                user = userReturn.data;
                res.render('editProfile', {
                    user
                })
            })
    },
    edit: async (req, res) => {
        let userLogged = req.session.userLogged;
        let id = userLogged.id;
        let userToEdit = await usersRequest.getUser(id)
        userToEdit = userToEdit.data;

        userToEdit = {
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
        }
        let edited = await usersRequest.editUser(userToEdit, id)
        edited = edited.data;
        res.redirect('/profile')
    },
    delete: (req, res) => {
        let id = req.params.id;
        serviceRequest.deleteService(id)
            .then(serviceDeleted => {
                res.redirect('/profile')
            })
            .catch(error => {
                res.render('error', { error });
            })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    }

};

module.exports = profileController;