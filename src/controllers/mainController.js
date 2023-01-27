const path = require('path');
const fs = require('fs');


const serviceRequest = require('../requests/servicosRequest')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const mainController = {
  index: (req, res) =>{
    serviceRequest.getServices().
    then(servicesReturned => {
     services = servicesReturned.data
        res.render('index', {
          services,
          toThousand
        })
          }),
          serviceRequest.getClassServices()
          .then(classServicesReturned => {
            classServices = classServicesReturned.data
          })
    .catch(error => {
      res.render('error', {error})
    })
    },
  search: (req, res) => {
    let search = req.query.keywords;
    let serviceToSearch = services.filter(service => service.nome.toLowerCase().includes(search))  ;
    let classServiceToSearch = services.filter(service => service.classe_servico.toLowerCase().includes(search));
    res.render('servicos', {
      services: serviceToSearch,
      services: classServiceToSearch,
        search,
        toThousand
    })
}
};

module.exports = mainController;