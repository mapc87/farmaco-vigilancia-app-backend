const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    noRegistro:{
        type: String,
        required:true
    },
    dpi:{
        type: String,
        required:true
    },
    sexo:{
        type: String,
        required:true
    },
    etnia:{
        type: String,
        required:true
    },
    deptoNacimiento:{
        type: String,
        required:true
    },
    deptoResidencia:{
        type: String,
        required:true
    },
    direccion:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true
    },
    nombreEncargado:{
        type: String,
        required:true
    },
    telefonoEncargado:{
        type: String,
        required:true
    },
    estadioEnfermedad:{
        type: String,
        required:true
    },
    fechaIngresoUnidad:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true
    },
    quimioterapia:{
        type: String,
        required:true
    },
    cicloNo:{
        type: String,
        required:true
    },
    fecha:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('paciente', pacienteSchema);