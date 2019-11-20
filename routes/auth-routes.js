const router = require('express').Router();
const passport = require('passport');

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile','email']
}));

//callback route google to redirect to
//hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //res.redirect('views/loggedin');
    res.set('Content-Type', 'text/html')
    res.send(new Buffer("<!DOCTYPE html>" + req.user.username + + req.user.thumbnail +
        "	<script src='https://code.jquery.com/jquery-3.4.1.min.js'    integrity='sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=' crossorigin='anonymous'></script>" +
        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>" +
        "<script>    $(document).ready(function () {        " +
        "localStorage.setItem('username','" + req.user.username + "'); " +
        "localStorage.setItem('googleId','" + req.user.googleId + "'); " +
        "localStorage.setItem('thumbnail','" + req.user.thumbnail + "'); " +
        "localStorage.setItem('username','" + req.user.username + "'); " +
        "location.href = '/web/booking';" +
        "})</script > " +
        "</html>"));
    // Stores.create(row).then(results => {
    //     console.log(results);
    //   }).catch(err => {
    //     console.log(err);
    //   })

    //res.send(new Buffer("<!DOCTYPE html>    <html><body><header><h1>" + req.user.username + "</h1><img src='" + req.user.thumbnail + "'</img></header></body></html>   "));
});

module.exports = router;




