const path = require('path');
const fs = require('fs');


const testeController =  {
    index: (req, res) => {
        res.render('teste')
    }
}

module.exports = testeController;