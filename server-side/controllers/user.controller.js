var user=require('../models/user.model');

module.exports.register=function(request,response,next){

    user(request.body).save(function(error,data){
        if(error){
            throw error;
        }
        console.log(data);
        response.send(data);
    });
}
