const axios = require('axios');
const def = require('./default')
const path = require('path');


const url = 'usuarios'

const userRequest = {
    getUsers: () => axios({
        ...def,
        method: 'get',
        url: `${url}/` 
    }),
    getUser: (id) => axios({
        ...def,
        method: 'get',
        url: `${url}/${id}` 
    }),
    getUserByEmail: (email) => axios({
        ...def,
        method: 'get',
        url: `${url}?email=${email}` 
    }),
    createUser: (user) => axios({
        ...def,
        method: 'post',
        data:{
            ...user
        },
        url: `${url}/` 
    }),
    editUser: (user, id) => axios({
        ...def,
        method: 'patch',
        data: {
            ...user
        },
        url: `${url}/${id}`
    }),
     deleteUser: (id) => axios({
        ...def,
        method: 'delete',
        url: `${url}/${id}`  
    })

}



module.exports = userRequest;