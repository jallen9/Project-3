const csv = require('csv-parser');
const fs = require('fs');
const Listing = require('./models/listingmodel');
const Stores = require('./models/storesmodel');
const providersCsv = './data/providers.csv';
const productsCsv = './data/products.csv';

fs.createReadStream(providersCsv)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    Stores.create(row).then(results => {
      console.log(results);
    }).catch(err => {
      console.log(err);
    })
  })
  .on('end', () => {
    console.log('Providers csv import is done');
  });

//////
fs.createReadStream(productsCsv)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
    Listing.create(row).then(results => {
      console.log(results);
    }).catch(err => {
      console.log(err);
    })
  })
  .on('end', () => {
    console.log('listing csv import is done');
  });