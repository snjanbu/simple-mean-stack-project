require('../config/config')
var mongoose=require('mongoose');

mongoose.connect(process.env.mongo_db_uri,{ useNewUrlParser: true },function(error){
    if(error){
        throw error;
    }
    console.log('Connection Initialized successfully');
});
