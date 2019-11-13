const router = require('express').Router();
const passport = require('passport');

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback route google to redirect to
//hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.send(req.user);
    console.log('response from google');
    
    res.set('Content-Type','text/html');
    res.send(new Buffer("<!DOCTYPE html>    <html><body><header><h1>" + req.user.username + "</h1><img src='" + req.user.thumbnail + "'</img></header></body></html>   "));
    
    //TODO: render whichever page requires display of google account details
    //res.render('index', { user: req.user });
});
module.exports = router;




