const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    habit : {
        type : String,
        required : true,
    },
    date : {
        type : String ,
        required : true
    },
    status : {
        type : String,
    }
});

const CollectionReference = mongoose.model('Details',Schema);

module.exports = CollectionReference;