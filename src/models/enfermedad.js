const mongoose = require("mongoose");

const enfermedadSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:false
    },
    observaciones:{
        type: String,
        required:false
    }
});

module.exports = mongoose.model('enfermedades', enfermedadSchema);