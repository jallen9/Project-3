const router = require('express').Router();

router.get('/providers', (req, res) => {
    res.sendFile('providers.html', { root: './views/' });
});

router.get('/providers/:providerId', (req, res) => {
    res.sendFile('provider.html', { root: './views/' });
});

router.get('/home', (req, res) => {
    res.sendFile('index.html', { root: './views/' });
});

router.get('/booking', (req, res) => {
    res.sendFile('booking.html', { root: './views/' });
});

router.get('/finished', (req, res) => {
    res.sendFile('finished.html', { root: './views/' });
});

router.get('/loggedin', (req, res) => {
    res.sendFile('loggedin.html', { root: './views/' });
});

module.exports = router;




