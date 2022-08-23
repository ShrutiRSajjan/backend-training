const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    // bookName: String, 
    // authorName: String, 
    // tags: [String],
    
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     europePrice: String,
    // },
    // sales: {type: Number, default: 10}
    bookName: String,
Price: {
	indianPrice: String,
	europeanPrice: String
	},
Year: Number,
Tags : String ,
authorName: String,
totalPages: Number,
stockAvilable: Boolean

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
