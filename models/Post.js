const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    section: {  type: String,
        enum: ['DRINKS' ,'ELECTRONICS','HIGIENE', 'SWEETS','FOOD','BOOK','CLEANING']
    }, 
    title: String,
    date: String
});




module.exports = mongoose.model('Posts',PostSchema)