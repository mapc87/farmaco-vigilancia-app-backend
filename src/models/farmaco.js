const mongoose = require("mongoose");

const farmacoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    // casa:{
    //     type: String,
    //     required:true
    // },
    // efectosAdversos:{
    //     type: String,
    //     required:true
    // },
    // efectosAdversosNoReportados:{
    //     type: Array,
    //     required: false
    // },
    observaciones:{
        type: String,
        required:false
    }
});

module.exports = mongoose.model('farmacos', farmacoSchema);