

const { response } = require('express');
const fs = require('fs');
module.exports = function(app){
    let datatable = require('../db/db.json');
    app.get('/api/notes', (req,res) =>{
        console.log('1')

        let dbnotes = JSON.parse( fs.readFileSync('./db/db.json','utf8'));
        res.json(dbnotes)

    });

    app.get('/api/data', function(req,res){
        res.json(datatable);
    });

    app.post('/api/notes', (req,res)=>{
        
        
        let info = req.body
        let dbnotes = JSON.parse( fs.readFileSync('./db/db.json','utf8'));
       
        
        dbnotes.push(info);
        
        fs.writeFileSync('./db/db.json', JSON.stringify(dbnotes) );
       
        
    });

};