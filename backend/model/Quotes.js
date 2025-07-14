const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author: {
        type:String,
        required: true,
    },
    quote: {
        type: String,
        required:true,
    },
    category:{
        type:String
    },
    image: {
        type:String
    }
});

const Quotes = mongoose.model('quote',quoteSchema)

module.exports = Quotes;