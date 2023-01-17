const path = require('path');
const fs = require('fs');


const servicosFilePath = path.join(__dirname, '../data/servicosDataBase.json');
const servicos = JSON.parse(fs.readFileSync(servicosFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



const mainController = {
  index: (req, res) =>{
res.render('index')
    },
  search: (req, res) => {
    let search = req.query.keywords;
    let servicosToSearch = servicos.filter(servico => servico.name.toLowerCase().includes(search));
    
    res.render('results', {
        servicos: servicosToSearch,
        search,
        toThousand
    })
}
}

module.exports = mainController;