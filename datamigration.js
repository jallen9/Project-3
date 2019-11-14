const csv = require('csv-parser');
const fs = require('fs');
const Listing =require('./models/listingmodel'); 
const path = './data/illinois_results.csv';

fs.createReadStream(path)
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
    console.log('CSV file successfully processed');
  });