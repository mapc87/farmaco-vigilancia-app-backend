const mongoose = require("mongoose");

const enfermedadSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    observaciones:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('enfermedades', enfermedadSchema);