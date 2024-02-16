const mongoose = require("mongoose");

const efectosAdversosSchema = mongoose.Schema({
    efectoAdverso:{
        type: String,
        required:true
    },
    observaciones:{
        type: String,
        required:false
    },
    estado:{
        type:Boolean,
        required:false
    },
    reportado:{
        type:Boolean,
        required:false
    }
});

module.exports = mongoose.model('efectosAdversos', efectosAdversosSchema);