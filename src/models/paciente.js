const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    noRegistro:{
        type: String,
        required:false
    },
    dpi:{
        type: String,
        required:false
    },
    sexo:{
        type: String,
        required:false
    },
    etnia:{
        type: String,
        required:false
    },
    deptoNacimiento:{
        type: String,
        required:false
    },
    deptoResidencia:{
        type: String,
        required:false
    },
    municipioNacimiento:{
        type: String,
        required:false
    },
    municipioResidencia:{
        type: String,
        required:false
    },
    direccion:{
        type: String,
        required:false
    },
    telefono:{
        type: String,
        required:false
    },
    nombreEncargado:{
        type: String,
        required:false
    },
    telefonoEncargado:{
        type: String,
        required:false
    },    
    fechaIngreso:{
        type: Date,
        required:false
    },
    datosClinicos:{        
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
    fechaNacimiento:{
        type: String,
        required:false
    },
});

module.exports = mongoose.model('pacientes', pacienteSchema);