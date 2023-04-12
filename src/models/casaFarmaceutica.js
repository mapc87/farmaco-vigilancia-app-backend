const mongoose = require("mongoose");

const casaFarmaceuticaSchema = mongoose.Schema({
    efectoAdverso:{
        type: String,
        required:true
    },
    observaciones:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('casaFarmaceutica', casaFarmaceuticaSchema);