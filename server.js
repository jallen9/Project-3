require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const paymentRouter = require('./routes/paymentRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static(path.join(__dirname, 'assets')));
app.use(paymentRouter)



app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('working on port: ' + PORT);
})
