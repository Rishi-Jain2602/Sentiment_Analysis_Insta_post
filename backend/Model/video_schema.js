const mongoose = require('mongoose');
const {Schema} = mongoose

const VidDbSchema = new Schema({
    Result:{
        url: { type: String, required: true },
        ownerFullName: { type: String, required: true }
    },
    Data_Collection:{
        Length: { type: Number, required: true },
        'Frame Description': { type: String, required: true },
        'Oral Transcript': { type: String, required: true },
        'Caption': { type: String, required: true },
        'Biography of User': { type: String, required: true },
    },
    Summary:{
        Tags: { type: [String], required: true }, 
        IdentifiedHotel: { type: String, required: true },
        'Hotel Name': { type: String, required: true },
        'Relation to the brand': { type: String, required: true },
        'Inhouse/Wild': { type: String, required: true }
    },
    'TajNess Score':{type:Number, required:true},
    Permission: { type: Boolean, required: true },   
    Reason: { type: String, required: true },
    Categories: {type:[String],required:true},
    score_explanation: {type:String,required:true},
    VideoUrl:{type:String,required:true}
},{collection:'video'})

module.exports = mongoose.model('VidSchema',VidDbSchema)