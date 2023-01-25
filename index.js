const express = require('express');
const app = express();
const port = 8000;
var cookieParser = require('cookie-parser');
var layout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(layout);
app.set('view engine' , 'ejs');
app.set('views','./views');
app.set('layout','./layouts');

app.use(session({
    name : 'user_key',
    secret : 'anything',
    saveUninitialized : false,
    resave : false,
    store : MongoStore.create({
        mongoUrl : 'mongodb://127.0.0.1:27017/database',
        autoRemove : 'interval',
        autoRemoveInterval : 60*24
    }),
    cookie : {
        maxAge : (1000*60*100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUserAuthentication);




app.use('/' , require('./routes'));
// setting up my layout as layouts



app.listen(port , (err=>{
    if(err){
        console.log('error listening ' , err);
        return ;
    }
    console.log(`server is listening at ${port}`);
}))