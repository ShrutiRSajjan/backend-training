const mongoose = require('mongoose');

const createUserSchema = new mongoose.Schema( {
      name: String,
      balance : {
        type: Number,
        default : 100
      },
      address : String,
      age : Number,
      gender : {
        type : String,
        enum: ["male", "female", "other"]
      },


    isFreeAppUser : {
        type : Boolean,
        default : true
    },
}, { timestamps: true });

module.exports = mongoose.model('createUser', createUserSchema) //users



// String, Number
// Boolean, Object/json, array