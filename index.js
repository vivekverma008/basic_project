const express = require('express');
const app = express();
const port = 8000;

app.use('/' , require('./routes'));
app.set('view engine' , 'ejs');
app.set('views','./views');

app.listen(port , (err=>{
    if(err){
        console.log('error listening ' , err);
        return ;
    }
    console.log(`server is listening at ${port}`);
}))