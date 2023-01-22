const express = require('express');
const app = express();
const port = 8000;
var cookieParser = require('cookie-parser');
var layout = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(layout);
app.use('/' , require('./routes'));
app.set('view engine' , 'ejs');
app.set('views','./views');

// setting up my layout as layouts
app.set('layout','./layouts');


app.listen(port , (err=>{
    if(err){
        console.log('error listening ' , err);
        return ;
    }
    console.log(`server is listening at ${port}`);
}))