const { find } = require('../models/user');
const User = require('../models/user');

module.exports.profile = function(req,res){
    res.end('Hey there in profile page ');
}
module.exports.posts = (req,res)=>{
    res.send('<h2>Users Post</h2>');
}
module.exports.signUp = (req,res)=>{
    res.render('sign-up');
}
module.exports.signIn = (req,res)=>{
  res.render('signin');
    
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
    console.log('creatin Session');
    User.findOne({email : req.body.email},function(err, user){
        if(err){
            return console.log('error in creatin session');
        }
        if(!user){
            console.log('user not found')
            return res.redirect('back');
        }
        if(user.password != req.body.password){
            console.log('wrong password');
            return res.redirect('back');
        }
        //create the session
    
       
    })
}
