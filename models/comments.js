const mongoose = require('mongoose');

const commmentSchema = new Schema({
    content :{
        type : 'string',
        required,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Posts'
    }
} , {
    timeStamps : true
} );

const Comment = mongoose.model('Comment' , commmentSchema);

module.exports = Comment;