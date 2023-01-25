const Posts = require('../models/post');



module.exports.createPost = function(req,res){
   Posts.create({
        content : req.body.content,
        user : req.user.id
   })
   console.log(req.user._id);
   return res.redirect('back');
}
module.exports.posts = (req,res)=>{
    if(req.user){
        Posts.find({user: req.user.id},function(err,allPosts){
            if(err){
                return console.log('error finding posts with id');
            }
            
            res.render('post',{allPosts});
        })

    }
    
    
    
}




 