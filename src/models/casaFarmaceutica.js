const mongoose = require("mongoose");

const casaFarmaceuticaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    observaciones:{
        type: String,
        required:false
    },
    estado:{
        type: Boolean,
        required:false
    }
});

module.exports = mongoose.model('casasFarmaceuticas', casaFarmaceuticaSchema);