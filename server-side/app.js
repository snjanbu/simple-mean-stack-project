require('./models/dbConnection');
require('./config/config');

var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var user=require('./models/user.model');
var router=require('./routes/index.router');
var app=express();

//Middle-ware
app.use(bodyParser.json());
app.use(cors());

app.use('/api',router);
//Opening the port 
app.listen(process.env.port,function(error){
    if(error){
        throw error;
    }
    console.log(`Server started succesfully on ${process.env.port}`);
});