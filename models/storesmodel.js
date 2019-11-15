const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storesSchema = new Schema({
    id: String,
     wmid: String,
     url: String,
     name: String,
     avatar_url: String,
     intro_body: String,
     reviews_count: String,
     rating: String,
     feature_order: String,
     package_level: String,
     package_level_raw: String,
     license_type: String,
     address: String,
     city: String,
     region: String,
     state: String,
     zip_code: String,
     phone_number: String,
     latitude: String,
     longitude: String,
     todays_hours: String,
     is_delivery: String,
     has_testing: String,
     is_recreational: String,
     hours_of_operation: String,
     published: String,
     admin_url: String,
     description: String,
     listing_url: String,
     region_slug_path: String,
     salesforce_url: String,
     _type: String,
     distance: String,
     ranking: String,
     feature_level_raw: String,
     slug: String,
     email: String,
     todays_deal: String,
     customer_display_word: String,
     first_time_announcement: String,
     announcement: String,
     time_zone_identifier: String,
     verified_seller: String,
     num_menu_items: String

});
const Stores = mongoose.model('stores', storesSchema);

module.exports = Stores;