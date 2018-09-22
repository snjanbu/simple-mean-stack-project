var mongoose=require('mongoose');
var bcrypt=require('bcryptjs');

var schema=mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    saltSecret:String
});

var user=mongoose.model('user',schema);

schema.pre('save',function(next){
    bcrypt.genSalt(10,function(error,salt){
        bcrypt.hash(this.password,salt, function(error,hash){
            this.password=hash;
            this.saltSecret=salt;
            next();
        });
    });
}); 

module.exports=user;