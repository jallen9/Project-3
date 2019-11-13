const express = require('express');
const paymentRouter = express.Router();
const {API_KEY} = process.env;
const stripe = require('stripe')(API_KEY);

//path /stripe
paymentRouter.post('/stripe', (req, res) => {
    const {name, description, images, amount, quantity} = req.body
  const session =  stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name,
      description,
      images,
      amount,
      currency: 'usd',
      quantity,
    }],
    success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://example.com/cancel',
  }).then(response => {

      res.json(response);
  }).catch(err => {
      console.log(err);
  });
})

module.exports = paymentRouter;