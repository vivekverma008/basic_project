const express = require('express');
const app = express();
const port = 8000;
var layout = require('express-layout');

app.use(layout());
app.use('/' , require('./routes'));
app.set('view engine' , 'ejs');
app.set('views','./views');

// setting up my layout as layouts
app.set('layouts','./views/layouts');
app.set('layout' , 'default');

app.listen(port , (err=>{
    if(err){
        console.log('error listening ' , err);
        return ;
    }
    console.log(`server is listening at ${port}`);
}))