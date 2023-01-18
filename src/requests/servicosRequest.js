const axios = require('axios');
const def = require('./default');

const url = 'servico'

const servicoRequest = {
    getServicos: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    })
}



module.exports = servicoRequest;