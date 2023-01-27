const axios = require('axios');
const def = require('./default')
const path = require('path');


const url = 'trabalhador'

const workerRequest = {
    getWorkers: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getWorker: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
    createWorker: (worker) => axios({
        ...def,
        method: 'post',
        data:{
            ...worker
        },
        url: `${url}/` 
    }),
     deleteWorker: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`  
    })

}



module.exports = workerRequest;