const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    fullName:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    house:{
        type:String,
        required:true
    },

    street:{
        type:String,
        required:true
    },

    area:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    state:{
        type:String,
        required:true
    },

    zip:{
        type:String,
        required:true
    },

    isDefault:{
        type:Boolean,
        default:true
    }

});

module.exports = mongoose.model("Address",addressSchema);