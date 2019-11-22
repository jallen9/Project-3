const router = require('express').Router();
const providersDb = require("../models/storesmodel");
const providerProductsDb = require("../models/listingmodel");
const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys.js');

//Endpoint for contact us form data, returns empty json
router.post('/contact/sendmessage', (req, res) => {
    var emailAddress = req.params.emailAddress;
    var message = req.params.message;

    sgMail.setApiKey(keys.sendgrid.apikey);
    sgMail.send({
        to: 'allan.pearson@cannaberproviders.com',
        from: 'noreply@cannaberproviders.com',
        subject: 'Contact us form submission',
        text: 'From: ' + emailAddress + '   ' + message,
        html: 'From: ' + emailAddress + '<br><br>' + '<p>' + message + "</p>",
    });

    //Empty response
    res.send('{}');
});

//Returns list of providers
router.get("/providers", function (req, res) {
    // Grab every document in the Providers collection
    providersDb.find({})
        .then(function (Providers) {
            // If we were able to successfully find Providers, send them back to the client
            res.json(Providers.sort());
            // console.log(Providers);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

//Returns list of provider products
router.get("/providers/:providerId/products", function (req, res) {
    // Grab every document in the listing collection
    providerProductsDb.find({})
        .then(function (Products) {
            //console.log(Products);
            //Return only products belonging to the requested provider
            Products = Products.filter(function (p) {
                return p.listing_id == req.params.providerId;
            });

            // If we were able to successfully find listings, send them back to the client
            res.json(Products.sort((a, b) => (a.name > b.name) ? 1 : -1));
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});


module.exports = router;




