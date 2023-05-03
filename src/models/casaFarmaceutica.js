const mongoose = require("mongoose");

const casaFarmaceuticaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    observaciones:{
        type: String,
        required:true
    },
    estado:{
        type: Boolean,
        required:true
    }
});

module.exports = mongoose.model('casasFarmaceuticas', casaFarmaceuticaSchema);