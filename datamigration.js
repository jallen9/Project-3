const csv = require('csv-parser');
const fs = require('fs');
const Listing =require('./models/listingmodel'); 
const Stores =require('./models/storesmodel');
const path = './data/illinois_results.csv';
const wrath = './data/illinois_total_listings.csv';

fs.createReadStream(wrath)
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
    console.log('CSV file successfully processed');
  });

  ////////
  // fs.createReadStream(path)
  // .pipe(csv())
  // .on('data', (row) => {
  //   console.log(row);
  //   Listing.create(row).then(results => {
  //       console.log(results);
  //   }).catch(err => {
  //       console.log(err);
  //   })
  // })
  // .on('end', () => {
  //   console.log('wrath is done');
  // });