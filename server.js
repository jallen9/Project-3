const express = require("express");
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const webRoutes = require('./routes/web-routes');
const apiRoutes = require('./routes/api-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//Uncomment to run csv data import into mongodb
//const dataMigration = require("./datamigration");

app.set('view engine', 'ejs');

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

//connect to mongo
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
  console.log('connected to mongodb');
});

app.use(passport.initialize());
//app.use(passport.session());

//Web Routes
app.use('/auth', authRoutes);
app.use('/web', webRoutes);
app.use('/api', apiRoutes);

//Include assets
app.use('/assets', express.static('assets'))
app.use('/web/assets', express.static('assets'))
app.use(express.static("views"));
app.use(express.static(__dirname + '/assets'));

app.get("/", (req, res) => {
  res.redirect("/web/home");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
