module.exports.profile = function(req,res){
    res.end('Hey there in profile page ');
}
module.exports.posts = (req,res)=>{
    res.send('<h2>Users Post</h2>');
}
module.exports.signUp = (req,res)=>{
    res.render('sign-up');
}
module.exports.signIn = (req,res)=>{
    res.render('sign-in');
}
