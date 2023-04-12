const mongoose = require("mongoose");

const efectosAdversosSchema = mongoose.Schema({
    efectoAdverso:{
        type: String,
        required:true
    },
    observaciones:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('efectosAdversos', efectosAdversosSchema);