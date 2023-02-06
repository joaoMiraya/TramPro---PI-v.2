const axios = require('axios');
const def = require('./default');
const path = require('path');


const url = 'contratacoes'

const hiringRequest = {
    getHirings: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getHiring: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
 
    createHiring: (hiring) => axios({
        ...def,
        method: 'post',
        data:{
            ...hiring
        },
        url: `${url}/` 
    }),
     deleteHiring: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`  
    })

}



module.exports = hiringRequest;