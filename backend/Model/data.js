const mongoose = require('mongoose');
const {Schema} = mongoose

const DbSchema = new Schema({
    url: { type: String, required: true },
    caption: { type: String, required: true },
    displayUrl: { type: String, required: true },
    ownerFullName: { type: String, required: true },
    hashtag: { type: [String], required: true }, // Array of strings
    BioGraphy: { type: String, required: true },
    'Data Collection': {
      IdentifiedHotel: { type: Boolean, required: true },
      HotelName: { type: String, default: "" },
      Relation: { type: String, required: true },
      Inhouse_Wild: { type: Boolean, required: true },
      description: { type: String, required: true }
    },
    'Tajness Score': { type: Number, required: true },  // Moved to main schema
    Permission: { type: Boolean, required: true },   // Moved to main schema
    Reason: { type: String, required: true }
},{collection:'image'})

module.exports = mongoose.model('ImgSchema',DbSchema)