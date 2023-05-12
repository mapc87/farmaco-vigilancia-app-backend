const mongoose = require('mongose')

const datosClinicoSchema = mongoose.Schema({
    estadioEnfermedad:{
        type: String,
        required:false
    },
    fechaIngresoUnidad:{
        type: String,
        required:false
    },
    telefono:{
        type: String,
        required:false
    },
    quimioterapia:{
        type: String,
        required:false
    },
    cicloNo:{
        type: String,
        required:false
    }
})

module.exports = mongoose.model('datosClinicos', datosClinicoSchema);