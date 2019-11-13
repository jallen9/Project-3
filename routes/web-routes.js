const router = require('express').Router();

router.get('/booking', (req, res) => {
    res.set('Content-Type','text/html');
    res.sendFile('booking-page.html',{root:'./'});
});

router.get('/list', (req, res) => {
    res.set('Content-Type','text/html');
    res.sendFile('list.html',{root:'./'});
});

module.exports = router;




