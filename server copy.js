const express = require("express");
// const mongoose = require ("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mainRouter = './routes';
// const apiRoutes = require("./routes/api-routes");
​
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
​
// Define API routes here
// app.use("/api", apiRoutes);
​
// Connect to MongoDB
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://LemonSong17:Fumanchu7@ds141188.mlab.com:41188/heroku_szxl6c7r";
​
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
​
app.use(express.static(path.join(__dirname, 'assets')))
​app.use(mainRouter);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
​
// mongoose.connect(process.env.MONGODB_URI || "mongodb://LemonSong17:Fumanchu7@ds141188.mlab.com:41188/heroku_szxl6c7r");
​
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});