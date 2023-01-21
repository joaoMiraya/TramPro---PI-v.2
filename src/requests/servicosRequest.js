const axios = require('axios');
const def = require('./default');

const url = 'servico'

const serviceRequest = {
    getServices: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getClassService: (classe_servico) => axios({
        ...def,
        method: 'get',
        url: `${url}?classe_servico=${classe_servico}` 
    }),
    getService: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
    createService: (service) => axios({
        ...def,
        method: 'post',
        data:{
            ...service
        },
        url: `${url}/` 
    }),
     deleteService: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`  
    })

}



module.exports = serviceRequest;