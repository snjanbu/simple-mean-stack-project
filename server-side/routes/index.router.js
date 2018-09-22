var express=require('express');
var router=express.Router();

var userCtrl=require('../controllers/user.controller');
router.post('/register',userCtrl.register);

module.exports=router;