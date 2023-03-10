const User = require('../models/user');

module.exports.profile = function(req,res){
    res.render('profile');
}

module.exports.signUp = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    else{
        console.log(req.isAuthenticated());
        return res.render('sign-up');
    }
   
}
module.exports.signIn = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    else{
        console.log(req.isAuthenticated());
        return res.render('sign-in');
    }
     
}
module.exports.destroySession = (req,res)=>{
    req.logOut(function(err){
        if(err){
            return console.log('error logging out');
        }
    })
    res.clearCookie('user_key');
    return res.redirect('back');   
    
}

module.exports.createUser = function(req,res){
    if(req.body.password != req.body.confirm_password){
       console.error('password and confirm password doesnot match');
        return res.redirect('back');
    }
    const q_userexists = User.where({email : req.body.email});
    q_userexists.findOne(function(err,user){
        if(err){
            res.redirect('back');
            return console.log('error creating user ');
        }
        if(user){
           console.error('email already taken')
           res.redirect('back'); 
        }else{
            User.create(req.body,(err)=>{
                if(err){
                    return console.log('error in creating user ')
                }
                console.log('user created',req.body);
            });
            res.redirect('signin');
            
        }
        
    })
}
module.exports.createSession = function(req,res){
    res.redirect('profile');
}
