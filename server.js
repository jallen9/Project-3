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
mongoose.connect(keys.mongodb.dbURI, () =>{
  console.log('connected to mongodb');
});

app.use(passport.initialize());
//app.use(passport.session());

//Include assets
app.use('/assets', express.static('assets'))
//
//Web Routes
app.use('/auth', authRoutes);
app.use('/web', webRoutes);
app.use(express.static("views"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});