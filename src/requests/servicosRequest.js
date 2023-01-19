const axios = require('axios');
const def = require('./default');

const url = 'servico'

const servicoRequest = {
    getServicos: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getServicos: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
    getServicos: (servico) => axios({
        ...def,
        method: 'post',
        data: {
            ...servico
        },
        url: `${url}/` 
    }),
    getServicos: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}` 
    })
}



module.exports = servicoRequest;