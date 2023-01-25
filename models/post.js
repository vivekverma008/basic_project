const mongoose = require('mongoose');
const User = require('./user');
const {Schema} = mongoose;

const postschema = new Schema({
        content : {
            type : 'string' , 
            required : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    },
    {
        timestamps : true
    }    
);

const Posts = mongoose.model('Posts' , postschema);

module.exports = Posts;
