const path = require('path');
const fs = require('fs');


const serviceRequest = require('../requests/serviceRequest')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const mainController = {
  index: (req, res) =>{
    let services = [];
    serviceRequest.getServices().
    then(servicesReturned => {
   services = servicesReturned.data
        res.render('index', {
          services,
          toThousand
        })
          })
    .catch(error => {
      res.render('error', {error})
    })
    },
  search: async (req, res)  => {
    let services = [];
  await serviceRequest.getServices().
    then(servicesReturned => {
   services = servicesReturned.data
          })
    let search = req.query.keywords.toLowerCase().trim();
    let serviceToSearch = services.filter(services => services.nome.toLowerCase().includes(search))
    res.render('result', {
          services: serviceToSearch,
  search,
     toThousand
 })
}
};

module.exports = mainController;