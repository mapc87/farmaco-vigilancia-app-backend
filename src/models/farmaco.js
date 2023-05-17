const mongoose = require("mongoose");

const farmacoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    casa:{
        type: String,
        required:false
    },
    efectosAdversos:{
        type: Array,
        required:false
    },
    efectosAdversosNoReportados:{
        type: Array,
        required: false
    },
    observaciones:{
        type: String,
        required:false
    },
    estado: {
        type: Boolean,
        required: false
    },
    evaluacionKarchaLassagna: {
        type: Object,
        required:false
    }
});

module.exports = mongoose.model('farmacos', farmacoSchema);