exports.get404Page = (req,res)=>{
    res.status(404);
    //res.sendFile(path.join(__dirname,'views','404.html'));
    res.render('404',{title:'Page Not Found'});
}