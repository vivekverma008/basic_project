const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send('hello');
})


app.listen(port , (err=>{
    if(err){
        console.log('error listening ' , err);
        return ;
    }
    console.log(`server is listening at ${port}`);
}))