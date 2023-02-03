const axios = require('axios');
const def = require('./default');
const path = require('path');


const url = 'servicos'

const serviceRequest = {
    getServices: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getClassServices: (classe) => axios({
        ...def,
        method: 'get',
        url: `${url}?classe=${classe}` 
    }),
    getService: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
    getUserService: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/user/${id}` 
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