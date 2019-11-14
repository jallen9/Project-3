const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    id: String,
    body: String,
    name: String,
    strain_id: String,
    lab_tested: String,
    license_type: String,
    grams_per_eighth: String,
    listing_id: String,
    listing_type: String,
    vendor_id: String,
    vendor_name: String,
    vendor_slug: String,
    'prices.gram':String,
  'prices.two_grams':String,
  'prices.eighth':String,
  'prices.quarter':String,
  'prices.half_ounce':String,
  'prices.ounce':String,
  'prices.half_gram':String,
  'prices.unit': String,
    image_url: String,
    thumb_image_url: String,
    category_id: String,
    category_name: String,
    tags: String,
    slug: String,
    published: String,
    test_result_expire: String,
    test_result_expires_in: String,
    test_result_expired: String,
    latest_test_result_image_url: String,
    url: String,
    listing_name: String,
    listing_url: String,
    approved_endorsement: String,
    sort_priority: String,
    locations_found_at: String,
    listing_wmid: String
});
const Listing = mongoose.model('listing', listingSchema);

module.exports = Listing;