var path = require('path');

const homeController = {
    index: (req, res) =>{
        let home = ('.index.ejs');
        return res.render('index', home);
    }
};

module.exports = homeController;