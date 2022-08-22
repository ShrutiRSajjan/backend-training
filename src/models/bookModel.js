const mongoose = require('mongoose');
const publisherModel = require('./publisherModel');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Authorxyz"
    }, 
    price: Number,
    ratings: Number,
    publisher:{
       type:ObjectId,
       ref:"Publisherxyz"
    }



}, { timestamps: true });


module.exports = mongoose.model('Bookxyz', bookSchema)
