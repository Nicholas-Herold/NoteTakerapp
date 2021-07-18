const path = require('path');
let datatable = require('../db/db.json')

module.exports = function(app){

    app.get('/api/data', function(req,res){
        res.json(datatable);
    })

};