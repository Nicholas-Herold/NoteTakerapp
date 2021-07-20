


const fs = require('fs');
const uuid = require('uuid')
module.exports = function(app){
    let datatable = require('../db/db.json');

    app.get('/api/notes', (req,res) =>{
       

        let dbnotes = JSON.parse( fs.readFileSync('./db/db.json','utf8'));

        res.json(dbnotes)

    });

    // app.get('/api/data', function(req,res){
    //     res.json(datatable);
    // });

    app.post('/api/notes', (req,res)=>{
          
        let info = req.body
        info.id = uuid.v1()
        let dbnotes = JSON.parse( fs.readFileSync('./db/db.json','utf8'));
       
        dbnotes.push(info);
        
        fs.writeFileSync('./db/db.json', JSON.stringify(dbnotes) );

        res.json(dbnotes);
        
    });

    app.delete('/api/notes/:id', (req ,res)=>{
        let info = req.params.id;
        console.log(info)
        let dbnotes = JSON.parse( fs.readFileSync('./db/db.json','utf8')); 
        for (let i = 0; i < dbnotes.length; i++) {
          
            if (dbnotes[i].id == info){
                dbnotes.splice(i,1)
                
                fs.writeFileSync('./db/db.json', JSON.stringify(dbnotes));
                
                res.json(dbnotes)  

                return
            } 
        };
        

    });

};