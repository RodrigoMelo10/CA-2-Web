// the reference of this code is from https://www.youtube.com/watch?v=vjf774RKrLc
const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    section: {  type: String,
        enum: ['DRINKS' ,'ELECTRONICS','HIGIENE', 'SWEETS','FOOD','BOOK','CLEANING']
    }, 
    title: String,
    date: String
});




module.exports = mongoose.model('Posts',PostSchema)
