module.exports.profile = function(req,res){
    res.end('Hey there in profile page ');
}
module.exports.posts = (req,res)=>{
    res.send('<h2>Users Post</h2>');
}