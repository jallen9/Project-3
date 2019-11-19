const express = require("express");
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const webRoutes = require('./routes/web-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const providersDb = require("./models/storesmodel");
const providerProductsDb = require("./models/listingmodel");

//Uncomment to run csv data import into mongodb
//const dataMigration = require("./datamigration");

app.set('view engine', 'ejs');
// Define middleware here
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to MongoDB
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://LemonSong17:Fumanchu7@ds141188.mlab.com:41188/heroku_szxl6c7r";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//connect to MSQLdb
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
  console.log('connected to mongodb');
});

console.log("This is my backup")

app.use(passport.initialize());
//app.use(passport.session());

//Web Routes
app.use('/auth', authRoutes);
app.use('/web', webRoutes);
app.use(express.static("views"));

// Route for getting all Providers from the db
app.get("/providers", function (req, res) {
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

app.get("/providers/:providerId/products", function (req, res) {
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

//Include assets
app.use('/assets', express.static('assets'))
app.use('/web/assets', express.static('assets'))
app.use(express.static(__dirname + '/assets'));

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.redirect("/web/home");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
