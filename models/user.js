const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    email :{
        type : 'string' , 
        required : true,
        unique : true
    },
    password : {
        required : true,
        type : 'string'
    },
    name : {
        type : 'string' , 
        required : true
    }
},{
    timestamps : true
})

const User = mongoose.model('User' , userschema);

module.exports = User;