const axios = require('axios');
const def = require('./default')
const path = require('path');


const url = 'contratante'

const hirerRequest = {
    getHirers: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getHirer: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
    createHirer: (hirer) => axios({
        ...def,
        method: 'post',
        data:{
            ...hirer
        },
        url: `${url}/` 
    }),
     deleteHirer: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`  
    })

}



module.exports = hirerRequest;