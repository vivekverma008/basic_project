const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');



passport.use(new LocalStrategy(
    {
        usernameField : 'email'
    },
    function(email , password , done){
    
        User.findOne({email : email},function(err , user){
            if(err){
                console.log('error in finding user');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('invalid credentials');
                return done(null,false);
            }
            return done(null,user);
            
        })
    }
))

passport.serializeUser(function(user,done){
    done(null,user.id);
});
passport.deserializeUser(function(id,done){
    // console.log(id);
    User.findById(id,(err,user)=>{
        if(err){
            console.log('error in finding user');
            return done(err);
        }
       return done(null,user);

    })
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
       return  next();
    }
    else res.redirect('/users/signin');
}

passport.setUserAuthentication = function(req,res,next){
    
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;