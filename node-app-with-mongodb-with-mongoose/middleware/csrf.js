module.exports = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken();
    res.locals.isAuthentication =  req.session.isAuthenticated;
    next();
}