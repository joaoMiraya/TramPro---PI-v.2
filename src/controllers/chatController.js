const path = require('path');
const fs = require('fs');

const chatController =  {
    index: (req, res) => {
        res.render('chatMessages')
    }
 }



 module.exports = chatController;