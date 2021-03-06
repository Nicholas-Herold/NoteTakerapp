
const path = require ('path');
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
 
 
require('./routing/html-routes')(app);
require('./routing/api-routes')(app);
app.listen(PORT,function(){
    console.log("Listening on " + PORT)
})
