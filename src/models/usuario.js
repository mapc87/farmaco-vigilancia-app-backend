const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    usuario:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    rol:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('usuario', usuarioSchema);